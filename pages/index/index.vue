<template>
	<view class="index-container">
		<!-- 头部 -->
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" placeholder="搜索商品" placeholder-class="placeholder" />
			</view>
			<button type="default">北方的汉子</button>
		</view>

		<!-- 导航 -->
		<scroll-view scroll-x="true" class="nav-scroll" enable-flex v-if="indexData.kingKongModule">
			<view class="nav-item" @click="setNavIndex(-1)" :class="{active: navIndex === -1}">推荐</view>
			<view class="nav-item" :class="{active: navIndex === index}" @click="setNavIndex(index)"
				v-for="(item, index) in indexData.kingKongModule.kingKongList" :key="item.L1Id">
				{{item.text}}
			</view>
		</scroll-view>

		<!-- 内容区 -->
		<scroll-view scroll-y>
			<Recommend></Recommend>
		</scroll-view>

	</view>
</template>

<script>
	import {
		mapActions,
		mapState
	} from "vuex"
	import Recommend from '../../components/recommend/resommend.vue'
	export default {
		components: {
			Recommend
		},
		data() {
			return {
				navIndex: -1
			};
		},

		mounted() {
			this.getIndexDataAction()
		},

		methods: {
			...mapActions({
				getIndexDataAction: 'getIndexDataAction'
			}),

			setNavIndex(navIndex) {
				this.navIndex = navIndex
			}
		},

		computed: {
			...mapState({
				indexData: state => {
					return state.home.indexData
				}
			})
		}

	}
</script>

<style lang="less">
	.index-container {
		.header {
			display: flex;
			padding: 10rpx 0;

			.logo {
				width: 140rpx;
				height: 40rpx;
				margin: 10rpx 20rpx;
			}

			.search {
				position: relative;
				width: 420rpx;
				height: 60rpx;
				background: #eee;

				.iconfont {
					position: absolute;
					font-size: 30rpx;
					top: 15rpx;
					left: 10rpx;
				}

				input {
					width: 370rpx;
					margin-left: 50rpx;
					height: 60rpx;

					.placeholder {
						font-size: 26rpx;
					}
				}
			}

			button {
				width: 144rpx;
				height: 60rpx;
				font-size: 24rpx;
				padding: 0 4rpx;
				margin: 0 10rpx;
			}
		}

		.nav-scroll {
			display: flex;
			white-space: nowrap;
			height: 60rpx;

			.nav-item {
				display: block;
				width: 140rpx;
				height: 50rpx;
				margin: 0 20rpx;
				text-align: center;
				line-height: 50rpx;
				font-size: 26rpx;

				&.active {
					border-bottom: 5rpx solid #f40;
				}
			}
		}

	}
</style>
