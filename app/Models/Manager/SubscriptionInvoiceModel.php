<?php

namespace App\Models\Manager;

use App\Models\Helpers\ManagerModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionInvoiceModel extends ManagerModelHelper
{
    use HasFactory;

    protected $table = 'subscription_invoices';
    protected $fillable = [
        'tenancy_id',
        'payment_gateway_log_id',
        'subscription_id',
        'subscription_price_id',
        'price',
        'period',
        'currency_code',
        'pending_pdf_id',
        'paid_pdf_id',
        'status',
        'paid',
        'paid_date',
        'due_date',
        'payment_method',
    ];

    protected $casts = [
        'tenancy_id' => 'integer',
        'payment_gateway_log_id' => 'integer',
        'subscription_id' => 'integer',
        'subscription_price_id' => 'integer',
        'currency_id' => 'integer',
        'pending_pdf_id' => 'integer',
        'paid_pdf_id' => 'integer',
        'paid' => 'boolean',
        'paid_date' => 'datetime',
        'due_date' => 'datetime',
        'period' => 'string',
        'payment_method' => 'string',
        'price' => 'integer',
        'status' => 'boolean',
    ];

    public $timestamps = true;

    public function tenancy()
    {
        return $this->belongsTo(TenancyModel::class, 'tenancy_id');
    }
    public function paymentGatewayLog()
    {
        return $this->belongsTo(PaymentGatewayLogModel::class, 'payment_gateway_log_id');
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
        return $this->belongsTo(CurrencyModel::class, 'currency_id');
    }

    public function pendingPdf()
    {
        return $this->belongsTo(PdfModel::class, 'pending_pdf_id');
    }

    public function paidPdf()
    {
        return $this->belongsTo(PdfModel::class, 'paid_pdf_id');
    }
}
