<?php

use App\Http\Webhooks\PaymentGateway\Stripe\Manager\StripeWebHookManager;
use Illuminate\Support\Facades\Route;

//manager pages webhooks
Route::post('/webhooks/payment-gateway/manager/stripe', StripeWebHookManager::class)->name('payment-gateway-webhook-manager-stripe');
