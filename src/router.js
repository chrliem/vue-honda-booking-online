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
            name: 'Online Booking',
            meta:{title:'Online Booking'},
            component: importComponent('AddBooking'),
        },
        
    ]
});
export default router;