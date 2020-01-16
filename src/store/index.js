import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		list: []
	},
	mutations: {
		addList(state, value) {
			state.list.push(value)
		},
		delList(state, value) {
			state.list.splice(value, 1)
		}
	},
	actions: {
		
	},
	modules: {
		
	}
})
