<?php

namespace Database\Seeders\Manager;

use App\Models\Manager\CurrencyModel;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Euro
        CurrencyModel::create([
            'name' => 'Euro',
            'code' => 'eur',
            'symbol' => '€',
            'symbol_2' => 'EUR',
            'decimal_separator' => 2,
        ]);

        // Dollar
        CurrencyModel::create([
            'name' => 'Dollar',
            'code' => 'usd',
            'symbol' => '$',
            'symbol_2' => 'USD',
            'decimal_separator' => 2,
        ]);

        // Real
        CurrencyModel::create([
            'name' => 'Real',
            'code' => 'brl',
            'symbol' => 'R$',
            'symbol_2' => 'BRL',
            'decimal_separator' => 2,
        ]);

        // Kwanza Angolano
        CurrencyModel::create([
            'name' => 'Kwanza',
            'code' => 'aoa',
            'symbol' => 'Kz',
            'symbol_2' => 'AOA',
            'decimal_separator' => 3,
        ]);

    }
}
