<template>
  <div class="text">
    <common-header v-on:childToParent="onChildClick"></common-header>
    <head-com></head-com>
    <div class="center">
      <div class="header">
        <img class="l logo" src="../../assets/img/fangzi.jpg" />
        <ul class="l">
          <li class="l">
            <router-link to="home">首页</router-link>
          </li>
          <li class="l">></li>
          <li class="l">
            <router-link to="integral">积分商城</router-link>
          </li>
          <li class="l">></li>
          <li class="l">
            <router-link to v-if="weekExchangeData.goods"
              >{{ hotData.description }} {{ goodsSpec }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="top">
        <div class="left l">
          <div class="up l">
            <img
              v-if="hotData.images"
              :src="URL + hotData.images[getSpecIndex].pic_url"
            />
          </div>
          <div class="down l">
            <span class="l">
              <i class="el-icon-caret-left"></i>
            </span>
            <ul class="l">
              <li class="l" v-for="(li, index) in hotData.images" :key="index">
                <img
                  :src="URL + li.pic_url"
                  @mouseover="styleChange(index, li.pic_url)"
                />
              </li>
            </ul>
            <span class="r">
              <i class="el-icon-caret-right"></i>
            </span>
          </div>
        </div>
        <div class="central l">
          <p class="jieshao" v-if="weekExchangeData.goods">
            {{ hotData.description }} {{ goodsSpec }}
          </p>
          <p class="guanggao">{{ hotData.description }}</p>
          <div class="price">
            <p class="l">
              原 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价
              <span v-if="hotData">￥{{ hotData.price_market }}</span>
            </p>
            <p class="l">
              所需积分
              <span>{{ weekExchangeData.integral }}</span>
            </p>
          </div>
          <div class="dizhi">
            <p v-if="goodsSpecInfo.spec">
              颜 &nbsp;&nbsp;色
              <span
                v-for="(it, index) in goodsSpecInfo.spec.spec_children"
                :key="index"
                :class="{ active: itemIndex == index }"
                @click="handleItemClick(it, index)"
                >{{ it.item }}</span
              >
            </p>
            <p>
              配送至
              <input type="text" />
              <span>运费：￥10.00</span>
            </p>
            <p>
              服 &nbsp;&nbsp;务
              <span class="fuwu">
                由
                <span class="yellow">{{ weekExchangeData.store }}</span
                >负责发货，并提供售后服务
              </span>
            </p>
          </div>
          <div class="leiji">
            <p>
              累计评价
              <span v-if="weekExchangeData.goods"
                >{{ weekExchangeData.goods.comment_member }}人评价</span
              >
            </p>
            <p>
              累计销量
              <span v-if="hotData">{{ hotData.selling }}</span>
            </p>
          </div>
          <div class="shuliang">
            <span class="l">数量</span>
            <div class="inp l">
              <input class="l" type="text" v-model="value" />
              <span class="r jia">
                <i @click="add" class="el-icon-plus"></i>
              </span>
              <span class="r">
                <i @click="lose" class="el-icon-minus"></i>
              </span>
            </div>
            <span class="l" v-if="hotData">件 库存{{ hotData.stock }}件</span>
          </div>
          <div class="buy" @click="goExchange">我要兑换</div>
        </div>
        <div class="r right_rew">
          <div class="header l">{{ shop_data.shop_name }}</div>
          <div class="l zonghe">
            <p class="left l">
              <span
                >{{
                  (
                    (shop_data.desccredit +
                      shop_data.servicecredit +
                      shop_data.deliverycredit) /
                    3
                  ).toFixed(1)
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
              <span
                ><img class="l" src="../../assets/img/kefu.jpg" />在线客服</span
              >
            </p>
            <p @click="getSale" class="getReward" v-if="storeCouponList.length">
              领优惠券
            </p>
            <popup
              v-if="saleInfo"
              @close="handleItemClose"
              :coupondata="storeCouponList"
              @itemclick="handleCouponItemClick"
            ></popup>
          </div>
          <div class="l dian">
            <p>
              <span @click="toStore">进店逛逛</span>
              <span @click="shopCollection">{{ collection_text }}</span>
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
            <p @click="storeSearch">店内搜索</p>
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose"
            >
              <span>搜索内容不能为空</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </div>
        </div>
        <!-- <div class="r right">
                    <div class="same">商城提供</div>
                    <p>礼品编号：0001</p>
                    <p>添加时间：2016-11-08</p>
                    <p>浏览人次：219</p>
                    <div class="same">兑换记录</div>
                    <ul>
                        <li v-for="(item,index) in weekExchangeData.record" :key="index">
                            <div class="l">
                                <img :src="URL+item.user_header" />
                            </div>
                            <div class="l">{{item.mobile}}</div>
                            <div class="l">{{item.create_time|formatDate}} 兑换了001件</div>
                        </li>
                    </ul>
                </div> -->
      </div>
      <div class="bottom">
        <div class="left l">
          <div class="up">
            <p class="rmen">最近浏览</p>
            <ul class="l">
              <li class="l" v-for="(img, index) in browser" :key="index">
                <img :src="URL + img.pic_url" />
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542620438617&di=934a6c42aa8fc70f89d333365c9bf7e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21c8701a18b87d69f0ccc220c0828381f30fd45.jpg"
                  v-if="!img.pic_url"
                />
                <p>{{ img.title }}</p>
                <p class="l">销售数量{{ img.sales_sum }}</p>
              </li>
            </ul>
          </div>
          <!-- <div class="down">
                        <p class="liulan">最近浏览</p>
                        <ul class="liulan">
                            <li class="l" v-for="(item,index) in liulan" :key="index">
                                <img :src="item.picture" />
                                <p class="l p">{{item.p}}</p>
                                <span class="l">{{item.pic}}</span>
                            </li>
                        </ul>
                    </div>-->
        </div>
        <!-- <div class="right r">
          <div class="top">
            <ul class="l">
              <li class="bg">商品介绍</li>
            </ul>
            <p class="r"></p>
          </div>
          <div class="middle">
            <p>商家货号：96004746</p>
            <p>品牌：</p>
            <p>类别：不限</p>
            <p>材料：不限</p>
            <p>工艺：不限</p>
            <p>窑口：不限</p>
          </div>
          <div class="down">
            <img
              v-for="(img, index) in hotData.images"
              :key="index"
              class="l"
              :src="URL + img.pic_url"
            />
          </div>
        </div> -->
        <div class="right r">
          <div class="l tab">
            <ul class="l">
              <li @click="undo(0)" :class="{ bg: isbg == 0 }" class="l">
                商品介绍
              </li>
              <li @click="undo(1)" :class="{ bg: isbg == 1 }" class="l">
                商品属性
              </li>
              <li @click="undo(2)" :class="{ bg: isbg == 2 }" class="l">
                商品评价
                <!-- <span>{{ info.comment_number }}</span> -->
              </li>
              <li @click="undo(3)" :class="{ bg: isbg == 3 }" class="l">
                商品咨询
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
              <div class="down" id="detail-img" v-html="shopImage"></div>
            </div>
            <div v-show="only == 1" class="attribute">
              <table class="table" cellspacing="0">
                <tr>
                  <td class="attr_title" colspan="2">商品属性</td>
                </tr>
                <tr v-for="(item, index) in goodsAttr" :key="index">
                  <td class="attr_name">{{ item.attrName }}</td>
                  <td class="attr_value_name">{{ item.attr_value }}</td>
                </tr>
              </table>

              <table v-if="brand != ''" class="table" cellspacing="0">
                <tr>
                  <td class="attr_title" colspan="2">商品品牌</td>
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
                      <div class="percent">{{ nice100.toFixed(0) }}%</div>
                      <p class="percent-tit">好评度</p>
                    </div>
                    <ul class="l jindu">
                      <li>
                        <span>好评({{ nice100.toFixed(0) }}%)</span>
                        <i>
                          <b class="skitt-line"></b>
                        </i>
                      </li>
                      <li>
                        <span>中评({{ center100.toFixed(0) }}%)</span>
                        <i>
                          <b class="skitt-line"></b>
                        </i>
                      </li>
                      <li>
                        <span>差评({{ bad100.toFixed(0) }}%)</span>
                        <i>
                          <b class="skitt-line"></b>
                        </i>
                      </li>
                    </ul>
                  </div>

                  <!--<ul class="clearfix yinxiangul list">-->
                  <!--<li class="impress-tit">买家印象：</li>-->
                  <!--<li class="l tag-info" :key="index" v-for="(yinxiang,index) in yinxiangs">-->
                  <!--<span>{{yinxiang.p}}</span>-->
                  <!--<span>({{yinxiang.span}})</span>-->
                  <!--</li>-->
                  <!--</ul>-->
                </div>
              </div>
              <div class="down">
                <div class="l top">
                  <ul class="l">
                    <li
                      class="l"
                      :class="isCurrentComment == 0 ? 'active' : ''"
                      @click="getAllCommentContent(0)"
                    >
                      全部评价
                      <span>({{ allCount || 0 }})</span>
                    </li>
                    <li
                      class="l"
                      :class="isCurrentComment == 1 ? 'active' : ''"
                      @click="getAllCommentContent(1)"
                    >
                      好评
                      <span>({{ allNice || 0 }})</span>
                    </li>
                    <li
                      class="l"
                      :class="isCurrentComment == 2 ? 'active' : ''"
                      @click="getAllCommentContent(2)"
                    >
                      中评
                      <span>({{ allHeight || 0 }})</span>
                    </li>
                    <li
                      class="l"
                      :class="isCurrentComment == 3 ? 'active' : ''"
                      @click="getAllCommentContent(3)"
                    >
                      差评
                      <span>({{ allBad || 0 }})</span>
                    </li>
                    <li
                      class="l"
                      :class="isCurrentComment == 4 ? 'active' : ''"
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

                    <p class="score">{{ item.score | filtScore }}</p>
                    <p>{{ item.create_time | formatDate }}</p>
                  </div>
                  <div class="right">
                    <p class="l talk">{{ item.content }}</p>
                    <div class="l photo" v-if="item.path">
                      <img
                        v-for="(items, index1) in item.path"
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
                    <span @click="addCommitProblem">我要提问</span>
                  </div>
                </div>
                <div class="consult clearfix">
                  <!-- <div class="yunfei">
                    <p>
                      <span class="huang">Q</span> 满多少免运费?
                      <span class="r day">11月20日 09:20</span>
                    </p>
                    <p>
                      <span class="huang">A</span>
                      公司承诺符合以下情况，公司承诺符合以下情况,公司承诺符合以下情况，公司承诺符合以下情况，公司承诺符合以下情况，公司承诺符合以下情况，公司承诺符合以下情况，公司承诺符合以下情况，公司承诺符合以下情况
                      <span class="r day">11月20日 09:20</span>
                    </p>
                  </div>
                  <div class="yunfei">
                    <p>
                      <span class="huang">Q</span> 满多少免运费?
                      <span class="r day">11月20日 09:20</span>
                    </p>
                    <p>
                      <span class="huang">A</span>
                      公司承诺符合以下情况，公司承诺符合以下情况,公司承诺符合以下情况，公司承诺符合以下情况，公司承诺符合以下情况，公司承诺符合以下情况，公司承诺符合以下情况，公司承诺符合以下情况，公司承诺符合以下情况
                      <span class="r day">11月20日 09:20</span>
                    </p>
                  </div> -->
                  <div
                    class="yunfei"
                    v-for="(item, index) in consultationList"
                    :key="index"
                  >
                    <p>
                      <span class="huang">Q</span> {{ item.content }}
                      <span class="r day">{{
                        ~~item.create_time | formatDate
                      }}</span>
                    </p>
                    <p>
                      <span class="huang">A</span>
                      {{ item.answer ? item.answer : "暂无回答" }}
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
      <div class="base">
        <div class="top">
          <span class="l border">猜您喜欢</span>
          <span class="r" @click="getNew">换一批</span>
          <img class="r" src="../../assets/img/huanyipi.jpg" />
        </div>
        <div class="bottom">
          <ul>
            <li v-for="(bases, index) in myLikeList" :key="index">
              <img v-if="bases.pic_url" :src="URL + bases.pic_url" />
              <img
                v-else
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542620438617&di=934a6c42aa8fc70f89d333365c9bf7e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21c8701a18b87d69f0ccc220c0828381f30fd45.jpg"
              />
              <p>{{ bases.title }}</p>
              <p>￥{{ bases.price_market }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <foot-com></foot-com>
  </div>
</template>

<script>
import xiaojiazi from "@/assets/img/xiaojiazi.jpg";
import img from "@/assets/img/jilutouxiang.png";
import shitou from "@/assets/img/shitou.jpg";
import bigfozhu from "@/assets/img/chase1.png";
import bigfozhu1 from "@/assets/img/chase2.png";
import picture from "@/assets/img/xiaoxiaochahu.jpg";
import baijian from "@/assets/img/baijian.jpg";
import popup from "@/components/royalDrink/popup.vue";
export default {
  data() {
    return {
      addCommitProblemValue: "",
      consultationList: [],
      currentPage: 1,
      page_size: 15,
      page: 32,
      isCurrentComment: 0, //是否在当前评价选项（好评差评切换）
      allCount: 0,
      allNice: 0,
      allHeight: 0,
      allBad: 0,
      allImg: 0,
      comments: {},
      info: {},
      only: "",
      brand: "",
      nice100: 0, //好评
      bad100: 0,
      center100: 0,
      introduce: {}, //商品介绍,
      shopImage: "", // 商品详情
      getSpecIndex: 0, //获取点击规格的索引
      weekExchangeData: "",
      collection_text: "收藏本店",
      collection_text1: "收藏商品",
      store_goods_id: "", //获取店铺id
      storeCouponList: [], //优惠券信息列表
      saleInfo: false, //显示优惠券信息
      isbg: "", //是否是背景图
      storeSearchData: {
        keyword: "",
        minMoney: "0",
        maxMoney: 500
      },
      dialogVisible: false,
      shop_data: {},
      myLikeList: [],
      itemIndex: 0,
      hotData: "",
      goodsSpecInfo: "",
      goodsSpec: "",
      browser: [],
      lis: [xiaojiazi, xiaojiazi, xiaojiazi, xiaojiazi, xiaojiazi],
      value: 1,
      jilus: [
        {
          img: img,
          phone: "1234***",
          day: "2017-02-10",
          count: "1"
        },
        {
          img: img,
          phone: "1234***",
          day: "2017-02-10",
          count: "1"
        },
        {
          img: img,
          phone: "1234***",
          day: "2017-02-10",
          count: "1"
        },
        {
          img: img,
          phone: "1234***",
          day: "2017-02-10",
          count: "1"
        }
      ],
      imgs: [
        {
          shitou: shitou,
          p: "{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm",
          pic: "500"
        },
        {
          shitou: shitou,
          p: "{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm",
          pic: "500"
        },
        {
          shitou: shitou,
          p: "{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm",
          pic: "500"
        },
        {
          shitou: shitou,
          p: "{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm",
          pic: "500"
        },
        {
          shitou: shitou,
          p: "{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm",
          pic: "500"
        }
      ],
      down: [bigfozhu, bigfozhu1, bigfozhu, bigfozhu1],
      liulan: [
        {
          picture: picture,
          p: "极品朱泥盖杯，名家寅 思亭壶 朱泥 宜兴  ",
          pic: "￥720.00"
        },
        {
          picture: picture,
          p: "极品朱泥盖杯，名家寅 思亭壶 朱泥 宜兴  ",
          pic: "￥720.00"
        }
      ],
      basebox: [
        {
          baijian: baijian,
          p: "天然A货翡翠 高档精雕墨翠自在观音28.51g",
          pic: "500.00",
          much: "971"
        },
        {
          baijian: baijian,
          p: "天然A货翡翠 高档精雕墨翠自在观音28.51g",
          pic: "500.00",
          much: "971"
        },
        {
          baijian: baijian,
          p: "天然A货翡翠 高档精雕墨翠自在观音28.51g",
          pic: "500.00",
          much: "971"
        },
        {
          baijian: baijian,
          p: "天然A货翡翠 高档精雕墨翠自在观音28.51g",
          pic: "500.00",
          much: "971"
        },
        {
          baijian: baijian,
          p: "天然A货翡翠 高档精雕墨翠自在观音28.51g",
          pic: "500.00",
          much: "971"
        },
        {
          baijian: baijian,
          p: "天然A货翡翠 高档精雕墨翠自在观音28.51g",
          pic: "500.00",
          much: "971"
        }
      ],
      goodsAttr: [],
      fromChild: ''
    };
  },
  components: {
    popup
  },
  mounted() {
    this.getIntegralGoodsInfo();
    this.getGoodsSpecInfo();
    this.getMyFootFrint();
    this.getMyCollectionLike();
    this.ShopImageDetail(this.$route.params.id);
  },
  created() {
    this.getGoodsDetails();
  },
  methods: {
    onChildClick (value) {
        this.fromChild = value
        if(this.fromChild == 'false') {
            location.reload();
        }
    },
    styleChange(index, url) {
      this.getSpecIndex = index;
      console.log(index, url);
    },
    getAllCommentContent(type) {
      this.isCurrentComment = type;
      this.HTTP(
        this.$httpConfig.getAllCommentContent,
        {
          goods_id: this.$route.params.id,
          type: type
        },
        "post"
      )
        .then(res => {
          this.comments = res.data.data;
          // this.$set(this.comments,'list',res.data.data.list);
          if (res.data.status == 1) {
            this.allCount = res.data.data.allCount;
            this.allNice = res.data.data.allNice;
            this.allHeight = res.data.data.allHeight;
            this.allBad = res.data.data.allBad;
            this.allImg = res.data.data.allImg;
          }
          this.$previewRefresh();
          this.nice100 = (this.comments.allNice / this.comments.allCount) * 100;
          this.center100 =
            (this.comments.allHeight / this.comments.allCount) * 100;
          this.bad100 = (this.comments.allBad / this.comments.allCount) * 100;

          this.$set($(".skitt-line")[0].style, "width", this.nice100 + "%");
          this.$set($(".skitt-line")[1].style, "width", this.center100 + "%");
          this.$set($(".skitt-line")[2].style, "width", this.bad100 + "%");
        })
        .catch(() => {
          this.comments = [];
        });
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
    },
    //获取商品属性
    getGoodsAttr() {
      this.HTTP(
        this.$httpConfig.getGoodsAttr,
        { goods_id: this.$route.params.id },
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
    //处理商品属性相关
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
          goods_id: this.$route.params.id,
          p: this.currentPage
        },
        "get"
      ).then(res => {
        if (res.data.status) {
          this.consultationList = res.data.data.data;
          this.page = Number(res.data.data.page);
          this.page_size = Number(res.data.data.page_size);
        }
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //向店内搜索页传参数
    storeSearch() {
      if (this.storeSearchData.keyword != "") {
        this.$router.push({
          name: "TheStoreSearch",
          query: {
            id: this.$route.query.id,
            keyword: this.storeSearchData.keyword,
            minMoney: this.storeSearchData.minMoney,
            maxMoney: this.storeSearchData.maxMoney,
            type: 0
          }
        });
      } else {
        this.dialogVisible = true;
      }
    },
    //去店铺
    toStore() {
      window.open(
        window.location.origin + "/storehome?id=" + this.shop_data.store_id
      );
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
        ).then(res => {
          this.collection_text = res.data.status == 1 ? "取消收藏" : "收藏本店";
        });
      } else {
        this.HTTP(
          this.$httpConfig.setCancelAttenStore,
          {
            id: this.shop_data.store_id
          },
          "post",
          false
        ).then(res => {
          this.collection_text = res.data.status == 1 ? "收藏本店" : "取消收藏";
        });
      }
    },
    //获取商品信息
    // async getGoodsDetails() {
    //     debugger
    //   let res = await this.HTTP(
    //     this.$httpConfig.getGoodsDetails,
    //     {
    //       id: this.$route.query.goods_id
    //     },
    //     "post"
    //   );
    //   if (res.data.status) {
    //     this.goodsData = res.data.data;
    //     this.imgList = this.goodsData.images;
    //     this.defaultPicture = this.goodsData.images[0].pic_url;
    //     await this.getGoodsSpec(this.goodsData.id);
    //     await this.setup();
    //     await this.getGoodsStoreClass(this.goodsData.store_id); // 店铺导航商品分类
    //     await this.getShopData(this.goodsData.store_id);
    //   }
    // },
    //店铺信息
    getShopData(id) {
      this.HTTP(
        this.$httpConfig.getStoreDetails,
        {
          id: id
        },
        "post"
      ).then(res => {
        this.shop_data = res.data.data;
        this.collection_text =
          res.data.data.if_atten == 0 ? "收藏本店" : "取消收藏";
        this.store_goods_id = res.data.data.store_id;
        this.getCouponInfo();
      });
    },
    // 获取优惠券信息
    getCouponInfo() {
      this.HTTP(
        this.$httpConfig.coupon.couponSendList,
        { store_id: this.store_goods_id },
        "post"
      )
        .then(res => {
          if (res.data.status == 1) {
            this.storeCouponList = res.data.data.data;
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    //显示优惠券信息
    getSale() {
      this.saleInfo = true;
    },
    //隐藏优惠券信息
    handleItemClose() {
      this.saleInfo = false;
    },
    getIntegralGoodsInfo() {
      this.HTTP(this.$httpConfig.integralGoodsInfo, {
        goods_id: this.$route.params.id
      })
        .then(res => {
          this.weekExchangeData = res.data.data;
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
    getGoodsDetails() {
      this.HTTP(this.$httpConfig.getGoodsDetails, {
        id: this.$route.params.id
      })
        .then(res => {
          this.hotData = res.data.data;
          console.log(res.data.data, "new");
          this.getShopData(this.hotData.store_id);
        })
        .catch(err => {
          console.error(err);
        });
    },
    getGoodsSpecInfo() {
      this.HTTP(
        this.$httpConfig.goodsSpecs,
        {
          id: this.$route.params.id
        },
        "post"
      )
        .then(res => {
          this.goodsSpecInfo = res.data.data;
          if (this.goodsSpecInfo) {
            this.goodsSpec = this.goodsSpecInfo.spec.spec_children[0].item;
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    // 获取猜你喜欢列表
    getMyCollectionLike() {
      this.HTTP(this.$httpConfig.myCollectionLike, {}, "post", true).then(
        res => {
          this.myLikeList = res.data.data;
        }
      );
    },
    // 最近浏览
    getMyFootFrint() {
      this.HTTP(this.$httpConfig.getMyFootFrint, {}, "post").then(res => {
        if (res.data.data.list) {
          this.browser = res.data.data.list;
        }
      });
    },
    goExchange() {
      this.$store.state.integralGoodsNum = this.value;
      // if(this.weekExchangeData.integral*this.value>this.totalIntegral){
      //     this.$messahe('您的积分不足，无法兑换',{
      //         type:'warning'
      //     })
      //     return;
      // }
      this.$router.push({
        name: "Settlement",
        params: {
          id: this.$route.params.integral_id,
          num: this.value
        }
      });
    },
    getNew() {
      this.getMyCollectionLike();
    },
    handleItemClick(data, index) {
      this.itemIndex = index;
      console.log(data, "item");
      this.goodsSpec = data.item;
      this.getSpecIndex = index;
    },
    handleCouponItemClick(id) {
      this.HTTP(
        this.$httpConfig.coupon.couponReceiveBehavior,
        { id: id },
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
    add() {
      this.value++;
    },
    lose() {
      if (this.value == 0) {
        this.value = 0;
      } else {
        this.value--;
      }
    }
  }
};
</script>
<style lang="less" scoped>
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
        background: url(../../assets/img/xz.png) no-repeat top 0 left 50%;
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
    // .jieshao {
    //   .up {
    //     height: 93px;
    //     border: 1px solid #e8e8e8;
    //     width: 100%;
    //     border-top: 0;
    //     p {
    //       float: left;
    //       margin-top: 25px;
    //       font-size: 12px;
    //       color: #5d5d5d;
    //     }
    //     p:nth-of-type(1) {
    //       width: 365px;
    //       margin-left: 16px;
    //     }
    //     p:nth-of-type(2) {
    //       width: 342px;
    //     }
    //     p:nth-of-type(3) {
    //       width: 234px;
    //     }
    //     p:nth-of-type(4) {
    //       width: 365px;
    //       margin-left: 16px;
    //       margin-top: 15px;
    //     }
    //     p:nth-of-type(5) {
    //       width: 342px;
    //       margin-top: 15px;
    //     }
    //     p:nth-of-type(63) {
    //       width: 234px;
    //       margin-top: 15px;
    //     }
    //   }
    //   .down {
    //     overflow: hidden;
    //     border: 1px solid #e8e8e8;
    //     img {
    //       margin-left: 16px;
    //     }
    //     img:last-child {
    //       margin-bottom: 76px;
    //     }
    //     img:first-child {
    //       margin-top: 15px;
    //     }
    //   }
    //   #detail-img {
    //     text-align: center;
    //     margin-top: 5px;
    //     img {
    //       width: 100% !important;
    //     }
    //   }
    // }

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
</style>
<style lang="less" scope>
.right_rew {
  width: 210px;
  border: 1px solid #d2d2d2;
  min-height: 474px;
  .header {
    height: 40px;
    line-height: 40px;
    background: #f9f9f9;
    width: 100%;
    padding-left: 14px;
    font-size: 14px;
    color: #3b3b3b;
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
      margin: 12px 1px;
      color: #fff;
      border-radius: 4px;
      width: 93%;
      position: relative;
      top: 40px;
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
      margin-top: 29px;
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

.header {
  height: 37px;
  line-height: 37px;
  .logo {
    padding: 13px 8px 0 0;
  }
  li {
    font-size: 12px;
    a {
      color: #a1a1a1;
    }
    &:hover a {
      color: red;
    }
  }
  li:last-child {
    a {
      color: #555;
    }
  }
}

.top {
  margin-top: 2px;
  overflow: hidden;
  .left {
    width: 400px;
    .up {
      width: 400px;
      height: 400;
      img {
        float: left;
      }
    }
    .down {
      width: 100%;
      margin-top: 14px;
      display: flex;
      span {
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
      ul {
        margin: 0 9px;
        li {
          width: 58px;
          height: 58px;
          border: 1px solid #d1d1d1;
          margin-right: 15px;
          &:hover {
            border-color: #a89b4c;
          }
        }
        li:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .central {
    width: 549px;
    margin-left: 10px;
    .jieshao {
      font-size: 14px;
      color: #303030;
      margin: 0 0 8px 9px;
    }
    .guanggao {
      font-size: 12px;
      color: #d02629;
      margin: 0 0 9px 9px;
    }
    .price {
      width: 100%;
      height: 92px;
      background: url(../../assets/img/beijing.jpg) no-repeat center;
      p {
        font-size: 12px;
        color: #9a9a9a;
        margin-left: 25px;
        width: 100%;
      }
      p:nth-of-type(1) {
        margin-top: 21px;
        span {
          margin-left: 14px;
          font-size: 9px;
          color: #575757;
          text-decoration: line-through;
        }
      }
      p:nth-of-type(2) {
        margin-top: 18px;
        span {
          font-size: 18px;
          color: #d62b3e;
          margin-left: 10px;
        }
      }
    }
    .dizhi {
      overflow: hidden;
      p {
        font-size: 12px;
        color: #9a9a9a;
        margin-left: 25px;
        width: 100%;
      }
      p:nth-of-type(1) {
        height: 34px;
        line-height: 34px;
        margin-top: 20px;
        span {
          padding: 12px 14px;
          border: 1px solid #c6c6c6;
          margin-left: 11px;
          &:hover {
            border-color: #ae984d;
          }
        }
        span:nth-of-type(1) {
          margin-left: 22px;
        }
        .active {
          background-color: #fe2d55;
          color: #fff;
        }
      }
      p:nth-of-type(2) {
        margin-top: 16px;
        input {
          width: 98px;
          height: 22px;
          border: 1px solid #d2d2d2;
          margin: 0 16px 0 20px;
        }
        span {
          color: #555;
        }
      }
      p:nth-of-type(3) {
        margin-top: 24px;
        .fuwu {
          margin-left: 22px;
          .yellow {
            color: #d02629;
          }
        }
      }
    }
    .leiji {
      height: 40px;
      border-top: 1px solid #f1f1f1;
      border-bottom: 1px solid #f1f1f1;
      margin-left: 20px;
      margin-top: 22px;
      p {
        float: left;
        width: 168px;
        height: 20px;
        line-height: 20px;
        line-height: 20px;
        text-align: center;
        border-left: 1px solid #e4e0dd;
        margin-top: 10px;
        font-size: 12px;
        color: #555;
        span {
          color: #d02629;
          margin-left: 7px;
        }
      }
      p:first-child {
        border-left: 0;
      }
    }
    .shuliang {
      margin-top: 13px;
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
        }
        span {
          width: 15px;
          height: 14px;
          background: #eef4f2;
          i {
            font-size: 7px;
            float: left;
            margin-top: 1px;
            margin-left: 2px;
            cursor: pointer;
            &:hover {
              color: red;
            }
          }
        }
        .jia {
          border-bottom: 1px solid #a7a7a7;
        }
      }
    }
    .buy {
      cursor: pointer;
      margin-top: 34px;
      width: 162px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      background: #d02629;
      border-radius: 3px;
      margin-left: 73px;
    }
  }
  .right {
    width: 210px;
    height: 474px;
    border: 1px solid #d2d2d2;
    .same {
      height: 40px;
      background: #f9f9f9;
      font-size: 14px;
      color: #333;
      padding-left: 14px;
      line-height: 40px;
    }
    p {
      color: #666;
      font-size: 12px;
      margin-left: 17px;
      margin-top: 15px;
    }
    p:nth-of-type(1) {
      margin-top: 24px;
    }
    p:nth-of-type(3) {
      margin-bottom: 21px;
    }
    ul {
      li {
        width: 192px;
        height: 60px;
        border-bottom: 1px dashed #e6e6e6;
        margin-left: 8px;
        div:nth-of-type(1) {
          width: 40px;
          height: 40px;
          border-radius: 50px;
          margin-top: 9px;
          margin-right: 9px;
        }
        div:nth-of-type(2) {
          font-size: 12px;
          color: #333;
          margin: 13px 0 0 0;
        }
        div:nth-of-type(3) {
          font-size: 12px;
          color: #999;
        }
      }
      li:last-child {
        border-bottom: 0;
      }
    }
  }
}

.bottom {
  overflow: hidden;
  margin-top: 30px;
  .left {
    width: 204px;
    .up {
      border: 1px solid #e5e5e5;
      overflow: hidden;
      .rmen {
        line-height: 40px;
        background: #f9f9f9;
        font-size: 14px;
        color: #555;
        padding-left: 11px;
      }
      ul {
        li {
          width: 168px;
          margin: 10px 17px 0;
          p {
            cursor: pointer;
            font-size: 12px;
            color: #363636;
          }
          p:nth-of-type(1) {
            margin: 10px 0;
            &:hover {
              color: red;
            }
          }
          p:nth-of-type(2) {
            color: #e74343;
            font-size: 14px;
          }
        }
      }
    }
    .down {
      border: 1px solid #e5e5e5;
      overflow: hidden;
      margin-top: 1284px;
      .liulan {
        line-height: 40px;
        background: #f9f9f9;
        font-size: 14px;
        color: #555;
        padding-left: 11px;
      }
      ul {
        li {
          width: 193px;
          border-bottom: 1px solid #ebe8e8;
          margin-left: 5px;
          height: 69px;
          img {
            margin: 10px 9px 0 5px;
            float: left;
          }
          .p {
            cursor: pointer;
            font-size: 12px;
            color: #555;
            width: 124px;
            line-height: 17px;
            margin-top: 10px;
            &:hover {
              color: red;
            }
          }
          span.l {
            line-height: 21px;
            font-size: 10px;
            color: #e30707;
          }
        }
      }
    }
  }
  .right {
    width: 983px;
    border: 1px solid #e7e6e6;
    border-top: 0;
    overflow: hidden;
    .top {
      height: 41px;
      li {
        width: 90px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #e7e6e6;
        border-left: 0;
      }
      .bg {
        color: #d02629;
        border-top: 1px solid #d02629;
        background: url(../../assets/img/xiasanjiao.jpg) no-repeat top 0 left
          50%;
      }
      p {
        border: 1px solid #e7e6e6;
        width: 890px;
        height: 41px;
        border-right: 0;
        border-left: 0;
      }
    }
    .middle {
      height: 93px;
      border-bottom: 1px solid #e8e8e8;
      width: 100%;
      p {
        float: left;
        margin-top: 25px;
        font-size: 12px;
        color: #5d5d5d;
      }
      p:nth-of-type(1) {
        width: 365px;
        margin-left: 16px;
      }
      p:nth-of-type(2) {
        width: 342px;
      }
      p:nth-of-type(3) {
        width: 234px;
      }
      p:nth-of-type(4) {
        width: 365px;
        margin-left: 16px;
        margin-top: 15px;
      }
      p:nth-of-type(5) {
        width: 342px;
        margin-top: 15px;
      }
      p:nth-of-type(63) {
        width: 234px;
        margin-top: 15px;
      }
    }
    .down {
      margin: 15px 0 76px 16px;
      overflow: hidden;
    }
  }
}

.base {
  overflow: hidden;
  margin-bottom: 40px;
  // margin-top: 300px;
  .top {
    height: 39px;
    width: 100%;
    line-height: 37px;
    span.l {
      width: 105px;
      line-height: 37px;
      color: #454545;
      text-align: center;
    }
    img {
      margin: 12px 6px 0 0;
    }
    span.r {
      color: #93919e;
      font-size: 12px;
    }
    .border {
      border-bottom: 2px solid #b99e66;
      color: #d02629 !important;
    }
  }
  .bottom {
    height: 270px;
    width: 100%;
    margin-top: 0;
    border: 1px solid #e5e5e5;
    ul {
      li {
        width: 168px;
        margin: 17px 15px 0;
        float: left;
        img {
          width: 100%;
          height: 178px;
        }
        p {
          font-size: 12px;
          margin-top: 10px;
        }
        p:nth-of-type(2) {
          color: #b22e2c;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
