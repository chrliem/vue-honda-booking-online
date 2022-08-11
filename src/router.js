/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

function importComponent(path) {
   return () => import(`./components/${path}.vue`)
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            name: 'AddBooking',
            meta:{title:'Online Booking Service'},
            component: importComponent('AddBooking'),
        },
        {
            path:'/admin/login',
            name: 'AdminLogin',
            meta: {title: 'Login'},
            component: importComponent('Admin/AdminLogin'),
        },
        {
            path:"/admin/dashboard",
            name:"BookingDashboard",
            meta: {title:'Booking Dashboard'},
            component: importComponent('Admin/BookingDashboard'),
        },
        {
            path:'/it/login',
            name: 'ITLogin',
            meta: {title: 'Login'},
            component: importComponent('IT/ITLogin'),
        },
        {
            path:"/it/user-dashboard",
            name:"UserDashboard",
            meta: {title:'User Dashboard'},
            component: importComponent('IT/UserDashboard'),
        },       
        {
            path:"/it/whatsapp-dashboard",
            name:"WhatsappDashboard",
            meta: {title:'Whatsapp Dashboard'},
            component: importComponent('IT/WhatsappDashboard'),
        },              
    ]
});

router.beforeEach((to, from, next)=>{
    document.title = to.meta.title
    if(to.name === 'BookingDashboard' && localStorage.getItem('token')===null) next({ name: 'AdminLogin'})
    else next()
})

router.beforeEach((to, from, next)=>{
    document.title = to.meta.title
    if(to.name === 'UserDashboard' && localStorage.getItem('token')===null) next({ name: 'ITLogin'})
    else next()
})

router.beforeEach((to, from, next)=>{
    document.title = to.meta.title
    if(to.name === 'UserDashboard' && localStorage.getItem('token')!==null && localStorage.getItem('role')===2) next({ name: 'BookingDashboard'})
    else next()
})

router.beforeEach((to, from, next)=>{
    document.title = to.meta.title
    if(to.name === 'BookingDashboard' && localStorage.getItem('token')!==null && localStorage.getItem('role')===1) next({ name: 'UserDashboard'})
    else next()
})

// router.beforeEach((to, from, next)=>{
//     document.title = to.meta.title
//     if(to.name !== 'BookingDashboard' && to.name!=='AddBooking') next({ name: 'BookingDashboard'})
//     else next()
// })

// router.beforeEach((to, from, next)=>{
//     document.title = to.meta.title
//     if(to.name === 'AddBooking' && localStorage.getItem('token')===null) next({ name: 'AddBooking'})
//     else next()
// })
export default router;