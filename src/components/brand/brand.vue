<template>
	<div class="brand">
		<common-header v-on:childToParent="onChildClick"></common-header>
		<!-- <head-com :navid = '2'></head-com> -->
		<head-com v-if="tempid" :navid = tempid></head-com>
		<!-- <common-header></common-header> -->
		<!-- <head-com></head-com> -->
		<div class="center">
			<div class="top">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/brand' }">品牌</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<ul class="bottom">
				
				<!-- <span>{{~~list || ~~recommandList !== 1 ? '' : '暂无数据'}}</span> -->
				<li :key="index" v-for="(item,index) in recommandList" class="recommand">
					
					<div @click="innerbrand(item)">
						<img v-if="item .recommend==1" src="../../assets/img/recommandBrand.png" class="tuijian">
						<img class="banner-img" :src="URL + item.brand_banner" />
						<img class="logo-img" :src="URL + item.brand_logo" />
						<p>{{item.brand_name}}</p>
					</div>
				</li>
				<!-- <li :key="index" v-for="(item,index) in list">
					<div @click="innerbrand(item)">
						<img :src="URL + item.brand_logo" />
						<p>{{item.brand_name}}</p>
					</div>
				</li> -->
			</ul>
		</div>
		<foot-com></foot-com>
	</div>
</template>

<script>
	import qs from 'qs';
	export default {
		data() {
			return {
				tempid: '',
				page: 1,
				recommandList: [],
				list: [],
			}
		},
		created() {
			// this.getBrand();
			this.getRecommandBrand();
			// let title = "品牌" + this.$constant.webComContent;
			     let title = "品牌" +'-' + this.$constant.webComContent;
            this.showScroll.scrollTitle(title);
		},
        mounted(){
			this.tempid = this.$route.query.id
        },
		methods: {
			onChildClick (value) {
            this.fromChild = value
            if(this.fromChild == 'false') {
                location.reload();
            }
        	},
			// getBrand() {
			// 	this.HTTP(this.$httpConfig.recommendBrand, {
			// 			p: this.page
			// 		}, 'post')
			// 		.then((res) => {
			// 			this.list = res.data.data;
			// 		})
			// },
			getRecommandBrand() {
				this.HTTP(this.$httpConfig.recommendBrand, {}, 'post')
					.then((res) => {
						this.recommandList = res.data.data;
					})
			},
			innerbrand(item) {
				this.$router.push({
					name: 'innerbrand',
					params: {
						id: item.id
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.l {
		float: left;
	}
	
	.r {
		float: right;
	}
	

	
	.brand {
		box-sizing: border-box;
		.center {
			width: 1200px;
			margin: 0 auto;
			height: 100%;
	
		.top {
			font-size: 12px;
			margin: 15px 0;
			img {
				margin: 12px 8px 0 0;
				float: left;
			}
			span:last-child {
				color: #616161 !important;
			}
			span {
				color: #a7a7a7;
			}
		}
		.bottom {
			width: 1200px;
			height: auto;
			background: #f1f1f1;
			margin-bottom: 30px;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-start;
			box-sizing: border-box;
			padding: 5px;
			li {
				// height: 85px;
				height: 420px;
    			width: 260px;
				border: 1px solid #e5e4df;
				// margin: 13.5px;
				margin: 15px 20px 15px 17px;
				box-sizing: border-box;
				position: relative;
				background-color: #fff;
				.tuijian{
					position: absolute;
					width: 40px;
				}
				.banner-img {
					// width: 140px;
					// height: 45px;
					// margin: 5px;
					width: 270px;
    				height: 270px;
					
				}
				.logo-img {
					height: 70px;
					width: 200px;
					margin: 18px 29px 15px 29px;
				}
				p {
					border-top: 1px solid #eee;
					width: 255px;
					height: 30px;
					margin: 0 auto;
					line-height: 50px;
					text-align: center;
					color: #666;
				}
			}
			
			// li.recommand:before {
			// 	content: "";
			// 	position: absolute;
			// 	top: 0;
			// 	left: 0;
			// 	width: 40px;
			// 	height: 40px;
			// 	// background: url('../../assets/img/recommandBrand.png') no-repeat;
			// 	background-size: 100%;
			// }
		}
	}
}
</style>