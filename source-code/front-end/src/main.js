import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// VUE 3 Version

fetch(process.env.BASE_URL + "config.json")
  .then((response) => response.json())
  .then((config) => {
    // either use window.config
    window.config = config
    // or use [Vue Global Config][1]
    app.config.globalProperties.config = config
    // FINALLY, mount the app
    app.mount("#app")
  })