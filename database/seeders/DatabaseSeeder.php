<?php

namespace Database\Seeders;

use App\Models\Manager\SubscriptionFeature;
use Database\Seeders\Manager\CountrySeeder;
use Database\Seeders\Manager\CurrencySeeder;
use Database\Seeders\Manager\SubscriptionFeatureSeeder;
use Database\Seeders\Manager\SubscriptionPriceSeeder;
use Database\Seeders\Manager\SubscriptionSeeder;
use Database\Seeders\Manager\UserSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CountrySeeder::class,
            UserSeeder::class,
            CurrencySeeder::class,
            SubscriptionSeeder::class,
            SubscriptionPriceSeeder::class,
            SubscriptionFeatureSeeder::class
        ]);
    }
}
