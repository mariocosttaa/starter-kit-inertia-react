<?php

namespace App\CustomCache\Model\Manager;

use App\CustomCache\CustomCacheAction;
use App\CustomCache\CustomCacheHelper;
use App\Models\Manager\UserModel;

class UserCacheModel extends CustomCacheHelper
{
    protected static function getCacheTag(): string
    {
        return 'users';
    }

    protected static function getCacheDuration(): int
    {
        return env('CUSTOM_CACHE_DURATION');
    }


    public static function all()
    {

        $cacheKey = md5('all-users-model');

        return CustomCacheAction::remember(
            $cacheKey,
            self::getCacheTag(),
            self::getCacheDuration(),
            function () {

                return UserModel::all();
            }
        );
    }

    public static function getByEmail(string $email, ?array $relations = null)
    {

        $cacheKey = md5("{$email}-user-model");

        return CustomCacheAction::remember($cacheKey, self::getCacheTag(), self::getCacheDuration(), function () use ($email, $relations) {
            if($relations) {
                return UserModel::where('email', $email)->with($relations)->first();
            } else {
                return UserModel::where('email', $email)->first();
            }
        });
    }   

    public static function getById(int $id, ?array $relations = null)
    {

        $cacheKey = md5("{$id}-user-model");

        return CustomCacheAction::remember($cacheKey, self::getCacheTag(), self::getCacheDuration(), function () use ($id, $relations) {
            if($relations) {
                return UserModel::where('id', $id)->with($relations)->first();
            } else {
                return UserModel::where('id', $id)->first();
            }
        });
    }

}
