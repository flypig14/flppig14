import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: ()=>import('../views/home.vue'),
        children:[{
            path:"/home/addQuestions",
            component:()=>import("../views/question/addQuestions.vue"),
            meta:{
                title:"添加试题"
            }
        }, {
            path:"/home/questionsType",
            component:()=>import("../views/question/questionsType.vue"),
            meta:{
                title:"试题分类"
            }
        }, {
            path:"/home/watchQuestions",
            component:()=>import("../views/question/watchQuestions.vue"),
            meta:{
                title:"查看试题"
            }
        }, {
            path:"/home/addUser",
            component:()=>import("../views/user/addUser.vue"),
            meta:{
                title:"添加用户"
            }
        }, {
            path:"/home/showUser",
            component:()=>import("../views/user/showUser.vue"),
            meta:{
                title:"用户展示"
            }
        }, {
            path:"/home/addExam",
            component:()=>import("../views/exam/addExam.vue"),
            meta:{
                title:"添加考试"
            }
        }, {
            path:"/home/list",
            component:()=>import("../views/exam/list.vue"),
            meta:{
                title:"试卷列表"
            }
        }, {
            path:"/home/grade",
            component:()=>import("../views/classroom/grade.vue"),
            meta:{
                title:"班级管理"
            }
        }, {
            path:"/home/room",
            component:()=>import("../views/classroom/room.vue"),
            meta:{
                title:"教室管理"
            }
        }, {
            path:"/home/student",
            component:()=>import("../views/classroom/student.vue"),
            meta:{
                title:"学生管理"
            }
        }, {
            path:"/home/classlist",
            component:()=>import("../views/paper/classlist.vue"),
            meta:{
                title:"待批班级"
            }
        }]
    },
    {
        path:'/login',
        component:()=>import('../views/login/login.vue')
    },
    {
        path:'/',
        redirect:'/login'
    }
  
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
