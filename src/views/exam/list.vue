<template>
    <div class="list">
        <div class="head">
            {{$route.meta.title}}
        </div>
        <header>
            <label for="">
                考试类型：
                <el-select v-model="exam_name">
                    <el-option
                        v-for="item in type"
                        :key="item.exam_id"
                        :label="item.exam_name"
                        :value="item.exam_name">
                    </el-option>
                </el-select>
            </label>
            <label for="">
                课程：
                <el-select v-model="subject_text">
                    <el-option
                        v-for="item in options"
                        :key="item.subject_id"
                        :label="item.subject_text"
                        :value="item.subject_text">
                    </el-option>
                </el-select>
            </label>
             <el-button type="primary" @click="searchFn({exam_name, subject_text})">
                 <i class="el-icon-search"></i>
                 查询
             </el-button>
        </header>
        <p></p>
        <div class="title">
            <span>试卷列表</span>
            <ul>
                <li v-for="(item,index) in liData" :key="index" 
                @click="clickFn(index)"
                :class="{active:curIndex==index}">{{item}}</li>
            </ul>
        </div>
        <p></p>
        <div class="session">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="试卷信息"
            >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="班级"
            
            id="table">
            <template slot-scope="scope">
                <div class="exam">
                    <span style="margin-left: 10px">考试班级</span>
                    <span>
                        <i style="margin-left: 10px" v-for="(item,index) in             scope.row.grade_name" :key="index">
                            {{item}}
                        </i>
                    </span>
                    
                </div>
                
            </template>
            </el-table-column>
            <el-table-column
            label="创建人"
            >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.user_name }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="开始时间"
            >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.start_time }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="结束时间"
            >
            <template slot-scope="scope">
                
                <div slot="reference" class="name-wrapper">
                    {{ scope.row.end_time }}
                </div>
               
            </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                <span style="margin-left : 10px; color: blue" @click="detail(scope.row.exam_exam_id)">详情</span>
                </template>
            </el-table-column>
        </el-table>
        
       </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"
export default {
    created(){
        this.getList()
        this.getData()
        this.getType()
    },
    computed:{
        ...mapState("examlist", ["tableData", "type", "options", "list"]),
    },
    data(){
        return {
            exam_name:"",
            subject_text:"",
            liData:["全部", "进行中", "已结束"],
            curIndex:1, 
        }
    },
    methods:{
        ...mapMutations('examlist', ['searchFn']),
        clickFn(index){
            console.log(1)
            this.curIndex = index;
        },
        detail(id){
            this.$router.push({
                path:"/home/detail.vue",
                query:{id:id}
            })
        },
        
        // ...mapActions("examlist", ["getList"]),
        // ...mapActions("examlist", ["getData"]),
        // ...mapActions("examlist", ["getType"]),
        getList(){
            this.$http.get('/api/exam/exam').then(res=>{
                this.$store.dispatch("examlist/getList", res.data.exam)
            })
        },
        getType(){
            this.$http.get('/api/exam/examType').then(res=>{
                this.$store.dispatch("examlist/getType", res.data.data)
            })
        },
        getData(){
            this.$http.get('/api/exam/subject').then(res=>{
                this.$store.dispatch("examlist/getData", res.data.data)
            })
        },

    }

}
</script>

<style scoped lang="scss">
.list{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .head{
        width: 100%;
        height: 60px;
        line-height: 30px;
        font-size: 22px;
        padding: 20px 20px;
    }
    header{
        width: 100%;
        height: 80px;
        background: #fff;
        padding-top:20px;
        label{
            font-size: 15px;
            margin: 0 40px;
        }
    }
    p{
        width: 100%;
        height: 10px;
        background: #eee;
    }
    .el-button{
        width: 150px;
    }
}
.session{
    width: 100%;
    flex: 1;
    overflow: auto;
}
.title{
    width: 100%;
    height: 50px;
    display: flex;
    font-size: 15px;
    span{
        width: 80%;
        height: 100%;
        line-height: 50px

    }
    ul{
        width: 20%;
        height: 100%;
        display: flex;
        li{
            border:1px solid #eee;
            width: 30%;
            height: 60%;
            line-height: 30px;
            text-align: center;
            margin-top: 10px;
        }
    }
}
.active{
    border:1px solid blue !important;
}

.exam{
    width: 350px;
    display: flex;
    flex-direction: column;
    span{
        width: 100%;
        height: 50%;
        display: flex;
        i{
            font-style: normal;
        }
    }
   
} 

</style>
