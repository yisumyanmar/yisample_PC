<template>
    <div id="interview">
        <!-- <common-header></common-header> -->
        <common-header v-on:childToParent="onChildClick"></common-header>
        <div id="logo">
            <div class="center">
                <div class="nake l">
                    <p class="Gongpin l">
                        <img src="../../assets/img/logodl.jpg" />
                    </p>
                    <!-- <p class="iphone l">
                        <span class="hot l">招商热线</span>
                        <span class="shuzi l">{{ $constant.tel }}</span>
                    </p> -->
                </div>
                <div class="gold r">
                    <img src="../../assets/img/4.png" />
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
                <div class="Box">
                    <h1>您的开店申请已成功提交</h1>
                    <p>
                        我们将在3个工作日内（不包括国家法定假日）完成审核并短信或邮件的方式通知您;
                    </p>
                    <p>
                        您也可以登录
                        <router-link to="progress" class="kit">
                            商家入驻中心 </router-link
                        >及时查看审核状态;
                    </p>
                    <p>
                        店铺使用费及保证金需线下缴费，请您联系{{
                            $constant.tel
                        }}进行确认打款事宜
                    </p>
                    <p>如有疑问请联系网站客服</p>
                    <button @click="back">撤销申请</button
                    ><button @click="look">查看进度</button>
                </div>
            </div>
        </div>
        <com-foot></com-foot>
    </div>
</template>

<script>
import ComFoot from "@/common/footerDetail.vue";
import Qs from "qs";
export default {
    components: {
        ComFoot
    },
    created() {
        // let title = "创建店铺" + this.$constant.webComContent;
         let title = "创建店铺" + '-' +this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
    },
    data() {
        return {
            fromChild: ''
        };
    },
    methods: {
        onChildClick (value) {
            this.fromChild = value
            if(this.fromChild == 'false') {
                location.reload();
            }
		},
        back() {
            this.$router.go(-1);
        },
        look() {
            this.$router.push("/progressLook");
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
                }

                li:nth-of-type(3) {
                    position: relative;
                    left: 58px;
                }
                li:nth-of-type(4) {
                    margin-left: 106px;
                    color: #d02629;
                }
            }
        }
    }
}
.middle {
    background: #fafafa;
    padding: 20px 0;
    height: auto;
    .center {
        background: #fff;
        height: 405px;
        overflow: hidden;
        .Box {
            height: 271px;
            border: 1px solid #bce8f1;
            background: #eff8ff;
            margin: 51px 110px 0;
            h1 {
                line-height: 72px;
                margin-left: 73px;
                font-size: 14px;
                color: #333;
            }
            p {
                font-size: 12px;
                color: #999;
                margin-left: 73px;
                line-height: 24px;
                .kit {
                    color: #0579c6;
                }
            }
            button {
                cursor: pointer;
                width: 94px;
                height: 32px;
                text-align: center;
                line-height: 32px;
                color: #fff;
                font-size: 12px;
                border-radius: 4px;
                background: #ccc;
                margin-top: 20px;
            }
            button:nth-of-type(1) {
                margin: 20px 16px 0 73px;
                background: #d02629;
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
                width: 70px;
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
