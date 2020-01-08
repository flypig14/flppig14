<template>
  <div class="home">
    <el-container>
            <el-header>
                <div class="el-left">
                    <img src="../../public/images/1_02.png" alt="">
                </div>
                <div class="el-right">
                    <p class="user" >
                       <span>欢迎</span>
                        <ul class="selectList">
                            <li>个人中心</li>
                            <li>我的班级</li>
                            <li>设置</li>
                            <li>退出登录</li>
                        </ul>
                    </p>
                </div>
            </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>试题管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link to="/home/addQuestions">添加试题</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link to="/home/questionsType">试题分类</router-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <router-link to="/home/watchQuestions">查看试题</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-4">
                  <router-link to="/home/addUser">添加用户</router-link>
                </el-menu-item>
                <el-menu-item index="1-5">
                  <router-link to="/home/showUser">用户展示</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

          <el-menu
            default-active="3"
            class="el-menu-vertical-demo"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>考试管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-6">
                  <router-link to="/home/addExam">添加考试</router-link>
                </el-menu-item>
                <el-menu-item index="1-7">
                  <router-link to="/home/list">试卷列表</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

          <el-menu
            default-active="4"
            class="el-menu-vertical-demo"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>班级管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-8">
                  <router-link to="/home/grade">班级管理</router-link>
                </el-menu-item>
                <el-menu-item index="1-9">
                  <router-link to="/home/room">教室管理</router-link>
                </el-menu-item>
                <el-menu-item index="1-10">
                  <router-link to="/home/student">学生管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

          <el-menu
            default-active="5"
            class="el-menu-vertical-demo"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>阅卷管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-11">
                  <router-link to="/home/classlist">待批班级</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

        </el-aside>
        <el-main>
          <div class="box">
            <header>
              {{$route.meta.title}}
            </header>
            <main>
              <router-view></router-view>
            </main>
            <footer>

            </footer>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
 .el-header {
    background-color: #fcfcfc;
    color: #333;
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    .el-left{
        width: 80%;
        height: 60px;
    }
    .el-right{
        width: 20%;
        height: 60px;
        display: flex;
       
        .user{
            width: 120px;
            height: 60px;
            margin: 0 auto;
            display: flex;
            span{
                width: 120px;
                height: 60px;
                line-height: 60px;
                text-align: center;
            }
            span:hover{
                background: #ccc;
            }
        }
        .user:hover .selectList{
            display: block
        }
        .selectList{
            width: 100px;
            height: 120px;
            background: #fff;
            position: fixed;
            top: 60px;
            right:8%;
            display: flex;
            flex-direction: column;
            display: none;
            li{
                width: 100%;
                height: 25%;
                line-height: 30px;
            }
            li:hover{
                background: #eee;
            }
        }
    }
  }
  
  .el-aside {
    background-color: #222a40;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    p{
        width: 100%;
        height: 90px;
        display: flex;
        flex-direction: column;
        a{
            width: 100%;
            height: 30%;
            line-height: 27px;
            text-align: center;
            color: #fff;
        }
    }
    
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 60px 0 0 200px;
  }
  .box{
      width: 96%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      header{
          width: 100%;
          height: 80px;
          line-height: 80px;
          font-size:25px;
      }
      main{
          flex:1;
          width: 100%;
          overflow: auto;
          background: #fff;
      }
      footer{
        width: 100%;
        height: 50px;
        background: #0ff;
      }
  }
  .el-menu{
      background: #222a40;
     a{
         text-decoration: none
     }
  }
  .el-submenu__title{
    color: #fff;
  }
  .el-submenu__title:hover{
    background: #222a40;
  }
  .el-menu-item{
    a{
      color: #ccc;
    }
  }
  .el-menu-item:hover{
    background: #000;
    a{
       color: #fff;
    }
   
  }
</style>
