<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <router-link v-if="isAuth" class="btn btn-success" :to="{name: 'thread.create'}">New Thread</router-link>
                <hr class="my-2">
                <ul class="list-group">
                    <router-link tag="li" class="list-group-item" :to="{name: 'thread.index', params: {'0' : 'threads'}}" >All Thread</router-link>
                    <router-link v-if="isAuth" tag="li" class="list-group-item" :to="{name: 'thread.index',query: {'by': $user.data.name},  params: {'0' : 'threads'}}" >My Threads</router-link>
                    <router-link tag="li" class="list-group-item" :to="{name: 'thread.index',query: {'popular': '?popular=desc'},  params: {'0' : 'threads'}}" >Popular Threads</router-link>
                    <router-link v-for="item in data" :key="item.id" tag="li" class="list-group-item" :to="{name: 'thread.channel', params:{channel: item.slug}}" >{{item.name}}</router-link>

                </ul>

            </div>
            <div class="col-md-9">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                data:[]
            }
        },
        computed: {
            isAuth(){
                return this.$user && this.$user.statusText == 'OK'
            }
        },
        mounted(){
            var vm = this
            axios.get(`/api/channels`).then(function (response) {
                vm.setData(response.data)
            })
        },
        methods:{
            setData(response){
                this.data = response
            }
        }
    }
</script>