<template>
    <div id="home" ref="home">
        <common-header v-on:childToParent="onChildClick"></common-header>
        <head-com :flag="flag" v-on:childToParent="onClick"></head-com>
        <div class="banner">
            <div class="banner-center">
                <div class="banner-img">
                    <el-carousel
                        :interval="5000"
                         arrow="always"
                        :height="bannerHeight"
                    >
                        <el-carousel-item v-for="item in banner" :key="item.id">
                            <a :href="item.ad_link" style="pointer-events:auto; ">
                                <img :src="URL + item.pic_url" />
                            </a>
                        </el-carousel-item>

                        <!-- <img src="../../assets/img/Clip.png" /> -->
                        
                        <!-- <div id="apDiv2">
                            <div class="denglu r">
                            <img class="touxiang" @click="HeadPortrait" v-if="userInfo.userHeaderImg" :src="URL+userInfo.userHeaderImg"/>
                            <img class="touxiang" @click="HeadPortrait" v-else src="../../assets/img/default-head.png"/>
                            <h3 class="l" v-if="userInfo.userName!=null"><span
                                class="user-name text1-hidden">Hi, {{userInfo.userName}}</span></h3>
                            <h3 class="l" v-else>Hi,欢迎来到{{$constant.mainTitle}}</h3>
                            <div class="qdl l" v-if="userInfo.userName==null">
                                <span class="qingdenglu both" @click="logIn">请登录</span>
                                <router-link to="agreement" class="kaidian both">我要开店</router-link>
                            </div>
                            <div class="qdl l" v-else>
                                <router-link class="qingdenglu both" to='myOrder?id=1'>查看订单</router-link>
                                <router-link to="personalData" class="kaidian both">查看资料</router-link>
                            </div>
                            <h4 class="l">公告</h4>
                            <div class="seamless-warp wufeng l">
                                <ul class="item">
                                <li @click="Announcement(item.id)" v-for="(item,index) in items" :key="index">{{item.title}}</li>
                                </ul>
                            </div>
                            <h4 class="l rukou">快捷入口</h4>
                            <ul class="ul l">
                                <li>
                                <a href="javascript:;" @click="toLink('ecentBrowse')">
                                    <i class="el-icon-view"></i><br/> 我的浏览
                                </a>
                                </li>
                                <li>
                                <a href="javascript:;" @click="toLink('collect')">
                                    <img src="../../assets/img/heart.jpg" style="width: auto; height: auto;" /> 我的收藏
                                </a>
                                </li>
                                <li>
                                <a href="javascript:;" @click="toLink('myOrder',0)">
                                    <i class="el-icon-date"></i>
                                    <br/>我的订单
                                </a>
                                <router-link to="myOrder?id=1">

                                </router-link>
                                </li>
                            </ul>
                            </div>
                        </div> -->
                    </el-carousel>
                </div>
                
            </div>
        </div>
        <div class="center">
            <div class="wti-sk wrapper">
                <div class="sk_inner">
                    <div class="sk_hd">
                        <img src="../../assets/img/rushbuy.jpg" alt="" />
                    </div>
                    <div class="sk_bd">
                        <div class="sk_list slider_list">
                            <div class="sk_list_inner">
                                <swiper class="swiper" :options="swiperOption">
                                    <swiper-slide
                                        v-for="(item, index) in panicList"
                                        :key="index">
                                        <div class="sk_item" @click="toRushBuy(item.goods_id)">
                                                <div class="sk_item_lk">
                                                    <div class="goods-thumb">
                                                        <img
                                                            :src="
                                                                URL +
                                                                    item.pic_url
                                                            "
                                                        />
                                                    </div>
                                                    <p
                                                        class="sk_item_name"
                                                        @mouseenter="
                                                            updateXY(
                                                                item.title,
                                                                $event
                                                            )
                                                        "
                                                        @mouseleave="
                                                            updataFullFlag
                                                        "
                                                    >
                                                        {{ item.title }}
                                                    </p>
                                                    <div class="sk_item_price">
                                                        <span
                                                            class="sk_item_price_new"
                                                            ><span
                                                                >&yen;{{
                                                                    item.panic_price
                                                                }}</span
                                                            ></span
                                                        ><span
                                                            class="sk_item_price_origin"
                                                            ><span
                                                                >&yen;{{
                                                                    item.price_member
                                                                }}</span
                                                            ></span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                    </swiper-slide>
                                    <!-- <swiper-slide>
                                        <div class="sk_item">
                                                <div class="sk_item_lk">
                                                    <div class="goods-thumb">
                                                        <img src="../../assets/img/yi-1.png" />
                                                    </div>
                                                    <p class="sk_item_name">钉枪包装盒材质瓦楞：T414F-EB</p>
                                                    <div class="sk_item_price">
                                                        <span class="sk_item_price_new">
                                                            <span>&yen;98.00</span>
                                                        </span>
                                                        <span class="sk_item_price_origin">
                                                            <span>&yen;1398.00</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="sk_item">
                                                <div class="sk_item_lk">
                                                    <div class="goods-thumb">
                                                        <img src="../../assets/img/yi-2.png" />
                                                    </div>
                                                    <p class="sk_item_name">传感器彩盒材质瓦楞：U4G-E</p>
                                                    <div class="sk_item_price">
                                                        <span class="sk_item_price_new">
                                                            <span>&yen;998.00</span>
                                                        </span>
                                                        <span class="sk_item_price_origin">
                                                            <span>&yen;299.00</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="sk_item">
                                                <div class="sk_item_lk">
                                                    <div class="goods-thumb">
                                                        <img src="../../assets/img/yi-3.png" />
                                                    </div>
                                                    <p class="sk_item_name">水泵彩箱材质瓦楞：T414F-BC</p>
                                                    <div class="sk_item_price">
                                                        <span class="sk_item_price_new">
                                                            <span>&yen;1888.00</span>
                                                        </span>
                                                        <span class="sk_item_price_origin">
                                                            <span>&yen;3968.00</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="sk_item">
                                                <div class="sk_item_lk">
                                                    <div class="goods-thumb">
                                                        <img src="../../assets/img/yi-4.png" />
                                                    </div>
                                                    <p class="sk_item_name">工作台彩箱材质瓦楞：U43435Q</p>
                                                    <div class="sk_item_price">
                                                        <span class="sk_item_price_new">
                                                            <span>&yen;68.00</span>
                                                        </span>
                                                        <span class="sk_item_price_origin">
                                                            <span>&yen;99.00</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="sk_item">
                                                <div class="sk_item_lk">
                                                    <div class="goods-thumb">
                                                        <img src="../../assets/img/yi-5.png" />
                                                    </div>
                                                    <p class="sk_item_name">桌上型小气炉彩箱</p>
                                                    <div class="sk_item_price">
                                                        <span class="sk_item_price_new">
                                                            <span>&yen;0..01</span>
                                                        </span>
                                                        <span class="sk_item_price_origin">
                                                            <span>&yen;588.00</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                    </swiper-slide> -->
                                    <div class="swiper-button-prev" slot="button-prev"></div>
                                    <div class="swiper-button-next" slot="button-next"></div>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dianpu">
                <div class="left l">
                    <img class="l" src="../../assets/img/dianpu.jpg" />
                </div>
                <ul class="r">
                    <li
                        class="l right"
                        v-for="(pinpai, index) in pinpais"
                        :key="index"
                    >
                        <img :src="URL + pinpai.store_logo" />
                        <div class="click">
                            <span
                                @click="
                                    $router.push({
                                        path: '/storehome',
                                        query: {
                                            id: pinpai.id
                                        }
                                    })
                                "
                                >点击进入</span
                            >
                        </div>
                    </li>
                    <!-- <li class="l right">
                        <img src="../../assets/img/shop.jpg" />
                        <div class="click">
                            <span>点击进入</span>
                        </div>
                    </li>
                    <li class="l right">
                        <img src="../../assets/img/storefuzhu.jpg" />
                        <div class="click">
                            <span>点击进入</span>
                        </div>
                    </li>

                    <li class="another" @click="anotherFun">
                        <img :src="huanyipi" />
                        <p>换一批</p>
                    </li> -->
                </ul>
            </div>
            <!-- <div class="various-lists">
                <div
                    class="list"
                    v-for="(item,index) in goodsType"
                    :key="index"
                    @click="toProductList(item,1)"
                >
                    <span class="title">{{item.name}}</span>
                    <div class="subtitle">{{item.describe}}</div>
                    <div class="img-list">
                        <img v-for="items in item.goods" :key="items.id" :src="URL + items.pic_url" alt />
                    </div>
                </div>
            </div> -->
            
            <div
                class="gongyi same"
                v-for="(item, page) in allFloor"
                :key="page"
            >
                <h1>{{ page + 1 }}F {{ item.floor.class_name }}</h1>
                <ul class="l tabul">
                    <li
                        class="l tab "
                        :key="index"
                        v-bind:class="{ active: isactive[page] == index }"
                        @click="tab(index, page)"
                        v-for="(gongyis, index) in gongyi"
                    >
                        {{ gongyis }}
                    </li>
                </ul>
                <div class="huaping l" @click="goToGoodsClass(item, 1)">
                    <img
                    
                        class="l classImg"
                        v-lazy="
                            item.floor.pic_url === ''
                                ? classImg 
                                : URL + item.floor.pic_url    
                        "
                        
                    />
                    <div class="bottom l">
                        <ul class="bottomul">
                            <li
                                class="l bottomli"
                                @click="entryClass(jingruis)"
                                v-for="(jingruis, index) in item.classTwo"
                                :key="index"
                            >
                                {{ jingruis.class_name }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="swiper l" @mouseover="stop()" @mouseout="move()">
                    <div class="slideshow">
                        <el-carousel
                            :interval="5000"
                            arrow="always"
                            :height="imgHeight"
                        >
                            <el-carousel-item
                                v-for="(img, index) in item.imgArray"
                                :key="index"
                            >
                                <img
                                    :src="URL + img.pic_url
                                    "
                                    @click="goto(img)"
                                />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="showdiv r" v-if="tabindex == 0">
                    <ul class="showul l">
                        <li
                            :key="index"
                            class="showli l"
                            @click="entryGoods(thing)"
                            v-for="(thing, index) in item.goods"
                        >
                            <img
                                v-if="thing.pic_url"
                                class="hp w_h"
                                :src="URL + thing.pic_url"
                            />
                            <img
                                v-else
                                class="hp w_h"
                                src="../../assets/img/left.jpg"
                            />
                            <p
                                class="jieshao"
                                @mouseenter="updateXY(thing.title, $event)"
                                @mouseleave="updataFullFlag"
                            >
                            <el-dropdown v-if="thing.store_grade_name">
                                <span class="first-name">{{ thing.store_grade_name }}</span>
                                <el-dropdown-menu slot="dropdown" v-if="thing.store_grade_classification">
                                <el-dropdown-item>{{thing.store_grade_classification}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                            &nbsp;{{ thing.title }}
                            </p>
                            <div class="jiage l">
                                ￥
                                <span>{{ thing.goods_price }}/只</span>
                                <div
                                    style="margin-left:40px;display:inline-block;font-size:12px;color:#656565"
                                >
                                    已售{{ thing.sales_sum }}件
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="showdiv r" v-else>
                    <ul class="showul l">
                        <li
                            :key="index"
                            class="showli l"
                            @click="entryGoods(thing)"
                            v-for="(thing, index) in item.goods"
                        >
                            <img
                                v-if="thing.pic_url"
                                class="hp w_h"
                                :src="URL + thing.pic_url"
                            />
                            <img
                                v-else
                                class="hp w_h"
                                src="../../assets/img/left.jpg"
                            />
                            <p
                                class="jieshao"
                                @mouseenter="updateXY(thing.title, $event)"
                                @mouseleave="updataFullFlag"
                            >
                            <el-dropdown v-if="thing.store_grade_name">
                                <span class="first-name">{{ thing.store_grade_name }}</span>
                                <el-dropdown-menu slot="dropdown" v-if="thing.store_grade_classification">
                                <el-dropdown-item>{{thing.store_grade_classification}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                            &nbsp;{{ thing.title }}
                            </p>
                            <div class="jiage l">
                                ￥
                                <span>{{ thing.goods_price }}/只</span>
                                <div
                                    style="margin-left:40px;display:inline-block;font-size:12px;color:#656565"
                                >
                                    已售{{ thing.sales_sum }}件
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <img
                    v-show="!item.button.hasOwnProperty('length')"
                    class="bottomnav"
                    :src="URL + item.button.pic_url"
                    @click="goto(item.button)"
                />
            </div>
            <!-- <div class="gongyi same">
                <h1>1F 标准品</h1>
                <ul class="l tabul">
                    <li class="l tab" style="color: red">新品推荐</li>
                    <li class="l tab">热卖商品</li>
                    <li class="l tab">猜您喜欢</li>
                </ul>
                <div class="huaping l">
                    <img class="l classImg" src="../../assets/img/yi-clip.png"/>
                    <div class="bottom l">
                        <ul class="bottomul">
                            <li class="l bottomli">烹饪锅具</li>
                            <li class="l bottomli">刀剪菜板</li>
                            <li class="l bottomli">收纳保鲜</li>
                            <li class="l bottomli">餐具</li>
                        </ul>
                    </div>
                </div>
                <div class="swiper l" @mouseover="stop()" @mouseout="move()">
                    <div class="slideshow">
                        <el-carousel
                            :interval="5000"
                            arrow="always"
                            :height="imgHeight"
                        >
                            <el-carousel-item>
                                <img
                                    src="../../assets/img/yi-6.png" />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="showdiv r">
                    <ul class="showul l">
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-7.png"
                            />
                            <p class="jieshao">
                            &nbsp;GR60水泵纸箱制造尺寸：26x15.2x18.5 cm</p>
                            <div class="jiage l">￥<span>5.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-8.png"
                            />
                            <p class="jieshao">
                            &nbsp;清洗机制造尺寸： 65x41.5x53.5cm</p>
                            <div class="jiage l">￥<span>3.57/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-9.png"
                            />
                            <p class="jieshao">
                            &nbsp;气钉枪彩箱制造尺寸：27x25.3x6cm</p>
                            <div class="jiage l">￥<span>6.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-10.png"
                            />
                            <p class="jieshao">
                            &nbsp;GR60水泵纸箱制造尺寸：26x15.2x18.5 cm</p>
                            <div class="jiage l">￥<span>5.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-11.png"
                            />
                            <p class="jieshao">
                            &nbsp;JET100M彩箱制造尺寸： 65x41.5x53.5cm</p>
                            <div class="jiage l">￥<span>3.57/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-12.png"
                            />
                            <p class="jieshao">
                            &nbsp;DJ02548彩箱制造尺寸：27x25.3x6cm</p>
                            <div class="jiage l">￥<span>6.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <img
                    class="bottomnav"
                    src="../../assets/img/yi-13.png"
                />
            </div>

            <div class="gongyi same">
                <h1>2F 标准品</h1>
                <ul class="l tabul">
                    <li class="l tab" style="color: red">新品推荐</li>
                    <li class="l tab">热卖商品</li>
                    <li class="l tab">猜您喜欢</li>
                </ul>
                <div class="huaping l">
                    <img class="l classImg" src="../../assets/img/yi-clip.png"/>
                    <div class="bottom l">
                        <ul class="bottomul">
                            <li class="l bottomli">烹饪锅具</li>
                            <li class="l bottomli">刀剪菜板</li>
                            <li class="l bottomli">收纳保鲜</li>
                            <li class="l bottomli">餐具</li>
                        </ul>
                    </div>
                </div>
                <div class="swiper l" @mouseover="stop()" @mouseout="move()">
                    <div class="slideshow">
                        <el-carousel
                            :interval="5000"
                            arrow="always"
                            :height="imgHeight"
                        >
                            <el-carousel-item>
                                <img
                                    src="../../assets/img/yi-6.png" />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="showdiv r">
                    <ul class="showul l">
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-7.png"
                            />
                            <p class="jieshao">
                            &nbsp;GR60水泵纸箱制造尺寸：26x15.2x18.5 cm</p>
                            <div class="jiage l">￥<span>5.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-8.png"
                            />
                            <p class="jieshao">
                            &nbsp;清洗机制造尺寸： 65x41.5x53.5cm</p>
                            <div class="jiage l">￥<span>3.57/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-9.png"
                            />
                            <p class="jieshao">
                            &nbsp;气钉枪彩箱制造尺寸：27x25.3x6cm</p>
                            <div class="jiage l">￥<span>6.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-10.png"
                            />
                            <p class="jieshao">
                            &nbsp;GR60水泵纸箱制造尺寸：26x15.2x18.5 cm</p>
                            <div class="jiage l">￥<span>5.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-11.png"
                            />
                            <p class="jieshao">
                            &nbsp;JET100M彩箱制造尺寸： 65x41.5x53.5cm</p>
                            <div class="jiage l">￥<span>3.57/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-12.png"
                            />
                            <p class="jieshao">
                            &nbsp;DJ02548彩箱制造尺寸：27x25.3x6cm</p>
                            <div class="jiage l">￥<span>6.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <img
                    class="bottomnav"
                    src="../../assets/img/yi-13.png"
                />
            </div>

            <div class="gongyi same" v-for="i in 4" :key="i">
                <h1>3F 标准品</h1>
                <ul class="l tabul">
                    <li class="l tab" style="color: red">新品推荐</li>
                    <li class="l tab">热卖商品</li>
                    <li class="l tab">猜您喜欢</li>
                </ul>
                <div class="huaping l">
                    <img class="l classImg" src="../../assets/img/yi-clip.png"/>
                    <div class="bottom l">
                        <ul class="bottomul">
                            <li class="l bottomli">烹饪锅具</li>
                            <li class="l bottomli">刀剪菜板</li>
                            <li class="l bottomli">收纳保鲜</li>
                            <li class="l bottomli">餐具</li>
                        </ul>
                    </div>
                </div>
                <div class="swiper l" @mouseover="stop()" @mouseout="move()">
                    <div class="slideshow">
                        <el-carousel
                            :interval="5000"
                            arrow="always"
                            :height="imgHeight"
                        >
                            <el-carousel-item>
                                <img
                                    src="../../assets/img/yi-6.png" />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="showdiv r">
                    <ul class="showul l">
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-7.png"
                            />
                            <p class="jieshao">
                            &nbsp;GR60水泵纸箱制造尺寸：26x15.2x18.5 cm</p>
                            <div class="jiage l">￥<span>5.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-8.png"
                            />
                            <p class="jieshao">
                            &nbsp;清洗机制造尺寸： 65x41.5x53.5cm</p>
                            <div class="jiage l">￥<span>3.57/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-9.png"
                            />
                            <p class="jieshao">
                            &nbsp;气钉枪彩箱制造尺寸：27x25.3x6cm</p>
                            <div class="jiage l">￥<span>6.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-10.png"
                            />
                            <p class="jieshao">
                            &nbsp;GR60水泵纸箱制造尺寸：26x15.2x18.5 cm</p>
                            <div class="jiage l">￥<span>5.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-11.png"
                            />
                            <p class="jieshao">
                            &nbsp;JET100M彩箱制造尺寸： 65x41.5x53.5cm</p>
                            <div class="jiage l">￥<span>3.57/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                        <li class="showli l">
                            <img
                                class="hp w_h"
                                src="../../assets/img/yi-12.png"
                            />
                            <p class="jieshao">
                            &nbsp;DJ02548彩箱制造尺寸：27x25.3x6cm</p>
                            <div class="jiage l">￥<span>6.90/只</span>
                                <div style="margin-left:40px;display:inline-block;font-size:12px;color:#656565">已售2件</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> -->

            <div class="more">
                <span v-if="floorIndex > 0 && floorIndex <= floorCount" @click="getFloor"
                    >加载更多...</span
                >
                <span v-else class="isEnd"
                    ></span
                >
            </div>
        </div>
        <foot-com></foot-com>
        <back-top></back-top>
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
import $ from "jquery";
import hp from "@/assets/img/hp.jpg";
import avatar from "@/assets/img/gongniu.jpg";
import avatars from "@/assets/img/hp1.jpg";
import ns from "@/assets/img/ns.jpg";
import chun from "@/assets/img/chun.png";
import maotai from "@/assets/img/maotai.png";
import huanyipi from "@/assets/img/huanyipi.jpg";
import banner1 from "@/assets/img/banner1.jpg";
import banner2 from "@/assets/img/banner2.jpg";
import banner3 from "@/assets/img/banner3.jpg";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import "swiper/dist/css/swiper.min.css";

export default {
    name: 'swiper-example-loop-group',
    title: 'Loop mode with multiple slides per group',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
        return {
            swiperOption: {
            slidesPerView: 5,
            autoplay: 4000,
            slidesPerGroup: 1,
            loop: true,
            prevButton: ".swiper-button-prev",
            nextButton: ".swiper-button-next"
            },
            huanyipi: huanyipi,
            animate: false, //广告滚动处控制
            allFloor: [], //所有楼层的数据
            floorIndex: 1,
            tabindex: 0,
            all: false,
            onoff: "",
            img_url: maotai,
            avatar: avatar,
            fullTitle: "",
            displayTitleStyle: {
                top: "",
                bottom: ""
            },
            nav: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            avatars: avatars,
            display: null,
            showClassify: false,
            marksArr: [], //比对图片索引的变量
            isbackcolor: "",
            pinpais: [],
            class_id: 0, //分类ID
            iTem: [],
            condata: [],
            condata2: [],
            condata3: [],
            Array: [],
            gongyi: ["新品推荐", "热卖商品", "猜您喜欢"],
            arr: [],
            items: [],
            isactive: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            isBottom: false,
            bannerArr: [banner1, banner2, banner3],
            banner: [],
            bannerHeight: "500px",
            imgHeight: "488px",
            userInfo: {},
            panicList: [],
            panicAd: {},
            fullTitieFlag: false,
            Go: 0,
            flag:true,
            fromChild: '',
            isEnd: false,
            floorCount: null,
            //  goodsType: [],
            classImg: hp,
        };
    },

    created() {
        // this.getGoodsType();
        this.floorCount = localStorage.getItem('countF')
        this.getFloor();
        if (sessionStorage.getItem('userHeaderImg') || sessionStorage.getItem('userName')) {
            this.userInfo = {
                userName: sessionStorage.getItem('userName'),
                userHeaderImg: sessionStorage.getItem('userHeaderImg')
            }
        };
        this.anotherFun();
    },
    computed: {
        
        
    },
    mounted() {    
        this.getHome();
        this.getPanicIndex();
        setInterval(this.scroll, 3000);
        var that = this;
        $(window).scroll(function() {
            if (!that.$refs.home) return;
            var bot = 700;
            if (
                that.isBottom == false &&
                bot + $(window).scrollTop() >=
                    $(document).height() - $(window).height()
            ) {
                that.isBottom = true;
                if (that.floorIndex >0) {
                    that.floorIndex++;
                    that.getFloor();
                }
            }
        });
    },
    methods: {
        // getGoodsType() {
        //     this.HTTP(this.$httpConfig.goodsType, {}, 'post').then((res) => {
		// 		this.goodsType = res.data.data;
        //     });
        // },
        onChildClick (value) {
            this.fromChild = value
            if(this.fromChild == 'false') {
                location.reload();
            }
        },
        onClick(value) {
            this.floorCount = value
        },
        goToGoodsClass(item, type) {
            window.open(
                window.location.origin +
                    "/goodsClass?class_id=" +
                    item.classTwo[0].id +
                    "&id=" +
                    item.floor.id +
                    "&class_name=" +
                    item.floor.class_name +
                    "&type=" +
                    type
            );
        },
        toProductList(item, type) {
            window.open(
                window.location.origin +
                    "/productList?attr_type=" +
                    item.id +
                    "&class_name=" +
                    item.name +
                    "&type=" +
                    type
            );
        },
        //轮播跳转
        goto(img) {
            if (img && img.hasOwnProperty("ad_link")) {
                location.href = img.ad_link;
            }
            return;
        },
        toRushBuy(id) {
            this.$router.push({
                name: "introduce",
                params: {
                    id: id
                }
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
        getPanicIndex() {
            this.HTTP(this.$httpConfig.panicIndex, {}, "post").then(res => {
                if (res.data.status == 1) {
                    this.panicList = res.data.data.panic;
                    this.panicAd = res.data.data.ad;
                }
            });
        },
        //头像判断登录跳转
        HeadPortrait() {
            if (this.userInfo.userName != null) {
                this.$router.push({
                    name: "greet"
                });
            } else {
                this.$router.push({
                    name: "passwordLogin"
                });
            }
        },
        toLink(l, n) {
            if (n == 0) {
                window.open(window.location.origin + "/" + l + "?id=1");
            } else {
                window.open(window.location.origin + "/" + l);
            }
        },
        toLink1(url) {
            location.href = url;
        },
        Announcement(id) {
            this.$router.push({
                name: "notice",
                params: {
                    id: id
                }
            });
        },
        anotherFun() {
            this.HTTP(this.$httpConfig.randStore, {}, "post").then(res => {
                this.pinpais = res.data.data;
            });
        },
        entryClass(jingruis) {
            this.Go++;
            window.open(
                window.location.origin +
                    "/goodsClass?class_id=" +
                    jingruis.id +
                    "&id=" +
                    this.Go +
                    "&class_name=" +
                    jingruis.class_name
            );
        },
        entryGoods(goods) {
            window.open(
                window.location.origin + "/shopsn_product?id=" + goods.id
            );
        },
        stop() {},
        move() {},
        getHome()   {

            //获取公告
            this.HTTP(this.$httpConfig.home, {}, "post")
                .then(res => {
                    this.items = res.data.data.announcement;
                    this.pinpais = res.data.data.store;
                    if (res.data.data.banner.length === 0) {
                        this.banner = this.bannerArr;
                    } else {
                        this.banner = res.data.data.banner;
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        },
        /*获取楼层*/
        async getFloor() {
            if (this.floorIndex > 0 && this.floorIndex <= this.floorCount) {
                await this.HTTP(
                    this.$httpConfig.homefLoor,
                    {
                        page: this.floorIndex
                    },
                    "post"
                )
                    .then(res => {
                         res.data.data.imgArray = res.data.data.middle;
                        this.allFloor.push(res.data.data);
                        this.marksArr.push(0);
                        for (var i = 0; i < this.floorIndex; i++) {
                            this.arr[i] =
                                this.allFloor[i].goods_news == []
                                    ? []
                                    : this.allFloor[i].goods_news;
                            this.allFloor[i].goods = this.allFloor[
                                i
                            ].goods_news;
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    });

                this.isBottom = false;
            }
        },
        scroll() {
            this.animate = true;
            setTimeout(() => {
                this.items.push(this.items[0]);
                this.items.shift();
                this.animate = false;
            }, 500);
        },
        logIn() {
            this.$router.push({
                name: "passwordLogin"
            });
        },
        tab(index, page) {
            let init = index;
            this.isactive[page] = init;
            this.tabindex = index;
            switch (index) {
                case 0:
                    {
                        this.allFloor[page].goods = this.allFloor[
                            page
                        ].goods_news;
                    }
                    break;
                case 1:
                    {
                        this.allFloor[page].goods = this.allFloor[
                            page
                        ].hotGoods;
                    }
                    break;
                case 2:
                    {
                        this.allFloor[page].goods = this.allFloor[
                            page
                        ].loveGoods;
                    }
                    break;
                default:
                    break;
            }
        }
    },
};
</script>

<style lang="less" scoped>
.el-dropdown-menu {
    position: absolute !important;
    margin: 5px -50px 0 0 !important;
    background-color: #FFF;
    border: 1px solid #de2d35;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.el-dropdown-menu__item {
  line-height: 10px !important;
  font-size: 12px !important;
  color:rgb(101, 101, 101) !important;
}
  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover{
    color:rgb(101, 101, 101) !important;
    background-color: #ffffff !important;
  }

.el-popper .popper__arrow {
  border-width: 6px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));   
}

.el-popper[x-placement^=bottom] .popper__arrow {
  border-bottom-color: red !important;
}
.el-popper .popper__arrow {
  border-width: 6px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
  
}
.el-popper .popper__arrow, .el-popper .popper__arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;  
}

</style>

<style type="text/css" scoped>
.full-display-title {
    position: absolute;
    z-index: 222;
    background: #ffffff;
    border: 1px solid #767676;
    padding: 4px;
    color: #575757;
}

.another {
    float: left;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.another img {
    margin-top: 5px !important;
    width: 20px !important;
    height: 20px !important;
}

.swiper-container {
    width: 100%;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    background: url(../../assets/img/home_bg.png) no-repeat;
    opacity: 0.5 !important;
    width: 19px;
    height: 29px;
    position: absolute;
    z-index: 2;
    top: 120px;
    cursor: pointer;
}

.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    background: url(../../assets/img/home_bg.png) no-repeat;
    opacity: 0.5 !important;
    width: 19px;
    height: 29px;
    position: absolute;
    z-index: 2;
    top: 120px;
    cursor: pointer;
}

.swiper-button-next, .swiper-container-rtl .swiper-button-next {
    background-position: -180px -40px;
    right: 0;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    background-position: -160px -40px;
    left: 0;
}
</style>

<style lang="less" scoped>
.wti-sk {
    height: 275px;
    margin-bottom: 30px;

    .sk_inner {
        background: #fff none repeat scroll 0 0;
        overflow: hidden;

        .sk_hd {
            color: #fff;
            float: left;
            height: 275px;
            position: relative;
            width: 190px;
            padding-top: 1.5%;

            img {
                width: 100%;
            }
        }

        .sk_bd {
            float: left;

            .sk_list {
                border-right: 1px solid #f0f0f0;
                float: left;
                height: 275px;
                overflow: hidden;
                position: relative;
                width: 1010px;

                .sk_list_inner {
                    height: 275px;
                    position: relative;
                    width: 1010px;

                    .sk_item {
                        float: left;
                        height: 275px;
                        position: relative;
                        width: 202px;

                        .sk_item_lk {
                            display: block;
                            height: 275px;
                            margin: auto;
                            position: relative;
                            text-align: center;
                            width: 198px;
                            color: #555555;
                            .goods-thumb {
                                width: 140px;
                                height: 140px;
                                overflow: hidden;
                                left: 50%;
                                margin-left: -70px;
                                position: absolute;
                                top: 40px;
                                transition: opacity 0.2s ease 0s;
                                img {
                                    max-width: 100%;
                                    transform: scale(1);
                                    transition: all 0.4s ease-in-out 0s;
                                    cursor: pointer;
                                }
                            }
                            .sk_item_name {
                                left: 0;
                                line-height: 30px;
                                overflow: hidden;
                                padding: 0 15px;
                                position: absolute;
                                text-overflow: ellipsis;
                                top: 190px;
                                white-space: nowrap;
                                width: 160px;
                                cursor: pointer;
                            }

                            .sk_item_name:hover {
                                color: #d02629;
                            }

                            .sk_item_price {
                                background: #e6382f none repeat scroll 0 0;
                                height: 20px;
                                left: 15px;
                                line-height: 20px;
                                padding: 1px;
                                position: absolute;
                                top: 228px;
                                width: 160px;

                                .sk_item_price_new {
                                    color: #ffffff;
                                    float: left;
                                    font-size: 14px;
                                    font-weight: bold;
                                    height: 20px;
                                    text-align: center;
                                    width: 80px;
                                }

                                .sk_item_price_origin {
                                    background: #fff none repeat scroll 0 0;
                                    color: #b7bcb8;
                                    float: left;
                                    font-size: 12px;
                                    height: 20px;
                                    text-align: center;
                                    text-decoration: line-through;
                                    width: 80px;
                                }
                            }
                        }
                    }

                    .sk_item:after {
                        background: #f0f0f0 none repeat scroll 0 0;
                        content: "";
                        display: block;
                        height: 275px;
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 1px;
                    }
                }
            }

            .sk_chn {
                float: left;
                height: 260px;
                position: relative;
                left: 10px;
                top: 8px;
                width: 190px;
                overflow: hidden;
                img {
                    width: 200px;
                    height: 260px;
                }
            }
        }
    }
}

.wrapper {
    width: 1200px;
    margin-top:90px;
}

.center {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.l {
    float: left;
}

.r {
    float: right;
}

.w_h {
    width: 140px;
    height: 140px;
}

#home {
    position: relative;

    .banner {
        width: auto;
        height: 400px;

        .banner-center {
            width: 100%;
            height: 100%;
            position: relative;

            .banner-img {
                top: 0;
                left: 0;
                img {
                    width:100%;
                    height:100%;
                }
            }
            #apDiv2 {
                position: absolute;
                pointer-events:none;
                left: 0;
                top: 0;
                width: 1200px;
                z-index: 2;
                opacity: 1;
                margin: 0 auto;
                margin: auto;
                left: 0;
                right: 0;
                bottom: 0;
            }
            
            .denglu {
                pointer-events:auto;
                top: 0;
                z-index: 10;
                margin: auto;
                left: 0;
                right: 0;
                bottom: 0;
                width: 204px;
                height: 480px;
                background: #fbfdfc;
                margin-top: 9px;

                .touxiang {
                    float: left;
                    margin: 10px 62px;
                    width: 82px;
                    height: 82px;
                    border-radius: 50%;
                    display: block;
                    cursor: pointer;
                }

                h3 {
                    text-align: center;
                    color: #767676;
                    font-size: 12px;
                    width: 100%;

                    .user-name {
                        display: inline-block;
                        max-width: 100px;
                    }
                }

                .qdl {
                    margin: 10px 0 0 27px;

                    .both {
                        float: left;
                        width: 68px;
                        text-align: center;
                        line-height: 22px;
                        height: 22px;
                        border: 1px solid #323232;
                        font-size: 12px;
                    }

                    .qingdenglu {
                        cursor: pointer;
                        color: #a8a8a8;
                    }

                    .kaidian {
                        color: #d02629;
                        border-color: #ac9549;
                        margin-left: 10px;
                        cursor: pointer;
                    }
                }

                .wufeng {
                    height: 180px;
                    margin: 10px 0 0;
                    overflow: hidden;

                    .item {
                        overflow: hidden;
                    }

                    li {
                        cursor: pointer;
                        width: 165px;
                        float: left;
                        line-height: 25px;
                        font-size: 12px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        padding-left: 22px;
                    }
                    li:hover {
                        color: red;
                    }
                }

                h4 {
                    width: 100%;
                    height: 24px;
                    line-height: 24px;
                    margin-top: 22px;
                    background: #eeeeee;
                    font-size: 12px;
                    color: #000000;
                    padding-left: 22px;
                }

                .rukou {
                    color: #434343;
                    margin-top: 11px;
                }

                .ul {
                    li {
                        float: left;
                        width: 68px;
                        border-right: 1px solid #eee;
                        height: 59px;
                        text-align: center;

                        img {
                            display: block;
                            margin: 16px auto 6px;
                        }

                        i {
                            margin-top: 14px;
                            margin-bottom: 5px;
                            color: #000;
                            font-size: 18px;
                        }

                        a {
                            color: #8f8f8f;
                            font-size: 12px;
                        }

                        &:hover a {
                            color: red;
                        }
                    }

                    li:last-child {
                        border: 0;
                    }
                }
            }  
        }
    }

    .paimai {
        width: 1200px;
        height: 170px;
        margin-top: 14px;
        display: flex;

        img {
            margin-right: 7px;
        }

        img:last-child {
            margin: 0;
        }
    }

    .dianpu {
        width: 100%;
        height: 307px;
        margin-top: 14px;

        .left {
            width: 387px;
            height: 305px;
            img {
                height: 300px;
            }
        }

        ul {
            margin-left: 9px;
            width: 801px;
            border: 0.5px solid #e8e8e8;
            li {
                width: 100px;
                height: 100px;
                border: 0.5px solid #e8e8e8;
                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                }

                .click {
                    display: none;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.6);
                    position: absolute;
                    top: 0;
                    left: 0;
                    cursor: pointer;

                    span {
                        display: block;
                        width: 64px;
                        height: 22px;
                        background: #d02629;
                        line-height: 22px;
                        text-align: center;
                        border-radius: 15px;
                        color: #f4e0bd;
                        font-size: 12px;
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        margin: auto;
                    }
                }

                &:hover .click {
                    display: block;
                }
            }
        }
    }

    // .various-lists {
    //     padding: 2%;
    //     display: flex;
    //     flex-wrap: wrap;
    //     background: #f1f1f1;
    //     .list {
    //         padding-top: 15px;
    //         border-radius: 10px;
    //         width: 15.7%;
    //         padding-bottom: 10px;
    //         background: #ffffff;
    //         margin-bottom: 10px;
    //         margin-left: 10px;
    //         .title {
    //             padding: 3px 10px;
    //             font-size: 15px;
    //             border: 1px solid orange;
    //             background: orange;
    //             margin: 0 10px 10px 10px;
    //             border-radius: 10px;
    //             color: #ffffff;   
    //         }
    //         .subtitle {
    //             font-size: 12px;
    //             padding-left: 12px;
    //             color: #999999;
    //             margin-top:10px;
    //         }
    //         .img-list {
    //             display: flex;
    //             align-items: center;

    //             img {
    //                 width: 60px;
    //                 height: 60px;
    //                 margin-left: 15px;
    //                 margin-top: 5px;
    //             }
    //         }
    //     }    
    // }
    .same {
        min-height: 550px;
        height: auto;
        margin-top: 15px;

        .same:first-child {
            margin-top: 24px;
        }

        h1 {
            font-size: 20px;
            color: #010101;
            float: left;
            line-height: 35px;
            width: 886px;
            border-bottom: 1px solid #e4393c;
        }

        .tabul {
            border-bottom: 1px solid #e4393c;

            .tab {
                width: 98px;
                height: 35px;
                line-height: 35px;
                text-align: center;
                border: 1px solid #e6e8e7;
                margin-right: 10px;
                border-bottom: 1px;
                background: #fff;
                cursor: pointer;
            }

            .active {
                border-color: #e4393c;
                transform: translateY(1px);
                border-bottom: 0;
                color: #e4393c;
            }

            .tab:last-child {
                margin: auto;
            }
        }

        .huaping {
            height: 488px;
            width: 210px;

            .classImg {
                width: 210px;
                height: 314px;
            }

            .bottom {
                height: 174px;
                width: 100%;
                background: #f6f6f6;

                .bottomul {
                    margin-top: 15px;

                    .bottomli {
                        width: 84px;
                        height: 32px;
                        background: #fff;
                        line-height: 32px;
                        text-align: center;
                        font-size: 12px;
                        margin: 5px 0 0 14px;
                        cursor: pointer;

                        &:hover {
                            color: red;
                        }
                    }
                }
            }
        }

        .swiper {
            width: 379px;
            height: 488px;
            overflow: hidden;
            position: relative;

            .slideshow {
                width: 379px;
                height: 488px;
                cursor: pointer;
            }
        }

        .showul {
            width: 611px;
            height: 488px;
            padding-left: 1px;
            border-right: 1px solid #e7e8e3;
            border-bottom: 1px solid #e7e8e3;

            .showli {
                width: 203px;
                height: 244px;
                cursor: pointer;

                img {
                    transition: all 300ms linear 300ms;
                    -webkit-transition: all 300ms linear 300ms;
                }

                img:hover {
                    -webkit-transform: scale(1.1); /*1.1放大值*/
                    -moz-transform: scale(1.1);
                    -o-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                }

                .hp {
                    margin: 15px 0 0 31px;
                }

                .jieshao {
                    height: 36px;
                    width: 147px;
                    line-height: 18px;
                    margin: 9px 0 0 31px;
                    font-size: 12px;
                    color: #656565;
                    display: -webkit-box;
                    overflow: hidden;
                    white-space: normal !important;
                    text-overflow: ellipsis;
                    word-wrap: break-word;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;

                    &:hover {
                        color: red;
                    }
                .first-name{
                    color: #ffffff;
                    background-color: #de2d35;
                    font-size: 12px;
                    border-radius: 3px;
                    padding: 0 7px 1px 7px;
                }
                }

                .jiage {
                    color: #f64e4d;
                    font-size: 13px;
                    margin: 12px 0 0 31px;
                }

                .gouwuche {
                    width: 30px;
                    cursor: pointer;
                    height: 30px;
                    background: url(../../assets/img/buyCart.png) no-repeat;
                    background-size: 100% 100%;
                    margin: 4px 28px 0 0;
                }
            }

            .showli:nth-child(3n) {
                border-right: 0;
            }
        }

        .bottomnav {
            width: 100%;
            margin-top: 12px;
            height: 100px;
            cursor: pointer;
        }
    }

    .more {
        text-align: center;
        height: 48px;
        line-height: 48px;
        color: #f0bf19;
        font-size: 17px;
        font-weight: bold;
        .isEnd{
            display: block;
        }
    }
}

</style>