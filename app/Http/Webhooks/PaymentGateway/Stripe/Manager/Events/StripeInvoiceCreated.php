<?php

namespace App\Http\Webhooks\PaymentGateway\Stripe\Manager\Events;

use App\Actions\General\EasyHashAction;
use App\Models\Manager\SubscriptionInvoiceModel;
use App\Models\Manager\SubscriptionModel;
use App\Models\Manager\TenancyModel;
use Illuminate\Support\Facades\Log;
use Stripe\Event as StripeEvent;

class StripeInvoiceCreated
{
    public static function handle(StripeEvent $event)
    {
        Log::info('Stripe Webhook Event - Stripe Invoice Created');

        try {
            // Acessar metadata do subscription_details ou lines->data[0]
            $metadata = (object) ($event->data->object->subscription_details->metadata ?? $event->data->object->lines->data[0]->metadata ?? []);

            // Only continue if is not fist invoice, because the first invoice is handled in the first payment
            if (isset($metadata->set_first_invoice) && ($metadata->set_first_invoice === 'true' || $metadata->set_first_invoice === true)) {
                Log::info('Stripe Invoice Created Event - First Invoice Detected, will be in the First Payment');
                return;
            }

            // Set Invoice in Subscription Invoices
            self::setInvoiceInSubscription($event, $metadata);

        } catch (\Exception $e) {
            Log::error('Error handling Stripe Invoice Created event: ' . $e->getMessage());
            return response()->json(['error' => 'Error processing event'], 500);
        }
    }

    private static function setInvoiceInSubscription(StripeEvent $event, object $metadata)
    {
        // Check if metadata contains tenancy_id
        if (!isset($metadata->tenancy_id)) {
            Log::error('Stripe Invoice Created Event - Missing tenancy ID in metadata');
            return;
        }

        $tenancyId = EasyHashAction::decode($metadata->tenancy_id, 'payment-gateway-tenancy-id');
        if (TenancyModel::where('id', $tenancyId)->doesntExist()) {
            Log::error('Stripe Invoice Created Event - Tenancy not found for ID: ' . $tenancyId);
            return;
        }

        // Check if metadata contains subscription and price ID
        if (!isset($metadata->local_product_id) || !isset($metadata->local_price_id)) {
            Log::error('Stripe Invoice Created Event - Missing metadata for subscription or price ID');
            return;
        }

        $subscriptionId = EasyHashAction::decode($metadata->local_product_id, 'payment-gateway-local-product-id');
        $subscriptionPriceId = EasyHashAction::decode($metadata->local_price_id, 'payment-gateway-local-price-id');

        // Find the subscription by ID
        $subscription = SubscriptionModel::with('prices.currency')->where('payment_gateway_subscription_id', $subscriptionId)->first();
        if (!$subscription) {
            Log::error('Stripe Invoice Created Event - Subscription not found for ID: ' . $subscriptionId);
            return;
        }

        $subscriptionPrice = $subscription->prices->where('id', $subscriptionPriceId)->first();
        if (!$subscriptionPrice) {
            Log::error('Stripe Invoice Created Event - Subscription Price not found for ID: ' . $subscriptionPriceId);
            return;
        }

        // Extract relevant data from the event
        $lineItem = $event->data->object->lines->data[0];
        $plan = $lineItem->plan;

        // Determine billing period directly from the event
        $billingPeriod = $plan->interval; // e.g., 'month', 'year'
        if (!in_array($billingPeriod, ['month', 'quarter', 'year'])) {
            Log::error('Stripe Invoice Created Event - Invalid billing period: ' . $billingPeriod);
            return;
        }

        // Extract invoice data
        $amount = $event->data->object->amount_due; // Store in cents (e.g., 6999)
        $currency = $event->data->object->currency; // e.g., 'eur'
        $status = $event->data->object->status; // e.g., 'paid', 'open'
        $paid = $event->data->object->paid; // true or false
        $paymentGatewayInvoiceId = $event->data->object->id;
        $dueDate = isset($event->data->object->due_date) ? date('Y-m-d H:i:s', $event->data->object->due_date) : null;

        // Create invoice in Subscription Invoices
        SubscriptionInvoiceModel::create([
            'tenancy_id' => $tenancyId,
            'subscription_id' => $subscription->id,
            'subscription_price_id' => $subscriptionPrice->id,
            'price' => $amount, // Store as cents (e.g., 6999)
            'period' => $billingPeriod, // e.g., 'month'
            'currency_code' => $currency, // e.g., 'eur'
            'pending_pdf_id' => null,
            'paid_pdf_id' => null,
            'status' => $status === 'paid' ? 1 : 0, // Convert to tinyint (1 or 0)
            'paid' => $paid ? 1 : 0, // Convert to tinyint (1 or 0)
            'paid_date' => $paid ? date('Y-m-d H:i:s', $event->data->object->status_transitions->paid_at) : null,
            'due_date' => $dueDate,
            'payment_gateway_invoice_id' => $paymentGatewayInvoiceId,
            'payment_gateway_log_id' => null,
            'payment_method' => $event->data->object->payment_settings->payment_method_types[0] ?? null,
        ]);

        return response()->json(['message' => 'Invoice created successfully'], 200);
    }

    private static function createPendingPdf(): ?int
    {
        // Implement pending PDF creation logic or return null if not needed
        return null;
    }

    private static function createPaidPdf(): ?int
    {
        // Implement paid PDF creation logic or return null if not needed
        return null;
    }
}
