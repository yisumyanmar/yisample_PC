<template>
	<div class="xiangqing">
		<!-- <common-header></common-header> -->
		<common-header v-on:childToParent="onChildClick"></common-header>
		<my-header></my-header>
		<div class="center">
			<div class="top"><span>您的位置： </span> <span>交易中心</span> > <span>退款退货 </span> > <span>查看详情</span></div>
			<img class="logo" src="../../assets/img/handle1.png"/>
			<div class="bottom">
				<div class="left l">
					<div class="top"><p>退款成功</p></div>
					<div class="yuanyin">投诉原因：<span class="spa">*</span>
						<ul v-for="(item,index) in radioChoice" :key="item.id">
							<li class="l"><input type="radio" name="why" :v-model="chiose"/>{{item.text}}</li>
							<!-- <li class="l"><input type="radio" name="why" />违背承诺</li>
							<li class="l"><input type="radio" name="why" />恶性骚扰</li>
							<li class="l"><input type="radio" name="why" />恶意评价</li>
							<li class="l"><input type="radio" name="why" />交易违反交易流程</li>
							<li class="l"><input type="radio" name="why" />未按承销价格交易</li> -->
						</ul>
					</div>
					<div class="haoma">手机号码：<span class="spa">*</span><input type="text" v-model="phone"/></div>
					<div class="shuoming"><p class="l">说明：<span class="spa">*</span></p><textarea class="l" v-model="explain"></textarea><span>(2/200字)</span></div>
					<div class="pingzheng">上传凭证：<span>选择凭证图片</span></div>
					<div class="jiahao clearfix">
						<div class="image-list l" v-show="upload_list.length != 0">
							<ul class="clearfix">
							<li class="l" v-for="(item,index) in upload_list" :key="index">
								<span class="close-ico" @click="del(index)"></span>
								<img :src="URL + item" alt="">
							</li>
							</ul>
						</div>
						<div v-show="upload_list.length < 3" class="upload-btn l">
							<input @change="imgChange($event)" accept="image/*" type="file">
							<i class="el-icon-plus"></i>
						</div>
					</div>
					<div class="but">
						<button @click="open">提交申请</button>
					</div>
				</div>
				
				
				
				<div class="right r">
					<div class="head">投诉申请</div>
					<div class="shangpin"><img src="../../assets/img/apply.png"/><span>小熊电热饭盒保温可插电蒸煮器加热真空保鲜双层不锈钢内胆便当盒 </span></div>
					<ul class="ul">
						<li>投诉卖家：bojiechina <img src="../../assets/img/qq.jpg" alt="" /></li><li>订单编号：<span class="lanse">3215375429258336</span></li><li>成交时间：2015-12-10 16:16:54</li>
					</ul>
				</div>
			</div>
		</div>
		<foot-com></foot-com>
	</div>
</template>
 
<script>
export default {
	data(){
		return{
			fromChild: '',
			configInfo: {},
			upload_list: [],
			explain:'',
			phone:'',
			chiose:'',
			radioChoice:[
				{id:'1',
				text:'未按约定时间发货'},
				{id:'2',
				text:'违背承诺'},
				{id:'3',
				text:'恶性骚扰'},
				{id:'4',
				text:'恶意评价'},
				{id:'5',
				text:'交易违反交易流程'},
				{id:'6',
				text:'未按承销价格交易'},
				]
		}
	},
	created() {
      this.getImageConfig();
    },
	methods: {
    	onChildClick (value) {
			this.fromChild = value
			if(this.fromChild == 'false') {
				location.reload();
			}
		},
		open() {
			// if (!this.explain) {
			// 	this.$message({
			// 		showClose: true,
			// 		message: '请填写退货理由！',
			// 		type: 'error',
			// 		duration: 1000
			// 	});
			// 	return false;
			// }
			// if (this.upload_list.length === 0) {
			// 	this.$message({
			// 		showClose: true,
			// 		message: '请上传凭证！',
			// 		type: 'error',
			// 		duration: 1000
			// 	});
			// 	return false;
			// }
			
			var data = {
				order_id: this.$route.query.id,
				goods_id: this.$route.query.goods_id,
				explain: this.explain,
				apply_img: this.upload_list,
				// store_id: this.order_info.store_id,
				// number: this.goods_num,
				store_id: this.$route.query.store_id,
				number: 1,
				price: this.phone,
				type:2
			}

			if(this.$route.params.type == 1){
				var api = this.$httpConfig.CommonOrderApplyForAfterSale;
			}else {
				var api = this.$httpConfig.packageOrderReturnRequest;
				// data.package_id = this.returnInformation.package_id
			}
			this.HTTP(api, data , 'post', false).then(res => {
			this.$router.push({
				path: '/refund',
				query: {
				id: this.$route.params.id,
				goods_id: this.$route.params.goods_id
				}
			});
			}).catch((res) => {

			})
		},
		getImageConfig() {
			this.HTTP(this.$httpConfig.getCommentImageConfig, {
				id: this.$route.query.id
			}, 'post', false)
			.then(res => {
				this.configInfo = res.data.data;
			}).catch((res) => {
				alert(res)
			})
		},
		imgChange(e) {
			let  reader  = new  FileReader();
			let  img1 = e.target.files[0];
			let  form  =  new  FormData();
			form.append('fileData', img1, img1.name);
			form.append('imageToken', this.configInfo.token);
			form.append('sessionToken', this.configInfo.s_token);
			let config = {
			headers: {
				"Content-Type": "multipart/form-data"
			}
			};
			this.$ajax.post(this.$httpConfig.uploadImageByImageComment, form, config)
			.then(res => {
				if (res.data.status == 10001) {
				this.$router.push("/passwordLogin");
				} else {
				if (res.data.status === 1) {
					this.upload_list.push(res.data.data);
				} else {
					alert(res.data.message);
				}
				}
			});
		},
	}
}
</script>

<style lang="less" scoped>
	.l{float: left;}
	.r{float: right;}
	.center {width: 1200px;margin: 0 auto;height: 100%;}
	.xiangqing{background:#f6f6f6;}
	.top{
		line-height:42px;font-size:12px;span{color:#474747;}span:last-child{color:#d02629;}
	}
	.logo{margin-bottom:11px;}
	.bottom{
		overflow: hidden;margin-bottom:31px;
		.left{width:902px;height:480px;background:#fff;
			.top{margin:11px 16px 0;line-height:33px;border-bottom:1px solid #e7e7e7;p{width:104px;border-bottom:2px solid #d02629;color:#d02629;text-align: center;}}
			.yuanyin{overflow: hidden; font-size:12px;color:#484848;margin:34px 0 0 54px;
				ul{overflow: hidden;display: inline-block;margin-left:11px;
					li{font-size:12px;color:#484848;margin-right:16px;input{float:left;margin:2px 11px 0 0;}}
				}
			}
			.haoma{font-size:12px;color:#484848;margin:19px 0 0px 54px;input{width:250px;height:30px;border: 1px solid #ccc;margin-left:13px;}}
			.shuoming{overflow: hidden;margin:10px 0 0 79px; p{font-size:12px;color:#484848;}textarea{width:468px;height:60px;margin-left:11px;}span{margin-left:5px;}}
			.pingzheng{margin:19px 0 0 57px;font-size:12px;color:#484848;span{cursor:pointer; display: inline-block;width:121px;height:28px;text-align: center;line-height:28px;background: #f9f9f9;border:1px solid #ccc;margin-left:14px;}}
			// .jiahao{width:98px;height:98px;border:1px dashed #ccc;margin:21px 0 23px 133px;line-height:116px;text-align: center;i{font-size:45px;color:#e4e4e4;}}
			.jiahao {
				margin: 21px 0 23px 133px;
				.image-list {
					ul {
						li {
							position: relative;
							margin-right: 10px;
							width: 98px;
							height: 98px;
							-webkit-border-radius: 4px;
							-moz-border-radius: 4px;
							-ms-border-radius: 4px;
							-o-border-radius: 4px;
							border-radius: 4px;
							.close-ico {
							position: absolute;
							width: 24px;
							height: 24px;
							right: -6px;
							top: -6px;
							cursor: pointer;
							z-index: 2;
							background: url(../../assets/img/clone-icon.png) center center no-repeat;
						}
						img {
							height: 100%;
						}
					}
				}
			}
			.upload-btn {
				width: 98px;
				border: 1px dashed #ccc;
				height: 98px;
				line-height: 116px;
				text-align: center;
				position: relative;
				-webkit-border-radius: 4px;
				-moz-border-radius: 4px;
				-ms-border-radius: 4px;
				-o-border-radius: 4px;
				border-radius: 4px;
			}
			input {
				cursor: pointer;
				opacity: 0;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}
			i {
				font-size: 45px;
				color: #e4e4e4;
			}
    	}
			button{margin-left:133px; cursor:pointer; width:94px;height:32px;border-radius:3px;text-align: center;line-height:32px;color:#fff;background: #d02629;}
			.spa{color:#f36a6a;margin-left:0 !important;}
			
			
		}
		.right{
			width:289px;height:480px;background:#fff;
			.head{line-height:34px;margin: 10px 12px 14px;border-bottom:1px solid #e7e7e7;}
			.shangpin{overflow: hidden; margin:0 12px;border-bottom:1px solid #e7e7e7;img{margin:0 11px 15px 0;float:left;}span{font-size:12px;color:#333;}}
			.ul{
				margin:9px 12px 0;
				li{line-height:34px;font-size:12px;color:#333;span{color:#ff6000;}.lanse{color:#59c4eb;}img{margin-left:3px;}}
			}
		}
	}
	
</style>