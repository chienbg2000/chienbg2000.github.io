import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/Home.vue'
import Contact from './components/Contact.vue'
import Article from './components/ArticleDetail.vue'


const routes = [
    {
        path: '/',
        component: HomePage
    },
    // {
    //     path: '/about',
    //     component: About
    // },
    {
        path: '/contact',
        component: Contact
    },
    { path: '/post/:slug', component: Article, props: true }

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
