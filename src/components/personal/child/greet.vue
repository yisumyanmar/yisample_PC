<template>
    <div class="greet">
        <div class="l middle">
            <div class="up">
                <div class="l">
                    <!-- <img
                        class="l"
                        :src="URL + userInfo.user_header"
                        v-if="userInfo.user_header"
                    /><img
                        v-else
                        class="l"
                        src="../../../assets/img/default-head.png"
                    /> -->
                    <img
                        class="l"
                        src="../../../assets/img/gerentouxiang.png"
                    />
                    <!-- <p class="l">
                        欢迎{{ user_name }}进入{{
                            this.$constant.mainTitle
                        }}商城
                    </p> -->
                    <p class="l">
                        欢迎进入商城
                    </p>
                    <!-- <p class="l">当前等级：{{ userInfo.current_level_name }}</p> -->
                    <p class="l">当前等级：VIP会员</p>
                    <!-- <p class="l integral" @click="integral">
                        我的积分：<span>{{ userInfo.current_integral }}</span>
                        再积累<span>{{ userInfo.next_integral }}</span
                        >积分 即可升级至 {{ userInfo.next_level_name }}
                    </p> -->
                    <p class="l integral">
                        我的积分：<span>0</span>
                        再积累<span>500</span>
                        积分 即可升级至 钻石会员
                    </p>
                </div>
                <!-- <p class="l my-address" @click="toMyAddress">我的收货地址</p> -->
                <p class="l my-address">我的收货地址</p>
                <!-- <div class="r xinxi">
                    <p class="l mine" @click="hits" :class="{ col: iscol }">
                        我的优惠信息<i class="el-icon-arrow-down"></i>
                    </p>
                    <span class="show" v-show="onoff">
                        <p @click="GoTo">店铺优惠券：<span>1</span></p>
                        <p>平台积分：<span>200</span></p>
                    </span>
                </div> -->
                <div class="r xinxi">
                    <p class="l mine">
                        我的优惠信息<i class="el-icon-arrow-down"></i>
                    </p>
                </div>
                <div class="r evaluate">
                    <ul>
                        <li class="l">
                            <p>待付款<span>0</span></p>
                        </li>
                        <li class="l">
                            <p>待发货<span>0</span></p>
                        </li>
                        <li class="l">
                            <p>待收货<span>0</span></p>
                        </li>
                        <li class="l">
                            <p>待评价<span>0</span></p>
                        </li>
                        <li class="l">
                            <p>退款<span>0</span></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="shoucang">
                <div class="thead">
                    <span
                        class="l"
                        @click="open(0)"
                        :class="{ bor: isbor == 0 }"
                        >商品收藏</span
                    >
                    <span
                        class="l"
                        @click="open(1)"
                        :class="{ bor: isbor == 1 }"
                        >店铺收藏</span
                    >
                    <router-link to="/collect" class="r" style="color:#999999; padding-right: 10px;"
                        >更多</router-link
                    >
                </div>
                <!-- <div class="bottom">
                    <ul class="clearfix" v-if="status">
                        <li
                            class="l"
                            v-for="(item, index) in goodsList"
                            :key="index"
                            @click="detail(item.goods_id)"
                            v-if="item.pic_url"
                        >
                            <img v-lazy="URL + item.pic_url"/>
                            <p class="text1-hidden" v-if="item.title">{{ item.title }}</p>
                            <p v-if="item.price_member">￥{{ item.price_member }}</p>
                        </li>
                    </ul>
                    <ul class="clearfix" v-else>
                        <li
                            class="l"
                            v-for="(item, index) in shopList"
                            :key="index"
                            @click="storeDetail(item.id)"
                        >
                            <img v-lazy="URL + item.store_logo" />
                            <p class="text1-hidden">{{ item.shop_name }}</p>
                        </li>
                    </ul>
                </div> -->
                <div class="bottom">
                    <ul class="clearfix">
                        <li
                            class="l"
                            v-for="i in 12"
                            :key="i"
                        >
                            <img src="../../../assets/img/gift.png"/>
                            <p class="text1-hidden">联想旗舰店</p>
                            <p>¥669.00</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="like">
                <p class="top">
                    根据浏览，猜您喜欢<span
                        class="r another"
                        @click="myCollectionlikes"
                        >换一批<img src="../../../assets/img/huanyipi.jpg"
                    /></span>
                </p>
                <!-- <ul>
                    <li
                        class="l"
                        :key="i"
                        v-for="(item, i) in likeList"
                        @click="detail(item.gid)"
                    >
                        <img :src="URL + item.pic_url" />
                        <p class="text1-hidden">{{ item.title }}</p>
                        <p>
                            {{ item.price_member }}
                            <span
                                style="margin-left:2px;color:#656565;font-size:11px"
                                >已售{{ item.sales_sum }}件</span
                            >
                        </p>
                    </li>
                </ul> -->
                <ul>
                    <li
                        class="l"
                        :key="i"
                        v-for="i in 4"
                    >
                        <img src="../../../assets/img/yuzhuo.jpg" />
                        <p class="text1-hidden">正品和田玉白玉手链男女款...</p>
                        <p>
                            ¥1280.00
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right r">
            <div class="same l">
                <div class="me l">
                    <p>我的购物车</p>
                </div>
                <!-- <ul class="l">
                    <li
                        class="l"
                        v-for="(item, index) in browseList"
                        :key="index"
                        @click="detail(item.gid)"
                    >
                        <img v-lazy="URL + item.pic_url" />
                        <p>￥{{ item.price_member }}</p>
                        <p
                            style="color:#656565;position:relative;top: -12px;font-size:11px"
                        >
                            已售{{ item.sales_sum }}件
                        </p>
                    </li>
                </ul> -->
                <ul class="l">
                    <li
                        class="l"
                        v-for="i in 6"
                        :key="i"
                    >
                        <img src="../../../assets/img/gem.png" />
                        <p>¥920.00</p>
                    </li>
                </ul>
                <!-- <div class="base l" @click="ToView">
                    查看全部<span>({{ browseList.length }})</span>
                </div> -->
                <div class="base1 l">
                    查看全部<span>(5)</span>
                </div>
                <ul class="l">
                    <li
                        class="l"
                        v-for="i in 6"
                        :key="i"
                    >
                        <img src="../../../assets/img/fozhu.jpg" />
                        <p>¥920.00</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user_name: "",
            status: true,
            shopList: [],
            goodsList: [],
            likeList: [],
            browseList: [],
            iscol: "",
            isbor: "",
            onoff: "",
            userInfo: {}
        };
    },
    created() {
        if(localStorage.getItem("loginuserdata") == 'true') {
            this.getGoodsCollection(); //商品收藏
            this.myCollectionlikes(); //猜你喜欢
            this.browseRecords(); //浏览记录
            this.getInfo(); //个人资料
            this.user_name = sessionStorage.getItem("userName");
              let title = "个人中心" + '-' + this.$constant.webComContent;
            this.showScroll.scrollTitle(title);
        } else {
            this.$router.push('/passwordLogin')
        }
        
    },
    methods: {
        // 积分链接
        integral() {
            this.$router.push({
                path: "/myIntegral"
            });
        },
        // 查看全部链接
        ToView() {
            this.$router.push({
                path: "/ecentBrowse"
            });
        },
        //店铺优惠链接
        GoTo() {
            this.$router.push({
                path: "/myCoupons"
            });
        },
        storeDetail(id) {
            this.$router.push(`/storehome/${id}`);
        },
        detail(id) {
            window.open(window.location.origin + "/shopsn_product?id=" + id);
        },
        getInfo() {
            this.HTTP(this.$httpConfig.userInfo, {}, "post").then(res => {
                this.userInfo = res.data.data;
                sessionStorage.setItem("userInfoKey", JSON.stringify(res.data.data));
            });
        },
        toMyAddress() {
            this.$router.push("receive");
        },
        getGoodsCollection() {
            this.HTTP(this.$httpConfig.goodsCollection, {}, "post", false).then(
                res => {
                    this.goodsList = res.data.data;
                }
            );
        },
        getShopCollection() {
            this.HTTP(this.$httpConfig.shopCollection, {}, "post", false).then(
                res => {
                    this.shopList = res.data.data;
                }
            );
        },
        browseRecords() {
            this.HTTP(this.$httpConfig.myCollectionRecords, {}, "post").then(
                res => {
                    this.browseList = res.data.data;
                }
            );
        },
        //猜你喜欢
        myCollectionlikes() {
            this.HTTP(this.$httpConfig.myCollectionlikes, {}, "post").then(
                res => {
                    this.likeList = res.data.data;
                }
            );
        },
        hits() {
            this.onoff = !this.onoff;
            this.iscol = !this.iscol;
        },
        open(index) {
            if (index == 0) {
                this.getGoodsCollection();
                this.status = true;
            } else {
                this.getShopCollection();
                this.status = false;
            }
            this.isbor = index;
        }
    }
};
</script>

<style lang="less" scoped>
.integral {
    cursor: pointer;
}
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

.greet {
    float: left;
    .middle {
        overflow: hidden;
        width: 726px;
        margin-left: 10px;
        margin-top: 16px;
        .up {
            // height: 100px;
            height: 150px;
            background: #fff;
            width: 100%;
            div.l {
                width: 434px;
                img {
                    margin: 10px 14px 0 12px;
                    // width: 50px;
                    // height: 50px;
                    width: 75px;
                    height: 75px;
                }
                p {
                    width: 320px;
                    font-size: 12px;
                    line-height: 22px;
                    color: #999;
                    margin-left: 5px;
                    span {
                        color: #d02629;
                    }
                }
                p:nth-of-type(1) {
                    margin-top: 20px;
                    color: #333;
                }
            }
            .my-address {
                font-size: 12px;
                color: #666;
                margin-top: 48px;
                cursor: pointer;
            }
            .xinxi {
                font-size: 12px;
                color: #666;
                margin: 48px 29px 0 0;
                position: relative;
                cursor: pointer;
                i {
                    margin-left: 5px;
                    z-index: 999;
                    position: relative;
                }
                .mine {
                    position: relative;
                    z-index: 999;
                }
                .show {
                    width: 159px;
                    height: 141px;
                    border: 1px solid #e7e6e6;
                    position: absolute;
                    top: -14px;
                    left: -29px;
                    background: #fff;
                    z-index: 33;
                    p:nth-of-type(1) {
                        margin-top: 45px;
                    }
                    p {
                        margin-left: 35px;
                        font-size: 13px;
                        color: #666;
                    }
                    span {
                        color: #d02629;
                    }
                    p:nth-of-type(2) {
                        margin-top: 16px;
                    }
                }
                .col {
                    color: #d02629;
                }
            }
            .evaluate {
                width: 724px;
                background: #fff;
                ul {
                    overflow: hidden;
                    margin: 14px 17px 20px;
                    border-top: 1px solid #E8E8E8;
                    height: 37px;
                    li {
                        cursor: pointer;
                        height: 36px;
                        color: #333333;
                        width: 135px;
                        p {
                            height: 16px;
                            border-right: 1px solid #E8E8E8;
                            text-align: center;
                            margin-top: 18px;
                            font-size: 12px;
                            span {
                                color: #D02629;
                            }
                        }
                    }
                }
            }
        }
        .shoucang {
            background: #fff;
            margin-top: 15px;
            height: 408px;
            .thead {
                height: 43px;
                line-height: 42px;
                border-bottom: 1px solid #e8e8e8;
                span.l {
                    width: 84px;
                    text-align: center;
                    font-size: 14px;
                    color: #666;
                    cursor: pointer;
                }
                span.r {
                    font-size: 9px;
                    color: #a8a8a8;
                    margin-right: 12px;
                }
                .bor {
                    border-bottom: 1px solid #d02629;
                    color: #d02629 !important;
                }
            }
            .bottom {
                background: #fff;
                ul {
                    margin: 5px 0 0 14px;
                    li {
                        width: 100px;
                        height: 143px;
                        margin-top: 13px;
                        text-align: center;
                        margin-right: 20px;
                        img {
                            width: 100px;
                            height: 100px;
                        }
                        p:nth-of-type(1) {
                            font-size: 12px;
                            color: #666;
                            line-height: 20px;
                            margin-top: 5px;
                        }
                        p:nth-of-type(2) {
                            font-size: 12px;
                            color: #e31939;
                            line-height: 18px;
                        }
                    }
                    li:nth-child(6n) {
                        margin-right: 0;
                    }
                }
            }
        }
        .like {
            height: 279px;
            background: #fff;
            margin-top: 13px;
            overflow: hidden;
            .top {
                margin: 17px 0 22px 19px;
                font-size: 14px;
                color: #484848;
                span {
                    font-size: 13px;
                    color: #a0a0a0;
                    img {
                        margin: -1px 15px 0 14px;
                    }
                }
                .another {
                    cursor: pointer;
                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
            ul {
                overflow: hidden;
                margin-left: 20px;
                li {
                    // width: 110px;
                    // height: 195px;
                    // margin-right: 9px;
                    width: 160px;
                    height: 200px;
                    margin-right: 18px;
                    img {
                        // width: 100%;
                        // height: 110px;
                        width: 160px;
                        height: 160px;
                    }
                    p:nth-of-type(1) {
                        font-size: 12px;
                        color: #666;
                        line-height: 20px;
                        margin-top: 5px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    p:nth-of-type(2) {
                        font-size: 10px;
                        color: #e30707;
                        line-height: 20px;
                    }
                }
                li:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    .right {
        width: 235px;
        overflow: hidden;
        margin-top: 16px;
        .same {
            margin-bottom: 10px;
            background: #fff;
            margin-left: 15px;
            .me {
                height: 42px;
                border-bottom: 1px solid #f5f8fa;
                width: 235px;
                p {
                    line-height: 18px;
                    width: 90px;
                    border-left: 2px solid #d02629;
                    text-align: center;
                    margin-top: 14px;
                    margin-left: 15px;
                    float: left;
                }
            }
            ul {
                margin-top: 10px;
                margin-left: 8px;
                margin-bottom: 10px;
                li {
                    // width: 80px;
                    // height: 134px;
                    // margin: 0 15px;
                    width: 80px;
                    height: 110px;
                    margin: 0 11px;
                    img {
                        width: 80px;
                        height: 80px;
                    }
                    p {
                        line-height: 30px;
                        text-align: center;
                        font-size: 10px;
                        color: #666;
                    }
                }
            }
            .base1 {
                cursor: pointer;
                height: 41px;
                border-top: 1px solid #f5f8fa;
                line-height: 41px;
                text-align: center;
                width: 100%;
                span {
                    color: #d02629;
                }
            }
        }
    }
}
</style>
