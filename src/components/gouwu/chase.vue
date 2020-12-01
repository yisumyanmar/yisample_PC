<template>
	<div id="gouwu">
		<common-header v-on:childToParent="onChildClick"></common-header>
		<!-- <head-com :navid = '1'></head-com> -->
		<head-com v-if="tempid" :navid = tempid></head-com>
		<div id="top">
			<!-- <img src="../../assets/img/banner_jj.jpg" /> -->
			<el-carousel :height="bannerHeight">
				<el-carousel-item v-for="(item,index) in banner" :key="index">
				<a :href="item.ad_link" style="pointer-events:auto; ">
				<img :src="URL + item.pic_url" />
				</a>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div id="chase">
			<div class="center">
				<div class="boxxing">
					<img class="l" src="../../assets/img/qianggou/house.png" />
					<p class="l">
						<router-link to="home" class="l spot">首页</router-link>
						<span class="l spot">></span>
						<span class="l spot">抢购</span>
					</p>
				</div>
				<div class="box1">
					<dl class="l" v-for="(arrs,index) in list" :key="index" @click="detail(arrs.goods_id)">
						<dt><img :src="URL+arrs.pic_url"/></dt>
						<dd>
							<p class="one">
								<span class="one_first" @mouseenter='updateXY(arrs.title,$event)' @mouseleave="updataFullFlag">{{arrs.title}}</span>
								<span class="one_second ">[{{arrs.start_time | formatDate}}开抢]</span>
								<span class="one_three">{{arrs.already_num}}人已购买</span>
							</p>

							<p class="two l">
								<span class="two_first l">￥{{arrs.panic_price}}</span>
								<span class="two_second l">￥{{arrs.price_market}}</span>
							</p>
							<p v-if="arrs.start_time>now" class="three l">
								<span>即将开始</span>
							</p>
							<p v-else class="three l">
								<span>马上抢购</span>
							</p>
						</dd>
					</dl>
				</div>
				<div class="box2">
					<el-pagination @current-change="handleCurrentChange" background layout="total,prev, pager, next,jumper" :page-size="page_size" :total="page">
					</el-pagination>
				</div>
			</div>
		</div>
		<foot-com></foot-com>
    <!--标题完全显示框-->
    <div class="full-display-title" v-if="fullTitieFlag" :style="displayTitleStyle">
      {{fullTitle}}
    </div>
	</div>
</template>

<script>
	import pic from '@/assets/img/qianggou/pic1.png'
	export default {
		data() {
			return {
				list: [],
				banner:[],
				issty: '',
				isShow: true,
				now: '',
				fullTitle:"",
				displayTitleStyle:{
					top:'',
					bottom:''
				},
        		fullTitieFlag: false,
				page: 0, //共多少条
				currentPage: 1, //当前页
				page_size: 12, //每页显示多少条数据
				tempid: '',
				bannerHeight: "500px",
				
			}
		},
        created(){
		   let title = "抢购" +'-'+this.$constant.webComContent;
		// let title = this.$constant.webComContent;
			this.showScroll.scrollTitle(title);
        },
		mounted() {
			this.tempid = this.$route.query.id
			this.now = (new Date().getTime()) / 1000;
			this.getList();
		},
		methods: {
			onChildClick (value) {
            this.fromChild = value
            if(this.fromChild == 'false') {
                location.reload();
            }
        },
			/*页面跳转*/
			handleCurrentChange(currentPage) {
				console.log(currentPage);
				this.currentPage = currentPage;
				this.getList();
			},
      updateXY(title,e){
        this.fullTitle = title;
        this.displayTitleStyle.top = e.pageY + 30 + "px";
        this.displayTitleStyle.left = e.pageX + 20 + "px";
        this.fullTitieFlag = true;
      },
      updataFullFlag(){
        this.fullTitieFlag = false;
      },
			getList() {
				this.HTTP(this.$httpConfig.getPanicGoods, {
					page: this.currentPage
				}, 'post').then((res) => {
					this.list = res.data.data.list;
					this.banner = res.data.data.banner;
					this.page = Number(res.data.data.count);
					console.log(this.page)
				})
			},
			detail(id) {
				this.$router.push({
					name: 'introduce',
					params: {
						id: id
					}
				})
			}

		}

	}
</script>

<style>
	.el-pagination.is-background .el-pager li:not(.disabled):hover {
		color: #d02629;
	}

	.el-pagination.is-background .el-pager li:not(.disabled).active {
		background-color: #d02629;
		color: #fff;
	}

	.el-input.is-active .el-input__inner,
	.el-input__inner:focus {
		border-color: #ae984d;
	}
</style>

<style scoped lang='less'>
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

	#top {
		// width: 100%;
		// height: 343px;
		img {
			// width: 100%;
			// height: 100%;
			// height: auto;
			// object-fit:scale-down;
			width:100%;
			height:100%;
		}
	}

	#chase {
		width: 100%;
		.center {
			.boxxing {
				width: 100%;
				height: 32px;
				img {
					margin-right: 10px;
					margin-top: 11px;
				}
				p {
					height: 32px;
					line-height: 32px;
					.spot {
						margin-left: 5px;
						font-size: 13px;
						color: #666666;
					}
				}
			}
			.box1 {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				flex-wrap: wrap;
				dl {
					width: 380px;
					height: 466px;
					border: 1px solid #dddddd;
					margin-right: 20px;
					margin-bottom: 20px;
					&:hover {
						border: 1px solid #d02629;
					}
					dt {
						width: 100%;
						height: 344px;
						line-height: 344px;
						vertical-align: middle;
						text-align: center;
						img {
							width: 297px;
							height: 305px;
						}
					}
					dd {
						width: 100%;
						height: 122px;
						.one {
							width: 100%;
							height: 70px;
							margin-left: 28px;
							.one_first {
								height: 20px;
								line-height: 20px;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								display: block;
								color: #000000;
								font-size: 13px;
                                width: 350px;
                                &:hover{
                                    color: red;
                                    cursor: pointer;
                                }
							}
							.one_second {
								height: 18px;
								line-height: 18px;
								color: #f66c09;
								font-size: 13px;
								margin-right: 8px;
							}
							.one_three {
								color: #d02629;
								font-size: 13px;
							}
						}
						.two {
							width: 278px;
							height: 50px;
							line-height: 50px;
							background: #d02629;
							.two_first {
								font-size: 22px;
								color: #FFFFFF;
								margin-right: 10px;
								margin-left: 10px;
							}
							.two_second {
								font-size: 12px;
								color: #FFFFFF;
								text-decoration: line-through;
							}
						}
						.three {
							width: 100px;
							height: 50px;
							line-height: 50px;
							text-align: center;
							background: #d02629 url(../../assets/img/qianggou/pic-small.png) no-repeat;
							span {
								color: #f06807;
								cursor: pointer;
							}
						}
					}
				}
			}
			.box2 {
				width: 1200px;
				height: 80px;
				text-align: center;
				.prev {
					width: 70px;
					height: 28px;
					line-height: 28px;
					border: 1px solid #e6e6e6;
					font-size: 13px;
					color: #868686;
					margin: 0 auto;
					text-align: center;
				}
				ul {
					width: 155px;
					height: 28px;
					li {
						width: 28px;
						height: 28px;
						line-height: 28px;
						border: 1px solid #e6e6e6;
						text-align: center;
					}
				}
				.next {
					width: 70px;
					height: 28px;
					line-height: 28px;
					border: 1px solid #e6e6e6;
					font-size: 13px;
					color: #868686;
					margin-right: 10px;
					text-align: center;
					margin-right: 17px;
				}
				.go {
					height: 28px;
					line-height: 28px;
				}
			}
		}
	}
</style>
