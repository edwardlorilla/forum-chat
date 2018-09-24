@component('mail::message')
{!! nl2br(e($lists)) !!}
Thanks,<br>
{{ config('app.name') }}
@endcomponent
