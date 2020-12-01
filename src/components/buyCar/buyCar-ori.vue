<template>
  <div class="buycar" ref="buycart">
    <!-- <alert :alert-show.sync="alertShow" :store-id="storeId"></alert> -->
    <buy-header></buy-header>
    <div class="center" v-if="cartShow">
      <div id="cart-goods-list" ref="listHeight" >
        <div class="all">
          <p class="l active">商品列表</p>
          <p class="l">
            <router-link to="buyCarPackage">套餐列表</router-link>
          </p>
          <div class="r right">
            <a :class="{ active: btnStyle }" class="r jie" @click="buy">结算</a>
            <div class="r">
              已选商品（不含运费）
              <span>￥{{ selectedPrice | keep2Num }}</span>
            </div>
          </div>
        </div>
        <div class="xinxi">
          <div class="l left">
            <div id="check">
              <input
                type="checkbox"
                class="input_check"
                id="input"
                :checked="CheckBoxCartGoodsList"
                @click="checkedAll"
              />
              <label for="input"></label>
            </div>
            <span @click="checkedAll" class="total-selection">全选</span>
            <span>商品信息</span>
          </div>
          <div class="right r">
            <span>单价</span>
            <span>数量</span>
            <span>金额</span>
            <span>操作</span>
          </div>
        </div>
        <div class="dianpu" v-for="(store, index) in cartGoodsList" :key="index">
          <div class="top">
            <div id="check">
              <input
                type="checkbox"
                class="input_check"
                :id="store.store_id"
                :checked="store.CheckBoxShop"
                @click="allShop(index)"
              />
              <label :for="store.store_id"></label>
            </div>
            <span class="name">
              店铺：
              <span class="store-name" @click="toStore(store.store_id)">{{ store.shop_name }}</span>
            </span>
            <div class="service-wrapper" @click="openkefu(store)">
              <div id="dom">
                <img src="@/assets/img/people_ser.png" />
                <span>客服</span>
              </div>
            </div>  

        <el-dropdown placement="bottom-start" class="alert-display">
            <div class="lvoucher" @click="voucherr(store.store_id, index)">
                优惠券
                <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown" class="jj">
                <el-dropdown-item class="kk">
                    <div class="voucherBoxx">
                        <img class="crush" src="../../assets/img/down.png">
                        <ul>
                            <li v-for="(voucher, index) in vouchers.data" :key="index">
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
                                    <el-button class="btn" type="mini" @click="CheckIsUseCoupon(voucher.id)">领取</el-button>
                                </div>
                            </li>
                        </ul>  
                    </div>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
            <!-- <div class="l voucher" @click="voucher(store.store_id, index)">优惠券</div> -->
          </div>
          <div class="bottom">
            <!-- <p class="up">
              <span>满送活动</span>
              <span>满200，送xxxxxxxxxxxx（送完即止）</span>
            </p> -->
            <div
              class="down"
              v-for="(item, i) in store.goods"
              :key="i"
              :class="item.CheckBoxGoods ? 'isSelect' : ''"
            >
              <div id="check">
                <input
                  type="checkbox"
                  class="input_check"
                  :id="item.id"
                  :checked="item.CheckBoxGoods"
                  @click="checkedGoods(index, i, item)"
                />
                <label :for="item.id"></label>
              </div>
              <img
                @click="toDetails(item.goods_id)"
                class="l ctrl-img"
                :id="item.goods_id"
                @mouseover="showBigImg(item)"
                @mouseleave="hideBigImg(item)"
                :src="URL + item.puc_url"
              />

             
                <div class="activity-list">
                    <!-- <div class="list_ttitle" v-if="item.promotion.gift.length != 0 || reduction">促&nbsp;&nbsp;&nbsp;销</div> -->
                      <div class="pro">
                          <div class="activity" v-if="item.promotion.gift.length != 0">
                              <span class="man">满赠</span>
                              <img
                                  @click="entryGoods(item.promotion.gift.id)"
                                  :src="URL + item.promotion.gift.pic_url"
                                  alt=""
                              />
                              <span class="num"> &nbsp; x{{ item.promotion.gift.give_num }}</span>
                              <span class="both">&nbsp;&nbsp;(满{{ item.promotion.gift.full }}元，数量{{item.promotion.gift.give_count}}赠完即止)</span>
                          </div>
                          <div class="activityy" v-if="item.promotion.reduction">
                              <span class="jian">满减</span>
                                <span class="both">满{{ item.promotion.reduction.full }}减{{ item.promotion.reduction.expression }}</span>
                          </div>
                      </div>
                  </div>
           
              
              <p @click="toDetails(item.goods_id)" class="l">{{ item.title }}</p>
            
              <p class="l">分类</p>

              <p class="l">
                <span>￥{{ item.price_new }}</span>
                <br />
                ￥{{ item.price_new }}
              </p>
              <div class="l jishu">
                <el-input-number
                  size="mini"
                  v-model="item.goods_num"
                  @change="cartNumModify(item)"
                  :min="1"
                  :max="200"
                  ref="number"
                ></el-input-number>
              </div>
              <p class="l" ref="money">￥{{ (item.price_new * item.goods_num) | keep2Num }}</p>
              <div class="r yiru">
                <span @click="move(i, index, item)">移入收藏夹</span>
                <br />
                <span @click="remove(i, index, item)">删除</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="jiesuan" :class="{ 'fixed-bottom': fixedBtn }" v-show="cartGoodsList.length != 0">
        <div id="check">
          <input
            type="checkbox"
            class="input_check"
            id="input"
            :checked="CheckBoxCartGoodsList"
            @click="checkedAll"
          />
          <label for="input"></label>
        </div>
        <p class="l" @click="checkedAll">全选</p>
        <p class="l" @click="removeAll('del')">删除选中的商品</p>
        <p class="l" @click="removeAll('col')">移入收藏夹</p>
        <p
          class="r"
          style="color: white; font-size: 16px;"
          :class="{ active: btnStyle }"
          @click="buy"
        >结算</p>
        <p class="r">
          合计（不含运费）：
          <span>{{ this.selectedPrice | keep2Num }}</span>
        </p>
        <p class="r">
          已选商品
          <span>{{ this.selectedNumber }}</span>件
        </p>
      </div>
      <div class="del" v-show="Object.keys(delGoodsInfo).length != 0">已删除商品，您可以重新购买或加关注</div>
      <div class="cargo" v-show="Object.keys(delGoodsInfo).length != 0">
        <p class="l">{{ delGoodsInfo.title }}</p>
        <p class="l">
          <span>￥{{ delGoodsInfo.price_new }}</span>
          {{ delGoodsInfo.goods_num }}
        </p>
        <p class="r">
          <router-link
            :to="{
              path: '/shopsn_product',
              query: { id: delGoodsInfo.goods_id }
            }"
            style="color:#666;"
          >重新购买</router-link>
          <router-link to="/collect" style="color:#666;">移动到我的收藏夹</router-link>
        </p>
      </div>
      <like-and-history></like-and-history>
    </div>
    <div class="cart-empty" v-if="cartMeg">
      <div class="photo">
       <img class="img-card" src="../../assets/img/no-login-icon.png">
      </div>
      <div class="cart-message">
        <ul>
          <li class="txt">购物车内暂时没有商品，登录后将显示您之前加入的商品</li>
          <li style="padding-right:17rem;">
            <a @click="login" class="btn-1 login-btn mr10" >登录</a>
            <a @click="home" class="ftx-05" style="padding-left:1rem;">去购物&gt;</a>
          </li>
        </ul>
      </div>
    </div>

    <foot-com></foot-com>
    <div id="ctrlBidImg">
      <i></i>
      <img id="show-img" />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import baijian from "@/assets/img/baijian.jpg";
import yuzhuo from "@/assets/img/yuzhuo.jpg";
import img from "@/assets/img/yupei.jpg";
import { Message } from "element-ui";
import alert from "./alert.vue";
export default {
  components: {
    alert
  },
  data() {
    return {
       vouchers: [],
        loading: true,
      cartGoodsList: [], //所有的商品列表
      CheckBoxCartGoodsList: false, //商品列表是否全选
      delGoodsInfo: {}, //最新删除的商品
      selectedPrice: 0.0, //选择时显示的商品价格
      selectedNumber: 0, //已选商品件数
      selectedGoodsArr: [], //已选择商品
      goods: [],
      flag: false,
      btnStyle: false,
      fixedBtn: false,
      vouchers: [],
      voucherShow: [],
      alertShow: false,
      storeId: undefined,
      cartShow: false,
      cartMeg : false,
     promotion: null,
     reduction:null,
     gift:null,
      
    };
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  created() {
    this.getCartList();
    let title = "购物车列表" + this.$constant.webComContent;
    this.showScroll.scrollTitle(title);
  },
  watch: {
    goods() {
      this.btnStyle = this.goods.length > 0 ? true : false;
    },
    cartGoodsList() {
      this.$nextTick(() => {
        let listHeight =
          this.$refs.listHeight.clientHeight + this.$refs.listHeight.offsetTop;
        let windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        this.fixedBtn = listHeight > windowHeight ? true : false;
      });
    },
    storeId() {
        (() => {
          for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
              if (i === 5 && this.loading) {
                this.loading = false
                Message.info('请求超时')
                this.$emit('update:alertShow', false)
              }
            }, i * 1000)
          }
        })()
        this.getCouponList(1)
      }
  },
  
  
  mounted() {
    var that = this;
    $("html,body").animate(
      {
        scrollTop: "0px"
      },
      300
    );
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
   
      CheckIsUseCoupon(id) {
        this.HTTP(this.$httpConfig.coupon.couponReceiveBehavior, {
          id: id
        }, 'post').then(res => {
          Message.info('领取成功')
        }).catch((res) => {
          Message.info(res.data.message)
        })
      },
      getCouponList(page) {
        this.loading = true
        this.HTTP(this.$httpConfig.coupon.couponSendList, {
          store_id: this.storeId,
          p: page
        }, 'post').then(res => {
          this.loading = false
          console.log(res)
          if (res.data.status) this.vouchers = res.data.data
        })
      },
      handleCurrentChange(page) {
        this.getCouponList(page)
      },
      entryGoods(id) {
            window.open(window.location.origin + "/shopsn_product?id=" + id);
        },
    openkefu(item) {
      console.log(item);
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
    voucherr(storeId, index) {
      // this.alertShow = true;
      this.storeId = Number(storeId);
    },

    handleScroll() {
      let scrollPosition =
        document.body.scrollTop == 0
          ? document.documentElement.scrollTop
          : document.body.scrollTop; //滚动条位置
      let windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight; // 可视高度
      let listHeight =
        this.$refs.listHeight.offsetTop + this.$refs.listHeight.clientHeight; //位置高度
      this.fixedBtn = scrollPosition + windowHeight > listHeight ? false : true;
    },
    toStore(id) {
      window.open(window.location.origin + "/storehome?id=" + id);
    },
    toDetails(id) {
      window.open(window.location.origin + "/shopsn_product?id=" + id);
    },
    buy() {
      let list = [];
      if (this.btnStyle) {
        var newArr = [];
        this.goods.forEach((item, index) => {
          if (newArr.indexOf(item.store_id) == -1) {
            newArr.push(item.store_id);
          }
        });
        // if (newArr.length > 1) {
        //   this.$alert("一次只能结算一个商家的商品", "提示", {
        //     confirmButtonText: "确定",
        //     center: true,
        //     lockScroll: false,
        //     type: "warning"
        //   });
        //   return;
        // }

        for (let index = 0; index < this.goods.length; index++) {
          list.push(this.goods[index].id);
        }
        sessionStorage.setItem("cart_id", list.join());
        this.$router.push("account");
      }
    },
    // 购物车商品列表
    getCartList() {
      this.HTTP(this.$httpConfig.cartGoodsList, {}, "post").then(res => {
        if (res.data.status === 1) {
          this.gitGoods = res.data.data;
          this.cartShow = true;
          this.cartMeg = false;
          this.cartGoodsList = [];
          var list = res.data.data;
          for (var i in list) {
            list[i].CheckBoxShop = false;
            for (var j in list[i].goods) {
              list[i].goods[j].CheckBoxGoods = false;
             
            }
            
            this.cartGoodsList.push(list[i]);
            
          }
        } else {
          this.cartShow = false;
          this.cartMeg = true;
        }
      });
    },

    // 购物车商品数量修改
    cartNumModify(item) {
      if (this.flag === true) {
        return;
      } //避免点击过快
      this.flag = true;
      this.HTTP(
        this.$httpConfig.cartNumModify,
        {
          id: item.id,
          num: item.goods_num
        },
        "post"
      )
        .then(res => {
          this.flag = false;
          if (item.CheckBoxGoods === true) {
            this.allPriceNum();
          }
        })
        .catch(err => {
          return false;
        });
    },

    // 从购物车中删除商品
    remove(index, key, item) {
      this.delGoodsInfo = item;
      console.log(this.delGoodsInfo);
      this.$confirm("确认要删除该宝贝吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        closeOnClickModal: false,
        lockScroll: false,
        center: true
      })
        .then(() => {
          this.HTTP(
            this.$httpConfig.delGoodsCart,
            {
              id: ~~item.id
            },
            "post"
          )
            .then(res => {
              if (res.data.data.status == 1) {
                this.delGoodsInfo = item;
                this.delGoodsFun(index, key, item);
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {});
    },

    //将购物车商品移入收藏夹
    move(index, key, item) {
      this.$confirm("确认要移入收藏夹吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        closeOnClickModal: false,
        lockScroll: false,
        center: true
      })
        .then(() => {
          this.HTTP(
            this.$httpConfig.cartGoodsCollection,
            {
              goods_id: item.goods_id
            },
            "post"
          )
            .then(res => {
              if (res.data.status == 1) {
                console.log(12345);
                this.delGoodsInfo = item;
                this.delGoodsFun(index, key, item);
                this.$alert("添加成功", "提示", {
                  confirmButtonText: "确定",
                  center: true,
                  lockScroll: false,
                  type: "warning"
                });
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {});
    },

    //删除商品和移动商品共用的删除方法

    delGoodsFun(index, key, item) {
      this.cartGoodsList[key].goods.splice(index, 1);
      if (this.cartGoodsList[key].goods.length == 0) {
        this.cartGoodsList.splice(key, 1);
      }
      if (this.cartGoodsList.length == 0) {
        this.cartGoodsList = [];
      }
    },
    //选中的数据
    addgoods(goods) {
      if (this.goods.length > 0) {
        for (var j = 0; j < this.goods.length; j++) {
          if (this.goods[j].id === goods.id) {
            return;
          } else {
            this.goods.push(goods);
            return;
          }
        }
      } else {
        this.goods.push(goods);
      }
    },
    //取消选中
    deletegoods(goods) {
      if (this.goods.length === 0) {
        return;
      } else {
        for (var j = 0; j < this.goods.length; j++) {
          if (this.goods[j].id === goods.id) {
            this.goods.splice(j, 1);
          }
        }
      }
    },
    // 全选
    checkedAll() {
      this.goods = [];
      this.CheckBoxCartGoodsList = !this.CheckBoxCartGoodsList;
      for (var index in this.cartGoodsList) {
        this.cartGoodsList[index].CheckBoxShop = this.CheckBoxCartGoodsList;
        for (var i in this.cartGoodsList[index].goods) {
          this.cartGoodsList[index].goods[
            i
          ].CheckBoxGoods = this.CheckBoxCartGoodsList;
          if (this.CheckBoxCartGoodsList) {
            this.addgoods(this.cartGoodsList[index].goods[i]);
          } else {
            this.deletegoods(this.cartGoodsList[index].goods[i]);
          }
        }
      }
      this.allPriceNum();
    },
    home(){
      this.$router.push('/home');
    },
    login(){
      this.$router.push('/passwordLogin');
    },
    //选中的总价和数量
    allPriceNum() {
      this.selectedNumber = 0;
      this.selectedPrice = 0;
      for (var j = 0; j < this.goods.length; j++) {
        this.selectedNumber += this.goods[j].goods_num;
        this.selectedPrice +=
          parseFloat(this.goods[j].price_new) * this.goods[j].goods_num;
      }
    },
    // 店铺全选
    allShop(index) {
      this.cartGoodsList[index].CheckBoxShop = !this.cartGoodsList[index]
        .CheckBoxShop;
      let list = this.cartGoodsList[index].goods;
      for (let i = 0; i < list.length; i++) {
        if (this.cartGoodsList[index].CheckBoxShop) {
          list[i].CheckBoxGoods = true;
          this.addgoods(list[i]);
        } else {
          list[i].CheckBoxGoods = false;
          this.deletegoods(list[i]);
        }
      }
      this.allPriceNum();
      this.testingSelectedShop();
    },
    // 检测是否所有的店铺都选择了
    testingSelectedShop() {
      var selectedNum = 0;
      for (var i in this.cartGoodsList) {
        if (this.cartGoodsList[i].CheckBoxShop === true) {
          selectedNum++;
        }
      }
      this.CheckBoxCartGoodsList =
        selectedNum == this.cartGoodsList.length ? true : false;
    },
    // 商品单选
    checkedGoods(index, i, item) {
      this.cartGoodsList[index].goods[i].CheckBoxGoods = !this.cartGoodsList[
        index
      ].goods[i].CheckBoxGoods;
      let selectedState = this.cartGoodsList[index].goods[i].CheckBoxGoods;
      if (selectedState) {
        this.addgoods(this.cartGoodsList[index].goods[i]);
      } else {
        this.deletegoods(this.cartGoodsList[index].goods[i]);
      }
      this.allPriceNum();
      var goodsLength = 0; //// 判断是否选择当前店铺的全选
      for (let k = 0; k < this.cartGoodsList[index].goods.length; k++) {
        if (this.cartGoodsList[index].goods[k].CheckBoxGoods === true) {
          goodsLength++;
        }
      }
      this.cartGoodsList[index].CheckBoxShop =
        goodsLength == this.cartGoodsList[index].goods.length ? true : false;
      this.testingSelectedShop();
    },
    /*
     * 删除所选数据商品
     */
    delSelectedData() {
      for (var index in this.cartGoodsList) {
        for (var k in this.selectedGoodsArr) {
          if (
            this.cartGoodsList[index].store_id ==
            this.selectedGoodsArr[k].store_id
          ) {
            for (var i in this.cartGoodsList[index].goods) {
              if (
                this.cartGoodsList[index].goods[i].goods_id ==
                this.selectedGoodsArr[k].goods_id
              ) {
                this.cartGoodsList[index].goods.splice(i, 1);
                if (this.cartGoodsList[index].goods.length == 0) {
                  this.cartGoodsList.splice(index, 1);
                }
                if (this.cartGoodsList.length == 0) {
                  this.cartGoodsList = [];
                }
              }
            }
          }
        }
      }
    },
    /*
     * 移动所有商品到收藏夹、删除所有商品
     */
    removeAll(type) {
      var arr = [];
      for (var i in this.goods) {
        arr.push(this.goods[i].id);
      }
      if (this.goods.length === 0) {
        this.$alert("请至少选中一件商品！", "提示", {
          confirmButtonText: "知道了",
          center: true,
          lockScroll: false,
          type: "warning"
        });
        return;
      } else {
        //先判断是删除还是移入
        if (type == "del") {
          this.$confirm("确认要删除该宝贝吗?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            closeOnClickModal: false,
            lockScroll: false,
            center: true
          })
            .then(() => {
              this.HTTP(
                this.$httpConfig.delGoodsCart,
                {
                  id: arr.join(",")
                },
                "post"
              )
                .then(res => {
                  this.getCartList();
                })
                .catch(err => {
                  console.log(err);
                });
            })
            .catch(() => {});
        } else {
          //如果是移入则走这里
          this.$confirm("确认要移入收藏夹吗?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            closeOnClickModal: false,
            lockScroll: false,
            center: true
          })
            .then(() => {
              this.HTTP(
                this.$httpConfig.cartGoodsCollection,
                {
                  goods_id: arr.join(",")
                },
                "post"
              )
                .then(res => {
                  if (res.data.status == 1) {
                    this.delGoodsInfo = this.selectedGoodsArr;
                    // this.delSelectedData();
                    this.$alert("添加成功", "提示", {
                      confirmButtonText: "确定",
                      center: true,
                      lockScroll: false,
                      type: "warning"
                    });
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            })
            .catch(() => {});
        }
      }
    },
    /*
     * 显示大图
     */
    showBigImg(item) {
      console.log(item);
      var top = 0;
      var left = 0;
      var leftImg = $(".ctrl-img");
      for (var i in leftImg) {
        if (leftImg[i].id == item.goods_id) {
          top = leftImg.eq(i).offset().top;
          left = leftImg.eq(i).offset().left;
        }
      }
      $("#ctrlBidImg").css({
        display: "block",
        top: Number(top - 35) + "px",
        left: Number(left + 100) + "px"
      });

      $("#show-img").attr("src", this.URL + item.puc_url);
    },

    /*
     * 关闭大图
     */
    hideBigImg(item) {
      $("#ctrlBidImg").css({
        display: "none"
      });
    },
    /*
     * 打开qq联系人
     */
    openQQ() {
      var qq = "66600000"; //获取qq号
      window.open(
        "http://wpa.qq.com/msgrd?v=3&uin=" + qq + "&site=qq&menu=yes",
        "_brank"
      );
    }
  }
};
</script>
<style lang="less" scoped>
.service-wrapper {
  float: left;
  cursor: pointer;
  height: 68%;
  width: 75px;
  margin-top: 4px;
  border: 1px solid #eeeeee;
  background: #fbfbf1;
  margin-left: 10px;
  #dom {
    line-height: 26px;
  }
}
</style>
<style>
   .el-popper .popper__arrow, .el-popper .popper__arrow::after {
     /* color: red; */
   background-color: #f8f8f8 !important;
   margin-left: -1180px !important;
   margin-top: -3px;
    /* margin-right: 750px; */
    width: 20px !important;
 
     /* -webkit-filter: drop-shadow(0 2px 1px rgb(24, 172, 19)) !important;
    filter: drop-shadow(0 2px 1px rgb(39, 180, 39)) !important; */
  
   /* border-left-color: 3px solid green !important; */
}
 .crush{
        width: 30px;
        height: 30px;
        margin: -31px 10px 0 11px;
        z-index: 10;
      }
.el-popper .popper__arrow {
    border-width: 10px !important;
    border-top-width: 0px !important;
    background-color: #f8f8f8 !important;
    border-bottom-color: #f8f8f8 !important;
   
   
    /* margin: -15px 0 0 0 !important; */
     /* border-top-width: 5px !important; 
     border-top-color: green !important;
    border-left-width: 7px !important;
    border-left-color: green !important;
    border-right-color: green !important;
    border-right-width: 7px !important;
    background-color: #f8f8f8 !important;
    border-bottom-color: rgb(248, 80, 80) !important;
     border-bottom-width: 10px !important; */  
}
 
 /* .el-popper .popper__arrow {
    border-width: 6px;
     -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
     filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
     color: #d02629 !important;
} */
.el-input-number__decrease:hover:not(.is-disabled)
  ~ .el-input
  .el-input__inner:not(.is-disabled),
.el-input-number__increase:hover:not(.is-disabled)
  ~ .el-input
  .el-input__inner:not(.is-disabled) {
  border-color: #c0c4cc;
}

.el-input-number__decrease:hover,
.el-input-number__increase:hover {
  color: #606266;
}

.el-input-number--mini {
  width: 130px;
  line-height: 27px !important;
}

.el-input-number__increase {
  right: 19px !important;
  border-radius: 0 4px 4px 0;
  border-left: 1px solid #dcdfe6;
}

.el-input-number__decrease {
  left: -17px !important;
  border-radius: 4px 0 0 4px;
  border-right: 1px solid #dcdfe6;
}
</style>
<style lang="scss" scoped>
  // .el-pagination {
  //   text-align: center;
  // }

  // .loading {
  //   color: white;
  //   font-size: 70px;
  //   animation: rotating 1.5s linear infinite;
  // }

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
      }
      
    }

  // .alertBox {
  //   width: 100%;
  //   height: 100%;
  //   background: rgba(0, 0, 0, 0.5);
  //   position: absolute;
  //   top: -30%;
  //   z-index: 2;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;

  .el-popper[x-placement^=bottom] {
      margin-left: 25px;
  }
  .jj:hover .row{
      color: #444 !important;
  }
  .jj{
      padding: 0 !important; //tda
      border: 2px solid #d02629;
      // margin: 0px 250px 0 600px; //tda
      // margin: 0 !important;
      // background: #d02629;
      .kk{
          padding: 0 !important; //tda
          .voucherBoxx {
              border-radius: 8px;
              background: white;
              display: flex;
              flex-direction: column;
              padding: 10px 20px 20px;
              // z-index: 1;
              // overflow: hidden;

              // position: fixed;
              //  border: 2px solid #d02629;

              // .close {
              //   display: flex;
              //   justify-content: flex-end;
              //   font-size: 30px;
              //   margin-right: 0px;
              //   margin-top: -10px;
              //   margin-bottom: 5px;
              // }

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
                      // height: 30px;
                  }
                  div:last-child {
                      // color: red;
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
                  }
              }
          }
      }
  }
  // }
</style>

<style lang="less" scoped>
.l {
  float: left;
}

.cart-empty{
  
  height : 98px;
  color : rgb(51, 51, 51);
  padding : 150px 0px 300px;
  display: flex;
}
.photo{
  padding: 30px 0 0 600px;
.img-card{
  width: 70%;
}
}
.cart-message{
  height : 98px;
  // padding-left : 10rem;
  // padding : 342px;
}
.cart-message .txt{
  font-size : 14px;
  padding-top : 23px;
}
.cart-message li{
  line-height: 26px;
    //  padding-right : 18rem;
}
.btn-1 {
    font-family: arial, "Microsoft YaHei";
    display: inline-block;
 
    height: 25px;
    line-height: 25px;
    background-color: rgb(231, 70, 73);
    background-image: linear-gradient(to top, rgb(231, 70, 73) 0px, rgb(223, 49, 52) 100%);
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 400;
    vertical-align: middle;
    cursor: pointer;
    float: none;
    border-radius: 3px;
    padding: 0px 10px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    transition: all 0.2s ease-out 0s;
}
.r {
  float: right;
}
.buycar {
  position: relative;
}
.voucherBox {
  border: 2px solid #d02629;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  left: -160px;
  top: 50px;
  background: white;
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 500px;
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
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #ccc;
      border-radius: 5px;
    }
    .col {
      flex: 1;
      flex-direction: column;
    }
    .row {
      display: flex;
      flex-direction: row;
      height: 30px;
    }
    div:last-child {
      color: red;
      display: flex;
      align-items: center;
      margin-right: 30px;
    }
  }
}


.center {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
#check {
  position: relative;
  float: left;
  .input_check {
    position: absolute;
    visibility: hidden;
  }
  .input_check + label {
    display: inline-block;
    width: 15px;
    height: 13px;
    border: 1px solid #c1c1c1;
  }
  .input_check:checked + label:after {
    content: "";
    position: absolute;
    left: 2px;
    bottom: 20px;
    width: 14px;
    height: 9px;
    border: 2px solid #e92333;
    border-top-color: transparent;
    border-right-color: transparent;
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
    transform: rotate(-45deg);
  }
}

.all {
  height: 37px;
  p {
    height: 37px;
    line-height: 37px;
    color: #555;
    width: 130px;
    text-align: center;
    border-bottom: 2px solid #e5e5e5;
    span {
      font-size: 12px;
    }
    a {
      color: #555;
    }
  }
  p.active {
    color: #d02629;
    border-bottom: 2px solid #d02629;
  }
  .right {
    width: 940px;
    border-bottom: 2px solid #e5e5e5;
    height: 37px;
    .jie {
      width: 56px;
      height: 26px;
      background: #ccc;
      border-radius: 3px;
      text-align: center;
      color: #fff;
      line-height: 26px;
      margin-top: 5px;
      cursor: default;
    }
    .jie.active {
      background: #d02629;
    }
    div.r {
      line-height: 37px;
      color: #7f7f7f;
      margin-right: 22px;
      span {
        color: #af2928;
      }
    }
  }
}

.xinxi {
  height: 45px;
  margin-top: 17px;
  line-height: 45px;
  .left {
    .input_check:checked + label:after {
      bottom: 23px !important;
    }
    .total-selection {
      cursor: pointer;
    }
    span {
      float: left;
      font-size: 12px;
      color: #303030;
      margin-right: 74px;
      margin-left: 10px;
    }
  }
  .right {
    span {
      font-size: 12px;
      color: #303030;
      margin-right: 110px;
    }
  }
}

.dianpu {
  margin-bottom: 6px;
  .top {
    height: 40px;
    line-height: 40px;
    span {
      float: left;
      font-size: 12px;
      margin-left: 10px;
    }
    .name {
      .store-name {
        float: none;
      }
      .store-name:hover {
        color: red;
      }
    }
    img {
      margin: 6px 0 0 10px;
      float: left;
    }
  }
  .bottom {
    border: 1px solid #ccc;
    overflow: hidden;
    width: 1200px;
    .up {
      height: 50px;
      border-bottom: 1px solid #e8e8e8;
      line-height: 50px;
      font-size: 12px;
      span:nth-of-type(1) {
        display: inline-block;
        width: 64px;
        height: 20px;
        background: #d02629;
        text-align: center;
        line-height: 20px;
        color: #fff;
        margin: 0 9px 0 50px;
      }
    }
     
      
      
     .activity-list{
        margin: 105px -320px 0 -70px;
        float: left;
        display: flex;
        .list_ttitle{
          padding: 20px 5px 0 0;
        }
       .pro{
         .activity{
           .man{
             width: 38px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            background: #d02629;
            color: #fff;
            display: inline-block;
            margin-left: 10px;
             margin-right: 10px;
            font-size: 10px;
            
           }
            img{
              width: 30px;
              height: 30px;
              margin: 0;
            }
            .num{
              font-size: 11px;
              color: #999999;
            }
            .both{
              font-size: 11px;
              color: #999999;
            }
         }
         .activityy{
           .jian{
             width: 38px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            background: #d02629;
            color: #fff;
            display: inline-block;
            margin-left: 10px;
            margin-right: 10px;
            font-size: 10px;
            
           }
           .both{
              font-size: 11px;
              color: #999999;
            }
         }
       }
   
      }
      
    .down {
      // height: 120px;
      height: 190px;
      border-bottom: 1px solid #eee;
      position: relative;
     
      #check {
        margin: 20px;
      }
      .input_check:checked + label:after {
        bottom: 10px !important;
      }
      img {
        margin-top: 20px;
        width: 80px;
        height: 80px;
        cursor: pointer;
      }
     
      .goods-name {
        display: -webkit-box;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      p:nth-of-type(1) {
        width: 226px;
        font-size: 12px;
        color: #575757;
        margin-top: 29px;
        // margin-left: 11px;
        margin-left: 30px;
        cursor: pointer;
      }
      p:nth-of-type(1):hover {
        color: red;
      }
      p:nth-of-type(2) {
        font-size: 12px;
        color: #575757;
        line-height: 85px;
        width: 110px;
        margin: 0 0 0 50px;
      }

      p:nth-of-type(3) {
        font-size: 15px;
        margin: 26px 0 0 0;
        font-weight: bold;
        color: #575757;
        text-align: center;
        width: 130px;
        span {
          font-size: 10px;
          color: #acacac;
          text-decoration: line-through;
        }
      }
      .jishu {
        height: 25px;
        margin-top: 29px;
        z-index: 0;
        position: relative;
        margin-left: 70px;
        span {
          width: 19px;
          height: 23px;
          background: #f0f0f0;
          float: left;
          text-align: center;
          line-height: 25px;
          border: 1px solid #e6e6e6;
        }
        input {
          width: 39px;
          height: 23px;
          border: 1px solid #aaa;
          float: left;
          text-align: center;
        }
      }
      p:nth-of-type(4) {
        font-size: 12px;
        color: #c4555c;
        margin: 33px 0px 0 20px;
        width: 100px;
        text-align: center;
      }
      .yiru {
        font-size: 12px;
        color: #a0a0a0;
        margin-top: 29px;
        margin-right: 74px;
        cursor: pointer;
        span:hover {
          color: red;
        }
      }
    }
    .down.isSelect {
      background-color: #fff8e1;
    }
    .bgc {
      background: #fef8e0;
    }
  }
}

.jiesuan {
  height: 50px;
  background: #e5e5e5;
  margin-top: 20px;
  position: relative;
  bottom: 0;
  width: 1200px;
  #check {
    margin: 16px 10px;
  }
  .input_check:checked + label:after {
    bottom: 10px !important;
  }
  p {
    font-size: 12px;
    line-height: 50px;
    span {
      color: #f40;
      font-weight: 700;
      font-size: 18px;
      margin: 0 10px;
    }
  }
  p:nth-of-type(1) {
    margin-right: 21px;
    cursor: pointer;
  }
  p:nth-of-type(2) {
    margin-right: 28px;
    cursor: pointer;
  }
  p:nth-of-type(2):hover {
    color: red;
  }
  p:nth-of-type(3):hover {
    color: red;
  }
  p:nth-of-type(3) {
    cursor: pointer;
  }
  p:nth-of-type(4) {
    width: 120px;
    height: 100%;
    background-color: #ccc;
    text-align: center;
    line-height: 50px;
    cursor: default;
    a {
      color: #fff;
      cursor: pointer;
      font-size: 16px;
    }
  }
  p:nth-of-type(4).active {
    background-color: #f40;
  }
  p:nth-of-type(5) span:before {
    content: "￥";
    font-size: 14px;
    font-weight: 400;
  }
}
.fixed-bottom {
  position: fixed;
}
.del {
  margin: 30px 0 16px;
  font-size: 12px;
  color: #323232;
}

.cargo {
  height: 32px;
  border: 1px solid #fadfe6;
  background: #fef8f8;
  width: 100%;
  line-height: 32px;
  font-size: 12px;
  color: #696564;
  margin-bottom: 5px;
  p:nth-of-type(1) {
    margin-left: 17px;
  }
  p:nth-of-type(2) {
    margin-left: 300px;
    span {
      margin-right: 92px;
      color: #555452;
    }
  }
  p:nth-of-type(3) {
    margin-right: 47px;
    span {
      margin-left: 22px;
    }
  }
}

#ctrlBidImg {
  width: 240px;
  height: 240px;
  position: absolute;
  left: 380px;
  top: 0;
  padding: 10px;
  background-color: #fff;
  z-index: 100;
  border: #ddd solid 1px;
  display: none;
  // box-shadow: 0 2px 1px rgba(0, 0, 0, 0.06);
  i {
    width: 10px;
    height: 10px;
    border-width: 10px;
    border-color: transparent #ddd transparent transparent;
    border-style: solid;
    position: absolute;
    left: -20px;
    top: 65px;
  }
  #show-img {
    width: 100%;
    height: 100%;
  }
}

#ctrlBidImg::after {
  content: "";
  width: 10px;
  height: 10px;
  border-width: 10px;
  border-color: transparent #fff transparent transparent;
  border-style: solid;
  position: absolute;
  left: -19px;
  top: 65px;
}
</style>