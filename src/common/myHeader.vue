<template>
	<div>
	<div class="topnav">
			<div class="center">
				<img class="logo l"  src="../assets/img/cpmr.jpg" alt="">
				<!-- <img class="logo l" :src="URL+logo_name"/> -->
				<div class="my l">
					<span>我的商城</span>
					<router-link to="home">返回商城首页</router-link>
				</div>
				<ul class="l topul">
					<li class="l topli" @click="goHome">首页</li>
					<li class="l topli" @click="find"><a :class="{color:iscolor}" href="/">账户设置</a><i :class="{color:iscolor}" class="el-icon-arrow-down"></i>
						<ul class="hidden" v-show="lose">
							<li class="l" @click="geren">个人资料</li>
							<li class="l" @click="zhanghu">账户安全</li>
							<li class="l" @click="zhanghao">账号绑定</li>
							<li class="l" @click="address">收货地址</li>
						</ul>
					</li>
					<li class="l topli">消息<span>12</span></li>
				</ul>
				<div class="form clearfix">
					<div class="search l"><input type="text" placeholder="和田玉"/><span>搜索</span></div>
					<div class="l buycar"><img class="l" src="../../../assets/img/buycar.png"/><router-link to="buyCar">我的购物车</router-link><i class="r el-icon-arrow-right"></i><span>8</span></div>
				</div>
			</div>
		</div>
		</div>
</template>

<script>
	
	export default {
		data() {
			return {
				lose:'',
				iscolor:'',
				logo_name:''
			}
		},
		created(){
			this.logo_name = localStorage.getItem('logo_name');
		},
		methods:{
			goHome(){
				this.$router.push({name:'home'})
			},
			find(){
		  		this.lose=!this.lose
		  		this.iscolor=!this.iscolor
		  	},
		  	geren(){
		  		this.$emit('geRen')
		  	},
		  	zhanghu(){
		  		this.$emit('zhanghu')
		  	},
		  	zhanghao(){
		  		this.$emit('zhanghao')
		  	},
		  	address(){
		  		this.$emit('address')
		  	}
		}
		
	}
</script>

<style lang="less" scoped>
	.l{float: left;}
	.r{float: right;}
	.center {width: 1200px;margin: 0 auto;height: 100%;}
	.topnav{
		height:80px;background: #d02629;
		.logo{margin-top: 14px; width:143px;height: 50px;}
		.my{
			width:95px;text-align: center;margin: 22px 0 0 83px;
			span:nth-of-type(1){font-size:18px;color:#fff;}
			a{width:95px;height:18px;line-height: 18px;border:1px solid #ede2cc;display:inline-block;border-radius:15px;font-size:11px;color:#ede2cc;}
		}
		.topul{
			margin:35px 0 0 48px;
			.topli{font-size:16px;color:#fff;position:relative;cursor: pointer;
				span{color:#d02629;text-align:center;font-size:10px; width:24px;height:24px;line-height:24px;background:url(../../../assets/img/qipao.png) no-repeat center;position:absolute;top:-16px;right:-27px;}
			}
			.topli:nth-of-type(2){margin:0 38px 0 43px;a{z-index:12;position:relative;font-size:16px;color:#fff;} i{ margin-left:11px;font-weight: 600;z-index:999;position:relative;}}
			.hidden{
				margin-bottom: 19px; position: absolute;top: -12px;left:-12px;background: #fff;border:1px solid #e8e8e8;width:110px;height:154px;padding-top: 43px;
				li{color:#666;font-size: 12px;width:100%;padding-left:15px;line-height: 25px;}
			}
			.color{color:#333 !important;}
		}
		div.form{
			margin: 26px 0 0 227px;
			.search{
				width: 184px;height:32px;cursor: pointer;
				input{width:128px;height:32px;padding-left: 9px;float:left;}
				span{width:56px;height:32px;float:left;text-align: center;line-height: 32px;background: #ece8e8;color:#636262;font-size:12px;}
			}
			.buycar{
				width:141px;height:32px;background:#f9f9f9;text-align: center;line-height:32px;margin-left: 15px;cursor: pointer;position: relative;
				img{margin:8px 0 0 13px;}i{margin:10px 10px 0 0;}a{color:#333;}
				span{width:18px;height:14px;font-size:9px;color:#fff;text-align: center;line-height: 14px;position: absolute;background:url(../../../assets/img/qipao1.png)no-repeat center;top:-8px;right:15px;}
				}
		}
	}
</style>