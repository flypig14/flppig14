<template>
    <div class="grade">
        <header>
            {{$route.meta.title}}
        </header>
        <div class="session">
        <el-button type="primary" id="el-button" @click="clickFn">+  添加班级</el-button>
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
                width="500px">
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
                label="教室号"
                >
                <template slot-scope="scope">
                   
                        <div slot="reference" class="name-wrapper" style="margin-left: 10px">
                            {{ scope.row.room_text }}
                        </div>
              
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                <el-button
                    size="mini"
                    style="margin-left: 10px"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
            center
            class="dialog">
            <el-input
                placeholder="请输入班级号"
                v-model="grade_name"
                clearable
                class="ipt">
            </el-input>
            <el-select v-model="value1" placeholder="请选择教室号" class="select1">
            <el-option
            v-for="item in classData"
            :key="item.room_id"
            :label="item.room_text"
            :value="item.room_id">
            </el-option>
            </el-select>
            <el-select v-model="value2" placeholder="课程名" class="select2">
            <el-option
            v-for="item in nameData"
            :key="item.subject_id"
            :label="item.subject_text"
            :value="item.subject_id">
            </el-option>
            </el-select>
            <span slot="footer" class="dialog-footer">
            <el-button @click="flag = false">取 消</el-button>
            <el-button type="primary" @click="submit">提交</el-button>
            </span>
        </el-dialog>

        <el-dialog
            title="提示"
            :visible.sync="flags"
            center
            class="dialog">
            <el-input
                placeholder="请输入班级号"
                v-model="grade_name"
                clearable
                disabled=""
                class="ipt">
            </el-input>
            <el-select v-model="value3" placeholder="请选择教室号" class="select1">
            <el-option
            v-for="item in classData"
            :key="item.room_id"
            :label="item.room_text"
            :value="item.room_id">
            </el-option>
            </el-select>
            <el-select v-model="value4" placeholder="课程名" class="select2">
            <el-option
            v-for="item in nameData"
            :key="item.subject_id"
            :label="item.subject_text"
            :value="item.subject_id">
            </el-option>
            </el-select>
            <span slot="footer" class="dialog-footer">
            <el-button @click="flags = false">取 消</el-button>
            <el-button type="primary" @click="submit1">提交</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteFn">确 定</el-button>
            </span>
        </el-dialog>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:{
        ...mapState("grade", ["tableData", "classData", "nameData"])
    },
    created(){
        this.getData();
        this.getClass();
        this.getName();
    },
    data() {
        return {
            flag:false,
            flags:false,
            value1:'',
            value2:'',
            value3:'',
            value4:'',
            room_text1:"",
            room_id1:"",
            grade_id:'',
            grade_name:'',
            subject_id:'',
            room_id:'',
            dialogVisible:false
        }
    },
    methods: {
        // ...mapActions("grade", ["getData", "addClass", "changeClass"]),
        handleEdit(index, row) {
            console.log(index, row);
            this.value3 = row.room_id;
            this.value4 = row.subject_id;
            this.grade_name = row.grade_name;
            this.grade_id = row.grade_id;
            this.grade_name = row.grade_name;
            this.subject_id = row.subject_id;
            this.room_id = row.room_id;
            this.flags = !this.flags;
        },
        handleDelete(index, row) {
            console.log(index, row);
            this.grade_id = row.grade_id;
            this.dialogVisible = !this.dialogVisible
            
        },
        deleteFn(){
            this.$http.delete('/api/manger/grade/delete', {grade_id:this.grade_id}).then(res=>{
                if(res.data.code === 1){
                    this.getData();
                   
                }else{
                    console.log(res)
                }
            })
            this.dialogVisible = !this.dialogVisible
        },
        clickFn(){
            this.flag = !this.flag
        },
        getData(){
            this.$http.get("/api/manger/grade").then(res=>{
                this.$store.dispatch("grade/getData", res.data.data)
            })
        },
        getClass(){
            this.$http.get('/api/manger/room').then(res=>{
                this.$store.dispatch("grade/getClass", res.data.data)
            })
        },
        getName(){
            this.$http.get('/api/exam/subject').then(res=>{
                this.$store.dispatch("grade/getName", res.data.data)
            })
        },
        submit(){
            this.flag = !this.flag;
            this.$http.post('/api/manger/grade', {grade_name:this.grade_name, room_id:this.value1, subject_id:this.value2}).then(res=>{
                if(res.data.code === 1){
                    this.getData();
                    this.grade_name = "",
                    this.value1 = "",
                    this.value2 = ""
                   
                }else{
                    console.log(res)
                }
            })
        },
        submit1(){
            this.flags = !this.flags;
            this.$http.put('/api/manger/grade/update', {grade_id:this.grade_id, room_id:this.value3, subject_id:this.value4 }).then(res=>{
                if(res.data.code === 1){
                    this.getData();
                   
                }else{
                    console.log(res)
                }
            })
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
    .dialog{
        .ipt{
            width:90%;
        }
        .select1{
            width:90%;
            display: block;
        }
        .select2{
            width:90%;
            display: block;
            margin-top: 20px;
        }
    }

</style>
