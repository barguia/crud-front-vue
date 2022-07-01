import { createRouter, createWebHistory} from "vue-router"
import LoginPage from '@/pages/Login/LoginPage.vue'
import HomePage from "@/pages/HomePage";

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router