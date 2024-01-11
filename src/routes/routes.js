import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '/src/components/NotFound/NotFound.vue';

const routes = [
    {
        path: '/', name: 'Home', component: () => import('@/components/Home/Home.vue')
    },
    {
        path: '/contact', name: 'Contact', component: () => import('@/components/Contact/Contact.vue')
    },
    {
        path: '/about', name: 'AboutUs', component: () => import('@/components/AboutUs/AboutUs.vue')
    },
    {
        path: '/faq', name: 'FAQ', component: () => import('@/components/FAQ/FAQ.vue')
    },
    {
        path: '/:pathMatch(.*)*', name: 'PageNotFound', component: NotFound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link'
})

export default router;