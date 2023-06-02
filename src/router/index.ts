import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import odinSignUp from '../views/odinForm.vue'
import odinDashboard from "@/views/odinDashboard.vue";
import discordHelp from "@/views/discordHelp.vue";
import odinPractice from "@/views/odinPractice.vue";
import odinLibrary from "@/views/odinLibrary.vue";

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
    },
    {
        path: '/discordHelp',
        name: 'Discord Help',
        component: discordHelp
    },
    {
        path: '/odinPractice',
        name: 'Odin Practice',
        component: odinPractice
    },
    {
        path: '/odinLibrary',
        name: 'Odin Library',
        component: odinLibrary
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
