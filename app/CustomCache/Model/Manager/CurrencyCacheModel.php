<?php

namespace App\CustomCache\Model\Manager;

use App\CustomCache\CustomCacheAction;
use App\CustomCache\CustomCacheHelper;
use App\Models\Manager\CurrencyModel;

class CurrencyCacheModel extends CustomCacheHelper
{
    protected static function getCacheTag(): string
    {
        return 'currencies';
    }

    protected static function getCacheDuration(): int
    {
        return 31536000; // 1 Ano
    }

    public static function all()
    {

        $cacheKey = md5('all-currencies-model');

        return CustomCacheAction::remember(
            $cacheKey,
            self::getCacheTag(),
            self::getCacheDuration(),
            function () {
                return CurrencyModel::all(); 
            }
        );
    }

    public static function getById(int $id)
    {

        $cacheKey = md5("{$id}-currency-model");

        return CustomCacheAction::remember($cacheKey, self::getCacheTag(), self::getCacheDuration(), function () use ($id) {
            return CurrencyModel::where('id', $id)->first();
        });
    }
}
