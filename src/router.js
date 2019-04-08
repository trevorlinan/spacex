import Vue from 'vue';
import Router from 'vue-router';
import SpaceX from './views/SpaceX.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'spacex',
            component: SpaceX,
        },
        {
            path: '/flight/:flightNumber',
            name: 'flight',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Flight.vue'),
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});
