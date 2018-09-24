<template>
    <div>
        <div class="card mb-3  card-body">
            <h4 class="card-title">{{user.name}} since {{user.created_at}}</h4>

        </div>
        <hr class="my-4">
        <threads v-for="thread in threads" :key="thread.id" :thread="thread" />
    </div>
</template>
<script>
    import load from './load.vue'
    import Threads from './threads.vue'
    export default{
        mixins: [load],
        components: {
            Threads
        }
    }
</script>
