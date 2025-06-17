<?php

namespace App\Http\Webhooks\PaymentGateway\Stripe\Manager;

use App\Http\Webhooks\Helpers\PaymentGatewayWebhookHelper;
use App\Models\Manager\PaymentGatewayLogModel;
use Illuminate\Support\Facades\Log;
use Stripe\Stripe;
use Stripe\Event as StripeEvent;
use Stripe\Webhook;
use Stripe\Exception\SignatureVerificationException;

// Event Handlers
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripePaymentIntentSucceeded;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripePaymentIntentFailed;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripeInvoicePaymentSucceeded;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripeInvoicePaymentFailed;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripeSubscriptionUpdated;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripeSetupIntentSucceeded;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripeCheckoutSessionCompleted;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripeCheckoutSessionAsyncPaymentSucceeded;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripeInvoiceCreated;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripePaymentIntentCompleted;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripePaymentIntentRequiresAction;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripePaymentIntentCreated;
use App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events\StripePaymentIntentCanceled;

use Illuminate\Http\Request;

class StripeWebHookManager extends PaymentGatewayWebhookHelper
{

       public function __invoke(Request $request)
       {
           Log::info('Stripe WebHook Manager - Stripe Webhook Request Received');

            Stripe::setApiKey(env('PAYMENT_GATEWAY_STRIPE_SECRET_KEY'));

            $payload = $request->getContent();
            $sigHeader = $request->header('Stripe-Signature');

            $webhookSecret = $this->getSecretKey();

            if(!$webhookSecret) {
                Log::error("Stripe WebHook Manager Secret key not found");
                return response()->json(['error' => 'Invalid secret key'], 500);
            }

            try {

                $event = Webhook::constructEvent(
                    $payload, $sigHeader, $webhookSecret
                );

                 return $this->handleEvent($event);

            } catch (SignatureVerificationException $e) {
                Log::error("Stripe WebHook Manager Signature verification failed: " . $e->getMessage());
                return response()->json(['error' => 'Invalid signature'], 500);
            }

    }

    protected function handleEvent(StripeEvent $event)
    {
        try {
            switch ($event->type) {

                //Checkout Session
                case 'checkout.session.completed':
                    return StripeCheckoutSessionCompleted::handle($event);

                case 'checkout.session.async_payment_succeeded':
                    return StripeCheckoutSessionAsyncPaymentSucceeded::handle($event);

                //payment_intent
                case 'payment_intent.completed':
                    return StripePaymentIntentCompleted::handle($event);

                case 'payment_intent.requires_action':
                    return StripePaymentIntentRequiresAction::handle($event);

                case 'payment_intent.created':
                    return StripePaymentIntentCreated::handle($event);

                case 'payment_intent.succeeded':
                    return StripePaymentIntentSucceeded::handle($event);

                case 'payment_intent.payment_failed':
                    return StripePaymentIntentFailed::handle($event);

                case 'payment_intent.canceled':
                    return StripePaymentIntentCanceled::handle($event);

                //Invoice
                case 'invoice.created':
                    return StripeInvoiceCreated::handle($event);

                case 'invoice.payment_succeeded':
                    return StripeInvoicePaymentSucceeded::handle($event);

                case 'invoice.payment_failed':
                    return StripeInvoicePaymentFailed::handle($event);

                //customer
                case 'customer.subscription.updated':
                    return StripeSubscriptionUpdated::handle($event);

                default:
                    Log::info("Unhandled Stripe event type: {$event->type}");
                    return response()->json(['message' => 'Event received but not handled'], 200);
            }
        } catch (\Exception $e) {
            Log::error("Stripe WebHook Manager Error handling event {$event->type}: " . $e->getMessage(), [
                'event_id' => $event->id,
                'event_type' => $event->type,
                'event' => $event
            ]);
            return response()->json(['error' => 'Event processing failed'], 500);
        }
    }

    protected function getSecretKey(): ?string
    {
        $getSecretKey = PaymentGatewayLogModel::where('gateway_slug', 'stripe')
            ->where('type', 'webhook-created')
            ->where('status', true)
            ->select('webhook_secret_key')
            ->first();

        return $getSecretKey ? $getSecretKey->webhook_secret_key : null;
    }
}
