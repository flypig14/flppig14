<template>
    <div class="watch">
        <div class="head">
             {{$route.meta.title}}
        </div>
        <header>
            <label for="">
                <h4>所有课程：</h4> 
                <span @click="whole" :class="{active : flag === true}">All</span>
                <span v-for="(v,i) in type" :key="i" :class="[flv ? 'active' : '']">
                    {{v.subject_text}}
                </span>
            </label>
            <div class="select">
                考试类型：
                <el-select v-model="exam_name" placeholder="请选择">
                    <el-option
                        v-for="item in questype"
                        :key="item.exam_id"
                        :label="item.exam_name"
                        :value="item.exam_name">
                    </el-option>
                </el-select>
                题目类型：
                <el-select v-model="questions_type_text" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.questions_type_id"
                        :label="item.questions_type_text"
                        :value="item.questions_type_text">
                    </el-option>
                </el-select>
                  <el-button type="primary" @click="searchVn(exam_name, questions_type_text)">
                      <i class="el-icon-search"></i>
                      主要按钮
                    </el-button>
            </div>
        </header>
        <p></p>
        <div class="listbox" v-for="(v,i) in data" :key="i">
            <div class="left">
                <span>{{v.title}}</span>
                <span>
                   <i>{{v.questions_type_text}}</i>
                   <i>{{v.subject_text}}</i>
                   <i>{{v.exam_name}}</i>
                </span>
                <span>{{v.user_name}} 发布</span>
            </div>
<<<<<<< HEAD
            <div class="right" style="color : blue" @click="$router.push('/home/quesDetail')">编辑</div>
=======
            <div class="right" @click="changes(v.questions_id)">编辑</div>
>>>>>>> list
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from "vuex"
export default {
    created(){
        this.getList()
        this.getData()
        this.getType()
        this.getOpt()
    },
    computed:{
        ...mapState("watch", ["data", "options", "type", "questype", "list"]),
        ...mapMutations("watch", ["searchVn"])
    },
    data(){
        return {
            exam_name:"",
            questions_type_text:"",
            flag:false,
            curIndex:null,
            flv:false
        }
    },
    methods:{
        ...mapActions("watch", ["getList", "getOpt", "getType", "getData"]),
<<<<<<< HEAD
        whole(){
            this.flag = !this.flag
            if(this.flag){
                this.flv = !this.flv
            }else{
                this.flv = !this.flv
            }
        },
        
=======
        changes(id){
            console.log(id)
            this.$router.push({
                path:'/home/watchDetail',
                query:{id:id}
            })
        }
>>>>>>> list
        // searchVn(exam_name, questions_type_text){
        //     console.log(exam_name, questions_type_text)
        // }
    }

}
</script>

<style scoped lang="scss">
.watch{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.head{
    width: 100%;
    height: 60px;
    line-height: 30px;
    font-size: 22px;
    padding: 20px 20px;
}
header{
    width: 100%;
    height: 100px;
    background: #fff;
    font-size: 14px;
    label{
        width: 100%;
        height: 50px;
        display: flex;
        margin-left: 10px;
        // line-height: 50px;
         overflow: hidden;

        h4{
            margin: 20px 25px;
        }
        span{
            height: 20px;
            margin: 20px 10px 20px 0;
           
        }
    }
    .select{
        width: 80%;
        height: 50px;
        margin-left: 34px;
        line-height: 50px;
        overflow: hidden;
    }
}
.active{
    background: #0ff;
    color: #fff;
}
.hover{
    background: #0ff;
    color: #fff;
}
.el-button{
    width: 150px;
    height: 40px;
    margin: 5px 20px;
}
.el-select,.el-input{
    width: 300px;
    // margin: 0 10px;
    margin-right: 60px;
    height: 20px !important;
}
p{
    width: 100%;
    height: 10px;
    background: #eee;
}
.listbox{
    width: 100%;
    height: 90px;
    display: flex;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    background: #fff;
    .left{
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 30px;
        span{
            width: 100%;
            height: 30%;
            display: flex;
            line-height: 27px;
            i{
                font-style: normal;
                font-size: 12px;
                margin-top: 5px;
                &:nth-child(1){
                    width: 70px;
                    height: 20px;
                    border:1px solid #bce6ff;
                    line-height: 20px;
                    text-align: center;
                    background:#e6f7ff;
                    color: #1890ff;
                }
                &:nth-child(2){
                    width: 110px;
                    height: 20px;
                    border:1px solid #adc6ff;
                    line-height: 20px;
                    text-align: center;
                    background: #f0f5ff;
                    margin: 5px 5px;
                    color: #8654eb;
                }
                &:nth-child(3){
                    width: 50px;
                    height: 20px;
                    border:1px solid #ffd591;
                    line-height: 20px;
                    text-align: center;
                    background:#fff7e6;
                    color: #fca916;
                }
            }
        }
    }
    .right{
        width: 10%;
        height: 100%;
        line-height: 90px
    }
}
.listbox:hover{
    background: #eee;
}
</style>
