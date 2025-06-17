<?php

namespace App\Http\Resources\Manager;

use App\Actions\General\EasyHashAction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubscriptionFeatureResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => EasyHashAction::encode(valueToBeEncode: $this->id, type: 'subscription-feature-id'),
            'type' => $this->type,
            'subscription_id' => EasyHashAction::encode(valueToBeEncode: $this->subscription_id, type: 'subscription-id'),
            'order' => $this->order,
            'name' => $this->name,
            'status' => $this->status ?? 0,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
