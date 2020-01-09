<template>
    <div class="student">
        <div class="form">
            <el-input v-model="student_name" placeholder="请输入学生姓名"></el-input>
            <el-input v-model="student_id" placeholder="请输入学生学号"></el-input>
            <el-select v-model="value" placeholder="请选择教室号">
                <el-option
                    v-for="item in grade"
                    :key="item.grade_id"
                    :label="item.grade_name"
                    :value="item.grade_name">
                </el-option>
            </el-select>
            <el-select v-model="text" placeholder="班级名">
                <el-option
                    v-for="item in room"
                    :key="item.room_id"
                    :label="item.room_text"
                    :value="item.room_text">
                </el-option>
            </el-select>
            <el-button type="primary">搜索</el-button>
            <el-button type="primary">提交</el-button>
        </div>
            <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            style="width: 100%">
            <el-table-column
                label="姓名"
                width="200px"
                margin-left= "10px">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.student_name  }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="学号"
                width="300px">
                <template slot-scope="scope">
                    <!-- <el-popover trigger="hover" placement="top"> -->
                        <!-- <p>姓名: {{ scope.row.name }}</p> -->
                        <div slot="reference" class="name-wrapper" style="margin-left : 8px">
                            {{scope.row.subject_id }}
                        </div>
                    <!-- </el-popover> -->
                </template>
            </el-table-column>
            <el-table-column
                label="班级"
                width="200px"
               >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.grade_name  }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="教室"
                width="300px">
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
                        <p>姓名: {{ scope.row.name }}</p>
                        <div slot="reference" class="name-wrapper" style="margin-left: 10px">
                            {{ scope.row.student_pwd }}
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作">
               <span style="margin-left : 10px">删除</span>
            </el-table-column>
        </el-table>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"         
            layout="prev, pager, next"
            :total="tableData.length">  
        </el-pagination>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
    created(){
        this.getData()
        this.getgrade()
        this.getroom()
    },
    computed:{
        ...mapState("student", ["tableData"]),
        ...mapState("student", ["grade"]),
        ...mapState("student", ["room"])
    },
    data(){
        return {
            student_name:"",
            student_id:"",
            value:"",
            text: '',
            currentPage:1, //初始页
            pagesize:20,    //    每页的数据
        }
    },
    methods:{ 
        ...mapActions("student", ["getData"]),
        ...mapActions("student", ["getgrade"]),
        ...mapActions("student", ["getroom"]),
        handleCurrentChange: function(currentPage){
            this.currentPage = currentPage;
        },
        
    }
}
  
</script>

<style scoped lang="scss">
.student{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .form{
        height: 50px;
        display: flex;
        background: #E9EEF3;
    }
}
.el-input,.el-select{
    width: 15%;
    height: 20px;
    margin-right: 20px;
}
.el-button{
    width:10%;
    height: 30px;
    line-height: 8px;
    margin-top: 5px;
}
// .el-table td, .el-table th{
//     padding-left: 10px !important;
// }


</style>
