<?php

namespace App\PaymentGateway\Gateways;

use App\PaymentGateway\Gateways\Stripe\StripeGateway;
use App\PaymentGateway\Interfaces\PaymentGatewayInterface;

class GatewayManager implements PaymentGatewayInterface
{
    public function __construct(
        public bool $managerConection = false,
        public bool $tenantConection = true,
        public ?string $gatewaySlug = null
    ) {
        // Define o gateway padrão como 'stripe' se nenhum for especificado
        $this->gatewaySlug = match ($this->gatewaySlug) {
            'stripe', 'paypal' => $this->gatewaySlug,
            default => 'stripe',
        };
    }

    public function getKeys(): ?object
    {
        return match ($this->gatewaySlug) {
            'stripe' => (new StripeGateway($this->managerConection, $this->tenantConection))->getKeys(),
            default => (new StripeGateway($this->managerConection, $this->tenantConection))->getKeys(),
        };
    }

    public function tryConnect(): bool
    {
        return match ($this->gatewaySlug) {
            'stripe' => (new StripeGateway($this->managerConection, $this->tenantConection))->tryConnect(),
            default => (new StripeGateway($this->managerConection, $this->tenantConection))->tryConnect(),
        };
    }

    public function createWebHooks(array|string|null $events = null, ?string $url = null, ?array $metadata = null): string
    {
        return match ($this->gatewaySlug) {
            'stripe' => (new StripeGateway($this->managerConection, $this->tenantConection))->createWebHooks($events, $url, $metadata),
            default => (new StripeGateway($this->managerConection, $this->tenantConection))->createWebHooks($events, $url, $metadata),
        };
    }

    public function createPayment(int $amount, string $currency, ?array $paymentMethod = null, ?array $metadata = null): array
    {
        return match ($this->gatewaySlug) {
            'stripe' => (new StripeGateway($this->managerConection, $this->tenantConection))->createPayment($amount, $currency, $paymentMethod, $metadata),
            default => (new StripeGateway($this->managerConection, $this->tenantConection))->createPayment($amount, $currency, $paymentMethod, $metadata),
        };
    }

    public function startCustomerSubscriptionSession(int $localProductId, int $localProductPrice, string $customerEmail, string $routeSuccess, string $routeCancel, ?int $userId = null, ?array $metadata = null): string
    {

        return match ($this->gatewaySlug) {
            'stripe' => (new StripeGateway($this->managerConection, $this->tenantConection))->startCustomerSubscriptionSession($localProductId, $localProductPrice, $customerEmail, $routeSuccess, $routeCancel, $userId, $metadata),
             default => (new StripeGateway($this->managerConection, $this->tenantConection))->startCustomerSubscriptionSession($localProductId, $localProductPrice, $customerEmail, $routeSuccess, $routeCancel, $userId, $metadata)
        };

    }

    public function deleteSubscription(string $subscriptionId): bool
    {
        return match ($this->gatewaySlug) {
            'stripe' => (new StripeGateway($this->managerConection, $this->tenantConection))->deleteSubscription($subscriptionId),
            default => (new StripeGateway($this->managerConection, $this->tenantConection))->deleteSubscription($subscriptionId),
        };
    }

    public function cancelCustomerSubscription(string $subscriptionId): bool
    {
        return match ($this->gatewaySlug) {
            'stripe' => (new StripeGateway($this->managerConection, $this->tenantConection))->cancelCustomerSubscription($subscriptionId),
            default => (new StripeGateway($this->managerConection, $this->tenantConection))->cancelCustomerSubscription($subscriptionId),
        };
    }

    public function updateSubscriptionNextPaymentDate(string $subscriptionId, int $newTimestamp): bool
    {
        return match ($this->gatewaySlug) {
            'stripe' => (new StripeGateway($this->managerConection, $this->tenantConection))->updateSubscriptionNextPaymentDate($subscriptionId, $newTimestamp),
            default => (new StripeGateway($this->managerConection, $this->tenantConection))->updateSubscriptionNextPaymentDate($subscriptionId, $newTimestamp),
        };
    }

    public function createProduct(int $localProductId, string $name, ?array $images = null, ?array $metadata = null): string
    {
        return match ($this->gatewaySlug) {
            'stripe' => (new StripeGateway($this->managerConection, $this->tenantConection))->createProduct($localProductId, $name, $images, $metadata),
            default => (new StripeGateway($this->managerConection, $this->tenantConection))->createProduct($localProductId, $name, $images, $metadata),
        };
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
        return match ($this->gatewaySlug) {
            'stripe' => (new StripeGateway($this->managerConection, $this->tenantConection))->createPrice(
                $localProductId,
                $localPriceId,
                $amount,
                $currency,
                $interval,
                $intervalCount,
                $metadata
            ),
            default => (new StripeGateway($this->managerConection, $this->tenantConection))->createPrice(
                $localProductId,
                $localPriceId,
                $amount,
                $currency,
                $interval,
                $intervalCount,
                $metadata
            ),
        };
    }
}
