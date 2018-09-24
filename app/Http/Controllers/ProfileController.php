<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{

    public function show(User $user)
    {
        return response()->json(['user' =>$user, 'threads' => $user->threads()->paginate(1)]);
    }

}
