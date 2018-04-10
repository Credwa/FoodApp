// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel'
import Toastr from 'vue-toastr';
require('vue-toastr/src/vue-toastr.less');

import VeeValidate from 'vee-validate';
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';
import VuejsDialog from "vuejs-dialog"
import {Tabs, Tab} from 'vue-tabs-component';
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)
Vue.config.productionTip = false
Vue.use(VueCarousel)
Vue.use(Toastr);
Vue.use(VuejsDialog)
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
Vue.use(VeeValidate);
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {

    baseUrl: process.env.API_URL, // Your API domain

    providers: {
        google: {
            clientId: '876516528239-q85qv06m8gk8r81cvo6d5jvdk6t9tihc.apps.googleusercontent.com',
            redirectUri: 'http://localhost:8080/signup' // Your client app URL
        },
        facebook: {
            clientId: '1787507844634120',
            redirectUri: 'http://localhost:8080/signup' // Your client app URL
        }
    },
})

/* eslint-disable no-new */

new Vue({
    el: '#app',
    router,
    store: store,
    components: { App },
    template: '<App/>'
})