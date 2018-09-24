<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function store(\App\Reply $reply)
    {

        return $reply->favorite();
    }

    public function destroy(\App\Reply $reply)
    {

        $reply->unfavorite();

    }
}
