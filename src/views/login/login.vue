<template>
    <div class="registry">
      <img :src="srcs" alt="">
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
    </div>
</template>

<script>
export default {
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
            srcs:require('../../../public/20200102205356.jpg'),
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
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style lang="scss" scoped>
*{
  color:black;
}
.registry {
  width: 100%;
  height: 100%;
  position: relative;
  img{
  width: 100%;
  height: 100%;
  }
}
.box{
  width:400px;
  height:350px;
  background: rgba(255, 255, 255, .5);
  position: absolute;
  top:50%;
  right:50%;
  margin-top: -150px;
  margin-right: -150px
}
.el-form-item{
  margin: 50px 0;
  font-weight: 800
}
.el-input{
  width: 80%;
  margin: 0 auto;
}
.el-button:nth-child(1){
  margin-left: 20px
}
</style>
