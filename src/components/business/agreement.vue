<template>
    <div id="interview">
        <!-- <common-header></common-header> -->
        <common-header v-on:childToParent="onChildClick"></common-header>
        <div id="logo">
            <div class="center">
                <div class="nake l">
                    <p class="Gongpin l">
                        <router-link to="/home">
                            <img src="../../assets/img/logodl.jpg" />
                        </router-link>
                    </p>
                    <!-- <p class="iphone l">
                        <span class="hot l">招商热线</span>
                        <span class="shuzi l">{{ $constant.tel }}</span>
                    </p> -->
                </div>
                <div class="gold r">
                    <img src="../../assets/img/1.png" />
                    <ul>
                        <li>开店申请</li>
                        <li>网门审核</li>
                        <li>支付开店款项</li>
                        <li>创建店铺</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="middle">
            <div class="center">
                <h1>入驻协议</h1>
                <div class="Box">
                    <p>使用本公司服务所须遵守的条款和条件。</p>
                    <p>1.用户资格</p>
                    <p>
                        公司的服务仅向适法拿下能够签订具有法律约束力的合同的个人提供并仅由其使用。在不限制前述规定的前提下本公司的服务不向18周岁以下或被临时或无限期中止的
                        用户提供。如您不合资格请勿使用本公司的服务。此外您的帐户包括信用评价)和用户名不得向其他方转让或出售。另外本公司保留根据其商愿中止或终止您的帐户权利
                    </p>
                    <p>2.您的资料(包括但不限于所添加的任何商品)不得:</p>
                    <p>* 具有欺作性、虚假，不准确或具误导性:</p>
                    <p>
                        *
                        侵犯任第三方著作权、专利权、商标权、商业秘密或其他专有权利或发表权或隐私权；
                    </p>
                    <p>
                        *
                        违反任适用的法律或法规(包括但不限于有关出口管制、消费者保护、不正当竞争、刑法、反歧视或贸易惯例/公平贸易法律的法律或法规);
                    </p>
                    <p>* 有侮辱或者讲谤他人，侵害他人合去权益的内容;</p>
                    <p>
                        * 有淫秽、色情赌博、暴力、凶杀，恐怖或者教唆犯罪的内容
                    </p>
                    <p>
                        *
                        包含可能破坏、改变、删除，不利影响、秘密截取、来经授权而接触或征用任可系统数据或个人资料的任何病毒特洛依木马，螺虫、定时如弹删除蝇、复活节彩蛋、间谍软件或其
                        他电脑程序。
                    </p>
                </div>
                <h2>
                    <label
                        ><input type="checkbox" v-model="ischeck" />
                        我已阅读并同意以上协议</label
                    ><el-alert
                        v-show="tip"
                        class="address-tip"
                        title="请点击同意以上协议"
                        type="error"
                        show-icon
                        :closable="false"
                    ></el-alert>
                </h2>
                <h3>
                    <button @click="person">个人入驻</button
                    ><button @click="company">企业入驻</button>
                </h3>
            </div>
        </div>
        <com-foot></com-foot>
    </div>
</template>

<script>
import ComFoot from "@/common/footerDetail.vue";
export default {
    components: {
        ComFoot
    },
    data() {
        return {
            ischeck: false,
            tip: false,
            fromChild: ''
        };
    },
    created() {
        // let title = "我要开店" + this.$constant.webComContent;
         let title =  "我要开店" +'-'+ this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
    },

    watch: {
        ischeck() {
            if (this.ischeck == true) {
                this.tip = false;
            }
        }
    },
    methods: {
        onChildClick (value) {
			this.fromChild = value
			if(this.fromChild == 'false') {
				location.reload();
			}
		},
        person() {
            if (this.ischeck == true) {
                this.$router.push("/personAdmission");
            } else {
                this.tip = true;
            }
            console.log(this.ischeck);
        },
        company() {
            if (this.ischeck == true) {
                this.$router.push("/companyAdmission");
            } else {
                this.tip = true;
            }
        }
    }
};
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

#logo {
    width: 100%;
    height: 104px;
    .center {
        height: 104px;
        .Gongpin {
            width: 100%;
            height: 104px;
            img {
                margin-top: 20px;
                padding-right: 20px;
                height: 62px;
            }
        }
        .iphone {
            width: 240px;
            height: 104px;
            .hot {
                display: inline-block;
                width: 70px;
                height: 104px;
                line-height: 104px;
                font-size: 13px;
                margin-left: 20px;
            }
            .shuzi {
                display: inline-block;
                height: 104px;
                line-height: 104px;
                font-size: 16px;
                color: #d53738;
                font-weight: 500;
            }
        }
        .gold {
            margin-top: 34px;
            margin-left: 162px;
            ul {
                overflow: hidden;
                margin-top: 7px;
                li {
                    float: left;
                    font-size: 12px;
                    color: #666;
                }
                li:nth-of-type(1) {
                    margin: 0 72px 0 35px;
                    color: #d02629;
                }
                li:nth-of-type(3) {
                    margin: 0 56px 0 56px;
                }
            }
        }
    }
}
.middle {
    background: #fafafa;
    height: 697px;
    /*padding-bottom: 750px;*/
    padding-bottom: 790px;
    .center {
        background: #fff;
        h1 {
            line-height: 85px;
            text-align: center;
            margin-top: 2px;
            font-size: 17px;
            color: #404040;
        }
        .Box {
            margin: 0 100px;
            height: 416px;
            border: 1px solid #eee;
            p {
                font-size: 12px;
                color: #555;
                margin: 0 19px;
                line-height: 23px;
            }
            p:nth-of-type(1) {
                margin: 24px 19px 28px;
            }
            p:nth-of-type(3) {
                margin: 0px 19px 20px;
            }
            p:nth-of-type(8) {
                margin: 0px 19px 20px;
            }
        }
        h2 {
            position: relative;
            text-align: center;
            margin: 40px 0 34px;
            label {
                display: inline-block;
                font-size: 12px;
                color: #555;
            }
            .el-alert {
                position: absolute;
                top: 0px;
                right: 350px;
                margin-left: 15px;
                width: 150px;
                padding: 0;
            }
            .el-alert--error {
                background-color: transparent;
            }
            .el-alert__icon {
                float: left;
            }
            input {
                margin-top: 2px;
                margin-right: 5px;
                float: left;
            }
        }
        h3 {
            text-align: center;
            button {
                display: inline-block;
                width: 94px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                color: #fff;
                background: #d02629;
                border-radius: 4px;
                margin: 0 18px;
                font-size: 12px;
            }
        }
    }
}
#commonFooter {
    width: 100%;
    height: 90px;
    .center {
        height: 90px;
        ul {
            width: 100%;
            height: 12px;
            line-height: 12px;
            margin-top: 20px;
            margin-left: 470px;
            li {
                width: 60px;
                height: 12px;
                border-right: 1px solid #8b8b8b;
                font-size: 12px;
                text-align: center;
            }
            li:last-child {
                border-right: 0;
            }
        }
        .online {
            width: 100%;
            height: 26px;
            line-height: 26px;
            text-align: center;
            font-size: 12px;
            margin-top: 5px;
        }
        .onlines {
            width: 100%;
            height: 26px;
            line-height: 26px;
            text-align: center;
            font-size: 12px;
        }
    }
}
</style>
