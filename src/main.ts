import { createApp } from 'vue'
import App from './App.vue'
// import { appear } from './directives/appear'
import placeholder from './directives/placeholder'
import router from './router'
import i18n from './i18n'

// vendors
import '@/libs/vendors/veeValidate'
// import 'animate.css'

const app = createApp(App)

// Directives
app.directive('placeholder', placeholder)
// app.directive('appear', appear)

// Plugins
app.use(router)
app.use(i18n)

app.mount('#app')
