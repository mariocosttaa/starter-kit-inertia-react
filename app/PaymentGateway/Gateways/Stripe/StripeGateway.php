<?php

namespace App\PaymentGateway\Gateways\Stripe;

use App\Actions\General\EasyHashAction;
use App\Models\Manager\SubscriptionModel;
use App\Models\Manager\SubscriptionPriceModel;
use App\PaymentGateway\Helpers\PaymentGatewayHelper;
use App\PaymentGateway\Interfaces\PaymentGatewayInterface;
use Exception;
use Stripe\Stripe;
use Stripe\Account as StripeAccount;
use Stripe\Customer as StripeCustomer;
use Stripe\WebhookEndpoint as StripeWebhookEndpoint;
use Stripe\PaymentIntent as StripePaymentIntent;
use Stripe\Subscription as StripeSubscription;
use Stripe\Product as StripeProduct;
use Stripe\Price as StripePrice;

class StripeGateway extends PaymentGatewayHelper implements PaymentGatewayInterface
{
    protected string $publicKey;
    protected string $secretKey;
    protected string $gatewaySlug = 'stripe';

    public function __construct(public ?bool $managerConection = false, public ?bool $tenantConection = true)
    {
        $this->managerConection = $managerConection;
        $this->tenantConection = $tenantConection;
        $stripeKeys = $this->getKeys();
        Stripe::setApiKey($stripeKeys->secret_key);
    }

    ### Configuração e Conexão

    public function getKeys(): ?object
    {
        if ($this->managerConection) {
            $this->publicKey = env('PAYMENT_GATEWAY_STRIPE_PUBLIC_KEY');
            $this->secretKey = env('PAYMENT_GATEWAY_STRIPE_SECRET_KEY');

        } elseif ($this->tenantConection) {
            throw new Exception('PaymentGateway Tenant Stripe, ApiKeys not Found');
        } else {
            throw new Exception('PaymentGateway Manager Stripe, Connection Type Undefined');
        }

        if (empty($this->publicKey) || empty($this->secretKey)) {
            throw new Exception('PaymentGateway Manager Stripe, ApiKeys not Found');
        }

        return (object) [
            'public_key' => $this->publicKey,
            'secret_key' => $this->secretKey,
        ];
    }

    public function tryConnect(): bool
    {
        try {
            StripeAccount::retrieve();
            return true;

        } catch (\Stripe\Exception\ApiErrorException $e) {
            return false;
        }
    }

    ### Webhooks

    public function createWebHooks(array|string|null $events = null, ?string $url = null, ?array $metadata = null): string
    {
        if ($this->managerConection) {
            $url = $url ?? route("payment-gateway-webhook-manager-{$this->gatewaySlug}");

        } elseif ($this->tenantConection) {
            throw new Exception('PaymentGateway Tenant Stripe, WebHook Url Not Configurated not Found');
        } else {
            throw new Exception('PaymentGateway Stripe, Connection and WebHook Url Not Configurated not Found');
        }

        try {
            // If $events is null, set to a focused list of payment, product, price, and subscription-related events
            if (is_null($events)) {
                $events = [
                    // Product events
                    'product.created',
                    'product.updated',
                    'product.deleted',
                    // Price events
                    'price.created',
                    'price.updated',
                    'price.deleted',
                    // Payment intent events
                    'payment_intent.created',
                    'payment_intent.succeeded',
                    'payment_intent.payment_failed',
                    'payment_intent.amount_capturable_updated',
                    'payment_intent.canceled',
                    'payment_intent.processing',
                    'payment_intent.requires_action',
                    // Additional payment-related events
                    'charge.succeeded',
                    'charge.failed',
                    'charge.refunded',
                    'charge.captured',
                    'charge.pending',
                    'charge.expired',
                    'charge.updated',
                    'payment_method.attached',
                    'payment_method.detached',
                    'payment_method.updated',
                    // Subscription-related events
                    'customer.subscription.created',
                    'customer.subscription.updated',
                    'customer.subscription.deleted',
                    'customer.subscription.trial_will_end',
                    'customer.subscription.pending_update_applied',
                    'customer.subscription.pending_update_expired',
                    'subscription_schedule.created',
                    'subscription_schedule.updated',
                    'subscription_schedule.canceled',
                    'subscription_schedule.completed',
                    'subscription_schedule.released',
                    'subscription_schedule.aborted',
                    'subscription_schedule.expiring',
                    // Invoice events (relevant to subscriptions)
                    'invoice.created',
                    'invoice.finalized',
                    'invoice.paid',
                    'invoice.payment_succeeded',
                    'invoice.payment_failed',
                    'invoice.payment_action_required',
                    'invoice.upcoming',
                    'invoice.updated',
                    'invoice.voided',
                    'invoice.marked_uncollectible',
                    // Customer events (relevant to subscriptions)
                    'customer.created',
                    'customer.updated',
                    'customer.deleted',
                ];
            } else {
                $events = is_string($events) ? [$events] : $events;
            }

            $webhookData = [
                'url' => $url,
                'enabled_events' => $events,
            ];
            if ($metadata) {
                $webhookData['metadata'] = $metadata;
            }

            $webhook = StripeWebhookEndpoint::create($webhookData);
            $this->saveLog(type: 'webhook-created', gateway_product_id: $webhook->id, webhook_secret_key: $webhook->secret, status: true);
            return $webhook->id;

        } catch (\Stripe\Exception\ApiErrorException $e) {
            throw new Exception("Erro ao criar webhook: " . $e->getMessage());
        }
    }

    ### Pagamentos

    public function createPayment(int $amount, string $currency, ?array $paymentMethod = null, ?array $metadata = null): array
    {
        try {
            $options = [
                'amount' => $amount,
                'currency' => $currency,
                'payment_method_types' => $paymentMethod['types'] ?? ['card'],
            ];
            if (isset($paymentMethod['id'])) {
                $options['payment_method'] = $paymentMethod['id'];
                $options['confirm'] = true;
            }
            if ($metadata) {
                $options['metadata'] = $metadata;
            }
            $paymentIntent = StripePaymentIntent::create($options);
            $this->saveLog(type: 'payment-created', status: true, gateway_payment_id: $paymentIntent->id);
            return [
                'client_secret' => $paymentIntent->client_secret,
                'payment_intent_id' => $paymentIntent->id,
                'status' => $paymentIntent->status,
            ];
        } catch (\Stripe\Exception\ApiErrorException $e) {
            throw new Exception("Erro ao criar pagamento: " . $e->getMessage());
        }
    }

    ### Subscrições
    public function startCustomerSubscriptionSession(int $localProductId, int $localPriceId, string $customerEmail, string $routeSuccess, string $routeCancel, ?int $userId = null, ?array $metadata = null): string
    {


        try {
            // Set webhook if not created
            $this->checkOrCreateWebhook();

            // Get or create Customer ID
            $customerId = $this->getOrCreateCustomer($customerEmail, $userId, $metadata);

            // Get Price ID or create it
            $priceId = $this->getPriceIdOrCreate($localProductId, $localPriceId);

            // Check if there's an existing active subscription
            $existingSubscription = $this->getLog([
                'type' => 'create-subscription-checkout-session',
                'subscription_id' => $localProductId,
                'subscription_price_id' => $localPriceId,
                'gateway_price_id' => $priceId,
                'gateway_customer_id' => $customerId,
                'customer_email' => $customerEmail,
                'status' => true,
            ]);

            if ($existingSubscription) {
                return $existingSubscription->gateway_session_url;
            }

            // Create a Checkout Session for the subscription
            $checkoutSessionData = [
                'customer' => $customerId,
                'mode' => 'subscription',
                'line_items' => [
                    [
                        'price' => $priceId,
                        'quantity' => 1,
                    ],
                ],
                'success_url' => $routeSuccess, // Replace with your success route
                'cancel_url' => $routeCancel, // Replace with your cancel route
                'payment_method_types' => ['card'], // Add desired payment methods
                'billing_address_collection' => 'auto',
                'subscription_data' => [
                    'metadata' => array_merge([
                        'local_product_id' => EasyHashAction::encode($localProductId, 'payment-gateway-local-product-id'),
                        'local_price_id' => EasyHashAction::encode($localPriceId, 'payment-gateway-local-price-id'),
                    ], $metadata ?? []),
                ],
                // Prevent automatic email notifications
                //'customer_email' => $customerEmail, // Set email explicitly to avoid automatic emails
                'automatic_tax' => ['enabled' => false], // Disable if not using Stripe Tax
            ];

            // Create the Checkout Session
            $checkoutSession = \Stripe\Checkout\Session::create($checkoutSessionData);

            // Save log for the Checkout Session
            $this->saveLog(
                type: 'create-subscription-checkout-session',
                subscription_id: $localProductId,
                subscription_price_id: $localPriceId,
                customer_email: $customerEmail,
                gateway_customer_id: $customerId,
                gateway_product_id: $checkoutSession->id, // Log the session ID temporarily
                gateway_price_id: $priceId,
                gateway_client_secret: $checkoutSession->id, // Use session ID as identifier
                gateway_session_url: $checkoutSession->url,
                status: true
            );

            return $checkoutSession->url;

        } catch (\Stripe\Exception\ApiErrorException $e) {
            throw new Exception("Erro ao iniciar subscrição: " . $e->getMessage());
        }
    }

    public function deleteSubscription(string $subscriptionId): bool
    {
        try {
            $subscription = StripeSubscription::retrieve($subscriptionId);
            $subscription->cancel(['at_period_end' => false]);

            $this->saveLog(
                type: 'subscription-delete',
                gateway_product_id: $subscriptionId,
                status: true
            );

            return true;

        } catch (\Stripe\Exception\ApiErrorException $e) {
            throw new Exception("Erro ao deletar subscrição: " . $e->getMessage());
        }
    }

    public function cancelCustomerSubscription(string $subscriptionId): bool
    {
        try {
            $subscription = StripeSubscription::retrieve($subscriptionId);
            $subscription->cancel(['at_period_end' => true]);

            $this->saveLog(type: 'subscription-cancel', gateway_product_id: $subscriptionId, status: true);
            return true;
        } catch (\Stripe\Exception\ApiErrorException $e) {
            throw new Exception("Erro ao cancelar subscrição do cliente: " . $e->getMessage());
        }
    }

    public function updateSubscriptionNextPaymentDate(string $subscriptionId, int $newTimestamp): bool
    {
        try {
            StripeSubscription::update($subscriptionId, [
                'billing_cycle_anchor' => $newTimestamp,
            ]);
            $this->saveLog(type: 'subscription-update', gateway_product_id: $subscriptionId, status: true);
            return true;
        } catch (\Stripe\Exception\ApiErrorException $e) {
            throw new Exception("Erro ao atualizar data do próximo pagamento: " . $e->getMessage());
        }
    }

    ### Produtos e Preços

    public function createProduct(int $localProductId, string $name, ?array $images = null, ?array $metadata = null): string
    {
        try {

            $productData = ['name' => $name];
            if ($images) {
                $productData['images'] = $images;
            }

            $productData['metadata'] = array_merge([
                'local_product_id' => EasyHashAction::encode($localProductId, 'payment-gateway-local-product-id')
            ], $metadata ?? []);


            $product = StripeProduct::create($productData);

            $this->saveLog(
                type: 'product-created',
                subscription_id: $localProductId,
                gateway_product_id: $product->id,
                status: true
            );

            return $product->id;

        } catch (\Stripe\Exception\ApiErrorException $e) {
            throw new Exception("Erro ao criar produto: " . $e->getMessage());
        }
    }

    public function createPrice(
        int $localProductId,
        int $localPriceId,
        int $amount,
        string $currency = 'eur',
        string $interval = 'month',
        int $intervalCount = 1,
        ?array $metadata = null
    ): string
    {
        try {

            //get from logs or create Product in gateway
            $productId = $this->getProductIdOrCreate($localProductId);

            $priceData = [
                'product' => $productId,
                'unit_amount' => $amount,
                'currency' => $currency,
                'recurring' => [
                    'interval' => $interval,
                    'interval_count' => $intervalCount,
                ],
            ];

            $priceData['metadata'] = array_merge([
                'local_price_id' => EasyHashAction::encode($localPriceId, 'payment-gateway-local-price-id')
            ],  $metadata ?? []);

            $price = StripePrice::create($priceData);

            $this->saveLog(
                type: 'price-created',
                subscription_id: $localProductId,
                subscription_price_id: $localPriceId,
                gateway_price_id: $price->id,
                gateway_product_id: $productId,
                status: true
            );

            return $price->id;
        } catch (\Stripe\Exception\ApiErrorException $e) {
            throw new Exception("Erro ao criar preço: " . $e->getMessage());
        }
    }





    ### Métodos Auxiliares

    protected function getOrCreateCustomer(string $customerEmail, ?int $userId = null, ?array $metadata = null): string
    {
        $log = $this->getLog(['type' => 'customer-info', 'customer_email' => $customerEmail, 'user_id' => $userId]);
        if ($log?->gateway_customer_id) {
            return $log->gateway_customer_id;
        }

        $customerData = ['email' => $customerEmail];
        if ($metadata) {
            $customerData['metadata'] = $metadata;
        }

        $customerId = StripeCustomer::create($customerData)->id;

        $this->saveLog(
            type: 'customer-info',
            customer_email: $customerEmail,
            gateway_customer_id: $customerId,
            user_id: $userId,
            status: true
        );
        return $customerId;
    }








    protected function checkOrCreateWebhook(): void
    {
        $log = $this->getLog(['type' => 'webhook-created']);

        if ($log) {
            return;
        }

        $this->createWebHooks();
    }


    protected function getProductIdOrCreate(int $localProductId): string  {

        $log = $this->getLog([
            'type' => 'product-created',
            'subscription_id' => $localProductId
        ]);

        //found in logs
        if($log && isset($log->gateway_product_id) && !empty($log->gateway_product_id)) {
            //found logs
            return $log->gateway_product_id;

        } else {
            $product = SubscriptionModel::where('id', $localProductId)->first();
            if($product) {
                return  $this->createProduct($localProductId, $product->name);
            } else {
                throw new Exception('Stripe PaymentGateway Creating Price, Price Id Not found, and try create. On creating Price, Local Product Id is not found.');
            }
        }

    }

    protected function getPriceIdOrCreate(int $localProductId, int $localPriceId): string
    {

        //prevent from erros, ensure StripeProduct are created
        $this->getProductIdOrCreate($localProductId);

        //get logs
        $log = $this->getLog( [
            'type' => 'price-created',
            'subscription_id' => $localProductId,
            'subscription_price_id' => $localPriceId
        ]);

        //if found gateway_price_id retur
        if($log && isset($log->gateway_price_id) && !empty($log->gateway_price_id)) {
            return $log->gateway_price_id;

        } else {

            $productPrice = SubscriptionPriceModel::with('currency')->where('id', $localPriceId)->first();
            if($productPrice) {
                return $this->createPrice($localProductId, $localPriceId, $productPrice->value,$productPrice->currency->code);

            } else {
                throw new Exception('Stripe PaymentGateway Creating Price, Price Id Not found, and try create. On creating Price, Local Product Id is not found.');
            }

        }

    }
}
