import Vue from 'vue';
import App from './App.vue';
import router from './router'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';
import store from './store';
Vue.use(FlashMessage);

Vue.use(BootstrapVue);
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
