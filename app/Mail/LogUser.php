<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class LogUser extends Mailable
{
    use Queueable, SerializesModels;

    public $logs, $user;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($logs, $user)
    {
        $this->logs = $logs;
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
       $lists = '';
        $user = $this->user;
        foreach ($this->logs as $log) {
            $lists .= "• {$log['owner']['name']} favorites '{$log['body']}' {$user['user']['name']}'s reply from a thread {$log['thread']['title']}\r\n";
        }
        return $this->markdown('emails.user.log')->with(['lists' => $lists]);
    }
}
