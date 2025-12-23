<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        try {
            return Inertia::render('home/Home');
        } catch (Exception $e) {
            if ($e->getCode() == 500) report($e);
            return abort(500);
        }
    }
}
