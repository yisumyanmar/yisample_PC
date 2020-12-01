<template>
    <div id="divide">
        <div id="topLogo">
            <div class="center">
                <ul>
                    <li class="l logo">
                        <img src="../../assets/img/logodl.jpg" />
                    </li>
                    <li class="l category">
                        <img src="../../assets/img/find_text.png" />
                    </li>
                </ul>
            </div>
        </div>
        <div id="codeNmae">
            <div class="center">
                <div class="numberOne">
                    <p>
                        <img class="sink" src="../../assets/img/lianjie.png" />
                    </p>
                    <div class="part">
                        <p class="bottomOne l">账户名</p>
                        <p class="bottomTwo l">验证身份</p>
                        <p class="bottomTwo l">设置新密码</p>
                        <p class="bottomTwo l">完成</p>
                    </div>
                    <div class="nameCode">
                        <p class="l changeCode">
                            <i>*</i>账户名：<input
                                class="divider"
                                type="text"
                                placeholder="用户名/邮箱/已验证的手机号"
                                v-model.trim="name"
                            />
                        </p>
                        <p class="warning l">
                            <i class="l"
                                ><img src="../../assets/img/warn.png"/></i
                            >请输入您的用户名/邮箱/已验证的手机号
                        </p>
                        <p class="l changeCode">
                            <i>*</i>验证码：<input
                                class="dividers"
                                type="text"
                                placeholder="输入验证码"
                                v-model="code"
                            /><i
                                ><img src="../../assets/img/yanzhengma.png"
                            /></i>
                        </p>
                    </div>
                    <p class="button next" @click="next">下一步</p>
                </div>
            </div>
        </div>
        z
        <com-foot></com-foot>
    </div>
</template>

<script>
import Qs from "qs";
import ComFoot from "@/common/footerDetail.vue";
export default {
    components: {
        ComFoot
    },

    data() {
        return {
            name: "",
            code: ""
        };
    },
    methods: {
        next() {
            if (this.name.length < 2) {
                alert("请输入至少两位的用户名");
                return false;
            }
            if (this.code.length != 4) {
                alert("请输入验证码");
                return false;
            }
            this.$router.push("/findTwo");
            this.HTTP(this.$httpConfig.backPwdSendSms, {}, "post").then(res => {
                this.$router.push("/home");
            });
        }
    }
};
</script>

<style scoped lang="less">
.center {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
}

.l {
    float: left;
}

.r {
    float: right;
}
#topLogo {
    width: 100%;
    height: 100px;
    .center {
        height: 100px;
        ul {
            width: 100%;
            height: 100px;
            .logo {
                width: 184px;
                height: 53px;
                margin-top: 21px;
                border-right: 1px solid #ebebeb;
            }
            .category {
                margin-top: 35px;
                margin-left: 15px;
            }
        }
    }
}
#codeNmae {
    width: 100%;
    height: 447px;
    .center {
        height: 447px;
        .numberOne {
            width: 100%;
            height: 447px;
            border: 1px solid #dddddd;
            .sink {
                margin-top: 74px;
                margin-left: 150px;
            }
            .part {
                width: 100%;
                height: 24px;
                .bottomOne {
                    width: 178px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    margin-left: 150px;
                    color: #afd129;
                    font-size: 12px;
                }
                .bottomTwo {
                    width: 178px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    color: #d0d0d0;
                    font-size: 12px;
                }
            }
            .nameCode {
                width: 714px;
                height: 142px;
                margin-left: 290px;
                margin-top: 30px;
                .changeCode {
                    width: 345px;
                    height: 62px;
                    line-height: 62px;
                    font-size: 13px;
                    color: #666666;
                    .divider {
                        width: 260px;
                        height: 38px;
                        border: 1px solid #cccccc;
                        color: #cccccc;
                        text-indent: 1em;
                    }
                    .dividers {
                        width: 110px;
                        height: 38px;
                        border: 1px solid #cccccc;
                        color: #cccccc;
                        text-indent: 1em;
                    }
                    i {
                        color: red;
                        margin-right: 3px;
                    }
                }
                .warning {
                    width: 350px;
                    height: 62px;
                    line-height: 62px;
                    font-size: 13px;
                    color: red;
                }
            }
            .next {
                width: 100px;
                height: 38px;
                background: #afd129;
                border: 0;
                color: #ffffff;
                font-size: 12px;
                margin-left: 350px;
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
            margin-left: 369px;
            li {
                width: 60px;
                height: 12px;
                border-right: 1px solid #8b8b8b;
                font-size: 12px;
                text-align: center;
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
