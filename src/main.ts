import { createApp } from 'vue'
import App from './App.vue'
import { placeholder } from './directives/placeholder'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

// Directives
app.directive('placeholder', placeholder)

// Plugins
app.use(router)
app.use(i18n)

app.mount('#app')
