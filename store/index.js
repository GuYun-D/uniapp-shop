import Vuex from "vuex"
import Vue from "vue"

import home from './modules/home.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		home
	}
})

export default store