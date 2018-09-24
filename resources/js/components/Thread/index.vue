<template>
    <div class="card card-default">
        <div class="card-header">Threads</div>
        <div class="card-body">
            <div class="list-group">
                <router-link v-for="(item, index) in data" :key="item.id"
                             :to="{name: 'thread.show', params: { channel: item.channel.slug, id: item.id}}"
                             class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{{item.title}} </h5>

                        <small>{{item.update}}</small>
                    </div>
                    <p class="mb-1">{{item.body}}
                        <strong class="float-md-right">{{item.replies_count === 0 ? 'No Comment' :
                            item.replies_count}}{{item.replies_count == 1 ? ' comment' : (item.replies_count === 0 ? '':
                            ' comments')}}
                        </strong>
                    </p>
                    <p class="mb-1">
                        <small class="text-muted">Posted:</small>
                        <small><a href="">{{item.creator.name}}</a></small>
                    </p>
                </router-link>
            </div>

        </div>
        <div class="card-footer">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" :disabled="! prevPage"
                                             @click.prevent="goToPrev">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">{{ paginatonCount }}</a></li>
                    <li class="page-item"><a class="page-link" :disabled="! nextPage"
                                             @click.prevent="goToNext">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    import ControlPage from './paginated.vue'
    export default {
        mixins: [ControlPage],
        data(){
            return {
                data: [],
                links: {},
                meta: {}
            }
        },
        beforeRouteEnter (to, from, next) {
            axios.get(to.meta.url, {params: to.query}).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this

            axios.get(to.meta.url, {params: to.query}).then(function (response) {
                vm.setData(response.data)
                next()
            })
        },
        methods: {
            setData (response) {
                var vm = this
                vm.data = response.data
                vm.links = response.links;
                vm.meta = response.meta;
            },
            goToNext() {
                var vm = this;
                var option = _.clone(vm.$route.query)
                option.page = this.nextPage
                this.$router.push({
                    query: option
                });
            },
            goToPrev() {
                var vm = this;
                var option = _.clone(vm.$route.query)
                option.page = this.prevPage
                this.$router.push({
                    name: vm.$route.meta.name,
                    query: option
                });
            },
        }
    }
</script>
