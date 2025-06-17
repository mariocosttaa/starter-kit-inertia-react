<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetLocaleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Get locale from route parameter, fallback to session, then config
        $locale = $request->route('locale') ?? session('locale', config('app.locale'));

        // Check if locale is valid
        if (in_array($locale, config('app.locales', ['en', 'pt', 'es', 'fr']))) {
            app()->setLocale($locale);
            session(['locale' => $locale]);
        } else {
            return abort(404);
        }

        return $next($request);
    }
}
