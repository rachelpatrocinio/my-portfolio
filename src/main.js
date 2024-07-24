import { createApp } from 'vue'
import './assets/style/general.scss'
import App from './App.vue'
import router from './router.js'
// import { createRouter, createWebHistory} from 'vue-router'

// import AppHome from './pages/AppHome.vue'

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/', component: AppHome}
//     ]
//   })

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'



/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fas, far, fab)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount('#app')