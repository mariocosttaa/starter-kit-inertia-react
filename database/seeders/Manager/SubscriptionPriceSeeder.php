<?php

namespace Database\Seeders\Manager;

use App\Models\Manager\CurrencyModel;
use App\Models\Manager\SubscriptionModel;
use App\Models\Manager\SubscriptionPriceModel;
use Illuminate\Database\Seeder;

class SubscriptionPriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get subscription IDs
        $basicId = SubscriptionModel::where('slug', 'basic')->first()->id;
        $mediumId = SubscriptionModel::where('slug', 'medium')->first()->id;
        $premiumId = SubscriptionModel::where('slug', 'premium')->first()->id;

        // Get currency IDs and decimal separators
        $currencies = [
            'eur' => ['decimal_separator' => '2'],
            'usd' => ['decimal_separator' => '2'],
            'brl' => ['decimal_separator' => '2'],
            'aoa' => ['decimal_separator' => '3']
        ];

        // Seed prices
        $this->seedBasicPlanPrices($basicId, $currencies);
        $this->seedMediumPlanPrices($mediumId, $currencies);
        $this->seedPremiumPlanPrices($premiumId, $currencies);
    }

    /**
     * Seed Basic Plan prices for month and year in all currencies.
     */
    private function seedBasicPlanPrices(int $basicId, array $currencies): void
    {
        // Prices for each currency (value and comparative_value in cents/centavos)
        $prices = [
            'eur' => [
                'month' => ['value' => 1599, 'comparative_value' => 1889],
                'year' => ['value' => 19188, 'comparative_value' => 22899]
            ],
            'usd' => [
                'month' => ['value' => 1699, 'comparative_value' => 1999],
                'year' => ['value' => 20388, 'comparative_value' => 23999]
            ],
            'brl' => [
                'month' => ['value' => 7990, 'comparative_value' => 9490],
                'year' => ['value' => 95880, 'comparative_value' => 113880]
            ],
            'aoa' => [
                'month' => ['value' => 13500000, 'comparative_value' => 16000000],
                'year' => ['value' => 162000000, 'comparative_value' => 192000000]
            ]
        ];

        foreach ($prices as $code => $periods) {
            foreach ($periods as $period => $price) {
                SubscriptionPriceModel::create([
                    'subscription_id' => $basicId,
                    'value' => $price['value'],
                    'comparative_value' => $price['comparative_value'],
                    'currency_code' => $code,
                    'decimal_separator' => $currencies[$code]['decimal_separator'],
                    'period' => $period,
                    'is_default' => true,
                    'status' => true,
                ]);
            }
        }
    }

    /**
     * Seed Medium Plan prices for month and year in all currencies.
     */
    private function seedMediumPlanPrices(int $mediumId, array $currencies): void
    {
        // Prices for each currency (value and comparative_value in cents/centavos)
        $prices = [
            'eur' => [
                'month' => ['value' => 3499, 'comparative_value' => 3600],
                'year' => ['value' => 31491, 'comparative_value' => 41988]
            ],
            'usd' => [
                'month' => ['value' => 3699, 'comparative_value' => 3800],
                'year' => ['value' => 33291, 'comparative_value' => 45600]
            ],
            'brl' => [
                'month' => ['value' => 17490, 'comparative_value' => 18000],
                'year' => ['value' => 157410, 'comparative_value' => 216000]
            ],
            'aoa' => [
                'month' => ['value' => 29700000, 'comparative_value' => 30600000],
                'year' => ['value' => 267300000, 'comparative_value' => 367200000]
            ]
        ];

        foreach ($prices as $code => $periods) {
            foreach ($periods as $period => $price) {
                SubscriptionPriceModel::create([
                    'subscription_id' => $mediumId,
                    'value' => $price['value'],
                    'comparative_value' => $price['comparative_value'],
                    'currency_code' => $code,
                    'decimal_separator' => $currencies[$code]['decimal_separator'],
                    'period' => $period,
                    'is_default' => true,
                    'status' => true,
                ]);
            }
        }
    }

    /**
     * Seed Premium Plan prices for month and year in all currencies.
     */
    private function seedPremiumPlanPrices(int $premiumId, array $currencies): void
    {
        // Prices for each currency (value and comparative_value in cents/centavos)
        $prices = [
            'eur' => [
                'month' => ['value' => 6999, 'comparative_value' => 7200],
                'year' => ['value' => 62991, 'comparative_value' => 83988]
            ],
            'usd' => [
                'month' => ['value' => 7399, 'comparative_value' => 7600],
                'year' => ['value' => 66591, 'comparative_value' => 91200]
            ],
            'brl' => [
                'month' => ['value' => 34990, 'comparative_value' => 36000],
                'year' => ['value' => 314910, 'comparative_value' => 432000]
            ],
            'aoa' => [
                'month' => ['value' => 59400000, 'comparative_value' => 61200000],
                'year' => ['value' => 534600000, 'comparative_value' => 734400000]
            ]
        ];

        foreach ($prices as $code => $periods) {
            foreach ($periods as $period => $price) {
                SubscriptionPriceModel::create([
                    'subscription_id' => $premiumId,
                    'value' => $price['value'],
                    'comparative_value' => $price['comparative_value'],
                    'currency_code' => $code,
                    'decimal_separator' => $currencies[$code]['decimal_separator'],
                    'is_default' => true,
                    'period' => $period,
                    'status' => true,
                ]);
            }
        }
    }
}
