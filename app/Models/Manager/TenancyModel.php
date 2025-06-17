<?php

namespace App\Models\Manager;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class TenancyModel extends Model
{
    use HasFactory;

    protected $table = 'tenancys';

    protected $fillable = [
        'name',
        'slug',
        'subscription_id',
        'subscription_price_id',
        'payment_date',
        'expiration_date',
        'owner_user_id',
        'status',
    ];

    protected $casts = [
        'payment_date' => 'datetime',
        'expiration_date' => 'datetime',
        'status' => 'boolean',
    ];

    public function subscription()
    {
        return $this->belongsTo(SubscriptionModel::class, 'subscription_id');
    }

    public function subscriptionPrice()
    {
        return $this->belongsTo(SubscriptionPriceModel::class, 'subscription_price_id');
    }

    public function ownerUser()
    {
        return $this->belongsTo(UserModel::class, 'owner_user_id');
    }


}