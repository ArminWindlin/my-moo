import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/MooHome';
import AnalyticsTest from './components/AnalyticsTest';

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
        },
        {
            path: '/my-moo',
            name: 'home',
            component: Home
        },
        {
            path: '/analytics-test',
            name: 'analyticsTest',
            component: AnalyticsTest
        },
        {
            path: '/my-moo/analytics-test',
            name: 'analyticsTest',
            component: AnalyticsTest
        }
    ]
});

export default router;
