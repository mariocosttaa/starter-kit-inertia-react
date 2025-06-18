<?php

namespace App\Http\Resources\Manager;

use App\Actions\General\EasyHashAction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TenantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // By default, do not share sensitive subscription/payment fields
        $data = [
            'id' => EasyHashAction::encode(valueToBeEncode: $this->id, type: 'tenant-id'),
            'name' => $this->name,
            'slug' => $this->slug,
            'status' => $this->status,
            'created_at' => $this->created_at?->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at?->format('Y-m-d H:i:s'),
        ];

        // If you want to share subscription/payment fields, pass a query param or context flag
        // Example: ?with_subscription_fields=1
        $withSubscriptionFields = $request->boolean('with_subscription_fields', false);

        if ($withSubscriptionFields) {
            $data['subscription_id'] = EasyHashAction::encode(valueToBeEncode: $this->subscription_id, type: 'subscription-id');
            $data['subscription_price_id'] = EasyHashAction::encode(valueToBeEncode: $this->subscription_price_id, type: 'subscription-price-id');
            $data['owner_user_id'] = EasyHashAction::encode(valueToBeEncode: $this->subscription_price_id, type: 'user-id');

            //relations
            $data['subscription'] = $this->whenLoaded('subscription', function () {
                return SubscriptionResource::make($this->subscription)->toArray(request());
            });
            $data['subscription'] = $this->whenLoaded('subscriptionPrice', function () {
                return SubscriptionPriceResource::make($this->subscriptionPrice)->toArray(request());
            });
            $data['owner_user'] = $this->whenLoaded('ownerUser', function () {
                return UserResource::make($this->ownerUser)->toArray(request());
            });


            $data['payment_date'] = $this->payment_date?->format('Y-m-d H:i:s');
            $data['expiration_date'] = $this->expiration_date?->format('Y-m-d H:i:s');
        }

        return $data;
    }
}
