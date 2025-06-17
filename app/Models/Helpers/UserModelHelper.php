<?php

namespace App\Models\Helpers;

use App\CustomCache\Auth\AuthCache;
use App\CustomCache\CustomCacheAction;
use Illuminate\Foundation\Auth\User as Authenticatable;

abstract class UserModelHelper extends Authenticatable
{
    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        // Quando um modelo é atualizado
        static::updated(function ($model) {
            $tableName = $model->getTable();
            CustomCacheAction::invalidateTag($tableName);
            self::invalidateCacheTags($model->invalidate_cache_tags);
        });

        // Quando um modelo é salvo (created ou updated)
        static::saved(function ($model) {
            $tableName = $model->getTable();
            CustomCacheAction::invalidateTag($tableName);
            self::invalidateCacheTags($model->invalidate_cache_tags);
        });

        // Quando um modelo é criado
        static::created(function ($model) {
            $tableName = $model->getTable();
            CustomCacheAction::invalidateTag($tableName);
            self::invalidateCacheTags($model->invalidate_cache_tags);
        });

        // Quando um modelo é deletado
        static::deleted(function ($model) {
            $tableName = $model->getTable();
            CustomCacheAction::invalidateTag($tableName);
            self::invalidateCacheTags($model->invalidate_cache_tags);
        });
    }

    private static function invalidateCacheTags($tags)
    {
        if(!isset($tags) || (!is_array($tags) && count($tags) < 1)) {
            return;
        }

        foreach ($tags as $tag) {
            if($tag == 'auth-user') {
                AuthCache::invalidate();
                continue;
            }
            CustomCacheAction::invalidateTag($tag);
        }
    }

}
