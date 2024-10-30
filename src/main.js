import { createApp } from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import App from './App.vue'

import router from './router'
import store from "./store";

import './utils/rem'

import van from 'vant';
import 'vant/lib/index.css';
import './scss/css.scss'

import 'swiper/swiper-bundle.css';


import '@skjnldsv/vue-plyr/dist/vue-plyr.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(van);
app.mount('#app');
