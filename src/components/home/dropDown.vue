<template>
	<div id="home">
		<common-header v-on:childToParent="onChildClick"></common-header>
		<head-com></head-com>
		<div class="banner">
			<div class="center">
				<div class="denglu r">
					<img class="touxiang" src="../../assets/img/denglu.jpg" />
					<h3 class="l">Hi,欢迎来到{{this.$constant.mainTitle}}</h3>
					<div class="qdl l">
						<span class="qingdenglu both">请登录</span>
						<span class="kaidian both">我要开店</span>
					</div>
					<h4 class="l">公告</h4>
					<p class="first">古玩鉴定慢下结论</p>
					<p>黄地珐琅彩牡丹纹碗鉴藏</p>
					<p>清乾隆珐琅彩描金缠枝莲烛哈哈哈哈或</p>
					<h4 class="l rukou">快捷入口</h4>
					<ul class="l">
						<li>
							<i class="el-icon-view"></i><br /> 我的浏览
						</li>
						<li>
							<img src="../../assets/img/heart.jpg" /> 我的收藏
						</li>
						<li>
							<i class="el-icon-date"></i><br /> 我的订单
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="center">
			<div class="paimai">
				<img class="l" src='../../assets/img/paimai01.jpg' />
				<img class="l" src='../../assets/img/paimai02.jpg' />
				<img class="l" src='../../assets/img/paimai03.jpg' />
				<img class="l" src='../../assets/img/paimai04.jpg' />
				<img class="l" src='../../assets/img/paimai05.jpg' />
			</div>
			<div class="dianpu">
				<div class="left l"><img class="l" src="../../assets/img/dianpu1.jpg" /></div>
				<ul class="r">
					<li :key="index" @mouseover="fun(index)" @mouseout="fun1" class="l right" v-for="(pinpai,index) in pinpais"><img :src="pinpai" />
						<div v-show="onoff==index" class="click"><span>点击进入</span></div>
					</li>
				</ul>
			</div>
			<div class="gongyi same">
				<h1>1F 烧造工艺</h1>
				<ul class="l tabul">
					<li :key="index" class="l tab " v-bind:class="{active:isactive==index}" @mousemove="tab(index)" v-for="(gongyis,index) in gongyi">{{gongyis}}</li>
				</ul>
				<div class="huaping l">
					<img class="l" src="../../assets/img/hp.jpg" />
					<div class="bottom l">
						<ul class="bottomul">
							<li :key="index" class="l bottomli" v-for="(jingruis,index) in jingrui">{{jingruis}}</li>
						</ul>
					</div>
				</div>
				<div class="swiper l">
					<img src="../../assets/img/ns.jpg" />
				</div>
				<div class="showdiv r">
					<ul class="showul l">
						<li :key="index" class="showli l" v-for="(thing,index) in arr">
							<img class="hp" :src="avatars" />
							<p class="jieshao">{{thing.p}}</p>
							<div class="jiage l">￥<span>{{thing.jiage}}</span></div>
							<img class="gouwuche r" :src="car" />
						</li>
					</ul>
				</div>
				<img class="bottomnav" src="../../assets/img/bottomnav.jpg" />
			</div>
			<!--皇家御饮-->
			<div class="yuyin same">
				<h1 class="huangjia">2F 皇家御饮</h1>
				<ul class="l tabul huangjia">
					<li :key="index" class="l tab " v-bind:class="{active:isactive1==index}" @mousemove="tab1(index)" v-for="(gongyis,index) in gongyi">{{gongyis}}</li>
				</ul>
				<div class="huaping l">
					<img class="l" src="../../assets/img/hp.jpg" />
					<div class="bottom l">
						<ul class="bottomul">
							<li :key="index" class="l bottomli" v-for="(jingruis,index) in jingrui">{{jingruis}}</li>
						</ul>
					</div>
				</div>
				<div class="swiper l">
					<img src="../../assets/img/ns.jpg" />
				</div>
				<div class="showdiv r">
					<ul class="showul l">
						<li :key="index" class="showli l" v-for="(thing1,index) in arr1">
							<img class="hp" :src="avatars" />
							<p class="jieshao">{{thing1.p}}</p>
							<div class="jiage l">￥<span>{{thing1.jiage}}</span></div>
							<img class="gouwuche r" :src="car" />
						</li>
					</ul>
				</div>
				<img class="bottomnav" src="../../assets/img/bottomnav.jpg" />
			</div>

		</div>
	</div>
</template>

<script>
	import avatar from '@/assets/img/gn.jpg'
	import avatars from '@/assets/img/hp1.jpg'
	import car from '@/assets/img/gouwuche.jpg'
	export default {
		data() {
			return {
				onoff: '',
				avatar: avatar,
				avatars: avatars,
				car: car,
				pinpais: [avatar, avatar, avatar, avatar, avatar, avatar, avatar, avatar, avatar, avatar, avatar, avatar, avatar, avatar, avatar,
					avatar, avatar, avatar
				],
				gongyi: ['新品推荐', '热卖商品', '疯狂抢购', '猜您喜欢'],
				jingrui: ['材器', '玻璃', '琉璃', '紫砂', '瓷器', '瓷器'],

				isactive: '',

				//皇家御饮
				isactive1: '',
				things1: [
					[{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}, {
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}, {
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}
					],
					[{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2222.00',
							car
						}

					],
					[{
						avatars,
						p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
						jiage: '3333.00',
						car
					}],
					[{
						avatars,
						p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
						jiage: '444.00',
						car
					}]
				],

				//滋补养身
				isactive2: '',
				things2: [
					[{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}, {
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}, {
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}
					],
					[{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2222.00',
							car
						}

					],
					[{
						avatars,
						p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
						jiage: '3333.00',
						car
					}],
					[{
						avatars,
						p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
						jiage: '444.00',
						car
					}]
				],
				//御贡赠品
				isactive3: '',
				things3: [
					[{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}, {
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}, {
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}
					],
					[{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2222.00',
							car
						}

					],
					[{
						avatars,
						p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
						jiage: '3333.00',
						car
					}],
					[{
						avatars,
						p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
						jiage: '444.00',
						car
					}]
				],
				//珠宝玉器
				isactive4: '',
				things4: [
					[{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}, {
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}, {
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						},
						{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2899.00',
							car
						}
					],
					[{
							avatars,
							p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
							jiage: '2222.00',
							car
						}

					],
					[{
						avatars,
						p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
						jiage: '3333.00',
						car
					}],
					[{
						avatars,
						p: '京锐景泰蓝30寸凤戏牡丹瓶紫铜',
						jiage: '444.00',
						car
					}]
				], //红木家具
				isactive5: '',
				fromChild: ''
			}
		},
		methods: {
			onChildClick (value) {
				this.fromChild = value
				if(this.fromChild == 'false') {
					location.reload();
				}
			},
			fun(index) {
				this.onoff = index;

			},
			fun1(index) {
				this.onoff = null;
			},
			tab(index) {
				this.isactive = index;
				this.arr = this.things[index];
			},
			tab1(index) {
				this.isactive1 = index;
				this.arr1 = this.things1[index];
			},
			tab2(index) {
				this.isactive2 = index;
				this.arr2 = this.things2[index];
			},
			tab3(index) {
				this.isactive3 = index;
				this.arr3 = this.things3[index];
			},
			tab4(index) {
				this.isactive4 = index;
				this.arr4 = this.things4[index];
			},
			tab5(index) {
				this.isactive5 = index;
				this.arr5 = this.things5[index];
			}
		}
	}
</script>

<style lang="less" scoped>
	.center {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
	}

	.l {
		float: left;
	}

	.r {
		float: right;
	}

	#home {
		.banner {
			height: 407px;
			border-top: 2px solid #d9b11c;
			background: #ccc url(../../assets/img/banner1.jpg) no-repeat center;
			background-size: 100% 100%;
			.denglu {
				width: 204px;
				height: 378px;
				background: #fbfdfc;
				margin-top: 11px;
				.touxiang {
					float: left;
					margin: 10px 62px;
				}
				h3 {
					text-align: center;
					color: #767676;
					font-size: 12px;
					width: 100%;
				}
				.qdl {
					margin: 14px 0 0 27px;
					.both {
						float: left;
						width: 68px;
						text-align: center;
						line-height: 22px;
						height: 22px;
						border: 1px solid #323232;
						font-size: 12px;
					}
					.qingdenglu {
						color: #a8a8a8;
					}
					.kaidian {
						color: #ac9549;
						border-color: #ac9549;
						margin-left: 10px;
					}
				}
				h4 {
					width: 100%;
					height: 24px;
					line-height: 24px;
					margin-top: 22px;
					background: #eeeeee;
					font-size: 12px;
					color: #e2c48e;
					padding-left: 22px;
				}
				p {
					width: 165px;
					float: left;
					line-height: 25px;
					font-size: 12px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					padding-left: 22px;
				}
				.first {
					margin-top: 10px;
				}
				.rukou {
					color: #434343;
					margin-top: 11px;
				}
				ul {
					li {
						float: left;
						width: 68px;
						border-right: 1px solid #eee;
						height: 59px;
						text-align: center;
						color: #8f8f8f;
						font-size: 12px;
						img {
							display: block;
							margin: 16px auto 10px;
						}
						i {
							margin-top: 16px;
							margin-bottom: 8px;
							color: #767676;
							font-size: 16px;
						}
					}
					li:last-child {
						border: 0;
					}
				}
			}
		}
		.paimai {
			margin-top: 14px;
			height: 171px;
			img {
				margin-right: 7px;
			}
			img:last-child {
				margin: 0;
			}
		}
		.dianpu {
			width: 100%;
			height: 328px;
			margin-top: 14px;
			.left {
				width: 460px;
				height: 325px;
			}
			ul {
				margin-left: 7px;
				width: 727px;
				border: 0.5px solid #e8e8e8;
				li {
					width: 121px;
					height: 108px;
					border: 0.5px solid #e8e8e8;
					position: relative;
					img {
						width: 100%;
						height: 100%;
					}
					.click {
						width: 100%;
						height: 100%;
						background: rgba(0, 0, 0, 0.6);
						position: absolute;
						top: 0;
						left: 0;
						span {
							display: block;
							width: 64px;
							height: 22px;
							background: #eac038;
							line-height: 22px;
							text-align: center;
							border-radius: 15px;
							color: #f4e0bd;
							font-size: 12px;
							margin: 45px auto;
						}
					}
				}
			}
		}
		.same {
			height: 636px;
			margin-top: 15px;
			.same:first-child {
				margin-top: 24px;
			}
			/*重复代码*/
			.huangjia {
				border-color: #a9c6b4 !important;
			}
			.yangshen {
				border-color: #e5d0b1 !important;
			}
			.zengpin {
				border-color: #958fb1 !important;
			}
			.yuqi {
				border-color: #9cb8bc !important;
			}
			.hongmu {
				border-color: #9b7e6c !important;
			}
			h1 {
				font-size: 20px;
				color: #010101;
				float: left;
				line-height: 35px;
				width: 778px;
				border-bottom: 1px solid #c7c0b6;
			}
			.tabul {
				border-bottom: 1px solid #c5c1b8;
				.tab {
					width: 98px;
					height: 35px;
					line-height: 35px;
					text-align: center;
					border: 1px solid #e6e8e7;
					margin-right: 10px;
					border-bottom: 1px;
					background: #fff;
				}
				.active {
					border-color: #c5c1b8;
					transform: translateY(1px);
					border-bottom: 0;
					color: #c5c1b8;
				}
				/*重复代码*/
				.active1 {
					border-color: #a9c6b4;
					transform: translateY(1px);
					border-bottom: 0;
					color: #a9c6b4;
				}
				.active2 {
					border-color: #e5d0b1;
					transform: translateY(1px);
					border-bottom: 0;
					color: #e5d0b1;
				}
				.active3 {
					border-color: #958fb1;
					transform: translateY(1px);
					border-bottom: 0;
					color: #958fb1;
				}
				.active4 {
					border-color: #9cb8bc;
					transform: translateY(1px);
					border-bottom: 0;
					color: #9cb8bc;
				}
				.active5 {
					border-color: #9b7e6c;
					transform: translateY(1px);
					border-bottom: 0;
					color: #9b7e6c;
				}
				.tab:last-child {
					margin: 0;
				}
			}
			.huaping {
				height: 488px;
				width: 210px;
				.bottom {
					height: 174px;
					width: 100%;
					background: #f7e7b3;
					.bottomul {
						margin-top: 15px;
						.bottomli {
							width: 84px;
							height: 32px;
							background: #fff;
							line-height: 32px;
							text-align: center;
							font-size: 12px;
							margin: 5px 0 0 14px;
						}
					}
				}
			}
			.swiper {
				width: 379px;
				height: 488px;
			}
			.showul {
				width: 611px;
				height: 488px;
				padding-left: 1px;
				border-right: 1px solid #e7e8e3;
				border-bottom: 1px solid #e7e8e3;
				.showli {
					width: 203px;
					height: 244px;
					border-right: 1px solid #e7e8e3;
					border-bottom: 1px solid #e7e8e3;
					.hp {
						margin: 15px 0 0 31px;
					}
					.jieshao {
						width: 147px;
						line-height: 18px;
						margin: 9px 0 0 31px;
						font-size: 12px;
						color: #656565;
					}
					.jiage {
						color: #f64e4d;
						font-size: 13px;
						margin: 12px 0 0 31px;
					}
					.gouwuche {
						margin: 4px 28px 0 0;
					}
				}
			}
			.bottomnav {
				margin-top: 12px;
			}
		}
	}
</style>
