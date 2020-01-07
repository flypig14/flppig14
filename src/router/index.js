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
            component:()=>import("../views/user/addUser/addUser.vue")
        }, {
            path:"/home/showUser",
            component:()=>import("../views/user/showUser/showUser.vue"),
            children:[{
                path:'/home/showUser/userData',
                component:()=>import("../views/user/showUser/userData/userData.vue")
            },
            {
                path:'/home/showUser/idData',
                component:()=>import("../views/user/showUser/idData/idData.vue")
            },
            {
                path:'/home/showUser/apiPower',
                component:()=>import("../views/user/showUser/apiPower/apiPower.vue")
            },
            {
                path:'/home/showUser/apiRelation',
                component:()=>import("../views/user/showUser/apiRelation/apiRelation.vue")
            },
            {
                path:'/home/showUser/intoPower',
                component:()=>import("../views/user/showUser/intoPower/intoPower.vue")
            },
            {
                path:'/home/showUser/viewPower',
                component:()=>import("../views/user/showUser/viewPower/viewPower.vue")
            },
            {
                path:'/home/showUser',
                redirect:'/home/showUser/userData'
            }]
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
