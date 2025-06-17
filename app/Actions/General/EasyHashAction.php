<?php

namespace App\Actions\General;

use Hashids\Hashids;

class EasyHashAction
{
    public static function encode(string|int $valueToBeEncode, string $type = '', int $minReturnEncode = 21)
    {
        $hashids = new Hashids($type, $minReturnEncode);

        return $hashids->encode($valueToBeEncode);
    }

    public static function decode(string $valueEncoded, string $type = '', int $minReturnEncode = 21): int|string|null
    {
        $hashids = new Hashids($type, $minReturnEncode);

        $decoded = $hashids->decode($valueEncoded)[0] ?? null;
        return is_numeric($decoded) ? (int) $decoded : $decoded;
    }
}
