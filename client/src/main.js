import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import VueGtag from 'vue-gtag-next';
import {trackRouter} from 'vue-gtag-next';

import './scss/reset.scss';
import './scss/global.scss';

const app = createApp(App);

app.config.globalProperties.$myGlobalVariable = 'test';
app.config.globalProperties.$api = 'http://localhost:3000/';
if (process.env.NODE_ENV === 'production')
  app.config.globalProperties.$api = 'https://my-moo.herokuapp.com/';
if (process.env.DOCKER_SERVER_URL)
  app.config.globalProperties.$api = process.env.DOCKER_SERVER_URL;

app.use(router);

app.use(VueGtag, {
  property: [
    {id: 'G-KR0J2P5GH8'},
    {id: 'G-M41R9BZETN'},
  ],
});

trackRouter(router);

app.mount('#app');
