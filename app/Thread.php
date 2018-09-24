<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    protected $fillable = ['channel_id', 'user_id','title','body'];
    protected static function boot(){
        parent::boot();
        static::addGlobalScope('replyCount', function ($builder){
            $builder->withCount('replies');
        });
    }
    public function replies()
    {
        return $this->hasMany(Reply::class)->withCount('favorites');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function channel()
    {
        return $this->belongsTo(Channel::class);
    }
    public function addReply($reply){
        return $this->replies()->create($reply);
    }
}
