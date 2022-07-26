import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadAllPlugins } from './plugins'
import 'element-plus/dist/index.css'
const app=createApp(App).use(router)
loadAllPlugins(app)
app.mount('#app')
