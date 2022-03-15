<template>
	<view class="cate-list">
		<!-- 轮播图 -->
		<swiper class="banner" v-if="cateObj.category" :indicator-dots="true" :autoplay="true" :interval="3000"
			:duration="1000">
			<swiper-item v-for="(bannerItem, index) in cateObj.category.bannerUrlList" :key="index">
				<view class="swiper-item">
					<image class="cate-img" :src="bannerItem" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="title">{{cateObj.category.name}}</view>
		<view class="desc">{{cateObj.category.frontDesc}}</view>

		<!-- 内容列表 -->
		<view class="shop-list">
			<view class="shop-item" v-for="(shopItem, index) in cateObj.itemList" :key="shopItem.id">
				<image class="shop-list-img" :src="shopItem.listPicUrl" mode=""></image>
				<view class="desc">{{shopItem.name}}</view>
				<view class="price">{{shopItem.retailPrice}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import GyRequest from "../../utils/request.js"
	export default {
		name: "cate-list",
		data() {
			return {
				cateListArr: [],
				cateId: this.navId
			};
		},

		props: ["navId"],

		mounted() {
			this.getCateList()
		},

		methods: {
			async getCateList() {
				this.cateListArr = await GyRequest('getIndexCateList')
			}
		},

		computed: {
			cateObj() {
				return this.cateListArr.find(item => item.category.parentId === this.navId)
			}
		}
	}
</script>

<style lang="less">
	.cate-list {
		.banner {
			.cate-img {
				width: 100%;
			}
		}

		.title {
			font-size: 36rpx;
			color: #333;
			line-height: 70rpx;
			text-align: center;
		}

		.desc {
			color: #999;
			font-size: 26rpx;
			line-height: 40rpx;
			text-align: center;
		}

		.shop-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;

			&::after {
				content: "";
				display: block;
				width: 344rpx;
				height: 344rpx;
			}

			.shop-item {
				width: 344rpx;

				.shop-list-img {
					width: 344rpx;
					height: 344rpx;
				}

				.desc {
					font-size: 26rpx;
					text-align: left;
					line-height: 50rpx;
				}

				.price {
					font-weight: bold;
					color: #f40;
				}
			}
		}
	}
</style>
