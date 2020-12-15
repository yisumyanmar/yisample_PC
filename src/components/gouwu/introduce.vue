<template>
    <div id="custom">
        <common-header v-on:childToParent="onChildClick"></common-header>
        <head-com></head-com>
        <div id="share">
            <div class="center">
                <div class="last">
                    <img class="l" src="../../assets/img/qianggous/house.png" />
                    <p>
                        <router-link to="home" class="l sopt"
                            >首页></router-link
                        >
                        <router-link to="chase" class="l sopt"
                            >抢购></router-link
                        >
                        <a class="l special">{{ info.title }}</a>
                    </p>
                </div>
                <div class="center-page">
                    <div class="left l">
                        <div class="wood l">
                            <p class="funrin"><img :src="URL + bigImg" /></p>
                            <div class="bot">
                                <p class="l commom" @click="left">
                                    <img
                                        src="../../assets/img/qianggous/pic2.png"
                                    />
                                </p>
                                <div class="slideshow">
                                    <ul id="more-img">
                                        <li
                                            v-show="smallPics.isShow"
                                            v-for="(smallPics, index) in imgArr"
                                            :key="index"
                                            class="l"
                                            :class="
                                                index == selectedIndex
                                                    ? 'selected'
                                                    : ''
                                            "
                                        >
                                            <img
                                                @click="
                                                    getBigImgs(
                                                        index,
                                                        smallPics.pic
                                                    )
                                                "
                                                :src="URL + smallPics.pic"
                                                class="smallImg"
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <p class="l commom" @click="right">
                                    <img
                                        src="../../assets/img/qianggous/pic3.png"
                                    />
                                </p>
                            </div>
                            <p class="l fact">
                                <span class="l kuai"
                                    ><img src="../../assets/img/shuqian.jpg"
                                /></span>
                                <span class="l texts">分享</span>
                            </p>
                            <p class="l fact">
                                <span class="l kuai"
                                    ><img src="../../assets/img/shuqian.jpg"
                                /></span>
                                <span class="l texts">收藏商品</span>
                            </p>
                        </div>
                        <div class="middle l">
                            <p class="north">{{ info.title }}</p>
                            <p class="love">{{ info.panic_title }}</p>
                            <div class="backcolor">
                                <p class="rest" v-if="showTimeType != 2">
                                    
                                    <span
                                        >{{ 
                                            showTimeTypeArr[showTimeType]
                                        }} </span>
                                        <span class="clk">
                                            <img src="../../assets/img/clock.png" style="margin-bottom: 4px;">
                                            <p>商城抢购</p>
                                        </span>
                                    <span v-show="showTimeType == 1">
                                        <!-- 结束 -->
                                        </span>
                                    <!-- {{showTimeData}} -->
                                    <span class="noofday">{{ showTime }}</span>
                                    <!-- <span class="hour">{{hour}} </span> : 
                                    <span class="minute"> {{minute}}</span>: 
                                    <span class="getset"> {{getSet}}</span> -->
                                    <!-- <span>{{ showTime }}</span> -->
                                    
                                </p>
                                <p class="rest" v-else>
                                    <span>已结束</span>
                                </p>
                                <p class="price">
                                    <span class="orgin l"
                                        >原&nbsp;&nbsp;价:</span
                                    >
                                    <span class="orgins l"
                                        >￥{{ info.price_market }}</span
                                    >
                                </p>
                                <p class="chasePrice">
                                    <span class="orgin l">抢购价:</span>
                                    <span class="orgins l"
                                        >￥{{ info.panic_price }}</span
                                    >
                                </p>
                                
                                <p class="ownCustom l">
                                    <span class="l me">本商品已被抢购</span>
                                    <span class="l blood">{{
                                        info.sales_sum
                                    }}</span>
                                    <span class="l me">件</span>
                                </p>
                                <p class="quality l">数量有限，预购从速</p>
                            </div>
                            <div class="peisong">
                                <p class="l distance1">
                                    配送至
                                    <!--<select name="">-->
                                    <!--<option value="">北京 北京市</option>-->
                                    <!--</select>-->
                                    <!-- <receiving-address></receiving-address> -->

                                    <div class="tab-input" @click="callingArea">
                                    <input v-if="addressAll == ''" placeholder="请选择地区" type="tel" class="mint-field-core" disabled v-model="addressAllData">
                                    <input v-else placeholder="请选择地区" type="tel" class="mint-field-core" disabled v-model="addressAll">
                                    <img class="tab-icon" src="../../assets/img/sort-bottom.png" />
                                    </div>

                                    <!-- <span v-if="freightMoney > 0" class="yunfei">运费：￥{{freightMoney}}</span>
                                    <span v-else-if="freightMoney == 0" class="yunfei">运费：卖家包邮</span>
                                    <span v-else class="yunfei">运费：{{freightMoney}}</span> -->

                                    <span v-if="callStatus == 1">
                                    <span v-if="deliveryCal == -1" class="yunfei">配送：免配送费</span>
                                    <span v-else class="yunfei">配送：{{deliveryCal}} 元</span>
                                    </span>
                                    <span v-else>
                                    <span v-if="freightCal == 0" class="yunfei">运费：卖家包邮</span>
                                    <span v-else class="yunfei">运费：{{freightCal}} 元</span>
                                    </span>
                                </p>
                                <!-- <p class="distance l">
                                    <span class="l">运费：</span>
                                    <span class="l">10元;</span>
                                </p> -->

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

                                <p class="duty">
                                    <span class="l"
                                        >服&nbsp;&nbsp;&nbsp;务</span
                                    >
                                    <span class="l">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由</span>
                                    <span
                                        class="l espical"
                                        @click="toStore(info.store_id)"
                                        >{{ info.shop_name }}</span
                                    >
                                    <span class="l"
                                        >负责发送，并提供售后服务</span
                                    >
                                </p>
                            </div>
                            <div class="buyGoods">
                                <ul>
                                    <li class="l">
                                        <span class="l chese">累计评价</span>
                                        <span class="l numbe"
                                            >{{ info.comment_member }}人</span
                                        >
                                    </li>
                                    <li class="l">
                                        <span class="l chese">累计销量</span>
                                        <span class="l numbe">{{
                                            info.sales_sum
                                        }}</span>
                                    </li>
                                    <li class="l">
                                        <span class="l chese">赠送积分</span>
                                        <span class="l numbe">0分</span>
                                    </li>
                                </ul>
                                <div class="kuCun">
                                    <span class="l math">数量</span>
                                    <input
                                        class="l"
                                        type="text"
                                        value="1"
                                        v-model="me"
                                    />
                                    <p class="l addTo">
                                        <a class="pane" @click="add(me)">+</a>
                                        <a class="pan" @click="dec(me)">-</a>
                                    </p>
                                    <p class="l after">
                                        件&nbsp;库存&nbsp;{{
                                            info.panic_num
                                        }}&nbsp;件，限购&nbsp;{{
                                            info.quantity_limit
                                        }}&nbsp;件
                                    </p>
                                </div>
                                <div class="submit">
                                    <p
                                        class="button el-button--warning appre shop"
                                        v-if="showTimeType == 1"
                                        @click="pay(info.goods_id)"
                                    >
                                        立即购买
                                    </p>
                                    <p
                                        class="button el-button--warning appre "
                                        v-if="showTimeType == 1"
                                        style="margin-left:0.1rem"
                                    >
                                        <img
                                            src="../../assets/img/gw.png"
                                            style="margin-right:0.5rem"
                                            alt=""
                                        />
                                        加入购物车
                                    </p>
                                    <p
                                        class="button el-button--warning appre gray"
                                        v-else
                                    >
                                        即将开始...
                                    </p>
                                    <div id="qrCodeHot" ref="qrCodeDiv"></div>
                                    <p class="r iphone">
                                        <span class="buyIphone">手机购买</span>
                                        <img
                                            style="width: 20px;height: 20px;"
                                            src="../../assets/img/samllerweima.jpg"
                                            @mouseenter="
                                                handleScan($route.params.id)
                                            "
                                            @mouseleave="handleLeave"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="check l">
                            <p class="mistake">
                                <a
                                    class="l sps"
                                    @click="introdu(0)"
                                    :class="{ bg: isbg == 0 }"
                                    >商品介绍</a
                                >
                                <a
                                    class="l sps"
                                    @click="introdu(1)"
                                    :class="{ bg: isbg == 1 }"
                                    >商品属性</a
                                >
                                <a
                                    class="l sps"
                                    @click="introdu(2)"
                                    :class="{ bg: isbg == 2 }"
                                    >商品评价&nbsp;&nbsp;{{ allCount }}
                                </a>
                                <a
                                    class="l sps"
                                    @click="introdu(3)"
                                    :class="{ bg: isbg == 3 }"
                                    >商品咨询&nbsp;&nbsp;{{countnumber}}
                                </a>
                                <a class="sp l"></a>
                            </p>
                            <div class="checkbox">
                                <div v-show="off == 1" class="attribute">
                                    <table class="table" cellspacing="0">
                                        <tr>
                                            <td class="attr_title" colspan="2">
                                                商品属性
                                            </td>
                                        </tr>
                                        <tr
                                            v-for="(item, index) in goodsAttr"
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
                                            <td class="attr_value_name">
                                                {{ brand }}
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <div v-show="off == 2" class="pingjia">
                                    <div class="up">
                                        <div class="evaluate-info">
                                            <div class="l evaluate-degree">
                                                <div
                                                    class="commhigh-opinionent l"
                                                >
                                                    <div class="percent">
                                                        100%
                                                    </div>
                                                    <p class="percent-tit">
                                                        好评度
                                                    </p>
                                                </div>
                                                <ul class="l jindu">
                                                    <li>
                                                        <span
                                                            >好评({{
                                                                nice100.toFixed(0)
                                                            }}%)</span
                                                        >
                                                        <i>
                                                            <b
                                                                class="skitt-line"
                                                            ></b>
                                                        </i>
                                                    </li>
                                                    <li>
                                                        <span
                                                            >中评({{
                                                                center100.toFixed(0)
                                                            }}%)</span
                                                        >
                                                        <i>
                                                            <b
                                                                class="skitt-line"
                                                            ></b>
                                                        </i>
                                                    </li>
                                                    <li>
                                                        <span
                                                            >差评({{
                                                                bad100.toFixed(0)
                                                            }}%)</span
                                                        >
                                                        <i>
                                                            <b
                                                                class="skitt-line"
                                                            ></b>
                                                        </i>
                                                    </li>
                                                </ul>
                                            </div>

                                            <!--<ul class="clearfix yinxiangul list">-->
                                            <!--<li class="impress-tit">买家印象：</li>-->
                                            <!--<li-->
                                            <!--class="l tag-info"-->
                                            <!--:key="index"-->
                                            <!--v-for="(yinxiang, index) in yinxiangs"-->
                                            <!--&gt;-->
                                            <!--<span>{{ yinxiang.p }}</span>-->
                                            <!--<span>({{ yinxiang.span }})</span>-->
                                            <!--</li>-->
                                            <!--</ul>-->
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
                                                    @click="
                                                        getAllCommentContent(0)
                                                    "
                                                >
                                                    全部评价
                                                    <span
                                                        >({{
                                                            comments.allCount ||
                                                                0
                                                        }})</span
                                                    >
                                                </li>
                                                <li
                                                    class="l"
                                                    :class="
                                                        isCurrentComment == 1
                                                            ? 'active'
                                                            : ''
                                                    "
                                                    @click="
                                                        getAllCommentContent(1)
                                                    "
                                                >
                                                    好评
                                                    <span
                                                        >({{
                                                            comments.allNice ||
                                                                0
                                                        }})</span
                                                    >
                                                </li>
                                                <li
                                                    class="l"
                                                    :class="
                                                        isCurrentComment == 2
                                                            ? 'active'
                                                            : ''
                                                    "
                                                    @click="
                                                        getAllCommentContent(2)
                                                    "
                                                >
                                                    中评
                                                    <span
                                                        >({{
                                                            comments.allHeight ||
                                                                0
                                                        }})</span
                                                    >
                                                </li>
                                                <li
                                                    class="l"
                                                    :class="
                                                        isCurrentComment == 3
                                                            ? 'active'
                                                            : ''
                                                    "
                                                    @click="
                                                        getAllCommentContent(3)
                                                    "
                                                >
                                                    差评
                                                    <span
                                                        >({{
                                                            comments.allBad ||
                                                                0
                                                        }})</span
                                                    >
                                                </li>
                                                <li
                                                    class="l"
                                                    :class="
                                                        isCurrentComment == 4
                                                            ? 'active'
                                                            : ''
                                                    "
                                                    @click="
                                                        getAllCommentContent(4)
                                                    "
                                                >
                                                    有图
                                                    <span
                                                        >({{
                                                            comments.allImg ||
                                                                0
                                                        }})</span
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            class="l dibian"
                                            v-for="(item,
                                            index) in comments.list"
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
                                                    {{
                                                        item.create_time
                                                            | formatDate
                                                    }}
                                                </p>
                                            </div>
                                            <div class="right1">
                                                <p class="l talk">
                                                    {{ item.content }}
                                                </p>
                                                <div
                                                    class="l photo"
                                                    v-if="item.path"
                                                >
                                                    <img
                                                        v-for="(items,
                                                        index1) in item.path"
                                                        preview="index"
                                                        preview-text="评价图片"
                                                        :key="index1"
                                                        :src="URL + items"
                                                    />
                                                </div>
                                                <div
                                                    class="bigImg"
                                                    v-if="ctrlBigImg"
                                                >
                                                    <img
                                                        :src="URL + item.path"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-show="off == 3">
                                    <div class="refer">
                                        <p class="zixuntop">商品咨询</p>
                                        <div class="tiwen">
                                            <p>查看全部咨询</p>
                                            <div class="inp">
                                                <input
                                                    type="text"
                                                    v-model="
                                                        addCommitProblemValue
                                                    "
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
                                                <p>
                                                    <span class="huang">Q</span>
                                                    {{ item.content }}
                                                    <span class="r day">{{
                                                        ~~item.create_time
                                                            | formatDate
                                                    }}</span>
                                                </p>
                                                <p>
                                                    <span class="huang">A</span>
                                                    {{
                                                        item.answer
                                                            ? item.answer
                                                            : "暂无回答"
                                                    }}
                                                    <span class="r day"
                                                        >暂无</span
                                                    >
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="box2"
                                        style="width: 140px;margin: 0 auto;margin-top: 20px"
                                    >
                                        <el-pagination
                                            @current-change="
                                                handleCurrentChange
                                            "
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
                            <div
                                class="picimg"
                                v-html="info.detail"
                                v-show="off == 0"
                            ></div>
                        </div>
                    </div>
                    <div class="right l">
                        <p class="term">本期热门抢购</p>
                        <dl
                            v-for="(rightPics, index) in hotGoods"
                            :key="index"
                            @click="toRuchBuy(rightPics)"
                        >
                            <dt><img :src="URL + rightPics.pic_url" /></dt>
                            <dd>
                                <p class="nature">{{ rightPics.title }}</p>
                                <p class="l money">
                                    {{ rightPics.panic_price }}
                                </p>
                                <p class="r aim">
                                    <span class="aims">销量：</span>
                                    <span class="biggest">{{
                                        rightPics.already_num
                                    }}</span>
                                </p>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        <foot-com></foot-com>
    </div>
</template>
<script>
import $ from "jquery";
import pic4 from "@/assets/img/qianggous/pic4.png";
import pic5 from "@/assets/img/qianggous/pic5.png";
import pic6 from "@/assets/img/qianggous/pic6.png";
import pic7 from "@/assets/img/qianggous/pic7.png";
import pic8 from "@/assets/img/qianggous/pic8.png";
import pic1 from "@/assets/img/xiaochahu.jpg";
import QRCode from "qrcodejs2";

import { magnify } from "@/assets/js/magnify.js";
export default {
    data() {
        return {
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
            freightMoney: 0,
            tit: document.title,
            impListData: {
                config: {
                    value: "网址",
                    imagePath: "pic8", //（需要个图片作为背景）
                    filter: "color",
                    size: 500
                }
            },
            id: 0,
            info: {},
            bigImg: "",
            comments: {},
            hotGoods: "",
            timer: null, //定时器
            isCurrentComment: 0, //是否在当前评价选项（好评差评切换）
            mark: 0, //比对图片索引的变量
            off: false,
            isbg: "",
            val: "",
            ctrlBigImg: null,
            me: 1,
            nice100: 0, //好评
            bad100: 0,
            center100: 0,
            addCommitProblemValue: "",
            number: 0, //显示最下面的次数
            selectedIndex: 0,
            showTimeType: "",
            consultationList: "",
            currentPage: 1,
            page_size: 0,
            page: 0,
            // showTimeTypeArr: ["距开售还剩", "还剩", "已结束"],
            showTimeTypeArr: ["距开售还剩", "距离结果", "已结束"],
            showTime: "", //要显示在页面上的时间
            intervalid: "", //计时器ID
            commentList: [], //评论列表数据
            goodsConsulList: [], //咨询列表数据
            imgArr: [],
            p_id: "",
            goodsAttr: [],
            brand: "",
            fromChild: '',
            showTimeData: '',
            hour:'',
            minute:'',
            getSet:'',
            countnumber:0,
            allCount:0,
            callStatus: '',
            deliveryCal: '',
            freightCal: '',
            shipping_data: '',
            ship_key: '',
            ship_status: '',
            store_goods_id: ''
        };
    },
    created() {
        this.id = this.$route.params.id;
        this.getDetails();
        this.intervalid = setInterval(this.comTime, 1000);
        this.getData();
        this.CArrName();
        this.AArrName();
        this.TArrName(); 
        this.getAllCommentContent(); 
        this.consultationData();  
    },
    filters: {
        filtScore: function(value) {
            return "★★★★★☆☆☆☆☆".slice(5 - value, 10 - value);
        }
    },
    beforeDestroy() {
        clearInterval(this.intervalid);
    },
    components: {
        QRCode
    },
    methods: {
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
        // this.getFreight();
        this.getDeliveryCal();
    },
    callingArea(){
        this.popupVisible = true;
    },
    cancelArea(){
        this.popupVisible = false;
    },

    // getFreight(){ //获取运费
    //     var data = {
    //         prov: this.provinceId,
    //         goods_id: this.$route.params.id
    //     };
    //     this.HTTP(this.$httpConfig.getFreightMoney,data,'post').then(res=>{
    //         this.freightMoney = res.data.data;
    //     }).catch(err=>{
    //         this.freightMoney = err.data.message
    //     })
    // },

    getDeliveryCal(){
        var data = {
          store_id: this.store_goods_id,
          goods_id: this.$route.params.id,
          prov_id: this.provinceId,
          dist_id: this.cityId,
          city_id: this.areaId,
          town_id: this.townId,
        };
        this.HTTP(this.$httpConfig.deliveryCalcus,data,'post')
          .then((res) => {
            this.callStatus = res.data.status;
          if(res.data.status == 1) {
          this.deliveryCal=res.data.data.money;
          }
          if(res.data.status == 0) {
            this.getFreightCal();
          }
        }).catch((err) => {
            this.getFreightCal();
            console.log(err);
        })
      },
      getFreightCal(){
          var data = {
          store_id: this.store_goods_id,
          goods_id: this.$route.params.id,
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
    //   var data = {
    //         prov: 11,
    //         goods_id: this.$route.params.id
    //     };
    //     this.HTTP(this.$httpConfig.getFreightMoney,data,'post').then(res=>{
    //         this.freightMoney = res.data.data;
    //     }).catch(err=>{
    //         this.freightMoney = err.data.message
    //     })

          var data = {
          store_id: 2,
          goods_id: this.$route.params.id,
          prov_id: 11,
          dist_id: 175,
          city_id: 2134,
          town_id: 15231,
        };
        this.HTTP(this.$httpConfig.deliveryCalcus,data,'post')
          .then((res) => {
              this.callStatus = res.data.status;
          if(res.data.status == 1) {
        this.deliveryCal=res.data.data.money;
          }
          if(res.data.status == 0) {
            this.getFreightCal1();
          }
        }).catch((err) => {
            this.getFreightCal1();
            console.log(err);
        })
      },
      getFreightCal1() {
          var data = {
          store_id: 2,
          goods_id: this.$route.params.id,
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
      
        onChildClick (value) {
            this.fromChild = value
            if(this.fromChild == 'false') {
                location.reload();
            }
        },
        
        //生成二维码扫描
        handleScan(goods_id) {
            new QRCode(this.$refs.qrCodeDiv, {
                text:
                    "http://m.shopsn.cn/auctionList/" + goods_id + "?type=" + 2,
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
        // 结算
        pay(id) {
            if (this.me != 0) {
                this.HTTP(
                    this.$httpConfig.getBuyImmediately,
                    {
                        id: id,
                        goods_num: this.me
                    },
                    "post"
                )
                    .then(res => {
                        sessionStorage.setItem(
                            "rusToBuy",
                            JSON.stringify(res.data.data)
                        );
                        this.$message.success(res.data.message);
                        if (res.data.status) {
                            this.$router.push({
                                path: "/settleAccounts",
                                query: { id: id, num: this.me }
                            });
                        }
                    })
                    .catch(e => {
                        this.$message.error(e.data.message);
                    });
            } else {
                this.$message.error("购买数量不能为0");
            }
        },
        toRuchBuy(item) {
            location.href = this.$constant.s_url + "introduce/" + item.goods_id;
        },
        handleCurrentChange(currentPage) {
            //下一页
            this.currentPage = currentPage;
            this.consultationData();
        },
        // 我要提问
        addCommitProblem() {
            this.HTTP(
                this.$httpConfig.consult.userCommitProblem,
                {
                    goods_id: this.id,
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
        toStore(id) {
            console.log(id,11);
            // window.open(window.location.origin + "/storehome/" +'?id=' +id);
            window.open(window.location.origin + "/storehome" +'?id=' +id);
        },
        //标题滚动
        TitleScrolling() {
            setInterval(() => {
                //ES6箭头函数
                // 截取首字符串(第一个)
                var head = this.tit.substring(0, 1);
                // 截取除首字符串外所有字符串(除第一个所有)
                var foot = this.tit.substring(1);
                // 头尾拼接后赋给data => tit属性
                this.tit = foot + head;
                // 最后赋给最终显示的标题(标题)
                document.title = this.tit;
            }, 400);
        },
        getDetails() {
            this.HTTP(
                this.$httpConfig.getInnerPanic,
                { goods_id: this.id },
                "post"
            ).then(res => {
                this.info = res.data.data.left;
                this.store_goods_id = this.info.store_id;
                this.productTitle = this.info.title;
                let shopName = this.info.shop_name;
                this.tit =
                    this.productTitle +
                    "-" +
                    shopName +
                    this.$constant.webComContent;
                this.TitleScrolling();
                this.bigImg = this.info.pic_url[0];
                this.p_id = res.data.data.left.p_id;
                for (var i in this.info.pic_url) {
                    var item = { isShow: true, pic: "" };
                    item.pic = this.info.pic_url[i];
                    this.imgArr.push(item);
                }
                this.hotGoods = res.data.data.right;
                this.comTime();
            });
        },
        getGoodsAttr() {
            this.HTTP(
                this.$httpConfig.getGoodsAttr,
                { goods_id: this.id },
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
        getAllCommentContent(type) {
            this.isCurrentComment = type;
            this.HTTP(
                this.$httpConfig.getAllCommentContent,
                {
                    goods_id: this.id,
                    type: type
                },
                "post"
            )
                .then(res => {
                    this.comments = res.data.data;
                    if (res.data.status == 1) {
                        this.allCount = res.data.data.allCount;
                    }
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

                    this.$nextTick(() => {
                        this.magnify();
                    });
                })
                .catch(() => {
                    this.comments = [];
                });
        },
        // 获取咨询列表
        consultationData() {
            this.HTTP(
                this.$httpConfig.consult.goodsConsultation,
                {
                    goods_id: this.id,
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
        introdu(index) {
            this.off = index;
            this.isbg = index;
            switch (index) {
                case 0:
                    break;

                case 1:
                    this.getGoodsAttr();
                    break;

                case 2:
                    this.getAllCommentContent(0);
                    break;

                case 3:
                    this.consultationData();
                    break;

                default:
                    break;
            }
        },
        // 增加数量
        add() {
            if (this.me >= Number(this.info.quantity_limit)) {
                return false;
            } else {
                return this.me++;
            }
            //				this.me++;
        },
        // 减少数量
        dec() {
            if (this.me <= 1) {
                return;
            } else {
                return this.me--;
            }
        },
        // 左移动一个图片
        left() {
            console.log(this.number, this.imgArr.length);
            if (this.number < 0) {
                return;
            }
            this.imgArr[this.number].isShow = true;
            if (this.number == 0) {
                return;
            }
            this.number--;
        },
        // 右移动一个图片
        right() {
            console.log(this.number, this.imgArr.length);
            if (this.imgArr.length - this.number == 5) {
                return;
            }
            this.imgArr[this.number].isShow = false;
            this.number++;
        },
        // 点击小图得到大图
        getBigImgs(index, img) {
            console.log("eee", img);
            this.selectedIndex = index;
            this.bigImg = img;
        },
        //判断并计算时间
        comTime() {
            var now = Math.round(new Date().getTime() / 1000);
            if (this.info.start_time > now) {
                // 未开始
                this.showTimeType = 0;
                this.getTime2(this.info.start_time);
            } else if (now > this.info.start_time && now < this.info.end_time) {
                // 进行中
                this.showTimeType = 1;
                this.getTime(this.info.end_time);
            } else {
                // 已结束
                this.showTimeType = 2;
            }
        },
        //获取抢购剩余时间
        getTime(value) {
            var now = Math.round(new Date().getTime() / 1000);
            var nTime = value - now;
            var day = Math.floor(nTime / 60 / 60 / 24);
            var hour = Math.floor(nTime / 60 / 60);
            var minute = Math.floor(nTime / 60) - hour * 60;
            var getSet = nTime - hour * 60 * 60 - minute * 60;
            // this.showTime =
            //     day +
            //     "天" +
            //     (hour - day * 24) +
            //     "小时" +
            //     minute +
            //     "分" +
            //     getSet +
            //     "秒";
            // this.showTimeData = day  + "天" ;
            this.hour = (hour - day * 24) ;
            this.minute = minute ;
            this.getSet = getSet ;
            this.showTime = day + "天: " + this.hour + "时: " + this.minute + "分：" + this.getSet + "秒";
        },
        // 未开始，计算还有多少时间 才开始
        getTime2(value) {
            var now = Math.round(new Date().getTime() / 1000);
            var nTime = value - now;
            var day = Math.floor(nTime / 60 / 60 / 24);
            var hour = Math.floor(nTime / 60 / 60);
            var minute = Math.floor(nTime / 60) - hour * 60;
            var getSet = nTime - hour * 60 * 60 - minute * 60;
            this.showTime =
                day +
                "天" +
                (hour - day * 24) +
                "小时" +
                minute +
                "分" +
                getSet +
                "秒";
        },
        // 评论列表
        getComment() {
            this.HTTP(
                this.$httpConfig.problemGoodsComment,
                { goods_id: this.id },
                "post"
            ).then(res => {
                this.commentList = res.data.data;
            });
        },
        // 咨询列表

        getGoodsConsultation() {
            this.HTTP(
                this.$httpConfig.getGoodsConsultation,
                { goods_id: this.id },
                "post"
            ).then(res => {
                this.goodsConsulList = res.data.data;
            });
        }
    },
    computed: {}
};
</script>
<style lang="less">
#qrCodeHot {
    position: absolute;
    right: 8px;
    top: 486px;
}
</style>
<style lang="less" scoped>
html,
body {
    height: 100%;
    position: relative;
}

.tab-input {
    margin-left: 83px;
    margin-top: 15px;
}
.mint-field-core {
    padding: 10px 30px 10px 10px;
    font-size: 14px;
    width: 260px;
    height: 38px;
    border: 1px solid #a7a7a7;
    text-align: center;
    background: #fff;
    border-radius: 5px;
    color: #777;
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
.yunfei {
    color: #535353;
    display: inline-block;
    line-height: 22px;
    float: left;
    margin-left: 360px;
    margin-top: -30px;
    font-size: 12px;
}

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
.el-button--warning {
    background-color: #d02629;
    border: #d02629;
}
#share {
    width: 100%;
    height: 100%;
    .center {
        .last {
            width: 100%;
            height: 38px;
            img {
                margin-top: 15px;
                margin-right: 8px;
            }
            .sopt {
                display: inline-block;
                height: 38px;
                line-height: 38px;
                color: #a8a7a5;
            }
            .special {
                display: inline-block;
                height: 38px;
                line-height: 38px;
                color: #515151;
                width: 300px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .center-page {
            height: auto;
            min-height: 1320px;
            display: flex;
            .left {
                width: 995px;
                min-height: 1320px;
                height: 100%;
                .wood {
                    width: 400px;
                    height: 528px;
                    .funrin {
                        width: 400px;
                        height: 398px;
                        line-height: 398px;
                        vertical-align: middle;
                        text-align: center;
                        border: 1px solid #d3d3d3;
                        img {
                            width: 297px;
                            height: 305px;
                        }
                    }
                    .bot {
                        width: 400px;
                        margin-top: 14px;
                        height: 60px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        .slideshow {
                            width: 360px;
                            height: 60px;
                            position: relative;
                            ul {
                                position: absolute;
                                width: 360px;
                                height: 60px;
                                overflow: hidden;
                                li {
                                    width: 60px;
                                    height: 60px;
                                    margin: 0 6px;
                                    border: 1px solid #dddddd;
                                    .smallImg {
                                        width: 56px;
                                        height: 56px;
                                    }
                                }
                                li.selected {
                                    border: 1px solid #d02629;
                                }
                            }
                        }
                        .commom {
                            width: 20px;
                            height: 86px;
                        }
                    }
                    .fact {
                        margin: 20px 25px 20px 0;
                        cursor: pointer;
                        .kuai {
                            margin-right: 5px;
                        }
                        .texts {
                            color: #9b9a96;
                        }
                    }
                }
                .middle {
                    width: 570px;
                    height: 528px;
                    margin-left: 18px;
                    position: relative;
                    .north {
                        width: 100%;
                        // height: 26px;
                        // line-height: 26px;
                        color: #303030;
                        font-size: 16px;
                    }
                    .love {
                        width: 100%;
                        // height: 35px;
                        // line-height: 35px;
                        color: #d02629;
                        font-size: 14px;
                        margin-top: 15px;
                        margin-bottom: 9px;
                    }
                    .backcolor {
                        width: 565px;
                        height: 160px;
                        /*background:  skyblue;*/
                        padding-right: 17px;
                        background: url(../../assets/img/beijing.jpg) no-repeat;
                        .price {
                            width: 100%;
                            height: 30px;
                            line-height: 30px;
                            padding-left:15px;
                            .orgin {
                                display: inline-block;
                                margin-right: 15px;
                                color: #9d9d9d;
                                font-size: 12px;
                            }
                            .orgins {
                                display: inline-block;
                                color: #4e4e4e;
                                font-size: 9px;
                            }
                        }
                        .chasePrice {
                            width: 100%;
                            height: 36px;
                            line-height: 36px;
                            padding-left:15px;
                            .orgin {
                                display: inline-block;
                                margin-right: 15px;
                                color: #9d9d9d;
                                font-size: 12px;
                            }
                            .orgins {
                                display: inline-block;
                                color: #ce3436;
                                font-weight: bold;
                                font-size: 30px;
                            }
                        }
                        .rest {
                            width: 100%;
                            height: 36px;
                            line-height: 36px;
                            color: #ffffff;
                            background:#fe0851;
                            text-align: right;
                            padding-right: 15px;
                            span:nth-of-type(2) {
                                // color: #d02629;
                                color: #ffffff;
                                margin-left: 10px;
                            }
                            .noofday,.hour,.minute,.getset{
                                background: #443b3b;
                                padding: 2px;
                                border-radius: 3px;
                                margin-right: 3px;
                            }
                            .clk{
                                float:left;
                                p{
                                    padding-left:10px;
                                    float:right;
                                    color:#ffffff;
                                }
                            }
                        }
                        .ownCustom {
                            width: 136px;
                            height: 34px;
                            line-height: 34px;
                            margin-left: 35px;
                            .me {
                                display: inline-block;
                                color: #333333;
                                font-size: 14px;
                            }
                            .blood {
                                display: inline-block;
                                color: #c23d52;
                                font-size: 12px;
                                margin: 0 2px;
                            }
                        }
                        .quality {
                            width: 120px;
                            height: 34px;
                            line-height: 34px;
                            color: #a3a3a3;
                            font-size: 12px;
                        }
                    }
                    .peisong {
                        width: 100%;
                        height: 75px;
                        .distance {
                            width: 100px;
                            // height: 44px;
                            line-height: 44px;
                            margin-left: -90px;
                            margin-top: 13px;
                            font-size: 12px;
                           
                        }
                        .distance1 {
                            // width: 376px;
                            display: flex;
                            align-items: center;
                            // height: 44px;
                            line-height: 38px;
                            // margin-top: 13px;
                            font-size: 12px;
                            color: #9a9a9a;
                            margin-left: 20px;
                        }
                        .duty {
                            width: 400px;
                            height: 34px;
                            line-height: 37px;
                            font-size: 12px;
                            color: #9a9a9a;
                            margin-left: 20px;
                            .espical {
                                color: #d02629;
                                margin: 0 2.5px;
                                cursor: pointer;
                            }
                        }
                    }
                    .buyGoods {
                        width: 525px;
                        height: 40px;
                        border-bottom: 1px solid #efefef;
                        border-top: 1px solid #efefef;
                        margin-left: 14px;
                        ul {
                            width: 525px;
                            height: 40px;
                            li {
                                width: 175px;
                                height: 22px;
                                line-height: 22px;
                                text-align: center;
                                border-right: 1px solid #efefef;
                                margin-top: 10px;
                                .chese {
                                    margin-left: 35px;
                                    // font-size: 11px;
                                    // color: #585858;
                                }
                                .numbe {
                                    // font-size: 11px;
                                    color: #d02629;
                                    margin-left: 7px;
                                }
                            }
                            li:last-child {
                                border-right: 0;
                            }
                        }
                    }
                    .kuCun {
                        width: 100%;
                        height: 57px;
                        margin-top: 15px;
                        margin-left: 5px;
                        input {
                            width: 62px;
                            height: 32px;
                            border: 1px solid #a6a6a8;
                            text-indent: 0.5em;
                        }
                        .math {
                            width: 40px;
                            height: 31px;
                            line-height: 30px;
                            font-size: 12px;
                            color: #a6a6a6;
                            margin-right: 15px;
                            margin-left: 4px;
                        }
                        .addTo {
                            width: 16px;
                            height: 32px;
                            border-bottom: 1px solid #a6a6a8;
                            border-right: 1px solid #a6a6a8;
                            border-top: 1px solid #a6a6a8;
                            margin-right: 3px;
                            .pan {
                                display: block;
                                width: 16px;
                                height: 16px;
                                line-height: 14px;
                                text-align: center;
                                color: #666666;
                            }
                            .pane {
                                display: block;
                                width: 16px;
                                height: 16px;
                                line-height: 14px;
                                text-align: center;
                                border-bottom: 1px solid #a6a6a8;
                                color: #666666;
                            }
                        }
                        .after {
                            height: 30px;
                            line-height: 30px;
                            font-size: 12px;
                            margin-left: 10px;
                            color: #a6a6a6;
                        }
                    }
                    .submit {
                        width: 100%;
                        height: 100px;
                        // text-align: center;
                        .appre {
                            width: 160px;
                            height: 37px;
                            line-height: 37px;
                            margin-left: 65px;
                            margin-right: 12px;
                        }
                        .shop {
                            background: #ffeded;
                            color: #d02629;
                            border: 1px solid #d02629;
                        }
                        .gray {
                            background-color: #9d9d9d;
                            color: #fff;
                            border-color: #9d9d9d;
                            cursor: not-allowed;
                        }
                        .enter {
                            width: 160px;
                            height: 37px;
                            line-height: 37px;
                        }
                    }
                    // #qrcode {
                    //   width: 200px;
                    //   height: 200px;
                    //   position: absolute;
                    //   right: 50px;
                    // }
                    .iphone {
                        height: 30px;
                        line-height: 30px;
                        margin-left: 10px;
                        cursor: pointer;
                        .buyIphone {
                            font-size: 12px;
                            color: #737373;
                            margin-right: 10px;
                        }
                    }
                }
                .check {
                    width: 980px;
                    height: 100%;
                    border: 1px solid #e7e6e6;
                    .mistake {
                        width: 980px;
                        height: 42px;
                        line-height: 42px;
                        .sps {
                            width: 100px;
                            height: 42px;
                            line-height: 42px;
                            text-align: center;
                            color: #333333;
                            border-right: 1px solid #e7e6e6;
                            border-bottom: 1px solid #e7e6e6;
                            font-size: 14px;
                            i {
                                font-size: 12px;
                            }
                        }
                        .sp {
                            width: 980px;
                            height: 42px;
                            border-bottom: 1px solid #e7e6e6;
                        }
                        .bg {
                            border-top: 2px solid #d02629;
                            color: #d02629;
                            border-bottom: 0;
                            background: url(../../assets/img/xz.png) no-repeat
                                45px 0;
                        }
                    }
                    .checkbox {
                        width: 980px;
                        height: auto;
                        .family {
                            width: 980px;
                            height: 82px;
                            .son {
                                text-indent: 1em;
                                width: 300px;
                                height: 36px;
                                line-height: 36px;
                            }
                        }
                        .family1 {
                            height: 750px !important;
                        }

                        .attribute {
                            width: 100%;

                            .table {
                                width: 100%;
                                margin-bottom: 0;

                                tr {
                                    /*th{*/
                                    /*border-left: 1px solid #e8e8e8;*/
                                    /*border-right: 1px solid #e8e8e8;*/
                                    /*}*/
                                    /*td{*/
                                    /*border-left: 1px solid #e8e8e8;*/
                                    /*border-right: 1px solid #e8e8e8;*/
                                    /*padding:10px 0px 10px 10px ;*/
                                    /*}*/

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
                                                margin-top: 16px;
                                            }

                                            .percent-tit {
                                                font-size: 12px;
                                                margin-top: 5px;
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

                                    .right1 {
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
                            /*border: 1px solid #e2e2e2;*/
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
                    .picimg {
                        width: 100%;
                        margin-top: 15px;
                        min-height: 650px;
                        height: 100%;
                        img {
                            margin-left: 16px;
                        }
                    }
                }
            }

            .right {
                width: 202px;
                height: 1320px;
                border: 1px solid #e5e5e5;
                .term {
                    width: 100%;
                    height: 36px;
                    line-height: 36px;
                    background: #f9f9f9;
                    padding: 0 10px;
                }
                dl {
                    width: 100%;
                    height: 246px;
                    margin: 10px 0;
                    dt {
                        width: 168px;
                        height: 168px;
                        margin: 0px 17px;
                        img {
                            width: 168px;
                            height: 168px;
                        }
                    }
                    dd {
                        width: 168px;
                        height: 70px;
                        margin: 0px 17px;
                        .nature {
                            width: 100%;
                            height: 40px;
                            line-height: 20px;
                            font-size: 12px;
                            color: #2a2a2a;
                            margin-top: 5px;
                            display: -webkit-box;
                            overflow: hidden;
                            white-space: normal !important;
                            text-overflow: ellipsis;
                            word-wrap: break-word;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            &:hover{
                                color: red;
                                cursor: pointer;
                            }
                        }
                        .money {
                            font-size: 12px;
                            color: #aa2238;
                        }
                        .aim {
                            .aims {
                                font-size: 12px;
                                color: #434343;
                            }
                            .biggest {
                                font-size: 12px;
                                color: #b99a30;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
