<?php

namespace App\Models\Manager;

use App\CustomCache\CustomCacheAction;
use App\Models\Helpers\ManagerModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CountryModel extends ManagerModelHelper
{
    use HasFactory;

    protected $table = 'countries';

    protected $fillable = [
        'name',
        'capital_city',
        'code',
        'calling_code',
    ];

    public $timestamps = false;

}
