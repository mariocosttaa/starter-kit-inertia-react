<?php

namespace App\Models\Manager;

use App\CustomCache\CustomCacheAction;
use App\Models\Helpers\ManagerModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Log;

class SubscriptionBillingAddressModel extends ManagerModelHelper
{
    use HasFactory;

    protected $table = 'subscription_billing_address';

    protected $fillable = [
        'user_id',
        'name',
        'surname',
        'phone_code',
        'phone',
        'country_id',
        'address',
        'city',
        'state',
        'zip_code',
        'default',
    ];

    protected $casts = [
        'phone_code' => 'integer',
        'default' => 'boolean',
    ];

    public $timestamps = true;

    protected $invalidate_cache_tags = [
        'auth-user',
        'users',
        'countries',
    ];

    public function country()
    {
        return $this->belongsTo(CountryModel::class, 'country_id');
    }

}
