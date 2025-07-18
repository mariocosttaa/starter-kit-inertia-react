<?php

namespace App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events;

use Illuminate\Support\Facades\Log;
use Stripe\Event as StripeEvent;

class StripePaymentIntentCreated
{
    public static function handle(StripeEvent $event)
    {

        Log::info('Stripe Webhook Event - Stripe PaymentIntent Created');

    }
}
