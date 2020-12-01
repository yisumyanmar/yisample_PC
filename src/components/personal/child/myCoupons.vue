<template>
	<div class="mycoupons l">
		<div class="top">
			<p>我的优惠券</p>
		</div>
		<div class="content-coupon">
			<div class="l youhui youhuis" v-for="(item,index) in couponList" :key="index">
				<div class="up" v-if="item.goods[0]">
					<p>
						<span class="l">￥</span>
						<span class="l">{{item.money}}</span>
						<span class="r">{{item.name}}</span>
					</p>
					<p>使用条件:满{{item.condition}}</p>
					<p>有效时间:{{item.use_start_time}} 至 {{item.use_end_time}}</p>
					<p>发行店铺:{{item.shop_name}}</p>
					<ul>
						<li class="l" v-for="(val,index) in item.goods" :key="index" @click="nextproduct(val.p_id)"><img :src="URL + val.pic_url" />{{val.price_member}}</li>
						<!-- <li class="l"><img src="../../../assets/img/youhuihu.png" />318.00</li> -->
					</ul>
				</div>
				<div class="down" v-if="item.goods[0]">
          <img @click="toShop(item.store_id)" src="../../../assets/img/youhuicar.png" alt="" /> |
          <img @click="delCoupon(item.id)" src="../../../assets/img/youhuilajikuang.png" />
        </div>
        
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			couponList: []
		}
	},
	created() {
    this.getCoupon();
        // let title = "我的优惠券" + this.$constant.webComContent;
        let title = "我的优惠券" + '-' + this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
	},
	methods: {
    nextproduct(id){
      window.open(
          window.location.origin + "/shopsn_product?id=" + id
      );
    },
		getCoupon() {
			this.HTTP(this.$httpConfig.myCouponLists, { status: 3, page: 1 }, 'post')
				.then((res) => {
					this.couponList = res.data.data.list;
				}).catch((e)=>{
          console.log(e)
        })
    },
    toShop(id){
				window.open(window.location.origin+'/storehome?id='+id)
    },
    delCoupon(id){
      this.HTTP(this.$httpConfig.delCoupon, {c_id:id}, 'post')
      .then((res) => {
       	if (res.data.status == 1) {
						this.$message.success(res.data.message);
					}
      }).catch((e)=>{
        console.log(e)
      })
      this.getCoupon();
    }
	}
}
</script>

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

.mycoupons {
  min-height: 1100px;
  height: auto;
  width: 980px;
  background: #fff;
  margin: 16px 0;
  float: left;
  .top {
    overflow: hidden;
    margin: 14px 17px 0px;
    border-bottom: 1px solid #e7e7e7;
    line-height: 37px;
    p {
      width: 104px;
      text-align: center;
      border-bottom: 2px solid #d02629;
      font-size: 14px;
      color: #d02629;
    }
  }
  .content-coupon {
	  width: 980px;
	  height: auto;
	  display: flex;
	  flex-direction: row;
	  flex-wrap: wrap;
	  padding: 0 0 20px 0;
    .youhui {
      margin: 18px 20px 0 0;
      .up {
        width: 243px;
        height: 260px;
        background: url(../../../assets/img/youhui.png) no-repeat center;
        p {
          float: left;
          width: 218px;
          margin-left: 12px;
          margin-right: 12px;
          font-size: 11px;
          color: #fff;
          line-height: 21px;
        }
        p:nth-of-type(1) {
          margin: 19px 12px 23px 12px;
          span:nth-of-type(1) {
            font-size: 18px;
          }
          span:nth-of-type(2) {
            font-size: 28px;
          }
        }
        ul {
          float: left;
          margin-top: 36px;
          margin-left: 5px;
          li {
            width: 70px;
            height: 84px;
            text-align: center;
            font-size: 10px;
            color: #666;
            margin-left: 6px;
            img {
              float: left;
              margin-bottom: 4px;
            }
          }
        }
      }
    }
    .youhuis {
      margin-left: 22px !important;
    }
    .down {
      text-align: center;
      margin-top: 12px;
      color: #f3efee;
      img {
        cursor: pointer;
      }
    }
  }
}
</style>
