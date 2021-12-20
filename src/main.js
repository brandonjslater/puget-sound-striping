import { createApp } from 'vue';
import application from './App.vue';


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(application).component("font-awesome-icon", FontAwesomeIcon).mount('#app');