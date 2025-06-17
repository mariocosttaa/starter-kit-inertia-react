<?php

namespace App\CustomCache\Model\Manager;

use App\CustomCache\CustomCacheAction;
use App\CustomCache\CustomCacheHelper;
use App\Models\Manager\SubscriptionModel;

class SubscriptionCacheModel extends CustomCacheHelper
{
    protected static function getCacheTag(): string
    {
        return 'subscriptions'; 
    }

    protected static function getCacheDuration(): int
    {
        return 31536000; // 1 Ano
    }

    public static function all(?array $relations = null)
    {

        $cacheKey = md5('all-subscriptions-model-'.serialize($relations));

        return CustomCacheAction::remember(
            $cacheKey,
            self::getCacheTag(),
            self::getCacheDuration(),
            function () use ($relations) {

                if($relations) {
                    return SubscriptionModel::with($relations)->get();
                } else {
                    return SubscriptionModel::get();
                }
                
            }
        );
    }

    public static function getBySlug(string $slug, ?array $relations = null)
    {

        $cacheKey = md5("{$slug}-subscription-model-".serialize($relations));

        return CustomCacheAction::remember($cacheKey, self::getCacheTag(), self::getCacheDuration(), function () use ($slug, $relations) {
            if($relations) {
                return SubscriptionModel::where('slug', $slug)->with($relations)->first();
            } else {
                return SubscriptionModel::where('slug', $slug)->first();
            }
        });
    }   

    public static function getById(int $id, ?array $relations = null)
    {

        $cacheKey = md5("{$id}-subscription-model-".serialize($relations));

        return CustomCacheAction::remember($cacheKey, self::getCacheTag(), self::getCacheDuration(), function () use ($id, $relations) {
            if($relations) {
                return SubscriptionModel::where('id', $id)->with($relations)->first();
            } else {
                return SubscriptionModel::where('id', $id)->first();
            }
        });
    }
}
