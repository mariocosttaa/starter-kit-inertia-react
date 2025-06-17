<?php

namespace App\Http\Resources\Manager;

use App\Actions\General\EasyHashAction;
use App\Actions\General\MoneyAction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubscriptionPriceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => EasyHashAction::encode(valueToBeEncode: $this->id, type: 'subscription-price-id'),
            'subscription_id' => EasyHashAction::encode(valueToBeEncode: $this->subscription_id, type: 'subscription-id'),
            'currency_code' => $this->currency->code,
            'value' => $this->value ?? 0,
            'value_formatted' => $this->value_formatted,
            'comparative_value' => $this->comparative_value,
            'comparative_value_formatted' => $this->comparative_value_formatted,
            'estimated_discount_percentage' => (int) (100 - ($this->value / $this->comparative_value * 100)),
            'estimated_discount_value' => $this->comparative_value - $this->value,
            'estimated_discount_value_formatted' => MoneyAction::format(
                amount: $this->comparative_value - $this->value,
                decimalPlaces: $this->currency->decimal_separator,
                currency: $this->currency->code,
                formatWithSymbol: true,
            ),
            'decimal_separator' => $this->decimal_separator,
            'period' => $this->period,
            'status' => $this->status ?? 0,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
            'currency' => $this->whenLoaded('currency', function () {
                return CurrencyResource::make($this->currency)->toArray(request());
            }),
        ];
    }
}
