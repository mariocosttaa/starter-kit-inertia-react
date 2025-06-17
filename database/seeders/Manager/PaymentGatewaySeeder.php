<?php

namespace Database\Seeders\Manager;

use App\Models\Manager\CountryModel;
use App\Models\Manager\PaymentGatewayModel;
use App\Models\Manager\UserModel;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class PaymentGatewaySeeder extends Seeder
{
    public function run(): void
    {

        //stripe
        PaymentGatewayModel::create([
            'name' => 'Stripe',
            'slug' => 'stripe',
            'keys_in_env' => true,
            'status' => true
        ]);

    }
}
