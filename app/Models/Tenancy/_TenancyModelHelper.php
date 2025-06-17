<?php

namespace App\Models\Tenancy;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

abstract class _TenancyModelHelper extends Model
{
    protected $baseTable;

    public function __construct(array $attributes = [])
    {
        // Define o nome base da tabela se não estiver definido
        if (!isset($this->baseTable)) {
            $this->baseTable = $this->getTable();
        }

        // Chama o construtor da classe pai
        parent::__construct($attributes);

        // Determina o Id
        if (config('tenancyId')) {
            $tenancyId = config('tenancyId');
        } elseif (Auth::check()) {
            $tenancyId = Auth::user()->tenancy_id;
        } else {
            $tenancyId = null;
        }

        // Ajusta o nome da tabela se houver tenancyId e o prefixo ainda não estiver presente
        if ($tenancyId && strpos($this->getTable(), $tenancyId . '_') !== 0) {
            $this->setTable($tenancyId . '_' . $this->baseTable);
        }
    }
}