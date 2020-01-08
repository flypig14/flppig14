<template>
    <div class="list">
        <header>
            <label for="">
                考试类型：
                <el-select v-model="value">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </label>
            <label for="">
                课程：
                <el-select v-model="value">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </label>
             <el-button type="primary" >
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
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="试卷信息"
            width="350px">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="班级"
            width="350px">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.grade_name }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="创建人"
            width="150px">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.user_name }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="开始时间"
            width="200px">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.start_time }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="结束时间"
            width="200px">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.end_time }}</el-tag>
                </div>
                </el-popover>
            </template>
            </el-table-column>
            <el-table-column label="操作">
               <span style="margin-left : 10px">删除</span>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
    created(){
        this.getData()
    },
    computed:{
        ...mapState("list", ["tableData"])
    },
    data(){
        return {
            value:"",
            options:[],
            liData:["全部", "进行中", "已结束"],
            curIndex:1,
            
        }
    },
    methods:{
        clickFn(index){
            console.log(1)
            this.curIndex = index 
        },
        ...mapActions("list", ["getData"])
    }

}
</script>

<style scoped lang="scss">
.list{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    header{
        width: 100%;
        height: 80px;
        background: #fff;
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
</style>
