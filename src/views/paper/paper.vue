<template>
    <div class="paper">
        <div class="search">
            <label for="">
                状态：
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </label>
            <label for="">
                班级：
                <el-select v-model="text" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </label>
            <el-button type="primary">
                <i class="el-icon-search"></i>
                查询
            </el-button>
        </div>
        <div class="list">
            <p>试卷列表</p>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    label="班级"
                    >
                <template >
                   
                    <span style="margin-left: 10px">{{grade_name}}</span>
                </template>
                </el-table-column>
                <el-table-column
                    label="姓名"
                    >
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    <div slot="reference" class="name-wrapper">
                        {{ scope.row.student_name }}
                    </div>
                    </el-popover>
                </template>
                </el-table-column>
                <el-table-column
                    label="阅卷状态">
                <template slot-scope="scope">
                   
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
                </el-table-column>
                <el-table-column
                    label="开始时间">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    
                    <div slot="reference" class="name-wrapper">
                        {{ scope.row.start_time }}
                    </div>
                    </el-popover>
                </template>
                </el-table-column>
                <el-table-column
                    label="结束时间">
                <template slot-scope="scope">
                  
                    <span style="margin-left: 10px">{{ scope.row.end_time }}</span>
                </template>
                </el-table-column>
                <el-table-column
                    label="成材率">
                <template >
                    <el-popover trigger="hover" placement="top">

                    <div slot="reference" class="name-wrapper">
                        -
                    </div>
                    </el-popover>
                </template>
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    style="color : blue"
                    @click="handleEdit(scope.$index, scope.row)">批卷</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    created(){
        console.log(this.$route.query)
        this.getData()
    },
    computed:{
        ...mapState("paper", ["tableData"])
    },
    data(){
        return {
            value:"",
            text:"",
            options:[],
            grade_id:"",
            grade_name:this.$route.query.grade_name
        }
    },
    methods:{
        getData(){
            this.grade_id = this.$route.query.id
            this.$http.get(`/api/exam/student?grade_id=${this.grade_id}`).then(res=>{
                console.log(res);
                
                this.$store.dispatch("paper/getData", res.data.exam)
            })
        },
        handleEdit(index, row){
            this.$router.push({
                path:"/home/detail",
                query:{
                    id:row.exam_student_id
                }
            })
            console.log(index, row,)
            
        }
    }
}
</script>

<style scoped lang="scss">
.paper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.search{
    width: 100%;
    height: 120px;
    background: #fff;
    border-radius: 10px;
    margin-top: 20px;
    padding-top: 20px;
    label{
        margin: 20px 40px;
        .el-select{
            width: 350px;
        }
        
    }
    .el-button{
        width: 150px;
    }
    
}
.list{
    width: 100%;
    margin-top: 20px;
    background: #fff;
    flex: 1;
    overflow: hidden;
    p{
        margin:20px 20px;
    }
}
</style>
