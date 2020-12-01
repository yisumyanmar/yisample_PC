<template>
	<div class="head">
		<header>
			<div class="header">
				<div class="divOne l">
					<el-tooltip class="item" effect="dark" content="按 Ctrl + D 收藏本网站" placement="bottom-start">
						<span class="l"><img src="../assets/img/shuqian.jpg" />收藏{{this.$constant.mainTitle}}</span>
					</el-tooltip>
					<div class="l divTwo" @click="toAddress">
						<i class="el-icon-location-outline"></i>
						配送至:
						<span class="shanghai">{{site}}</span>
						<span>[切换]</span>
					</div>
				</div>
				<div class="r phone">
					<img class="mobile" src="../assets/img/phone.jpg"/>
					<!-- <span>{{$constant.web_phone}}</span> -->
					<span>{{qrCode.intnet_phone}}</span>
				</div>
				<ul class="r ul">
					<li class="l shortcut">
						<div class="dt">
								<a href="JavaScript:;" @click="toLink(1)">我的订单</a>
						</div>
					</li>
					<li class="spacer"></li>
					<li class="l shortcut">
						<div class="dt">
								<a href="JavaScript:;" @click="toLink(2)">个人中心</a>
						</div>
					</li>
					<li class="spacer"></li>
					<li class="l shortcut">
						<div class="cw-icon">
								关注商城
								<i class="lower-icon"></i>
						</div>
						<div class="erweima dropdown-layer">
							<img :src="URL + qrCode.init_qr_code" />
							<p>扫一扫</p>
						</div>
					</li>
					<li class="spacer"></li>
					<li class="l shortcut">
						<div class="cw-icon">
								客户服务
								<i class="lower-icon"></i>
						</div>
						<ul class="uls dropdown-layer">
							<li v-for="(item,index) in articleType" :key="index">
								<a @click="goHelp(item.id)">{{item.name}}</a>
							</li>
						</ul>
					</li>
					<li class="spacer"></li>
					<li class="l shortcut">
						<div class="cw-icon">
							商家管理
							<i class="lower-icon"></i>
						</div>
						<ul class="uls dropdown-layer">
							<li>
								<a href="javascript:;" @click="toLink(3)">招商入驻</a>
							</li>
							<li>
								<a href="javascript:;" @click="custorLogin">商家登录</a>
							</li>
						</ul>
					</li>
				</ul>
				<div class="r youhello">
					<div v-if="ok" class="us-n clearfix">
						<span style="margin-left:5px;float:left;" v-if="ok">你好，</span>
						<span class="user_name text1-hidden" @click="topersonal('personalData')" v-if="ok" v-text="user_name"></span>
					</div>
					<div v-if="ok" class="g_user_info">
						<div class="user_info_content">
							<div class="user_img l">
								<img v-if="user_img" @click="topersonal('personalData')" :src="URL+ user_img" alt="">
								<img v-else @click="topersonal('personalData')" src="../assets/img/default-head.png" alt="">
							</div>
								<span class="sign_out r" @click="signOut">退出</span>
						</div>
					</div>
					<span v-if="no" class="jumpTo" @click="logIn">请登录</span>
					<span v-if="no" class="jumpTo" @click="register">免费注册</span>
				</div> 
			</div>
		</header>

	</div>
</template>
<script>
export default {
	data() {
		return {
			no: true, 
			ok: false,
			user_name: '',
			user_img:'',
			articleType: [],
			x:null,
			site:null,
			qrCode:{},
			timer: null
		}
	},
	mounted() {
		this.user_name = sessionStorage.getItem('userName');
		this.user_img = sessionStorage.getItem('userHeaderImg');
		
		if (this.user_name != null) {
			this.no = false
			this.ok = true
		} else {
			this.no = true
			this.ok = false
		}
		this.getArticleType();
		// this.getNav();
		// this.getCommonHeader();

	},
	created(){
		this.getaddressLists();
		this.QRcede();
	},
	beforeDestroy() {
		clearInterval(this.timer)
	},
	methods: {
		// authenticated() {
        //     let somethingtemp = localStorage.getItem('loginuserdata')
        //     return somethingtemp;
        // },

		//获取二维码
		QRcede(){
			this.HTTP(this.$httpConfig.aboutEtcetera,{},'post')
				.then((res) =>{
					this.qrCode = res.data.data;
				}).catch(()=>{})
		},
		//获取默认地址addressLists
		// getaddressLists(){
		// 	// this.user_name = sessionStorage.getItem('userName');
		// 	this.user_name = localStorage.getItem('userNamee');
		// 	this.HTTP(this.$httpConfig.addressLists,{},'post').then((res)=>{
		// 		this.site = res.data.data[0].prov_name+" "+res.data.data[0].dist_name;
		// 	}).catch((e)=>{
		// 		console.log(e)
		// 	})
		// },
		getaddressLists(){
			this.HTTP(this.$httpConfig.addressLists,{},'post').then((res)=>{
				this.site = res.data.data[0].prov_name+" "+res.data.data[0].dist_name;
			}).catch((e)=>{
				console.log(e)
			})
		},
		//退出登录
		// signOut(){
		// 	localStorage.setItem("loginuserdata", 'false');
		// 	// this.$emit('childToParent', localStorage.getItem('loginuserdata'))
		// 	this.no = true
		// 	this.ok = false
		// 	this.HTTP(this.$httpConfig.outLogin, {}, 'post')
		// 		.then((res) => {
		// 			if(res.data.status == 1){
		// 				localStorage.clear();
		// 				sessionStorage.removeItem("token");
		// 				sessionStorage.clear();
						

		// 				window.location.reload()
		// 				window.opener.location.reload()
		// 				document.location.href = "/passwordLogin";
		// 				this.$router.push('/passwordLogin')
		// 			}
		// 		})
		// },
		signOut(){
			localStorage.setItem("loginuserdata", 'false');
			this.no = true
			this.ok = false
			this.HTTP(this.$httpConfig.outLogin, {}, 'post').then((res) => {
				if(res.data.status == 1){
					sessionStorage.removeItem("token");
					sessionStorage.clear();
					localStorage.clear();

					document.location.href = "/passwordLogin";
					this.$router.push('/passwordLogin')

					window.location.reload()
					window.opener.location.reload()
					
					this.$emit('childToParent', localStorage.getItem('loginuserdata'))
				}
			})
		},
		topersonal(r){
			this.x++;
			window.open(window.location.origin+'/'+r+'?x='+this.x);
		},
		toLink(n){
			if(n == 1){
				window.open(window.location.origin+'/myOrder'+'?id=2');
			}else if(n == 2){
				window.open(window.location.origin+'/greet'+'?id=1');
			}else if(n == 3){
				window.open(window.location.origin+'/progress');
			}
		},
		getCommonHeader(){
			this.HTTP(this.$httpConfig.getCommonHeader, {}, 'post').then((res) => {
				// this.articleType = res.data.data;
			})
		},
		goHelp(id){
			this.$router.push({
				name:'guide',
				params:{
					type:'class',
					id:id
				}
			})
		},
		getArticleType() {
			this.HTTP(this.$httpConfig.getArticleType, {}, 'post').then((res) => {
				this.articleType = res.data.data;
			})
		},
		custorLogin() {
			window.open(this.$constant.agentURL);
		},
		logIn() {
			this.$router.push({ name: 'passwordLogin' });
		},
		register() {
			this.$router.push({ name: 'register' });
		},
		toAddress(){
			this.$router.push({name:'receive'});
		},
		getNav() {
			this.HTTP(this.$httpConfig.commonHeader, {}, 'post').then((res) => {
				console.log(res)
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
header {
  background: #f7f7f7;
}
.header {
  width: 1200px;
  margin: 0 auto;
	height: 38px;
	line-height: 38px;
  .divOne {
    color: #9b9b9b;
    font-size: 12px;
		cursor: pointer;
    img {
      margin: 0 12px;
    }
    .divTwo {
      margin-left: 20px;
      .shanghai {
        color: #d02629;
      }
      a {
        color: #9b9b9b;
        margin-left: 3px;
      }
    }
  }
}
.phone {
	height: 38px;
	line-height: 38px;
	position: relative;
	.mobile{
		position: absolute;
		top: 12px;
	}
  span {
    font-size: 20px;
		color: #d02629;
		padding-left: 20px;
  }
}
.ul {
  margin-right: 18px;
  .active {
    background: #fff url(../assets/img/down010.png) no-repeat top 15px right 5px !important;
	}
	.spacer{
		margin: 15px 5px 0;
    width: 1px;
    height: 10px;
    background-color: #ccc;
		float: left;
	}
  .shortcut {
    position: relative;
    text-align: center;
		.cw-icon {
			color: #656565;
    	font-size: 12px;
			position: relative;
			z-index: 1;
			float: left;
			border: 1px solid #f7f7f7;
			height: 36px;
			padding-left: 7px;
			padding-right: 14px;
			box-sizing: content-box;
			.lower-icon{
				position: absolute;
				float: left;
				top: 16px;
				right: 3px;
				width: 7px;
				height: 4px;
				background: url(../assets/img/down010.png) no-repeat;
			}
			a:hover{
				color: red;
			}
		}
		.dt{
			padding-left: 7px;
			padding-right: 7px;
			a:hover{
				color: red;
			}
			a {
				color: #656565;
				font-size: 12px;
			}
		}
    .erweima {
      width: 79px;
      background: #fff;
			border: 1px solid #eee;
			position: absolute;
			top: 35px;
			z-index: 9999;
    }
    .uls {
      width: 79px;
      background: #fff;
      position: absolute;
      top: 29px;
      left: 0;
      border: 1px solid #f1f1f1;
      border-top: 0;
      z-index: 999;
      li {
        width: 100%;
        height: 24px;
        line-height: 24px;
        a {
          border-right: 0;
          color: #656565;
					font-size: 12px;
        }
        a:hover{
          color: red;
        }
      }
      li:last-child {
        margin-bottom: 5px;
      }
    }
    .afirst {
      border-left: 1px solid #ccc;
    }
    .alast {
      border-right: 0;
		}
		.dropdown-layer{
			display: none;
			width: 71px;
			top: 36px;
		}
	}
	.shortcut:hover .cw-icon{
		padding-bottom: 2px;
    border-color: #f1f1f1;
    border-bottom: none;
    background-color: #fff;
	}
		.shortcut:hover .dropdown-layer{
				display: block;
		}
}
.youhello {
	position: relative;
	border-left: 1px solid #f7f7f7;
	border-right: 1px solid #f7f7f7;
	font-size: 12px;
	background: url(../assets/img/down010.png) no-repeat top 18px right 4px;
  .user_name {
		cursor: pointer;
		margin-right: 15px;
		float: left;
		max-width: 78px;
	}
	.user_name:hover{
		color: #f00;
	}
  .jumpTo {
		color: #333333;
		padding: 0 5px;
		cursor: pointer;
		&:hover{
			color: #f00;
		}
	}
	.g_user_info{
		position:absolute;
		display: none;
		z-index: 2018;
		left: -1px;
		top: 37px;
		border: 1px solid #f7f7f7;
		border-top: none;
		width: 200px;
		background-color: #fff;
		.user_info_content{
			padding: 10px;
			overflow: hidden;
			.user_img{
				width: 60px;
				height: 60px;
				-moz-border-radius: 50%;
				border-radius: 50%;
				overflow: hidden;
				cursor: pointer;
				img{
					width: 100%;
					height: 100%
				}
			}
			.sign_out{
				line-height: initial;
				margin-top: 10px;
				cursor: pointer;
			}
			.sign_out:hover{
				color: #f00;
			}
		}
	}
}
.youhello:hover .us-n{
	background: url(../assets/img/down010.png) no-repeat top 18px right 4px;
	background-color: #fff;

}
.youhello:hover .g_user_info{
		display: block;
}
</style>
