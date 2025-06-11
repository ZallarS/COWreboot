// resources/js/app.js
import './bootstrap';
import { createApp } from 'vue';

// Должен быть ПЕРЕД компонентами
import router from './router';

import App from './App.vue';

createApp(App)
    .use(router)
    .mount('#app')
