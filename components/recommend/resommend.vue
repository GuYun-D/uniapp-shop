<template>
	<view class="container">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image
						src="https://yanxuan.nosdn.127.net/static-union/1647006150a352fd.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
						mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image
						src="https://yanxuan.nosdn.127.net/2cfdc624c5a3554ead75cf2cce5e180c.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
						mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image
						src="https://yanxuan.nosdn.127.net/static-union/1646926679c6f282.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
						mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image
						src="https://yanxuan.nosdn.127.net/static-union/16462945850b6e17.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
						mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image
						src="https://yanxuan.nosdn.127.net/ee4e12f3d8a6a5b647226c53a689f791.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
						mode=""></image>
				</view>
			</swiper-item>
		</swiper>

		<!-- 图标 -->
		<view class="pllicy-list">
			<view class="pllicy-item" v-for="(item, index) in indexData.policyDescList" :key="item.desc">
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>

		<!-- 列表区 -->
		<view class="king-kong-list" v-if="indexData.kingKongModule">
			<view class="king-kong-item" v-for="(item, index) in indexData.kingKongModule.kingKongList"
				:key="item.L1Id">
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>

		<!-- 分类区 -->
		<view class="categray">
			<view class="categray-item" v-for="categray in indexData.categoryModule" :key="categray.titlePicUrl">
				<image :src="categray.titlePicUrl" class="title-pic" mode=""></image>
				<scroll-view scroll-x class="shop-list category-scroll" :enable-flex="true">
					<view class="shop-item" v-for="shop in categray.itemList" :key="shop.id">
						<image class="shop-img" :src="shop.showPicUrl" mode=""></image>
						<text class="shop-text shop-item">{{shop.name}}</text>
					</view>
					<view class="look-more">
						查看更多 >
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		computed: {
			...mapState({
				indexData: state => state.home.indexData
			})
		}
	}
</script>

<style lang="less">
	.container {
		.swiper-item {
			width: 100%;
			height: 350rpx;

			image {
				width: 100%;
				height: 350rpx;
			}
		}

		.pllicy-list {
			display: flex;
			margin: 20rpx;

			.pllicy-item {
				flex: 1;

				image {
					width: 32rpx;
					height: 32rpx;
					vertical-align: middle;
				}

				text {
					font-size: 24rpx;
					margin-left: 10rpx;
				}
			}
		}

		.king-kong-list {
			display: flex;
			flex-wrap: wrap;

			.king-kong-item {
				width: 20%;
				display: flex;
				flex-direction: column;
				align-items: center;

				image {
					width: 110rpx;
					height: 110rpx;
					margin-bottom: 10rpx;
				}

				text {
					font-size: 26rpx;
				}
			}
		}

		.categray {
			.categray-item {
				.title-pic {
					width: 100%;
					height: 370rpx;
					margin-top: 20rpx;
				}

				.category-scroll {
					display: flex;
					height: 300rpx;

					.shop-item {
						width: 200rpx;
						margin-right: 20rpx;

						.shop-img {
							width: 200rpx;
							height: 200rpx;
							background-color: #eaeaea;
							border-radius: 10rpx;
						}

						.shop-text {
							font-size: 26rpx;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							overflow: hidden;
						}
					}

					.look-more {
						white-space: nowrap;
						height: 200rpx;
						padding: 0 10rpx;
						line-height: 200rpx;
						color: #C0C0C0;
						background-color: #eaeaea;
					}
				}


			}
		}
	}
</style>
