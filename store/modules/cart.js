import Vue from "vue"

export default {
	namespace: true,
	state: {
		cartList: []
	},

	mutations: {
		addShopInfo(state, shopInfo) {
			const item = state.cartList.find(item => item.id === shopInfo.id)

			if (item) {
				item.count++
			} else {
				Vue.set(shopInfo, "count", 1)
				Vue.set(shopInfo, "isSelected", true)
				state.cartList.push(shopInfo)
			}
		},

		changeGoodCount(state, {
			isAdd,
			index
		}) {
			if (isAdd) {
				state.cartList[index].count += 1
			} else {
				if (state.cartList[index].count > 1) {
					state.cartList[index].count -= 1
				} else {
					wx.showModal({
						content: "确认删除该商品吗",
						success: (res) => {
							if (res.confirm) {
								state.cartList.splice(index, 1)
							}
						}
					})

				}

			}
		},

		changeShopSelectStatus(state, {
			currentStatus,
			currentShopCartIndex
		}) {
			state.cartList[currentShopCartIndex].isSelected = !currentStatus
		},

		chnageAllSelectedStatus(state, status) {
			state.cartList.forEach(item => {
				item.isSelected = status
			})
		}
	},

	getters: {
		allSelected(state) {
			return state.cartList.length > 0 ? state.cartList.every(item => item.isSelected) : false
		},

		totalCount(state) {
			return state.cartList.reduce((pre, shopItem) => {
				return pre += shopItem.isSelected ? shopItem.count : 0
			}, 0)
		},

		totalPrice(state) {
			return state.cartList.reduce((pre, shopItem) => {
				return pre += shopItem.isSelected ? shopItem.retailPrice * shopItem.count : 0
			}, 0)
		}
	}
}
