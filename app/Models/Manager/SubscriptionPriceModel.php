<?php

namespace App\Models\Manager;

use App\Actions\General\MoneyAction;
use App\Models\Helpers\ManagerModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionPriceModel extends ManagerModelHelper
{
    use HasFactory;

    protected $table = 'subscription_prices';

    protected $fillable = [
        'subscription_id',
        'value',
        'comparative_value',
        'currency_id',
        'decimal_separator',
        'period',
        'is_default',
        'status',
    ];

    protected $casts = [
        'is_default' => 'boolean',
        'value' => 'integer',
        'decimal_separator' => 'integer',
        'status' => 'boolean',
    ];

    public $timestamps = true;

    public function currency()
    {
        return $this->belongsTo(CurrencyModel::class, 'currency_code', 'code');
    }

    protected function getValueFormattedAttribute(): string
    {
        return MoneyAction::format(
            amount: $this->value,
            decimalPlaces: $this->currency->decimal_separator,
            currency: $this->currency->code,
            formatWithSymbol: true,
        );
    }

    protected function getComparativeValueFormattedAttribute(): string
    {
        return MoneyAction::format(
            amount: $this->comparative_value,
            decimalPlaces: $this->currency->decimal_separator,
            currency: $this->currency->code,
            formatWithSymbol: true,
        );
    }

    public function invoices()
    {
        return $this->hasMany(SubscriptionInvoiceModel::class, 'subscription_price_id');
    }

    public function paymentGatewayLogs()
    {
        return $this->hasMany(PaymentGatewayLogModel::class, 'subscription_price_id');
    }
}
