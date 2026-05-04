import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
// main css stylesheet
import './assets/styles/main.css'
import 'boxicons'
import 'boxicons/css/boxicons.min.css';


createApp(App).use(store).use(router).mount('#app')
