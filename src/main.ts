// create the app and implement its router
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { provide } from 'vue'

const app = createApp(App)
app.use(router)

// implement internationalization
import { createI18n } from 'vue-i18n'
import { fr } from './locales/fr/index' 
import { en } from './locales/en/index' 

const messages = { fr, en }
const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    messages,
})
app.use(i18n)
app.provide('i18n', i18n)
// mount the app
app.mount('#app')
