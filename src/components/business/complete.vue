<template>
	<div id="complete">
		<!-- <common-header></common-header> -->
		<common-header v-on:childToParent="onChildClick"></common-header>
		<div id="logo">
			<div class="center">
				<div class="nake l">
					<p class="Gongpin l"><img src="../../assets/img/logo-yi.png" /></p>
					<!-- <p class="iphone l">
						<span class="hot l">招商热线</span>
						<span class="shuzi l">{{$constant.tel}}</span>
					</p> -->
				</div>
				<div class="gold r">
					<img src="../../assets/img/2.png"/>
					<ul><li>开店申请</li><li>网门审核</li><li>支付开店款项</li><li>创建店铺</li></ul>
				</div>
			</div>
		</div>
		
		<div id="please">
			<div class="center">
				<div class="Box">
					<img src="../../assets/img/deng.png" /><p>注意事项</p><span >信息提交前，请务必先了解招商资质标准细则；</span> <span>店铺分类选定后将不可更改，请慎重选择，如没有您需要的分类请联系网站客服。</span>
				</div>
				<div class="contents">
					<h1>请完善店铺信息</h1>
					<p class="six"><i>*</i> 店铺所属分类 :<select><option></option></select></p>
					<p class="four"><i>*</i> 开店时长 :<select><option></option></select></p>
					<p class="five"><i>*</i> 平台保证金 : &nbsp;&nbsp;&nbsp;1000元</p>
					<p class="four"><i>*</i> 店铺名称 :<input type="text" /></p>
					<span>开店成功后，可在店铺基本设置页面进行修改</span>
					<span>待支付费用 : 0.00元</span>
					<span>请先提交至网站管理人员进行审核，审核通过后，缴纳待支付费用，支付成功后即可开店。</span>
				</div>
				<button>上一步</button>
				<button>提交审核</button>
			</div>
		</div>
      <com-foot></com-foot>
	</div>
</template>

<script>
import ComFoot from '@/common/footerDetail.vue';
export default {
    components:{
            ComFoot
        },
	data () {
		return {
			fromChild: ''
		}
	},
	methods: {
        onChildClick (value) {
            this.fromChild = value
            if(this.fromChild == 'false') {
                location.reload();
            }
        }
    }
}
</script>

<style scoped lang="less">
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
	

	
	#logo {
		width: 100%;
		height: 104px;
		.center {
			height: 104px;
			.Gongpin {
				height: 104px;
				img {
					margin-top: 20px;
					padding-right: 20px;
					height: 60px;
				}
			}
			
			.gold {
				margin-top:34px;margin-left:162px;
				ul{overflow:hidden;margin-top:7px;
					li{float:left;font-size:12px;color:#666;}
					li:nth-of-type(1){margin: 0 72px 0 35px;}
					li:nth-of-type(2){color:#d02629;}
					li:nth-of-type(3){margin: 0 56px 0 56px;}

				}
			
			}
		}
	}
	
	#please {
		width: 100%;
		background: #fafafa;
		padding:20px 0;
		.center {
			background: #FFFFFF;
            /*height:742px;*/
            height: 790px;
			overflow:hidden;
			.Box{height:126px;border:1px solid #bce8f1;background:#eff8ff;margin:51px 110px 56px;img{margin:23px 16px 0 40px;float:left;}
				span{font-size:12px;color:#b1b4b6;float:left;width:70%;margin-left:73px;line-height:24px;}
				p{color:#333;font-size:14px;margin:25px 0 3px;}
			}
			.contents {
				height:332px;margin:0 110px;border-bottom:1px dashed #d6d6d6;
				h1{font-size:14px;color:#333;}
				P{color:#646464;font-size: 12px;margin-top:20px;
					i{color:#ff6767;margin-right:8px;}
					input{width:286px;height:30px;border:1px solid #ccc;margin-left: 20px;}select{width:286px;height:30px;color:#888;margin-left: 20px;}
				}
				.six{margin-left:100px;}.four{margin-left:125px;}.five{margin-left:113px;}
				span{color:#999;display:block;line-height:26px;font-size:12px;margin-left:216px;}span:nth-of-type(1){margin-top:20px;}
			}
			button{cursor:pointer; width:94px;height:32px;text-align: center;line-height:32px;border-radius:4px;font-size:12px;color:#fff;background: #d02629;margin-top:40px;}
			button:nth-of-type(1){margin-left:326px;background:#ccc;}
		}
	}
		#commonFooter{
		width: 100%;
		height: 90px;
		.center{
			height: 90px;
			ul{
				width: 100%;
				height: 12px;
				line-height: 12px;
				margin-top: 20px;
				margin-left: 470px;
				li{
					width: 60px;
					height: 12px;
					border-right: 1px solid #8b8b8b;
					font-size: 12px;
					text-align: center;
				}
			}
			.online{
				width: 100%;
				height: 26px;
				line-height: 26px;
				text-align: center;
				font-size: 12px;
				margin-top: 5px;
			}
			.onlines{
				width: 100%;
				height: 26px;
				line-height: 26px;
				text-align: center;
				font-size: 12px;
			}
		}
	}
</style>
