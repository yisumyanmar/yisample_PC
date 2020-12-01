<template>
  <div class="yuyin">
    <common-header v-on:childToParent="onChildClick"></common-header>
    <head-com></head-com>
    <div class="center">
      <div class="header">
        <img class="l" src="../../assets/img/fangzi.jpg"/>
        <span class="shouye" @click="$router.push('home')">首页></span>
        <span class="xiala">全部商品</span>
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

        <div class="g-main-n l ">
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

        <div class="g-main-n l " >
          <span class="l leftbg">商&nbsp;品&nbsp;分&nbsp;类：</span>
          <div class="q_class_list l" :class="{active:onoff1}">
            <ul class="l" ref="priceHeight">
              <li class="l" v-for="(item,index) in class_type1" :key="index " @click="getClassName1(item.id)"
              :class="classType1.type1 === item.id ? 'active' : '' ">
                {{item.class_name}}
              </li>
            </ul>
          </div>
        </div>

        <div class="g-main-n l" v-if="class_type2 !=null" >
          <span class="l leftbg" >商&nbsp;品&nbsp;二&nbsp;级&nbsp;分&nbsp;类：</span>
          <div class="q_class_list l" :class="{active:onoff1}">
            <ul class="l" ref="priceHeight">
              <li class="l" v-for="(item,index) in class_type2"  :key="index " @click="getClassName2(item.id)"
              :class="classType2.type2 === item.id ? 'active' : '' " >
                {{item.class_name}}
              </li>
            </ul>
          </div>
        </div>
        
        <div class="g-main-n l" v-if="class_type !=null" >
          <span class="l leftbg">商&nbsp;品&nbsp;三&nbsp;级&nbsp;分&nbsp;类：</span>
          <div class="q_class_list l" :class="{active:onoff1}">
            <ul class="l" ref="priceHeight">
              <li class="l" v-for="(item,index) in class_type" :key="index " @click="getClassName(item.id)"
              :class="classType.type === item.id ? 'active' : '' ">
                {{item.class_name}}
              </li>
            </ul>
          </div>
        </div>

        <div class="attr" v-for="(item,index) in attr" :key="index" :class="{active:onoff1}">
            <div class="attributes">
            <div class="name" @click="chooseAttr1(item,index)"><p class="leftbg">{{item.attr_name}} &nbsp;:&nbsp;</p></div>
            <div class="values"  v-for="(val,index1) in item.attr_values " :key="index1" @click="chooseAttr(val,index1)"
             :class="attributes.attrIndex === val ? 'active' : '' " > {{val}}</div>
            </div>
        </div>
        <!-- <div class="g-main-n l">
          <span class="l">颜 &nbsp;色：</span>
          <div class="q_class_list l">
            <ul class="l">
              <li class="l" v-for="(color, index) in selectGoods.color" :key="index" @click="selectColor(index)" :class="selected.colorIndex === index ? 'active' : '' ">{{color}}</li>
            </ul>
          </div>
          <i class="el-icon-arrow-down g-btn"></i>
        </div> -->
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
              <li @click="tab(4)" :class="{actives:isactive == 4}">默认</li>
              <li class="li" v-for="(theards,index) in selectGoods.theard" @click="tab(index)" :key="index"
                  :class="[isactive === index ? 'active' : '']">
                <span>{{theards}}</span>
                <img v-if="isactive === index" src="../../assets/img/x.png"
                     :style="selected.theard[index] ? 'transform: rotate(0deg)' : 'transform: rotate(180deg)'" alt="">
                <img v-if="isactive !== index" src="../../assets/img/xiajiantou.png" alt="">
              </li>
            </ul>
            <div class="ziying l"><input class="l" type="checkbox" :checked="selfSupportChecked" @click="selfSupport"/>平台自营
            </div>
            <div class="l shangpin">
              商品所在地：
              <select class="r" name="">
                <option value="">不限地区</option>
                <option v-for="(item, index) in city" :key="index">{{item.name}}</option>
              </select>
            </div>
            <div class="r next">
              <span class="button">上一页</span>
              <span class="button">下一页</span>
            </div>
          </div>
          <div class="bottom">
            <ul class="l">
              <li class="bagli l" v-for='(li,i) in list' :key="i">
                
                <img class="bag" :src="li.oneIMg" @click="toDetail(li.id)"/>
                <img v-if="li.goods_type_pic_url" :src="URL + li.goods_type_pic_url" class="cati">
                <img v-else class="cati">
                <ul class="samllul l">
                  <li class="l" :class="index == li.selectedIndex ? 'active' : '' " v-for="(item,index) in li.pic_url"
                      :key="index" @mouseover="showBigImg(i,index)">  
                    <img class="samll" :src="item.pic_url"/>
                  </li>
                </ul>
                <p @click="toDetail(li.id)" class="l">{{li.title}}</p>
                <div class="l pice">
                  <span>￥{{li.price_member}}</span>
                  <span>￥{{li.price_market}}</span>
                  <span style="margin-left:25px;color:#656565;font-size:11px;position:absolute;right:10px;top: 3px;">已售{{li.sales_sum}}件</span>
                </div>
                <div class="buy l">
                  <!--<span @click.stop="compare(li.id)">-->
                  <!--<label>-->
                  <!--<input class="l" type="checkbox" />-->
                  <!--<span>对比</span>-->
                  <!--</label>-->
                  <!--</span>-->
                  <span v-if="li.is_collect == 0" @click.stop="toCollect(li.id,i)" class="g-collection">
                    <i class="l like"></i>
                    <span>收藏</span>
                  </span>
                  <span v-else class="g-collection" @click.stop="toCollect(li.id,i)">
                    <i class="l like cancel"></i>
                    <span>已收藏</span>
                  </span>
                 </div>

                 <!-- <i class="r car" @click="addCar(li.id, li.price_member, li.store_id)"></i> -->
                 <i class="r car" @click="addSpecification(li.id, li.price_member, li.store_id)"></i>

                <p @click="goToStore(li.store_id)" class="shop-show">
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
          </div>

          <div class="spec_box" v-show="specificationBox">
          <div class="popup_div">
            <div class="header_div">
              <p class="header_text">请选择商品规格</p>
              <img class="cross-icon" @click="cancelArea" src="../../assets/img/clone-icon.png" />
            </div>
            <div class="popup_box">
                <!-- <p class="password_text">尺寸 :</p>
                <div class="specification_box" v-for="(item, index) in specData.spec_group" :key="index">
                <p class="time_message">aa</p>
                </div> -->

                <div
                  class="spec-group"
                  v-for="(item, index) in spec.spec_group"
                  :key="index"
                >
                  <span class="group-name">{{ item.name }}</span>
                  <div class="spec-term-list">
                    <span class="spec-term-name"
                      v-if="item.id == d.spec_id"
                      @click="addClass(index, item.id, d.id)"
                      v-for="(d, i) in spec.spec_children"
                      :key="i"
                      :class="{ active: d.default_spec, ifactive: d.default_spec }"
                      >{{ d.item }}</span>
                  </div>
                </div>

                <button class="confirm_button" @click.stop="addCar( specData_id, specData_price, specData_storeId )">添加</button>
                <button class="cancel_button" @click="cancelArea">取消</button>
                
            </div>
          </div>
          </div>

        </div>
      </div>
      <div class="fenye" v-show="list.length !== 0">
        <div class="box2">
          <el-pagination @current-change="handleCurrentChange" background layout="total,prev, pager, next,jumper"
                         :current-page.sync="currentPage" :page-size="page_size" :total="page">
          </el-pagination>
        </div>
      </div>
      <like-and-history></like-and-history>
    </div>
    <foot-com></foot-com>
  </div>
</template>

<script>
  import hotSale from '../../common/hotSale.vue'
  import newProduct from '../../common/newProduct.vue'
  import errorIMG from '@/assets/img/picdingwei.png'
  import fozhu1 from '@/assets/img/fozhu1.jpg'
  import fozhu from '@/assets/img/fozhu.jpg'
  import shoucang from '@/assets/img/shoucang.jpg'
  import gouwuche from '@/assets/img/gouwuche.jpg'
  import panzi from '@/assets/img/panzi.jpg'
  import shoulian from '@/assets/img/shoulian.jpg'
  import baijian from '@/assets/img/baijian.jpg'
  import yuzhuo from '@/assets/img/yuzhuo.jpg'
  import topArrow from '@/assets/img/xiajiantou.png'
  import activeArrow from '@/assets/img/Xiajiantou1.png'

  export default {
    components: {
      hotSale,
      newProduct
    },
    data() {
      return {
        selfSupportChecked: true,
        selectGoods: {
          brand: [],
          price: ['0-500', '500-1000', '1000-2500'],
          color: ['黑色', '蓝色'],
          theard: ['销量', '人气', '价格','新品'],
        },
        selected: {
          brandIndex: null,
          priceIndex: null,
          colorIndex: null,
          theard: [false, false, false, false],
        },
        pinpais: [],
        lis: [],
        isactive: 4,
        isbg: '',
        iscolorur: '',
        basebox: [],
        base: [],
        params: {
          class_id: this.$route.query.class_id,
          page: undefined,
          brand_id: undefined,
          price: undefined,
          sort: undefined
        },
        city: [],
        list: '',
        hotCommodities: '',
        show: false,
        show1: false,
        onoff: false,
        onoff1: false,
        page: 0, //共多少条
        currentPage: 1, //当前页
        page_size: 20, //每页显示多少条数据
        drinkNo: null,
        fromChild: '',
        attr:'',
        attrIndex:'',
        class_type:'',
        class_type1:'',
        class_type2:'',
        class_name:'',
        classType:{
          type:null,
        },
        classType1:{
          type1:null,
        },
        classType2:{
          type2:null,
        },
        attributes:{
          attrIndex:null,
        },
        specificationBox: false,
        spec: {},
        specData: {},
        spec_Id: '',
        isactive: '',
        specData_id: '',
        specData_price: '',
        specData_storeId: '',
        goodsId: "",
      }
    },
    created() {
      this.drinkNo = JSON.parse(localStorage.getItem("class"));
    },
    mounted() {
      this.getCity();
      this.params.page = 1;
      this.getList()
      this.getBrandList()
      this.getHotCommodities()
      this.show = this.$refs.brandHeight.clientHeight > 55 ? true : false
      this.show1 = this.$refs.priceHeight.clientHeight > 55 ? true : false
      this.goodsId = this.$route.query.id;
    },
    methods: {
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
      
      // 筛选
      selectBrand(brandId, index) {
        this.selected.brandIndex = index;
        this.params.brand_id = ~~brandId;
        this.params.page = 1;
        this.currentPage = 1;
        this.getList()
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
      getClassName1(id,class_name) {
      this.class_one= id; 
      this.classType1.type1 = id;
      this.class_name =class_name;
      this.params.class_id = id;
      this.list = [];
      this.getList();
      this.getBrandList();
    },
    getClassName2(id,class_name) {
      this.class_two = id;
      this.classType2.type2 = id;
      this.class_name =class_name;
     this.params.class_id = id;
      this.list = [];
      this.getList();
      this.getBrandList();
    },
    getClassName(id,class_name) {
      this.class_id = id;
      this.classType.type = id;
      this.class_name =class_name;
      this.params.class_id = id;
      this.list = [];
      this.getList();
      this.getBrandList();
    },
      // 获取品牌
      getBrandList() {
      this.HTTP(this.$httpConfig.getBrandList, {
        class_id:this.$route.query.class_id,
        values:this.values,
        class_one:this.class_one,
        class_two:this.class_two,
        class_id:this.class_id,
      }, "post").then(res => {
        if (res.data.status) this.selectGoods.brand = res.data.data.brand;
        this.attr = res.data.data.goodsType;
        this.class_type1 = res.data.data.classLevelOne;
        this.class_type2 = res.data.data.classLevelTwo;
        this.class_type = res.data.data.classLevelThree;

        });
      },
      // 获取城市
      getCity() {
        this.HTTP(this.$httpConfig.regionLists, {}, 'post').then(res => {
          this.city = res.data.data
        }).catch(err => {
          throw err
        })
      },
      selfSupport() {
        if (this.selfSupportChecked) {
          this.HTTP(this.$httpConfig.goodsStoreProprietary, {
            brand_id: '1',
            type: 1
          }, 'post').then(res => {
            console.log(res)
          }).catch(err => {
            throw err
          })
        }
      },
      selectColor(index) {
        alert(index + '暂无api')
      },
      open(s) {
        if (s == 1) {
          this.onoff = !this.onoff;
        } else {
          this.onoff1 = !this.onoff1;
        }

      },
      // 获取店铺商品排行榜
      getHotCommodities() {
        this.HTTP(this.$httpConfig.getHotCommodities, {}, 'post').then((res) => {
          this.hotCommodities = res.data.data;
        }).catch(() => {

        })
      },
      /*页面跳转*/
      handleCurrentChange(currentPage) {
        this.params.page = currentPage;
        this.getList();
      },
      tab(index) {
        this.isactive = index;
        if (index !== 4) {
          this.selected.theard[index] = !this.selected.theard[index]
          this.$set(this.selected.theard, index, this.selected.theard[index])

          /*
            1:销量由高到低
            2:销量由低到高
            3:评论次数人气由高到低
            4:评论次数人气由低到高
            5:价格由高到低
            6:价格由低到高
          */
          switch (index) {
            case 0:
              this.selected.theard[index] ? this.params.sort = 1 : this.params.sort = 2
              break;
            case 1:
              this.selected.theard[index] ? this.params.sort = 3 : this.params.sort = 4
              break;
            case 2:
              this.selected.theard[index] ? this.params.sort = 5 : this.params.sort = 6
              break;
            case 3:
              this.selected.theard[index] ? this.params.sort = 7 : this.params.sort = 8
              break;
            default:
              break;
          }
          this.params.page = 1;
          this.currentPage = 1;
          this.getList();
        } else {
          this.params = {
            class_id: this.$route.query.class_id
          }
          this.params.page = 1;
          this.currentPage = 1;
          this.getList()
        }

      },
      
      change(index) {
        this.isbg = index
        this.iscolorur = index
      },
      flushCom() {
        this.$router.go(0);
      },
      // 获取列表
      getList() {
        this.HTTP(this.$httpConfig.getGoodsList, this.params, 'post').then((res) => {
          this.list = res.data.data.list;
          for (var i in this.list) {
            // 如果默认一张图片也没有就使用商品默认图片
            if (this.list[i].pic_url.length == 0) {
              this.list[i].oneIMg = errorIMG
              this.list[i].pic_url.push({
                pic_url: errorIMG
              })
            } else {
              this.list[i].oneIMg = this.URL + this.list[i].pic_url[0].pic_url;
              for (var j in this.list[i].pic_url) {
                this.list[i].pic_url[j].pic_url = this.URL + this.list[i].pic_url[j].pic_url;
              }
            }
            this.list[i].selectedIndex = 0;
          }
          this.page = Number(res.data.data.count);
        }).catch(err => {
          throw err
        })
      },
      showBigImg(index, value) {
        this.$forceUpdate();
        this.$set(this.list[index], 'selectedIndex', value);
        this.$set(this.list[index], 'oneIMg', this.list[index].pic_url[value].pic_url);
      },
      // 加入收藏夹
      toCollect(id, index) {
        this.HTTP(this.$httpConfig.setCollectionGoods, {
          goods_id: id
        }, 'post').then((res) => {
          if (res.data.status == 10001) {
            this.$router.push("/passwordLogin");
            return
          }
          if (res.data.message == '收藏成功') {
            this.list[index].is_collect = 1;
          } else {
            this.list[index].is_collect = 0;
          }

          // this.$forceUpdate();
        }).catch(err => {
          throw err
        })
      },
      // 去详情页
      toDetail(id) {
        window.open(window.location.origin + '/shopsn_product?id=' + id)
      },
      cancelArea() {
        this.specificationBox = false;
      },
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
            // if (goodsId) {
            //     this.goodsId = goodsId;
            //     this.getGoodsDetails(goodsId);
            // } else {
            //     this.goodsId = this.$route.query.id;
            //     this.getGoodsDetails(this.goodsId);
            // }
        },
        addSpecification(id, price, storeId) {
          this.specData_id = id;
          this.specData_price = price;
          this.specData_storeId = storeId;
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
                      this.specificationBox = true;
                  })
                  .catch(err => {
                    this.specificationBox = false;
                    console.log(err.data.message)
                    if(err.data.message) {
                        var params = {
                          goods_id: id,
                          goods_num: 1,
                          price_new: price,
                          store_id: storeId
                        }
                        this.HTTP(this.$httpConfig.addGoodToCart, params, 'post', false)
                        .then((res) => {
                          this.$confirm('', '已成功加入购物车', {
                            confirmButtonText: '查看购物车',
                            cancelButtonText: '继续购物',
                            type: 'success',
                            center: true,
                            lockScroll: false,
                            closeOnClickModal: false,
                            confirmButtonClass: 'to-shopping-cart',
                            cancelButtonClass: 'continue-shopping'
                          })
                          .then(() => {
                            window.open(window.location.origin + '/buyCar');
                          }).catch(() => {

                          });
                        })
                      }
                  });
        },
      // 加入购物车
      addCar(id, price, storeId) {
        var params = {
          // goods_id: id,
          goods_id: this.goodsId,
          goods_num: 1,
          price_new: price,
          store_id: storeId
        }
        this.HTTP(this.$httpConfig.addGoodToCart, params, 'post', false)
        // .then((res) => {
        //   this.$confirm('', '已成功加入购物车', {
        //     confirmButtonText: '查看购物车',
        //     cancelButtonText: '继续购物',
        //     type: 'success',
        //     center: true,
        //     lockScroll: false,
        //     closeOnClickModal: false,
        //     confirmButtonClass: 'to-shopping-cart',
        //     cancelButtonClass: 'continue-shopping'
        //   })
        //   this.$confirm('尺寸 : aaa', '请选择商品属性', {
        //     confirmButtonText: '查看购物车',
        //     cancelButtonText: '继续购物',
        //     lockScroll: false,
        //     closeOnClickModal: false,
        //     confirmButtonClass: 'to-shopping-cart',
        //     cancelButtonClass: 'continue-shopping'
        //   })
          .then(() => {
            window.open(window.location.origin + '/buyCar');
          }).catch(() => {

          });
        // })
        this.specificationBox = false;
      },
      // 比较
      compare(id) {
        console.log('暂不做')
      },

    }
  }
</script>

<style lang="less" scoped>
  
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
.el-dropdown{
 width: 230px !important; 
}
.el-dropdown-menu {
    width: 230px !important;
    position: absolute !important;
    margin: 5px 5px 0 -150px !important;
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
 
  .leftbg{
    width: 15%;
    background: #f3f3f3;
    padding: 15px 20px 24px 20px;
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
      // height: 45px;
      // width: 80%;
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
            height:59px;
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
            height: 470px;
            border: 1px solid #f1f1f1;
            margin-bottom: 15px;
            margin-left: 20px;
            .cati{
              padding-right: 13px;
              margin: -420px 0px 0px 175px;
            }
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
              position: relative;

              span:nth-of-type(1) {
                color: #de2d35;
                font-size: 16px;
              }

              span:nth-of-type(2) {
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

            .car {
              margin: 5px 14px 0 0;
              width: 30px;
              height: 30px;
              cursor: pointer;
              background: url(../../assets/img/goshop.png) no-repeat;
              background-size: 100% 100%;
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
    .spec_box {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      .popup_div {
        width: 500px;
        height: auto;
        background: #ffffff;
        margin: 200px 600px;
        position: absolute;
        .header_div {
          background: #f1f1f1;
          padding: 10px;
          .header_text {
            font-size: 16px;
          }
          .cross-icon {
            width: 18px;
            height: 18px;
            float: right;
            margin-top: -20px;
          }
        }
        .popup_box{
          padding: 20px 30px;
            // .password_text {
            //   float: left;
            //   font-size: 14px;
            //   padding-top: 10px;
            // }
            // .specification_box {
            //   cursor: pointer;
            //   border-radius: 3px;
            //   width: 110px;
            //   height: 38px;
            //   background: #fff;
            //   border: 1px solid #de2d35;;
            //   text-align: center;
            //   line-height: 38px;
            //   margin-left: 50px;
            //   .time_message {
            //     color: #333;
            //     font-size: 14px;
            //   }
            // }

            .spec-group {
              font-size: 14px;
              color: #9a9a9a;
              width: 100%;
              line-height: 20px;
              padding-left: 60px;
              margin-left: 0;
              overflow: hidden;
              padding-bottom: 12px;

              .spec-term-list {
                margin-left: 25px;
                float: left;

                .spec-term-name {
                  cursor: pointer;
                  margin-top: 6px;
                  padding: 2px 10px;
                  border: 1px solid #c6c6c6;
                  margin: 2px 11px 2px 0;
                  float: left;

                  &:hover {
                    border-color: #ae984d;
                  }
                }

                .active {
                  border-color: #fe2d55;
                  color: #ffffff;
                  background: #fe2d55;
                }
              }

              .group-name {
                float: left;
                line-height: 30px;
                width: 60px;
                text-align: right;
                margin-left: -60px !important;
              }
            }
            .confirm_button {
              cursor: pointer;
              border-radius: 3px;
              width: 110px;
              height: 38px;
              background: #d02629;
              text-align: center;
              line-height: 38px;
              color: #fff;
              font-size: 14px;
              margin-left: 85px;
            }
            .cancel_button {
              cursor: pointer;
              border-radius: 3px;
              width: 110px;
              height: 38px;
              background: #ffffff;
              text-align: center;
              line-height: 38px;
              border: 1px solid #dcdfe6;
              color: #606266;
              font-size: 14px;
              margin-left: 30px;
            }
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
