import { createRouter, createWebHistory} from "vue-router"
import LoginPage from '@/pages/Login/LoginPage.vue'
import HomePage from "@/pages/HomePage"
import UserPage from "@/pages/User/UserPage"

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/users',
        name: 'users',
        component: UserPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router