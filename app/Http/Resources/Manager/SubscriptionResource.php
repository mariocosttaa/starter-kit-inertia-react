<?php

namespace App\Http\Resources\Manager;

use App\Actions\General\EasyHashAction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Manager\SubscriptionPriceResource;
use App\Http\Resources\Manager\SubscriptionFeatureResource;

class SubscriptionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => EasyHashAction::encode(valueToBeEncode: $this->id, type: 'subscription-id'),
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'level' => $this->level,
            'is_free' => $this->is_free,
            'mandatory_period' => $this->mandatory_period,
            'status' => $this->status,
            'prices' => $this->whenLoaded('prices', function () {
                return SubscriptionPriceResource::collection($this->prices)->toArray(request());
            }),
            'features' => $this->whenLoaded('features', function () {
                return SubscriptionFeatureResource::collection($this->features)->toArray(request());
            }),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
