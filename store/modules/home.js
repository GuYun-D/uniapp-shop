import GyRequest from '../../utils/request.js'

export default {
	namespace: true,
	state: {
		indexData: {}
	},

	mutations: {
		changeIndexData(state, indexData) {
			state.indexData = indexData
		}
	},

	actions: {
		async getIndexDataAction({
			commit
		}) {
			console.log(1);
			const indexData = await GyRequest('getIndexData')
			commit("changeIndexData", indexData)
		}
	},

	getters: {

	}
}
