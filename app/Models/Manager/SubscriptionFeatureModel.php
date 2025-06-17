<?php

namespace App\Models\Manager;

use App\Models\Helpers\ManagerModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionFeatureModel extends ManagerModelHelper
{
    use HasFactory;

    protected $table = 'subscription_features';

    protected $fillable = [
        'type',
        'subscription_id',
        'order',
        'name_en',
        'name_es',
        'name_fr',
        'name_pt',
        'status'
    ];

    protected $casts = [
        'order' => 'integer',
        'status' => 'boolean',
    ];

    public $timestamps = true;

    public function getNameAttribute() {
        return match (app()->getLocale()) {
            'en' => $this->name_en,
            'es' => $this->name_es,
            'fr' => $this->name_fr,
            'pt' => $this->name_pt,
            default => $this->name_en,
        };
    }
}
