import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import Inbox from './pages/Inbox.vue'
import Explore from './pages/Explore.vue'
import Login from './pages/Login.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component:  Home},
        {path: '/inbox', component: Inbox},
        {path: '/explore', component: Explore},
        {path: '/login', component: Login}
    ]
});




export default router;