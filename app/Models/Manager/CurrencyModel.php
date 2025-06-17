<?php

namespace App\Models\Manager;

use App\Models\Helpers\ManagerModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurrencyModel extends ManagerModelHelper
{
    use HasFactory;

    protected $table = 'currencies';

    protected $fillable = [
        'name',
        'code',
        'symbol',
        'symbol_2',
        'decimal_separator',
    ];

    public $timestamps = false;

    public function subscriptionPrices()
    {
        return $this->hasMany(SubscriptionPriceModel::class, 'currency_id');
    }

    public function subscriptionInvoices()
    {
        return $this->hasMany(SubscriptionInvoiceModel::class, 'currency_id');
    }
}
