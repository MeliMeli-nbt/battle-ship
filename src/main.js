import { createApp } from 'vue'
import './assets/css/tailwind.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/css/style.css'
import router from './assets/router/main.js'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
const app = createApp(App)
  
app.use(router)

app.use(ElementPlus)
app.mount('#app')


