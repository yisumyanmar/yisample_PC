<template>
    <div class="distributionOrder l">
        <ul class="top">
            <li
                @click="fenXiao(index)"
                :class="{ active: Active == index }"
                v-for="(item, index) in navList"
                :key="item.id"
            >
                <div class="header-title">
                    <div>{{ item }}</div>
                </div>
            </li>
        </ul>
        <div class="thead">
            <p class="l">宝贝</p>
            <p class="l">单价</p>
            <p class="l">数量</p>
            <p class="l">商品操作</p>
            <p class="l">实付款</p>
            <p class="l">交易状态<i class="el-icon-caret-bottom"></i></p>
            <p class="l">交易操作</p>
        </div>
        <div class="btn"><span>上一页</span><span>下一页</span></div>
        <div
            class="alike"
            v-for="(item, index) in distributeDataList"
            :key="item.id"
        >
            <div class="both">
                <input class="l" type="checkbox" />
                <p class="l">{{ item.create_time | formatDate }}</p>
                <p class="l">订单号: {{ item.order_sn_id }}</p>
                <p class="l">店铺：{{ item.store.shop_name }}</p>
                <p class="l">分销人:{{ item.user_name }}</p>
                <p class="l">佣金:{{ item.commission }}</p>
                <!-- <div class="service-reset">
          <div id="dom" @click="openkefu(item)">
            <span>客服</span>
            <img src="@/assets/img/people_ser.png" />
          </div>
        </div> -->

                <!-- <i class="el-icon-delete r"></i> -->
            </div>
            <div
                v-for="(innerItem, innerIndex) in item.goods"
                :key="innerItem.id"
                class="goods-wrapper"
            >
                <div class="zuo l">
                    <div class="huowu">
                        <img :src="URL + innerItem.pic_url" />
                        <p>{{ innerItem.title }}</p>
                        <p>￥{{ innerItem.goods_price }}</p>
                        <p>{{ innerItem.goods_num }}</p>
                        <!-- <router-link to="apply">售后处理</router-link> -->
                    </div>
                </div>
                <div class="right r">
                    <p>
                        <span>￥{{ innerItem.goods_price }}</span
                        ><span>（含运费：￥10.00）</span>
                    </p>
                    <p>
                        <span>等待卖家付款</span>
                        <i
                            class="last-span"
                            @click="handleOrderDetails(item)"
                            id="get_dom"
                            ref="dom_ref"
                            @mouseenter="handleEnter(innerIndex)"
                            @mouseleave="handleLeave(innerIndex)"
                        >
                            订单详情</i
                        >
                    </p>
                    <!-- <p><span>取消订单</span></p> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: ["未付款", "已付款"],
            Active: 0,
            distributeDataList: [],
            colorIndex: -1,
            unFinishedArr: [],
            finishedArr: [],
            initIndex: 0
        };
    },
    created() {
        this.getOrderList(this.initIndex);
        // let title = "分销订单" + this.$constant.webComContent;
         let title = "分销订单" + '-' + this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
    },
    methods: {
        handleEnter(index) {
            let dom = document.getElementById("get_dom");
        },
        handleLeave(index) {
            let dom = document.getElementById("get_dom");
        },
        handleOrderDetails(item) {
            this.$router.push({
                path: "/orderDetail",
                query: {
                    id: item.id
                }
            });
        },
        getOrderList(index) {
            this.HTTP(
                this.$httpConfig.distributeAllOrder,
                {
                    page: 1,
                    order_status: index
                },
                "post"
            )
                .then(res => {
                    this.distributeDataList = res.data.data.list;
                })
                .catch(err => {
                    console.error(err);
                });
        },
        openkefu(item) {
            this.HTTP(this.$httpConfig.serviceList, {
                store_id: item.store_id
            })
                .then(res => {
                    if (res.data.status == 10001) {
                        this.$router.push("/passwordLogin");
                        return;
                    }
                    window.open(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        fenXiao(index) {
            this.Active = index;
            this.HTTP(this.$httpConfig.distributeAllOrder, {
                page: 1,
                order_status: index
            })
                .then(res => {
                    this.distributeDataList = res.data.data.list;
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
</script>
<style lang="less">
.last-span {
    font-size: 12px;
    font-weight: normal;
    margin-left: 28px;
    color: #333;
    cursor: pointer;
    &:hover {
        color: red;
    }
}
</style>
<style lang="less" scoped>
.service-reset {
    #dom {
        right: 550px;
        cursor: pointer;
        line-height: 25px;
        margin-top: 7px;
        position: absolute;
        align-items: end;
        border: 1px solid #eeeeee;
        background: #fbfbf1;
        span {
            margin-left: 10px;
            margin-right: 10px;
            font-size: 10px;
        }
    }
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
}
.distributionOrder {
    width: 980px;
    background: #fff;
    margin: 16px 0;
    padding-bottom: 40px;
    .top {
        height: 37px;
        border-bottom: 1px solid #e7e7e7;
        margin: 14px 17px 23px;
        li {
            cursor: pointer;
            float: left;
            width: 52px;
            text-align: center;
            height: 35px;
            font-size: 14px;
            color: #666;
            .header-title {
                display: flex;
                align-items: center;
            }
            p {
                line-height: 16px;
                border-right: 1px solid #eee;
                margin-top: 10px;
                span {
                    color: #d02629;
                }
            }
        }

        li:last-child {
            margin-left: 55px;
        }
    }
    .active {
        border-bottom: 2px solid #d02629;
        color: #d02629 !important;
    }
    .thead {
        overflow: hidden;
        height: 38px;
        background: #f5f5f5;
        border: 1px solid #e7e6e6;
        margin: 0 17px;
        width: 946px;
        line-height: 38px;
        p {
            font-size: 12px;
            color: #474747;
            i {
                color: #999;
                margin-left: 9px;
            }
        }
        p:nth-of-type(1) {
            margin: 0 205px 0 134px;
        }
        p:nth-of-type(3) {
            margin: 0 70px 0 50px;
        }
        p:nth-of-type(5) {
            margin: 0 65px 0 74px;
        }
        p:nth-of-type(7) {
            margin-left: 51px;
        }
    }
    .btn {
        cursor: pointer;
        text-align: right;
        margin: 14px 17px 15px;
        span {
            display: inline-block;
            width: 60px;
            height: 22px;
            text-align: center;
            line-height: 22px;
            border: 1px solid #dcdcdc;
            font-size: 12px;
            color: #9c9c9c;
            border-radius: 3px;
            margin-left: 6px;
        }
    }
    .alike {
        overflow: hidden;
        border: 1px solid #e7e6e6;
        margin: 0 17px 10px;
        span {
            cursor: pointer;
        }
        a {
            font-size: 12px;
            color: #333;
            margin-top: 20px;
            display: inline-block;
        }
        .both {
            height: 42px;
            line-height: 42px;
            background: #f1f1f1;
            i {
                font-size: 16px;
                margin: 13px 16px 0 0;
                color: #999;
                font-weight: 900;
            }
            input {
                margin: 16px 14px 0 13px;
            }
            p {
                font-size: 12px;
                color: #333;
            }
            p:nth-of-type(2) {
                margin: 0 67px 0 25px;
            }
            p:nth-of-type(3) {
                margin: 0 67px 0 25px;
            }
            p:nth-of-type(4) {
                margin: 0 67px 0 25px;
                color: red;
            }
            p:nth-of-type(5) {
                margin: 0 10px 0 15px;
                color: red;
            }
            img {
                float: left;
                margin: 4px 0 0 10px;
            }
        }
        .zuo {
            overflow: hidden;
            width: 613px;
            .huowu {
                height: 110px;
                img {
                    float: left;
                    margin: 15px 10px 0 13px;
                    width: 80px;
                    height: 80px;
                }
                p {
                    float: left;
                    font-size: 12px;
                    color: #333;
                    margin-top: 20px;
                }
                p:nth-of-type(1) {
                    width: 147px;
                    margin: 18px 117px 0 0;
                }
                p:nth-of-type(3) {
                    margin: 20px 83px 0 44px;
                }
            }
        }
        .right {
            height: 110px;
            overflow: hidden;
            p {
                float: left;
                border-left: 1px solid #e7e6e6;
                height: 100%;
                span {
                    display: block;
                    text-align: center;
                    font-size: 12px;
                    color: #333;
                    cursor: pointer;
                }
            }
            p:nth-of-type(1) {
                width: 120px;
                span:nth-of-type(1) {
                    margin-top: 20px;
                }
            }
            p:nth-of-type(2) {
                width: 105px;
                span:nth-of-type(1) {
                    margin-top: 20px;
                }
            }
            p:nth-of-type(3) {
                width: 106px;
                span:nth-of-type(1) {
                    margin: 17px auto 8px;
                    width: 72px;
                    height: 28px;
                    line-height: 28px;
                    color: #fff;
                    background: #ff6000;
                    border-radius: 3px;
                }
            }
            .quxiao {
                background: #cbcaca !important;
            }
            .queren {
                background: #66b6ff !important;
            }
        }
    }
}
</style>
