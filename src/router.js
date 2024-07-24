import { createRouter, createWebHistory} from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppEsperienze from './pages/AppEsperienze.vue'
import AppProgetti from './pages/AppProgetti.vue'
import AppFormazione from './pages/AppFormazione.vue'
import AppContatti from './pages/AppContatti.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppHome},
        { path: '/esperienze', component: AppEsperienze},
        { path: '/progetti', component: AppProgetti},
        { path: '/formazione', component: AppFormazione},
        { path: '/contatti', component: AppContatti}
    ]
  })

export default router
