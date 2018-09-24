<template>
    <div  class="card card-default">
        <div class="card-header">Create a new thread</div>

        <div class="card-body">
            <form v-if="isAuth" @submit.prevent="publish_m" ref="form">
                <div class="form-group">
                    <label for="channel_id">Choose Channel</label>
                    <select name="channel_id" id="channel_id" class="form-control" >
                        <option v-for='item in data' :key="item.id" :value="item.id">{{item.name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input name="title" type="text" class="form-control" id="title" placeholder="Title">
                </div>
                <div class="form-group">
                    <label for="body">Body</label>
                    <textarea name="body" class="form-control" id="body" rows="5" placeholder="Body"></textarea>
                </div>
                <button class="btn btn-primary" type="submit" >Publish!</button>
            </form>
            <div v-else>
                <p class="text-center">Please <a href="/login">sign in</a> to create thread.</p>
            </div>
        </div>
    </div>
</template>
<script>
    import load from './loadThreadChannel.vue'
    export default{
        mixins:[load],
        computed: {
            isAuth(){
                return this.$user && this.$user.statusText == 'OK'
            }
        },
        methods:{
            publish_m(){
                var vm = this
                const formData = new FormData(vm.$refs.form);
                let jsonObject = {};

                for (const [key, value]  of formData.entries()) {
                    jsonObject[key] = value;
                }

                axios['post'](`/api/threads`, formData).then(function (response) {
                    ``
                });
            }
        }
    }
</script>
