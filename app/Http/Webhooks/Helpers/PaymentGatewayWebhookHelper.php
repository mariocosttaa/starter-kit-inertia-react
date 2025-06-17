<?php


namespace App\Http\Webhooks\Helpers;

use App\CustomCache\CustomCacheAction;
use App\Models\Manager\PaymentGatewayLogModel;
use Exception;

abstract class PaymentGatewayWebhookHelper
{
    protected ?bool $managerConection;
    protected ?bool $tenancyConnection;
    protected string $gatewaySlug;
    protected string $cacheTag = 'payment-gateway-logs-helper-abstract';
    protected int $cacheDuration = 84000;


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
