<template>
    <div class="student">
        <header>
            {{$route.meta.title}}
        </header>
        <div class="form">
            <el-input v-model="student_name" placeholder="请输入学生姓名"></el-input>
            <el-input v-model="student_id" placeholder="请输入学生学号"></el-input>
            <el-select v-model="grade_name" placeholder="班级名">
                <el-option
                    v-for="item in grade"
                    :key="item.grade_id"
                    :label="item.grade_name"
                    :value="item.grade_name">
                </el-option>
            </el-select>
            <el-select v-model="room_text" placeholder="请选择教室号">
                <el-option
                    v-for="item in room"
                    :key="item.room_id"
                    :label="item.room_text"
                    :value="item.room_text">
                </el-option>
            </el-select>
            <el-button type="primary" @click="serachFn({student_name, student_id, grade_name, room_text}  )" id="reset">搜索</el-button>
            <el-button type="primary" id="reset" @click="reset">重置</el-button>
        </div>
        <div class="session">
            <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            style="width: 100%">
            <el-table-column
                label="姓名"
                >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.student_name  }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="学号"
                >
                <template slot-scope="scope">
                    <!-- <el-popover trigger="hover" placement="top"> -->
                        <!-- <p>姓名: {{ scope.row.name }}</p> -->
                        <div slot="reference" class="name-wrapper" style="margin-left : 8px">
                            {{scope.row.student_id }}
                        </div>
                    <!-- </el-popover> -->
                </template>
            </el-table-column>
            <el-table-column
                label="班级"
               >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.grade_name  }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="教室"
                >
                <template slot-scope="scope">
                    <!-- <el-popover trigger="hover" placement="top"> -->
                        <!-- <p>姓名: {{ scope.row.name }}</p> -->
                        <div slot="reference" class="name-wrapper" style="margin-left: 10px">
                           {{scope.row.room_text }}
                        </div>
                    <!-- </el-popover> -->
                </template>
            </el-table-column>
            <el-table-column
                label="密码"
                >
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <div slot="reference" class="name-wrapper" style="margin-left: 10px">
                            {{ scope.row.student_pwd }}
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <span style="margin-left : 10px" @click="deleteList(scope.row)">删除</span>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>确认删除吗</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="sure">确 定</el-button>
            </span>
        </el-dialog>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"         
            layout="prev, pager, next"
            :total="tableData.length">  
        </el-pagination>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from "vuex"
export default {
    created(){
        this.getData()
        this.getgrade()
        this.getroom()
    },
    computed:{
        ...mapState("student", ["tableData", "grade", "room", "list"]),
    },
    data(){
        return {
            student_name:"",
            student_id:"",
            grade_name:"",
            room_text: "",
            currentPage:1, //初始页
            pagesize:20,
            dialogVisible:false,
        }
    },
    methods:{
        ...mapMutations('student', ['serachFn']),
        ...mapActions("student", ["getgrade", "getroom", "delList"]),
        handleCurrentChange: function(currentPage){
            this.currentPage = currentPage;
        },
        getData(){
            this.$http.get("/api/manger/student").then(res=>{
                this.$store.dispatch('student/getData', res.data.data)
            })
        },
        deleteList(row){
            this.student_id = row.student_id
            this.dialogVisible = !this.dialogVisible
        },
        sure(){
            this.delList({id:this.student_id});
            this.dialogVisible = !this.dialogVisible
            this.getData()
        },
        reset(){
            this.student_name = ""
            this.student_id = ""
            this.grade_name = ""
            this.room_text =  ""
        }   
    }
}
  
</script>

<style scoped lang="scss">
.student{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    header{
        width: 100%;
        height: 60px;
        line-height: 30px;
        font-size: 22px;
        padding: 20px 20px;
    }
    .form{
        height: 50px;
        display: flex;
        background: #E9EEF3;
        padding-left: 20px
    }
    .session{
        width: 100%;
        flex: 1;
        overflow: hidden;
        .el-table{
            margin-left: 20px
        }
    }
}
.el-input,.el-select{
    width: 15%;
    height: 20px;
    margin-right: 20px;
}
#reset{
    width:10%;
    height: 30px;
    line-height: 8px;
    margin-top: 5px;
}
// .el-table td, .el-table th{
//     padding-left: 10px !important;
// }


</style>
