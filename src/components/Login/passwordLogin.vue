<template>
    <div id="welcome">
        <div id="safe">
            <div class="center">
                <ul>
                    <li class="l logo" @click="$router.push('home')">
                        <img class="home" src="../../assets/img/logo-yi.png" />
                    </li>
                    <li class="l category">
                        <img src="../../assets/img/login_text.png" />
                    </li>
                </ul>
            </div>
        </div>
        <div id="banner">
            <div class="center">
                <div class="move r" v-show="close == false">
                    <div class="pic">
                        <p class="boredr l">
                            <img src="../../assets/img/scan.png" />
                        </p>
                        <p class="r code">
                            <img
                                @click="loginIphone"
                                src="../../assets/img/sys.png"
                            />
                        </p>
                    </div>
                    <div class="history">
                        <ul class="clearfix">
                            <li
                                class="l enterPass"
                                @click="loginEnter(0)"
                                :class="{ bg: isbg == 0 }"
                            >
                                账号密码登录
                            </li>
                            <li
                                class="l enterIphone"
                                @click="loginEnter(1)"
                                :class="{ bg: isbg == 1 }"
                            >
                                手机动态码登录
                            </li>
                        </ul>
                        <div class="inputList" v-show="onoff == 0">
                            <div class="d-null">
                                <el-alert
                                    v-show="mob_login_show1"
                                    :title="mob_login_text1"
                                    :type="checkType1"
                                    show-icon
                                    :closable="false"
                                ></el-alert>
                            </div>
                            <label>
                                <i class="l pass"
                                    ><img
                                        src="../../assets/img/login_person.png"
                                /></i>
                                <input
                                    class="l pass"
                                    type="text"
                                    placeholder="邮箱/用户名/已验证的手机"
                                    v-model.trim="username"
                                />
                            </label>
                            <label>
                                <i class="l"
                                    ><img src="../../assets/img/login_lock.png"
                                /></i>
                                <input
                                    class="l"
                                    type="password"
                                    placeholder="密码"
                                    v-model="passWord"
                                    @keyup.enter="loginIn"
                                />
                            </label>
                            <button class="button loginIn" @click="loginIn">
                                登录
                            </button>
                        </div>
                        <div class="inputLists" v-show="onoff == 1">
                            <div class="d-null">
                                <el-alert
                                    v-show="mob_login_show"
                                    :title="mob_login_text"
                                    :type="checkType"
                                    show-icon
                                    :closable="false"
                                ></el-alert>
                            </div>
                            <label>
                                <i class="l mob"
                                    ><img
                                        src="../../assets/img/login_iphone.png"
                                /></i>
                                <input
                                    class="l mob"
                                    type="text"
                                    placeholder="请输入手机号"
                                    v-model="mobile"
                                />
                            </label>
                            <p
                                class="abtain"
                                :class="{ active: isActive }"
                                @click="abtain"
                            >
                                {{ btnText }}
                            </p>
                            <label>
                                <i class="l"
                                    ><img src="../../assets/img/login_info.png"
                                /></i>
                                <input
                                    class="l"
                                    type="text"
                                    onkeyup="value = value.replace(/[^\d]/g,'')"
                                    placeholder="请输入验证码"
                                    v-model="message"
                                />
                            </label>
                            <button
                                class="button loginIn"
                                @click="loginInphone"
                            >
                                登录
                            </button>
                        </div>
                        <div class="forget">
                            <router-link to="findTwo" class="l"
                                ><i><img src="../../assets/img/arr_red.png"/></i
                                >忘记密码</router-link
                            >
                            <router-link to="register" class="r"
                                ><i><img src="../../assets/img/arr_red.png"/></i
                                >免费注册</router-link
                            >
                        </div>
                        <div class="other">
                            <a class="l" @click="qq"
                                ><i
                                    ><img
                                        src="../../assets/img/login_qq.png"/></i
                                >QQ登录</a
                            >
                            <a class="l"
                                ><i
                                    ><img
                                        src="../../assets/img/login_weixin.png"/></i
                                >微信登录</a
                            >
                            <a class="l"
                                ><i
                                    ><img
                                        src="../../assets/img/login_weibo.png"/></i
                                >微博登录</a
                            >
                        </div>
                    </div>
                </div>
                <div class="moves r" v-show="close == true">
                    <div class="pic">
                        <p class="boredr l">
                            <img src="../../assets/img/scan.png" />
                        </p>
                        <p class="r code">
                            <img
                                @click="loginIphones"
                                src="../../assets/img/tv.png"
                            />
                        </p>
                    </div>
                    <div class="history">
                        <p class="callip">手机安全，密码登录</p>
                        <div class="inputList">
                            <img src="../../assets/img/erweima1.png" />
                            <p class="cover">
                                <span class="l open">打开</span>
                                <a class="l">ShopsN APP</a
                                ><span class="l open">扫一扫登录</span>
                            </p>
                        </div>
                        <div class="forget">
                            <router-link to="find" class="l fare"
                                ><i><img src="../../assets/img/arr_red.png"/></i
                                >忘记密码</router-link
                            >
                            <router-link to="register" class="r fare"
                                ><i><img src="../../assets/img/arr_red.png"/></i
                                >免费注册</router-link
                            >
                        </div>
                        <div class="other">
                            <a class="l" @click="qq"
                                ><i
                                    ><img
                                        src="../../assets/img/login_qq.png"/></i
                                >QQ登录</a
                            >
                            <a class="l"
                                ><i
                                    ><img
                                        src="../../assets/img/login_weixin.png"/></i
                                >微信登录</a
                            >
                            <a class="l"
                                ><i
                                    ><img
                                        src="../../assets/img/login_weibo.png"/></i
                                >微博登录</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <com-foot></com-foot>
    </div>
</template>

<script>
import ComFoot from "@/common/footerDetail.vue";
import QS from "qs";
export default {
    components: {
        ComFoot
    },
    data() {
        return {
            mob_login_text: "",
            mob_login_show: false,
            mob_login_text1: "",
            mob_login_show1: false,
            onoff: "",
            isbg: "",
            close: false,
            is: false,
            btnText: "获取验证码",
            username: "",
            passWord: "",
            load: true,
            mobile: "",
            token: "",
            message: "",
            type: 1,
            third_account: "uid",
            isActive: "",
            checkType1: "error",
            checkType: "error",
            mob_login_text1: undefined,
            mob_login_show1: undefined,
            mob_login_show: undefined,
            mob_login_text: undefined
        };
    },
    created() {
        // let title =
        //     "登录" +
        //     "-" +
        //     sessionStorage.titleKey +
        //     "-" +
        //     sessionStorage.contentKey +
        //     " ";
            let title = "登录" + "-" + sessionStorage.titleKey;
        this.showScroll.scrollTitle(title);
    },
    methods: {
        loginEnter(index) {
            this.onoff = index;
            this.isbg = index;
        },
        loginIphone() {
            this.close = true;
        },
        loginIphones() {
            this.close = false;
        },
        qq() {
            this.HTTP(
                this.$httpConfig.QQThirdPartyLogin,
                {
                    type: this.type,
                    third_account: this.third_account
                },
                "post"
            ).then(res => {
                location.href = res.data.data;
            });
        },
        abtain() {
            if (this.isActive == true) return;
            if (!/^1[345789]\d{9}$/.test(this.mobile)) {
                this.mob_login_text = "请填写正确的手机号";
                this.mob_login_show = true;
                return;
            } else {
                this.mob_login_text = "";
                this.mob_login_show = false;
            }
            var N = 60,
                _this = this,
                clear = null;
            _this.isActive = true;
            _this.btnText = "请" + N + "秒后重试";
            _this.isActive = true;
            clear = setInterval(function() {
                _this.btnText = "请" + N-- + "秒后重试";
                if (N < 0) {
                    clearInterval(clear);
                    _this.btnText = "获取验证码";
                    _this.isActive = false;
                }
            }, 1000);
            this.HTTP(
                this.$httpConfig.smsLogin,
                {
                    mobile: this.mobile
                },
                "post"
            ).then(res => {
                if (res.data.status == 1) {
                    this.token = res.data.data.token;
                } else {
                    clearInterval(clear);
                    _this.btnText = "再次获取验证码";
                    _this.isActive = false;
                }
            });
        },
        loginIn() {
            if (!this.username) {
                this.mob_login_text1 = "请输入用户名";
                this.mob_login_show1 = true;
                return;
            } else {
                this.mob_login_text1 = "";
                this.mob_login_show1 = false;
            }

            if (this.passWord.length > 16 || this.passWord.length < 6) {
                this.mob_login_text1 = "请输入6-16位密码";
                this.mob_login_show1 = true;
                return;
            } else {
                this.mob_login_text1 = "";
                this.mob_login_show1 = false;
            }

            sessionStorage.clear();
            sessionStorage.removeItem('userName')
            sessionStorage.removeItem('userHeaderImg')
            sessionStorage.removeItem('token')
            
            this.HTTP(
                this.$httpConfig.login,
                {
                    account: this.username,
                    password: this.passWord
                },
                "post"
            )
                .then(res => {
                    this.load = false;
                    sessionStorage.setItem("token", res.data.data.token);
                    // localStorage.setItem("tokenn", res.data.data.token);
                    localStorage.setItem("loginuserdata", 'true');
                    this.HTTP(this.$httpConfig.userInfo, {}, "post").then(
                        res => {
                            this.mob_login_show1 = true;
                            this.checkType1 = "success";
                            this.mob_login_text1 = "登录成功，请稍等...";

                            
                            // sessionStorage.setItem(
                            //     "userName",
                            //     res.data.data.user_name
                            // );
                            // localStorage.setItem("userNamee", res.data.data.user_name);
                            // sessionStorage.setItem(
                            //     "userHeaderImg",
                            //     res.data.data.user_header
                            // );
                            // localStorage.setItem(
                            //     "userHeaderImgg", 
                            //     res.data.data.user_header
                            // );
                           
                            sessionStorage.setItem('userName', res.data.data.user_name);
                            sessionStorage.setItem('userHeaderImg', res.data.data.user_header);
                            
                            let site = sessionStorage.getItem("site");
                            if (site != undefined) {
                                setTimeout(() => {
                                    this.$router.push(site);
                                }, 1000);
                            } else {
                                setTimeout(() => {
                                    this.$router.push("/home");
                                }, 1000);
                            }
                        }
                    );
                })
                .catch(err => {
                    this.checkType1 = "error";
                    this.mob_login_text1 = err.data.message;
                    this.mob_login_show1 = true;
                });
        },
        loginInphone() {
            if (!/^1[345789]\d{9}$/.test(this.mobile)) {
                this.mob_login_text = "请填写正确的手机号";
                this.mob_login_show = true;
                return;
            } else {
                this.mob_login_text = "";
                this.mob_login_show = false;
            }
            if (this.message.length != 6 || !this.message) {
                this.mob_login_text = "请填写正确的验证码";
                this.mob_login_show = true;
                return;
            } else {
                this.mob_login_text = "";
                this.mob_login_show = false;
            }
            this.HTTP(
                this.$httpConfig.smsLoginSend,
                {
                    mobile: this.mobile,
                    verify: this.message
                },
                "post"
            )
                .then(res => {
                    this.load = false;
                    sessionStorage.setItem("token", res.data.data.token);
                    this.HTTP(this.$httpConfig.userInfo, {}, "post", true).then(
                        res => {
                            this.mob_login_show = true;
                            this.checkType = "success";
                            this.mob_login_text1 = "登录成功，请稍等...";
                            sessionStorage.clear();
				            localStorage.clear();
                            sessionStorage.setItem(
                                "userName",
                                res.data.data.user_name
                            );
                            sessionStorage.setItem(
                                "userHeaderImg",
                                res.data.data.user_header
                            );

                
                            setTimeout(() => {
                                this.$router.push("/home");
                            }, 1000);
                        }
                    );
                })
                .catch(err => {
                    this.checkType = "error";
                    this.mob_login_text = err.data.message;
                    this.mob_login_show = true;
                });
        }
    }
};
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

#safe {
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
                .home {
                    cursor: pointer;
                }
            }
            .category {
                margin-top: 35px;
                margin-left: 15px;
            }
        }
    }
}

#banner {
    width: 100%;
    height: 480px;
    background: #fc5660;
    background-size: 100% 100%;
    .center {
        height: 480px;
        background: url("../../assets/img/dlbanner.jpg") no-repeat;
        .move {
            width: 352px;
            height: 422px;
            background: #ffffff;
            margin-top: 30px;
            .pic {
                width: 100%;
                height: 44px;
                .boredr {
                    width: 150px;
                    height: 28px;
                    background: url(../../assets/img/scan_code.png) no-repeat;
                    margin-left: 143px;
                    margin-top: 8px;
                    img {
                        margin-left: 38px;
                        margin-top: 7px;
                    }
                }
                .code {
                    width: 58px;
                    height: 52px;
                    img {
                        margin-top: 10px;
                        cursor: pointer;
                    }
                }
            }
            .history {
                width: 310px;
                height: 378px;
                margin-top: 5px;
                margin-left: 21px;
                ul {
                    width: 310px;
                    .enterPass {
                        width: 155px;
                        height: 28px;
                        line-height: 28px;
                        text-align: center;
                        margin-top: 3px;
                        border-bottom: 1px solid #dddddd;
                        color: #3b3b3b;
                        font-size: 15px;
                        cursor: pointer;
                    }
                    .bg {
                        color: #d02629 !important;
                        border-bottom: 1px solid #d02629 !important;
                    }
                    .enterIphone {
                        width: 155px;
                        height: 28px;
                        line-height: 28px;
                        text-align: center;
                        border-bottom: 1px solid #dddddd;
                        color: #3b3b3b;
                        font-size: 15px;
                        cursor: pointer;
                    }
                }
                .inputList {
                    width: 100%;
                    height: 200px;
                    .d-null {
                        min-height: 24px;
                        margin: 4px 0;
                        box-sizing: border-box;
                    }
                    .el-alert {
                        padding: 2px 16px;
                        margin: 4px 0;
                    }
                    i {
                        width: 38px;
                        height: 38px;
                        margin-top: 25px;
                        border: 1px solid #c4c4c4;
                    }
                    input {
                        width: 265px;
                        height: 38px;
                        border: 1px solid #c4c4c4;
                        font-size: 12px;
                        margin-top: 25px;
                        text-indent: 1em;
                    }
                    .pass {
                        margin-top: 0;
                    }
                }
                .inputLists {
                    width: 100%;
                    position: relative;
                    height: 200px;
                    .d-null {
                        min-height: 24px;
                        margin: 4px 0;
                        box-sizing: border-box;
                    }
                    .el-alert {
                        padding: 2px 16px;
                        margin: 4px 0;
                    }
                    i {
                        width: 38px;
                        height: 38px;
                        border: 1px solid #c4c4c4;
                        margin-top: 25px;
                        line-height: 38px;
                        vertical-align: middle;
                        text-align: center;
                        background: url(../../assets/img/login_bg.png) no-repeat;
                    }
                    input {
                        width: 265px;
                        height: 38px;
                        border: 1px solid #c4c4c4;
                        font-size: 12px;
                        margin-top: 25px;
                        text-indent: 1em;
                    }
                    .mob {
                        margin-top: 0;
                    }
                    .abtain {
                        width: 90px;
                        height: 24px;
                        line-height: 24px;
                        border-radius: 10px;
                        border: 1px solid #c4c4c4;
                        font-size: 12px;
                        color: #a9a9a9;
                        text-align: center;
                        position: absolute;
                        top: 35px;
                        left: 210px;
                        cursor: pointer;
                    }
                    .active {
                        background: #c4c4c4;
                        color: #fff;
                    }
                }
                .loginIn {
                    width: 100%;
                    background: #ff6000;
                    color: #ffffff;
                    border: 0;
                    margin-top: 40px;
                }
                .forget {
                    width: 100%;
                    height: 37px;
                    background: #f7f7f7;
                    margin-top: 24px;
                    a {
                        display: block;
                        width: 114px;
                        height: 37px;
                        line-height: 37px;
                        color: #333333;
                        margin-left: 37px;
                        i {
                            margin-right: 4px;
                        }
                    }
                }
                .other {
                    width: 100%;
                    height: 80px;
                    a {
                        display: block;
                        width: 86px;
                        height: 80px;
                        color: #3b3b3b;
                        line-height: 80px;
                        margin-right: 17px;
                        i {
                            margin-right: 4px;
                        }
                    }
                }
            }
        }
        .moves {
            width: 352px;
            height: 422px;
            background: #ffffff;
            margin-top: 30px;
            .pic {
                width: 100%;
                height: 44px;
                .boredr {
                    width: 150px;
                    height: 28px;
                    background: url(../../assets/img/scan_code.png) no-repeat;
                    margin-left: 143px;
                    margin-top: 8px;
                    img {
                        margin-left: 38px;
                        margin-top: 7px;
                    }
                }
                .code {
                    width: 58px;
                    height: 52px;
                    img {
                        margin-top: 10px;
                        cursor: pointer;
                    }
                }
            }
            .history {
                width: 310px;
                height: 378px;
                margin-left: 21px;
                .inputList {
                    width: 100%;
                    height: 218px;
                    .d-null {
                        min-height: 24px;
                        margin: 4px 0;
                        box-sizing: border-box;
                    }
                    .el-alert {
                        padding: 2px 16px;
                        margin: 4px 0;
                    }
                    img {
                        margin-left: 90px;
                        margin-top: 26px;
                    }
                    .cover {
                        width: 100%;
                        height: 36px;
                        margin-left: 72px;
                        line-height: 36px;
                        .open {
                            display: block;
                            font-size: 15px;
                            color: #666666;
                        }
                        a {
                            font-size: 15px;
                            color: #d02629;
                        }
                    }
                }
                .callip {
                    width: 100%;
                    height: 34px;
                    line-height: 34px;
                    font-size: 15px;
                    color: #3b3b3b;
                    margin-bottom: 12px;
                    border-bottom: 1px solid #dddddd;
                }
                .forget {
                    width: 100%;
                    height: 37px;
                    background: #f7f7f7;
                    .fare {
                        display: block;
                        width: 114px;
                        height: 37px;
                        line-height: 37px;
                        color: #333333;
                        margin-left: 37px;
                        i {
                            margin-right: 4px;
                        }
                    }
                }
                .other {
                    width: 100%;
                    height: 80px;
                    a {
                        display: block;
                        width: 86px;
                        height: 80px;
                        color: #3b3b3b;
                        line-height: 80px;
                        margin-right: 17px;
                        i {
                            margin-right: 4px;
                        }
                    }
                }
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
            margin-left: 39.5%;
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
