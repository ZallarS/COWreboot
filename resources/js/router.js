import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: defineAsyncComponent(() => import('@/components/Home.vue'))
    },
    // Другие маршруты...
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
