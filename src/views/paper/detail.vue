<template>
    <div>
        阅卷
        {{tableData}}
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    created(){
        this.getData()
       
    },
    data(){
        return {
            id:this.$route.query.id
        }
    },
    computed:{
        ...mapState("detail", ["tableData"])
    },
    methods:{
        getData(){
            this.$http.get(`/api/exam/student/${this.id}`).then(res=>{
                this.$store.dispatch("/detail/getData", res.data.data)
            })
        }
    }
}
</script>

<style scoped lang="scss">

</style>
