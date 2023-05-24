import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import odinSignUp from '../views/odinForm.vue'
import odinDashboard from "@/views/odinDashboard.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/odinForm',
        name: 'odin Form',
        component: odinSignUp
    },
    {
        path: '/odinDashboard',
        name: 'Odin Dashboard',
        component: odinDashboard
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
