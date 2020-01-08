<template>
    <div class="room">
        <el-button type="primary" id="el-button" @click="clickFn">+  添加班级</el-button>
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
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
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
            <span slot="footer" class="dialog-footer">
            <el-button @click="flag = false">取 消</el-button>
            <el-button type="primary" >提交</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
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
            text:""
        }
    },
    methods:{
        clickFn(){
            this.flag = !this.flag
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        ...mapActions("room", [
            "getData"
        ]),
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
