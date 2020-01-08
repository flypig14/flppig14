<template>
    <div class="student">
        <div class="form">
            <el-input v-model="student_name" placeholder="请输入学生姓名"></el-input>
            <el-input v-model="student_id" placeholder="请输入学生学号"></el-input>
            <el-select v-model="value" placeholder="请选择教室号">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value" placeholder="请选择教室号">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
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
    },
    computed:{
        ...mapState("student", ["tableData"])
    },
    data(){
        return {
            student_name:"",
            student_id:"",    
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            currentPage:1, //初始页
            pagesize:20,    //    每页的数据
        }
    },
    methods:{ 
        ...mapActions("student", ["getData"]),
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
        width: 100%;
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
