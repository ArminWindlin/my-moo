import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './scss/reset.scss';
import './scss/global.scss';

const app = createApp(App);

app.config.globalProperties.$myGlobalVariable = 'test';
app.config.globalProperties.$api = 'http://localhost:3000/';
if (process.env.NODE_ENV === 'production') app.config.globalProperties.$api = 'https://my-moo.herokuapp.com/';

app.use(router);

app.mount('#app');
