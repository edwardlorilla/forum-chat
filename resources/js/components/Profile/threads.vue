<template>
    <div class="card mb-3 card-default">
        <div class="card-header">{{thread.title}}</div>
        <div class="card-body">
            <p class="card-text">{{thread.body}}</p>
            <p class="card-text">
                <small class="text-muted">Last updated {{thread.updated_at}}</small>
            </p>
        </div>
    </div>
</template>
<script>

    export default{
        props:['thread']
    }
</script>
