<?php

namespace App\Http\Middleware;


use App\Actions\General\EasyHashAction;
use App\CustomCache\Auth\AuthCache;
use App\CustomCache\CustomCacheAction;
use App\CustomCache\Model\Manager\CurrencyCacheModel;
use App\Http\Resources\Manager\CurrencyResource;
use App\Http\Resources\Manager\UserResource;
use App\Models\Manager\CurrencyModel;
use App\Models\Manager\UserModel;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Pest\ArchPresets\Custom;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }


    //return defaultcurrency on base
    public function defaultCurrencyCode() {
        return match(app()->getLocale()) {
            'en' => 'usd',
            'es' => 'eur',
            'fr' => 'eur',
            'pt' => 'eur',
            default => env('APP_DEFAULT_CURRENCY', 'usd'),
        };
    }


    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared--
     *
     * @return array<string, mixed>
     */
    public function share(Request $request)
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');
        //requrest user
        $user = AuthCache::getUser($request);

        return [
            ...parent::share($request),

            'locale' => app()->getLocale(),
            'currencies' => CurrencyResource::collection(CurrencyCacheModel::all())->resolve(),
            'default_currency' => $this->defaultCurrencyCode(),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $user
            ],
            'ziggy' => fn (): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'toast' => fn () => $request->session()->get('toast'),
        ];
    }
}
