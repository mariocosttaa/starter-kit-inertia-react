<?php

namespace App\Models\Manager;

use App\Models\Helpers\UserModelHelper;
use App\Models\Manager\CountryModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Log;

class UserModel extends UserModelHelper
{

    use HasFactory, Notifiable;

    protected $table = 'users';

    protected $fillable = [
        'name',
        'surname',
        'email',
        'language',
        'login_google',
        'birthday',
        'image',
        'country_id',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'birthday' => 'date',
        'login_google' => 'boolean',
        'login_vatsim' => 'boolean',
        'login_ivao' => 'boolean',
    ];


    public function getNamesAttribute() {
        return $this->name . ' ' . $this->surname;
    }

    public function country()
    {
        return $this->belongsTo(CountryModel::class, 'country_id');
    }

    public function billingAddresses()
    {
        return $this->hasMany(SubscriptionBillingAddressModel::class, 'user_id');
    }

}
