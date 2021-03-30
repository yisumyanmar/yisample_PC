<template>
	<div class="releaseInquiryList">
		<common-header v-on:childToParent="onChildClick"></common-header>
		<my-header></my-header>
		<div class="center" v-for="(item, index) in offerList" :key="index">
            <div class="top"><span>询价中心 </span> > <span>发布询价列表 </span> > <span>中标列表 </span></div>
            <div class="one_part">
                <!-- <p>商品名称：<span>包装 纸类包装容器 纸盒</span></p>
                <p>采购量：<span>1000</span></p> -->
                <p>商品名称：<span>{{item.title}}</span></p>
                <p>采购量：<span>{{item.number}}</span></p>
            </div>
            <div class="two_part" v-for="(off, ind) in item.offer" :key="ind">
                <img class="front_img" src="../../assets/img/front_img.png"/>
                <p>报价方1</p>
                <!-- <p>宁波华人包装有限公司</p>
                <p>单价：<span>¥100</span>/PCS</p>
                <p>总价：<span>¥100000.00</span></p> -->
                <p>{{off.shop_name}}</p>
                <p>单价：<span>¥{{off.price}}</span>/PCS</p>
                <p>总价：<span>¥{{off.total_price}}</span></p>
                <p>报价时间：2021-01-26</p>
                <input type="text" />
                <button>确定报价</button>
            </div>
            <!-- <div class="two_part">
                <img class="front_img" src="../../assets/img/front_img.png"/>
                <p>报价方2</p>
                <p>中铁电化运管公司</p>
                <p>单价：<span>¥100</span>/PCS</p>
                <p>总价：<span>¥100000.00</span></p>
                <p>报价时间：2021-01-26</p>
                <input type="text" />
                <button>确定报价</button>
            </div> -->
		</div>
		<foot-com></foot-com>
	</div>
</template>
 
<script>
import myHeader from "././header/myHeader.vue";
export default {
    name: 'releaseInquiryList',
	data(){
		return{
            offerList: []
		}
	},
	created() {
        this.getOfferList();
    },
	methods: {
        onChildClick (value) {
        this.fromChild = value
        if(this.fromChild == 'false') {
            location.reload();
        }
	},
    getOfferList() {
        this.HTTP(this.$httpConfig.offerListByProject, {
            id: this.$route.query.id
        },"post")
            .then(res => {
                this.offerList = res.data.data;
            }
        )
        .catch((err) => {
        console.log(err);
        });
    },
},
components: {
    "my-header": myHeader
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
        margin-bottom: 80px;
    }
	.releaseInquiryList {
        background:#f6f6f6;
    }
    .top{
		line-height:42px;
        font-size:12px;
        span {
            color:#333333;
        }
        span:last-child {
            color:#D02629;
        }
	}
    .one_part {
        padding: 20px;
        background: #fff;
        display: flex;
        margin-top: 10px;
        p {
            color: #000;
            font-size: 14px;
            padding-right: 80px;
        }
        span {
            color: #666;
            font-size: 16px;
        }
    }
    .two_part {
        background: #fff;
        padding: 40px 20px;
        display: flex;
        margin-top: 40px;
        .front_img {
            margin-top: -55px;
            height: 50px;
        }
        p {
            font-size: 14px;
            color: #000;
        }
        span {
            font-size: 14px;
            color: #D02629;
        }
        p:nth-of-type(1) {
            margin-top: -42px;
            width: 55px;
            margin-left: -65px;
            color: #fff;
        }
        p:nth-of-type(2) {
            width: 200px;
            margin-left: 20px;
        }
        p:nth-of-type(3) {
            width: 165px;
        }
        p:nth-of-type(4) {
            width: 165px;
        }
        p:nth-of-type(5) {
            width: 200px;
            color: #333333;
        }
        input {
            border: 1px solid #DFDFDF;
            font-size: 14px;
            width: 200px;
            padding: 10px;
            margin-top: -10px;
        }
        button {
            background: #1A6DF8;
            color: #fff;
            font-size: 14px;
            margin-left: 30px;
            padding: 0 20px;
            height: 40px;
            margin-top: -10px;
            border-radius: 5px;
        }
    }
</style>