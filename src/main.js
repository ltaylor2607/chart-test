import Vue from 'vue'
import App from './App.vue'
import JSCharting from "jscharting-vue"

Vue.component("JSCharting", JSCharting)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
