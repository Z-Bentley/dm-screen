import { createRouter, createWebHistory } from 'vue-router'

// Import components
// import HelloWorldView from '../views/HelloWorldView.vue'
import ConditionsView from '../views/ConditionsView.vue'
import HomeView from '../views/HomeView.vue'

// Routes
const routes = [
    {
        path: '/',
        name: 'Hello',
        component: HomeView
    },
    {
        path: '/conditions',
        name: 'conditions',
        component: ConditionsView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;