<template>
    <div class="shopsn_product">
        <!-- <common-header v-on:childToParent="onChildClick"></common-header> -->
        <common-header></common-header>
        <head-com></head-com>
        <div class="center">

            <div class="header">
                <img class="l" src="../../assets/img/fangzi.jpg" />
                <span class="shouye">
                    <router-link to="home">首页></router-link>
                </span>
                <!-- <a @click="GoTo" class="xiala"
                    >{{ getTopClass(goodsData.class_id) }}
                    <i class="el-icon-arrow-down"></i>
                </a>
                <span>{{ goodsData.title }}</span> -->
                <a @click="$router.push('yangShen')" class="xiala">标准品</a>
                <span style="color: #D02629; padding-left: 10px">传感器彩盒</span>
            </div>

            <div class="top">
                <div class="left l">
                    <!-- <div class="bigImg" v-if="video && showVideo == false">
                        <img
                            v-if="defaultPicture"
                            :src="URL + defaultPicture"
                        />
                        <div id="winSelector"></div>
                    </div> -->
                     <div class="bigImg">
                        <img
                            src="../../assets/img/yi-16.png"
                        />
                        <div id="winSelector"></div>
                    </div>
                    <!-- <div class="see-video" v-if="video && showVideo == false" >
                        <img src="../../assets/img/videoplay.png" class="playimg" @click="showvideo(video)"/>
                    </div>
                    <div class="bigImg" v-show="video && showVideo == true">
                        <vue-core-video-player 
                            @ended="endedPlaying" class="playimg" :src="video"></vue-core-video-player>
                    </div> -->
                    <div class="smallImg spec-scroll">
                        <div class="scrollbutton smallImgUp disabled l">
                            <i class="el-icon-caret-left"></i>
                        </div>
                        <div id="imageMenu" class="img-list">
                            <!-- <ul :style="{ width: imgList.length * 75 + 'px' }">
                                <li
                                    @mouseover="styleChange(index, li.pic_url)"
                                    :key="index"
                                    v-for="(li, index) in imgList"
                                >
                                    <img
                                        :class="{ active: sign == index }"
                                        :src="URL + li.pic_url"
                                    />
                                </li>
                            </ul> -->
                            <ul>
                                <li>
                                    <img src="../../assets/img/yi-16.png" />
                                </li>
                                <li>
                                    <img src="../../assets/img/yi-2.png" />
                                </li>
                                <li>
                                    <img src="../../assets/img/yi-3.png" />
                                </li>
                                <li>
                                    <img src="../../assets/img/yi-4.png" />
                                </li>
                                <li>
                                    <img src="../../assets/img/yi-6.png" />
                                </li>
                            </ul>
                        </div>
                        <!-- <div
                            class="scrollbutton smallImgDown r"
                            :class="{ disabled: imgList.length < 5 }"
                        >
                            <i class="el-icon-caret-right"></i>
                        </div> -->
                        <div class="scrollbutton smallImgDown r">
                            <i class="el-icon-caret-right"></i>
                        </div>
                    </div>
                    <!-- <div id="bigView" v-if="showVideo == false">
                        <div class="big-img">
                            <img :src="URL + defaultPicture" />
                        </div>
                    </div> -->
                    <div class="fenxiang l">
                        <span class="share">
                            <i class="el-icon-share"></i>分享
                            <div class="bdsharebuttonbox share_content">
                                <a
                                    class="qzone_share share_btn"
                                    data-cmd="qzone"
                                ></a>
                                <a
                                    class="weibo_share share_btn"
                                    data-cmd="tsina"
                                ></a>
                                <a
                                    class="qq_share share_btn"
                                    data-cmd="sqq"
                                ></a>
                                <a
                                    class="weixin_share share_btn"
                                    data-cmd="weixin"
                                ></a>
                            </div>
                        </span>
                        <span @click="goodsCollection"
                            ><i class="el-icon-star-on"></i
                            >{{ collection_text1 }}</span
                        >
                        <!-- <span @click="handleNotice">举报</span> -->
                    </div>
                </div>  
                <div class="central l">
                    <!-- <p class="goods-title">{{ goodsData.title }}</p> -->
                    <p class="goods-title">传感器彩盒</p>
                    <!-- <p class="description">{{ goodsData.description }}</p> -->
                    <div class="price">
                        <!-- <span style="visibility: hidden;">hello</span> -->
                        <!-- <p class="l">
                            市场价
                            <span
                                >￥{{ goodsData.price_market || "0.00" }}</span
                            >
                        </p> -->

                        <!-- <p class="l">
                            售 &nbsp;&nbsp;价
                            <span> ￥{{ goodsData.price_member || 0.0 }}</span>
                            <span id="discount" @click="handleGoVip">
                                成为该店铺会员最高享受{{
                                    handleDiscount
                                }}折优惠</span
                            >
                        </p> -->
                        <p class="l">
                            售 &nbsp;&nbsp;价
                            <span>￥279.00</span>
                            <span>￥259.00</span>
                            <span>￥248.00</span>
                            <span>￥230.00</span>
                        </p>

                        <!-- <div class="couponSliceDiv" v-if="storeCouponList.length != 0">
                            优惠券
                            <el-dropdown>
                                <div class="couponSlice">
                                    <div v-if="showCoupon0">
                                    <img src="../../assets/img/couponaa.png"/>
                                    <p class="couponText">满{{storeCouponSlice1}}减{{storeCouponSlice0}}</p>
                                    </div>
                                    <div v-if="showCoupon1">
                                    <img src="../../assets/img/couponaa.png"/>
                                    <p class="couponText">满{{storeCouponSlice3}}减{{storeCouponSlice2}}</p>
                                    </div>
                                    <div v-if="showCoupon2">
                                    <img src="../../assets/img/couponaa.png"/>
                                    <p class="couponText">满{{storeCouponSlice5}}减{{storeCouponSlice4}}</p>
                                    </div>
                                </div>
                                <el-dropdown-menu slot="dropdown" :class="storeCouponList.length > 0 ? 'jj' : 'jjnone'">
                                <el-dropdown-item :class="storeCouponList.length > 0 ? 'kk' : 'kknone'">
                                    <div class="voucherBoxx">                                
                                        <ul>
                                            <li v-for="(voucher, index) in storeCouponList" :key="index">
                                                <div class="MoneyBox">
                                                    <span class="money">{{'￥' + voucher.money}}</span>
                                                </div>
                                                <div class="col">
                                                    <div class="row">
                                                        <span>{{voucher.name}}</span>
                                                        <span>{{'满' + voucher.condition + '元使用'}}</span>
                                                    </div>
                                                    <div class="row">
                                                        <span>{{voucher.use_start_time | formatDate}}</span>
                                                        <span>至</span>
                                                        <span>{{voucher.use_end_time | formatDate}}</span>
                                                    </div>
                                                </div>
                                                <div class="btn-mi">
                                                    <el-button v-if="voucher.taken == true" class="btnnn" type="mini" @click="CheckIsUseCoupon(voucher.id)">已领取</el-button>
                                                    <el-button v-else class="btn" type="mini" @click="CheckIsUseCoupon(voucher.id)">领取</el-button>
                                                </div>
                                            </li>
                                        </ul>  
                                    </div>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                                </el-dropdown>
                        </div> -->
                        <div class="couponSliceDiv">
                            起订量
                            <span>100 件</span>
                            <span>100 件</span>
                            <span>100 件</span>
                            <span>100 件</span>
                        </div>


                        <!-- <div class="activity-list l" v-if="fullGift && fullGift.goods && fullGift.goods.length != 0">
                            <span
                                >促&nbsp;&nbsp;&nbsp;销</span
                            >
                            <div>
                                <div
                                    class="activity" v-for="id in fullGift.goods" :key="id"
                                >
                                    <span class="man" >{{fullGift.name}}</span>
                                    <img
                                        @click="entryGoods(id.id)"
                                        :src="URL + id.pic_url"
                                        alt=""
                                    />
                                    <span class="num"
                                        >x{{ id.give_num }}</span
                                    >
                                    <span class="both"
                                        >(满{{ id.full }}元，数量{{
                                            id.give_count
                                        }}赠完即止)</span
                                    >
                                </div>
                                <div class="activity" v-if="reduction">
                                    <span class="man jian">{{reduction.name}}</span>
                                    <span class="both"
                                        >满{{ reduction.expense }}减{{
                                            reduction.cut
                                        }}</span
                                    >
                                </div>
                            </div>
                        </div>
                        <span style="visibility: hidden;">world</span> -->
                    </div>
                    <div class="dizhi">
                        <!-- <div
                            class="spec-group"
                            v-for="(item, index) in spec.spec_group"
                            :key="index"
                        >
                            <span class="group-name">{{ item.name }}</span>
                            <div class="spec-term-list" v-if="item.id == d.spec_id"
                                    @click="addClass(index, item.id, d.id)"
                                    v-for="(d, i) in spec.spec_children"
                                    :key="i"
                                    :class="{ active: d.default_spec, ifactive: d.default_spec }"
                                    @mouseenter="updateXY(d.item, $event)"
                                    @mouseleave="updataFullFlag">
                                <img :src="URL + d.pic_url" class="addspec-photo" v-if="d.pic_url"/>
                                <span class="spec-term-name" v-if="d.item">{{ d.item }}</span>
                            </div>
                        </div> -->

                        <p class="send-to">
                            <span class="send-to-span">配送至</span>
                            <!-- <span v-if="callStatus == 1">
                            <span v-if="deliveryCal == -1" class="yunfei">配送：免配送费</span>
                            <span v-else class="yunfei">配送：{{deliveryCal}} 元</span>
                            </span>
                            <span v-else>
                            <span v-if="freightCal == 0" class="yunfei">运费：卖家包邮</span>
                            <span v-else class="yunfei">运费：{{freightCal}} 元</span>
                            </span> -->
                            <span>
                            <span class="yunfei">运费 ：￥10.00</span>
                            </span>
                            <div class="tab-input" @click="callingArea">
                            <input v-if="addressAll == ''" placeholder="请选择地区" type="tel" class="mint-field-core" disabled v-model="addressAllData">
                            <input v-else placeholder="请选择地区" type="tel" class="mint-field-core" disabled v-model="addressAll">
                            <img class="tab-icon" src="../../assets/img/sort-bottom.png" />
                            </div>
                        </p>

                        <div class="popup-div" v-show="popupVisible">    
                            <div class="select1">
                                <ul class="address-area-tit">
                                    <li 
                                        :class="{active:showProvince}" 
                                        @click="selectedArea('province')">
                                        {{ province }}
                                        <img class="active-icon" src="../../assets/img/sort-bottom.png" />
                                        </li>    
                                    <li  
                                        v-if="choiceCity" 
                                        :class="{active:showCity}"
                                        @click="selectedArea('city')">
                                        {{ city }}
                                        <img v-if="choiceCity" class="active-icon" src="../../assets/img/sort-bottom.png" />
                                        </li>
                                    <li  
                                        v-if="choiceArea" 
                                        @click="selectedArea('area')"
                                        :class="{active:showArea}">
                                    {{ area }}
                                    <img v-if="choiceArea" class="active-icon" src="../../assets/img/sort-bottom.png" />
                                    </li>
                                    <li  
                                        v-if="choiceTown" 
                                        @click="selectedArea('town')"
                                        :class="{active:showTown}">
                                    {{ town }}
                                    <img v-if="choiceTown" class="active-icon" src="../../assets/img/sort-bottom.png" />
                                    </li>
                                    <img class="cross-icon" @click="cancelArea" src="../../assets/img/clone-icon.png" />
                                </ul>
                                <ul class="address-city" v-show="showProvince">
                                    <li 
                                        v-for="(n,i) in addressPlace"
                                        :key="n.id"
                                        @click="getProvince(n.id,n.name,i)" >
                                    {{n.name}}</li>
                                </ul>
                                <ul class="address-city" v-if="showCity">
                                    <li 
                                        v-for="(n, i) in cityArr" 
                                        :key="n.id"
                                        @click="getCity(n.id, n.name, i)" >
                                    {{ n.name }}</li>
                                </ul>
                                <ul class="address-city" v-if="showArea">
                                    <li 
                                        v-for="(n, i) in areaArr" 
                                        :key="n.id"
                                        @click="setCityEnd(n.id, n.name, i)" >
                                    {{ n.name }}</li>
                                </ul>
                                <ul class="address-city" v-if="showTown">
                                    <li 
                                        v-for="(n, i) in townArr" 
                                        :key="n.id"
                                        @click="setTownEnd(n.id, n.name, i)" >
                                    {{ n.name }}</li>
                                </ul>
                            </div>
                        </div>


                        <p class="g-service">
                            服 &nbsp;&nbsp;务
                            <!-- <span v-if="merchantDelivery" class=""
                                >由
                                <span class="yellow"
                                      @click="goStore(shop_data.store_id)"
                                    >{{ shop_data.shop_name }} </span
                                >负责供货,&nbsp;{{merchantDelivery}}</span
                            >
                            <span v-if="expressDelivery" class=""
                                >由
                                <span class="yellow"
                                      @click="goStore(shop_data.store_id)"
                                    >{{ shop_data.shop_name }} </span
                                >&nbsp;在&nbsp;{{expressDelivery.stock_name}}&nbsp;负责发货,&nbsp;{{expressDelivery.send_time}}小时内发货</span
                            >  -->
                            <span class=""
                                >由
                                <span class="yellow"
                                    >美玉美翡翠店</span
                                >负责发货，&nbsp;并提供售后服务</span>
                        </p>

                        <p class="g-service">
                            评 &nbsp;&nbsp;价
                            <span>
                                <span class="yellow">536</span>
                                件成交
                            </span>
                            <span>
                                <span class="yellow">59</span>
                                条评价
                            </span>
                        </p>

                    </div>
                    <!-- <div class="leiji">
                        <p>
                            累计评价
                            <span>{{ info.count }}人评价</span>
                        </p>
                        <p>
                            累计销量
                            <span>{{ info.sales_sum || 0 }}</span>
                        </p>
                        <p>
                            赠送积分
                            <span>{{
                                (
                                    goodsData.price_member / info.integral
                                ).toFixed(0) || 0
                            }}</span>
                        </p>
                    </div> -->
                    <div class="shuliang">
                        <span class="l">数量</span>
                        <div class="inp l">
                            <input
                                class="l"
                                @input="setAmount"
                                v-model="goodsNumber"
                                type="text"
                            />
                            <span
                                class="r btn-plus"
                                :class="{ disabled: plusState }"
                                @click="plus"
                            >
                                <i class="el-icon-plus"></i>
                            </span>
                            <span
                                class="r btn-reduce"
                                :class="{ disabled: reduceState }"
                                @click="reduce"
                            >
                                <i class="el-icon-minus"></i>
                            </span>
                        </div>
                        <!-- <span class="l">件 库存{{ goodsData.stock }}件</span> -->
                        <span class="l">件 库存14件</span>
                    </div>

                    <div class="leiji">
                        <p>
                            <span style="font-size: 18px; font-weight: bold;">601<span style="font-size: 12px; ">件</span></span>
                        </p>
                        <p>
                            <span style="font-size: 18px; ">34858.00<span style="font-size: 12px; ">元</span></span>
                        </p>
                    </div>

                    <!-- <div class="buy">
                        <span v-if="goodsData.shelves == 1" @click="purchase"
                            >立即购买</span
                        >
                        <span
                            v-if="goodsData.shelves == 1"
                            @click="
                                addCar(
                                    goodsData.price_member,
                                    goodsData.store_id
                                )
                            "
                            ><img
                                src="../../assets/img/goshop.png"
                                style="position: relative;
                                       top: -0.4rem;"
                            />加入购物车</span
                        >
                        <span
                            v-if="goodsData.shelves == 0"
                            style="background: #e3e3e3;color: #999;border: none;"
                            >此商品已下架</span
                        >
                        <div class="r">
                            手机购买<img
                                @mouseenter="handleScan(goodsData.id, 1)"
                                @mouseleave="handleLeave"
                                src="../../assets/img/samllerweima.jpg"
                                alt=""
                            />
                        </div>
                        <div id="qrCode" ref="qrCodeDiv"></div>
                    </div>
                </div> -->
                    <div class="buy">
                        <span>立即订购</span>
                        <span>
                            <img
                                src="../../assets/img/gw.png"
                                style="position: relative;"
                            />
                            加入进货单
                        </span>
                    </div>
                </div>

                <!-- <div class="r right">
                    <div class="header l">{{ shop_data.shop_name }}&nbsp;&nbsp;&nbsp;
                        <el-dropdown v-if="shop_data.grade_name">
                            <span class="first-name">{{ shop_data.grade_name }}</span>
                            <el-dropdown-menu slot="dropdown" v-if="shop_data.classification">
                                <el-dropdown-item>{{ shop_data.classification }}</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="l zonghe">
                        <p class="left l">
                            <span
                                >{{
                                    (
                                        (shop_data.desccredit +
                                            shop_data.servicecredit +
                                            shop_data.deliverycredit) /
                                        3
                                    ).toFixed(2)
                                }} </span
                            ><br />综合
                        </p>
                        <p class="first">
                            描述相符
                            <span>{{ shop_data.desccredit }}</span>
                        </p>
                        <p>
                            服务态度
                            <span>{{ shop_data.servicecredit }}</span>
                        </p>
                        <p>
                            发货速度
                            <span>{{ shop_data.deliverycredit }}</span>
                        </p>
                    </div>
                    <div class="kefu l">
                        <p>
                            所在地：
                            <span>{{ shop_data.address }}</span>
                        </p>
                        <p>
                            客服：
                            <span @click="openkefu"
                                ><img
                                    class="l"
                                    src="../../assets/img/people_ser.png"
                                />在线客服</span
                            >
                        </p>
                        <popup
                            v-if="saleInfo"
                            @close="handleClose"
                            :coupondata="storeCouponList"
                            @itemclick="handleItemClick"
                        ></popup>
                    </div>
                    <div class="l dian">
                        <p>
                            <span @click="toStore">进店逛逛</span>
                            <span @click="shopCollection">{{
                                collection_text
                            }}</span>
                        </p>
                    </div>
                    <div class="instore l">
                        <input
                            class="l guanjianzi"
                            type="text"
                            v-model="storeSearchData.keyword"
                            placeholder="关键字"
                        />
                        <div class="l picdiv">
                            <input
                                class="l pic"
                                type="text"
                                v-model="storeSearchData.minMoney"
                                placeholder="最小价格"
                            />
                            <span>~</span>
                            <input
                                class="r pic"
                                type="text"
                                v-model="storeSearchData.maxMoney"
                                placeholder="最大价格"
                            />
                        </div>
                        <p v-if="store_goods_id" @click="storeSearch" >店内搜索</p>
                        <p v-else v-loading="loading" element-loading-spinner="el-icon-loading"></p>
                    </div>
                </div> -->

            </div>

            <!-- <div class="middle" v-if="optimalPortfolio.data.length > 0 || GoodsPackage.data.length > 0">
                <div class="l tab">
                    <ul class="l">
                        <li
                            @click="change(0)"
                            :class="{ bor: isbor === 0 }"
                            class="l"
                            v-if="optimalPortfolio.data.length > 0"
                        >
                            推荐组合
                        </li>
                        <li
                            @click="change(1)"
                            :class="{ bor: isbor === 1 }"
                            class="l"
                            v-if="GoodsPackage.data.length > 0"
                        >
                            优惠套餐
                        </li>
                    </ul>
                    <div class="l"></div>
                </div>
                <div class="l taocan class_two" v-show="isbor == 1" v-if="GoodsPackage.data.length > 0">
                    <span
                        class="nullData"
                        v-show="GoodsPackage.data.length === 0"
                        >{{
                            this.goodsId == this.$route.query.id
                                ? "请先选择规格"
                                : "暂无数据!!"
                        }}</span
                    >
                    <div class="GoodsAccessories">
                        <div
                            class="l shangpin"
                            :key="index"
                            v-for="(item, index) in GoodsPackage.data"
                        >
                            <img :src="URL + item.pic_url" />
                            <p class="set-meal-title">{{ item.title }}</p>
                            <p>￥{{ item.goods_discount }}</p>
                        </div>
                    </div>
                    <div class="l all" v-show="GoodsPackage.data.length !== 0">
                        <p>
                            套餐价：
                            <span>{{ computedTotal(GoodsPackage.data) }}</span>
                            <span
                                >省￥{{
                                    computedTotalPrice(GoodsPackage.data) -
                                        computedTotal(GoodsPackage.data)
                                }}</span
                            >
                        </p>
                        <p>
                            价格:￥{{ computedTotalPrice(GoodsPackage.data) }}
                        </p>
                        <p class="buy same" @click="buy">立即购买</p>
                        <p class="car same" @click="addPackageCart">
                            加入购物车
                        </p>
                    </div>
                </div>

                <div class="l taocan class_three" v-show="isbor == 0" v-if="optimalPortfolio.data.length > 0">
                    <span
                        class="nullData"
                        v-show="optimalPortfolio.data.length === 0"
                        >{{
                            this.goodsId == this.$route.query.id
                                ? "请先选择规格"
                                : "暂无数据!!"
                        }}</span
                    >
                    <div class="GoodsAccessories">
                        <div
                            class="l shangpin"
                            :key="index"
                            v-for="(item, index) in optimalPortfolio.data"
                        >
                            <img :src="URL + item.img" />
                            <p class="set-meal-title">{{ item.title }}</p>
                            <p>￥{{ item.price_market }}</p>
                        </div>
                    </div>
                    <div
                        class="l all"
                        v-show="optimalPortfolio.data.length !== 0"
                    >
                        <p class="buy same" @click="goodsComboBuyNow(2)">
                            立即购买
                        </p>
                        <p class="car same" @click="recommendAndGroup(2)">
                            加入购物车
                        </p>
                    </div>
                </div>
            </div> -->

            <div class="bottom">
                <div class="left l">
                    <div class="zhongxin l">
                        <p class="l kefu">
                            <span>客服中心</span><br />CUSTOMER
                        </p>
                        <p class="l zixun">在线咨询</p>
                        <div class="l qq">
                            <p @click="openkefu">
                                在线客服<img
                                    src="../../assets/img/people_ser.png"
                                    alt=""
                                />
                            </p>
                        </div>
                        <p class="l zixun">工作时间</p>
                        <p class="l time">AM 8:00-PM 18:00</p>
                    </div>
                    <div class="fenlei l">
                        <p>商品分类</p>
                        <ul class="outer">
                            <li
                                class="outerli"
                                v-if="outers.level == 0"
                                v-for="(outers, index) in storeClassArr"
                                :key="outers.id"
                                @mouseover="block(index)"
                                :class="{ active: isactive == index }"
                            >
                                <span @click="GoTos(outers, 1)">{{
                                    outers.class_name
                                }}</span>
                                <ul class="core" v-if="fun == index">
                                    <li
                                        class="coreli"
                                        v-if="
                                            cores.level == 1 &&
                                                cores.f_id == outers.id
                                        "
                                        v-for="(cores, i) in storeClassArr"
                                        :key="i"
                                    >
                                        <span @click="GoTos(cores, 2)"
                                            >>{{ cores.class_name }}</span
                                        >
                                        <ul class="core" v-if="fun == index">
                                            <li
                                                class="coreli2"
                                                v-if="
                                                    core.level == 2 &&
                                                        core.f_id == cores.id
                                                "
                                                v-for="(core,
                                                j) in storeClassArr"
                                                :key="j"
                                            >
                                                <span @click="GoTos(core, 3)"
                                                    >>{{
                                                        core.class_name
                                                    }}</span
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="l paihang">
                        <p class="shangpin">店内排行榜</p>
                        <ul class="l">
                            <li
                                class="l"
                                v-if="Ranking instanceof Array"
                                v-for="(pno, index) in Ranking"
                                :key="index"
                                @click="JumpForDetails(pno.id)"
                            >
                                <img
                                    class="l"
                                    v-lazy="
                                        pno.pic_url === null
                                            ? error
                                            : URL + pno.pic_url
                                    "
                                />
                                <p class="l" id='showTitle'>
                                    {{
                                        pno.title === null
                                            ? "标题暂无数据"
                                            : pno.title
                                    }}
                                </p>
                                <p class="l">
                                    {{
                                        pno.goods_price === null
                                            ? "价格暂无数据"
                                            : "￥" + pno.goods_price
                                    }}
                                    <span
                                        style="margin-left:20px;color:#656565;font-size:11px"
                                        >已售{{ pno.sales_sum }}件</span
                                    >
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="l liulan">
                        <p class="zuijin">最近浏览</p>
                        <ul>
                            <li
                                class="l"
                                :key="index"
                                v-if="browser instanceof Array"
                                v-for="(item, index) in browser"
                                @click="JumpForDetails(item.id)"
                            >
                                <img
                                    class="l"
                                    v-lazy="
                                        item.pic_url === null
                                            ? error
                                            : URL + item.pic_url
                                    "
                                />
                                <p class="l">
                                    {{
                                        item.title === null
                                            ? "标题暂无数据"
                                            : item.title
                                    }}
                                </p>
                                <p class="l">
                                    {{
                                        item.price_member === null
                                            ? "价格暂无数据"
                                            : "￥" + item.price_member
                                    }}
                                </p>
                                <span
                                    style="margin-left:20px;color:#656565;font-size:11px"
                                    >已售{{ item.sales_sum }}件</span
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="right r">
                    <div class="l tab">
                        <ul class="l">
                            <li
                                @click="undo(0)"
                                :class="{ bg: isbg == 0 }"
                                class="l"
                            >
                                商品介绍
                            </li>
                            <li
                                @click="undo(1)"
                                :class="{ bg: isbg == 1 }"
                                class="l"
                            >
                                商品属性
                            </li>
                            <li
                                @click="undo(2)"
                                :class="{ bg: isbg == 2 }"
                                class="l"
                            >
                                商品评价&nbsp;&nbsp;{{ allCount }}
                            </li>
                            <li
                                @click="undo(3)"
                                :class="{ bg: isbg == 3 }"
                                class="l"
                            >
                                商品咨询&nbsp;&nbsp;{{countnumber}}
                                <span></span>
                            </li>
                        </ul>
                        <div class="l line"></div>
                    </div>
                    <div class="subpage l">
                        <div v-show="only == 0" class="jieshao">
                            <div class="up" v-show="introduce.length == 0">
                                <p class="p">商家货号：96004746</p>
                                <p class="p">品牌：</p>
                                <p class="p">类别：不限</p>
                                <p class="p">材料：不限</p>
                                <p class="p">工艺：不限</p>
                                <p class="p">窑口：不限</p>
                            </div>
                            <!-- <div
                                class="down"
                                id="detail-img"
                                v-html="shopImage"
                            ></div> -->
                            <div
                                class="down"
                                id="detail-img"
                            ><img src="../../assets/img/yi-18.png" /></div>
                        </div>
                        <div v-show="only == 1" class="attribute">
                            <table class="table" cellspacing="0">
                                <tr>
                                    <td class="attr_title" colspan="2">
                                        商品属性
                                    </td>
                                </tr>
                                <tr
                                    v-for="(item, index) in goodsAttr.slice(0,10)"
                                    :key="index"
                                >
                                    <td class="attr_name">
                                        {{ item.attrName }}
                                    </td>
                                    <td class="attr_value_name">
                                        {{ item.attr_value }}
                                    </td>
                                </tr>
                            </table>

                            <table
                                v-if="brand != ''"
                                class="table"
                                cellspacing="0"
                            >
                                <tr>
                                    <td class="attr_title" colspan="2">
                                        商品品牌
                                    </td>
                                </tr>
                                <tr>
                                    <td class="attr_name">品牌</td>
                                    <td class="attr_value_name">{{ brand }}</td>
                                </tr>
                            </table>
                        </div>
                        <div v-show="only == 2" class="pingjia">
                            <div class="up">
                                <div class="evaluate-info">
                                    <div class="l evaluate-degree">
                                        <div class="commhigh-opinionent l">
                                            <div class="percent">
                                                {{ nice100.toFixed(0) }}%
                                            </div>
                                            <p class="percent-tit">好评度</p>
                                        </div>
                                        <ul class="l jindu">
                                            <li>
                                                <span
                                                    >好评({{
                                                        nice100.toFixed(0)
                                                    }}%)</span
                                                >
                                                <i>
                                                    <b class="skitt-line"></b>
                                                </i>
                                            </li>
                                            <li>
                                                <span
                                                    >中评({{
                                                        center100.toFixed(0)
                                                    }}%)</span
                                                >
                                                <i>
                                                    <b class="skitt-line"></b>
                                                </i>
                                            </li>
                                            <li>
                                                <span
                                                    >差评({{
                                                        bad100.toFixed(0)
                                                    }}%)</span
                                                >
                                                <i>
                                                    <b class="skitt-line"></b>
                                                </i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="down">
                                <div class="l top">
                                    <ul class="l">
                                        <li
                                            class="l"
                                            :class="
                                                isCurrentComment == 0
                                                    ? 'active'
                                                    : ''
                                            "
                                            @click="getAllCommentContent(0)"
                                        >
                                            全部评价
                                            <span>({{ allCount || 0 }})</span>
                                        </li>
                                        <li
                                            class="l"
                                            :class="
                                                isCurrentComment == 1
                                                    ? 'active'
                                                    : ''
                                            "
                                            @click="getAllCommentContent(1)"
                                        >
                                            好评
                                            <span>({{ allNice || 0 }})</span>
                                        </li>
                                        <li
                                            class="l"
                                            :class="
                                                isCurrentComment == 2
                                                    ? 'active'
                                                    : ''
                                            "
                                            @click="getAllCommentContent(2)"
                                        >
                                            中评
                                            <span>({{ allHeight || 0 }})</span>
                                        </li>
                                        <li
                                            class="l"
                                            :class="
                                                isCurrentComment == 3
                                                    ? 'active'
                                                    : ''
                                            "
                                            @click="getAllCommentContent(3)"
                                        >
                                            差评
                                            <span>({{ allBad || 0 }})</span>
                                        </li>
                                        <li
                                            class="l"
                                            :class="
                                                isCurrentComment == 4
                                                    ? 'active'
                                                    : ''
                                            "
                                            @click="getAllCommentContent(4)"
                                        >
                                            有图
                                            <span>({{ allImg || 0 }})</span>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    class="l dibian"
                                    v-for="(item, index) in comments.list"
                                    :key="index"
                                >
                                    <div class="name l">
                                        <p>
                                            {{ item.nick_name }}
                                            <span> (匿名) </span>
                                        </p>

                                        <p class="score">
                                            {{ item.score | filtScore }}
                                        </p>
                                        <p>
                                            {{ item.create_time | formatDate }}
                                        </p>
                                    </div>
                                    <div class="right">
                                        <p class="l talk">{{ item.content }}</p>
                                        <div class="l photo" v-if="item.path">
                                            <img
                                                v-for="(items,
                                                index1) in item.path"
                                                preview="index"
                                                preview-text="评价图片"
                                                :key="index1"
                                                :src="URL + items"
                                            />
                                        </div>
                                        <div class="bigImg" v-if="ctrlBigImg">
                                            <img :src="URL + item.path" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-show="only == 3">
                            <div class="refer">
                                <p class="zixuntop">商品咨询</p>
                                <div class="tiwen">
                                    <p>查看全部咨询</p>
                                    <div class="inp">
                                        <input
                                            type="text"
                                            v-model="addCommitProblemValue"
                                            placeholder="请输入您想要知道的问题，发布成功后，商家会第一时间回答你"
                                        />
                                        <span @click="addCommitProblem"
                                            >我要提问</span
                                        >
                                    </div>
                                </div>
                                <div class="consult clearfix">
                                    <div
                                        class="yunfei"
                                        v-for="(item,
                                        index) in consultationList"
                                        :key="index"
                                    >
                                        <p>{{item.user_name}}</p>
                                        <p>
                                            <span class="huang">Q</span>
                                            {{ item.content }}
                                            <span class="r day">{{
                                                ~~item.create_time | formatDate
                                            }}</span>
                                        </p>
                                        <p>
                                            <span class="huang">A</span>
                                            {{
                                                item.answer
                                                    ? item.answer
                                                    : "暂无回答"
                                            }}
                                            <span class="r day">暂无</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="box2"
                                style="width: 140px;margin: 0 auto;margin-top: 20px"
                            >
                                <el-pagination
                                    @current-change="handleCurrentChange"
                                    background
                                    layout="total,prev, pager, next,jumper"
                                    :current-page.sync="currentPage"
                                    :page-size="page_size"
                                    :total="page"
                                >
                                </el-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <like-and-history></like-and-history>
        </div>
        <foot-com></foot-com>
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
import error from "@/assets/img/404.jpg";
import xiaojiazi from "@/assets/img/xiaojiazi.jpg";
import xiaochahu from "@/assets/img/xiaochahu.jpg";
import xiaochahu1 from "@/assets/img/xiaochahu1.jpg";
import xiaochahu2 from "@/assets/img/xiaochahu2.jpg";
import shitou from "@/assets/img/shitou.jpg";
import chahu from "@/assets/img/xiaoxiaochahu.jpg";
import bigfozhu from "@/assets/img/chase1.png";
import bigfozhu1 from "@/assets/img/chase2.png";
import baijian from "@/assets/img/baijian.jpg";
import yuzhuo from "@/assets/img/yuzhuo.jpg";
import img from "@/assets/img/injiazi.jpg";
import popup from "./popup";
import { magnify } from "@/assets/js/magnify.js";
import QRCode from "qrcodejs2";
import { Message } from "element-ui";
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
    data() {
        return {
            playerOptions: {
                height: '400',
                width: '400',
                autoplay: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                controls: true,
                sources: [{
                    type: "video/mp4",
                    src: "http://vjs.zencdn.net/v/oceans.mp4"
                }],
                controlBar: {
                    progressControl: {
                        seekBar: true
                    },
                },
            },
            popupVisible:false,
            province: '请选择',// 选中的省
            city: '请选择', // 选中的市
            area: '请选择', // 选中的区
            town: '请选择',
            provinceArr: [], // 省
            cityArr: [], // 市
            areaArr: [], // 区
            townArr: [],
            choiceProvince: false, // 省按钮的显示隐藏
            choiceCity: false, // 市按钮的显示隐藏
            choiceArea: false, // 区按钮的显示隐藏
            choiceTown: false,
            showProvince: true, // 省选择的显示隐藏
            showCity: false, // 市选择的显示隐藏
            showArea: false, // 区选择的显示隐藏
            showTown: false,
            provinceId: '', // 选中的省id
            cityId: '', // 选中的市id
            areaId: '', // 选中的区id
            value:'',
            addressPlace:'',
            addressAll: '',
            addressAllData: '',
            addressPlaceName: '',
            cityArrName: '',
            areaArrName: '',
            townArrName: '',
            bb: [{
            value: 'bbb',
            label: 'bbb'
            }],
            cc: [{
            value: 'ccc',
            label: 'ccc'
            }],
            dd: [{
            value: 'ddd',
            label: 'ddd'
            }],
            value: '',
            shopName:'',
            saleInfo: false,
            get_store_id: 0, //折扣信息id
            get_goods_id: "",
            get_main_id:0,//主商品id
            discountInfo: 0,
            storeID: 0,
            store_goods_id: "",
            storeCouponList: [],
            ctrlBigImg: null,
            introduce: {}, //商品介绍,
            storeSearchData: {
                keyword: "",
                minMoney: "0",
                maxMoney: 500
            },
            error: require("@/assets/img/404.jpg"),
            specKey: this.$route.query.id,
            spec: {},
            specData: {},
            collection_text: "收藏本店",
            collection_text1: "收藏商品",
            goodsData: {},
            shop_data: {},
            defaultPicture: "",
            imgList: [],
            sign: 0,
            goodsNumber: 1,
            plusState: false,
            reduceState: true,
            allCount: 0,
            allNice: 0,
            allHeight: 0,
            allBad: 0,
            currentPage: 1,
            page_size: 0,
            page: 0,
            allImg: 0,
            info: {},
            isbor: 0,
            items: [],
            outer: ["皇家御饮", "御贡赠品", "滋补养身"],
            core: [
                "绿茶",
                "红茶",
                "乌龙茶",
                "花茶",
                "绿茶",
                "红茶",
                "乌龙茶",
                "花茶"
            ],
            addCommitProblemValue: "",
            isactive: "",
            imgs: [],
            isbg: "",
            only: "",
            down: [bigfozhu, bigfozhu1, bigfozhu, bigfozhu1],
            basebox: [],
            base: [],
            isborder: "",
            yinxiangs: [
                {
                    p: "空气清新",
                    span: "185"
                },
                {
                    p: "空气清新",
                    span: "185"
                },
                {
                    p: "空气清新",
                    span: "185"
                },
                {
                    p: "空气清新",
                    span: "185"
                },
                {
                    p: "空气清新",
                    span: "185"
                }
            ],
            pingjias: ["商品不错", "腰果很好吃", "特价买的", "商品很便宜"],
            comments: {},
            isCurrentComment: 0, //是否在当前评价选项（好评差评切换）
            nice100: 0, //好评
            bad100: 0,
            center100: 0,
            storeClassArr: "",
            goodsId: "",
            brand: "",
            productTitle: "",
            fun: "",
            // 优惠套餐
            GoodsPackage: {
                data: [],
                package: []
            },
            // 推荐配件
            GoodsAccessories: {
                data: []
            },
            // 最佳组合
            optimalPortfolio: {
                data: []
            },
            shopImage: "", // 商品详情
            browser: [], // 最近浏览
            ShoppingRank: [],
            Ranking: [],
            g: 0,
            t: 0,
            fullGift: [], //商品满赠活动
            reduction: null,
            consultationList: [],
            goodsAttr: [],
            fromChild: '',
            loading: true,
            storeCouponSlice0: '',
            storeCouponSlice1: '',
            storeCouponSlice2: '',
            storeCouponSlice3: '',
            storeCouponSlice4: '',
            storeCouponSlice5: '',
            tempp: 0,
            countnumber:0,
            showCoupon0:'',
            showCoupon1:'',
            showCoupon2:'',
            callStatus: '',
            deliveryCal: '',
            freightCal: '',
            video:'',
            shipping_data: '',
            ship_key: '',
            ship_status: '',
            fullTitle: "",
            displayTitleStyle: {
                top: "",
                bottom: ""
            },
            fullTitieFlag: false,
            showVideo: false,
            url: null,
            merchantDelivery:'',
            expressDelivery:'',
        };
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player
        },
        handleDiscount() {
            return parseInt(this.discountInfo) / 10;
        }
    },
    beforeCreate() {
        window._bd_share_main = "";
    },
    watch: {
        goodsNumber() {
            this.reduceState = this.goodsNumber > 1 ? false : true;
            this.plusState =
                parseInt(this.goodsNumber) >= parseInt(this.goodsData.stock)
                    ? true
                    : false;
        }
    },

    mounted() {
        
        setTimeout(() => {
            console.log('dynamic change options', this.player)
            this.player.muted(false)
        }, 2000)
        this.storeID = this.$route.query.id;
        let n = 0;
        let isChange = false;
        this.goodsId = this.$route.query.id;
        window.onscroll = () => {
            clearTimeout(timer);
            let timer = setTimeout(() => {
                clearTimeout(timer);
                let scrollTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                if (scrollTop > 600 && n < 1) {
                    this.ShopImageDetail(this.goodsData.id);
                    n++;
                }
            }, 500);
        };
    },
    created() {
        this.getGoodsSpec(this.$route.query.id, 2);
        this.getMyFootFrint();


        if (this.isbor === 0) {
            this.getGoodsAccessories(this.goodsData.id);
        }
        this.GetUrlRelativePath();
        this.getData();
        this.CArrName();
        this.AArrName();
        this.TArrName(); 
        this.getAllCommentContent(); 
        this.consultationData();
            
    },
    components: {
        popup,
        videoPlayer
    },

    filters: {
        filtScore: function(value) {
            return "★★★★★☆☆☆☆☆".slice(5 - value, 10 - value);
        }
    },
    methods: {
        updateXY(title, e) {
            this.fullTitle = title;
            this.displayTitleStyle.top = e.pageY + 30 + "px";
            this.displayTitleStyle.left = e.pageX + 20 + "px";
            this.fullTitieFlag = true;
        },
        updataFullFlag() {
            this.fullTitieFlag = false;
        },
        showvideo(video){
            this.url = video
            this.showVideo = true
        },
        endedPlaying(){
            this.showVideo = false
        },
    getData(){
        this.HTTP(this.$httpConfig.regionLists, {}, "get").then(res => {
            this.addressPlace = res.data.data;
            this.addressPlaceName = this.addressPlace[0].name;
        }).catch((err) => {
            console.log(err);
        });
    },
    // 选择
    selectedArea(type){
        if (type == "province") {
            this.showProvince = true;
            this.choiceCity = false;//市按钮消失
            this.choiceArea = false;//区按钮消失
            this.choiceTown = false;
            this.showCity = false;//市列表隐藏
            this.showArea = false;//区列表隐藏
            this.showTown = false;
            this.city = '请选择'; 
            this.area = '请选择';
            this.town = '请选择';
        } else if (type == "city"){
            this.showCity = true;
            this.showProvince = false;//省列表隐藏
            this.showArea = false; //区列表隐藏
            this.showTown = false;
            this.choiceArea = false; //区按钮消失
            this.choiceTown = false;
            this.area = '请选择';
            this.town = '请选择';
        }
    },
    //选择省
    getProvince(id,name,i){
        this.province = name;
        this.provinceId = id;
        this.showProvince = false; //省列表显示隐藏
        this.choiceCity = true; //市按钮出现
        this.showCity = true; //市按钮的样式//市列表显示隐藏
        this.HTTP(
        this.$httpConfig.regionLists,
        {
          id: id
        },
        "get"
      ).then(res => {
          this.cityArr = res.data.data;
      });
    },
    //选择市
    getCity(id,name,i){
        this.city = name;
        this.cityId = id;
        this.showArea = true; //区列表出现
        this.choiceArea = true; //区按钮出现
        this.showCity = false; //市按钮的样式//市列表显示隐藏
        this.HTTP(
        this.$httpConfig.regionLists,
        {
          id: id
        },
        "get"
      ).then(res => {
          this.areaArr = res.data.data;
      });
    },
    //选择区
    setCityEnd(id,name,i){
        this.area = name;
        this.areaId = id;
        this.showTown = true; //区列表出现
        this.choiceTown = true; //区按钮出现
        this.showArea = false; //市按钮的样式//市列表显示隐藏
        this.HTTP(
        this.$httpConfig.regionLists,
        {
          id: id
        },
        "get"
      ).then(res => {
          this.townArr = res.data.data;
      });
    },
    setTownEnd(id,name,i){
        this.town = name;
        this.townId = id;
        this.popupVisible = false;
        if(this.province==""||this.province=="请选择") {
            alert('请选择地址');
        }else if(this.city==""||this.city=="请选择"){
            alert('请选择地址');
        }else if(this.area==""||this.area=="请选择" ){
            alert('请选择地址');
        }else if(this.town==""||this.town=="请选择" ){
            alert('请选择地址');
        }else{
            this.addressAll = this.province +'-'+ this.city +'-'+ this.area +'-'+ this.town;
            this.showCity = false; //市按钮的样式//市列表显示隐藏
            this.showArea = false; //区按钮的样式//区列表显示隐藏
            this.showTown = false;
            this.showProvince = true; //省列表显示隐藏
            this.choiceCity = false; // 市按钮的显示隐藏
            this.choiceArea = false;// 区按钮的显示隐藏
            this.choiceTown = false;
            this.province = "请选择";
        }
        this.getDeliveryCal();
    },
    callingArea(){
        this.popupVisible = true;
    },
    cancelArea(){
        this.popupVisible = false;
    },
    getDeliveryCal(){
        var data = {
          store_id: this.store_goods_id,
          goods_id: this.$route.query.id,
          prov_id: this.provinceId,
          dist_id: this.cityId,
          city_id: this.areaId,
          town_id: this.townId,
        };
        this.HTTP(this.$httpConfig.deliveryCalcus,data,'post')
          .then((res) => {
            this.callStatus = res.data.status;
            this.merchantDelivery = res.data.data.transport;
          if(res.data.status == 1) {
          this.deliveryCal=res.data.data.money;
          this.merchantDelivery = res.data.data.transport;
          }
          if(res.data.status == 0) {
            this.getFreightCal();
            this.getExpressInfo();
          }
        }).catch((err) => {
            this.getFreightCal();
            this.getExpressInfo();
            console.log(err);
        })
      },
      getFreightCal(){
          var data = {
          store_id: this.store_goods_id,
          goods_id: this.$route.query.id,
          prov_id: this.provinceId,
          dist_id: this.cityId,
          city_id: this.areaId,
          town_id: this.townId,
        };
        this.HTTP(this.$httpConfig.freightCalcus,data,'post')
          .then((res) => {
          this.freightCal=res.data.data;
        }).catch((err) => {
            console.log(err);
        })
      },
    getExpressInfo(){
            var data = {
          goods_id: this.$route.query.id,
        };
        this.HTTP(this.$httpConfig.getExpressInfo,data,'post')
          .then((res) => {
        }).catch((err) => {
            this.expressDelivery = err.data.data;
            console.log(err);
        })
    },

    CArrName() {
        this.HTTP(
        this.$httpConfig.regionLists,
        {
            id: 11
        },
        "get"
      ).then(res => {
          this.cityArrName = res.data.data[0].name;
      });
    },

    AArrName() {
      this.HTTP(
        this.$httpConfig.regionLists,
        {
            id: 175
        },
        "get"
      ).then(res => {
          this.areaArrName = res.data.data[0].name;
      });
      },

    TArrName() {
      this.HTTP(
        this.$httpConfig.regionLists,
        {
            id: 2134
        },
        "get"
      ).then(res => {
          this.townArrName = res.data.data[0].name;
          this.addressAllData = this.addressPlaceName +'-'+ this.cityArrName +'-'+ this.areaArrName +'-'+ this.townArrName;
      });
        var data = {
          store_id: 2,
          goods_id: this.$route.query.id,
          prov_id: 11,
          dist_id: 175,
          city_id: 2134,
          town_id: 15231,
        };
        this.HTTP(this.$httpConfig.deliveryCalcus,data,'post')
          .then((res) => {
              this.callStatus = res.data.status;
              this.merchantDelivery = res.data.data.transport;
          if(res.data.status == 1) {
        this.deliveryCal=res.data.data.money;
        this.merchantDelivery = res.data.data.transport;
          }
          if(res.data.status == 0) {
            this.getFreightCal1();
            this.getExpressInfo();
          }
        }).catch((err) => {
            this.getFreightCal1();
            this.getExpressInfo();
            console.log(err);
        })
      },
      getFreightCal1() {
          var data = {
          store_id: 2,
          goods_id: this.$route.query.id,
          prov_id: 11,
          dist_id: 175,
          city_id: 2134,
          town_id: 15231,
        };
        this.HTTP(this.$httpConfig.freightCalcus,data,'post')
          .then((res) => {
        this.freightCal=res.data.data;
        this.shipping_data = res.data.data.shipping;
          for (const a in this.shipping_data) {
            this.ship_key = this.shipping_data[a].id;
            this.ship_status = this.shipping_data[a].status;
          }
        }).catch((err) => {
            console.log(err);
        })
      },
    CheckIsUseCoupon(id) {
        for(var i = 0; i < this.storeCouponList.length; i++) {
            if(this.storeCouponList[i].id == id) {
                this.storeCouponList[i].taken = true;
            }
        }
        this.HTTP(this.$httpConfig.coupon.couponReceiveBehavior, {
            id: id
        }, 'post').then(res => {
            if (res.data.status == 10001) {
                        this.$router.push("/passwordLogin");
                        return;
            }
            Message.info('领取成功')
            this.getCouponInfo();
            console.log(res.data.status)
        }).catch((res) => {
            Message.info(res.data.message)
        })
    },
    voucherr(storeId, index) {
      this.tempp = index
      this.storeId = Number(storeId);
    },
    
    goodLuck(storeId, index) {
      this.tempp = index
      this.storeId = Number(storeId);
    },
        onChildClick (value) {
          this.fromChild = value
          if(this.fromChild == 'false') {
              location.reload();
          }
        },
        //进入vip
        handleGoVip() {
            this.$router.push({
                path: "/vip",
                query: {
                    id: this.get_store_id,
                    class_one: -3
                }
            });
        },
        goStore(store_id) {
            window.open(window.location.origin + "/storehome" +'?id=' +store_id);
        },
        //折扣信息
        getDiscountInfo(id) {
            this.HTTP(
                this.$httpConfig.storeDiscount,
                {
                    store_id: id
                },
                "post"
            )
                .then(res => {
                    this.discountInfo = res.data.data;
                })
                .catch(err => {
                    console.error(err);
                });
        },
        //举报页面
        handleNotice() {
            location.href =
                this.$constant.s_url +
                "informOutline?x=" +
                1 +
                "&notice=1" +
                "&store_id=" +
                this.get_store_id +
                "&goods_id=" +
                this.get_goods_id+'&main_id='+this.get_main_id
        },
        //生成二维码扫描
        handleScan(id, status) {
            new QRCode(this.$refs.qrCodeDiv, {
                text:
                    "http://msn.huolian100.com/product/" +
                    id +
                    "/" +
                    status +
                    "?type=" +
                    1,
                width: 150,
                height: 150,
                colorDark: "#333333", //二维码颜色
                colorLight: "#fff", //二维码背景色
                correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
            });
        },
        handleLeave() {
            this.$refs.qrCodeDiv.innerHTML = "";
        },
        getCouponInfo() {
            this.HTTP(
                this.$httpConfig.coupon.couponSendList,
                {
                    store_id: this.store_goods_id
                },
                "post"
            )
                .then(res => {
                    if (res.data.status == 1) {
                        this.storeCouponList = res.data.data.data;
                        this.showCoupon0 =res.data.data.data[0];
                        this.storeCouponSlice0 = res.data.data.data[0].money;
                        this.storeCouponSlice1 = res.data.data.data[0].condition;

                        this.showCoupon1 =res.data.data.data[1];
                        this.storeCouponSlice2 = res.data.data.data[1].money;
                        this.storeCouponSlice3 = res.data.data.data[1].condition;

                        this.showCoupon2 =res.data.data.data[2];
                        this.storeCouponSlice4 = res.data.data.data[2].money;
                        this.storeCouponSlice5 = res.data.data.data[2].condition;
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        openkefu() {
            this.HTTP(this.$httpConfig.serviceList, {
                store_id: this.shop_data.store_id
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
        handleCurrentChange(currentPage) {
            //下一页
            this.currentPage = currentPage;
            this.consultationData();
        },
        getGoodsAttr() {
            this.HTTP(
                this.$httpConfig.getGoodsAttr,
                {
                    goods_id: this.$route.query.id
                },
                "post"
            )
                .then(res => {
                    if (res.data.status == 1) {
                        this.goodsAttr = res.data.data.data;
                        this.brand = res.data.data.brand;
                    }
                })
                .catch(err => {
                    console.log(err, 111);
                });
        },
        handleItemClick(id) {
            this.HTTP(
                this.$httpConfig.coupon.couponReceiveBehavior,
                {
                    id: id
                },
                "post"
            )
                .then(res => {
                    if (res.data.status == 10001) {
                        this.$router.push("/passwordLogin");
                    }
                    if (res.data.status == 1) {
                        alert("领取成功");
                    }
                })
                .catch(error => {
                    alert(error.data.message);
                });
        },
        handleClose() {
            this.saleInfo = false;
        },
        getSale() {
            this.saleInfo = true;
        },
        // 获取url地址,当未登录时购买商品时，记录地址
        GetUrlRelativePath() {
            var url = document.location.toString();
            var arrUrl = url.split("//");

            var start = arrUrl[1].indexOf("/");
            var relUrl = arrUrl[1].substring(start); //stop省略，截取从start开始到结尾的所有字符
            sessionStorage.setItem("site", relUrl);
        },
        entryGoods(id) {
            window.open(window.location.origin + "/shopsn_product?id=" + id);
        },
        getPromotionDetail(id) {
            this.HTTP(
                this.$httpConfig.promotionDetail,
                {
                    goods_id: id
                },
                "post"
            )
                .then(res => {
                    if (res.data.status == 1) {
                        this.fullGift = res.data.data.gift;
                        console.log(this.fullGift);
                        this.reduction = res.data.data.reduction;
                    }
                })
                .catch(error => {
                    this.fullGift = [];
                    this.reduction = null;
                });
        },
        undo(index) {
            this.isbg = index;
            this.only = index;
            if (index == 0) {
                this.getAllCommentContent(0);
            } else if (index == 1) {
                this.getGoodsAttr();
            } else if (index == 2) {
                this.getAllCommentContent(0);
            } else if (index === 3) {
                this.consultationData();
            }
        },
        // 获取咨询列表
        consultationData() {
            this.HTTP(
                this.$httpConfig.consult.goodsConsultation,
                {
                    goods_id: this.$route.query.id,
                    p: this.currentPage
                },
                "get"
            ).then(res => {
                if (res.data.status) {
                    this.consultationList = res.data.data.data;
                    this.countnumber = res.data.data.count;
                    this.page = Number(res.data.data.page);
                    this.page_size = Number(res.data.data.page_size);
                }
            });
        },
        // 我要提问
        addCommitProblem() {
            this.HTTP(
                this.$httpConfig.consult.userCommitProblem,
                {
                    goods_id: this.$route.query.id,
                    content: this.addCommitProblemValue
                },
                "post"
            ).then(res => {
                if (res.data.status == 10001) {
                    this.$router.push("/passwordLogin");
                    return;
                }
                if (res.data.status == 1) {
                    this.$message(res.data.message);
                }
            });
            this.consultationData();
        },
        GoTos(item, type) {
            this.g++;

            if (type == 1) {
                window.open(
                    window.location.origin +
                        "/storelist?id=" +
                        this.store_goods_id +
                        "&class_one=" +
                        item.id
                );
            }
            if (type == 2) {
                window.open(
                    window.location.origin +
                        "/storelist?id=" +
                        this.store_goods_id +
                        "&class_one=" +
                        item.f_id +
                        "&class_two=" +
                        item.id
                );
            }

            if (type == 3) {
                this.storeClassArr.forEach((items, index) => {
                    if (items.level == 1) {
                        if (item.f_id == items.id) {
                            window.open(
                                window.location.origin +
                                    "/storelist?id=" +
                                    this.store_goods_id +
                                    "&class_one=" +
                                    items.f_id +
                                    "&class_two=" +
                                    item.f_id +
                                    "&class_three=" +
                                    item.id
                            );
                        }
                    }
                });
            }
        },
        GoTo() {
            sessionStorage.setItem(
                "crumbs",
                this.getTopClass(this.goodsData.class_id)
            );
            this.t++;

            this.$router.push({
                path: "/goodsClass",
                query: {
                    class_id: this.goodsData.class_id,
                    id: this.t
                }
            });
        },
        //店内排行，最近浏览跳转详情页
        JumpForDetails(id) {
            this.$router.push({
                path: "/shopsn_product",
                query: {
                    id: id
                }
            });
        },
        // 推荐配件 最佳组合立即购买
        goodsComboBuyNow(index) {
            if (index === 0) {
                this.$router.push({
                    name: "recommendAndGroupAccout",
                    query: {
                        id: this.addCarToString(this.GoodsAccessories.data)
                    }
                });
            } else {
                this.$router.push({
                    name: "recommendAndGroupAccout",
                    query: {
                        id: this.addCarToString(this.optimalPortfolio.data)
                    }
                });
            }
        },
        // 推荐配件 最佳组合加入购物车
        recommendAndGroup(index) {
            if (index === 0) {
                this.HTTP(
                    this.$httpConfig.recommendAndGroup,
                    {
                        contrast_id: this.addCarToString(
                            this.GoodsAccessories.data
                        )
                    },
                    "post",
                    false
                ).then(res => {
                    if (res.data.status) {
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
                                this.$router.push("/buyCar");
                            })
                            .catch(() => {});
                    }
                });
            } else {
                this.HTTP(
                    this.$httpConfig.recommendAndGroup,
                    {
                        contrast_id: this.addCarToString(
                            this.optimalPortfolio.data
                        )
                    },
                    "post",
                    false
                )
                    .then(res => {
                        if (res.data.status) {
                            this.$confirm("", "已成功加入购物车", {
                                confirmButtonText: "查看购物车",
                                cancelButtonText: "继续购物",
                                type: "success",
                                center: true,
                                lockScroll: false,
                                closeOnClickModal: false,
                                confirmButtonClass: "to-shopping-cart",
                                cancelButtonClass: "continue-shopping"
                            }).then(() => {
                                this.$router.push("/buyCar");
                            });
                        }
                    })
                    .catch(() => {});
            }
        },
        storeSearch() {
                this.$router.push({
                    name: "TheStoreSearch",
                    query: {
                        id: this.store_goods_id,
                        keyword: this.storeSearchData.keyword,
                        minMoney: this.storeSearchData.minMoney,
                        maxMoney: this.storeSearchData.maxMoney,
                        type: 0 //带价格搜索
                    }
                });
        },
        buy() {
            this.$router.push({
                path: "/setMealCar",
                query: {
                    id: this.GoodsPackage.package
                }
            });
        },
        //计算需要加入购物车的id
        addCarToString(data) {
            let totalArr = [];
            data.map((item, index) => {
                totalArr.push(item.goods_id || ~~item.id);
            });
            return totalArr + "";
        },
        addPackageCart() {
            this.HTTP(
                this.$httpConfig.addPackageCart,
                {
                    id: this.GoodsPackage.package
                },
                "post",
                true
            )
                .then(res => {
                    if (res.data.status === 1) {
                        this.$confirm("", "已成功加入购物车", {
                            confirmButtonText: "查看购物车",
                            cancelButtonText: "继续购物",
                            type: "success",
                            center: true,
                            lockScroll: false,
                            closeOnClickModal: false,
                            confirmButtonClass: "to-shopping-cart",
                            cancelButtonClass: "continue-shopping"
                        }).then(() => {
                            this.$router.push("/buyCar");
                        });
                    }
                })
                .catch(() => {});
        },
        // 计算套餐
        computedTotalPrice(data) {
            let totalPrice = 0;
            if (!(data instanceof Array)) {
                return;
            } else {
                data.map((item, index) => {
                    totalPrice += ~~item.price_member;
                });
            }
            return totalPrice;
        },
        // 计算原价
        computedTotal(data) {
            let totalPrice = 0;
            if (!(data instanceof Array)) {
                return;
            } else {
                data.map((item, index) => {
                    totalPrice += ~~item.goods_discount;
                });
            }
            return totalPrice;
        },
        // 店内商品排行
        getHotCommodities() {
            this.HTTP(this.$httpConfig.getHotCommodities, {}, "post").then(
                res => {
                    this.ShoppingRank = res.data.data.slice(0, 3);
                }
            );
        },
        // 最近浏览
        getMyFootFrint() {
            this.HTTP(this.$httpConfig.getMyFootFrint, {}, "post")
                .then(res => {
                    if (res.data.data.list) {
                        this.browser = res.data.data.list.slice(0, 3);
                    }
                })
                .catch(() => {});
        },
        //商品收藏
        goodsCollection() {
            this.HTTP(
                this.$httpConfig.setCollectionGoods,
                {
                    goods_id: this.goodsData.id
                },
                "post",
                false
            )
                .then(res => {
                    if (res.data.message == "收藏成功") {
                        this.collection_text1 = "已收藏";
                        this.icon_color = true;
                    } else {
                        this.collection_text1 = "收藏商品";
                        this.icon_color = false;
                    }
                })
                .catch(() => {});
        },
        addCar(price, storeId) {
            if (this.goodsData.shelves == 0) {
                alert("该商品已下架");
                return;
            }
            
            var ifactive = document.getElementsByClassName('ifactive');
            if (this.goodsId == this.$route.query.id && !(ifactive.length > 0)) {
                alert("请选择规格");
                return;
            }

            if (this.goodsNumber > this.goodsData.stock) {
                alert("库存不足");
                return;
            }
            var params = {
                goods_id: this.goodsId,
                goods_num: this.goodsNumber,
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
                        this.$router.push("/buyCar");
                    })
                    .catch(() => {});
            });
        },
        setup() {
            let that = this;
            window._bd_share_config = {
                common: {
                    bdSnsKey: {},
                    bdText: that.goodsData.title,
                    bdMini: "2",
                    bdPic: that.URL + that.defaultPicture,
                    bdStyle: "0",
                    bdSize: "16"
                },
                share: {}
            };
            const s = document.createElement("script");
            s.type = "text/javascript";
            s.src =
                "http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=" +
                ~(-new Date() / 36e5);
            document.body.appendChild(s);
        },
        getGoodsPackage(id) {
            this.HTTP(
                this.$httpConfig.GoodsPackage,
                {
                    goods_id: this.goodsData.id,
                    store_id: this.goodsData.store_id
                },
                "post",
                false
            )
                .then(res => {
                    const { values } = Object;

                    this.GoodsPackage.data = values(res.data.data);
                    if(this.optimalPortfolio.data > 0) {
                        
                    } else if(this.GoodsPackage.data.length > 0) {
                                this.isbor = 1;
                    }
                    this.GoodsPackage.package = res.data.data[0].package_id;
                })
                .catch(() => {});
        },
        async goodsSalesSum(id) {
            let res = await this.HTTP(
                this.$httpConfig.goodsSalesSum,
                {
                    goods_id: id
                },
                "post"
            );
            if (res.data.status) {
                this.info = res.data.data;
            }
        },
        getGoodsCombo(id) {
            this.HTTP(
                this.$httpConfig.GoodsCombo,
                {
                    goods_id: this.goodsData.id
                },
                "post"
            )
                .then(res => {
                    this.optimalPortfolio.data = res.data.data;
                    if(this.optimalPortfolio.data.length > 0) {
                        this.isbor = 0;
                    }
                })
                .catch(() => {});
        },
        //推荐配件
        getGoodsAccessories(id) {
            this.HTTP(
                this.$httpConfig.GoodsAccessories,
                {
                    goods_id: ~~this.$route.query.id
                },
                "post"
            )
                .then(res => {
                    this.GoodsAccessories.data = res.data.data;
                })
                .catch(() => {});
        },
        //去店铺
        toStore() {
            if (this.shop_data.store_id != undefined) {
                window.open(
                    window.location.origin +
                        "/storehome?id=" +
                        this.shop_data.store_id
                );
            }
        },
        //去购买
        purchase() {
            if (this.goodsData.shelves == 0) {
                alert("该商品已下架");
                return;
            }
            var ifactive = document.getElementsByClassName('ifactive');
            if (this.goodsId == this.$route.query.id && !(ifactive.length > 0)) {
                alert("请选择规格");
                return;
            }
            if (this.goodsNumber > this.goodsData.stock) {
                alert("库存不足");
                return;
            }
            let MaskBox = document.getElementById(
                "bdshare_weixin_qrcode_dialog"
            );
            if (MaskBox) {
                MaskBox.parentNode.removeChild(MaskBox);
            }
            this.$router.push({
                name: "confirmOrder",
                params: {
                    goods_id: this.goodsData.id,
                    num: this.goodsNumber
                }
            });
        },
        styleChange(index, url) {
            this.sign = index;
            this.defaultPicture = url;
        },
        //商品数量加
        plus() {
            if (parseInt(this.goodsNumber) >= parseInt(this.goodsData.stock)) {
                return;
            }
            this.goodsNumber++;
        },
        //商品数量减
        reduce() {
            if (!this.goodsNumber || parseInt(this.goodsNumber) <= 1) {
                this.goodsNumber = 1;
                return;
            }
            this.goodsNumber--;
        },
        //设置数量
        setAmount() {
            let num = this.goodsNumber;
            let stock = parseInt(this.goodsData.stock);
            let reg = /(^([1-9])([0-9]*)$|^[1-9]$)/;
            if (!num) {
                this.goodsNumber = "";
            } else {
                if (!reg.test(num)) {
                    this.goodsNumber = 1;
                    return;
                }
            }
            if (num >= stock) {
                this.goodsNumber = this.goodsData.stock;
            }
        },
        //收藏店铺
        shopCollection() {
            if (this.collection_text == "收藏本店") {
                this.HTTP(
                    this.$httpConfig.setAttenStore,
                    {
                        id: this.shop_data.store_id
                    },
                    "post",
                    false
                )
                    .then(res => {
                        this.collection_text =
                            res.data.status == 1 ? "取消收藏" : "收藏本店";
                    })
                    .catch(e => {
                        console.log(e);
                    });
            } else {
                this.HTTP(
                    this.$httpConfig.setCancelAttenStore,
                    {
                        id: this.shop_data.store_id
                    },
                    "post",
                    false
                )
                    .then(res => {
                        this.collection_text =
                            res.data.status == 1 ? "收藏本店" : "取消收藏";
                    })
                    .catch(() => {});
            }
        },
        //店铺信息
        getShopData(id) {
            this.HTTP(
                this.$httpConfig.getStoreDetails,
                {
                    id: id
                },
                "post"
            )
                .then(res => {
                    this.shop_data = res.data.data;
                    this.shopName=res.data.data.shop_name;
                    this.store_goods_id = res.data.data.store_id;
                     let title = this.$constant.webComContent;
                    this.showScroll.scrollTitle(title);
                    this.getCouponInfo();
                    this.collection_text =
                        res.data.data.if_atten == 0 ? "收藏本店" : "取消收藏";
                })
                .catch(() => {});
        },
        //选择规格
        addClass(key, group_id, term_id) {
            let selectList = [],
                sortList = "",
                str = "",
                goodsId = "";
            for (let i in this.spec.spec_children) {
                if (group_id === this.spec.spec_children[i].spec_id) {
                    if (term_id === this.spec.spec_children[i].id) {
                        if (this.spec.spec_children[i].default_spec) {
                            this.$set(
                                this.spec.spec_children[i],
                                "default_spec",
                                false
                            );
                        } else {
                            this.$set(
                                this.spec.spec_children[i],
                                "default_spec",
                                true
                            );
                        }
                    } else {
                        this.$set(
                            this.spec.spec_children[i],
                            "default_spec",
                            false
                        );
                    }
                }
            }
            //获取选择的规格
            for (let j in this.spec.spec_children) {
                if (this.spec.spec_children[j].default_spec === true) {
                    selectList.push(this.spec.spec_children[j].id);
                }
            }
            //排序
            sortList = selectList.sort((a, b) => {
                return a > b ? 1 : -1;
            });
            //字符串拼接
            str = sortList;
            //对比
            for (let i in this.specData.goods) {
                if(this.specData.goods[i].key) {
                    var goodsKey = this.specData.goods[i].key.split("_");
                    var count = 0;
                    for (var j = 0; j < str.length; j++) {
                        if (goodsKey.indexOf(str[j]) != -1) {
                            count++;
                        }
                    }
                    if (count == goodsKey.length) {
                        this.goodsId = this.specData.goods[i].goods_id;
                        goodsId = this.goodsId;
                        break;
                    } else {
                        goodsId = "";
                    }
                }
            }
            if (goodsId) {
                this.goodsId = goodsId;
                this.getGoodsDetails(goodsId);
            } else {
                this.goodsId = this.$route.query.id;
                this.getGoodsDetails(this.goodsId);
            }
        },
        //获取商品规格
        getGoodsSpec(id, type) {
            this.HTTP(
                this.$httpConfig.goodsSpecs,
                {
                    id: id
                },
                "post"
            )
                .then(res => {
                    this.specData = res.data.data;
                    this.spec = res.data.data.spec;
                    if (type == 2) {
                        
                        this.getDefaultGoodsId();
                    }
                })
                .catch(err => {
                    this.getGoodsDetails(this.$route.query.id, 2);
                });
        },
        getDefaultGoodsId() {
            var key = [];
            for (var i in this.spec.spec_group) {
                for (var j = 0; j < this.spec.spec_children.length; j++) {
                    if (this.spec.spec_children[j].spec_id == i) {
                        this.$set(
                            this.spec.spec_children[j],
                            "default_spec",
                            true
                        );
                        key.push(this.spec.spec_children[j].id);
                        break;
                    }
                }
            }

            //获取选中的是哪个商品
            for (var i in this.specData.goods) {
                if(this.specData.goods[i].key) {
                    var goodsKey = this.specData.goods[i].key.split("_");
                    var count = 0;
                    for (var j = 0; j < key.length; j++) {
                        if (goodsKey.indexOf(key[j]) != -1) {
                            count++;
                        }
                    }
                    if (count == key.length) {
                        this.goodsId = this.specData.goods[i].goods_id;
                        
                        this.getGoodsDetails(this.goodsId, 2);

                    }
                } 
            }
        },
        getTopClass(data) {
            let obj = JSON.parse(localStorage.getItem("class"));
            return obj[data];
        },
        //获取商品信息
        async getGoodsDetails(id, type) {
            let res = await this.HTTP(
                this.$httpConfig.getGoodsDetails,
                {
                    id: id
                },
                "post"
            );
            if (res.data.status) {
                this.goodsData = {}
                this.get_store_id = res.data.data.store_id;
                this.get_goods_id = res.data.data.id;
                this.get_main_id=res.data.data.p_id;
                this.goodsData = res.data.data;
                this.video = res.data.data.video;
                this.productTitle = this.goodsData.title;
                this.imgList = this.goodsData.images;
                if (this.goodsData.images.length != 0) {
                    this.defaultPicture = this.goodsData.images[0].pic_url;
                }
                await this.setup();
                this.getPromotionDetail(id);
                await this.getGoodsStoreClass(this.goodsData.store_id); // 店铺导航商品分类
                await this.getShopData(this.goodsData.store_id);
                await this.getGoodsPackage(this.goodsData.id);
                await this.getGoodsCombo(this.goodsData.id);
                await this.inStoreRanking();
                await this.goodsSalesSum(id);
                this.getDiscountInfo(res.data.data.store_id);
                this.$nextTick(() => {
                    this.magnify();
                });
            }
        },
        //店内排行榜
        inStoreRanking() {
            this.HTTP(
                this.$httpConfig.getGoodsStoreRankingsList,
                {
                    store_id: parseInt(this.goodsData.store_id)
                },
                "post"
            )
                .then(res => {
                    this.Ranking = res.data.data;
                })
                .catch(() => {});
        },
        ShopImageDetail(id) {
            this.HTTP(
                this.$httpConfig.ShopImageDetail,
                {
                    goods_id: id
                },
                "post"
            )
                .then(res => {
                    if (res.data.status) this.shopImage = res.data.data;
                })
                .catch(() => {});
        },
        getAllCommentContent(type) {
            this.isCurrentComment = type;
            this.HTTP(
                this.$httpConfig.getAllCommentContent,
                {
                    goods_id: this.$route.query.id,
                    type: type
                },
                "post"
            )
                .then(res => {
                    this.comments = res.data.data;
                    if (res.data.status == 1) {
                        this.allCount = res.data.data.allCount;
                        this.allNice = res.data.data.allNice;
                        this.allHeight = res.data.data.allHeight;
                        this.allBad = res.data.data.allBad;
                        this.allImg = res.data.data.allImg;
                    }
                    this.$previewRefresh();
                    this.nice100 =
                        (this.comments.allNice / this.comments.allCount) * 100;
                    this.center100 =
                        (this.comments.allHeight / this.comments.allCount) *
                        100;
                    this.bad100 =
                        (this.comments.allBad / this.comments.allCount) * 100;

                    this.$set(
                        $(".skitt-line")[0].style,
                        "width",
                        this.nice100 + "%"
                    );
                    this.$set(
                        $(".skitt-line")[1].style,
                        "width",
                        this.center100 + "%"
                    );
                    this.$set(
                        $(".skitt-line")[2].style,
                        "width",
                        this.bad100 + "%"
                    );
                })
                .catch(() => {
                    this.comments = [];
                });
        },
        getGoodsConsultation() {
            this.HTTP(
                this.$httpConfig.getAllCommentContent,
                {
                    goods_id: this.$route.query.id
                },
                "post"
            )
                .then(res => {
                    this.consultationList = res.data.data;
                })
                .catch(() => {});
        },
        getGoodsStoreClass(id) {
            this.HTTP(
                this.$httpConfig.storeClass,
                {
                    store_id: id
                },
                "post"
            )
                .then(res => {
                    this.storeClassArr = res.data.data;
                })
                .catch(() => {});
        },
        change(index) {
            this.isbor = index;
            if (index === 1) {
                this.getGoodsPackage(this.goodsData.id);
            } else if (index === 2) {
                this.getGoodsCombo(this.goodsData.id);
            }
            if (index === 0) {
                this.getGoodsCombo(this.goodsData.id);
            }
            this.itemall = this.items[index];
        },
        block(index) {
            this.fun = index;
            this.isactive = index;
        },

        cut(index) {
            this.isborder = index;
            this.basebox = this.base[index];
        }
    }
};
</script>

<style lang="less" scoped>
.full-display-title {
    position: absolute;
    z-index: 222;
    background: #ffffff;
    border: 1px solid #767676;
    padding: 4px;
    color: #575757;
}
.el-dropdown-menu {
    position: absolute !important;
    margin: -3px -92px 0 5px !important;
    background-color: #FFF;
    border: 1px solid #de2d35;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.el-dropdown-menu__item {
  line-height: 6px !important;
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

<style>
.el-loading-spinner {
    top: 60% !important;
    margin-top: -21px;
    width: 100%;
    text-align: center;
    position: absolute;
}
.el-loading-spinner i {
    color: red !important;
}
#qrCode {
    position: absolute;
    right: 550px;
}
#showTitle{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  width: 100px;
  -webkit-line-clamp: 1;      /* 可以显示的行数，超出部分用...表示*/
  -webkit-box-orient: vertical;
}
#showTitle:hover{
    color: red;
    cursor: pointer;
}
#discount {
    font-size: 12px;
    cursor: pointer;
}

::-webkit-scrollbar {
    display: none;
}

.bd_weixin_popup_foot {
    display: none;
}

.p {
    display: inline-block;
}

.el-message-box--center {
    padding-bottom: 50px;
}

.el-message-box--center .el-message-box__header {
    padding-top: 50px;
}

.el-button {
    font-size: 14px;
    font-weight: inherit;
}

.continue-shopping {
    padding: 13px 30px !important;
}

.continue-shopping:hover {
    color: #606266;
    border: 1px solid #dcdfe6;
    background-color: #fff;
}

.to-shopping-cart {
    background-color: #d02629 !important;
    border: 1px solid #d02629 !important;
    padding: 13px 26px !important;
}

.to-shopping-cart:hover {
    background-color: #d02629 !important;
    color: #fff !important;
}
#detail-img img {
        width: 100% !important;
        height: auto !important;
        padding-bottom: 20px !important;
    }
#detail-img p{
    font-size: 14px !important;
    line-height: 24px !important;
    text-align: justify !important;
    padding-top: 0px !important;
}
.el-select-dropdown__list {
    list-style: none;
    padding: 0 !important;
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 1px !important;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.el-select {
    display: inline-block;
    position: relative;
    margin-left: 15px !important;
}
.select_modal[data-v-54adb074] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 435px !important;
}
.el-tabs.el-tabs--card.el-tabs--top {
    width: 435px !important;
}
.el-tabs__item {
    padding: 0 20px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    width: 108px !important;
}
</style>

<style lang="scss" scoped>
    .tab-input {
        margin-left: 83px;
        margin-top: -28px;
    }
    .mint-field-core {
        padding: 10px 30px 10px 10px;
        font-size: 14px;
        width: 260px;
        // height: 38px;
        height: 35px;
        border: 1px solid #a7a7a7;
        text-align: center;
        background: #fff;
        // border-radius: 5px;
        // color: #777;
        color: #666666;
        overflow: hidden;
        cursor: pointer;
    }
    .tab-icon {
        width: 20px;
        height: 20px;
        margin-left: -26px;
    }
    .popup-div {
        width: 550px;
        height: auto;
        background: #ffffff;
        z-index: 9999;
        position: absolute;
        border: 1px solid #f2f2f2;
        overflow: scroll;
        margin-top: 10px;
        padding: 0 20px;
        box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
        -o-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
        -ms-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
        .picker-toolbar {
            display: flex;
        }
    .select1{
        .address-area-tit {
            line-height: 35px;
            padding: 0;
            box-shadow: none;
            border-bottom: 0;
            height: 35px;
            border-bottom: 2px solid #ed3851;
            li{
                position: relative;
                left: 0;
                margin-right: 15px;
                height: 35px;
                width: 94px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-left: 18px;
                font-size: 12px;
                display: inline-block;
                border: 1px solid #ccc;
                border-bottom: 0;
                cursor: pointer;
            }
            li.active {
                border: 2px solid #ed3851;
                border-bottom: 0;
                color: #ed3851;
                background: #fff;
                cursor: pointer;
            }
            .active-icon {
               width: 18px;
               height: 18px;
               margin-top: -2px;
               position: relative;
            }
            .cross-icon {
                width: 18px;
                height: 18;
                float: right;
                margin-top: 8px;
            }
        }
        .address-city {
            margin: 10px 0;
            overflow: hidden;
            overflow-y: scroll;
            width: calc(100% + 30px);
            li{
                line-height: 30px;
                font-size: 12px;
                cursor: pointer;
                float: left;
                width: 123px;
                }
                li.active {
                color: #ed3851;
                cursor: pointer;
            }
            }
        }
    }
   .alert-display{     
      .lvoucher {
        width: 110px;
        border: 2px dotted #d02629;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 25px;
        color: #d02629;
        cursor: pointer;
      }
      
    }
  .el-popper[x-placement^=bottom] {
      margin-left: 25px;
  }
  .jjnone {
      display: none;
  }
  .jj:hover .row{
      color: #444 !important;
  }
  .jj{
      border: 1px solid #d02629;
      padding: 0 !important;
      margin: 7px 0 0 1px !important;
      .kk{
          line-height: 30px !important;
          .voucherBoxx {
              border-radius: 8px;
              background: white;
              display: flex;
              flex-direction: column;
              padding: 10px 20px 20px;
              li {
                  display: flex;
                  flex-direction: row;
                  margin: 5px 0;
                  .MoneyBox {
                    display: flex;
                    align-items: center;
                  }
                  .money {
                      width: 70px;
                      height: 30px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      border: 1px solid #f4d6d6;
                      border-radius: 5px;
                      color: #d02629;
                  }
                  .col {
                      flex: 1;
                      flex-direction: column;
                      padding: 0 0 10px 0;
                  }
                  .row {
                      display: flex;
                      flex-direction: row;
                      margin-left: 30px;
                      padding: 0 0 0 0;
                  }
                  div:last-child {
                      display: flex;
                      align-items: center;
                      margin-right: 30px;
                  }
                  .btn-mi{
                      margin: 0 0 10px 0;
                      .btn{
                          background: #d02629;
                          color: #fff;
                      }
                      .btnnn{
                          background: gray;
                          color: #fff;
                      }
                  }
              }
          }
      }
  }
</style>

<style lang="less" scoped>
.GoodsAccessories {
    overflow-x: auto;
    height: 200px;
}

.all {
    margin-left: 15px;
}

.class_one,
.class_three {
    .all {
        p:nth-of-type(2) {
            text-decoration: none !important;
            color: white !important;
        }
    }
}

@color: #ff5601;

.l {
    float: left;
}

.r {
    float: right;
}

.nullData {
    font-size: 35px;
    color: #999999;
    font-weight: 400;
    display: flex;
    flex: 1;
    justify-content: center;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
        0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
        0 5px 10px rgba(0, 0, 0, 0.25);
}

.center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
}

.header {
    height: 46px;
    line-height: 46px;
    font-size: 12px;
    color: #636260;

    a {
        color: #636260;
    }

    img {
        margin: 17px 7px 0 0;
    }

    .xiala {
        display: inline-block;
        width: 82px;
        height: 25px;
        border: 1px solid #d1d1d1;
        text-align: center;
        line-height: 23px;
        margin-left: 7px;
        position: relative;

        .yincang {
            border-right: 1px solid #d1d1d1;
            border-left: 1px solid #d1d1d1;
            position: absolute;
            top: 22px;
            left: -1px;

            span {
                width: 80px;
                height: 23px;
                border-bottom: 1px solid #d1d1d1;
                display: inline-block;
                background: #fff;
            }
        }
    }
}

.line {
    border-bottom: 1px solid #e8e8e8;
    width: 100%;
    height: 40px;
}

.top {
    overflow: hidden;

    .left {
        width: 400px;
        position: relative;

        .bigImg {
            width: 400px;
            // height: 400px;
            height: 420px;
            border: 1px solid #D2D2D2;
            overflow: hidden;
            position: relative;

            img {
                position: absolute;
                // top: 0;
                top: 20px;
                // left: 0;
                left: 30px;
                // width: 400px;
                width: 300px;
                // height: 400px;
                height: 390px;
            }

            #winSelector {
                width: 200px;
                height: 200px;
                position: absolute;
                cursor: crosshair;
                display: none;
                filter: alpha(opacity=15);
                -moz-opacity: 0.15;
                opacity: 0.15;
                background-color: #000;
            }
        }

        .see-video{
            width: 100%;
            margin: -200px 0 0 0;
            position: absolute;
            z-index: 20;
            text-align: center;
            .playimg{
            width: 70px;
            height: 70px;
            }
        }

        #bigView {
            width: 400px;
            height: 400px;
            position: absolute;
            top: 0;
            overflow: hidden;
            left: 400px;
            z-index: 999;
            display: none;

            .big-img {
                width: 800px;
                height: 800px;
                position: absolute;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .spec-scroll {
            clear: both;
            margin-top: 14px;
            width: 405px;
            height: 60px;

            .scrollbutton {
                cursor: pointer;
                width: 15px;
                height: 52px;
                border: 1px solid #dcdcdc;
                text-align: center;
                line-height: 52px;
                margin-top: 4px;

                i {
                    color: #dcdcdc;
                }
            }

            .scrollbutton:hover i {
                color: #9b9b9b;
            }

            .scrollbutton.disabled {
                i {
                    color: #dcdcdc;
                }
            }

            .img-list {
                float: left;
                position: relative;
                width: 375px;
                height: 60px;
                overflow: hidden;

                ul {
                    position: absolute;
                    height: 60px;

                    li {
                        float: left;
                        width: 75px;
                        height: 58px;

                        img {
                            width: 58px;
                            height: 58px;
                            display: block;
                            margin: 0 auto;
                            border: 1px solid #d1d1d1;
                        }

                        img.active {
                            border-color: #a89b4c;
                        }
                    }
                }
            }
        }

        .fenxiang {
            height: 40px;
            line-height: 40px;
            position: relative;

            i {
                color: #b8a698;
            }

            span {
                display: inline-block;
                cursor: pointer;
                font-size: 12px;
                color: #abafb0;
                margin-right: 25px;
            }

            .share:hover .share_content {
                display: block;
            }

            .share_content {
                display: none;
                background-color: #fff;
                border: solid 1px #e9e9e9;
                padding: 5px;
                width: 43px;
                position: absolute;
                bottom: 40px;
                left: 0;
            }

            .share_btn {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: none;
                float: left;
                margin: 3px 0;
                box-sizing: content-box;
                padding: 0;
            }

            .share_btn:hover {
                opacity: 0.8;
            }

            .weixin_share {
                background: url(../../assets/img/txweixin.png) no-repeat;
            }

            .weibo_share {
                background: url(../../assets/img/xlweibo.png) no-repeat;
            }

            .qzone_share {
                background: url(../../assets/img/qzone.png) no-repeat;
            }

            .qq_share {
                background: url(../../assets/img/txqq.png) no-repeat;
            }
        }
    }

    .central {
        width: 549px;
        margin-left: 15px;

        .goods-title {
            font-size: 16px;
            color: #333333;
            width: 90%;
            margin: 0 0 18px 9px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        .description {
            font-size: 14px;
            color: #d02629;
            margin: 0 0 9px 9px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }

        .price {
            // background-image: url(../../assets/img/beijing.jpg);
            background-image: url(../../assets/img/yi-17.png);
            width: 790px;
            height: 115px;
            p,
            .activity-list {
                font-size: 12px;
                // color: #9a9a9a;
                color: #999999;
                margin-left: 25px;
                width: 100%;
            }

            // p:nth-of-type(1) {
            //     margin-top: 10px;

            //     span {
            //         margin-left: 14px;
            //         font-size: 9px;
            //         color: #575757;
            //         text-decoration: line-through;
            //     }
            // }

            // p:nth-of-type(2) {
            //     margin-top: 8px;

            //     span {
            //         font-size: 18px;
            //         color: #d62b3e;
            //         margin-left: 10px;
            //     }
            // }
            p:nth-of-type(1) {
                margin-top: 25px;

                span {
                    font-size: 24px;
                    color: #CC353E;
                    margin-left: 10px;
                    font-weight: bold;
                    margin-right: 70px;
                }
            }

            .couponSliceDiv {
                font-size: 12px;
                // color: #9a9a9a;
                color: #999999;
                margin-left: 25px;
                padding-top: 15px;
                width: 100%;
                display: flex;
                span {
                    font-size: 14px;
                    color: #333333;
                    margin-left: 42px;
                    margin-right: 102px;
                }

                // .couponSlice {
                //     width: 455px;
                //     margin-top: -5px;
                //     display: flex;
                // }
                // img {
                //     width: 140px;
                //     height: 23px;
                //     margin-left: 10px;
                // }
                // .couponText {
                //     font-size: 12px;
                //     color: #ffffff;
                //     margin-top: -21px;
                //     width: 108px;
                //     text-align: center;
                // }
            }

            .activity-list {
                display: flex;
                align-items: center;
                position: relative;
                padding-top: 15px;
                color: #9a9a9a;
                font-size: 12px;

                .activity {
                    margin-bottom: 3px;
                    display: flex;
                    align-items: center;

                    .num {
                        margin-left: 4px;
                        color: #d02629;
                    }

                    img {
                        width: 15px;
                        height: 15px;
                        margin-left: 10px;
                    }
                }
            }

            .man {
                width: 46px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                background: #d02629;
                color: #fff;
                display: inline-block;
                margin-left: 10px;
            }

            .jian {
                margin: 0 0 0 10px;
            }

            .both {
                font-size: 12px;
                color: #616161;
                margin-left: 10px;
            }  
        }

        .dizhi {
            // margin-top: 12px;
            margin-top: 40px;

            p {
                font-size: 12px;
                // color: #9a9a9a;
                color: #999999;
                margin-left: 25px;
                width: 100%;

                .gp-label {
                    margin-right: 25px;
                    line-height: 22px;
                }
            }

            .spec-group {
                font-size: 12px;
                color: #9a9a9a;
                width: 100%;
                line-height: 20px;
                padding-left: 60px;
                margin-left: 0;
                overflow: hidden;


            .spec-term-list {
                margin-left: 25px;
                margin-bottom: 10px;
                border: 1px solid #c6c6c6;
                float: left;
                display: flex;
                cursor: pointer;
                background-color: #f7f7f7;
                .addspec-photo{
                    width: 50px;
                    height: 40px;
                }
                .spec-term-name {
                    font-size: 12px;
                    margin: 10px;
                }
                &:hover {
                    border-color: #fe2d55;
                }
            }
                .active {
                    border-color: #fe2d55;
                    background: #f1f1f1;
                }
                .group-name {
                    float: left;
                    line-height: 30px;
                    width: 60px;
                    text-align: right;
                    margin-left: -60px !important;
                    padding: 3px 0 0 0;
                }
            }

            .spec-group:nth-child(1) {
               padding-top: 10px;
                padding-bottom: 10px;
            }

            .send-to {
                margin-top: 14px;
                display: flex;
                align-items: center;

                .yunfei {
                    // color: #535353;
                    color: #555555;
                    display: inline-block;
                    line-height: 22px;
                    margin-left: 295px;
                }
            }

            .g-service {
                margin-top: 20px;
                margin-bottom: 20px;
                span {
                    font-size: 12px;
                    margin-left: 22px;
                }

                .yellow {
                    margin-left: 0;
                    cursor : pointer;
                    color: #D02629;
                }
            }
        }

        .leiji {
            // height: 40px;
            height: 50px;
            background: #F9F9F9;
            // border-top: 1px solid #f1f1f1;
            // border-bottom: 1px solid #f1f1f1;
            margin-left: 20px;
            margin-top: 40px;

            p {
                float: left;
                width: 168px;
                height: 20px;
                line-height: 20px;
                line-height: 20px;
                text-align: center;
                border-left: 1px solid #e4e0dd;
                // margin-top: 10px;
                margin-top: 15px;

                span {
                    color: #CC353E;
                    margin-left: 7px;
                }
            }

            p:first-child {
                border-left: 0;
            }
        }

        .shuliang {
            margin-top: 13px;
            margin-bottom: 20px;
            margin-left: 26px;
            overflow: hidden;

            span {
                font-size: 12px;
                color: #a6a6a6;
                line-height: 32px;
            }

            .inp {
                width: 80px;
                height: 30px;
                border: 1px solid #a7a7a7;
                margin: 0 9px 0 30px;

                input {
                    width: 63px;
                    height: 100%;
                    border-right: 1px solid #a7a7a7;
                    padding-left: 10px;
                }

                span {
                    width: 15px;
                    height: 14px;
                    background: #eef4f2;
                    color: #666;
                    cursor: pointer;

                    i {
                        font-size: 7px;
                        float: left;
                        margin-top: 4px;
                        margin-left: 4px;
                    }
                }

                .btn-plus {
                    border-bottom: 1px solid #a7a7a7;
                }

                span.disabled {
                    color: #ccc;
                    cursor: not-allowed;
                }
            }
        }

        .buy {
            // margin-top: 16px;
            margin-top: 30px;

            span {
                cursor: pointer;
                width: 160px;
                height: 38px;
                line-height: 38px;
                font-size: 16px;
                background: #ffeded;
                border: 1px solid #d02629;
                display: inline-block;
                color: #d02629;
                // border-radius: 5px;
                border-radius: 5px;
            }

            span:nth-of-type(1) {
                margin-left: 80px;
                text-align: center;
            }

            span:nth-of-type(2) {
                margin-left: 9px;
                background: #d02629;
                color: #fff;

                img {
                    float: left;
                    margin: 8px 10px 0 22px;
                }
            }

            div {
                line-height: 38px;
                font-size: 12px;
                color: #757575;

                img {
                    margin-left: 7px;
                }
            }
        }
    }

    .right {
        width: 210px;
        border: 1px solid #d2d2d2;
        min-height: 510px;

        .header {
            height: 40px;
            line-height: 40px;
            background: #f9f9f9;
            width: 100%;
            padding-left: 14px;
            font-size: 14px;
            color: #3b3b3b;
            .first-name{
                color: #ffffff;
                background-color: #de2d35;
                font-size: 12px;
                border-radius: 3px;
                padding: .8px 7px 1px 7px;
            }
        }

        .zonghe {
            width: 192px;
            height: 111px;
            border-bottom: 1px solid #f2f2f2;
            margin-left: 11px;

            p.left {
                width: 88px;
                text-align: center;
                height: 100%;
                font-size: 12px;
                color: #7c7c7c;
                margin-top: 0;

                span {
                    font-size: 26px;
                    color: #d02629;
                    margin: 26px 0 0 0;
                    display: block;
                }
            }

            p {
                float: left;
                height: 17px;
                font-size: 12px;
                color: #646464;
                margin-top: 14px;
                margin-left: 2px;

                span {
                    color: #d02629;
                    margin-left: 11px;
                }
            }

            p.first {
                margin-top: 19px;
            }
        }

        .kefu {
            min-height: 99px;
            border-bottom: 1px solid #f2f2f2;
            width: 192px;
            margin-left: 11px;

            .getReward {
                display: flex;
                justify-content: center;
                background: #d02629;
                color: #fff;
                margin: 4px 1px;
                color: #fff;
                border-radius: 4px;
                width: 93%;
                position: relative;
                top: 40px;
                cursor : pointer;
            }

            p {
                line-height: 28px;
                color: #a2a2a2;
                font-size: 12px;
                margin-left: 13px;
            }

            p:first-child {
                margin: 16px 0 7px 13px;
            }

            p:nth-of-type(2) {
                cursor: pointer;

                span {
                    width: 88px;
                    height: 26px;
                    line-height: 26px;
                    border: 1px solid #eeeeee;
                    background: #fbfbf1;
                    display: inline-block;
                    color: #5f6772;
                    margin-left: 14px;

                    img {
                        margin: 5px 6px 0 10px;
                    }
                }
            }
        }

        .dian {
            height: 76px;
            border-bottom: 1px solid #d3d3d3;
            margin-left: 11px;
            width: 192px;

            p {
                margin-top: 40px;

                span {
                    width: 90px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    display: inline-block;
                    font-size: 12px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                span:nth-of-type(1) {
                    background: #d02629;
                    color: #fff;
                    border: 1px solid #d02629;
                }

                span:nth-of-type(2) {
                    background: #fafafa;
                    color: #656565;
                    border: 1px solid #e4e4e4;
                }
            }
        }

        .instore {
            .guanjianzi {
                width: 168px;
                height: 28px;
                border: 1px solid #d2d2d2;
                margin: 20px 0 10px 20px;
                padding-left: 5px;
            }

            .picdiv {
                margin-left: 20px;

                span {
                    width: 20px;
                    float: left;
                    line-height: 28px;
                    text-align: center;
                    color: #d1d1d1;
                }
            }

            .pic {
                width: 73px;
                height: 28px;
                border: 1px solid #d2d2d2;
                padding-left: 5px;
            }

            p {
                cursor: pointer;
                float: left;
                width: 170px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                color: #fff;
                font-size: 12px;
                background: #d02629;
                border-radius: 3px;
                margin: 10px 0 0 20px;
            }
          
        }
    }
}

.middle {
    height: 283px;
    margin-top: 20px;

    .tab {
        width: 100%;
        display: flex;

        ul:first-child {
            display: flex;
        }

        ul {
            border-left: 1px solid #e8e8e8;

            li {
                height: 40px;
                width: 94px;
                text-align: center;
                line-height: 40px;
                border: 1px solid #e8e8e8;
                border-left: 0;
                cursor: pointer;
            }

            .bor {
                border-bottom: 0;
                border-top-color: #d02629;
                color: #d02629;
            }
        }

        div {
            height: 40px;
            border: 1px solid #e8e8e8;
            border-left: 0;
            width: 917px;
        }
    }

    .taocan {
        width: 100%;
        height: 242px;
        border: 1px solid #e8e8e8;
        border-top: 0;
        text-align: center;
        display: flex;
        align-items: center;

        .shangpin {
            width: 155px;
            text-align: center;
            margin-left: 15px;

            img {
                margin: 14px auto;
                display: block;
                width: 142px;
                height: 124px;
            }

            p {
                font-size: 12px;
                color: #646464;
                cursor: pointer;
                text-align: left;
            }

            .set-meal-title {
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            p:nth-of-type(1) {
                &:hover {
                    color: red;
                }
            }

            p:nth-of-type(2) {
                color: #cc3441;
                margin-top: 12px;
            }
        }

        .add {
            margin: 84px 12px 0;
        }

        .all {
            p {
                cursor: pointer;
            }

            p:nth-of-type(1) {
                color: #bf1e2d;
                font-size: 12px;

                span:nth-of-type(1) {
                    font-size: 14px;
                }

                span:nth-of-type(2) {
                    width: 72px;
                    height: 20px;
                    display: inline-block;
                    background: #343434;
                    color: #fff;
                    text-align: center;
                    line-height: 20px;
                    margin-left: 20px;
                }
            }

            p:nth-of-type(2) {
                font-size: 12px;
                color: #323232;
                text-decoration: line-through;
            }

            .same {
                width: 112px;
                height: 24px;
                border: 1px solid #d02629;
                text-align: center;
                line-height: 24px;
                border-radius: 3px;
                margin-top: 18px;
                font-size: 12px;
            }

            .buy {
                background: #ffeded;
                color: #d02629;
            }

            .car {
                background: #d02629;
                color: #fff;
                margin-top: 10px;
            }
        }
    }
}

.bottom {
    overflow: hidden;
    margin-top: 11px;

    .left {
        width: 204px;
        overflow: hidden;

        .zhongxin {
            width: 100%;
            height: 400px;
            border: 1px solid #e5e5e5;

            .kefu {
                height: 99px;
                width: 100%;
                text-align: center;
                font-size: 12px;
                color: #828282;
                border-bottom: 1px solid #e5e5e5;

                span {
                    font-size: 23px;
                    color: #2f2f2f;
                    margin: 28px 0 8px 0;
                    display: inline-block;
                    cursor: pointer;
                }
            }

            .zixun {
                line-height: 40px;
                border-bottom: 1px solid #e5e5e5;
                font-size: 12px;
                padding-left: 14px;
                color: #343434;
                width: 100%;
            }

            .qq {
                height: 50px;
                border-bottom: 1px solid #e5e5e5;
                width: 100%;
                cursor: pointer;

                p {
                    font-size: 12px;
                    color: #7f7f7f;
                    margin-left: 17px;

                    img {
                        margin: 0 7px 0 15px;
                    }
                }

                p:nth-of-type(1) {
                    margin-top: 16px;
                }

                p:nth-of-type(2) {
                    margin-top: 21px;
                }

                p:nth-of-type(3) {
                    margin-top: 46px;
                }
            }

            p.time {
                color: #343434;
                line-height: 40px;
                padding-left: 14px;
                font-size: 12px;
            }
        }

        .fenlei {
            overflow: hidden;
            margin-top: 10px;
            width: 100%;
            border: 1px solid #e5e5e5;

            p {
                line-height: 40px;
                background: #f9f9f9;
                font-size: 14px;
                color: #555;
                padding-left: 11px;
            }

            .outer {
                margin-top: 16px;
                margin-bottom: 20px;

                .outerli {
                    cursor: pointer;
                    line-height: 30px;
                    background: url(../../assets/img/jiahao.jpg) no-repeat top
                        8px left 29px;
                    font-size: 12px;
                    color: #6b6b6b;

                    span {
                        padding-left: 53px;
                    }

                    .coreli {
                        font-size: 12px;
                        color: #6b6b6b;

                        &:hover {
                            background: #f5f5f5;
                        }

                        .coreli2 {
                            margin-left: 20px;
                            font-size: 12px;
                            color: #666;

                            &:hover {
                                background: #ddd;
                            }
                        }
                    }
                }

                .active {
                    background: url(../../assets/img/jianhao.jpg) no-repeat top
                        8px left 29px;
                }
            }
        }

        .paihang {
            overflow: hidden;
            margin-top: 10px;
            width: 100%;
            border: 1px solid #e5e5e5;

            .shangpin {
                line-height: 40px;
                background: #f9f9f9;
                font-size: 14px;
                color: #555;
                padding-left: 11px;
            }

            ul {
                li {
                    width: 168px;
                    margin: 10px 17px;

                    p {
                        font-size: 12px;
                        color: #363636;
                        cursor: pointer;
                    }

                    p:nth-of-type(1) {
                        margin: 10px 0;
                        width: 100%;

                        &:hover {
                            color: red;
                        }
                    }

                    p:nth-of-type(2) {
                        color: #aa3e4b;
                    }

                    p:nth-of-type(3) {
                        margin-right: 16px;

                        span {
                            color: #ac9d4a;
                        }
                    }
                }
            }
        }

        .liulan {
            overflow: hidden;
            margin-top: 10px;
            width: 100%;
            border: 1px solid #e5e5e5;

            .zuijin {
                line-height: 40px;
                background: #f9f9f9;
                font-size: 14px;
                color: #555;
                padding-left: 11px;
            }

            ul {
                overflow: hidden;

                li {
                    width: 195px;
                    border-bottom: 1px solid #e9e9e9;
                    margin: 0 4px;

                    img {
                        width: 170px;
                        margin: 10px 9px 0 6px;
                    }

                    p {
                        font-size: 12px;
                        color: #4c4c4c;
                        width: 120px;
                    }

                    p:nth-of-type(1) {
                        margin: 12px 0 0 0;
                        width: 100%;
                    }

                    p:nth-of-type(2) {
                        color: #ba4e5e;
                    }
                }

                li:last-child {
                    border-bottom: 0;
                }
            }
        }
    }

    .right {
        width: 982px;

        .tab {
            ul {
                border-left: 1px solid #e8e8e8;

                li {
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    border: 1px solid #e8e8e8;
                    border-left: 0;
                    cursor: pointer;
                    width: 100px;

                    span {
                        color: #595f93;
                        margin-left: 4px;
                        font-size: 12px;
                    }
                }

                .bg {
                    border-bottom: 0;
                    border-top-color: #d02629;
                    color: #d02629;
                    background: url(../../assets/img/xz.png) no-repeat top 0
                        left 50%;
                }
            }

            div {
                height: 40px;
                border: 1px solid #e8e8e8;
                border-left: 0;
                width: 982px;
            }
        }

        .subpage {
            overflow: hidden;
            width: 100%;
            .attribute {
                width: 100%;

                .table {
                    width: 100%;
                    margin-bottom: 0;

                    tr {
                        td {
                            line-height: 30px;
                            display: inline-block;
                            border-style: solid;
                            border-color: #ddd;
                            padding: 0 0 0 10px;
                            box-sizing: border-box;
                        }

                        .attr_title {
                            background: #eee;
                            border-width: 1px 1px 0 1px;
                            display: table-cell;
                            border-top: none;
                        }

                        .attr_name {
                            width: 270px;
                            border-width: 1px 1px 0 1px;
                            display: table-cell;
                        }

                        .attr_value_name {
                            width: 685px;
                            border-width: 1px 1px 0 0;
                            display: table-cell;
                            padding-right: 10px;
                        }
                    }

                    tr:last-child {
                        border-bottom: 1px solid #ddd;
                    }
                }
            }

            .pingjia {
                .up {
                    width: 100%;
                    border: 1px solid #e8e8e8;
                    border-top: 0;

                    .good {
                        font-size: 12px;
                        color: #333;
                        width: 179px;
                        text-align: center;
                        margin-left: 10px;

                        span {
                            font-size: 31px;
                            color: #d19f2c;
                            margin-top: 45px;
                            display: inline-block;
                        }
                    }

                    .evaluate-info {
                        height: 90px;
                        display: flex;
                        align-items: center;

                        .evaluate-degree {
                            .commhigh-opinionent {
                                width: 120px;
                                text-align: center;

                                .percent {
                                    color: #d02629;
                                    font-size: 30px;
                                    font-weight: bold;
                                }

                                .percent-tit {
                                    font-size: 12px;
                                }
                            }

                            .jindu {
                                padding-top: 8px;

                                li {
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;

                                    > span {
                                        width: 63px;
                                        font-size: 11px;
                                        color: #464646;
                                        display: inline-block;
                                        margin-right: 0.1rem;
                                    }

                                    > i {
                                        width: 100px;
                                        height: 8px;
                                        background: #b8b8b8;
                                        display: inline-block;
                                        position: relative;
                                        overflow: hidden;
                                        margin-left: 5px;

                                        > b {
                                            background: #e01222;
                                            width: 0;
                                            position: absolute;
                                            left: 0;
                                            top: 0;
                                            height: 8px;
                                        }
                                    }
                                }
                            }
                        }

                        .yinxiang {
                            font-size: 12px;
                            color: #333;
                            margin: 38px 0 0 30px;
                        }

                        .yinxiangul {
                            height: auto;
                            padding: 0 5px 0 325px;

                            .impress-tit {
                                height: 60px;
                                float: left;
                                font-size: 13px;
                            }

                            .tag-info {
                                padding: 6px 7px 4px 6px;
                                background: #eef2fe;
                                font-size: 12px;
                                color: #333;
                                margin-bottom: 8px;
                                margin-right: 5px;
                                cursor: pointer;

                                span {
                                    color: #999;
                                }
                            }
                        }
                    }
                }

                .down {
                    margin-top: 10px;
                    border: 1px solid #e2e2e2;
                    border: 1px solid #e8e8e8;
                    border-top: 0;
                    overflow: hidden;

                    .top {
                        height: 36px;
                        background: #f4f8fb;
                        width: 100%;

                        p {
                            color: #cba840;
                            font-size: 12px;
                            line-height: 36px;
                            margin-left: 18px;
                        }

                        ul {
                            margin-left: 64px;

                            li {
                                line-height: 36px;
                                font-size: 12px;
                                color: #333;
                                margin-right: 54px;
                                cursor: pointer;
                            }

                            :hover {
                                color: #d02629;
                            }

                            li.active {
                                color: #d02629;
                            }
                        }

                        .inp {
                            color: #333;
                            font-size: 12px;
                            line-height: 36px;

                            input {
                                margin: 11px 11px 0 0;
                            }
                        }
                    }

                    .dibian {
                        min-height: 180px;
                        height: auto;
                        display: flex;
                        flex-direction: row;
                        border-bottom: 1px solid #eee;

                        .name {
                            width: 149px;
                            text-align: center;

                            p {
                                font-size: 12px;
                                color: #333;

                                span {
                                    color: #9c9c9c;
                                }
                            }

                            .score {
                                color: #d2a442;
                            }

                            p:nth-of-type(1) {
                                margin-top: 44px;
                                margin-bottom: 5px;
                            }

                            p:nth-of-type(2) {
                                margin-top: 8px;
                            }

                            img {
                                width: 20px;
                                height: 20px;
                            }
                        }

                        .right {
                            display: flex;
                            flex-direction: column;
                            padding: 10px 0;

                            ul {
                                margin: 25px 0 20px 0;

                                li {
                                    padding: 5px 11px 5px 10px;
                                    background: #ecf2ff;
                                    margin-right: 13px;
                                }
                            }

                            .talk {
                                width: 788px;
                                font-size: 12px;
                                color: #333;
                            }

                            .photo {
                                margin-top: 22px;

                                img {
                                    border: 2px solid #f2f2f2;
                                    margin: 2px;
                                    margin-right: 14px;
                                    width: 50px;
                                    height: 50px;
                                }
                            }

                            .bigImg img {
                                max-width: 400px;
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }

            .refer {
                border: 1px solid #e2e2e2;
                border-top: 0;
                overflow: hidden;
                padding-bottom: 10px;

                .zixuntop {
                    line-height: 34px;
                    border-bottom: 1px solid #e2e2e2;
                    margin: 24px 37px 0 18px;
                    width: 926px;
                    float: left;
                }

                .tiwen {
                    height: 119px;
                    border-bottom: 1px solid #e2e2e2;
                    margin-left: 18px;
                    width: 926px;
                    float: left;

                    p {
                        font-size: 12px;
                        color: #1958a7;
                        margin: 22px 0 17px 0;
                    }

                    .inp {
                        width: 737px;
                        height: 36px;

                        input {
                            width: 651px;
                            height: 36px;
                            border: 1px solid #e2e2e2;
                            border-right: 0;
                            padding-left: 4px;
                        }

                        span {
                            width: 86px;
                            height: 36px;
                            float: right;
                            background: #ff6100;
                            text-align: center;
                            line-height: 36px;
                            color: #fff;
                            cursor: pointer;
                        }
                    }
                }

                .yunfei {
                    width: 926px;
                    float: left;
                    height: 109px;
                    border-bottom: 1px dashed #e2e2e2;
                    margin-left: 18px;

                    p {
                        font-size: 12px;
                        color: #333;
                        line-height: 25px;
                        margin-left: 7px;

                        .huang {
                            color: #fe5f01;
                        }

                        .day {
                            color: #989898;
                        }
                    }

                    p:nth-of-type(1) {
                        margin-top: 19px;
                    }
                }
            }
        }
    }
}
</style>