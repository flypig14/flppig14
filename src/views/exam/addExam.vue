<template>
    <div class="exam">
        <div class="box">
            <label for=""><span>*</span> 试卷名称</label>
            <el-input placeholder="请输入内容" style="width:500px"></el-input>
            <label for=""><span>*</span> 选择考试类型</label>
            <el-select v-model="value" placeholder="请选择" style="width:200px">
                <el-option
                v-for="item in type"
                :key="item.exam_id"
                :label="item.exam_name"
                :value="item.exam_name">
                </el-option>
            </el-select>
            <label for=""><span>*</span> 选择课程</label>
            <el-select v-model="text" placeholder="请选择" style="width:200px">
                <el-option
                    v-for="item in options"
                    :key="item.questions_type_id"
                    :label="item.questions_type_text"
                    :value="item.questions_type_text">
                </el-option>
            </el-select>
            <label for=""><span>*</span> 设置题量</label>
            <el-input style="width:100px"></el-input>
            <label for="">考试时间：</label>
            <p>
                <el-time-select 
                    placeholder="起始时间"
                    v-model="startTime"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                    }">
                </el-time-select>
                <el-time-select 
                    placeholder="结束时间"
                    v-model="endTime"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: startTime
                    }">
                </el-time-select>
            </p>
              
            <el-button type="primary">创建试卷</el-button>
        </div>
        
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
    data(){
        return {
            startTime:"",
            endTime:"",
            value:"",
            text:""
        }
    },
    created(){
        this.getType()
        this.getOpt()
    },
    computed:{
        ...mapState("addExam", ["options"]),
        ...mapState("addExam", ["type"])
    },
    methods:{
        ...mapActions("addExam", ["getType"]),
        ...mapActions("addExam", ["getOpt"])
    }

}
</script>

<style scoped lang="scss">
    .exam{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .box{
        width: 90%;
        margin: 0 auto;
        label{
            margin: 30px 0;
            span{
                color: red;
            }
            p{
                width: 100%;
                display: flex;
            }
        }
    }
    .el-button{
        width: 200px;
        height: 40px;
        margin-top: 20px
    }
    .el-input{
        margin-right: 30px
    }
</style>
