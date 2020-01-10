<template>
    <div class="room">
        <el-button type="primary" id="el-button" @click="clickFn">+  添加教室</el-button>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                label="班级名"
                width="700px"
                margin-left= "10px">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.room_text  }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row.room_id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
            title="提示"
            :visible.sync="flag"
            center>
            <el-input
                placeholder="请输入班级名"
                v-model="room_text"
                clearable>
            </el-input>
            <span slot="footer" class="dialog-footer">
            <el-button @click="flag = false">取 消</el-button>
            <el-button type="primary" @click="submit">提交</el-button>
            </span>
        </el-dialog>

        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <span>确定要删除该教室吗</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="sure">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:{
        ...mapState("room", ["tableData"])
    },
    created(){
        this.getData()
    },
    data(){
        return {
            flag:false,
            room_text:"",
            dialogVisible:false,
            room_id:""
        }
    },
    methods:{
        clickFn(){
            this.flag = !this.flag
        },
        handleDelete(room_id) {
            this.dialogVisible = !this.dialogVisible
            this.room_id = room_id
            
        },
        sure(){
            let room_id = this.room_id
            this.$http.delete("/api/manger/room/delete", {room_id}).then(res=>{
                if(res.data.code === 1){
                    this.dialogVisible = !this.dialogVisible
                    this.getData()
                }
            })
        },
        // handleClose(done) {
        //     this.$confirm('确认关闭？')
        //         .then(_ => {
        //         done();
        //     })
        //     .catch(_ => {});
        // },
        getData(){
            this.$http.get("/api/manger/room").then(res=>{
                this.$store.dispatch("room/getData", res.data.data)
            })

        },
        submit(){
            this.$http.post("/api/manger/room", {room_text:this.room_text}).then(res=>{
                if(res.data.code === 1){
                    this.getData()
                    this.flag = !this.flag
                }
            })
        }
        
    }

}
</script>

<style scoped lang="scss">
    .room{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    #el-button{
        width: 200px;
        height: 40px;
        margin: 20px 0 20px 20px;
        font-size: 20px;
    }
    .el-input{
            margin: 20px auto;
        
    }
</style>
