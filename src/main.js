import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from './routes'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
