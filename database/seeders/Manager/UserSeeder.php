<?php

namespace Database\Seeders\Manager;

use App\Models\Manager\CountryModel;
use App\Models\Manager\UserModel;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {

        if (UserModel::where('email', 'admin@example.com')->exists()) {
            return;
        }

        UserModel::create([
            'name' => 'Admin',
            'surname' => '',
            'email' => 'admin@example.com',
            'language' => 'en',
            'password' => Hash::make('12345678'),
            'login_google' => false,
            'country_id' => CountryModel::where('code', 'AO')->first()->id,
        ]);
    }
}
