<template>
<<<<<<< HEAD
    <div class="registry">
      <img :src="srcs"/>
      <div class="box">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="pass">
        <el-input type="text" v-model="ruleForm2.pass" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" ></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        </el-form>
      </div>
=======
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
>>>>>>> 8914a5aa88b55884ae442dc7f37615c7c6a8ad9f
    </div>
</template>

<script>
import axios from "axios"
import cookie from "js-cookie"
export default {
<<<<<<< HEAD
    data() {
        var checkAge = (rule, value, callback) => {
            console.log(rule, value, callback)
            if (!value) {
                return callback(new Error("年龄不能为空"));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error("请输入数字值"));
                } else {
                    callback();
                }
        
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.ruleForm2.checkPass !== "") {
                    this.$refs.ruleForm2.validateField("checkPass");
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.ruleForm2.pass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            srcs:require('../../../public/3354.jpg'),
            ruleForm2: {
                pass: "",
                checkPass: "",
                age: ""
            },
            rules2: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                checkPass: [{ validator: validatePass2, trigger: "blur" }],
                age: [{ validator: checkAge, trigger: "blur" }]
            }
        };
=======
    data(){
        return{
            srcs:require('../../../public/20200102205356.jpg'),
            user_name:"",
            user_pwd:""
        }
>>>>>>> 8914a5aa88b55884ae442dc7f37615c7c6a8ad9f
    },
    methods:{
        loginFn(){
            if(!this.user_name.trim() && !this.user_pwd.trim()){
                alert("不能为空")
            }else{
                axios.post("/api/user/login", {
                    user_name:this.user_name,
                    user_pwd:this.user_pwd
                }).then(res=>{
                    if(res.data.code === 1){
                        cookie.set("token", res.data.token)
                        this.$router.push("/home")
                    }else{
                        alert(res.data.msg)
                    }
                })
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
