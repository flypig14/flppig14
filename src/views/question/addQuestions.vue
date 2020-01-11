<template>
  <div class="add">
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
      <el-input  placeholder="请输入题干标题，不超过20个字" v-model="ipt"></el-input>
      <p>
        题目主题
      </p>
      <markdown v-model="mark1" />

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
      <markdown v-model="mark2" />
      <el-button type="primary" class="btn" @click="pushList()">提交</el-button>
    </div>
  </div>
</template> 
<script>
import Markdown from 'vue-meditor';
import {mapActions} from 'vuex';

export default {
    components: { Markdown },
    computed:{
    },
    methods:{
        ...mapActions('pushList', ["pushList"])

    },
    data () {
        return {
            ipt:'',
            value1:'',
            value2:'',
            value3:'',
            mark1:'',
            mark2:'',
            options:[]
        }
    },
}
</script>
<style scoped lang="scss">
.add{
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
  width:100%;
  height:100%;
  padding-bottom:50px;
  .btn{
  margin-top: 30px;
  margin-left: 55px;
}
}
</style>
