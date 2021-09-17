import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vaccines from "@/views/Vaccines"
import Students from "@/views/Students";
import Edit from "@/views/Edit";
import UpdateVaccine from "@/views/UpdateVaccine";
import UpdateStudent from "@/views/UpdateStudent";
import Register from "@/views/Register";

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
        path: '/students',
        name: 'students',
        component: Students
    },
    {
        path: '/updatevaccine/:id',
        name: 'updateVaccine',
        component: UpdateVaccine
    },
    {
        path: '/updatestudent/:id',
        name: 'updateStudent',
        component: UpdateStudent
    },

    {
        path: '/register',
        name: 'register',
        component: Register
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router