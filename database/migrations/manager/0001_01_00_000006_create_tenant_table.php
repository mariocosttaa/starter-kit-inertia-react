<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tenant', function (Blueprint $table) {
            $table->id()->startingValue(10000);
            $table->string('name');
            $table->string('slug')->unique()->index();
            $table->foreignId('subscription_id')->constrained('subscriptions')->onDelete('cascade')->name('tenants_subscription_id_foreign');
            $table->foreignId('subscription_price_id')->constrained('subscription_prices')->onDelete('cascade')->name('tenants_subscription_price_id_foreign');
            $table->datetime('payment_date')->nullable();
            $table->datetime('expiration_date')->nullable();

            $table->foreignId('owner_user_id')
                ->constrained('users')
                ->onDelete('cascade')
                ->index()
                ->name('tenants_user_id_foreign');


            $table->boolean('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
};
