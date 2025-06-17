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
        // create payment_gateway
        Schema::create('payment_gateway', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('slug')->unique()->index();
            $table->string('public_key');
            $table->string('secret_key');
            $table->boolean('keys_in_env')->default(false);
            $table->boolean('status')->default(true);
        });

        // create payment_gateway_logs
        Schema::create('payment_gateway_logs', function (Blueprint $table) {
            $table->id();
            $table->string('type')->nullable();

            $table->string('gateway_slug');
            $table->foreign('gateway_slug')
                ->references('gateway_slug')
                ->on('payment_gateway')
                ->onDelete('cascade')
                ->name('payment_gateway_logs_slug_foreign');

            $table->foreignId('subscription_id')
                ->nullable()
                ->constrained('subscriptions')
                ->onDelete('cascade')
                ->index()
                ->name('payment_gateway_logs_subscription_id_foreign');

            $table->foreignId('subscription_price_id')
                ->nullable()
                ->constrained('subscription_prices')
                ->onDelete('cascade')
                ->index()
                ->name('payment_gateway_logs_subscription_price_id_foreign');

            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->onDelete('cascade')
                ->index()
                ->name('payment_gateway_logs_user_id_foreign');

            $table->string('customer_email')->nullable();

            $table->string('gateway_product_id')->nullable();
            $table->string('gateway_price_id')->nullable();
            $table->string('gateway_customer_id')->nullable();
            $table->string('gateway_client_secret')->nullable();
            $table->string('gateway_session_url', 500)->nullable();
            $table->string('webhook_secret_key')->nullable();
            $table->boolean('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment_gateway');
        Schema::dropIfExists('payment_gateway_logs');
    }
};
