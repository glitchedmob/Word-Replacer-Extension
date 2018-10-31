import Vue from 'vue';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vuetify from 'vuetify';
import 'vuetify/src/stylus/main.styl';

import App from './App.vue';
import router from './router';

Vue.use(Vuetify, {
    iconfont: 'md',
});


Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
