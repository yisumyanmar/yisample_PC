<template>
    <div id="success">
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
                        <img class="sink" src="../../assets/img/buzhou3.png" />
                    </p>
                    <div class="part">
                        <!-- <p class="bottomOne l">账户名</p> -->
                        <p class="bottomTwo l">用户身份</p>
                        <p class="bottomTwo l">设置新密码</p>
                        <p class="bottomTwo l">完成</p>
                    </div>
                    <div class="nameCode">
                        <img src="../../assets/img/login_dui.png" />
                        <img src="../../assets/img/set_new.png" />
                    </div>
                    <router-link to="passwordLogin" class="button backToLogin"
                        >立即登录>></router-link
                    >
                </div>
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

    data() {},
    created() {
        // let title = "找回密码4" + this.$constant.webComContent;
         let title = "找回密码4" + '-' + this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
    }
};
</script>

<style lang="less" scoped>
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
                margin-left: 151px;
                margin-top: 10px;
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
                    width: 240px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    color: #d0d0d0;
                    font-size: 12px;
                }
            }
            .nameCode {
                width: 714px;
                height: 72px;
                margin-left: 290px;
                margin-top: 70px;
            }
            .backToLogin {
                width: 100px;
                height: 38px;
                border: 0;
                color: red;
                font-size: 12px;
                margin-left: 360px;
                margin-top: 20px;
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
