<template>
	<div class="releaseInquiryList">
		<common-header v-on:childToParent="onChildClick"></common-header>
		<my-header></my-header>
		<div class="center">
            <div class="top"><span>您的位置： </span> <span>交易中心</span> > <span>退款退货 </span> > <span>查看详情</span></div>
            <div class="one_part">
                <p>aaaaa: <span>bbbbbb</span></p>
                <p>ccccc: <span>100</span></p>
            </div>
            <div class="two_part">
                <p>aaaaaaa</p>
                <p>bbb: <span>¥100</span>/PCS</p>
                <p>ccc: <span>¥1000000.00</span></p>
                <p>date: 2021-01-26</p>
                <input type="text" />
                <button>dddddd</button>
            </div>
            <div class="two_part">
                <p>aaaaaaa</p>
                <p>bbb: <span>¥100</span>/PCS</p>
                <p>ccc: <span>¥1000000.00</span></p>
                <p>date: 2021-01-26</p>
                <input type="text" />
                <button>dddddd</button>
            </div>
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
		}
	},
	created() {
    },
	methods: {
        onChildClick (value) {
        this.fromChild = value
        if(this.fromChild == 'false') {
            location.reload();
        }
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
            color:#474747;
        }
        span:last-child {
            color:#d02629;
        }
	}
    .one_part {
        padding: 20px;
        background: #fff;
        display: flex;
        margin-top: 10px;
        p {
            color: #000;
            font-size: 16px;
            width: 300px;
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
        p {
            font-size: 16px;
            color: #000;
        }
        span {
            font-size: 16px;
            color: #d02629;
        }
        p:nth-of-type(1) {
            width: 150px;
            margin-left: 80px;
        }
        p:nth-of-type(2) {
            width: 200px;
        }
        p:nth-of-type(3) {
            width: 200px;
        }
        p:nth-of-type(4) {
            width: 200px;
        }
        input {
            border: 1px solid #999;
            font-size: 16px;
            width: 200px;
            padding: 10px;
            margin-top: -10px;
        }
        button {
            background: #02A3FE;
            color: #fff;
            font-size: 16px;
            margin-left: 30px;
            padding: 0 20px;
            height: 40px;
            margin-top: -10px;
            border-radius: 5px;
        }
    }
</style>