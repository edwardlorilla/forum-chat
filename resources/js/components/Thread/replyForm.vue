<template>
    <div class="card mb-3 card-default">
        <div class="card-body">
            <form v-if="isAuth"  ref="form" @submit.prevent="reply_m">
                <div class="form-group">
                    <textarea class="form-control" placeholder="Have something to say?" name="body" id="body" cols="30"
                              rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-default">Post</button>
            </form>
            <div v-else>
               <p class="text-center">Please <a href="/login">sign in</a> to participate in this discussion.</p>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return{
                reply: ''
            }
        },
        computed: {
            isAuth(){
                return this.$user && this.$user.statusText == 'OK'
            }
        },
        methods: {
            reply_m(){
                var vm = this
                 const formData = new FormData(vm.$refs.form);
                 let jsonObject = {};

                 for (const [key, value]  of formData.entries()) {
                 jsonObject[key] = value;
                 }

                 axios['post'](`/api/threads/${vm.$route.params.id}/replies`, jsonObject).then(function (response) {
                     vm.$emit('reply', response.data)
                 });
            }
        }
    }
</script>
