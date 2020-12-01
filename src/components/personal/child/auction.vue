<template>
	<div class="auction l">
		<ul><li class="l" @click="line(0)" :class="{underline:isno==0}"><p>参拍宝贝<span>（2）</span></p></li><li class="l"  @click="line(1)" :class="{underline:isno==1}"><p>已拍下 <span>（1）</span></p></li><li class="l"  @click="line(2)" :class="{underline:isno==2}"><p>保证金 <span>（2）</span></p></li></ul>
			<div class="under">
			<div class="top"><p class="l">标的物</p><p class="l">起拍价</p><p class="l">竞拍次数</p><p class="l">成交价格</p><p class="l">成交时间</p><p class="l">交易状态</p></div>
			<div class="down"><p class="l"><img src="../../../assets/img/samllchahu.png"/><span>梨形壶 国家助理工艺美术师 余款将马上自动 转入法院的支付宝账号卢伟萍</span></p><p class="l"><span>￥10000.00</span></p><p class="l"><span>3</span></p><p class="l"><span>￥30000.00</span></p><p class="l"><span>2017.3-15</span></p><p class="l"><span>交付尾款</span><span class="huangse">去支付</span></p></div>
			<div class="down"><p class="l"><img src="../../../assets/img/samllchahu.png"/><span>梨形壶 国家助理工艺美术师 余款将马上自动 转入法院的支付宝账号卢伟萍</span></p><p class="l"><span>￥10000.00</span></p><p class="l"><span>3</span></p><p class="l"><span>￥30000.00</span></p><p class="l"><span>2017.3-15</span></p><p class="l"><span>交易完成</span></p></div>
		</div>	
	</div>
</template>

<script>
	export default {
  data () {
    return {
      //我的拍卖
		isno:'',
    }
  },
  created () {
  },
  methods: {
   //我的拍卖
		line(index){this.isno=index},
  }
}
</script>


<style lang="less" scoped>
	.l{float: left;}
	.r{float: right;}
	.center {width: 1200px;margin: 0 auto;height: 100%;}
	.auction{
			height:2140px;width:980px;background: #fff;margin:16px 0;
			ul{overflow: hidden; margin:14px 17px 20px;border-bottom:1px solid #e7e7e7;height:37px;li{cursor:pointer; height:36px; color:#666; width:104px;p{height:16px;border-right:1px solid #e7e7e7;text-align: center;margin-top:10px;font-size:12px;span{color:#d02629;}}}}
			.underline{border-bottom:2px solid #d02629;color:#d02629;}
			.under{border:1px solid #e7e6e6;margin:0 15px;overflow: hidden;
				.top{height:38px;line-height:38px;background:#f5f5f5;border-bottom:1px solid #e7e6e6;p{font-size:12px;color:#333;} 
				p:nth-of-type(1){margin:0 238px 0 123px;}p:nth-of-type(3){margin:0 49px 0 66px;}p:nth-of-type(5){margin:0 65px 0 88px;}}
				.down{height:107px;border-bottom:1px solid #e7e6e6;span{font-size:12px;color:#333;margin-top:18px;display:block;}.huangse{color:#d02629;}
					p:nth-of-type(1){width:332px;overflow: hidden;margin-right:53px; img{margin:15px 11px 0 14px;float:left;display:inline-block;}}p:nth-of-type(3){margin:0 55px 0 72px;}p:nth-of-type(5){margin:0 56px 0 84px;}
				}
				.down:last-child{border-bottom: 0;}
			}
			
		}
</style>