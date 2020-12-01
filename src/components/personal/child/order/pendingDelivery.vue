<template>
  <div class="fullOrde">
    <div class="alike" v-for="(item, index) in data.list" :key="index">
      <div class="both"><input class="l" type="checkbox"/>
        <p class="l">{{item.create_time | formatDate}}</p>
        <p class="l">订单号： {{item.order_sn_id}}</p><span></span>
        <p class="l">店铺：
          <router-link target="_blank" :to="{path:'/storehome',query:{id:item.store_id}}">{{item.store.shop_name}}
          </router-link>
        </p>
        <div class="service-reset">
          <div id="dom" @click="openkefu(item)">
            <span>客服</span>
            <img src="@/assets/img/people_ser.png" />
            <i v-if="item.order_status == 4" class="el-icon-delete r"></i>
          </div>
        </div>
      </div>
      <div class="order-item clearfix">
        <div class="order-info l">
          <div class="zuo" v-for="(goods,i) in item.goods" :key="i">
            <div class="huowu">
              <router-link target="_blank" class="a-block" :to="{path:'/shopsn_product',query:{id:goods.goods_id}}">
                <img :src="URL + goods.pic_url"/>
              </router-link>
              <p>
                <router-link target="_blank" class="a-block" :to="{path:'/shopsn_product',query:{id:goods.goods_id}}">
                  {{goods.title}}
                </router-link>
              </p>
              <p v-if="goods.goods_price != '0.00'">￥{{goods.goods_price}}</p>
              <p v-else style="color: #d02629;">赠品</p>
              <p>{{goods.goods_num}}</p>
              <div class="l g-operation">
                <router-link class="goods-operate" target="_blank" to="complain">投诉卖家</router-link>
                <router-link v-if="goods.status == 1 || goods.status == 2 || goods.status == 3" class="goods-operate"
                             target="_blank" :to="{name:'apply',params:{id:item.id,goods_id:goods.goods_id,order_sn_id:item.order_sn_id}}">退款/退换货
                </router-link>
                <span
                  v-if="goods.status == 5 || goods.status == 6 || goods.status == 7 || goods.status == 8 || goods.status == 9 || goods.status == 10 || goods.status == 11"
                  class="goods-operate">{{status[Number(goods.status)]}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right r" :style="{height:item.goods.length * 110 + 'px'}">
          <p>
            <!-- <span>￥{{parseFloat(item.price_sum)+parseFloat(item.shipping_monery)|keep2Num}}</span> -->
            <span v-if="deliveryMoney == -1"
                >￥{{
                  (parseFloat(item.price_sum))
                    | keep2Num
                }}</span>
                <span v-else-if="deliveryMoney"
                >￥{{
                  (parseFloat(item.price_sum) +
                    parseFloat(deliveryMoney))
                    | keep2Num
                }}</span>
                <span v-else-if="freight_price = 0"
                >￥{{
                  (parseFloat(item.price_sum))
                    | keep2Num
                }}</span>
                <span v-else
                >￥{{
                  (parseFloat(item.price_sum) +
                    parseFloat(freight_price))
                    | keep2Num
                }}</span>
            <!-- <span>（含运费：￥{{item.shipping_monery|keep2Num}}）</span> -->
            <span v-if="deliveryMoney == -1">（配送费：免配送费）</span>
            <span v-else-if="deliveryMoney">（配送费：￥{{ deliveryMoney | keep2Num }}）</span>
            <span v-else>
            <span v-if="freight_price = 0">（运费：卖家包邮）</span>
            <span v-else>（运费：￥{{ freight_price | keep2Num }}）</span>
            </span>
          </p>
          <p>
            <span v-if="item.order_status == 1">等待卖家发货</span>
            <router-link target="_blank" class="a-block" :to="{path: '/orderDetail', query: {id: item.id}}">订单详情
            </router-link>
          </p>
          <p><span ref="msg">{{$Status[item.order_status]}}</span><span></span></p>
        </div>
      </div>
    </div>
    <div class="pagation" v-if="data.length != 0">
      <el-pagination background layout="prev, pager, next" :total="~~data.count" :page-size="data.page_size"
                     @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [],
        currentPage: 1,
        h: true,
        dingDan: false,
        message: '',
        status: ['取消订单', '未支付', '已支付', '发货中', '已发货', '已收货', '退货审核中', '审核失败', '审核成功', '退款中', '退款成功', '退货中', '卖家已收货'],
        storeId: '',
        goodId: '',
        deliveryMoney: '',
        freight_price: '',
        provId: '',
        cityId: '',
        distId: ''
      }
    },
    created() {
      this.Order();
      this.$emit('changeOrderNum');
    },
    methods: {
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
      Order() {
        this.HTTP(this.$httpConfig.pendingDelivery, {
          page: this.currentPage
        }, 'post').then(res => {
          this.data = res.data.data;
          this.provId = this.data.UserAddress.prov.id;
          this.cityId = this.data.UserAddress.city.id;
          this.distId = this.data.UserAddress.dist.id;
          for(let a in this.data.list) {
            this.goodId = this.data.list[a].id;
            this.storeId = this.data.list[a].store_id;
          }
          // console.log(this.data, "this.data");
          this.getDistributionFee();
          this.getFreight();
        }).catch((res) => {
          this.data = [];
        })
      },
      getDistributionFee() { //获取配送端
      this.HTTP(this.$httpConfig.deliveryCalcus, {
        store_id: this.storeId,
        goods_id: this.goodId,
        prov_id: this.provId,
        city_id: this.cityId,
        dist_id: this.distId
        }, 'post').then((res) => {
          if (res.data.status == 1) {
            this.deliveryMoney = res.data.data.money;
          }
        })
      },
      getFreight() {
        this.HTTP(this.$httpConfig.freightCalcus, {
          store_id: this.storeId,
          goods_id: this.goodId,
          prov_id: this.provId,
          city_id: this.cityId,
          dist_id: this.distId
        }, 'post').then((res) => {
          this.freight_price = res.data.data;
        }).catch((res) => {
          console.log(res.data.data);
        })
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.Order();
      },
      xiangqing() {
        this.h = false;
        this.dingDan = true;
      },
    }
  }
</script>
<style lang="less" scoped>
.service-reset {
  // position: relative;
  #dom {
    right: 550px;
    cursor: pointer;
    line-height: 33px;
    margin-top: 3px;
    position: absolute;
    align-items: end;
    border: 1px solid #eeeeee;
    background: #fbfbf1;
    span {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>
<style lang="less" scoped>
  .el-date-editor.el-input {
    width: 178px;
  }

  .l {
    float: left;
  }

  .r {
    float: right;
  }

  .pagation {
    display: flex;
    justify-content: center;
  }

  .center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
  }

  .el-input__inner {
    color: red!important;
  }

  .fullOrde {
    .filter {
      .search {
        margin: 23px 12px 15px 17px;
        width: 314px;
      }
      .tiaojian {
        font-size: 12px;
        color: #333;
        margin-top: 28px;
        cursor: pointer;
        .delete-order {
          cursor: pointer;
        }
      }
      .ipn {
        display: block;
        width: 90%;
        margin: 0 0 14px 17px;
        .leixing {
          font-size: 12px;
          color: #333;
          select {
            width: 148px;
            height: 26px;
            border-color: #ccc;
            color: #a0a0a0;
            outline: none;
          }
        }
        .data {
          margin-left: 115px;
          font-size: 12px;
          color: #333;
          input {
            height: 26px;
            padding-left: 20px;
            border: 1px solid #bfbfbf;
          }
        }
      }
    }
    .thead {
      overflow: hidden;
      height: 38px;
      background: #f5f5f5;
      border: 1px solid #e7e6e6;
      margin: 0 17px 20px 17px;
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
    .alike {
      overflow: hidden;
      border: 1px solid #e7e6e6;
      margin: 0 17px 10px;
      .a-block {
        display: block;
      }
      a {
        font-size: 12px;
        color: #333;
      }
      a:hover {
        color: red;
      }
      .both {
        height: 42px;
        line-height: 42px;
        background: #f1f1f1;
        i {
          cursor: pointer;
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
        img {
          float: left;
          margin: 8px 0 0 10px;
        }
      }
      .zuo {
        overflow: hidden;
        width: 613px;
        .huowu {
          height: 110px;
          display: flex;
          align-items: center;
          .g-operation {
            text-align: center;
            span {
              font-size: 12px;
            }
            .goods-operate {
              display: block;
              margin-top: 5px;
            }
          }
          img {
            width: 70px;
            height: 70px;
            float: left;
            margin: 0 10px 0 13px;
          }
          p {
            float: left;
            font-size: 12px;
            color: #333;
          }
          p:nth-of-type(1) {
            width: 147px;
            margin: 0 117px 0 0;
          }
          p:nth-of-type(3) {
            margin: 0 83px 0 44px;
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
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          span {
            display: block;
            font-size: 12px;
            color: #333;
          }
        }
        p:nth-of-type(1) {
          width: 120px;
        }
        p:nth-of-type(2) {
          width: 105px;
        }
        p:nth-of-type(3) {
          width: 106px;
          span:nth-of-type(1) {
            text-align: center;
            width: 72px;
            height: 28px;
            line-height: 28px;
            color: #fff;
            background: #cbcaca;
            cursor: default;
            border-radius: 3px;
          }
        }
      }
      .youhui {
        line-height: 35px;
        color: #333;
        font-size: 12px;
        margin-left: 13px;
        span {
          color: #d02629;
        }
      }
    }
  }
</style>


