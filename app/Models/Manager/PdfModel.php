<?php

namespace App\Models\Manager;

use App\Models\Helpers\ManagerModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PdfModel extends ManagerModelHelper
{
    use HasFactory;

    protected $table = 'pdfs';

    protected $fillable = [
        'type',
        'name',
        'path',
        'link',
    ];

    protected $casts = [
        'type' => 'string',
    ];

    public function pendingInvoices()
    {
        return $this->hasMany(SubscriptionInvoiceModel::class, 'pending_pdf_id');
    }

    public function paidInvoices()
    {
        return $this->hasMany(SubscriptionInvoiceModel::class, 'paid_pdf_id');
    }
}
