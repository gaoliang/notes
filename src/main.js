import Vue from 'vue'
import App from './App.vue'
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

Vue.config.productionTip = false
Vue.component('v-chart', ECharts)

new Vue({
  render: h => h(App),
}).$mount('#app')
