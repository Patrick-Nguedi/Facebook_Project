import { createApp } from 'vue'
import './tailwind.css'
import { createI18n } from "vue-i18n";
import i18nMessages from "./i18n.json";
import App from './App.vue'

const defaultLanguage = () => {
  const result = navigator.language.split("-")[0];
  if (result !== "fr") {
    return "en";
  }
  return result;
};

const locale = defaultLanguage();
const i18n = createI18n({
  locale,
  legacy: false,
  fallbackLocale: "en",
  messages: i18nMessages,
});



createApp(App)
    .use(i18n)
    .mount("#app");