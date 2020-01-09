<template>
    <div class="grade">
        <el-button type="primary" id="el-button" @click="clickFn">+  添加班级</el-button>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                label="班级名"
                width="200px"
                margin-left= "10px">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.grade_name  }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="课程名"
                width="400px">
                <template slot-scope="scope">
                    <!-- <el-popover trigger="hover" placement="top"> -->
                        <!-- <p>姓名: {{ scope.row.name }}</p> -->
                        <div slot="reference" class="name-wrapper" style="margin-left: 10px">
                            {{scope.row.subject_text }}
                          
                        </div>
                    <!-- </el-popover> -->
                </template>
            </el-table-column>
            <el-table-column
                label="阅卷管理"
                width="200px"
                margin-left= "10px">
            </el-table-column>
            <el-table-column
                label="课程名称"
                width="300px"
                margin-left= "10px">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.grade_name  }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="成材率"
                width="200px">
                <template slot-scope="scope">
                   
                        <div slot="reference" class="name-wrapper" style="margin-left: 10px">
                            {{ scope.row.room_text }}
                        </div>
              
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <span style="margin-left: 10px ; color:blue">批卷</span>
            </el-table-column>
        </el-table>

        <el-dialog
            title="提示"
            :visible.sync="flag"
            center>
            <el-input
                placeholder="请输入试题名称"
                v-model="grade_name"
                clearable>
            </el-input>
            <el-input placeholder="请输入试题序号" v-model="room_text" show-password></el-input>
            <el-input placeholder="请输入试题序号" v-model="subject_text" show-password></el-input>
            <span slot="footer" class="dialog-footer">
            <el-button @click="flag = false">取 消</el-button>
            <el-button type="primary">提交</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
    computed:{
        ...mapState("grade", ["tableData"])
    },
    created(){
        this.getData()
    },
    data() {
        return {
            flag:false,
            subject_text:"",
            grade_name:"",
            room_text:""
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        ...mapActions("grade", [
            "getData"
        ]),
        clickFn(){
            this.flag = !this.flag
        }
        
    }
}
</script>

<style scoped lang="scss">
    .grade{
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

