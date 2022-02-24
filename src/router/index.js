import {createRouter, createWebHistory} from 'vue-router';
import Home from '../view/Home.vue'
import About from '../view/About.vue'
import Team from '../view/team.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/team',
            component:Team 
        },
      
    ]
})

export default router