<script>
    export default{
        data(){
            return{
                data:[]
            }
        },
        beforeRouteEnter (to, from, next) {
            console.log(to.params)
            axios.get(`/api/channels`).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            axios.get(`/api/channels`).then(function (response) {
                vm.setData(response.data)
                next()
            })
        },
        methods:{
            setData(response){
                this.data = response
            }
        }
    }
</script>