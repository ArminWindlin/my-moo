import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/MooHome';

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/moo',
            component: Home
        }
    ]
});

export default router;
