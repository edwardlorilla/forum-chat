
<script>
    export default{
        beforeRouteEnter (to, from, next) {
            console.log(to.params)
            axios.get(to.meta.url + `/${to.params.channel}/`, {params: to.query}).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            axios.get(to.meta.url + `/${to.params.channel}/`, {params: to.query}).then(function (response) {
                vm.setData(response.data)
                next()
            })
        },
    }
</script>
