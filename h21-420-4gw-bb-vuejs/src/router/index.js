import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home'
import Add_Event from '../views/add-event'
import Modify_Event from '../views/modify_event'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
    {
        path: '/add-event',
        name: 'Add-event',
        component: add-event
    },
    {
        path: '/change-event',
        name: 'Modifier évènement',
        component: change-event
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  
  export default router