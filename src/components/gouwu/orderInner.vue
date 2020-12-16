<template>
	<div id="gouwu">
		<common-header v-on:childToParent="onChildClick"></common-header>
		<head-com></head-com>
		<div id="top">
			
		</div>
		<div id="chase">
			<div class="center">
				<div class="boxxing">
					<img class="l" src="../../assets/img/qianggous/house.png" />
					<p class="l">
						<router-link to="home" class="l spot">首页</router-link>
						<span class="l spot">></span>
						<span class="l spot mdspot">定制下单 </span>
						<span class="l spot"> > 纸箱</span>
					</p>
				</div>
			<div class="adding">
				<div class="box1">
					<span style="color:#ce4143"> 第一步，</span>选择地址
					<h4 class="right">我们将自动为您推荐收件地址周边最优质的生产线</h4>	
				</div>
				<div class="deliver-address">
					<div class="addbox">
						<h4>湖南长沙（张三收）</h4>
						<p>湖南省长沙市芙蓉区解放东路华海3C广场1F-10</p>
						<p>号店 13617486322</p>
						<span>修改</span>
					</div>
					<div class="addbox">
						<h4>湖南邵阳（李四收）</h4>
						<p>湖南省邵阳市东大路三眼井旁公交一分公司宿舍</p>
						<p>4楼401  15526069249</p>
					</div>
					<div class="new">
						<p>
							<img src="../../assets/img/photo/adding1.jpg" ><br>
							<span>添加新地址</span>
						</p>
					</div>
					
				</div>
				<div class="Editdelivery">管理收货地址</div>
				<div class="box1">
					<span style="color:#ce4143"> 第二步，</span>目标箱型 
					<h4 class="right">选择您所采购的纸板用于制作成箱的箱型，便于我们帮您计算下料规格</h4>	
				</div>
				<div class="order">
				<el-carousel :interval="4000" type="card" height="200px">
					<ul>
						<li>
							<img src="../../assets/img/photo/swipe.jpg" >
							<span>飞机式1</span>
						</li>
						<li>
							<img src="../../assets/img/photo/swipe.jpg" >
							<span>飞机式2</span>
						</li>
						<li>
							<img src="../../assets/img/photo/swipe.jpg" >
							<span>飞机式3</span>
						</li>
					</ul>
				</el-carousel>
				</div>
				<div class="box1">
					<span style="color:#ce4143"> 第三步，</span>定制参数 
					<h4 class="right">请选择或输入符合您产品的参数，我们将第一时间为您安排生产，查看详细说明，请悬停在选项方块上方即可查看</h4>	
				</div>
			</div>
			<div class="adding2">
				<div class="list">
				<div class="largeImg">
					<img src="../../assets/img/photo/lgimg.jpg">
				</div>
				<div class="smallImg spec-scroll">
                        <div class="scrollbutton smallImgUp disabled l">
                            <i class="el-icon-caret-left"></i>
                        </div>
                        <div class="img-list">
                            <ul >
                                <li >
                                   <img src="../../assets/img/photo/slimg.jpg">
								   <img src="../../assets/img/photo/slimg.jpg">
                                </li>
                            </ul>
                        </div>
                        <div class="scrollbutton smallImgDown r">
                            <i class="el-icon-caret-right"></i>
                        </div>
                    </div>
			</div>
			<div class="right-Tabs">   
				<el-tabs type="border-card" class="print" >
					<el-tab-pane label="数码印刷" class="digital">
						<div class="measure">
							尺寸类型 : 
							<el-button style="margin-left: 40px"> 制造尺寸 </el-button>
							<el-button> 内径尺寸</el-button>
							<el-button> 外径尺寸</el-button>
						</div>

						<div class="measure">
							纸箱尺寸 : 
							<el-button style="margin-left: 40px"> 长 cm </el-button>
							<el-button> 宽 cm  </el-button>
							<el-button> 高 cm</el-button>
						</div>

						<div class="measure">
							物理特性 : 
							<el-button style="margin-left: 40px"> 内装重量  kg  </el-button>
							<el-button> 仓储叠放 层 </el-button>
						</div>

						<div class="measure">
							产品承压 : 
							<el-button style="margin-left: 40px"> 非承压 </el-button>
							<el-button> 30%承压 </el-button>
							<el-button> 60%承压 </el-button>
							<el-button> 100%承压 </el-button>
						</div>

						<div class="measure">
							存储环境 : 
							<el-button style="margin-left: 40px"> 正常   </el-button>
							<el-button> 干燥 </el-button>
							<el-button> 潮湿 </el-button>
						</div>
						
						<div class="measure">
							成型方式 : 
							<el-button style="margin-left: 40px">  一页成型   </el-button>
							<el-button> 两页成型 </el-button>
						</div>

						<div class="measure">
							面纸类型 : 
							<el-button style="margin-left: 40px">   牛皮纸   </el-button>
							<el-button> 涂布纸 </el-button>
						</div>

						<div class="measure">
							版面设定 : 
							<el-button style="margin-left: 40px">    AA    </el-button>
							<el-button>  AB  </el-button>
						</div>

						<div class="measure">
							开槽模切 : 
							<el-button style="margin-left: 40px">   模切    </el-button>
						</div>

						<div class="measure">
							印刷面积 : 
							<el-button style="margin-left: 40px">   30%以内     </el-button>
							<el-button> 31%-50%</el-button>
							<el-button> 51%-70% </el-button>
							<el-button> 70%以上 </el-button>
						</div>
						
						<div class="measure">
							数码表处 : 
							<el-button style="margin-left: 40px">   水性光油    </el-button>
							<el-button> UV油</el-button>
							<el-button> 无 </el-button>
						</div>

						<div class="measure">
							成箱方式 : 
							<el-button style="margin-left: 40px"> 钉箱   </el-button>
							<el-button> 粘箱 </el-button>
						</div>
						
						<div class="measure">
							打包方式 : 
							<el-button style="margin-left: 40px">    绳捆打包     </el-button>
							<el-button> 加护条打包</el-button>
							<el-button>  纸半包 </el-button>
							<el-button> 纸全包 </el-button>
						</div>

						<div class="measure">
							设计稿 : 
							<el-button style="margin-left: 40px">   已有设计稿     </el-button>
							<el-button> 没有设计稿</el-button>
						</div>
					</el-tab-pane>
					<el-tab-pane label="胶印印刷" class="offset">d</el-tab-pane>
					<el-tab-pane label="水印印刷" class="watermark">r</el-tab-pane>
					<el-tab-pane label="无印刷" class="meiyou">f</el-tab-pane>
				</el-tabs>
				<el-tabs type="border-card" class="material">
					<el-tab-pane label="推荐材质" class="inner-material">
						<div class="recommend">
							<span style="background-color: #f0f0f0;padding: 0px 8px;">经济型</span>
							<div style="padding:10px 10px">
								<img src="../../assets/img/photo/rec.jpg" style="float: left;padding: 23px 47px 11px 0px;">
								<h4>R4F-E</h4>
								<p>材质层数:3</p>
								<p>材质:H4F</p>
								<p>瓦楞:E</p>
								<p>面纸类型:牛皮纸</p>
							</div>
						</div>	
						
						<div class="durable">
							<span style="background-color: #f0f0f0;padding: 0px 8px;">耐用型</span>
							<div style="padding:10px 10px">
								<img src="../../assets/img/photo/rec.jpg" style="float: left;padding: 23px 47px 11px 0px;">
								<h4>R4F-E</h4>
								<p>材质层数:3</p>
								<p>材质:H4F</p>
								<p>瓦楞:E</p>
								<p>面纸类型:牛皮纸</p>
							</div>
						</div>	
					</el-tab-pane>
					<p>经济型：适用于普通周转箱，起到保护商品的作用 耐用型：可以用于多次周转搬运，相对比较耐用</p>
					<el-tab-pane label="其他材质">Config</el-tab-pane>
				</el-tabs>

				<div class="shuliang">
                        <span class="l">数量：</span>
                        <div class="inp l">
                            <input
                                class="l"
                                v-model="goodsNumber"
                                type="text"
                            />
                            <span
                                class="r btn-plus"
                                :class="{ disabled: plusState }"
                            >
                                <i class="el-icon-plus"></i>
                            </span>
                            <span
                                class="r btn-reduce"
                                :class="{ disabled: reduceState }"
                            >
                                <i class="el-icon-minus"></i>
                            </span>
                        </div>
                    </div>
					<div class="leiji">
						<p>
                            <span>商品总价：￥0.00 × 1件 =<span>￥19.00</span></span>
						</p>
                    </div>
					<div class="buy">
                        <span>立即购买</span>
                        <span>
                            <img
                                src="../../assets/img/gw.png"
                                style="position: relative;"
                            />
                            加入购物车
                        </span>
                    </div>

			</div>
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
	import pic from '@/assets/img/qianggous/pic1.png'
	export default {
		data() {
			return {
				selectGoods: {
				theard: ['销量', '人气', '价格','新品'],
				},
				selected: {
				theard: [false, false, false, false],
				},
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
				goodsNumber: 1,
				plusState: false,
            	reduceState: true,

				
			}
		},
        created(){
		   let title = "抢购" +'-'+this.$constant.webComContent;
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
			},
		
		}

	}
</script>


<style>
	.el-tabs--border-card {
		border: 1px solid #c8c8c8!important;
		box-shadow: none!important;;
	}
	.el-tabs--border-card>.el-tabs__content {
		padding: 15px;
		border: none;
	}
	.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
		color:#e70f23!important;
	}
	.el-tabs--border-card>.el-tabs__header .el-tabs__item:hover {
        color:#e70f23!important;
	}
	.measure{
		padding: 25px 0px 0px 0px;
	}
	.el-button:focus, .el-button:hover {
		color: #606266!important;
		border-color: #e70f23!important;
		background-color: #ffffff!important;
	}
	.el-button{
    	padding: 9px 20px!important;
	}
	.material{
		margin: 25px 0px 20px 0px;
	}
	.inner-material{
		width: 100%;
    	display: inline-flex;
	}
	.recommend,.durable{
		width: 40%;
		border: 1px solid #c4c4c4;
		margin: 20px;
		line-height: 24px;
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
		width: 100%;
		img {
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
					margin-top: 19px;
				}
				p {
					margin: 14px 0px;
					
					.spot {
						margin-left: 5px;
						font-size: 13px;
						color: #666666;
					}
					.mdspot{
						border: 1px solid #c2c0c0;
    					padding: 0px 15px;
					}
				}

			}
			.adding{
			.box1 {
				width: 100%;
				border-top: 3px solid #e06e70;
				background: #f1f1f1;
				padding: 15px 20px;
				margin:10px 0px;
					.right{
						float:right;
					}
				}
				.deliver-address{
					display:flex;
					padding-top: 15px;
				.addbox{
						width:33.33%;
						border: 1px solid #c8c8c8;
						padding-bottom: 10px;
						margin-right: 25px;
						height: 150px;
						h4{
							border-bottom:1px solid #c8c8c8;
							padding: 6px 10px;
						}
						p{
							padding: 13px 10px 0px 10px;
						}
						span{
							padding: 6px 10px;
							color:red;
						}
					}
						.new{
							width:33.33%;
							border: 1px solid #c8c8c8;
							padding-bottom: 10px;
							height: 150px;
							img{
								padding-bottom:10px;
							}
							p{
								text-align: center;
								padding-top: 35px;
								}
							}
					}
					.Editdelivery{
						border: 1px solid #c8c8c8;
						width: 100px;
						text-align: center;
						margin-top: 20px;
						margin-bottom: 20px;
					}
					.order{
						ul{
							display: inline-flex;
							align-items: center;
							margin-left: 55px;
							li{
								img{
								    padding: 45px 20px 0px 20px;
    								width: 120px;
								}
								span{
									display: grid;
    								text-align: center;
								}
							}
						}
					}
				}
			.adding2{
				display: inline-flex;
				.largeImg{
					img{
						border:1px solid #c8c8c8;
					}
				}
				.smallImg{
					display: inline-flex;
					padding-top: 12px;
					ul{
						width: 330px;
						img{
							border: 1px solid  #c8c8c8 ;
    						margin: -3px 7px;
						}
					}
					i{
							border: 1px solid #c8c8c8;
    						padding: 15px 0px;
						}
				}
				.right-Tabs{
					width: 800px;
					height: 1500px;
					margin-left: 28px;
					.material{
						width:100%;
					}
				}
			}

			.shuliang {
				margin-top: 30px;
				margin-bottom: 20px;
				margin-left: 15px;
				overflow: hidden;

				span {
					font-size: 14px;
					color: #333333;
					line-height: 32px;
					padding-top: 2px;
				}

				.inp {
					width: 123px;
					height: 36px;
					border: 1px solid #a7a7a7;
					margin: 0 9px 0 20px;

					input {
						width: 105px;
						height: 100%;
						border-right: 1px solid #a7a7a7;
						padding-left: 10px;
					}

					span {
						width: 16px;
						height: 17px;
						background: #eef4f2;
						color: #666;
						cursor: pointer;

						i {
							font-size: 7px;
							float: left;
							margin-top: 4px;
							margin-left: 4px;
						}
					}

					.btn-plus {
						border-bottom: 1px solid #a7a7a7;
					}

					span.disabled {
						color: #ccc;
						cursor: not-allowed;
					}
				}
			}
			.leiji {
				height: 60px;
				background: #F5F7FA;
				margin-top: 20px;

				p {
					padding: 8px 15px;

					span {
						font-size: 14px;
						color: #333333;
						span {
						font-size: 30px;
						color: #D02629;
						font-weight: 600;
						}
					}
				}
			}
			.buy {
				margin-top: 40px;

				span {
					cursor: pointer;
					width: 160px;
					height: 40px;
					line-height: 38px;
					font-size: 16px;
					background: #ffeded;
					border: 1px solid #d02629;
					display: inline-block;
					color: #d02629;
					border-radius: 5px;
				}

				span:nth-of-type(1) {
					text-align: center;
				}

				span:nth-of-type(2) {
					margin-left: 9px;
					background: #d02629;
					color: #fff;

					img {
						float: left;
						margin: 8px 10px 0 22px;
					}
				}

				div {
					line-height: 38px;
					font-size: 12px;
					color: #757575;

					img {
						margin-left: 7px;
					}
				}
			}
			
		}
	}
</style>
