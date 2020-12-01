<template>
    <div>
        <div class="topnav">
            <div class="center">
                <router-link to="home">
                    <img class="logo l" src="../../../assets/img/qw.png" alt=""
                /></router-link>
                <div class="my l">
                    <span>我的商城</span>
                    <router-link to="home">返回商城首页</router-link>
                </div>
                <ul class="l topul">
                    <li class="l topli" @click="goHome">首页</li>
                    <li class="l topli" @click.stop="find">
                        <a :class="{ color: iscolor }">账户设置</a
                        ><i
                            :class="{ color: iscolor }"
                            class="el-icon-arrow-down"
                        ></i>
                        <ul class="hidden" v-show="lose">
                            <li class="l" @click="geren">个人资料</li>
                            <li class="l" @click="zhanghu">账户安全</li>
                            <li class="l" @click="zhanghao">账号绑定</li>
                            <li class="l" @click="address">收货地址</li>
                        </ul>
                    </li>
                    <li class="l topli">
                        <router-link to="/myNews" style="color:#fff;"
                            >消息<span>{{messageCount}}</span></router-link
                        >
                    </li>
                </ul>
                <div class="r form">
                    <div class="search l">
                        <input
                            type="text"
                            placeholder="和田玉"
                            v-model="SearchValue"
                            @keyup.enter="Search"
                        /><span @click="Search">搜索</span>
                    </div>
                    <div class="l buycar">
                        <my-shopping-cart></my-shopping-cart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lose: "",
            iscolor: "",
            SearchValue: "",
            logo_name: "",
            messageCount:0
        };
    },
    created() {
        this.getMessageInfo();
        this.logo_name = localStorage.getItem("logo_name");
        this.SearchValue = this.$route.query.t;
    },
    methods: {
        getMessageInfo() {
            this.HTTP(this.$httpConfig.messageList, {})
                .then(res => {
                    this.messageCount=res.data.data.count;
                    console.log(res.data.data.count, "message");
                })
                .catch(err => {
                    console.error(err);
                });
        },
        //个人中心搜索,只能搜宝贝
        Search() {
            this.$router.push({
                path: "/goodsSearch",
                query: {
                    type: 0, //之前前端写的代码，可至src\common\headCom.vue{163行附近}观赏
                    title: this.SearchValue
                }
            });
        },
        goHome() {
            this.$router.push({ name: "greet" });
        },
        find() {
            this.lose = !this.lose;
            this.iscolor = !this.iscolor;
        },
        geren() {
            this.$router.push("personalData");
        },
        zhanghu() {
            this.$router.push("security");
            this.$emit("zhanghu");
        },
        zhanghao() {
            this.$router.push("bound");
            this.$emit("zhanghao");
        },
        address() {
            this.$router.push("receive");
            this.$emit("address");
        }
    }
};
</script>

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
}
.topnav {
    height: 80px;
    background: #d02629;
    .logo {
        margin-top: 14px;
        width: 143px;
        height: 50px;
    }
    .my {
        width: 95px;
        text-align: center;
        margin: 22px 0 0 83px;
        span:nth-of-type(1) {
            font-size: 18px;
            color: #fff;
        }
        a {
            width: 95px;
            height: 18px;
            line-height: 18px;
            border: 1px solid #ede2cc;
            display: inline-block;
            border-radius: 15px;
            font-size: 11px;
            color: #ede2cc;
        }
    }
    .topul {
        margin: 35px 0 0 48px;
        .topli {
            font-size: 16px;
            color: #fff;
            position: relative;
            cursor: pointer;
            span {
                color: #d02629;
                text-align: center;
                font-size: 10px;
                width: 24px;
                height: 24px;
                line-height: 24px;
                background: url(../../../assets/img/qipao.png) no-repeat center;
                position: absolute;
                top: -16px;
                right: -27px;
            }
        }
        .topli:nth-of-type(2) {
            margin: 0 38px 0 43px;
            a {
                z-index: 12;
                position: relative;
                font-size: 16px;
                color: #fff;
            }
            i {
                margin-left: 11px;
                font-weight: 600;
                z-index: 999;
                position: relative;
            }
        }
        .hidden {
            margin-bottom: 19px;
            position: absolute;
            top: -12px;
            left: -12px;
            background: #fff;
            border: 1px solid #e8e8e8;
            width: 110px;
            height: 154px;
            padding-top: 43px;
            li {
                color: #666;
                font-size: 12px;
                width: 100%;
                padding-left: 15px;
                line-height: 25px;
            }
        }
        .color {
            color: #333 !important;
        }
    }
    div.form {
        margin: 26px 0 0 227px;
        .search {
            width: 184px;
            height: 32px;
            cursor: pointer;
            input {
                width: 128px;
                height: 32px;
                padding-left: 9px;
                float: left;
            }
            span {
                width: 56px;
                height: 32px;
                float: left;
                text-align: center;
                line-height: 32px;
                background: #ece8e8;
                color: #636262;
                font-size: 12px;
            }
        }
        .buycar {
            margin-left: 15px;
        }
    }
}
</style>
