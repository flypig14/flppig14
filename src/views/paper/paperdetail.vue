<template>
    <div class="padet">
        <p>
           阅卷 
        </p>
        
        <div class="d-left">
            <div class="box" v-for="(v,i) in tableData.questions" :key="i">
                <span>{{v.title}}</span>
                <span>{{v.questions_stem}}</span>
            </div>
        </div>
        <div class="right">
            <div class="block">
                <span >
                    {{tableData.student_name}}
                </span>
                
                <span>得分</span>
                <el-slider v-model="value2"></el-slider>
            </div>
              <el-button type="primary" @click="submitFn">提交</el-button>
        </div>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
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
            id:this.$route.query.id,
            value2:0,
            dialogVisible:false
        }
    },
    computed:{
        ...mapState("detail", ["tableData"])
    },
    methods:{
        getData(){
            this.$http.get(`/api/exam/student/${this.id}`).then(res=>{
                this.$store.dispatch("detail/getData", res.data.data)
            })
        },
        formatTooltip(val) {
            return val / 100;
        },
        submitFn(){
            this.dialogVisible = !this.dialogVisible
        }
    }
}
</script>

<style scoped lang="scss">
.padet{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    p{
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
    }
}

.d-left{
    width: 70%;
    height: 100%;
    background: #fff;
    margin-left: 20px;
    border-radius: 10px;
}
.right{
    width: 20%;
    height: 200px;
    background: #fff;
    position: fixed;
    top: 20%;
    right: 3%;
    border-radius: 10px;
   .block{
       display: flex;
       flex-direction: column;
       span{
           margin: 10px 0
       }
   }
   .box{
       width: 100%;
       display: flex;
       flex-direction: column;
       p{
           line-height: 30px;
       }
   }
}
</style>
