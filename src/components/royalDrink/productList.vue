<template>
  <div class="yuyin">
    <common-header v-on:childToParent="onChildClick"></common-header>
    <head-com v-if="tempid" :navid = tempid></head-com>
    <!-- <head-com></head-com> -->
    <!-- <head-com v-if="conditiontemp" :navid = conditiontemp @naviddata="navdata"></head-com>
    <head-com v-else :navid = '4' @naviddata="navdata"></head-com> -->
    <div class="center">
      <div class="header">
        <img class="l" src="../../assets/img/fangzi.jpg" />
        <span class="shouye" @click="$router.push('home')">首页></span>
        <!-- <span class="xiala">{{ getTopClass($route.query.class_id) }}</span> -->
        <span class="xiala">{{ $route.query.class_name }}</span>
      </div>
      <!-- 热卖推荐 -->
      <hot-sale></hot-sale>
      <div class="choose"> 
        <div class="g-main-n l" style="height: 57px;">
          <span class="l leftbg" style="height: 57px;padding-top: 20px;" >品 &nbsp;牌：</span>
          <div class="q_class_list l" :class="{active:onoff}" style="height: 57px;">
            <ul class="l" ref="brandHeight">
              <li class="l text1-hidden" v-for="(item, index) in selectGoods.brand" :key="index"
                  @click="selectBrand(item.id, index)" :class="selected.brandIndex === index ? 'active' : '' ">
                <!-- {{item.brand_name}} -->
                <p class="logo">
                  <img :src="URL+item.brand_logo" class="logopic">
                  <span>{{item.brand_name}}</span>
                </p>
              </li>
            </ul>
          </div>
          <i @click="open(1)" v-if="show" :class="{'el-icon-arrow-up':onoff}" class="el-icon-arrow-down g-btn"></i>
        </div>
        
        
        <div class="g-main-n l">
          <span class="l leftbg">价 &nbsp;格：</span>
          <div class="q_class_list l" :class="{active:onoff1}">
            <ul class="l" ref="priceHeight">
              <li class="l" v-for="(item, index) in selectGoods.price" :key="index" @click="getPrice(item, index)"
                  :class="selected.priceIndex === index ? 'active' : '' ">{{item}}
              </li>
            </ul>
          </div>
          <i @click="open(2)" v-if="show1" :class="{'el-icon-arrow-up':onoff1}" class="el-icon-arrow-down g-btn"></i>
        </div>
        
        <div class="g-main-n l" v-if="variousClassification != null">
          <span class="l leftbg">分 &nbsp;类：</span>
          <div class="q_class_list l" :class="{active:onoff1}">
            <ul class="l" ref="priceHeight">
              <li class="l" v-for="(item, index) in variousClassification" :key="index" @click="getvariousClassification(item.id,index)"
                  :class="selected.variousClassificationIndex === index ? 'active' : '' ">{{item.class_name}}
              </li>
            </ul>
          </div>
          <i @click="open(2)" v-if="show1" :class="{'el-icon-arrow-up':onoff1}" class="el-icon-arrow-down g-btn"></i>
        </div>

      </div>
            
      <div class="new">
        <div class="left l">
          <!-- 新品推荐 -->
            <div class="newProduct">
                <div class="left l">
                    <div class="l up">
                        <div class="headline">新品推荐</div>
                        <span class="nullData">{{newProduct.length === 0 ? '暂无数据' : ''}}</span>
                        <ul>
                        <li v-for="(item, index) in newProduct" :key="index" @click="toDetail(item.id)">
                            <img :src="URL + item.pic_url"/>
                            <p>{{item.title}}</p>
                            <p>￥{{item.goods_price}}
                            <span
                                style="display:inline-block;margin-left:20px;font-size:11px;color:#656565">已售{{item.sales_sum}}件</span>
                            </p>

                        </li>
                        </ul>
                    </div>
                    <div class="l up">
                        <div class="headline">热销排行</div>
                        <span class="nullData">{{tuijian.length === 0 ? '暂无数据' : ''}}</span>
                        <ul>
                        <li v-for="(item, index) in tuijian" :key="index" @click="toDetail(item.id)">
                            <img :src="URL + item.pic_url"/>
                            <p>{{item.title}}</p>
                            <p>￥{{item.goods_price}}
                            <span
                                style="display:inline-block;margin-left:20px;font-size:11px;color:#656565">已售{{item.sales_sum}}件</span>
                            </p>

                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="right r">
          <div class="top">
            <ul class="theard l">
              <li>排列方式：</li>
              <li @click="tab(4)" :class="{ actives: isactive == 4 }">默认</li>
              <li
                class="li"
                v-for="(theards, index) in selectGoods.theard"
                @click="tab(index)"
                :key="index"
                :class="[isactive === index ? 'active' : '']"
              >
                <span>{{ theards }}</span>
                <img
                  v-if="isactive === index"
                  src="../../assets/img/x.png"
                  :style="
                    selected.theard[index]
                      ? 'transform: rotate(0deg)'
                      : 'transform: rotate(180deg)'
                  "
                  alt=""
                />
                <img
                  v-if="isactive !== index"
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
                @click="selfSupport"
              />平台自营
            </div>
            <div class="l shangpin">
              商品所在地：
              <select class="r" name="">
                <option value="">不限地区</option>
                <option v-for="(item, index) in city" :key="index">{{
                  item.name
                }}</option>
              </select>
            </div>
            <div class="r next">
              <span class="button">上一页</span>
              <span class="button">下一页</span>
            </div>
          </div>
          <div class="bottom">
            <ul class="l">
              <li class="bagli l" v-for="(li, i) in list" :key="i">
                <img class="bag" :src="li.oneIMg" @click="toDetail(li.id)" />
                <ul class="samllul l">
                  <li
                    class="l"
                    :class="index == li.selectedIndex ? 'active' : ''"
                    v-for="(item, index) in li.pic_url"
                    :key="index"
                    @mouseover="showBigImg(i, index)"
                  >
                    <img class="samll" :src="item.pic_url" />
                  </li>
                </ul>
                <p
                  @click="toDetail(li.id)"
                  class="l"
                  @mouseenter="updateXY(li.title, $event)"
                  @mouseleave="updataFullFlag"
                >
                  {{ li.title }}
                </p>
                <div class="l pice">
                  <span class="memberprice">￥{{ li.price_member }}</span>
                  <span class="marketprice">￥{{ li.price_market }}</span>
                  <span
                    style="margin-left:25px;color:#656565;font-size:11px;position:absolute;right:10px;top: 3px;"
                    >已售{{ li.sales_sum }}件</span
                  >
                </div>
                <div class="buy l">
                  <!--<span @click.stop="compare(li.id)">-->
                  <!--<label>-->
                  <!--<input class="l" type="checkbox" />-->
                  <!--<span>对比</span>-->
                  <!--</label>-->
                  <!--</span>-->
                  <span
                    v-if="li.is_collect == 0"
                    @click.stop="toCollect(li.id, i)"
                    class="g-collection"
                  >
                    <i class="l like"></i>
                    <span>收藏</span>
                  </span>
                  <span
                    v-else
                    class="g-collection"
                    @click.stop="toCollect(li.id, i)"
                  >
                    <i class="l like cancel"></i>
                    <span>已收藏</span>
                  </span>
                </div>
<!--                <i-->
<!--                  class="r car"-->
<!--                  @click.stop="addCar(li.id, li.price_member, li.store_id)"-->
<!--                ></i>-->
                <p @click="goToStore(li.store_id)" class="shop-show" v-if="li.shop_name">
                  <span class="show-shopname">{{li.shop_name}}</span>
                  <img src="../../assets/img/vioback.png" class="shop-btn" v-if="li.shop_name">
                </p>
                <p class="downfirst" v-if="li.store_grade_name">
                  <el-dropdown v-if="li.store_grade_name">
                    <span class="first-name">{{li.store_grade_name}}</span>
                    <el-dropdown-menu slot="dropdown" v-if="li.store_grade_classification">
                      <el-dropdown-item>{{li.store_grade_classification}}</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </p>
                <div class="allpro-name" v-if="li.store_grade_name">
                  <span class="sec-name" v-if="li.full_gift">{{li.full_gift}}</span>
                  <span class="th-name" v-if="li.full_cut">{{li.full_cut}}</span>
                </div>
                <div v-else>
                  <span class="sec-name" v-if="li.full_gift">{{li.full_gift}}</span>
                  <span class="th-name" v-if="li.full_cut">{{li.full_cut}}</span>
                </div> 
              </li>
            </ul>
            <ul class="l" v-if="list.length == 0" id="no_data">
              暂无数据
            </ul>
          </div>
        </div>
      </div>
      <div class="fenye" v-show="list.length !== 0">
        <div class="box2">
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
      <like-and-history></like-and-history>
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
import hotSale from "../../common/hotSale.vue";
import errorIMG from "@/assets/img/picdingwei.png";
import fozhu1 from "@/assets/img/fozhu1.jpg";
import fozhu from "@/assets/img/fozhu.jpg";
import shoucang from "@/assets/img/shoucang.jpg";
import gouwuche from "@/assets/img/gouwuche.jpg";
import panzi from "@/assets/img/panzi.jpg";
import shoulian from "@/assets/img/shoulian.jpg";
import baijian from "@/assets/img/baijian.jpg";
import yuzhuo from "@/assets/img/yuzhuo.jpg";
import topArrow from "@/assets/img/xiajiantou.png";
import activeArrow from "@/assets/img/Xiajiantou1.png";
import guanyin from '@/assets/img/giftone.png'

export default {
  components: {
    hotSale,
    
  },
  data() {
    return {
      selfSupportChecked: true,
      selectGoods: {
        brand: [],
        price: ["0-500", "500-1000", "1000-2500"],
        color: ["黑色", "蓝色"],
        theard: ["销量", "人气", "价格", '新品']
      },
      // crumbs_name:sessionStorage.getItem('crumbs'),
      selected: {
        brandIndex: null,
        priceIndex: null,
        colorIndex: null,
        theard: [false, false, false, false]
      },
      pinpais: [],
      lis: [],
      isactive: 4,
      isbg: "",
      iscolorur: "",
      basebox: [],
      base: [],
      params: {
        attr_type: this.$route.query.attr_type,
        brand_id: undefined,
        price: undefined,
        values:undefined,
        sort: undefined
      },
      city: [],
      list: "",
      hotCommodities: "",
      show: false,
      show1: false,
      onoff: false,
      fullTitieFlag: false,
      fullTitle: "",
      displayTitleStyle: {
        top: "",
        bottom: ""
      },
      onoff1: false,
      page: 0, //共多少条
      currentPage: 1, //当前页
      page_size: 20, //每页显示多少条数据
      conditiontemp: '',
      tempid: '',
      attr:'',
      attributes:{
          attrIndex:null,
        },
    newProduct: [],
    tuijian: [],
    variousClassification:[]
    };
  },
  beforeDestroy () {
    this.$off('naviddata')
  },
  created(){
    this.newTypeList();
    this.newHotSort();
    this.
    this.$on('naviddata', value => {
       this.conditiontemp = value.id
    })
    
    // let title = "商品分类" + this.$constant.webComContent;
    let title = "商品分类" + '-' + this.$constant.webComContent;
    this.showScroll.scrollTitle(title);
    
  },
  mounted() {
    // console.log('hello good luck Thanks you ' + this.$route.query.id)
    this.tempid = this.$route.query.attr_type
    this.$root.$on('naviddata', value => {
       this.conditiontemp = value.id
    })
    this.getCity();
    this.params.page = 1;
    this.getList();
    this.getBrandList();
    this.getHotCommodities();
    this.show = this.$refs.brandHeight.clientHeight > 55 ? true : false;
    this.show1 = this.$refs.priceHeight.clientHeight > 55 ? true : false;
  },
  methods: {
    newTypeList(){
        this.HTTP(this.$httpConfig.goodsTypeList, {attr_type:this.$route.query.attr_type}, 'post').then(res => {
        if (res.data.status) this.newProduct = res.data.data
        console.log(res.data.data)
        }).catch(e => {
        console.log(e)
        });
    },
    newHotSort(){
        this.HTTP(this.$httpConfig.hotSort, {attr_type:this.$route.query.attr_type}, 'post').then(res => {
        if (res.data.status) this.tuijian = res.data.data
        console.log(res.data.data)
        }).catch(e => {
        console.log(e)
        });
    },
    goToStore(id) {
      sessionStorage.setItem('store_id',id);
      window.open(window.location.origin + '/storehome?id=' + id)
    },
    onChildClick (value) {
      this.fromChild = value
      if(this.fromChild == 'false') {
          location.reload();
      }
    },
    navdata(value) {
      this.conditiontemp = value.id
    },

    // 筛选
    selectBrand(brandId, index,class_id) {
      this.selected.brandIndex = index;
      this.params.brand_id = ~~brandId;
      this.params.id = class_id;
      this.params.page = 1;
      this.currentPage = 1;
      this.list = [];
      this.getList();
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
    // 获取品牌
    getBrandList() {
      this.HTTP(this.$httpConfig.getBrandList, {attr_type:this.$route.query.attr_type}, "post").then(res => {
        if (res.data.status) this.selectGoods.brand = res.data.data.brand;
        this.attr = res.data.data.goodsType;
        this.variousClassification = res.data.data.classLevelThree;
      });
    },
    // 获取城市
    getCity() {
      this.HTTP(this.$httpConfig.regionLists, {}, "post")
        .then(res => {
          this.city = res.data.data;
        })
        .catch(err => {
          throw err;
        });
    },
    selfSupport() {
      if (this.selfSupportChecked) {
        this.HTTP(
          this.$httpConfig.goodsStoreProprietary,
          {
            brand_id: "1",
            type: 1
          },
          "post"
        )
          .then(res => {
            console.log(res);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    selectColor(index) {
      alert(index + "暂无api");
    },
    open(s) {
      if (s == 1) {
        this.onoff = !this.onoff;
      } else {
        this.onoff1 = !this.onoff1;
      }
    },
    getTopClass(data) {
      //  console.log(data)
      let obj = JSON.parse(localStorage.getItem("class"));
      return obj[data];
    },
    // 获取店铺商品排行榜
    getHotCommodities() {
      this.HTTP(this.$httpConfig.getHotCommodities, {}, "post")
        .then(res => {
          this.hotCommodities = res.data.data;
        })
        .catch(() => {});
    },
    /*页面跳转*/
    handleCurrentChange(currentPage) {
      this.params.page = currentPage;
      this.getList();
    },
    tab(index) {
      console.log(index);
      this.isactive = index;
      if (index !== 4) {
        this.selected.theard[index] = !this.selected.theard[index];
        this.$set(this.selected.theard, index, this.selected.theard[index]);

        /*
            1:销量由高到低
            2:销量由低到高
            3:评论次数人气由高到低
            4:评论次数人气由低到高
            5:价格由高到低
            6:价格由低到高
          */
        console.log(this.selected.theard);
        switch (index) {
          case 0:
            this.selected.theard[index]
              ? (this.params.sort = 1)
              : (this.params.sort = 2);
            break;
          case 1:
            this.selected.theard[index]
              ? (this.params.sort = 3)
              : (this.params.sort = 4);
            break;
          case 2:
            this.selected.theard[index]
              ? (this.params.sort = 5)
              : (this.params.sort = 6);
            break;
          case 3:
            this.selected.theard[index]
              ? (this.params.sort = 7)
              : (this.params.sort = 8);
            break;
          default:
            break;
        }
        this.params.page = 1;
        this.currentPage = 1;
        this.getList();
      } else {
        this.params = {
          attr_type: this.$route.query.attr_type
        };
        this.params.class_id = class_id;
        this.params.page = 1;
        this.currentPage = 1;
        this.getList();
      }
    },
    getPrice(item, index, class_id) {
      this.params.price = item.replace("-", ",");
      this.selected.priceIndex = index;
      this.params.class_id = class_id;
      this.params.values = undefined;
      this.params.page = 1;
      this.currentPage = 1;
      this.list = [];
      this.getList();
    },
    getvariousClassification(id,index) {
      this.selected.variousClassificationIndex = index;
      this.params.values = undefined;
      this.params.class_id = id;
      this.params.page = 1;
      this.currentPage = 1;
      this.list = [];
      this.getList();
    },
    
   chooseAttr(val,index){
      this.params.values = val;
      this.params.price = undefined;
      this.attributes.attrIndex = val;
      this.params.page = 1;
      this.currentPage = 1;
      this.list = [];
      // console.log(JSON.stringify(this.params))
      this.getList();
      // this.$router.push({
      //   name: "goodsAttr",
      //     params: {
      //       attr_name: index,
      //       attr_id: attr_id,
      //       class_id: this.$route.query.class_id
      //       }
      //   });  
    },
    chooseAttr1(val,index){
      alert(JSON.stringify(val))
      this.params.values = val;
      this.params.price = undefined;
      this.attrIndex = index;
      this.params.page = 1;
      this.currentPage = 1;
      this.list = [];
      // console.log(JSON.stringify(this.params))
      this.getList();  
    },
    change(index) {
      this.isbg = index;
      this.iscolorur = index;
    },
    flushCom() {
      this.$router.go(0);
    },
    // 获取列表
    getList() {
      this.HTTP(this.$httpConfig.getGoodsList, this.params, "post")
        .then(res => {
          // console.log(object);
          this.list = res.data.data.list;
          console.log(this.list, "list");
          for (var i in this.list) {
            // 如果默认一张图片也没有就使用商品默认图片
            if (this.list[i].pic_url.length == 0) {
              this.list[i].oneIMg = errorIMG;
              this.list[i].pic_url.push({
                pic_url: errorIMG
              });
            } else {
              this.list[i].oneIMg = this.URL + this.list[i].pic_url[0].pic_url;
              for (var j in this.list[i].pic_url) {
                this.list[i].pic_url[j].pic_url =
                  this.URL + this.list[i].pic_url[j].pic_url;
              }
            }
            this.list[i].selectedIndex = 0;
          }
          this.page = Number(res.data.data.count);
        })
        .catch(e => {
          console.log(e);
        });
    },
    showBigImg(index, value) {
      this.$forceUpdate();
      this.$set(this.list[index], "selectedIndex", value);
      this.$set(
        this.list[index],
        "oneIMg",
        this.list[index].pic_url[value].pic_url
      );
    },
    // 加入收藏夹
    toCollect(id, index) {
      this.HTTP(
        this.$httpConfig.setCollectionGoods,
        {
          goods_id: id
        },
        "post"
      )
        .then(res => {
          if (res.data.status == 10001) {
            this.$router.push("/passwordLogin");
            return;
          }
          if (res.data.message == "收藏成功") {
            this.list[index].is_collect = 1;
          } else {
            this.list[index].is_collect = 0;
          }
          // this.$forceUpdate();
        })
        .catch(e => {
          console.log(e);
        });
    },
    // 去详情页
    toDetail(id) {
      window.open(window.location.origin + "/shopsn_product?id=" + id);
    },
    // 加入购物车
    // addCar(id, price, storeId) {
    //   var params = {
    //     goods_id: id,
    //     goods_num: 1,
    //     price_new: price,
    //     store_id: storeId
    //   };
    //   this.HTTP(this.$httpConfig.addGoodToCart, params, "post", false).then(
    //     res => {
    //       this.$confirm("", "已成功加入购物车", {
    //         confirmButtonText: "查看购物车",
    //         cancelButtonText: "继续购物",
    //         type: "success",
    //         center: true,
    //         lockScroll: false,
    //         closeOnClickModal: false,
    //         confirmButtonClass: "to-shopping-cart",
    //         cancelButtonClass: "continue-shopping"
    //       })
    //         .then(() => {
    //           window.open(window.location.origin + "/buyCar");
    //         })
    //         .catch(() => {});
    //     }
    //   );
    // },
    // 比较
    compare(id) {
      console.log("暂不做");
    }
  }
};
</script>
<style lang="less" scoped>
 .el-dropdown{
 width: 230px !important; 
}
.el-dropdown-menu {
    width: 230px !important;
    position: absolute !important;
    margin: 5px 6px 0 -160px !important;
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
<style lang="less">
#no_data {
  font-size: 35px;
  float: initial;
  color: #999999;
  font-weight: 400;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25);
}
</style>
<style>
.el-message-box--center {
  padding-bottom: 50px;
}

.full-display-title {
  position: absolute;
  z-index: 222;
  background: #ffffff;
  border: 1px solid #767676;
  padding: 4px;
  color: #575757;
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
</style>

<style lang="less" scoped>
.active {
  color: #d02629;
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

.header {
  height: 46px;
  line-height: 46px;
  font-size: 12px;
  color: #636260;
  img {
    margin: 17px 7px 0 0;
  }
  .xiala {
    display: inline-block;
    width: 82px;
    height: 23px;
    border: 1px solid #d1d1d1;
    text-align: center;
    line-height: 23px;
    margin-left: 7px;
    position: relative;
    cursor: pointer;
    a {
      color: #636260;
    }
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

 .attr{
    display: inline;
    margin: 25px 0px 7px 0px;
  }
 .attributes{
    width: 1200px;
    display: inline-flex;
    border-bottom: 1px solid #ddd;
 .name{
    display: contents;
    color: #717171;
    font-size: 12px;
  }
  .leftbg{
    width: 15%;
    background: #f3f3f3;
    padding: 15px 20px 15px 10px;
  }
  .values{
    display: inline-flex;
    padding: 12px 14px;
    cursor: pointer;
    &:hover {
      color: #d02629;
    }
  }
  }
.choose {
  overflow: hidden;
  border: 1px solid #e5e5e5;
  margin: 10px 0px 30px 0px;
  padding: 0px 0px -13px 0px;
  // border-bottom: none;
 
  .leftbg{
    width: 15%;
    background: #f3f3f3;
    padding: 15px 20px 16px 20px;
    font-size: 12px;
    color: #797474;
    text-align: center; 
  }
  .g-main-n:last-child {
    border-bottom: none;
  }
  .g-main-n {
    width: 100%;
    overflow: hidden;
    
    // border-bottom: 1px dashed #f5f5f5;
    border-bottom: 1px solid #ddd;
    position: relative;
    
    .q_class_list {
      height: 45px;
      width: 80%;
      overflow: hidden;
      padding-left: 15px;
      ul {
      
        li {
          // margin-right: 47px;
          line-height: 55px;
          margin-right: 20px;
          cursor: pointer;
          &:hover {
            color: #d02629;
          }
          .logo{
            position: relative;
          .logopic{
            width:100px;
            position: absolute;
            height: 59px;
            &:hover{
                display: none;
                cursor: pointer;
              }
            }
              span{
              display:block; 
              color: #d02629;   
              text-align: center;
              border:1px solid #d02629; 
              width:100px;
              cursor: pointer;
              }
            }
        }
      }
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
}
.new {
  overflow: hidden;
    .l {
    float: left;
  }

  .r {
    float: right;
  }

  .left {
    width: 204px;

    .up {
      margin-bottom: 20px;
    }

    .up, .down {
      width: 204px;
      overflow: hidden;
      border: 1px solid #e5e5e5;

      .nullData {
        display: flex;
        height: 50px;
        justify-content: center;
        align-items: center;
      }
    }

    .headline {
      height: 34px;
      background: #f9f9f9;
      width: 100%;
      line-height: 34px;
      color: #383838;
      padding-left: 12px;
      font-size: 16px;
    }

    li {
      width: 100%;
      cursor: pointer;

      img {
        width: 160px;
        margin: 10px 19px 0;
      }

      p {
        font-size: 12px;
        color: #333;
        margin: 0 14px 9px 20px;
      }

      p:nth-of-type(1) {
        &:hover {
          color: red;
        }
      }

      p:nth-of-type(2) {
        color: #e25b55;
      }

      p:last-child {
        margin-bottom: 0;
      }

      .xiaoliang {
        color: #d02629;
      }
    }

    p:nth-of-type(2) {
      margin-bottom: 0;
    }

    li:last-child {
      margin-bottom: 15px;
    }
  }
  /*height: 300px;*/
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
        // .li {
        //   background: url(../../assets/img/xiajiantou.png) no-repeat top 17px
        //     right 8px;
        // }
        .active {
          // background: #fff url(../../assets/img/Xiajiantou1.png) no-repeat top
          //   17px right 8px !important;
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
          height: 445px;
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
            .memberprice {
              color: #de2d35;
              font-size: 16px;
            }
            .marketprice {
              color: #9c9c9c;
              font-size: 9px;
              text-decoration: line-through;
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
              font-size: 12px;
              float: left;
              cursor: pointer;
            }
            .g-collection {
              margin-left: 10px;
              display: flex;
              align-items: center;

              .like {
                width: 25px;
                height: 25px;
                background: url(../../assets/img/heat_null.png) no-repeat;
                background-size: 100% 100%;
                margin-right: 2px;
              }

              .cancel {
                background: url(../../assets/img/heat_fill.png) no-repeat;
                background-size: 100% 100%;
              }
            }
            img {
              width: 17px;
              height: 17px;
            }
          }
          .shop-show{
            height: 23px;   
            .show-shopname{
              font-size: 12px;
              padding: 0 10px 0 0;
            }
            .shop-btn{
              width: 6px;
            }
          }
          .downfirst{
            height: 21px;
            .first-name{
              color: #ffffff;
              background-color: #de2d35;
              font-size: 12px;
              border-radius: 3px;
              padding: .8px 3px 1.5px 3px;
            }
          }
          .allpro-name{
            margin: -21px 0 0 100px;
            .sec-name{
              color: #409EFF;
              background-color: #ffffff;
              font-size: 12px;
              border-radius: 3px;
              padding: 0 3px 1px 3px;
              border: 1px solid #409EFF;
              margin: 0 0 0 5px;
            }
            .th-name{
              color: #409EFF;
              background-color: #ffffff;
              font-size: 12px;
              border-radius: 3px;
              padding: 0 3px 1px 3px;
              border: 1px solid #409EFF;
              margin: 0 0 0 5px;
            }
          }
          .sec-name{
            color: #409EFF;
            background-color: #ffffff;
            font-size: 12px;
            border-radius: 3px;
            padding: 0 3px 1px 3px;
            border: 1px solid #409EFF;
            margin: 0 0 0 5px;
          }
          .th-name{
            color: #409EFF;
            background-color: #ffffff;
            font-size: 12px;
            border-radius: 3px;
            padding: 0 3px 1px 3px;
            border: 1px solid #409EFF;
            margin: 0 0 0 5px;
          }
          .car {
            margin: 7px 14px 0 0;
            width: 30px;
            height: 30px;
            cursor: pointer;
            background: url(../../assets/img/goshop.png) no-repeat;
            background-size: 100% 100%;
          }
          &:hover {
            border-color: #d02629;
            // box-shadow: 1px 2px 3px #999;
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
.fenye {
  width: 100%;
  overflow: hidden;
  .box2 {
    width: 23%;
    margin: 0 auto;
  }
}
</style>
