<template>
    <div class="type">
        <el-button type="primary" @click="clickFn">
           + 添加类型
        </el-button>
            <el-table
                :data="tableData"
                :header-row-style="{background:'#000'}"
                >
            <el-table-column
                label="类型id"
                prop="questions_type_id">
            </el-table-column>
            <el-table-column
                label="类型名称"
                prop="questions_type_text">
            </el-table-column>
            <el-table-column
                label="操作">
            </el-table-column>
        </el-table>
       
       <el-dialog
            title="提示"
            :visible.sync="flag"
            center>
            <el-input
                placeholder="请输入试题名称"
                v-model="text"
                clearable>
            </el-input>
            <el-input placeholder="请输入试题序号" v-model="sort" show-password></el-input>
            <span slot="footer" class="dialog-footer">
            <el-button @click="flag = false">取 消</el-button>
            <el-button type="primary" @click="changeFn">确 定</el-button>
            </span>
        </el-dialog>
        
    </div>
</template>

<script>
// import http from "../../utils/request.js"
import {mapState, mapActions} from "vuex"
import cookie from "js-cookie"
export default {
    computed:{
        ...mapState("questiontype", ["tableData"])

    },
    created(){
        this.getData()

    },
    data() {
        return {
            // tableData: [],
            token:cookie.get("token"),
            flag:false,
            text:"",
            sort:""
        }
    },    
    methods: {
        // getData(){
        //     this.$http.get("/api/exam/getQuestionsType", {header:this.token}).then(res=>{
        //         if(res.data.code === 1){
        //             this.tableData = res.data.data
        //         }
        //     })
        // },
        ...mapActions("questiontype", ["getData"]),
        ...mapActions("questiontype", ["setData"]),

        clickFn(){
            this.flag = !this.flag
        },
        changeFn(){
            this.setData({
                text:this.text,
                sort:this.sort
            })
            //     this.$http.get("/api/exam/insertQuestionsType", {text:this.text, sort:this.sort} 
            //     ).then(res=>{
            //         if(res.data.code === 1){
            //             this.getData()
            //         }
            //     })
            this.getData()
            this.flag = !this.flag
        }
      
    },
}
</script>

<style scoped lang="scss">
    .type{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .el-button{
        width: 200px;
        height: 40px;
        font-size: 20px;
        margin: 20px 0 20px 20px;
    }
    .el-input{
            margin: 20px auto;
        
    }
    
    
    

</style>
