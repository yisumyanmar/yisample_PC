<template>
    <div class="standardProduct">
        <common-header></common-header>
        <head-com></head-com>
        <div class="center">
            <div class="header">
                <img class="l" src="../../assets/img/fangzi.jpg" />
                <span class="shouye" @click="$router.push('home')">首页></span>
                <span class="xiala">标准品</span>
            </div>
            <div class="choose">
                <div class="g-main-n l">
                    <span class="l">品 &nbsp;牌：</span>
                    <div class="q_class_list l" :class="{ active: onoff }">
                        <ul class="l" ref="brandHeight">
                            <li
                                class="l text1-hidden">设计商
                            </li>
                            <li
                                class="l text1-hidden">原材商
                            </li>
                            <li
                                class="l text1-hidden">生产商
                            </li>
                            <li
                                class="l text1-hidden">企业服务 
                            </li>
                        </ul>
                    </div>
                    <i
                        @click="open(1)"
                        v-if="show"
                        :class="{ 'el-icon-arrow-up': onoff }"
                        class="el-icon-arrow-down g-btn"
                    ></i>
                </div>
                <div class="g-main-n l">
                    <span class="l">价 &nbsp;格：</span>
                    <div class="q_class_list l" :class="{ active: onoff1 }">
                        <ul class="l" ref="priceHeight">
                            <li
                                class="l">纸箱
                            </li>
                            <li
                                class="l">飞机盒
                            </li>
                            <li
                                class="l">纸盒
                            </li>
                        </ul>
                    </div>
                    <img class="down-arrow" src="../../assets/img/down-arrow.png" />
                    <i
                        @click="open(2)"
                        v-if="show1"
                        :class="{ 'el-icon-arrow-up': onoff1 }"
                        class="el-icon-arrow-down g-btn"
                    ></i>
                </div>
            </div>
            <div class="new">
                <div class="left l">
                    <!-- 新品推荐 -->
                    <new-product></new-product>
                </div>
                <div class="right r">
                    <div class="top">
                        <ul class="theard l">
                            <li>排列方式：</li>
                            <li class="actives">
                                默认
                            </li>
                            <li
                                class="li">
                                <span>销量</span>
                                <img
                                    src="../../assets/img/xiajiantou.png"
                                    alt=""
                                />
                            </li>
                            <li
                                class="li">
                                <span>人气</span>
                                <img
                                    src="../../assets/img/xiajiantou.png"
                                    alt=""
                                />
                            </li>
                            <li
                                class="li">
                                <span>价格</span>
                                <img
                                    src="../../assets/img/xiajiantou.png"
                                    alt=""
                                />
                            </li>
                        </ul>
                        <div class="ziying l">
                            <input
                                class="l"
                                type="checkbox"
                                :checked="selfSupportChecked"
                            />平台自营
                        </div>
                        <div class="l shangpin">
                            商品所在地：
                            <select class="r" name="">
                                <option value="">不限地区</option>
                                <option>不限地区</option>
                                <option>不限地区</option>
                                <option>不限地区</option>
                                <option>不限地区</option>
                            </select>
                        </div>
                        <div class="r next">
                            <span class="button">上一页</span>
                            <span class="button">下一页</span>
                        </div>
                    </div>
                    <div class="bottom">
                        <ul class="l">
                            <li class="bagli l">
                                <img class="bag" src="../../assets/img/yi-7.png" />
                                <ul class="samllul l">
                                    <li class="l">
                                        <img class="samll" src="../../assets/img/yi-7.png" />
                                    </li>
                                    <li class="l">
                                        <img class="samll" src="../../assets/img/yi-12.png" />
                                    </li>
                                </ul>
                                <p class="l">数码印刷<br>尺寸类型：制造尺寸</p>
                                <div class="l pice">
                                    <span>￥ 3.57/只</span>
                                    <span style="display:inline-block;margin-left:20px;font-size:13px;color:#656565;float:right;margin-right:10px;">已售2件</span>
                                </div>
                                <div class="buy l">
                                    <span class="g-collection">
                                        <i class="l like"></i>
                                        <span>收藏</span>
                                    </span>
                                </div>
                            </li>
                            <li class="bagli l">
                                <img class="bag" src="../../assets/img/yi-12.png" />
                                <ul class="samllul l">
                                    <li class="l">
                                        <img class="samll" src="../../assets/img/yi-12.png" />
                                    </li>
                                    <li class="l">
                                        <img class="samll" src="../../assets/img/yi-7.png" />
                                    </li>
                                </ul>
                                <p class="l">数码印刷<br>尺寸类型：制造尺寸</p>
                                <div class="l pice">
                                    <span>￥ 3.57/只</span>
                                    <span style="display:inline-block;margin-left:20px;font-size:13px;color:#656565;float:right;margin-right:10px;">已售2件</span>
                                </div>
                                <div class="buy l">
                                    <span class="g-collection">
                                        <i class="l like"></i>
                                        <span>收藏</span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <foot-com></foot-com>
        <back-top></back-top>
    </div>
</template>

<script>
import newProduct from "../../common/newProductForStd.vue";
export default {
    name: 'standardProduct',
    data() {
        return {
            show: false,
            show1: false,
            onoff: false,
            onoff1: false,
            selfSupportChecked: true,
        }
    },
    methods: {
        open(s) {
            if (s == 1) {
                this.onoff = !this.onoff;
            } else {
                this.onoff1 = !this.onoff1;
            }
        },
    },
    components: {
        newProduct
    },
}
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
.standardProduct {
    .header {
        height: 46px;
        line-height: 46px;
        font-size: 12px;
        color: #636260;
        img {
            margin: 17px 7px 0 0;
        }
        .shouye {
            cursor: pointer;
        }
        .xiala {
            color: #D02629;
            display: inline-block;
            width: 82px;
            height: 25px;
            border: 1px solid #d1d1d1;
            text-align: center;
            line-height: 23px;
            margin-left: 7px;
            position: relative;
            cursor: pointer;
        }
    }
    .choose {
        overflow: hidden;
        border: 1px solid #e5e5e5;
        margin: 10px 0;
        .g-main-n:last-child {
            border-bottom: none;
        }
        .g-main-n {
            width: 100%;
            overflow: hidden;
            padding-left: 24px;
            border-bottom: 1px dashed #f5f5f5;
            position: relative;
            .q_class_list {
                height: 55px;
                width: 90%;
                overflow: hidden;
                ul {
                    li {
                        line-height: 55px;
                        margin-right: 20px;
                        color: #333333;
                        cursor: pointer;
                        &:hover {
                            color: #d02629;
                        }
                    }
                }
            }
             .down-arrow {
                float: right;
                padding: 30px 20px 0 0;
            }
            .q_class_list.active {
                height: auto;
            }
            .g-btn {
                position: absolute;
                top: 22px;
                right: 50px;
                cursor: pointer;
                &:hover {
                    color: #d02629;
                }
            }
        }
        span {
            line-height: 55px;
            font-size: 12px;
            color: #bababa;
        }
    }
    .new {
        overflow: hidden;
        .right {
            width: 982px;
            .top {
                height: 40px;
                background: #f9f9f9;
                border: 1px solid #e3e3e3;
                .theard {
                    li {
                        float: left;
                        text-align: center;
                        line-height: 40px;
                        font-size: 12px;
                        color: #555;
                        border-right: 1px solid #e3e3e3;
                        width: 60px;
                        cursor: pointer;
                    }
                    li:nth-of-type(1) {
                        width: 74px;
                    }
                    li:nth-of-type(2) {
                        width: 49px;
                    }
                    .active {
                        background: white;
                    }
                    .actives {
                        background: #fff;
                        color: #d02629;
                        height: 39px;
                    }
                }
                .ziying {
                    margin-left: 52px;
                    line-height: 40px;
                    font-size: 12px;
                    input {
                        margin: 14px 7px 0 0;
                    }
                }
                .shangpin {
                    line-height: 40px;
                    margin-left: 78px;
                    font-size: 12px;
                    select {
                        height: 20px;
                        width: 78px;
                        margin-top: 10px;
                        outline: none;
                        option {
                            font-size: 12px;
                        }
                    }
                }
                .next {
                    margin: 9px 16px 0 0;
                    span {
                        width: 48px;
                        height: 20px;
                        border: 1px solid #e5e5e5;
                        font-size: 12px;
                    }
                }
            }
            .bottom {
                margin-top: 20px;
                overflow: hidden;
                ul {
                    .bagli {
                        width: 230px;
                        height: 388px;
                        border: 1px solid #f1f1f1;
                        margin-bottom: 15px;
                        margin-left: 20px;
                        .bag {
                            margin: 5px;
                            width: 220px;
                            height: 220px;
                            cursor: pointer;
                        }
                        .samllul {
                            margin: 6px 5px;
                            height: 30px;
                            display: block;
                            width: 100%;
                            overflow: hidden;
                            box-sizing: border-box;
                            li {
                                box-sizing: border-box;
                                margin-right: 8px;
                                border: 1px solid #ddd;
                                img {
                                    width: 28px;
                                    height: 28px;
                                }
                            }
                            li.active {
                                border-color: #d02629;
                            }
                            li:last-child {
                                margin-right: 0;
                            }
                        }
                        .pice {
                            width: 100%;
                            margin-top: 10px;
                            margin-left: 5px;
                            span:nth-of-type(1) {
                                color: #de2d35;
                                font-size: 13px;
                            }
                        }
                        p {
                            cursor: pointer;
                            width: 206px;
                            height: 40px;
                            line-height: 20px;
                            font-size: 12px;
                            color: #5f5f5f;
                            margin-left: 5px;
                            display: -webkit-box;
                            overflow: hidden;
                            white-space: normal !important;
                            text-overflow: ellipsis;
                            word-wrap: break-word;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            &:hover {
                                color: #d02629;
                            }
                        }
                        .buy {
                            margin: 10px 0 0 9px;
                            input {
                                margin: 2px 7px 0 0;
                            }
                            span {
                                color: #717171;
                                font-size: 13px;
                                float: left;
                                cursor: pointer;
                                margin-top: 3px;
                            }
                            .g-collection {
                                margin-left: 10px;
                                .like {
                                    width: 25px;
                                    height: 25px;
                                    background: url(../../assets/img/heat_null.png) no-repeat;
                                    background-size: 100% 100%;
                                    margin-right: 2px;
                                }
                            }
                            img {
                                width: 17px;
                                height: 17px;
                            }
                        }
                        .car {
                            margin: 0px 14px 0 0;
                            width: 30px;
                            height: 30px;
                        }
                        &:hover {
                            border-color: #d02629;
                        }
                    }
                    .bagli:nth-of-type(1) {
                        margin-left: 0;
                    }
                    .bagli:nth-of-type(5) {
                        margin-left: 0;
                    }
                    .bagli:nth-of-type(9) {
                        margin-left: 0;
                    }
                    .bagli:nth-of-type(13) {
                        margin-left: 0;
                    }
                    .bagli:nth-of-type(17) {
                        margin-left: 0;
                    }
                }
            }
        }
    }
}
</style>