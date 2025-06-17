<?php

namespace App\CustomCache;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class CustomCacheAction
{
    /**
     * Check if caching is enabled via .env
     */
    protected static function isCacheEnabled(): bool
    {
        return env('CUSTOM_CACHE', false);
    }

    /**
     * Check if cache debugging is enabled via .env
     */
    protected static function customCacheDebug(): bool
    {
        return env('CUSTOM_CACHE_DEBUG', false);
    }

    /**
     * Retrieve or store a value in cache with tag support and duration.
     *
     * @param string $key Unique cache key
     * @param string $tag Tag to group related caches
     * @param int $duration Duration in seconds
     * @param callable $callback Function to generate value if cache misses
     * @return mixed
     */
    public static function remember(string $key, string $tag, int $duration, callable $callback)
    {
        if (!static::isCacheEnabled()) {
            return $callback();
        }

        $cacheKey = "$tag:$key";
        $fromCache = true;

        $value = Cache::remember($cacheKey, $duration, function () use (&$fromCache, $callback, $tag, $key, $duration) {
            $fromCache = false;
            if (static::customCacheDebug()) {
                Log::info("{CustomCache} Cache Not Found, and Created for \"$tag\": $key");
            }

            // Store the key in the tag's index
            $tagIndexKey = "tag_index:$tag";
            $keys = Cache::get($tagIndexKey, []);
            if (!in_array($key, $keys)) {
                $keys[] = $key;
                Cache::put($tagIndexKey, $keys, $duration);
            }

            return $callback();
        });

        if ($fromCache && static::customCacheDebug()) {
            Log::info("{CustomCache} Cache Already Found for \"$tag\": $key");
        }

        return $value;
    }

    /**
     * Invalidate all caches for a specific tag.
     *
     * @param string $tag Tag to invalidate
     * @return void
     */
    public static function invalidateTag(string $tag)
    {
        if (static::customCacheDebug()) {
            Log::info("{CustomCache} Cache Invalidated for \"$tag\"");
        }

        $tagIndexKey = "tag_index:$tag";
        $keys = Cache::get($tagIndexKey, []);

        foreach ($keys as $key) {
            Cache::forget("$tag:$key");
        }

        Cache::forget($tagIndexKey);
    }
}
