import { createRouter, createWebHistory } from 'vue-router'

// Import components
// import HelloWorldView from '../views/HelloWorldView.vue'
import ConditionsView from '../views/ConditionsView.vue'
import HomeView from '../views/HomeView.vue'
import AbilityScores from '@/components/AbilityScores.vue';

// Routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/conditions',
        name: 'conditions',
        component: ConditionsView
    },
    {
        path: '/ability-scores',
        name: 'ability-scores',
        component: AbilityScores
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;