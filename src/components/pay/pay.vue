<template>
    <div class="pay">
        <div class="center">
            <div class="header">
                <router-link to="/home">
                    <img class="l" src="../../assets/img/logodl.jpg" />
                </router-link>
                <p class="l">我的收银台</p>
            </div>
            <div class="middle clearfix" v-if="$route.query.total_price">
                <!-- <p>订单提交成功，请您尽快付款！商品名称：xxxxx <span class="dindan">订单号：B2B20161125000000116-1024080</span><span class="r">应付金额<span class="hong">{{$route.query.total_price|keep2Num}}</span>元</span>
                </p>-->
                <p>
                    订单提交成功，请您尽快付款！
                    <span class="r">
                        应付金额
                        <span class="hong">{{$route.query.total_price|keep2Num}}</span>元
                    </span>
                </p>
                <p>请您在提交订单后24小时内完成支付。</p>
            </div>
            <div class="middle clearfix" v-else>
                <p>
                    <span class="r">
                        应付金额noprice
                        <span class="hong">{{$route.query.total_price|keep2Num}}</span>元
                    </span>
                </p>
            </div>
            <div class="bottom">
                <p class="l">
                    账户当前余额
                    <span>{{balance|keep2Num}}</span>元
                </p>
                <ul class="fangshi l">
                    <li class="l" @click="change(0)" :class="{line:isline==0}">平台支付</li>
                    <!-- <li class="l" @click="change(1)" :class="{line:isline==1}">网银支付</li> -->
                </ul>
                <ul class="method l" v-show="isline==0">
                    <li
                        @click="toPayment(item.id)"
                        v-for="(item,index) in payType"
                        :key="index"
                        class="l"
                        v-if="item.id != 3"
                    >
                        <img class="l" :src="URL + item.logo" />
                        <span class="l">{{item.type_name}}</span>
                    </li>
                </ul>
                <!-- <ul class="method l" v-show="isline==1">
                    <li
                        @click="toPayment(item.id)"
                        v-for="(item,index) in payType"
                        :key="index"
                        class="l"
                        v-if="item.id == 3"
                    >
                        <img class="l" :src="URL + item.logo" />
                        <span class="l">{{item.type_name}}</span>
                    </li>
                </ul> -->
            </div>
            <div class="popup_div" v-show="popupVisible">
                <!-- <img class="cross-icon" @click="cancelArea" src="../../assets/img/clone-icon.png" />     -->
                <div class="popup_box">
                    <div class="password_div">
                    <p class="password_text">支付密码：</p>
                    <!-- <input class="password_input" type="text" v-model="balanceID" placeholder="请输入支付密码" v-if="checked"/>
                    <input class="password_input" type="password" v-model="balanceID" placeholder="请输入支付密码" v-else/>
                    <img class="eye_open"  @click="open" v-show="!eye" src="../../assets/img/openeye.png"/>
                    <img class="eye_close" @click="close" v-show="eye" src="../../assets/img/closeeye.png"/> -->
                    <v-otp-input
                        ref="otpInput"
                        input-classes="otp-input"
                        separator="-"
                        :num-inputs="6"
                        :should-auto-focus="true"
                        :is-input-num="true"
                        input-type="password"
                        @on-change="handleOnChange"
                        @on-complete="handleOnComplete"
                    />
                    </div>
                    <p class="time_message">{{this.timeMessage}}</p>
                    <button
                        class="next_button"
                        @click="confirmPayBtn">确认支付</button>
                </div>
            </div>

            <div class="popup_div" v-show="popupVisible1">
                <div class="popup_box">
                    <div class="password_div">
                    <p class="password_text">支付密码：</p>
                    <!-- <input class="verify_input" type="text" v-model="verifyID" placeholder="请输入支付密码"/> -->
                    <v-otp-input
                        ref="otpInput"
                        input-classes="otp-input"
                        separator="-"
                        :num-inputs="6"
                        :should-auto-focus="true"
                        :is-input-num="true"
                        input-type="password"
                        @on-change="handleOnChange1"
                        @on-complete="handleOnComplete1"
                    />
                    </div>
                    <div class=verify_div>
                    <p class="verify_text">验证码：</p>
                    <!-- <input class="password_input" type="text" v-model="balancePassID" placeholder="请输入支付密码" v-if="checked"/>
                    <input class="password_input" type="password" v-model="balancePassID" placeholder="请输入支付密码" v-else/>
                    <img class="eye_open"  @click="open" v-show="!eye" src="../../assets/img/openeye.png"/>
                    <img class="eye_close" @click="close" v-show="eye" src="../../assets/img/closeeye.png"/> -->
                    <v-otp-input
                        ref="otpInput"
                        input-classes="otp-input1"
                        separator="-"
                        :num-inputs="6"
                        :should-auto-focus="true"
                        :is-input-num="true"
                        @on-change="handleOnChange2"
                        @on-complete="handleOnComplete2"
                    />
                    <span class="verify_span" :class="{active:isActive}" @click="abtain">{{btnText}}</span>
                    </div>
                    <p class="time_message">{{this.verifyMessage}}</p>
                    <button
                        class="next_button"
                        @click="confirmVerifyBtn">确认支付
                    </button>
                </div>
            </div>

        </div>
        <foot-com></foot-com>
    </div>
</template>
	
<script>
import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";
export default {
    data() {
        return {
            isline: "",
            isactive: 0,
            payType: [],
            balance: 0,
            payId: "",
            payMethod: {
                1: "wechatPay",
                2: "aliPay",
                3: "ylPay",
                4: "confirmPay"
            },
            popupVisible: false,
            popupVisible1: false,
            passwordData: '',
            verifyID: '',
            balanceID: '',
            balancePassID: '',
            eye:false,
            checked:false,
            timeMessage: '',
            verifyMessage: '',
            btnText: "获取验证码",
			isActive: "",
        };
    },
    created() {
        // let title = "立即付款" + this.$constant.webComContent;
         let title = "立即付款" + '-' + this.$constant.webComContent;
        this.showScroll.scrollTitle(title);  
        this.getPayResult();
        this.getBalance();
    },

    methods: {
        handleOnComplete(value) {
            // console.log('OTP completed: ', value);
        },
        handleOnChange(value) {
            this.balanceID = value;
            // console.log('OTP changed: ', value);
        },
        handleOnComplete1(value) {
            // console.log('OTP completed: ', value);
        },
        handleOnChange1(value) {
            this.balancePassID = value;
            // console.log('OTP changed: ', value);
        },
        handleOnComplete2(value) {
            // console.log('OTP completed: ', value);
        },
        handleOnChange2(value) {
            this.verifyID = value;
            // console.log('OTP changed: ', value);
        },
        abtain() {
				this.HTTP(this.$httpConfig.verifySms, {
				},'get')
				.then(res => {
					if (res.data.status == 1) {
					Message.info(res.data.message)
					}
				})
				.catch(err => {
					console.log(err);
				});

				if (this.isActive == true) return;
				var N = 60,
					_this = this,
					clear = null;
				_this.isActive = true;
				_this.btnText = '请' + N + '秒后重试';
				_this.isActive = true;
				clear = setInterval(function() {
					_this.btnText = '请' + N-- + '秒后重试';
					if (N < 0) {
						clearInterval(clear);
						_this.btnText = '获取验证码';
						_this.isActive = false;
					}
				}, 1000);
				// this.HTTP(this.$httpConfig.userinfo,{
				// 	mobile: this.mobile
				// },'get')
				// .then((res) =>{
				// 	this.$message({
				// 		message: res.data.data.test_code,
				// 		type: 'success',
				// 	});
				// 	if(res.data.status == 1) {
				// 		this.token = res.data.data.token
				// 	} else {
				// 		clearInterval(clear);
				// 		_this.btnText = '再次获取验证码';
				// 		_this.isActive = false;
				// 	}
				// })
			},
        open(){
            this.eye=!this.eye;
            this.checked=true;
        },
        close(){
            this.checked=false;
            this.eye=!this.eye
        },
        toPayment(id) { 
            let that = this;
            this.payId = id;
            // alert(this.payId + " " + id) 4   2   1
            eval("that." + that.payMethod[this.payId] + "()");
        },
        // cancelArea(){
        // this.popupVisible = false;
        // this.popupVisible1 = false;
        // },
    // confirmButton() {
    //     this.HTTP(
    //                 this.$httpConfig.balancePassword,
    //                 {
    //                     balance_password: this.balanceID
    //                 },
    //                 "post"
    //             )
    //             .then(res => {
    //                 if(res.data.status == 1) {
    //                     this.popupVisible = false;
    //                 }
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     },
        getPayResult() {
            //支付类型
            this.HTTP(this.$httpConfig.getPayResult, {}, "post", false)
                .then(res => {
                    this.payType = res.data.data;
                })
                .catch(() => {});
        },
        //获取账号余额
        getBalance() {
            this.HTTP(this.$httpConfig.getBalance, {}, "post")
                .then(res => {
                    this.balance = res.data.data;
                })
                .catch(() => {});
        },
        //支付宝支付
        aliPay() {
            this.popupVisible = false;
            this.popupVisible1 = false;
            let payUrl = "";
              
            if (this.$route.query.total_price) {
                if(this.$route.query.state && this.$route.query.state == 'progresslook') {
                    // payUrl = this.$httpConfig.initiatePayment; //商品支付
                    payUrl = this.$httpConfig.openShopPay; //开店支付   // progressLook
                } else {
                    payUrl = this.$httpConfig.initiatePayment; //商品支付 // order
                }
            } else {
                // payUrl = this.$httpConfig.openShopPay; //开店支付
                payUrl = this.$httpConfig.initiatePayment; //商品支付
            }
            
            this.HTTP(
                payUrl,
                {
                    pay_type_id: this.payId
                },
                "post"
            )
                .then(res => {
                    const oDiv = document.createElement("div");
                    oDiv.innerHTML = res.data.data;
                    document.body.appendChild(oDiv);
                    document.forms.Alipaysubmit.submit();
                })
                .catch(() => {});
        },
        wechatPay() {
            //微信支付跳转
            this.popupVisible = false;
            this.popupVisible1 = false;
            if (this.$route.query.total_price) {
                //普通商品
                if(this.$route.query.state && this.$route.query.state == "progresslook") {
                    this.$router.push({
                        name: "wxpay",
                        params: {
                            total_price: this.$route.query.total_price,
                            id: this.payId,
                            state: "z",
                            addstate: "progresslook"
                        }
                    });
                } else if(this.$route.query.state && this.$route.query.state == "order") {
                    this.$router.push({
                        name: "wxpay",
                        params: {
                            total_price: this.$route.query.total_price,
                            id: this.payId,
                            state: "z",
                            addstate: "order"
                        }
                    });
                }    
            } else {
                this.$router.push({
                    //开店
                    name: "wxpay",
                    params: {
                        total_price: this.$route.query.price,
                        id: this.payId,
                        state: "r"
                    }
                });
            }
        },
        //余额支付
        confirmPay() {
            this.popupVisible = true;
        },
        confirmPayBtn() {
            this.HTTP(
                    this.$httpConfig.balancePassword,
                    {
                        balance_password: this.balanceID
                    },
                    "post"
                )
                .then(res => {
                    // this.$message(res.data.message);
                    this.timeMessage = res.data.message;
                    if(res.data.data == '' && res.data.status == 1) {
                        this.passwordError();
                    }
                    if(res.data.data == 10010) {
                        this.popupVisible = false;
                        this.popupVisible1 = true;
                    }
                })
                .catch(err => {
                    // this.$message(err.data.message);
                    this.timeMessage = err.data.message;
                });
        },
        confirmVerifyBtn() {
            this.HTTP(
                    this.$httpConfig.verifyPassword,
                    {
                        balance_password: this.balancePassID,
                        code: this.verifyID
                    },
                    "post"
                )
                .then(res => {
                    // this.$message(res.data.message);
                    this.verifyMessage = res.data.message;
                    if(res.data.status == 1) {
                        this.passwordError();
                    }
                })
                .catch(err => {
                    // this.$message(err.data.message);
                    this.verifyMessage = err.data.message;
                });
        },
        passwordError() {
            this.popupVisible = false;
            this.popupVisible1 = false;
            this.balanceID = null;
            this.balancePassID = null;
            this.verifyID = null;
            if (this.$route.query.total_price) {
            let tempAPI;
            
            if(this.$route.query.state && this.$route.query.state == "progresslook") {
                tempAPI = this.$httpConfig.openShopPay
            } else if(this.$route.query.state && this.$route.query.state == "order") {                 
                tempAPI = this.$httpConfig.initiatePayment
            }else{
                tempAPI = this.$httpConfig.initiatePayment
            }
    
            this.HTTP(
                // this.$httpConfig.initiatePayment,
                // this.$httpConfig.openShopPay
                tempAPI,
                {
                    pay_type_id: this.payId
                },
                "post"
            )
                .then(res => {
                    
                    axios.post(res.data.data).then(res => {
                        if (res.data == "SUCCESS") {
                            this.$router.push({
                                path: "/wxSuccess",
                                query: {
                                    link: "/myOrder"
                                }
                            });
                        } else {
                            this.$alert("支付失败", "提示", {
                                confirmButtonText: "确定",
                                center: true,
                                lockScroll: false,
                                type: "warning"
                            });
                        }
                    });
                })
                .catch(res => {
                    this.$alert(res.data.message, "提示", {
                        confirmButtonText: "确定",
                        center: true,
                        lockScroll: false,
                        type: "warning"
                    });
                });
                } else {
                    this.HTTP(
                        this.$httpConfig.openShopPay,
                        {
                            pay_type_id: this.payId
                        },
                        "post"
                    )
                        .then(res => {
                            this.balancePay(res.data.data, res.data.ley_user);
                        })
                        .catch(res => {
                            alert(res.data.message);
                        });
                }
        },
        //开店余额支付
        balancePay(url, ley) {
            axios
                .post(
                    url,
                    qs.stringify({
                        ley_user: ley
                    })
                )
                .then(res => {
                    if (res.data == "SUCCESS") {
                        this.$router.push("/progressLook");
                    } else {
                        alert(res.data.message);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        change(index) {
            console.log(index);
            this.isline = index;
        },
        over(index) {
            this.isactive = index;
        }
    }
};
</script>

<style>
.el-message-box--center {
    padding-bottom: 30px !important;
}

.el-message-box--center .el-message-box__header {
    padding-top: 30px !important;
}
</style>

<style lang="less">
.otp-input {
    width: 35px;
    height: 35px;
    padding: 9px 5px 5px 5px;
    margin: 0 5px;
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
    &.error {
      border: 1px solid red !important;
    }
  }
  .otp-input::-webkit-inner-spin-button,
  .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .otp-input1 {
    width: 35px;
    height: 35px;
    padding: 5px;
    margin: 0 5px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
    &.error {
      border: 1px solid red !important;
    }
  }
  .otp-input1::-webkit-inner-spin-button,
  .otp-input1::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

<style lang="less" scoped>
.l {
    float: left;
}

.r {
    float: right;
}

.center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    background: #fff;
}

.pay {
    background: #f6f5f5;
    height: 737px;
    .header {
        height: 109px;
        border-bottom: 1px solid #f6f5f5;
        img {
            margin: 31px 0 0 20px;
        }
        p {
            line-height: 30px;
            border-left: 1px solid #cdcfd0;
            font-size: 18px;
            color: #555;
            margin: 45px 0 0 20px;
            padding-left: 17px;
        }
    }
    .middle {
        padding: 40px 0;
        border-bottom: 1px solid #f6f5f5;
        p {
            float: left;
            font-size: 12px;
            margin-left: 21px;
            width: 80%;
        }
        p:nth-of-type(1) {
            color: #333;
            font-weight: 600;
            .dindan {
                font-weight: 500;
                margin-left: 19px;
            }
            span.r {
                font-weight: 500;
                margin-right: 42px;
                .hong {
                    color: #d32026;
                    font-size: 17px;
                    margin: 0 11px;
                }
            }
        }
    }
    .bottom {
        margin: 28px 0 0 22px;
        overflow: hidden;
        p {
            font-size: 12px;
            input {
                float: left;
                margin: 2px 14px 0 0;
            }
            span {
                color: #d32026;
            }
        }
        .fangshi {
            margin-top: 27px;
            height: 36px;
            border-bottom: 1px solid #f6f5f5;
            width: 100%;
            li {
                width: 70px;
                height: 37px;
                line-height: 34px;
                text-align: center;
                font-size: 15px;
                color: #555;
                margin-right: 22px;
                cursor: pointer;
            }
            .line {
                border-bottom: 2px solid #d02629;
                color: #d02629;
            }
        }
        .method {
            height: 99px;
            border-bottom: 1px solid #f6f5f5;
            width: 100%;
            margin-top: 28px;
            li {
                cursor: pointer;
                line-height: 40px;
                width: 100px;
                height: 40px;
                margin-right: 15px;
                img {
                    width: 26px;
                    height: 26px;
                    margin: 7px 5px 7px 0;
                }
            }
            li:hover {
                color: red;
            }
        }
    }
.popup_div {
    // width: 400px;
    height: auto;
    background: #ffffff;
    // z-index: 9999;
    position: absolute;
    // border: 1px solid #f2f2f2;
    // overflow: scroll;
    // margin-top: -48px;
    // margin-left: 400px;
    // box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    // -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    // -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    // -o-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    // -ms-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    .picker-toolbar {
        display: flex;
    }
    .popup_box{
        // padding: 60px 20px 40px 30px;
        padding: 60px 20px 40px 22px;
        .verify_div {
            padding-top: 10px;
            .verify_text {
                float: left;
                // padding: 7px 18px 0 0;
                padding: 7px 14px 0 0;
            }
            .verify_input {
                width: 200px;
                height: 38px;
                border: 1px solid #ccc;
                border-radius: 3px;
                padding: 10px;
            }
            .verify_span {
				cursor: pointer;
				width: 136px;
				height: 34px;
				border: 1px solid #d9d9d9;
				background: #f6f6f6;
				display: inline-block;
				text-align: center;
				line-height: 34px;
				margin: -34px 0 0 393px;
                float: right;
			}
			.active {
				cursor: pointer;
				width: 136px;
				height: 34px;
				border: 1px solid #d9d9d9;
				background: #f6f6f6;
				display: inline-block;
				text-align: center;
				line-height: 34px;
				margin: -34px 0 0 393px;
                float: right;
			}
        }
        .password_div {
            .password_text {
                float: left;
                // padding: 7px 18px 0 0;
                padding: 7px 0 0 0;
            }
            .password_input {
                width: 200px;
                height: 38px;
                border: 1px solid #ccc;
                border-radius: 3px;
                padding: 10px;
            }
            .eye_open{
                width: 20px;
                margin-left: -30px;
            }
            .eye_close{
                width: 16px;
                margin-left: -30px;
            }
        }
        .time_message {
            padding: 15px 0 0 74px;
            color: red;
        }
        .next_button {
			cursor: pointer;
			border-radius: 3px;
			width: 110px;
			height: 38px;
			background: #afd129;
			text-align: center;
			line-height: 38px;
			color: #fff;
			font-size: 12px;
            // margin: 30px 0 0 87px;
            margin: 15px 0 0 73px;
		}
    }
    .cross-icon {
        width: 18px;
        height: 18px;
        float: right;
        margin: 10px;
    }
}
}
</style>
