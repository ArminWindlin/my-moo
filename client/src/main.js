import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './scss/reset.scss';
import './scss/global.scss';

const app = createApp(App);

app.config.globalProperties.$myGlobalVariable = 'test';

app.use(router);

app.mount('#app');
