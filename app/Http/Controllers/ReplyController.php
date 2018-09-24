<?php

namespace App\Http\Controllers;

use App\Reply;
use Illuminate\Http\Request;

class ReplyController extends Controller
{

    public function store(\App\Thread $thread)
    {
        $this->validate(request(), [
            'body' => 'required',
        ]);
        $t = $thread->addReply([
            'body' => request('body'),
            'user_id' => auth()->guard('api')->id(),
        ])->id;
        return response()->json(['id'=> $t, 'updated_at' => date('Y-m-d H:i:s') , 'owner' => [ 'name' => auth()->guard('api')->user()->name], 'body' => request('body')], 200);
    }
}
