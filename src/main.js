import { createApp } from 'vue'

import App from './App.vue'
import mixins from "@/mixins";
import router from "@/router";

const app=createApp(App);
    app.use(router)
    app.mixin(mixins);
    app.mount('#app');
