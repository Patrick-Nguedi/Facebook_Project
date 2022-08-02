import { createApp } from 'vue'
import './tailwind.css'
import I18n from "./i18n.json";
import App from './App.vue'

createApp(I18n).mount('#i18n')
createApp(App).mount('#app')
