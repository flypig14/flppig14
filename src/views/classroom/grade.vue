<template>
    <div class="grade">
        <el-button type="primary" id="el-button" @click="clickFn">+  添加班级</el-button>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                label="班级名"
                width="300px"
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
                width="300px">
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
            center>
            <el-input
                placeholder="请输入班级号"
                v-model="grade_name"
                clearable>
            </el-input>
            <el-input placeholder="请输入教室号" v-model="room_text" show-password></el-input>
            <el-input placeholder="请输入课程名" v-model="subject_text" show-password></el-input>
            <span slot="footer" class="dialog-footer">
            <el-button @click="flag = false">取 消</el-button>
            <el-button type="primary" @click="submit">提交</el-button>
            </span>
        </el-dialog>

        <el-dialog
            title="提示"
            :visible.sync="flags"
            center>
            <el-input
                placeholder="请输入班级号"
                v-model="grade_name"
                clearable
                disabled="">
            </el-input>
            <el-input placeholder="请输入教室号" v-model="room_id1" clearable></el-input>
            <el-input placeholder="请输入课程名" v-model="room_text1" clearable></el-input>
            <span slot="footer" class="dialog-footer">
            <el-button @click="flags = false">取 消</el-button>
            <el-button type="primary" @click="submit1">提交</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:{
        ...mapState("grade", ["tableData"])
    },
    created(){
        this.getData();
    },
    data() {
        return {
            flag:false,
            flags:false,
            subject_text:"",
            grade_name:"",
            room_text:"",
            room_text1:"",
            room_id1:""
        }
    },
    methods: {
        // ...mapActions("grade", ["getData", "addClass", "changeClass"]),

        handleEdit(index, row) {
            console.log(index, row);
            this.flags = !this.flags;
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        clickFn(){
            this.flag = !this.flag
        },
        getData(){
            this.$http.get("/api/manger/grade").then(res=>{
                this.$store.dispatch("grade/getData", res.data.data)
            })

        },
        submit(){
            this.flag = !this.flag;
            this.addClass({grade_name:this.grade_name, room_id:this.room_text, subject_id:this.subject_id});
            this.getData();
        },
        submit1(){
            this.flags = !this.flags;
            this.changeClass({room_id:this.room_id1, room_text:this.room_text1});
            this.getData();
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
