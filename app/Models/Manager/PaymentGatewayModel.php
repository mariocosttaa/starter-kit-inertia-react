<?php

namespace App\Models\Manager;

use App\Models\Helpers\ManagerModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentGatewayModel extends ManagerModelHelper
{
    use HasFactory;

    protected $table = 'payment_gateway';

    public $timestamps = false;

    protected $fillable = [
        'name',
        'slug',
        'public_key',
        'secret_key',
        'keys_in_env',
        'status',
    ];

    protected $casts = [
        'keys_in_env' => 'boolean',
        'status' => 'boolean',
    ];

    public function logs()
    {
        return $this->hasMany(PaymentGatewayLogModel::class, 'gateway_slug');
    }
}
