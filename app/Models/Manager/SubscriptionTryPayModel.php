<?php

namespace App\Models\Manager;

use App\Models\Helpers\ManagerModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SubscriptionTryPayModel extends ManagerModelHelper
{
    use HasFactory;

    protected $table = 'subscription_try_pay';

    protected $fillable = [
        'user_id',
        'tenant_id',
        'subscription_id',
        'subscription_price_id',
        'price',
        'period',
        'currency_code',
        'name',
        'surname',
        'email',
        'phone',
        'address',
        'city',
        'state',
        'zip_code',
        'country_id',
        'paid_after',
        'paid_after_date'
    ];

    protected $casts = [
        'user_id' => 'integer',
        'tenant_id' => 'integer',
        'subscription_id' => 'integer',
        'subscription_price_id' => 'integer',
        'price' => 'integer',
        'country_id' => 'integer',
        'paid_after' => 'boolean',
        'paid_after_date' => 'datetime'
    ];

    public $timestamps = true;


    public function user()
    {
        return $this->belongsTo(UserModel::class, 'user_id');
    }
    public function tenant(): BelongsTo
    {
        return $this->belongsTo(TenantModel::class, 'tenant_id');
    }
    public function subscription()
    {
        return $this->belongsTo(SubscriptionModel::class, 'subscription_id');
    }
    public function subscriptionPrice()
    {
        return $this->belongsTo(SubscriptionPriceModel::class, 'subscription_price_id');
    }

    public function currency()
    {
        return $this->belongsTo(CurrencyModel::class, 'currency_code', 'code');
    }
    public function country()
    {
        return $this->belongsTo(CountryModel::class);
    }
}
