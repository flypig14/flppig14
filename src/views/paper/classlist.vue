<template>
    <div class="grade">
        <header>
            {{$route.meta.title}}
        </header>
        <div class="session">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                label="班级名"
              
                margin-left= "10px">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.grade_name  }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="课程名"
               >
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
                >
                <template slot-scope="scope">
                   
                        <div slot="reference" class="name-wrapper" style="margin-left: 10px">
                            {{ scope.row.room_text }}
                        </div>
              
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <span style="margin-left: 10px; color: blue; cursor: pointer;" @click="handleEdit(scope.$index, scope.row)"> 批卷 </span>
                </template>
            </el-table-column>
        </el-table>
        
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
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
            room_text:"",
            
        }
    },
    methods: {
        handleEdit(index, row) {
            
            this.$router.push({
                path:"/home/paper",
                query:{
                    id:row.grade_id,
                    grade_name:row.grade_name
                }
            })
            console.log(index, row);
        },
        
        getData(){
            this.$http.get("/api/manger/grade").then(res=>{
                this.$store.dispatch("grade/getData", res.data.data)
            })

        },
        clickFn(){
            this.flag = !this.flag
        },
       
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
    header{
        width: 100%;
        height: 60px;
        line-height: 30px;
        font-size: 22px;
        padding: 20px 20px;
    }
    .session{
        width: 98%;
        flex: 1;
        overflow: hidden;
        margin: 0 auto;
        border-radius: 10px;
        background: #fff;
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

