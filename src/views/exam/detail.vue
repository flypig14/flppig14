<template>
    <div class="detail">
        <div class="box" v-for="(v,i) in detail.questions" :key="i">
            <p>{{v.title}}</p>
            <p>{{v.questions_stem}}</p>
        </div>
        <!-- {{detail}} -->
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    created(){
        this.getDetail()
    },
    computed:{
        ...mapState("examlist", ["detail"])
    },
    data(){
        return {
            id:this.$route.query.id,
            
        }
    },
    methods:{
        getDetail(){
            this.$http.get(`/api/exam/exam/${this.id}`).then(res=>{
                this.$store.dispatch("examlist/getDetail", res.data.data)
            })
        }
    }
}
</script>

<style scoped lang="scss">
.detail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
