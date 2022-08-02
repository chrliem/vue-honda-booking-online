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
            meta:{title:'Online Booking'},
            component: importComponent('AddBooking'),
        },
        {
            path:'/admin/login',
            name: 'AdminLogin',
            meta: {title: 'Login'},
            component: importComponent('Admin/AdminLogin'),
        },
            // children: [
                {
                    path:"/admin/dashboard/",
                    name:"BookingDashboard",
                    meta: {title:'Booking Dashboard'},
                    component: importComponent('Admin/BookingDashboard'),
                },
            // ]
        // },
        
    ]
});

router.beforeEach((to, from, next)=>{
    document.title = to.meta.title
    if(to.name === 'BookingDashboard' && localStorage.getItem('token')===null) next({ name: 'AdminLogin'})
    else next()
})

router.beforeEach((to, from, next)=>{
    document.title = to.meta.title
    if(to.name !== 'BookingDashboard' && to.name!=='AddBooking' && localStorage.getItem('token')!==null) next({ name: 'BookingDashboard'})
    else next()
})

// router.beforeEach((to, from, next)=>{
//     document.title = to.meta.title
//     if(to.name === 'AddBooking' && localStorage.getItem('token')===null) next({ name: 'AddBooking'})
//     else next()
// })
export default router;