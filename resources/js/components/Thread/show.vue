<template>
    <div>
        <div class="card mb-3 card-default">
            <div class="card-header">
                <router-link :to="{name: 'thread.index'}"><span style="font-size:27px">‹ </span></router-link>
                {{data.title}}

            </div>
            <div class="card-body">
                {{data.body}}
            </div>
            <div class="card-footer">
                This thread was published {{data.created_at}} by <a href="">{{data.creator.name}}</a>, and currently has
                {{commentLength}} {{ commentLength === 1 ? ' comment.' : ' comments.' }}
            </div>
        </div>
        <replies v-for="reply in data.replies" :key="reply.id" :reply="reply"/>
        <reply-form @reply="reply_m($event)"/>
    </div>


</template>
<script>
    import Replies from './replies.vue'
    import loadReplies from './loadReplies.vue'
    import ReplyForm from './replyForm.vue'
    export default{
        mixins: [loadReplies],
        components: {
            Replies,
            ReplyForm
        },
        data(){
            return {
                data: {},

            }
        },
        computed:{
            commentLength(){
                var vm = this
                return vm.data.replies.length
            }
        },
        methods: {
            setData(response){
                var vm = this
                vm.data = response
            },
            reply_m(event){
                var vm = this
                vm.data.replies.push(event)
            }
        }
    }
</script>
