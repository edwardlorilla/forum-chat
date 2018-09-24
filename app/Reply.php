<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $fillable = ['user_id', 'body'];
    protected $appends = ['isFavorited'];

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function thread()
    {
        return $this->belongsTo(Thread::class);
    }

    public function favorites()
    {
        return $this->morphMany(Favorite::class, 'favorited');
    }

    public function isFavorited()
    {
        return !!$this->favorites()->where('user_id', auth()->guard('api')->id())->count();
    }

    public function getIsFavoritedAttribute()
    {
        return $this->isFavorited();
    }

    public function favorite()
    {
        $arr = ['user_id' => auth()->guard('api')->id()];
        if (!$this->favorites()->where($arr)->exists()) {
            \App\Log::create([
                'loged_type' => get_class($this),
                'loged_id' => $this->id,
                'user_id' => auth()->guard('api')->id(),
            ]);
            return $this->favorites()->create($arr);
        }
    }

    public function unfavorite()
    {
        $arr = ['user_id' => auth()->guard('api')->id()];
        if ($this->favorites()->where($arr)->exists()) {
            \App\Log::where('user_id', auth()->guard('api')->id())
                ->where('loged_id', $this->toArray()['id'])
                ->delete();
            return $this->favorites()->where($arr)->delete();
        }
    }

}
