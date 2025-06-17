<?php

namespace App\PaymentGateway\Helpers;

use App\CustomCache\CustomCacheAction;
use App\Models\Manager\PaymentGatewayLogModel;
use Exception;

abstract class PaymentGatewayHelper
{
    protected ?bool $managerConection;
    protected ?bool $tenancyConnection;
    protected string $gatewaySlug;
    protected string $cacheTag = 'payment-gateway-logs-helper-abstract';
    protected int $cacheDuration = 84000;

    public function saveLog(
        string $type,
        ?bool $status = true,
        ?string $subscription_id = null,
        ?string $subscription_price_id = null,
        ?int $user_id = null,
        ?string $customer_email = null,
        ?string $gateway_product_id = null,
        ?string $gateway_price_id = null,
        ?string $gateway_customer_id = null,
        ?string $gateway_payment_id = null,
        ?string $gateway_client_secret = null,
        ?string $gateway_session_url = null,
        ?string $webhook_secret_key = null,
    ): void
    {
        if ($this->managerConection) {
            PaymentGatewayLogModel::create([
                'gateway_slug' => $this->gatewaySlug,
                'type' => $type,
                'status' => $status,
                'subscription_id' => $subscription_id,
                'subscription_price_id' => $subscription_price_id,
                'user_id' => $user_id,
                'customer_email' => $customer_email,
                'gateway_product_id' => $gateway_product_id,
                'gateway_price_id' => $gateway_price_id,
                'gateway_customer_id' => $gateway_customer_id,
                'gateway_payment_id' => $gateway_payment_id,
                'gateway_client_secret' => $gateway_client_secret,
                'gateway_session_url' => $gateway_session_url,
                'webhook_secret_key' => $webhook_secret_key,
            ]);
            CustomCacheAction::invalidateTag($this->cacheTag);
        } else {
            throw new Exception('PaymenteGatewayManager LogHelper, Connection not configurated');
        }
    }

    public function updateLog(
        array $whereKeysAndValues,
        array $values,
    ): void
    {
        if ($this->managerConection) {

            $query = PaymentGatewayLogModel::where('gateway_slug', $this->gatewaySlug);
            foreach ($whereKeysAndValues as $key => $value) {
                $query->where($key, $value);
            }

            $query->update($values);

        } else {
            throw new Exception('PaymenteGatewayManager LogHelper, Connection not configurated');
        }
    }

    public function getLog(array $criteria): ?PaymentGatewayLogModel
    {
        if ($this->managerConection) {

            $cacheKey = md5(serialize($criteria)) . '-get-log';

            return CustomCacheAction::remember($cacheKey, $this->cacheTag, $this->cacheDuration, function () use ($criteria) {

                $query = PaymentGatewayLogModel::where('gateway_slug', $this->gatewaySlug);

                foreach ($criteria as $key => $value) {
                    $query->where($key, $value)->orderBy('id', 'desc');
                }

                return $query->first() ?? null;
            });
        } else {
            throw new Exception('PaymenteGatewayManager LogHelper, Connection not configurated');
        }
    }

}
