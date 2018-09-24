<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Mail\LogUser;

class Log extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'log:reply';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send Daily Update';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $logs = collect(\DB::table('logs')->pluck('loged_id'))->unique()->all();
        $threads = [];
        foreach ($logs as $log) {
            $loged = \App\Log::whereLogedId($log)->with('user')->first()->toArray();
            $appLog = app($loged['loged_type'])->whereId($loged['loged_id'])->with('owner')->first();
            $threads[] = $appLog->id;
            $appLoged = app($loged['loged_type'])->whereId($loged['loged_id'])->with('owner', 'thread')->get()->toArray();
            \Mail::to($appLog->owner->email)->send(new LogUser($appLoged, $loged));
            \App\Log::whereLogedId($log)->delete();
        }
    }
}
