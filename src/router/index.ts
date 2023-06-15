import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import odinSignUp from '../views/odinForm.vue'
import odinDashboard from "@/views/odinDashboard.vue";
import discordHelp from "@/views/discordHelp.vue";
import odinPractice from "@/views/odinPractice.vue";
import odinLibrary from "@/views/odinLibrary.vue";
import odinLandingPage from "@/views/odinLandingPage.vue";
import scrimbaScoreBoard from '@/views/scrimbaScoreBoard.vue'
import scrimbaUnitConversion from "@/views/scrimbaUnitConversion.vue";
import scrimbaPasswordGenerator from "@/views/scrimbaPasswordGenerator.vue";
import odinRPS from "@/views/odinRPS.vue";
import odinEtchaSketch from "@/views/odinEtchaSketch.vue";
import odinCalculator from "@/views/odinCalculator.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/odin/Form',
        name: 'odin Form',
        component: odinSignUp
    },
    {
        path: '/odin/Dashboard',
        name: 'Odin Dashboard',
        component: odinDashboard
    },
    {
        path: '/discordHelp',
        name: 'Discord Help',
        component: discordHelp
    },
    {
        path: '/odin/Practice',
        name: 'Odin Practice',
        component: odinPractice
    },
    {
        path: '/odin/Library',
        name: 'Odin Library',
        component: odinLibrary
    },
    {
        path: '/odin/LandingPage',
        name: 'Odin Landing page',
        component: odinLandingPage
    },
    {
        path: '/scrimba/ScoreBoard',
        name: 'Scrimba Score-Board',
        component: scrimbaScoreBoard
    },
    {
        path: '/scrimba/UnitConversion',
        name: 'Unit Conversion',
        component: scrimbaUnitConversion
    },
    {
        path: '/scrimba/PasswordGenerator',
        name: 'Password generator',
        component: scrimbaPasswordGenerator
    },
    {
        path: '/odin/RPS',
        name: 'Odin Rock Paper Scissor',
        component: odinRPS
    },
    {
        path: '/odin/EtchSketch',
        name: 'Odin Etch a Sketch',
        component: odinEtchaSketch
    },
    {
        path: '/odin/Calculator',
        name: 'Odin Calculator',
        component: odinCalculator
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
