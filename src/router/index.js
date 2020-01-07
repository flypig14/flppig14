import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: ()=>import('../views/home.vue'),
        children:[{
            path:"/home/addQuestions",
            component:()=>import("../views/question/addQuestions.vue")
        }, {
            path:"/home/questionsType",
            component:()=>import("../views/question/questionsType.vue")
        }, {
            path:"/home/watchQuestions",
            component:()=>import("../views/question/watchQuestions.vue")
        }, {
            path:"/home/addUser",
            component:()=>import("../views/user/addUser.vue")
        }, {
            path:"/home/showUser",
            component:()=>import("../views/user/showUser.vue")
        }, {
            path:"/home/addExam",
            component:()=>import("../views/exam/addExam.vue")
        }, {
            path:"/home/list",
            component:()=>import("../views/exam/list.vue")
        }, {
            path:"/home/grade",
            component:()=>import("../views/classroom/grade.vue")
        }, {
            path:"/home/room",
            component:()=>import("../views/classroom/room.vue")
        }, {
            path:"/home/student",
            component:()=>import("../views/classroom/student.vue")
        }, {
            path:"/home/classlist",
            component:()=>import("../views/paper/classlist.vue")
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
