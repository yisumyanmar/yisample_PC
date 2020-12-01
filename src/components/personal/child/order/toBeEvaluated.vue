<template>
  <div class="fullOrde">
    <div class="alike" v-for="(item, index) in data.list" :key="index">
      <div class="both"><input class="l" type="checkbox" />
        <p class="l">{{item.create_time | formatDate}}</p>
        <p class="l">订单号： {{item.order_sn_id}}</p>
        <p class="l">店铺：
          <router-link target="_blank" :to="{path:'/storehome',query:{id:item.store_id}}">{{item.store.shop_name}}</router-link>
        </p>
        <div class="service-reset">
            <div id="dom" @click="openkefu(item)">
              <span>客服</span>
              <img src="@/assets/img/people_ser.png" />
            </div>
        </div>
      </div>
      <div class="order-item clearfix">
        <div class="order-info l">
          <div class="zuo" v-for="(goods,i) in item.goods" :key="i">
            <div class="huowu">
              <router-link target="_blank" class="a-block" :to="{path:'/shopsn_product',query:{id:goods.goods_id}}">
                <img :src="URL + goods.pic_url" />
              </router-link>
              <p>
                <router-link target="_blank" class="a-block" :to="{path:'/shopsn_product',query:{id:goods.goods_id}}">{{goods.title}}</router-link>
              </p>
              <p>￥{{goods.goods_price}}</p>
              <p>{{goods.goods_num}}</p>
              <div class="l g-operation">
                <router-link v-if="checkOverTime(item.over_time)" class="goods-operate" target="_blank" :to="{path:'/apply',query:{id:item.id,goods_id:goods.goods_id}}">售后处理</router-link>
                <span
                    v-if="goods.status == 5 || goods.status == 6 || goods.status == 7 || goods.status == 8 || goods.status == 9 || goods.status == 10 || goods.status == 11"
                    class="goods-operate">{{Status[Number(goods.status)]}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right l" :style="{height:item.goods.length * 110 + 'px'}">
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
            <router-link class="a-block" target="_blank" :to="{path: '/orderDetail', query: {id: item.id}}">订单详情</router-link>
            <a @click="lookLogistics(item)" class="a-block">查看物流</a>
          </p>
          <p>
            <span class="appraise" v-for="(good,g) in item.goods" :key="g" >
              <span class="already-evaluated" v-if="good.comment == 1">
                    已评价
                </span>
                <span v-else
                      @click="$router.push({path: '/publishComment', query: {id: item.id,goods_id:good.goods_id,type:0}})">评价</span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="pagation" v-if="data.length != 0">
        <el-pagination background layout="prev, pager, next" :total="~~data.count" :page-size="data.page_size"  @current-change="handleCurrentChange">
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
        status:['取消订单','未支付','已支付','发货中','已发货','已收货','退货审核中','审核失败','审核成功','退款中','退款成功','退货中','卖家已收货'],
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
      this.Order()
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
      to(item,good){
        console.log(item,good);
      },
      //查看物流
      lookLogistics(item) {
          window.open(window.location.origin+'/logistics?id='+item.id+'&express_id='+item.express_id+'&exp_id='+item.exp_id+'&status='+item.order_status);
      },
      Order() {
        this.HTTP(this.$httpConfig.toBeEvaluated, {
          page: this.currentPage
        }, 'post', false).then(res => {
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
        }).catch((res)=>{
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
      //判断是否售后七天
      checkOverTime(time){
        if(!time){
          return true
        }
        var timestamp = (Date.parse(new Date()))/1000;
        var overTime = Number(time) + 86400*7;
        if(timestamp>overTime){
          console.log("超出时间")
          return false
        }else {
          return true
        }
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.Order();
      },
      xiangqing() {
        this.h = false;
        this.dingDan = true;
      },

      Status(status) {
        console.log(status)
        switch (~~status) {
          case -1:
            return '取消订单'
          case 0:
            return '立即付款'
          case 1:
            return '已支付'
          case 2:
            return '发货中'
          case 3:
            return '已发货'
          case 4:
            return '已收货'
          case 5:
            return '退货审核中'
          case 6:
            return '审核失败'
          case 7:
            return '审核成功'
          case 8:
            return '退款中'
          case 9:
            return '退款成功'
          default:
            return ''
        }
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

  .alike {
    overflow: hidden;
    border: 1px solid #e7e6e6;
    margin: 0 17px 10px;
    .goods-operate {
      display: inline-block;
      margin-top: 20px;
    }
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
        border-bottom:1px solid #e7e6e6;
        img {
          width: 70px;
          height: 70px;
          float: left;
          margin: 15px 10px 0 13px;
        }
        p {
          float: left;
          font-size: 12px;
          color: #333;
          margin-top: 20px;
        }
        p:nth-of-type(1) {
          width: 147px;
          margin: 18px 117px 0 0;
        }
        p:nth-of-type(3) {
          margin: 20px 83px 0 44px;
        }
      }

    }
    .zuo:last-child{
      .huowu{
        border-bottom:0px;
      }
    }
    .right {
      height: 110px;
      overflow: hidden;
      p {
        float: left;
        border-left: 1px solid #e7e6e6;
        height: 100%;
        line-height: 251%;
        text-align: center;
        span {
          display: block;
          text-align: center;
          font-size: 12px;
          color: #333;
        }
      }
      p:nth-of-type(1) {
        width: 120px;


        span:nth-of-type(1) {
          margin-top: 20px;
        }
      }
      p:nth-of-type(2) {
        width: 105px;
        align-items: center;
        span:nth-of-type(1) {
          margin-top: 20px;
        }
      }
      p:nth-of-type(2)> :first-child {
        margin-top: 20px;
      }
      p:nth-of-type(3) {
        width: 106px;
        align-items: center;
        display: block;
        span.appraise{
          display: flex;
          justify-items: center;
          cursor: pointer;
          height: 110px;
          line-height: 110px;
          align-items: center;
          border-bottom: 1px solid #e7e6e6;
          span{
            border-radius: 3px;
            margin: 0 auto;
            width: 72px;
            color: #fff;
            height: 28px;
            line-height: 28px;
            background: #ff6000;
          }
          .already-evaluated{
            background: #cbcaca;
          }
        }
        span.appraise:last-child{
            border-bottom: 0px;
        }
      }
      .quxiao {
        background: #cbcaca !important;
      }
      .queren {
        background: #66b6ff !important;
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
</style>


