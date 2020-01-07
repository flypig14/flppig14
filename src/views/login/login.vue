<template>
    <div class="login">
        <img :src="srcs" alt="">
        <div class="box">
            <el-input
                placeholder="请输入内容"
                v-model="user_name"
                clearable>
            </el-input>
            <el-input placeholder="请输入密码" v-model="user_pwd" show-password></el-input>
            <el-button type="primary" @click="loginFn">登录</el-button>
        </div>
        
    </div>
</template>

<script>
// import axios from "axios"
export default {
    data(){
        return{
            srcs:require('../../../public/20200102205356.jpg'),
            user_name:"",
            user_pwd:""
        }
    },
    methods:{
        loginFn(){
            if(!this.user_name.trim() && !this.user_pwd.trim()){
                alert("不能为空")
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .login{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .box{
        width:400px;
        height: 350px;
        background: rgba(255, 255, 255, .5);
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -175px;
        margin-left: -200px;
        display: flex;
        flex-direction: column;
    }
    .el-input{
        width: 80%;
        margin: 50px 10% 0 10%;
    }
    .el-button{
        margin: 50px 15% 0 15%;
        width: 70%;
    }
</style>
