<template>
    <div class="exam">
        <header>
            {{$route.meta.title}}
        </header>
        <div class="box">
            <label for=""><span>*</span> 试卷名称</label>
            <el-input v-model="title" placeholder="请输入内容" style="width:500px"></el-input>
            <label for=""><span>*</span> 选择考试类型</label>
            <el-select v-model="exam_id" placeholder="请选择" style="width:200px">
                <el-option
                v-for="item in type"
                :key="item.exam_id"
                :label="item.exam_name"
                :value="item.exam_id">
                </el-option>
            </el-select>
            <label for=""><span>*</span> 选择课程</label>
            <el-select v-model="subject_id" placeholder="请选择" style="width:200px">
                <el-option
                    v-for="item in options"
                    :key="item.subject_id"
                    :label="item.subject_text"
                    :value="item.subject_id">
                </el-option>
            </el-select>
            <label for=""><span>*</span> 设置题量</label>
            <el-input-number v-model="number" controls-position="right" @change="handleChange" :min="4" :max="10"></el-input-number>
            <label for="">考试时间：</label>

                <div class="block">
                    <el-date-picker
                        v-model="start_time"
                        type="datetime"
                        placeholder="选择日期时间">
                    </el-date-picker>
                    <el-date-picker
                        v-model="end_time"
                        type="datetime"
                        placeholder="选择日期时间">
                    </el-date-picker>
                </div>

              
            <el-button type="primary" @click="createExam">创建试卷</el-button>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
    data(){
        return {
            start_time:"",
            end_time:"",
            exam_id:"",
            subject_id:"",
            title:"",
            number:"",
            shortcuts: [{
                text: '今天',
                onClick(picker) {
                    picker.$emit('pick', new Date());
                }
            }, {
                text: '昨天',
                onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                }
            }, {
                text: '一周前',
                onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                }
            }]
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
        ...mapActions("addExam", ["getOpt"]),
        createExam(){
            console.log(this.value, this.text)
            this.$http.post("/api/exam/exam", {subject_id:this.subject_id, exam_id:this.exam_id, title:this.title, start_time:this.start_time * 1, end_time:this.end_time * 1, number:this.number}).then(res=>{
                if(res.data.code === 1){
                    this.$router.push("/home/create")
                }
            })
        },
        handleChange(value) {
            console.log(value);
        }
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
    header{
        width: 100%;
        height: 60px;
        line-height: 30px;
        font-size: 22px;
        padding: 20px 20px;
    }
    .box{
        width: 96%;
        margin: 0 auto;
        background: #fff;
        display: flex;
        flex-direction: column;
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
