<?php

namespace App\Http\Resources\Manager;

use App\Actions\General\EasyHashAction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubscriptionBillingAddressResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => EasyHashAction::encode(valueToBeEncode: $this->id, type: 'subscription-billing-address-id'),
            'name' => $this->name,
            'surname' => $this->surname,
            'phone' => $this->phone,
            'country_id' => EasyHashAction::encode(valueToBeEncode: $this->country_id, type: 'country-id'),
            'country' => $this->whenLoaded('country', function () {
                return CountryResource::make($this->country)->toArray(request());
            }),
            'address' => $this->address,
            'city' => $this->city,
            'state' => $this->state,
            'zip_code' => $this->zip_code,
            'default' => $this->default,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];  
    }
}
