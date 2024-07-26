import { createRouter, createWebHistory} from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppMe from './pages/AppMe.vue'
import AppEsperienze from './pages/AppEsperienze.vue'
import AppProgetti from './pages/AppProgetti.vue'
import AppContatti from './pages/AppContatti.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppHome},
        { path: '/sudime', component: AppMe},
        { path: '/esperienze', component: AppEsperienze},
        { path: '/progetti', component: AppProgetti},
        { path: '/contatti', component: AppContatti}
    ]
  })

export default router
