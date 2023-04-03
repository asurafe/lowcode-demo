import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './icon/iconfont.css'


const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
