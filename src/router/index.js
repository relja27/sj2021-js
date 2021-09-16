import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vaccines from "@/views/Vaccines"
import Edit from "@/views/Edit";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/vaccines',
        name: 'vaccines',
        component: Vaccines
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: Edit
    },
    {
        path: '/edit',
        name: 'edit',
        component: Edit
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
