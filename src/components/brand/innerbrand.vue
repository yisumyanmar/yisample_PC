<template>
	<div class="innerbrand">
		<common-header v-on:childToParent="onChildClick"></common-header>
		<head-com></head-com>
		<div class="center">
			<div class="top">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/brand' }">品牌</el-breadcrumb-item>
					<el-breadcrumb-item>{{brandName}}</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
	
			<div class="middle">
				<ul class="theard l">
					<li>排列方式：</li>
					<li @click="tab(3)" :class="{actives:isactive == 3}">默认</li>
					<li class="li" v-for="(theards,index) in theard" :key="index" @click="tab(index)" :class="[isactive === index ? 'active' : '']">{{theards}}</li>
				</ul>
				<div class="ziying l"><input class="l" type="checkbox" :checked="selfSupportChecked" @click="selfSupport" />平台自营</div>
				<div class="l shangpin">
					商品所在地：
					<select class="r" name="">
							<option value="">不限地区</option>  
							<option value="济南" v-for="(item, index) in city"  :key="index">{{item.name}}</option>
						</select>
				</div>
				<div class="r next">
					<span class="button">上一页</span>
					<span class="button">下一页</span>
				</div>
			</div>
			<div class="bottom">
				<ul class="l">
					<li class="bagli l" v-for='(li,index) in arr' :key="index" >
						<img class="bag" :src="URL + li.pic_url" @click="toDetail(li.id)"/>
						<!-- <ul class="samllul l">
								<li class="l" v-for="item in li"><img class="samll" :src="item"/></li>
							</ul> -->
						<p class="l">{{li.title}}</p>
						<div class="l pice">
							<span>{{li.price_market}}</span>
							<span>{{li.price_market}}</span>
								<!-- <span style="margin-left:20px;color:#c0354c">已售hello件</span> -->
							<span style="margin-left:20px;color:#656565;font-size:11px">已售{{li.sales_sum}}件</span>
						</div>
						<div class="buy l">
							<input class="l" type="checkbox" @click="contrast(li.id, index)" v-model="contrastArr" :value="li.id" ref="checkbox"/><span >对比</span>
							<div class="collection" @click="collection(li.id, index)">
								<i :class="['l like', li.is_coll === 1 ? 'cancel' : '']"></i>
								<span>{{li.is_coll === 1 ? '已收藏' : '收藏'}}</span>
							</div>
						</div>
						<!-- <img class="r car" :src="gouwuche" @click="addCar(li.id, li.price_market)"/> -->
						<img class="r car"   src="../../assets/img/goshop.png"  @click="addCar(li.id, li.price_market)"   alt="">
					</li>
				</ul>
			</div>
		</div>
		<foot-com></foot-com>
	</div>
</template>

<script>
	import shoucang from '@/assets/img/shoucang.jpg'
	import gouwuche from '@/assets/img/gouwuche.jpg'
	import panzi from '@/assets/img/panzi.jpg'
	import shoulian from '@/assets/img/shoulian.jpg'
	export default {
		data() {
			return {
				theard: ['销量', '人气', '价格'],
				lis: [],
				isactive: 3,
				arr: [],
				brandName: '',
				shoucang: shoucang,
				gouwuche: gouwuche,
				city: [],
				selfSupportChecked: true,
				isCollection: false,
				brand: [],
				contrastArr: [],
				index:null,
				fromChild: ''
			}
		},
		created() {
			this.getCity()
			this.getDetail();
		},
		// computed: {
		// 	collection (id) {
		// 		let _state = false
		// 		this.HTTP(this.$httpConfig.setCollectionGoods, {
		// 			goods_id: id
		// 		}).then(res => {
		// 			res.data.message === '收藏成功' ? _state = true : _state = false
		// 			console.log(_state)
		// 			return _state
		// 		})
		// 	},
		// },
		methods: {
			onChildClick (value) {
				this.fromChild = value
				if(this.fromChild == 'false') {
					location.reload();
				}
      		},
			contrast (id, index) {
				if (this.$refs.checkbox[index].checked) {
					this.contrastArr.push(~~id)
					// this.$notify({
					// 	title: '商品对比',
					// 	dangerouslyUseHTMLString: true,
					// 	message: `
					// 		</span>您已选择${this.contrastArr.length}个商品</span>
					// 		<button @click="${
					// 			this.$router.push({
					// 				name: 'compared', 
					// 				params: {
					// 					id: this.contrastArr
					// 				}
					// 			})}">点击开始对比</button>
					// 	`
					// });

					// this.$confirm('是否前往对商品', '是否继续?', '提示', {
					// 	confirmButtonText: '确定',
					// 	cancelButtonText: '取消',
					// 	type: 'warning'
					// }).then(() => {
					// 	this.$router.push({
					// 		name: compared, 
					// 		params: {
					// 			id: this.contrastArr
					// 		}
					// 	})
					// }).catch(() => {
					// 	this.$message({
					// 		type: 'info',
					// 		message: '已取消删除'
					// 	});          
					// });
					if (this.contrastArr.length >= 2) {
						this.$confirm('是否前往对商品', '是否继续?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							this.$router.push({
								name: 'compared', 
								params: {
									id: this.contrastArr + ''
								}
							})
						})
					}
					if (this.contrastArr.length <= 1) return this.$message('请至少选择2种商品')
				} else {
					this.contrastArr.map(item => {
						if (~~this.$refs.checkbox[index].value === item) this.contrastArr.splice(item, 1)
					})
				}
			},
			collection (id, index) {
				this.HTTP(this.$httpConfig.setCollectionGoods, {
					goods_id: id
				}).then(res => {
					res.data.message === '收藏成功' ? this.arr[index].is_coll = 1 : this.arr[index].is_coll = 0;
				})
			},
			//添加购物车
			addCar (id, money) {
				// return
				console.log(this.arr)
				this.HTTP(this.$httpConfig.addGoodToCart, {
					goods_id: id,
					goods_num: 1,
					price_new: money,
					store_id: this.brand.store_id
				}, '	post').then(res => {
					if (res.data.status === 1 && res.data.message === '添加成功') {
						this.$confirm('', '已成功加入购物车', {
							confirmButtonText: '查看购物车',
							cancelButtonText: '继续购物',
							type: 'success',
							center: true,
							lockScroll: false,
							closeOnClickModal: false,
							confirmButtonClass: 'to-shopping-cart',
							cancelButtonClass: 'continue-shopping'
						}).then(() => {
							window.open(window.location.origin + '/buyCar');
						})
					}
				}).catch((e)=>{
					
				})
			},
			tab(index) {
				this.isactive = index;
				let arr=this.arr;
				this.index = index;
				arr.sort(this.arrangement);
			},
			//排序
			arrangement(a,b){
				if (this.index===0) {
					return a.trade-b.trade
				} else if (this.index===1){
					return a.comment-b.comment
				} else if (this.index==2){
					return a.price_market-b.price_market
				} else {
					return a.id-b.id
				}
					
			},
			toDetail(id) {
				this.$router.push(`/shopsn_product?id=${id}`)
			},
			getCity() {
				this.HTTP(this.$httpConfig.regionLists, {}, 'post').then(res => {
					this.city = res.data.data
				}).catch(err => {
					throw err
				})
			},
			// 商品自营平台搜索（品牌
			selfSupport() {
				// 前端暂无
				if (this.selfSupportChecked) {
					this.HTTP(this.$httpConfig.goodsStoreProprietary, {
						brand_id: this.$route.params.id,
						type: 1
					}, 'post').then(res => {
						console.log(res)
					})
				}
			},
			 // 品牌店详情
			getDetail() {
				this.HTTP(this.$httpConfig.brandDetail, {
					id: this.$route.params.id,
					page: 1
				}, 'post').then((res) => {
					this.brand = res.data.data.brand
					this.brandName = res.data.data.brand.brand_name;
					let arr=res.data.data.goods;
					console.log(arr,'数组')
					this.arr = arr.sort(this.arrangement);//记得排序
					console.log(this.arr,'排序')
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.l {
		float: left;
		p{
			overflow : hidden;
  		text-overflow: ellipsis;
  		display: -webkit-box;
  		-webkit-line-clamp: 2;      /* 可以显示的行数，超出部分用...表示*/
  		-webkit-box-orient: vertical;
		}
	}
	.collection {
		display: inline-block;
		margin:  0 10px;
			.like {
				width: 17px;
				height: 17px;
				background: url(../../assets/img/heat_null.png) no-repeat;
				background-size: 100% 100%;
			}
			.cancel {
				background: url(../../assets/img/heat_fill.png) no-repeat;
				background-size: 100% 100%;
			}
	}

	.r {
		float: right;
	}
	
	.center {
		width: 1200px;
		margin: 0 auto;
		height: 100%;
	}
	
	.innerbrand {
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
		.middle {
			height: 40px;
			background: #f9f9f9;
			border: 1px solid #e3e3e3;
			.theard {
				li {
					float: left;
					text-align: center;
					line-height: 40px;
					font-size: 12px;
					color: #555;
					border-right: 1px solid #e3e3e3;
					width: 60px;
					cursor: pointer;
				}
				li:nth-of-type(1) {
					width: 74px;
				}
				li:nth-of-type(2) {
					width: 49px;
				}
				.li {
					background: url(../../assets/img/xiajiantou.png) no-repeat top 17px right 8px;
				}
				.active {
					background: #fff url(../../assets/img/x.png) no-repeat top 17px right 8px !important;
					color: #d02629;
					height: 38px;
				}
				.actives {
					background: #fff;
					color: #d02629;
					height: 38px;
				}
			}
			.ziying {
				margin-left: 52px;
				line-height: 40px;
				font-size: 12px;
				input {
					margin: 14px 7px 0 0;
				}
			}
			.shangpin {
				line-height: 40px;
				margin-left: 78px;
				font-size: 12px;
				select {
					height: 20px;
					width: 78px;
					margin-top: 10px;
					outline: none;
					option {
						font-size: 12px;
					}
				}
			}
			.next {
				margin: 9px 16px 0 0;
				span {
					width: 48px;
					height: 20px;
					border: 1px solid #e5e5e5;
					font-size: 12px;
				}
			}
		}
		.bottom {
			height: auto;
			margin: 12px 0;
			overflow: hidden;
			ul {
				.bagli {
					width: 230px;
					height: auto;
					border: 1px solid #f1f1f1;
					margin-bottom: 12px;
					margin-left: 12px;
					padding-bottom: 12px;
					cursor: pointer;
					.bag {
						margin: 5px;
						width: 220px;
						height: 220px;
					}
					.samllul {
						margin: 6px 5px;
						li {
							margin-right: 10px;
						}
						li:last-child {
							margin: 0;
						}
					}
					.pice {
						width: 100%;
						margin-top: 15px;
						margin-left: 5px;
						span:nth-of-type(1) {
							color: #de2d35;
							font-size: 14px;
							margin: 0 10px 0 0;
						}
						span:nth-of-type(2) {
							color: #9c9c9c;
							font-size: 9px;
							text-decoration: line-through;
						}
					}
					p {
						width: 206px;
						font-size: 12px;
						color: #5f5f5f;
						margin-left: 5px;
						height: 30px;
						&:hover {
							color: red;
						}
					}
					.buy {
						margin: 15px 0 0 9px;
						input {
							margin: 2px 7px 0 0;
						}
						span {
							color: #717171;
							font-size: 12px;
							float: left;
						}
						img {
							margin-left: 16px;
							margin-top: 3px;
						}
					}
					.car {
						margin: 7px 14px 0 0;
					}
					&:hover {
						border-color: #d02629;
					}
				}
				.bagli:nth-of-type(1) {
					margin-left: 0;
				}
				.bagli:nth-of-type(6) {
					margin-left: 0;
				}
				.bagli:nth-of-type(11) {
					margin-left: 0;
				}
				.bagli:nth-of-type(16) {
					margin-left: 0;
				}
			}
		}
	}
</style>