<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PublicHomeController extends Controller
{
    /**
     * Show the portal home page.
     */
    public function __invoke(): \Inertia\Response
    {
        return Inertia::render('frontend-public/template-default/pages/Home/PublicHome');
    }
}