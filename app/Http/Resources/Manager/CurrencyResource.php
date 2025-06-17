<?php

namespace App\Http\Resources\Manager;

use App\Actions\General\EasyHashAction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CurrencyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => EasyHashAction::encode(valueToBeEncode: $this->id, type: 'currency-id'),
            'name' => $this->name,
            'code' => $this->code,
            'symbol' => $this->symbol,
            'symbol_2' => $this->symbol_2,
            'decimal_separator' => $this->decimal_separator,
        ];
    }
}
