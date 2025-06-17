<?php

namespace App\CustomCache\Model\Manager;

use App\CustomCache\CustomCacheAction;
use App\CustomCache\CustomCacheHelper;
use App\Http\Resources\Manager\CountryResource;
use App\Models\Manager\CountryModel;

class CountriesCacheModel extends CustomCacheHelper
{
    protected static function getCacheTag(): string
    {
        return 'countries';
    }

    protected static function getCacheDuration(): int
    {
        return 31536000; // 1 Ano
    }

    public static function all()
    {

        $cacheKey = md5('all-countries-model');

        return CustomCacheAction::remember(
            $cacheKey,
            self::getCacheTag(),
            self::getCacheDuration(),
            function () {
                return CountryModel::all();
            }
        );
    }

    public static function getById(int $id)
    {

        $cacheKey = md5("{$id}-country-model");

        return CustomCacheAction::remember($cacheKey, self::getCacheTag(), self::getCacheDuration(), function () use ($id) {
            return CountryModel::where('id', $id)->first();
        });
    }
}
