import Vue from 'vue';
import Router from 'vue-router';
import Popup from './views/Popup.vue';
import Options from './views/Options.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/popup',
            name: 'Popup',
            component: Popup,
        },
        {
            path: '/options',
            name: 'Options',
            component: Options,
        },
    ],
});
