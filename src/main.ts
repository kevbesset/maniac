import { createApp } from 'vue'
import App from './App.vue'
import { placeholder } from './directives/placeholder'
import router from './router'

const app = createApp(App)

// Directives
app.directive('placeholder', placeholder)

// Plugins
app.use(router)

app.mount('#app')
