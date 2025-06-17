<?php

namespace App\Models\Manager;

use App\Models\Helpers\ManagerModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentGatewayLogModel extends ManagerModelHelper
{
    use HasFactory;

    protected $table = 'payment_gateway_logs';

    protected $fillable = [
        'gateway_slug',
        'type',
        'subscription_id',
        'subscription_price_id',
        'user_id',
        'customer_email',
        'gateway_product_id',
        'gateway_price_id',
        'gateway_customer_id',
        'gateway_client_secret',
        'gateway_session_url',
        'webhook_secret_key',
        'status'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function paymentGateway()
    {
        return $this->belongsTo(PaymentGatewayModel::class, 'payment_gateway_id');
    }

    public function subscription()
    {
        return $this->belongsTo(SubscriptionModel::class, 'subscription_id');
    }

    public function subscriptionPrice()
    {
        return $this->belongsTo(SubscriptionPriceModel::class, 'subscription_price_id');
    }
}
