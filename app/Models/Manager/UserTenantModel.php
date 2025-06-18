<?php

namespace App\Models\Manager;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserTenantModel extends Model
{
    use HasFactory;

    protected $table = 'user_tenant';

    protected $fillable = [
        'user_id',
        'tenant_id',
        'status',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'status' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'user_id' => 'integer',
        'tenant_id' => 'integer',
    ];

    public function tenant(): BelongsTo
    {
        return $this->belongsTo(TenantModel::class, 'tenant_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(UserModel::class, 'user_id');
    }
}
