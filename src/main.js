import { createApp } from 'vue'
import App from './App.vue'
import mg from '../package/index'
import 'highlight.js/styles/atom-one-dark.css'
import hljsVuePlugin from "@highlightjs/vue-plugin";
const app = createApp(App)
app.use(mg)
app.use(hljsVuePlugin)
app.mount('#app')
