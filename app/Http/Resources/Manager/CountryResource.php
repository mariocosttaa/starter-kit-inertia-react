<?php

namespace App\Http\Resources\Manager;

use App\Actions\General\EasyHashAction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CountryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => EasyHashAction::encode(valueToBeEncode: $this->id, type: 'country-id'),
            'name' => $this->name,
            'code' => $this->code,
            'calling_code' => $this->calling_code,
        ];
    }
}
