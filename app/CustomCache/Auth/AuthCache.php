<?php

namespace App\CustomCache\Auth;

use App\CustomCache\CustomCacheAction;
use App\CustomCache\CustomCacheHelper;
use App\Models\Manager\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthCache extends CustomCacheHelper
{
    protected static function getCacheTag(): string
    {
        return session()->getId().'-auth-user';
    }

    protected static function getCacheDuration(): int
    {
        return 7200;
    }

    /**
     * Verifica se o usuário está autenticado
     *
     * @param  UserModel|null  $relations  Relações que devem ser carregadas
     */
    public static function isAuthenticated(?Request $request = null): bool
    {
        return self::getUser($request) !== null;
    }

    /**
     * Obtém os dados do usuário autenticado (com cache)
     *
     * @param  UserModel|null  $relations  Relações que devem ser carregadas
     */
    public static function getUser(?Request $request = null, ?array $relations = []): ?UserModel
    {

        if ($relations) {
            $cacheKey = md5(session()->getId().'-user-model-'.serialize($relations));

        } else {
            $cacheKey = md5(session()->getId().'-user-model');
        }

        return CustomCacheAction::remember(
            $cacheKey,
            self::getCacheTag(),
            self::getCacheDuration(),
            function () use ($request, $relations) {
                return self::resolveUser($request, $relations);
            }
        );
    }

    /**
     * Resolve o usuário autenticado com base no request ou Auth facade
     *
     * @param  UserModel|null  $relations  Relações que devem ser carregadas
     */
    private static function resolveUser(?Request $request = null, ?array $relations = []): ?UserModel
    {
        $user = $request ? $request->user() : Auth::user();

        if (! $user) {
            return null;
        }

        if (! empty($relations)) {
            $user = $user->load($relations);
        }

        return $user;
    }

    /**
     * Helper para armazenar em cache qualquer valor
     *
     * @param  string  $key
     * @param  string  $tag
     * @param  int  $ttl
     * @param  callable  $callback
     * @return mixed
     */
    public static function remember($key, $tag, $ttl, $callback)
    {
        return CustomCacheAction::remember($key, $tag, $ttl, $callback);
    }
    

    public static function invalidate()
    {
        CustomCacheAction::invalidateTag(self::getCacheTag());
    }
}
