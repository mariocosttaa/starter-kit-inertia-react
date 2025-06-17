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
        // create subscriptions
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique()->index();
            $table->string('description_en', 900)->nullable();
            $table->string('description_es', 900)->nullable();
            $table->string('description_fr', 900)->nullable();
            $table->string('description_pt', 900)->nullable();
            $table->enum('level', ['1', '2', '3', '4', '5'])->default('1');
            $table->boolean('is_free')->default(true);
            $table->enum('mandatory_period', ['month', 'quarter', 'year'])->nullable();
            $table->boolean('status')->default(true);
            $table->timestamps();
        });

        // create subscription_prices
        Schema::create('subscription_prices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subscription_id');
            $table->integer('value')->default(0);
            $table->integer('comparative_value')->nullable();
            $table->string('currency_code');
            $table->integer('decimal_separator')->default(2);
            $table->enum('period', ['month', 'quarter', 'year']);
            $table->boolean('is_default')->default(false);
            $table->boolean('status')->default(true);
            $table->timestamps();
        });

        Schema::create('subscription_invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tenancy_id');
            $table->foreignId('payment_gateway_log_id')->nullable();
            $table->foreignId('subscription_id')->nullable();
            $table->foreignId('subscription_price_id')->nullable();
            $table->integer('price')->default(0);
            $table->enum('period', ['month', 'quarter', 'year']);
            $table->string('currency_code');
            $table->foreignId('pending_pdf_id')->nullable();
            $table->foreignId('paid_pdf_id')->nullable();
            $table->boolean('status')->default(true);
            $table->boolean('paid')->default(false);
            $table->datetime('paid_date')->nullable();
            $table->datetime('due_date')->nullable();
            $table->string('payment_method')->nullable();
            $table->timestamps();
        });

        Schema::create('subscription_features', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['have', 'not_have']);
            $table->foreignId('subscription_id');
            $table->integer('order');
            $table->string('name_en');
            $table->string('name_es')->nullable();
            $table->string('name_fr')->nullable();
            $table->string('name_pt')->nullable();
            $table->boolean('status')->default(true);
            $table->timestamps();
        });

        Schema::create('subscription_billing_address', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('name');
            $table->string('surname')->nullable();
            $table->integer('phone_code')->nullable();
            $table->string('phone')->nullable();
            $table->foreignId('country_id');
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip_code')->nullable();
            $table->boolean('default')->default(false);
            $table->timestamps();
        });

        Schema::create('subscription_try_pay', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('tenancy_id')->nullable();
            $table->foreignId('subscription_id')->nullable();
            $table->foreignId('subscription_price_id')->nullable();
            $table->integer('price')->default(0);
            $table->enum('period', ['month', 'quarter', 'year']);
            $table->string('currency_code');
            $table->string('name');
            $table->string('surname')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip_code')->nullable();
            $table->foreignId('country_id');
            $table->boolean('paid_after')->default(false);
            $table->datetime('paid_after_date')->nullable();
            $table->timestamps();
        });

        // Add foreign key constraints
        Schema::table('subscription_prices', function (Blueprint $table) {
            $table->foreign('subscription_id', 'subscription_prices_subscription_id_foreign_key')
                ->references('id')
                ->on('subscriptions')
                ->onDelete('cascade');

            $table->foreign('currency_code', 'subscription_prices_currency_code_foreign_key')
                ->references('code')
                ->on('currencies')
                ->onDelete('cascade');
        });

        Schema::table('subscription_invoices', function (Blueprint $table) {
            $table->foreign('tenancy_id', 'subscription_invoices_tenancy_id_foreign')
                ->references('id')
                ->on('tenancys')
                ->onDelete('cascade');

            $table->foreign('payment_gateway_log_id', 'subscription_invoices_payment_gateway_log_id_foreign')
                ->references('id')
                ->on('payment_gateway_logs')
                ->onDelete('cascade');

            $table->foreign('subscription_id', 'subscription_invoices_subscription_id_foreign')
                ->references('id')
                ->on('subscriptions')
                ->onDelete('cascade');

            $table->foreign('subscription_price_id', 'subscription_invoices_subscription_price_id_foreign')
                ->references('id')
                ->on('subscription_prices')
                ->onDelete('cascade');

            $table->foreign('currency_code', 'subscription_invoices_currency_code_foreign_key')
                ->references('code')
                ->on('currencies')
                ->onDelete('cascade');

            $table->foreign('pending_pdf_id', 'subscription_invoices_pending_pdf_id_foreign')
                ->references('id')
                ->on('pdfs')
                ->onDelete('cascade');

            $table->foreign('paid_pdf_id', 'subscription_invoices_paid_pdf_id_foreign')
                ->references('id')
                ->on('pdfs')
                ->onDelete('cascade');
        });

        Schema::table('subscription_features', function (Blueprint $table) {
            $table->foreign('subscription_id', 'subscription_features_subscription_id_foreign')
                ->references('id')
                ->on('subscriptions')
                ->onDelete('cascade');
        });

        Schema::table('subscription_billing_address', function (Blueprint $table) {
            $table->foreign('user_id', 'subscription_billing_address_user_id_foreign')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->foreign('country_id', 'subscription_billing_address_country_id_foreign')
                ->references('id')
                ->on('countries')
                ->onDelete('cascade');
        });

        Schema::table('subscription_try_pay', function (Blueprint $table) {
            $table->foreign('user_id', 'subscription_try_pay_user_id_foreign')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->foreign('tenancy_id', 'subscription_try_pay_tenancy_id_foreign')
                ->references('id')
                ->on('tenancys')
                ->onDelete('cascade');

            $table->foreign('subscription_id', 'subscription_try_pay_subscription_id_foreign')
                ->references('id')
                ->on('subscriptions')
                ->onDelete('cascade');

            $table->foreign('subscription_price_id', 'subscription_try_pay_subscription_price_id_foreign')
                ->references('id')
                ->on('subscription_prices')
                ->onDelete('cascade');

            $table->foreign('currency_code', 'subscription_try_pay_currency_code_foreign_key')
                ->references('code')
                ->on('currencies')
                ->onDelete('cascade');

            $table->foreign('country_id', 'subscription_try_pay_country_id_foreign')
                ->references('id')
                ->on('countries')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscription_try_pay');
        Schema::dropIfExists('subscription_billing_address');
        Schema::dropIfExists('subscription_features');
        Schema::dropIfExists('subscription_invoices');
        Schema::dropIfExists('subscription_prices');
        Schema::dropIfExists('subscriptions');
    }
};
