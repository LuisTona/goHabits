import { createApp } from 'vue'
import App from './App.vue'
import ElementsPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

const app = createApp(App)
app.use(ElementsPlus)
app.use(router)
app.mount('#app')
