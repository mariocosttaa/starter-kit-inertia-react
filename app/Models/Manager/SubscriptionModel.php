<?php

namespace App\Models\Manager;

use App\Models\Helpers\ManagerModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Manager\SubscriptionPriceModel;
use App\Models\Manager\SubscriptionInvoiceModel;
use App\Models\Manager\SubscriptionFeatureModel;

class SubscriptionModel extends ManagerModelHelper
{
    use HasFactory;

    protected $table = 'subscriptions';

    protected $fillable = [
        'name',
        'slug',
        'description_en',
        'description_es',
        'description_fr',
        'description_pt',
        'level',
        'is_free',
        'mandatory_period',
        'status',
    ];

    protected $casts = [
        'level' => 'integer',
        'is_free' => 'boolean',
        'status' => 'boolean',
    ];

    protected $enumCasts = [
        'mandatory_period' => ['month', 'quarter', 'year'],
    ];

    public $timestamps = true;

    public function getDescriptionAttribute() {
        return match (app()->getLocale()) {
            'en' => $this->description_en,
            'es' => $this->description_es,
            'fr' => $this->description_fr,
            'pt' => $this->description_pt,
            default => $this->description_en,
        };
    }

    public function prices()
    {
        return $this->hasMany(SubscriptionPriceModel::class, 'subscription_id');
    }

    public function features()
    {
        return $this->hasMany(SubscriptionFeatureModel::class, 'subscription_id');
    }

    public function invoices()
    {
        return $this->hasMany(SubscriptionInvoiceModel::class, 'subscription_id');
    }

}
