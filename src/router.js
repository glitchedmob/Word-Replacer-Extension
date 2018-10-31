import Vue from 'vue'
import Router from 'vue-router'
import Popover from './views/Popover.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/popover',
      name: 'Popover',
      component: Popover
    },
    {
      path: '/options',
      name: 'Options',
      component: () => import(/* webpackChunkName: "about" */ './views/Options.vue')
    }
  ]
})
