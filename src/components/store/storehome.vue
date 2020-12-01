<template>
    <div class="home">
        <!-- <common-header></common-header> -->
        <common-header v-on:childToParent="onChildClick"></common-header>
        <store-header></store-header>
        <div class="banner-img">
            <el-carousel :interval="5000" arrow="hover" :height="bannerHeight">
                <el-carousel-item v-for="item in storeBanner" :key="item.id">
                    <a :href="item.ad_url">
                        <img :src="URL + item.adv_content" />
                    </a>
                </el-carousel-item>
                <el-carousel-item v-if="showbanner===0">
                    <img src="../../assets/img/defaultbanner.jpg" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="center">
            <div v-if="storeCouponList.length" class="store-coupon-list">
                <div
                    class="store-coupon"
                    v-for="(item, index) in storeCouponList"
                    :key="index"
                >
                    <div class="left">
                        <div class="money">
                            <span>￥</span>
                            <span>{{ item.money }}</span>
                        </div>
                        <div class="time-title">有效时间</div>
                        <div class="time">
                            {{ formatDate(item.use_start_time) }}至{{
                                formatDate(item.use_end_time)
                            }}
                        </div>
                    </div>
                    <div class="right">
                        <div @click="securities(item.id)">立即领劵</div>
                        <div>满{{ item.condition }}</div>
                    </div>
                </div>
            </div>

            <img class="zhuanqu" src="../../assets/img/zhuanqu.jpg" />
            <div class="detonating-area">
                <div class="new-product inline-block">
                    <div
                        class="goods-l"
                        v-if="storeDetonatingList.left != null"
                        @click="detail(storeDetonatingList.left.id)"
                    >
                        <span class="g-title">新品上市</span>
                        <p class="g-name">
                            {{ storeDetonatingList.left.title }}
                        </p>
                        <p class="g-price">
                            <i>￥</i>
                            {{ storeDetonatingList.left.price_member }}
                        </p>
                        <img
                            :src="URL + storeDetonatingList.left.pic_url"
                            alt
                        />
                    </div>
                    <div class="goods-r">
                        <div class="banner g-swipe">
                            <el-carousel height="200px" arrow="never">
                                <el-carousel-item
                                    v-if="item != null"
                                    v-for="(item,
                                    index) in storeDetonatingList.center_top"
                                    :key="index"
                                >
                                    <div
                                        class="goods_b"
                                        @click="detail(item.id)"
                                    >
                                        <p
                                            class="r-title"
                                            @mouseenter="
                                                updateXY(item.title, $event)
                                            "
                                            @mouseleave="updataFullFlag"
                                        >
                                            {{ item.title }}
                                        </p>
                                        <p class="r-new">新品发售 现货抢购</p>
                                        <p class="r-price">
                                            <i>￥</i>
                                            {{ item.price_member }}
                                        </p>
                                    </div>
                                    <img
                                        :src="URL + item.pic_url"
                                        alt
                                        @click="detail(item.id)"
                                    />
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <div
                            class="banner g-t"
                            v-if="storeDetonatingList.center_lower != null"
                        >
                            <div
                                class="goods_b"
                                @click="
                                    detail(storeDetonatingList.center_lower.id)
                                "
                            >
                                <p
                                    class="r-title"
                                    @mouseenter="
                                        updateXY(
                                            storeDetonatingList.center_lower
                                                .title,
                                            $event
                                        )
                                    "
                                    @mouseleave="updataFullFlag"
                                >
                                    {{ storeDetonatingList.center_lower.title }}
                                </p>
                                <p class="r-new">新品发售 现货抢购</p>
                                <p class="r-price">
                                    <i>￥</i>
                                    {{
                                        storeDetonatingList.center_lower
                                            .price_member
                                    }}
                                </p>
                            </div>
                            <img
                                :src="
                                    URL +
                                        storeDetonatingList.center_lower.pic_url
                                "
                                alt
                            />
                        </div>
                    </div>
                    <ul class="cheap inline-block">
                        <li
                            :key="j"
                            v-for="(i, j) in storeDetonatingList.panic"
                            @click="toRushBuy(i.goods_id)"
                        >
                            <span class="cheap-title">剁手价</span>
                            <p
                                @mouseenter="updateXY(i.title, $event)"
                                @mouseleave="updataFullFlag"
                            >
                                {{ i.title }}
                            </p>
                            <p class="c-price">￥{{ i.panic_price }}</p>
                            <img :src="URL + i.pic_url" alt />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tuijian">
                <span class="l">推荐商品</span>
                <span @click="toAll" class="r">更多>></span>
            </div>
            <ul class="bottomul">
                <li
                    v-if="li != null"
                    v-for="(li, index) in storeRecommendGoods.recommend"
                    :key="index"
                    class="l"
                >
                    <img
                        class="storefuzhu"
                        :src="URL + li.pic_url"
                        @click="detail(li.id)"
                    />
                    <p
                        @click="detail(li.id)"
                        class="bottomul-title"
                        @mouseenter="updateXY(li.title, $event)"
                        @mouseleave="updataFullFlag"
                    >
                        {{ li.title }}
                    </p>
                    <div class="price">
                        <div>
                            <span class="pic1">{{ li.price_member }}</span>
                            <span class="pic2">{{ li.price_member }}</span>
                        </div>
                        <div>
                            <span style="font-size: 12px;color:#656565"
                                >已售{{ li.sales_sum }}件</span
                            >
                        </div>
                    </div>
                    <div
                        class="collection"
                        @click="collection(1, li.id, index)"
                    >
                        <i
                            :class="[
                                'l like',
                                li.collection === 1 ? 'cancel' : ''
                            ]"
                        ></i>
                        <span>
                            {{
                                recommendCollection[index] === 1
                                    ? "已收藏"
                                    : "收藏"
                            }}
                        </span>
                    </div>
                    <img
                        class="r bycar"
                        src="../../assets/img/goshop.png"
                        @click="addCar(li.store_id, li.price_member, li.id)"
                    />
                </li>
            </ul>
            <div class="tuijian">
                <span class="l">新品上架</span>
                <span @click="toAll" class="r">更多>></span>
            </div>
            <ul class="bottomul">
                <li
                    v-if="li != null"
                    v-for="(li, index) in storeRecommendGoods.newGoods"
                    :key="index"
                    class="l"
                >
                    <img
                        class="storefuzhu"
                        :src="URL + li.pic_url"
                        @click="detail(li.id)"
                    />
                    <p
                        @click="detail(li.id)"
                        class="bottomul-title"
                        @mouseenter="updateXY(li.title, $event)"
                        @mouseleave="updataFullFlag"
                    >
                        {{ li.title }}
                    </p>
                    <p style="position:relative">
                        <span class="pic1">{{ li.price_member }}</span>
                        <span class="pic2">{{ li.price_member }}</span>
                        <span
                            style="margin-left:20px;font-size: 12px;color:#656565;position:absolute;right:0"
                            >已售{{ li.sales_sum }}件</span
                        >
                    </p>
                    <div
                        class="collection"
                        @click="collection(2, li.id, index)"
                    >
                        <i
                            :class="[
                                'l like',
                                li.collection === 1 ? 'cancel' : ''
                            ]"
                        ></i>
                        <span>
                            {{ li.collection === 1 ? "已收藏" : "收藏" }}
                        </span>
                    </div>
                    <img
                        class="r bycar"
                        src="../../assets/img/goshop.png"
                        @click="addCar(li.store_id, li.price_member, li.id)"
                    />
                </li>
            </ul>
        </div>
        <foot-com></foot-com>
        <!--标题完全显示框-->
        <div
            class="full-display-title"
            v-if="fullTitieFlag"
            :style="displayTitleStyle"
        >
            {{ fullTitle }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            storeID: 0,
            stord_id: null,
            coll: [],
            storeDetonatingList: {}, //店铺爆品专区
            storeRecommendGoods: {}, //店铺推荐商品
            recommendCollection: [],
            detonatingListCollection: [],
            fullTitieFlag: false,
            fullTitle: "",
            storeCouponList: [],
            bannerHeight: "500px",
            storeBanner: [],
            displayTitleStyle: {
                top: "",
                bottom: ""
            },
            fromChild: '',
            showbanner:''
            
        };
    },
    created() {
        this.stord_id = sessionStorage.getItem("store_id");
        // let title = "店铺首页" + this.$constant.webComContent;
           let title = "店铺首页" + '-' + this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
    },
    mounted() {
        this.storeID = this.$route.query.id;
        //店铺爆品专区
        this.getStoreDetonatingFun();
        //店铺推荐商品
        this.getStoreRecommendGoodsFun();
        //店铺优惠券
        this.getStoreCoupon();
        //店铺banner图
        this.getStoreBanner();
    },
    methods: {
        onChildClick (value) {
            this.fromChild = value
            if(this.fromChild == 'false') {
                location.reload();
            }
        },
              
        /*
        type 类型 推荐为1 爆品为2
        id  商品id
        index 下标
        collectionArr 需要改变的数组
      */
        collection(type, id, index) {
            this.HTTP(
                this.$httpConfig.setCollectionGoods,
                {
                    goods_id: id
                },
                "post",
                false
            )
                .then(res => {
                    if (res.data.status == 10001) {
                        this.$router.push("/passwordLogin");
                        return;
                    }
                    if (type == 1) {
                        if (
                            this.storeRecommendGoods.recommend[index]
                                .collection == 0
                        ) {
                            this.$set(
                                this.storeRecommendGoods.recommend[index],
                                "collection",
                                1
                            );
                            alert("收藏成功");
                        } else {
                            this.$set(
                                this.storeRecommendGoods.recommend[index],
                                "collection",
                                0
                            );
                            alert("取消收藏");
                        }
                    } else {
                        if (
                            this.storeRecommendGoods.newGoods[index]
                                .collection == 0
                        ) {
                            this.$set(
                                this.storeRecommendGoods.newGoods[index],
                                "collection",
                                1
                            );
                            alert("收藏成功");
                        } else {
                            this.$set(
                                this.storeRecommendGoods.newGoods[index],
                                "collection",
                                0
                            );
                            alert("取消收藏");
                        }
                    }
                })
                .catch(() => {});
            // type === 1 ? this.collectionType(this.recommendCollection, id, index) : this.collectionType(this.detonatingListCollection, id, index)
        },
        getStoreBanner() {
            this.HTTP(
                this.$httpConfig.getBannerAd,
                { store_id: this.$route.query.id },
                "post"
            )
                .then(res => {
                    this.storeBanner = res.data.data;
                })
                .catch(err => {
                    this.showbanner =err.data.status 
                });
        },
        formatDate(datetime) {
            // 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
            var d = new Date(datetime * 1000);
            var year = d.getFullYear(),
                month = ("0" + (d.getMonth() + 1)).slice(-2),
                date = ("0" + d.getDate()).slice(-2),
                hour = ("0" + d.getHours()).slice(-2),
                minute = ("0" + d.getMinutes()).slice(-2),
                second = ("0" + d.getSeconds()).slice(-2);
            // 拼接
            var result = year + "." + month + "." + date;
            // 返回
            return result;
        },
        collectionType(collectionArr, id, index) {},
        securities(id) {
            this.HTTP(
                this.$httpConfig.coupon.couponReceiveBehavior,
                { id: id },
                "post"
            )
                .then(res => {
                    if (res.data.status == 10001) {
                        this.$router.push("/passwordLogin");
                        return;
                    }
                    if (res.data.status == 1) {
                        alert("领取成功");
                    }
                })
                .catch(error => {
                    alert(error.data.message);
                });
        },
        toRushBuy(id) {
            this.$router.push({
                name: "introduce",
                params: {
                    id: id
                }
            });
        },
        getStoreCoupon() {
            this.HTTP(
                this.$httpConfig.coupon.couponSendList,
                { store_id: this.storeID },
                "post"
            )
                .then(res => {
                    if (res.data.status == 1) {
                        this.storeCouponList = res.data.data.data;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        addCar(storeId, price, goodsId) {
            var params = {
                goods_id: goodsId,
                goods_num: 1,
                price_new: price,
                store_id: storeId
            };
            this.HTTP(
                this.$httpConfig.addGoodToCart,
                params,
                "post",
                false
            ).then(res => {
                this.$confirm("", "已成功加入购物车", {
                    confirmButtonText: "查看购物车",
                    cancelButtonText: "继续购物",
                    type: "success",
                    center: true,
                    lockScroll: false,
                    closeOnClickModal: false,
                    confirmButtonClass: "to-shopping-cart",
                    cancelButtonClass: "continue-shopping"
                })
                    .then(() => {
                        window.open(window.location.origin + "/buyCar");
                    })
                    .catch(() => {});
            });
        },
        updateXY(title, e) {
            this.fullTitle = title;
            this.displayTitleStyle.top = e.pageY + 30 + "px";
            this.displayTitleStyle.left = e.pageX + 20 + "px";
            this.fullTitieFlag = true;
        },
        updataFullFlag() {
            this.fullTitieFlag = false;
        },
        toAll() {
            this.$router.push({
                path: "/storelist",
                query: {
                    id: this.storeID
                }
            });
        },
        detail(id) {
            window.open(window.location.origin + "/shopsn_product?id=" + id);
        },
        //店铺爆品专区接口
        getStoreDetonatingFun() {
            this.HTTP(
                this.$httpConfig.getStoreDetonating,
                { id: this.storeID },
                "post"
            )
                .then(res => {
                    this.storeDetonatingList = res.data.data;
                })
                .catch(() => {});
        },
        //店铺推荐商品接口
        getStoreRecommendGoodsFun() {
            this.HTTP(
                this.$httpConfig.getStoreRecommendGoods,
                { id: this.storeID },
                "post"
            )
                .then(res => {
                    this.storeRecommendGoods = res.data.data;
                })
                .catch(() => {});
        }
    }
};
</script>
<style>
.el-carousel__container {
    /* position: relative; */
    /* height: 310px !important; */
}
.el-carousel__button {
    width: 22px;
    height: 5px;
    background-color: #8c958f;
}
</style>

<style lang="less" scoped>
.home {
    .banner-img{
        img{
        width: 100%;
        height:100%; 
        }
    }
}

.store-coupon-list {
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;

    .store-coupon {
        background: url("../../assets/img/qbg.png");
        background-size: cover;
        margin-right: 15px;
        margin-bottom: 15px;
        width: 380px;
        height: 144px;
        display: flex;

        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .left {
            width: 58%;

            .money {
                span {
                    color: #ffffff;
                    font-weight: bold;
                }

                span:nth-child(1) {
                    font-size: 16px;
                }

                span:nth-child(2) {
                    font-size: 30px;
                }
            }

            .time-title {
                color: #ffffff;
                font-size: 12px;
            }

            .time {
                color: #ffffff;
                font-size: 12px;
            }
        }

        .right {
            width: 42%;

            > div {
                color: #ffffff;
            }

            > div:nth-child(1) {
                font-size: 23px;
                cursor: pointer;
            }

            > div:nth-child(2) {
                font-size: 13px;
            }
        }
    }
}

.full-display-title {
    position: absolute;
    z-index: 222;
    background: #ffffff;
    border: 1px solid #767676;
    padding: 4px;
    color: #575757;
}

.collection {
    display: inline-block;
    margin: 10px 10px 0;

    i {
        margin-right: 5px;
    }

    .like {
        width: 25px;
        height: 25px;
        background: url(../../assets/img/heat_null.png) no-repeat;
        background-size: 100% 100%;
    }

    .cancel {
        background: url(../../assets/img/heat_fill.png) no-repeat;
        background-size: 100% 100%;
    }
}

.l {
    float: left;
}

.r {
    float: right;
}

.inline-block {
    display: inline-block;
}

.center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
}

.zhuanqu {
    margin-bottom: 28px;
    margin-top: 47px;
}

.detonating-area {
    padding: 0 25px;

    .new-product {
        border: 1px solid #f5f5f5;
        border-left: none;

        .goods-l {
            float: left;
            height: 400px;
            width: 300px;
            border-left: 1px solid #f5f5f5;
            cursor: pointer;

            .g-title {
                box-sizing: content-box;
                color: #434343;
                font-size: 16px;
                font-weight: 800;
                border-bottom: 1px dashed #848484;
                display: block;
                height: 30px;
                line-height: 30px;
                margin: 0 25px;
                margin-top: 10px;
                text-align: center;
            }

            .g-name {
                padding: 0 30px;
                margin-top: 19px;
                display: -webkit-box;
                overflow: hidden;
                white-space: normal !important;
                text-overflow: ellipsis;
                word-wrap: break-word;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }

            .g-issue {
                font-weight: 800;
                margin-left: 30px;
                text-indent: 5px;
                color: #fff;
                background-color: #ff3334;
                width: 150px;
                height: 20px;
            }

            .g-price {
                padding: 0 30px;
                color: #ff3334;
                font-weight: 800;
                font-size: 17px;

                i {
                    font-style: normal;
                    color: #ff3334;
                    font-size: 12px;
                    font-weight: 600;
                }
            }

            img {
                margin: 0 30px;
                width: 240px;
                height: 230px;
            }
        }

        .goods-r {
            float: left;
            width: 420px;
            border-left: 1px solid #f5f5f5;

            .banner {
                background: #fdf8f2;
                height: 200px;
                cursor: pointer;

                .goods_b {
                    width: 198px;
                    float: left;
                    padding-left: 30px;

                    .r-title {
                        font-size: 16px;
                        padding-top: 40px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .r-title:hover {
                        color: #d02629;
                    }

                    .r-new {
                        color: #ff3334;
                    }

                    .r-price {
                        padding-top: 15px;
                        color: #ff3334;
                        font-size: 17px;

                        i {
                            font-style: normal;
                            color: #ff3334;
                            font-size: 12px;
                        }
                    }
                }

                img {
                    float: left;
                    width: 170px;
                    height: 120px;
                    margin-left: 10px;
                    margin-top: 38px;
                }

                .g-t-image {
                    width: 200px;
                    height: 60px;
                    margin-top: 73px;
                }
            }

            .g-t {
                background-color: #fff;
            }

            .g-swipe {
                border-bottom: 1px solid #f5f5f5;
            }
        }

        .cheap {
            width: 420px;

            li {
                border-left: 1px solid #f5f5f5;
                float: left;
                width: 50%;
                height: 200px;
                text-align: center;

                .cheap-title {
                    color: #434343;
                    font-size: 16px;
                    font-weight: 800;
                    margin-top: 10px;
                    display: block;
                }

                p {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    cursor: pointer;
                }

                p:hover {
                    color: #d02629;
                }

                .c-price {
                    border-radius: 10px;
                    font-weight: 800;
                    font-size: 13px;
                    width: 67px;
                    color: #fff;
                    margin: 0 auto;
                    margin-top: 5px;
                    background-color: #ff3334;
                }

                img {
                    width: 95px;
                    height: 95px;
                    margin-top: 18px;
                }
            }

            li:nth-child(1) {
                border-bottom: 1px solid #f5f5f5;
            }

            li:nth-child(2) {
                border-bottom: 1px solid #f5f5f5;
            }
        }
    }
}

.tuijian {
    width: 100%;
    height: 40px;
    background: #f9f9f9;
    border: 1px solid #e5e5e5;
    margin: 12px 0;
    line-height: 40px;

    span:nth-of-type(1) {
        font-size: 14px;
        color: #333;
        margin-left: 13px;
    }

    span {
        font-size: 12px;
        color: #adadad;
        margin-right: 15px;
        cursor: pointer;
    }

    span:nth-of-type(2):hover {
        color: red;
    }
}

.bottomul {
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    cursor: pointer;

    li {
        width: 218px;
        height: 332px;
        border: 1px solid #f5f5f5;
        margin-right: 27px;
        margin-top: 12px;

        .storefuzhu {
            margin: 5px;
            width: 205px;
            height: 205px;
        }

        p:nth-of-type(1) {
            font-size: 12px;
            color: #06060e;
            margin: 5px;
            height: 34px;
            display: -webkit-box;
            overflow: hidden;
            white-space: normal !important;
            text-overflow: ellipsis;
            word-wrap: break-word;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .bottomul-title:hover {
            color: #d02629;
        }

        p:nth-of-type(2) {
            margin: 5px;
        }

        .price {
            margin: 5px;
            display: flex;
            justify-content: space-between;
            > div:nth-child(2) {
                span {
                    font-size: 12px;
                }
            }
        }

        .pic1 {
            font-size: 14px;
            color: #c0354c;
        }

        .pic2 {
            font-size: 12px;
            color: #bbb;
            text-decoration: line-through;
            margin-left: 5px;
        }

        .storeheart {
            margin: 16px 5px 0 8px;
        }

        .shoucang {
            font-size: 12px;
            color: #949494;
            margin-top: 13px;
        }

        .bycar {
            margin: 5px 12px 0 0;
        }

        &:hover {
            border-color: #d02629 !important;
        }
    }

    li:nth-of-type(10) {
        margin-right: 0;
    }

    li:nth-of-type(5) {
        margin-right: 0;
    }
}

.bottomul:last-child {
    margin-bottom: 40px;
}
</style>
