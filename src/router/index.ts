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
import odinTicTacToe from "@/views/odinTicTacToe.vue";
import restaurantPage from "../views/RestaurantPage.vue";
import RestaurantMenu from "@/views/RestaurantMenu.vue";
import RestaurantContact from "@/views/RestaurantContact.vue";

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
    },
    {
        path: '/odinLandingPage',
        name: 'Odin Landing page',
        component: odinLandingPage
    },
    {
        path: '/scrimbaScoreBoard',
        name: 'Scrimba Score-Board',
        component: scrimbaScoreBoard
    },
    {
        path: '/scrimbaUnitConversion',
        name: 'Unit Conversion',
        component: scrimbaUnitConversion
    },
    {
        path: '/scrimbaPasswordGenerator',
        name: 'Password generator',
        component: scrimbaPasswordGenerator
    },
    {
        path: '/odinRPS',
        name: 'Odin Rock Paper Scissor',
        component: odinRPS
    },
    {
        path: '/odinEtchaSketch',
        name: 'Odin Etch a Sketch',
        component: odinEtchaSketch
    },
    {
        path: '/odinCalculator',
        name: 'Odin Calculator',
        component: odinCalculator
    },
    {
        path: '/odinTicTacToe',
        name: 'Odin Tic Tac Toe',
        component: odinTicTacToe
    },
    {
        path: '/restaurantPage',
        name: 'Odin Restaurant',
        component: restaurantPage
    },
    {
        path: '/restaurantPage/Menu',
        name: 'Restaurant Menu',
        component: RestaurantMenu
    },
    {
        path: '/restaurantPage/Contact',
        name: 'Restaurant Contact',
        component: RestaurantContact
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
