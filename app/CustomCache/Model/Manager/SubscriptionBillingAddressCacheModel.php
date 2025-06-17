<?php

namespace App\CustomCache\Model\Manager;

use App\CustomCache\CustomCacheAction;
use App\CustomCache\CustomCacheHelper;
use App\Models\Manager\SubscriptionBillingAddressModel;

class SubscriptionBillingAddressCacheModel extends CustomCacheHelper
{
    protected static function getCacheTag(): string
    {
        return 'subscription_billing_address';
    }

    protected static function getCacheDuration(): int
    {
        return 31536000; // 1 Ano
    }

    public static function all(?array $relations = null)
    {

        $cacheKey = md5('all-subscription-billing-address-model-'.serialize($relations));

        return CustomCacheAction::remember(
            $cacheKey,
            self::getCacheTag(),
            self::getCacheDuration(),
            function () use ($relations) {

                if ($relations) {
                    return SubscriptionBillingAddressModel::with($relations)->get();
                } else {
                    return SubscriptionBillingAddressModel::get();
                }

            }
        );
    }

    public static function getBySlug(string $slug, ?array $relations = null)
    {

        $cacheKey = md5("{$slug}-subscription-billing-address-model-".serialize($relations));

        return CustomCacheAction::remember($cacheKey, self::getCacheTag(), self::getCacheDuration(), function () use ($slug, $relations) {
            if ($relations) {
                return SubscriptionBillingAddressModel::where('slug', $slug)->with($relations)->first();
            } else {
                return SubscriptionBillingAddressModel::where('slug', $slug)->first();
            }
        });
    }

    public static function getById(int $id, ?array $relations = null)
    {

        $cacheKey = md5("{$id}-subscription-billing-address-model-".serialize($relations));

        return CustomCacheAction::remember($cacheKey, self::getCacheTag(), self::getCacheDuration(), function () use ($id, $relations) {
            if ($relations) {
                return SubscriptionBillingAddressModel::where('id', $id)->with($relations)->first();
            } else {
                return SubscriptionBillingAddressModel::where('id', $id)->first();
            }
        });
    }

    public static function getByUserId(int $id, ?array $relations = null)
    {

        $cacheKey = md5("{$id}-subscription-billing-address-model-".serialize($relations));

        return CustomCacheAction::remember($cacheKey, self::getCacheTag(), self::getCacheDuration(), function () use ($id, $relations) {
            if ($relations) {
                return SubscriptionBillingAddressModel::where('user_id', $id)->with($relations)->first();
            } else {
                return SubscriptionBillingAddressModel::where('user_id', $id)->first();
            }
        });
    }
}
