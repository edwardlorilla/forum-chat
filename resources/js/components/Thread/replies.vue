<template>
    <div class="card mb-3 card-default">
        <div class="card-body">
            <h5 class="card-title"><a href="">{{reply.owner.name}}</a> said...
                <button class="btn btn-link float-md-right">
                   <span @click="favorite_m" class="fa" :class="isFavorited ? 'fa-heart' : 'fa-heart-o'"> {{favorited_count}}</span>
                </button>
            </h5>

            <p class="card-text">{{reply.body}}</p>
            <p class="card-text">
                <small class="text-muted">Last updated {{reply.updated_at}}</small>
            </p>
        </div>

    </div>
</template>
<script>
    export default{
        props: ['reply'],
        data(){
            return{
                isFavorited : this.reply.isFavorited,
                favorited_count: this.reply.favorites_count ? this.reply.favorites_count :0
            }
        },
        methods:{
            favorite_m(){
                var vm = this
                if(vm.isFavorited) {
                    axios['delete'](`/api/replies/${vm.reply.id}/favorites`);
                    vm.isFavorited = false
                    vm.favorited_count--
                }else{
                    axios['post'](`/api/replies/${vm.reply.id}/favorites`);
                    vm.isFavorited = true
                    vm.favorited_count++
                }
            }
        }
    }
</script>
