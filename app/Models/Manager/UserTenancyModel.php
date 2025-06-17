<?php

namespace App\Models\Manager;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class UserTenancyModel extends Model
{
    use HasFactory;

    protected $table = 'user_tenancy';

    protected $fillable = [
        'user_id',
        'tenancy_id',
        'status',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'status' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function tenancy()
    {
        return $this->belongsTo(TenancyModel::class, 'tenancy_id');
    }

    public function user()
    {
        return $this->belongsTo(UserModel::class, 'user_id');
    }

}
