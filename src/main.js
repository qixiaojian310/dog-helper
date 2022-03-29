import {
  createApp
} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import 'font-awesome/css/font-awesome.min.css'
import router from './router'
import store from './store'
import animate from "animate.css"


const app = createApp(App).use(store)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(animate)
app.config.devtools = true;
const vm = app.mount('#app')
