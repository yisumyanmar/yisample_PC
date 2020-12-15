<template>
  <div class="account">
    <!-- <common-header v-on:childToParent="onChildClick"></common-header> -->
    <common-header></common-header>
    <div class="logo">
      <router-link to="/home">
        <img src="../../assets/img/logo-yi.png"/>
      </router-link>
      <p>结算页</p>
    </div>
    <div class="center">
      <ul class="buzhou">
        <li class="l active">1</li>
        <li class="l active">2</li>
        <li class="l">3</li>
      </ul>
      <ul class="zhushi">
        <li class="l actives">立即购买</li>
        <li class="l actives">确认订单信息</li>
        <li class="l">成功提交订单</li>
      </ul>
      <address-operation @transferAddress="transferAddress"></address-operation>
      <div class="xinxi">
        <p class="biaoti">确认订单信息</p>
        <div class="bottom">
          <div class="thead">
            <p class="l">店铺宝贝</p>
            <p class="l">商品分类</p>
            <p class="l">单价</p>
            <p class="l">数量</p>
            <p class="l">优惠方式</p>
            <p class="l">小计</p>
          </div>
          <!-- <div class="dianpu">
            <p class="name">店铺：<span @click="toStore">{{storeData.shop_name}}</span>
            <div class="service-wrapper" @click="openkefu(goodsData)">
              <div id="dom">
                <img
                        src="@/assets/img/people_ser.png"
                />
                <span>客服</span>
              </div>
            </div>
            </p>
            <ul class="order-list">

              <li class="order-info">
                <img @click="toDetails" class="l" :src="URL + goodsImg.pic_url" alt=""/>
                <p @click="toDetails" class="l">{{goodsData.title}}</p>
                <p class="l">无</p>
                <p class="l">{{goodsData.price_member}}</p>
                <p class="l">{{goodsData.goods_num}}</p>
                <p class="l" v-if="goodsreduce.length!=0">
                  满{{goodsreduce.full}}减{{goodsreduce.expression}}
                </p>
                <p class="l" v-else-if='options.length!=0'>
                  <el-select v-model="value"
                             placeholder="请选择"
                             @change='selectChange'
                  >
                    <el-option
                            v-for="(item,index) in options"
                            :key="index"
                            :label="item.displayName"
                            :value="index"
                    >
                    </el-option>
                  </el-select>
                </p>
                <p v-else>
                  无
                </p>
                <p v-if="deliveryMoney == -1" class="r">免配送费</p>
                <p v-else-if="deliveryMoney" class="r">{{deliveryMoney|keep2Num}}</p>
								<p v-else-if="freight_price == 0" class="r">卖家包邮</p>
                <p v-else class="r">{{freight_price|keep2Num}}</p>
              </li>
          
              <li class="order-info gift-info" v-for="(id, index) in giftData" :key="index">
                
                <img @click="toDetails" class="l" :src="URL + id.pic_url" alt=""/>
                <p @click="toDetails" class="l">{{id.title}}</p>
                <p class="l">无</p>
                <p class="l">{{id.price_member}}</p>
                <p class="l">{{id.give_num}}</p>
                <p class="l gift" style="color: #dd2727;">赠品</p>
                <p class="r">无</p>
              </li>


              <li class="fapiao">发票信息：<span class="invoice-info" v-if="invoiceTit[storeData.id]">{{invoiceTit[storeData.id][0]}}</span><span
                      class="invoice-info" v-if="invoiceTit[storeData.id]">{{invoiceTit[storeData.id][1]}}</span><span
                      class="invoice-info" v-if="invoiceTit[storeData.id]">{{invoiceTit[storeData.id][2]}}</span>
                <span class="invoice-toggle" @click="toggle(storeData.id)"
                      v-if="invoiceState[storeData.id] == 1">修改</span>
                <span class="invoice-toggle" @click="toggle(storeData.id)" v-else>无需发票</span>
                <p class="error_message">{{error_message}}</p>
              </li>
              <li class="order-item clearfix">
                <div class="order-memo l">
                  <div class="memo l">
                    <span class="memo-title">给卖家留言：</span>
                    <textarea v-model="remarks" class="text-area-input" placeholder=""></textarea>
                  </div>
                </div>
                <div class="order-extInfo r">
                  <div v-if="deliveryMoney == -1" class="order-deliveryMethod">
                    <span>配送费：</span>
                    <span class="freight">免配送费</span>
                  </div>
                  <div v-else-if="deliveryMoney" class="order-deliveryMethod">
                    <span>配送费：</span>
                    <span class="freight">{{deliveryMoney|keep2Num}} 元</span>
                  </div>
                  <div v-else class="order-deliveryMethod">
										<span>运费：</span>
                    <span v-if="freight_price == 0" class="freight">卖家包邮</span>
										<span v-else class="freight">{{freight_price|keep2Num}} 元</span>
									</div>
                </div>
              </li>
            </ul>
          </div> -->
          <div class="dianpu">
            <p class="name">店铺：<span>小米官方旗舰店</span>
            <div class="service-wrapper">
              <div id="dom">
                <img
                        src="@/assets/img/qq.jpg"
                />
              </div>
            </div>
            </p>
            <ul class="order-list">

              <li class="order-info">
                <img class="l" src="../../assets/img/yi-14.png" alt=""/>
                <p class="l">
                  数码类7
                  <span>
                  材质: N435R-EB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱型: 四半摇盖<br>
                  打包方式: 绳捆打包&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;成型方式: 一页成型<br>
                  印刷方式: 数码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;面纸类型: 牛皮纸<br>
                  版面设定: AA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;成箱方式: 钉箱<br>
                  存储环境: 正常&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;印刷面积: 30%以内<br>
                  内装重量: 10kg&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收取刀模费: 否<br>
                  设计稿: 已有设计稿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;折算系数: 1<br>
                  数码表处: 水性光油&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;产品承压: 非承压<br>
                  拼版方式: 单拼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尺寸类型: 制造尺寸<br>
                  终端客户: 否&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材质层数: 5<br>
                  开槽模切: 开槽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;仓储叠放: 15<br>
                  层箱型规格: 50cm*60cm*70cm
                  </span>
                </p>
                <p class="l">身份：原材商</p>
                <p class="l">60</p>
                <p class="l">1000</p>
                <p class="l" v-if="goodsreduce.length!=0">
                  满{{goodsreduce.full}}减{{goodsreduce.expression}}
                </p>
                <p class="l">省20</p>
                <p class="r"> 55.00</p>
              </li>
          
              <li class="order-info gift-info" v-for="(id, index) in giftData" :key="index">
                
                <img @click="toDetails" class="l" :src="URL + id.pic_url" alt=""/>
                <p @click="toDetails" class="l">{{id.title}}</p>
                <p class="l">无</p>
                <p class="l">{{id.price_member}}</p>
                <p class="l">{{id.give_num}}</p>
                <p class="l gift" style="color: #dd2727;">赠品</p>
                <p class="r">无</p>
              </li>

              <li class="delivery_method">运送方式：
                <span class="method_info">普通配送</span>
                <span class="method_toggle">快递</span>
                <span class="method_no"> 免邮</span>
                <span class="method_price">0.00</span>
              </li>

              <li class="store_total">店铺合计(含运费)
                <span class="total_info">￥120.00</span>
              </li>

              <li class="fapiao">发票抬头：
                <span class="invoice-info">湖南实力有限公司</span>
                <span class="invoice-toggle">修改</span>
                <span class="invoice-no">不开发票</span>
              </li>
            </ul>
          </div>

          
        </div>
      </div>
      <!-- <div class="jiesuan">
        <p><span>{{goodsData.goods_num}} </span>件商品，商品总金额：{{total|keep2Num}} 元</p>
        <p>{{discountData.memberLevel}}:{{Number(discountData.discount)/10}}折优惠</p>
        <p v-if="coupunData">优惠券：-{{couponPrice|keep2Num}} 元</p>
        <p v-else>优惠券：-0.00 元</p>
        <p v-if="deliveryMoney == -1">配送共计 ：免配送费</p>
        <p v-else-if="deliveryMoney">配送共计 ：{{deliveryMoney|keep2Num}} 元</p>
        <p v-else>
          <span class="delivery_price" v-if="freight_price == 0">运费共计 ：卖家包邮</span>
          <span class="delivery_price" v-else>运费共计 ：{{freight_price|keep2Num}} 元</span>
        </p>
      </div> -->
      <div class="jiesuan">
        <p><span>1</span>件商品，总商品金额：￥19.80</p>
        <p>积分： -￥20.00</p>
        <p>优惠券： -￥10.00</p>
        <p>运费： ￥3.00</p>
      </div>


      <!-- <div class="pay">
        <p class="yingfu r">应付金额：
          <span v-if="deliveryMoney == -1">{{(total-Number(couponPrice)-Number((total)*(1-(Number(discountData.discount)/100)).toFixed(2)))|keep2Num}} 元</span>
            <span v-else-if="deliveryMoney">{{(total+Number(deliveryMoney)-Number(couponPrice)-Number((total)*(1-(Number(discountData.discount)/100)).toFixed(2)))|keep2Num}} 元</span>
            <span v-else>{{(total+freight_price-Number(couponPrice)-Number((total)*(1-(Number(discountData.discount)/100)).toFixed(2)))|keep2Num}} 元</span>
        </p>
        <div class="r">
          <p class="l">寄送至：<span>{{addressInfo.prov_name}}{{addressInfo.city_name}}{{addressInfo.dist_name}} {{addressInfo.address}}</span>
          </p>
          <p class="l">收货人：<span>{{addressInfo.realname}} {{addressInfo.mobile}}</span></p>
        </div>
      </div> -->
      <div class="pay">
        <p class="yingfu r">应付总额：
          <span>￥13.80</span>
        </p>
        <!-- <div class="r">
          <p class="l">寄送至：<span>{{addressInfo.prov_name}}{{addressInfo.city_name}}{{addressInfo.dist_name}} {{addressInfo.address}}</span>
          </p>
          <p class="l">收货人：<span>{{addressInfo.realname}} {{addressInfo.mobile}}</span></p>
        </div> -->
        <div class="r">
          <p class="l">寄送至：<span>上海市 普陀区百春园小区22栋四单元401</span>
          </p>
          <p class="l">收货人：<span>张小五 185****3665</span></p>
        </div>
      </div>


      <div class="submit">
        <p class="r"><a @click="placeOrder">提交订单</a></p>
      </div>
    </div>
    <!--弹出内容    修改-->
    <!-- <modal :backdrop-closable="false" title="发票信息" :width="625" :is-show="isShow" transition="fadeDown"
           @close="isShow=false" :show-footer="false">
      <div class="alert">
        <div class="fapiao"><span v-for="(item,index) in invoiceData.invoice_type" :key="index"
                                  @click="Fun(index,item.name)" :class="{bg:isbg0==index}">{{item.name}}</span></div>
        <div class="taitou">
          <p class="l">发票抬头：</p>
          <div class="l inp" ref="inp">
            <div class="value" v-for="(item,index) in invoiceData.raised_data" :key="item.id"
                 @click="fun1(index,item.name)" :class="{bg:isbg1==index}">
              <input type="text" :readonly="item.no_editable" v-model="item.name" placeholder="请填写公司发票抬头"/>
              <span v-if="item.no_editable" @click="insert(index)">编辑</span>
              <span v-if="item.no_editable" @click="del(index,item.id)">删除</span>
              <span v-if="!item.no_editable" @click="keep(index)">保存</span>
            </div>
          </div>
          <p class="l" @click="add" v-show="news">新增单位发票</p>
        </div>
        <div class="content">
          <p class="l">发票内容：</p>
          <span class="l" v-for="(item,index) in invoiceData.invoice_content" :key="item.id"
                @click="fun2(index,item.name)" :class="{bg:isbg2==index}">{{item.name}}</span>
        </div>
        <div class="btn">
          <button @click="save">开发票</button>
          <button @click="cancel">无需发票</button>
        </div>
      </div>
    </modal> -->
    <foot-com></foot-com>
    <back-top></back-top>
  </div>
</template>

<script>
  import chahu from '@/assets/img/buychahu.jpg'
  import QS from 'qs';

  export default {
    data() {
      return {
        options: [],
        value: '',
        coupunData: false,
        discountData:{},//折扣信息
        isShow: false,
        tanIndes: '',
        goods_ids: '',
        coupon_ids: '',
        isbg0: null,
        isbg1: null,
        isbg2: null,
        news: true,
        storeData: {},
        goodsData: {},
        goodsImg: {},
        delivery: "",
        deliveryMoney: 0.00, //配送费
        deliveryFlag: false,
        total: 0,
        totalmoney: 0,
        addressInfo: {},
        remarks: '',
        invoiceData: {},
        invoice_content: '',
        invoice_type: '',
        raised_data: '',
        content_id: '',
        type_id: '',
        raised_id: '',
        content_name: '',
        type_name: '',
        raised_name: '',
        freight_price: 0,
        not_distribution: true,
        store_id: '',
        invoiceInit: {},
        invoiceGroup: {},
        invoiceState: [],
        couponPrice: 0,
        couponId: '',
        invoiceTit: {},
        giftData: [], //赠送商品
        goodsreduce: '',//满减商品
        keep2Num: 0.00,
        fromChild: '',
        error_message: '',
        shipping_data: '',
        ship_key: '',
        ship_status: '',
        giftId: [],
      }
    },
    filters:{

    },
    created() {
      this.getOrderData();
      this.getCouponInfo();
       let title =  "确认订单" + '-' + this.$constant.webComContent;
      this.showScroll.scrollTitle(title);
    },
    methods: {
      onChildClick (value) {
        this.fromChild = value
        if(this.fromChild == 'false') {
            location.reload();
        }
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
      selectChange(index) {
        if (index == 0) {
          var data = {
            id:'',
            coupon_list_id:''
          }
        }else {
          var data = {
            id:this.options[index].c_id,
            coupon_list_id:this.options[index].id
          }
        }
        this.coupunData = true;
        this.HTTP(this.$httpConfig.coupon.CheckIsUseCoupon, data, 'post').then(res => {
          if (res.data.status == 1) {
            if(index == 0){
              this.couponPrice = 0;
              this.couponId = "";
            }else {
              this.$message.success('可使用该优惠券');
              this.couponPrice = this.options[index].money;
              this.couponId = this.options[index].id;
            }
          }
        }).catch(err => {
          this.$message(err.data.message);
        })

      },
      getCouponInfo() {
        this.HTTP(this.$httpConfig.coupon.couponList, {}, 'post').then(res => {
          this.options = res.data.data.do_use;
          this.options.forEach((item, index) => {
            this.options[index].displayName = '满' + Number(item.condition) + '减' + Number(item.money)
          });
          this.options.unshift({id: "", displayName: '不使用优惠券'})

        }).catch(err => {
          console.error(err);
        })
      },
      cancel() {
        this.isShow = false;
        this.invoiceGroup[this.store_id] = {
          translate: 0
        };
        delete this.invoiceInit[this.store_id];
        this.invoiceOff();
        delete this.invoiceTit[this.store_id];
        this.type_name = '';
        this.raised_name = '';
        this.content_name = '';
      },
      save() {
        if (this.type_name == '' || this.raised_name == '' || this.content_name == '') {
          alert('请完善发票信息');
          return false;
        }
        this.getInvoiceId(this.content_id, this.type_id, this.raised_id);
      },
      placeOrder() {

        if (!this.addressInfo.id) {
          this.$alert('当前收货人信息不对，请修改后再提交', '提示', {
            confirmButtonText: '确定',
            center: true,
            lockScroll: false,
            type: 'warning'
          })
          return false;
        }
        if (!this.not_distribution) {
          this.$alert('当前地址卖家暂无配送', '提示', {
            confirmButtonText: '确定',
            center: true,
            lockScroll: false,
            type: 'warning'
          })
          return false;
        }
        if (Object.keys(this.invoiceGroup).length === 0) {
          this.invoiceGroup[this.storeData.id] = {
            translate: 0
          };
        }
        if (this.deliveryMoney == -1) {
          this.totalmoney = this.total -Number((this.total|this.keep2Num)*(1-(Number(this.discountData.discount)/100)).toFixed(2));
        }
        else if (this.deliveryMoney) {
          this.totalmoney = this.total + Number(this.deliveryMoney)-Number((this.total|this.keep2Num)*(1-(Number(this.discountData.discount)/100)).toFixed(2));
        }
        else {
          this.totalmoney = this.total + this.freight_price-Number((this.total|this.keep2Num)*(1-(Number(this.discountData.discount)/100)).toFixed(2));
        }
        var data = {
          give_id: this.giftId,
          invoice_id: this.invoiceGroup,
          address_id: this.addressInfo.id,
          remarks: this.remarks
        }
      
        if (this.deliveryFlag) {
          data.delivery = this.delivery;
          data.distribution_fee = this.deliveryMoney;
        }

        if (this.giftData.length == 0) {
          data.give_id = [];
        }

        this.HTTP(this.$httpConfig.orderBeginFromGood, data, 'post').then((res) => {
          this.$router.push({
            path: '/pay',
            query: {
              total_price: this.totalmoney
            }
          })
        }).catch((res) => {
          this.$alert(res.data.message, '提示', {
            confirmButtonText: '确定',
            center: true,
            lockScroll: false,
            type: 'warning'
          })
        })

      },
      getInvoiceType() {
        this.HTTP(this.$httpConfig.getInvoiceTypeData, {}, 'post').then((res) => {
          this.invoiceData = res.data.data;
          if (this.invoiceData.raised_data.length) {
            for (let index = 0; index < this.invoiceData.raised_data.length; index++) {
              this.$set(this.invoiceData.raised_data[index], 'no_editable', true)
            }
          }
        })
      },
      //获取发票id
      getInvoiceId(content_id, type_id, raised_id) {
        this.HTTP(this.$httpConfig.addOrderInvoice, {
          raised_id: parseInt(raised_id),
          content_id: parseInt(content_id),
          type_id: parseInt(type_id)
        }, 'post').then((res) => {
          this.invoiceGroup[this.store_id] = {
            id: res.data.data,
            translate: 1
          };
          this.invoiceInit[this.store_id] = [this.isbg0, this.isbg1, this.isbg2];
          this.invoiceOff();
          this.invoiceTit[this.store_id] = [this.type_name, this.raised_name, this.content_name];
          this.isShow = false;
        }).catch(() => {

        })
      },
      // 无需发票和修改显示
      invoiceOff() {
        let listKey = Object.keys(this.invoiceGroup);
        for (const i in listKey) {
          if (this.invoiceGroup[listKey[i]]) {
            this.invoiceState[listKey[i]] = this.invoiceGroup[listKey[i]].translate;
          }
        }
      },
      toDetails() {
        window.open(window.location.origin + '/shopsn_product?id=' + this.goodsData.p_id);
      },
      toStore() {
        window.open(window.location.origin + '/storehome/' + this.storeData.id);
      },
      //地址
      transferAddress(address) {
        this.addressInfo = address;
        this.getFreight();
        setTimeout(() => {
          this.getDistributionFee();
        }, 1000)
      },
      getDistributionFee() { //获取配送端
        this.HTTP(this.$httpConfig.deliveryMoney, {
          store_id: this.storeData.id,
          address_id: this.addressInfo.id,
          goods_id: this.$route.params.goods_id
        }, 'post').then((res) => {
          if (res.data.status == 1) {
            this.delivery = res.data.data.delivery;
            this.deliveryMoney = parseFloat(res.data.data.money);
            this.deliveryFlag = true;
          }
        })
      },
      //获取运费
      getFreight() {
       
        this.HTTP(this.$httpConfig.getFreight, {
          prov_id: this.addressInfo.prov,
          city_id: this.addressInfo.city,
          dist_id: this.addressInfo.dist,
        }, 'post').then((res) => {
          this.not_distribution = true;
          this.freight_price = parseFloat(res.data.data);
          this.shipping_data = res.data.data.shipping;
          for (const a in this.shipping_data) {
            this.ship_key = this.shipping_data[a].id;
            this.ship_status = this.shipping_data[a].status;
          }
        }).catch((res) => {
          this.not_distribution = false;
          this.error_message = res.data.message;
            this.$alert(res.data.message, '提示', {
            confirmButtonText: '确定',
            center: true,
            lockScroll: false,
            type: 'warning'
          })
        })
      },
      //订单数据
      getOrderData() {
        this.HTTP(this.$httpConfig.buyNow, {
          id: this.$route.params.goods_id,
          goods_num: this.$route.params.num
        }, 'post').then((res) => {
          this.storeData = res.data.data.store;
          this.goodsData = res.data.data.goods;
          this.giftData = res.data.data.give;
          for (const a in this.giftData) {
            this.giftId.push(this.giftData[a].give_id);
          }
        
          this.goodsImg = res.data.data.image;
          this.goodsreduce = res.data.data.reduction;
          this.discountData=res.data.data.discount
          this.total = parseFloat(this.goodsData.price_member) * parseFloat(this.goodsData.goods_num);
        })
      },
      toggle(id) {
        this.store_id = id;
        this.isbg0 = null;
        this.isbg1 = null;
        this.isbg2 = null;
        let obj = Object.keys(this.invoiceInit);
        if (obj.length > 0 && this.invoiceInit[id]) {
          this.isbg0 = this.invoiceInit[id][0];
          this.isbg1 = this.invoiceInit[id][1];
          this.isbg2 = this.invoiceInit[id][2];
        }
        this.getInvoiceType();
        this.isShow = !this.isShow;
      },
      Fun(index, name) {
        this.type_id = this.invoiceData.invoice_type[index].id;
        this.type_name = name;
        this.isbg0 = index;
      },
      fun1(index, name) {
        this.raised_id = this.invoiceData.raised_data[index].id;
        this.raised_name = name;
        this.isbg1 = index;
      },
      fun2(index, name) {
        this.content_id = this.invoiceData.invoice_content[index].id;
        this.content_name = name;
        this.isbg2 = index;
      },
      add() {
        let data = {
          name: '',
          no_editable: false
        }
        this.invoiceData.raised_data.push(data)
        this.$nextTick(() => {
          this.$refs.inp.scrollTop = this.$refs.inp.scrollHeight;
        })
        this.news = false

      },
      insert(index) {
        this.$set(this.invoiceData.raised_data[index], 'no_editable', false);
      },
      del(index, id) {
        this.isShow = false;
        this.$confirm('您确定要删除该发票信息吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          lockScroll: false,
          type: 'warning',
          closeOnClickModal: false,
          center: true
        }).then(() => {
          this.HTTP(this.$httpConfig.invoicesAreRaisedDelete, {
            id: this.invoiceData.raised_data[index].id
          }, 'post')
                  .then((res) => {
                    if (this.invoiceData.raised_data[index].id == id) {
                      this.invoiceData.raised_data.splice(index, 1);
                      this.isbg1 = null;
                      this.raised_id = '';
                      this.raised_name = '';
                    }
                    this.isShow = true;
                  })
        }).catch(() => {
          this.isShow = true;
        })
      },
      keep(index) {
        if (!this.invoiceData.raised_data[index].name) {
          alert('输入不能为空')
          return false;
        }
        if (this.invoiceData.raised_data[index].id) { //编辑
          this.HTTP(this.$httpConfig.invoicesAreRaisedSave, {
            id: this.invoiceData.raised_data[index].id,
            name: this.invoiceData.raised_data[index].name
          }, 'post')
                  .then((res) => {
                    this.$set(this.invoiceData.raised_data[index], 'name', this.invoiceData.raised_data[index].name);
                    this.$set(this.invoiceData.raised_data[index], 'no_editable', true);
                  })
        } else { //添加
          this.HTTP(this.$httpConfig.invoicesAreRaisedAdd, {
            name: this.invoiceData.raised_data[index].name
          }, 'post')
                  .then((res) => {
                    this.raised_id = res.data.data;
                    let data = {
                      id: res.data.data,
                      name: this.invoiceData.raised_data[index].name,
                      no_editable: true
                    }
                    for (let index = 0; index < this.invoiceData.raised_data.length; index++) {
                      if (this.invoiceData.raised_data[index].no_editable === false) {
                        this.invoiceData.raised_data.splice(index, 1);
                      }
                    }
                    this.invoiceData.raised_data.push(data);
                  })
        }
        this.news = true;
      },

    }

  }
</script>
<style>
  .el-message-box--center {
    padding-bottom: 30px !important;
  }

  .el-message-box--center .el-message-box__header {
    padding-top: 30px !important;
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

  .logo {
    height: 115px;
    width: 1200px;
    margin: 0 auto;

    img {
      margin-top: 28px;
      float: left;
    }

    p {
      // font-size: 24px;
      // float: left;
      // margin: 40px 0 0 29px;
      font-size: 36px;
      color: #333333;
      position: absolute;
      top: 75px;
      left: 615px;
      border-left: 1px solid #DDDDDD;
      padding-left: 30px;
    }
  }

  .buzhou {
    height: 50px;
    background: url(../../assets/img/buzhou.jpg) no-repeat center;

    li {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #878788;
      text-align: center;
      line-height: 42px;
      font-size: 20px;
      color: #fff;
      font-weight: 900;
      margin-top: 4px;
    }

    li:nth-of-type(1) {
      margin-left: 207px;
    }

    li:nth-of-type(2) {
      margin: 4px 353px 0 343px;
    }

    .active {
      background: #d02629 !important;
    }
  }

  .zhushi {
    height: 42px;

    li {
      font-size: 14px;
      color: #666;
      line-height: 42px;
    }

    li:nth-of-type(1) {
      margin-left: 192px;
    }

    li:nth-of-type(2) {
      margin: 0 310px 0 313px;
    }

    .actives {
      color: #d02629 !important;
    }
  }
  .service-wrapper {
    cursor: pointer;
    margin-left: 10px;
    display: inline-block;
    img {
      margin-block: 5px;
    }
  }

  .xinxi {
    overflow: hidden;

    .biaoti {
      font-size: 12px;
      color: #262626;
      margin: 20px 0;
    }

    .bottom {
      border: 1px solid #eaeaea;
      overflow: hidden;

      .thead {
        height: 51px;
        border-bottom: 1px solid #eaeaea;
        margin: 0 38px;
        line-height: 60px;
        float: left;
        width: 1124px;

        p {
          font-size: 12px;
        }

        p:nth-of-type(2) {
          margin: 0 125px 0 335px;
        }

        p:nth-of-type(4) {
          margin: 0 135px 0 140px;
        }

        p:nth-of-type(6) {
          margin-left: 140px;
        }
      }
    }

    .dianpu {
      overflow: hidden;
      margin: 0 38px;
      float: left;
      margin-top: 18px;
      width: 1124px;

      .name {
        font-size: 12px;
        line-height: 32px;
        height: 30px;
        display: inline-block;

        img {
          margin: -5px 0 0 12px;
        }

        span {
          cursor: pointer;
        }

        span:hover {
          color: red;
        }
      }

      .order-list {
        .order-info {
          // height: 80px;
          background: #fcfcfc;
          margin-bottom: 1px;
          display: flex;
          // align-items: center;

          img {
            margin: 16px 9px 0 13px;
            width: 60px;
            height: 57px;
            cursor: pointer;
          }

          p {
            font-size: 12px;
            color: #666;
            margin-top: 17px;
          }

          // p:nth-of-type(1) {
          //   width: 192px;
          //   margin-right: 93px;
          //   cursor: pointer;
          // }
          p:nth-of-type(1) {
            width: 250px;
            font-size: 12px;
            color: #575757;
            // margin-top: 29px;
            margin-left: 30px;
            cursor: pointer;
            line-height: 25px;
          }
          span {
              float: left;
          }

          p:nth-of-type(1):hover {
            color: red;
          }

          p:nth-of-type(3) {
            margin: 17px 147px 0 123px;
          }

          p:nth-of-type(5) {
            margin: 17px 0px 0 141px;
          }

          p:last-child {
            color: #dd2727;
            margin-left: 150px;
          }
        }

        .gift-info {
          display: flex;
          align-items: center;

          .gift {
            margin-left: 150px !important;
          }
        }

        select {
          margin: 17px 0 0 108px;
        }

        .delivery_method {
          line-height: 45px;
          font-size: 12px;
          color: #666666;
          float: right;
          margin-top: -120px;

          .method_info {
            color: #666666;
            margin-right: 5px;
          }

          .method_toggle {
            color: #666666;
            cursor: pointer;
            padding: 0 10px;
          }

          .method_no {
            color: #666666;
          }
          .method_price {
            color: #DD2727;
            padding: 0 30px;
					}
        }

        .store_total {
          line-height: 45px;
          font-size: 12px;
          color: #666666;
          float: right;
          margin-top: -60px;

          .total_info {
            color: #DD2727;
            font-size: 16px;
            padding-right: 30px;
          }
        }

        .fapiao {
          line-height: 45px;
          font-size: 12px;
          color: #666666;
          padding-left: 15px;

          .invoice-info {
            color: #333333;
            margin-right: 5px;
          }

          .invoice-toggle {
            color: #005EA7;
            cursor: pointer;
            padding: 0 20px;
          }
          .invoice-toggle:hover {
            color: red;
          }
          .invoice-no {
            color: #FF6000;
            cursor: pointer;
          }
          .error_message {
						color: red;
					}
        }

        .sty {
          width: 200px;
          height: 20px;
          border: 1px solid #d9d9d9;
          line-height: 19px;
          background: #fff;
          padding-left: 10px;
        }

        .order-item {
          padding-left: 15px;

          .order-memo {
            width: 50%;

            .memo {
              padding: 10px 0;

              .memo-title {
                color: #3c3c3c;
                font-size: 12px;
              }

              .text-area-input {
                vertical-align: top;
                width: 328px;
                resize: none;
                height: 20px;
                line-height: 18px;
                text-indent: 4px;
                border: 1px solid #ccc;
                outline: 0;
                overflow: auto;
              }

              .text-area-input:focus {
                height: 59px;
              }
            }
          }

          .order-extInfo {
            width: 50%;
            height: 79px;
            text-align: right;

            div {
              padding: 10px 0;
              font-size: 14px;

              .freight {
                color: #dd2727;
                font-size: 15px;
              }

              .total-price {
                font-size: 13px;
                color: #df7344;
                margin: 0 40px 0 10px;
              }
            }
          }
        }
      }
    }

    .jifen {
      margin-top: 31px;
      font-size: 12px;
      color: #363636;
      border-bottom: 1px solid #eaeaea;
      float: left;
      width: 1124px;
      margin-left: 37px;
      height: 21px;
    }

    .dikou {
      height: 44px;
      line-height: 44px;
      width: 1124px;
      margin-left: 37px;

      p {
        font-size: 12px;
        color: #363636;
        margin-right: 21px;

        input {
          width: 86px;
          height: 22px;
          border: 1px solid #e3e3e3;
          margin: 0 10px 0 6px;
        }

        span {
          color: #f28765;
        }
      }
    }

    .helpjf {
      height: 44px;
      line-height: 44px;
      width: 1124px;
      margin-left: 37px;
      background: #fcfcfc;
      padding-left: 16px;
      font-size: 12px;
      color: #363636;

      span {
        color: #dd2727;
      }
    }
  }

  .jiesuan {
    margin-top: 30px;

    p {
      text-align: right;
      width: 100%;
      font-size: 14px;
      color: #333333;
      margin-bottom: 7px;
      .delivery_price {
				text-align: right;
				width: 100%;
				font-size: 12px;
				color: #484848;
				margin-bottom: 7px;
			}

      span {
        color: #B61D1D;
      }
    }
  }

  .pay {
    height: 100px;
    background: #eaeaea;
    text-align: right;

    .yingfu {
      font-size: 14px;
      color: #333333;
      margin: 23px 25px 0 0;
      width: 100%;

      span {
        font-size: 24px;
        color: #DD2727;
      }
    }

    div.r {
      margin-top: 20px;

      p {
        font-size: 12px;
        color: #656565;
        margin-right: 23px;
      }
    }
  }

  .submit {
    overflow: hidden;
    margin-top: 15px;
    margin-bottom: 80px;

    p {
      width: 182px;
      height: 38px;
      background: #FF5100;
      text-align: center;
      line-height: 38px;
      color: #fff;
      cursor: pointer;

      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: 16px;
      }
    }
  }

  .alert {
    margin: 20px 0 200px 25px;

    .fapiao {
      overflow: hidden;

      span {
        width: 96px;
        height: 30px;
        float: left;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: #646464;
        margin-right: 14px;
        cursor: pointer;
      }
    }

    .taitou {
      overflow: hidden;
      margin-top: 20px;
      margin-bottom: 22px;

      p:nth-of-type(1) {
        font-size: 12px;
        color: #646464;
        margin-top: 7px;
      }

      .inp {
        width: 376px;
        overflow: auto;
        overflow-x: hidden;
        max-height: 126px;
        min-height: 42px;
      }

      .top {
        width: 338px;
        height: 32px;
        line-height: 32px;
        border: 1px solid #ccc;
        padding-left: 13px;
        margin-bottom: 10px;
        float: left;
        cursor: pointer;
      }

      .value {
        width: 338px;
        height: 32px;
        border: 1px solid #ccc;
        padding-left: 13px;
        margin-bottom: 10px;
        float: left;
        cursor: pointer;

        input {
          width: 247px;
          height: 30px;
        }

        span {
          font-size: 12px;
          color: #43628e;
          padding-right: 8px;
        }

        span:hover {
          color: red;
        }
      }

      P:nth-of-type(2) {
        font-size: 12px;
        color: #4e75ac;
        margin-left: 60px;
        cursor: pointer;
      }

      P:nth-of-type(2):hover {
        color: red;
      }
    }

    .content {
      overflow: hidden;

      p {
        font-size: 12px;
        color: #646464;
        margin-top: 7px;
      }

      span {
        width: 83px;
        height: 30px;
        float: left;
        border: 1px solid #ccc;
        margin-right: 15px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        cursor: pointer;
      }
    }

    .btn {
      button {
        width: 70px;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-right: 8px;
        cursor: pointer;
      }

      button:nth-of-type(1) {
        color: #fff;
        background: #d02629;
      }

      button:nth-of-type(2) {
        background: #eaeaea;
        cursor: pointer;
      }
    }

    .bg {
      background: url(../../assets/img/bg.jpg) no-repeat bottom 0 right 0;
      border-color: #d02629 !important;
    }
  }
</style>