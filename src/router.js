import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/popover',
      name: 'Popover',
      component: () => import(/* webpackChunkName: "popover" */ './views/Popover.vue'),
    },
    {
      path: '/options',
      name: 'Options',
      component: () => import(/* webpackChunkName: "about" */ './views/Options.vue'),
    },
  ],
});
