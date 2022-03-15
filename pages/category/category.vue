<template>
	<view class="categray-container">
		<!-- 头部 -->
		<view class="header">
			<view class="search">
				搜索商品
			</view>
		</view>

		<!-- 内容区 -->
		<view class="content-container">
			<!-- 左侧 -->
			<view class="left-container">
				<scroll-view :scroll-y="true" class="left-nav">
					<view @click="changeNavIndex(index)" v-for="(item, index) in categoryList" :key="item.id"
						class="left-item" :class="{'active': index === navIndex }">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			<!-- 右侧 -->
			<view class="right-container">
				<scroll-view :scroll-y="true" class="right-vav">
					<view class="right-item">
						<image class="cate-img" :src="cateObj.imgUrl" mode=""></image>
						<view class="shop-item" v-for="item in cateObj.subCateList" :key="item.id">
							<image :src="item.wapBannerUrl" mode=""></image>
							<text>{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import GyRequest from '../../utils/request.js'
	export default {
		data() {
			return {
				categoryList: [],
				navIndex: 0
			};
		},

		mounted() {
			this.getCategoryList()
		},

		methods: {
			async getCategoryList() {
				this.categoryList = await GyRequest('getCategory')
			},

			changeNavIndex(navIndex) {
				this.navIndex = navIndex
			}
		},

		computed: {
			cateObj() {
				return this.categoryList[this.navIndex]
			}
		}
	}
</script>

<style lang="less" scoped>
	.categray-container {
		.header {
			margin: 10rpx 0;

			.search {
				width: 92%;
				height: 60rpx;
				margin: auto;
				padding: 10rpx 0;
				font-size: 26rpx;
				line-height: 60rpx;
				text-align: center;
				background-color: #eee;
			}
		}

		.content-container {
			display: flex;
			height: 500rpx;
			border-top: 1rpx solid #eee;

			.left-container {
				box-sizing: border-box;
				width: 20%;
				border-right: 1rpx solid #eee;

				.left-nav {
					height: calc(100vh - 105rpx);

					.left-item {
						position: relative;
						font-size: 26rpx;
						height: 80rpx;
						line-height: 80rpx;
						text-align: center;

						&.active::before {
							position: absolute;
							top: 20rpx;
							left: 10rpx;
							display: block;
							content: "";
							width: 5rpx;
							height: 40rpx;
							background-color: #F40;
						}
					}
				}
			}

			.right-container {
				width: 80%;
				height: 100%;

				.right-vav {
					height: calc(100vh - 105rpx);


					.cate-img {
						display: block;
						width: 520rpx;
						height: 190rpx;
						margin: 10rpx auto;
					}

					.shop-item {
						width: 33.33%;
						display: flex;
						flex-direction: column;
						float: left;

						image {
							width: 90%;
							height: 144rpx;
						}

						text {
							width: 100%;
							text-align: center;
						}
					}
				}


			}
		}
	}
</style>
