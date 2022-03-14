import App from './App'
import Vue from 'vue'
import store from './store' 

Vue.config.productionTip = false

// 声明当前组件App代表整个应用application
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})

// 挂载整个实例 === 原生小程序的App()
app.$mount()
