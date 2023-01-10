
import { createWebHistory, createRouter } from 'vue-router'

/* Guest Component */
const Home = () => import('../Pages/Home.vue')
const About = () => import('../Pages/About.vue')

const routes = [
    {
        path: "/",
        name:'home',
        component: Home,

    },{
        path: "/about",
        name:'about',
        component: About,

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
export default router




