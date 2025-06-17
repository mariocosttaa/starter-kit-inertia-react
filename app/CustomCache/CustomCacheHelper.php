<?php

namespace App\CustomCache;

abstract class CustomCacheHelper {

    /**
     * Define a tag de cache padrão para a implementação
     * Deve ser sobrescrita por classes filhas
     *
     * @return string
     */
    protected static function getCacheTag(): string
    {
        return 'default';
    }

    /**
     * Define a duração padrão do cache para a implementação
     * Pode ser sobrescrita por classes filhas
     *
     * @return int
     */
    protected static function getCacheDuration(): int
    {
        return env('CUSTOM_CACHE_DURATION', 86400);
    }

    protected static function invalidateCache() {
        CustomCacheAction::invalidateTag(self::getCacheTag());
    }

}