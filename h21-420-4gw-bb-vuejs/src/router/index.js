import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home'
import Add_Event from '../views/add_event'
import Change_Event from '../views/modify_event'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/add-event',
        name: 'Add-event',
        component: Add_Event
    },
    {
        path: '/change-event/:id',
        name: 'Modifier évènement',
        component: Change_Event,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  
  export default router