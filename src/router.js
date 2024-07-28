import { createRouter, createWebHistory} from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppMe from './pages/AppMe.vue'
import AppProgetti from './pages/AppProgetti.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppHome},
        { path: '/sudime', component: AppMe},
        { path: '/progetti', component: AppProgetti},
    ]
  })

export default router
