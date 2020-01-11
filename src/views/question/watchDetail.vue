<template>
    <div class="watchDetail">
        <header>
            {{$route.meta.title}} 
        </header>
        <div class="session">
      <p>
          题目信息
      </p>
      <p>
          题干
      </p>
      <el-input  placeholder="请输入题干标题，不超过20个字" v-model="title"></el-input>
      <p>
        题目主题
      </p>
      <Markdown v-model="mark1" />

    <p class="artic">
      请选择考试类型
    </p>
    <el-select v-model="value1" placeholder="请选择考试类型">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <p>
      请选择课程类型
    </p>
    <el-select v-model="value2" placeholder="请选择课程类型">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <p>
      请选择题目类型
    </p>
    <el-select v-model="value3" placeholder="请选择题目类型">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
  </el-select>
      <Markdown v-model="mark2" />
    </div>
    </div>
</template>

<script>
import Markdown from 'vue-meditor'
import https from '../../utils/request.js'
export default {
    components:{Markdown},
    data(){
        return{
            id:this.$route.query.id,
            data:{},
            mark1:'',
            mark2:'',
            value1:"",
            value2:"",
            value3:"",
            title:"",
            options:[]
        }
    },
    computed:{

    },
    methods:{
        getList(id){
            https.get("/api/exam/questions/condition", {questions_id:id}).then(res=>{
                this.data[0] = res.data.data;
                this.title = this.data[0][0].title;
                this.mark1 = this.data[0][0].questions_stem;
                this.value1 = this.data[0][0].exam_name;
                this.value2 = this.data[0][0].subject_text;
                this.value3 = this.data[0][0].questions_type_text;
                this.mark2 = this.data[0][0].questions_answer;                
            })
        },
        changeFn(){
            // this.data.exam_name = this.value1;
            // this.data.subject_text = this.value2;
            // this.data.questions_type_text = this.value3;
        },
    },
    created(){
        this.getList(this.id);
        this.changeFn();
    }

}
</script>

<style>
.watchDetail{
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
</style>
