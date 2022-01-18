import { createApp } from 'vue'
import App from './App.vue'
import mg from '../package/index'
const app = createApp(App)
app.use(mg)
app.mount('#app')
