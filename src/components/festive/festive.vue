<template>
	<div class="yuyin">
    <common-header v-on:childToParent="onChildClick"></common-header>
		<head-com></head-com>
		<div class="center">
			<div class="header">
				<img class="l" src="../../assets/img/fangzi.jpg" />
				<span class="shouye">首页></span>
				<span class="xiala">
					<router-link to="shopsn_product">喜庆物品</router-link>
				</span>
			</div>
			<div class="remai">
				<div class="left l">热<br />卖<br />推<br />荐</div>
				<div class="right l">
					<ul>
						<li class="l" v-for="(li,index) in remai" :key="index">
							<img :src="li.taolian" />
							<p>{{li.p}}</p>
							<p>特价：
								<span>{{li.pic}}</span>
							</p>
							<p>查看详情</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="choose">
				<div class="g-main-n l">
          <span class="l">品 &nbsp;牌：</span>
          <div class="q_class_list l" :class="{active:onoff}">
            <ul class="l" ref="brandHeight">
              <li class="l text1-hidden" v-for="(pinpai,index) in pinpais" :key="index">
                <a>{{pinpai}}</a>
              </li>
            </ul>
          </div>
           <i @click="open(1)" v-if="show" :class="{'el-icon-arrow-up':onoff}" class="el-icon-arrow-down g-btn"></i>
        </div>
				<div class="g-main-n l">
          <span class="l">价 &nbsp;格：</span>
           <div class="q_class_list l" :class="{active:onoff1}">
             <ul class="l" ref="priceHeight">
              <li class="l" v-for="(prices,index) in price" :key="index">
                <a>{{prices}}</a>
              </li>
            </ul>
           </div>    
           <i @click="open(2)" v-if="show1" :class="{'el-icon-arrow-up':onoff1}" class="el-icon-arrow-down g-btn"></i> 
       </div>
				<div class="g-main-n l">
					<span class="l">颜 &nbsp;色：</span>
          <div class="q_class_list l">
            <ul class="l">
              <li class="l" v-for="(colors,index) in color" :key="index">
                <a href="">{{colors}}</a>
              </li>
            </ul>
          </div>
					<!-- <i class="el-icon-arrow-down r"></i> -->
				</div>
			</div>
			<div class="new">
				<div class="left l">
					<div class="l up">
						<div class="headline">新品推荐</div>
						<ul>
							<li v-for="(tuijians,index) in tuijian" :key="index">
								<img :src="tuijians.guanyin" />
								<p class="l">{{tuijians.p}}</p>
								<p class="l">￥{{tuijians.pic}}</p>
							</li>
						</ul>
					</div>
					<div class="l down">
						<div class="headline">热销排行</div>
						<ul>
							<li v-for="(tuijians,index) in tuijian" :key="index">
								<img :src="tuijians.guanyin" />
								<p class="l">{{tuijians.p}}</p>
								<p class="l">￥{{tuijians.pic}}</p>
								<p class="r">销量：
									<span class="xiaoliang">{{tuijians.pic}}</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="right r">
					<div class="top">
						<ul class="theard l">
							<li>排列方式：</li>
							<li @click="tab(3)" :class="{actives:isactive == 3}">默认</li>
							<li class="li" v-for="(theards,index) in theard" :key="index" @click="tab(index)" :class="{active:isactive == index}">{{theards}}
							</li>
						</ul>
						<div class="ziying l"><input class="l" type="checkbox" />平台自营</div>
						<div class="l shangpin">
							商品所在地：
							<select class="r" name="">
								<option value="">不限地区</option>
								<option value="济南">济南</option>
								<option value="北京">北京</option>
							</select>
						</div>
						<div class="r next">
							<span class="button">上一页</span>
							<span class="button">下一页</span>
						</div>
					</div>
					<div class="bottom">
						<ul class="l">
							<li class="bagli l" v-for='(li,index) in arr' :key="index">
								<img class="bag" :src="li.fozhu"/>
								<ul class="samllul l">
									<li class="l" v-for="(item,i) in li.samllul" :key="i"><img class="samll" :src="item" /></li>
								</ul>
								<p class="l">{{li.p}}</p>
								<div class="l pice">
									<span>{{li.spa1}}</span>
									<span>{{li.spa2}}</span>
								</div>
								<div class="buy l">
                  <label>
									  <input class="l" type="checkbox" />
									  <span>对比</span>
                  </label>
									<span v-if="true" class="g-collection">
                    <img class="l" src="../../assets/img/heat_null.png" />
                    <span>收藏</span>
                  </span>
                  <span v-else class="g-collection">
                    <img class="l" src="../../assets/img/heat_fill.png" />
                    <span>已收藏</span>
                  </span>
								</div>
							<img class="r car" src="../../assets/img/goshop.png" />
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="fenye">
				<div class="box2">
          <el-pagination @current-change="handleCurrentChange" background layout="total,prev, pager, next,jumper" :page-size="page_size" :total="page">
          </el-pagination>
        </div>
			</div>
			<like-and-history></like-and-history>
		</div>
		<foot-com></foot-com>
	</div>
</template>

<script>
import taolian from '@/assets/img/taolian.jpg'
import guanyin from '@/assets/img/giftone.png'
import fozhu from '@/assets/img/gift.png'
import fozhu1 from '@/assets/img/fozhu1.jpg'
import shoucang from '@/assets/img/shoucang.jpg'
import gouwuche from '@/assets/img/gouwuche.jpg'
import panzi from '@/assets/img/panzi.jpg'
import shoulian from '@/assets/img/shoulian.jpg'
import baijian from '@/assets/img/baijian.jpg'
import yuzhuo from '@/assets/img/yuzhuo.jpg'
export default {
	data() {
		return {

			remai: [
				{ taolian: taolian, p: "SLBCQ0126白砗磲108套链", pic: '￥325' }, { taolian: taolian, p: "SLBCQ0126白砗磲108套链", pic: '￥325' },
				{ taolian: taolian, p: "SLBCQ0126白砗磲108套链", pic: '￥325' }, { taolian: taolian, p: "SLBCQ0126白砗磲108套链", pic: '￥325' }
			],
			pinpais: ['富安娜', '伊莱克斯', '富安娜', '富安娜', '伊莱克斯', '富安娜', '伊莱克斯', '富安娜', '伊莱克斯', '富安娜', '伊莱克斯', '伊莱克斯'],
			price: ['0-5000', '5000-10000', '10000-25000'],
			color: ['黑色', '蓝色'],
			more: '',
			more1: '',
			more2: '',
			tuijian: [
				{ guanyin: guanyin, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' },
				{ guanyin: guanyin, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' },
				{ guanyin: guanyin, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' },
				{ guanyin: guanyin, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' }
			],


			theard: ['销量', '人气', '价格'],
			lis: [
				[
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche }
				],
				[
					{ fozhu: panzi, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: panzi, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche }
				],
				[
					{ fozhu: shoulian, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: shoulian, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche }
				],
				[
					{ fozhu: shoulian, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: shoulian, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche }
				],
				[
					{ fozhu: shoulian, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
					{ fozhu: shoulian, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche }
				]
			],
			isactive: '',
			arr: [
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche },
				{ fozhu: fozhu, samllul: [fozhu1, fozhu1, fozhu1, fozhu1, fozhu1, fozhu1], p: '{{this.$constant.mainTitle}}正宗纯天然野生山龟甲手串黄金甲18mm', spa1: '￥2560.00', spa2: '￥2999.00', buy: '对比', shoucang: shoucang, gouwuche: gouwuche }
			],
			yeshu: ['1', '2', '3', '4', '5', '...'],
			isbg: '',
			iscolorur: '',
			base: [
				[{ baijian: baijian, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' }, { baijian: baijian, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' },
				{ baijian: baijian, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' }, { baijian: baijian, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' },
				{ baijian: baijian, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' }, { baijian: baijian, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' }],
				[{ baijian: yuzhuo, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' }, { baijian: yuzhuo, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' },
				{ baijian: yuzhuo, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' }, { baijian: yuzhuo, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' },
				{ baijian: yuzhuo, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' }, { baijian: yuzhuo, p: '天然A货翡翠 高档精雕墨翠自在观音28.51g', pic: '500.00', much: '971' }]
			],
      isborder: '',
      show:false,
			show1:false,
      onoff:false,
      onoff1:false,
      page: 1, //共多少条
      currentPage: 1, //当前页
      page_size: 20, //每页显示多少条数据
      fromChild: ''
		}
  },
  mounted(){
    this.show = this.$refs.brandHeight.clientHeight > 55 ? true : false;
    this.show1 = this.$refs.priceHeight.clientHeight > 55 ? true : false;
  },
	methods: {
    onChildClick (value) {
        this.fromChild = value
        if(this.fromChild == 'false') {
            location.reload();
        }
    },
    toDetail(){

    },
    open(s){
      if(s == 1){
        this.onoff = !this.onoff;
      }else{
        this.onoff1 = !this.onoff1;
      }
    },
     /*页面跳转*/
    handleCurrentChange(currentPage) {
      console.log(currentPage);
      this.currentPage = currentPage;
    },
		tab(index) {
			this.isactive = index;
			this.arr = this.lis[index]
		},
		change(index) {
			this.isbg = index
			this.iscolorur = index
		},
		cut(index) {
			this.isborder = index
			this.basebox = this.base[index]
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
.header {
  height: 46px;
  line-height: 46px;
  font-size: 12px;
  color: #636260;
  img {
    margin: 17px 7px 0 0;
  }
    .xiala {
      margin-left: 7px;
      position: relative;
      cursor: pointer;
      font-size: 12.5px;
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
.remai {
  height: 149px;
  .left {
    width: 38px;
    height: 100%;
    background: #d02629;
    text-align: center;
    padding-top: 40px;
    font-size: 14px;
    color: #fff;
  }
  .right {
    height: 100%;
    width: 1159px;
    background: #fafafa;
    margin-left: 3px;
    li {
      width: 274px;
      height: 120px;
      background: #fff;
      margin: 14px 0 0 12px;
      img {
        margin: 13px 9px 0 10px;
        float: left;
      }
      p {
        width: 128px;
        float: left;
        font-size: 12px;
        color: #555;
        cursor: pointer;
      }
      p:nth-of-type(1) {
        margin-top: 17px;
        &:hover {
          color: red;
        }
      }
      p:nth-of-type(2) {
        margin-top: 10px;
        span {
          color: #d02629;
        }
      }
      p:nth-of-type(3) {
        margin-top: 6px;
        width: 74px;
        height: 25px;
        background: #d02629;
        text-align: center;
        line-height: 25px;
        color: #fff;
      }
    }
  }
}
.choose {
  overflow: hidden;
  border: 1px solid #e5e5e5;
  margin: 10px 0;
  .g-main-n:last-child {
    border-bottom: none;
  }
  .g-main-n {
    width: 100%;
    overflow: hidden;
    padding-left: 24px;
    border-bottom: 1px dashed #f5f5f5;
    position: relative;
    .q_class_list{
      height: 55px;
      width: 90%;
      overflow: hidden;
      ul {
        li {
          // margin-right: 47px;
          line-height: 55px;
          width: 96px;
          cursor: pointer;
          a {
            color: #5c5c5c;
            font-size: 12px;
            &:hover {
              color: red;
            }
          }
        }
      }
    }
    .q_class_list.active{
      height: auto;
    }
    .g-btn{
      position: absolute;
      top: 22px;
      right: 50px;
      cursor: pointer;
       &:hover {
        color: red;
      }
    }
  }
  span {
    line-height: 55px;
    font-size: 12px;
    color: #bababa;
  }
}
.new {
  overflow: hidden;
  /*height: 300px;*/
  .left {
    width: 204px;
    .up {
      overflow: hidden;
      border: 1px solid #e5e5e5;
    }
    .down {
      overflow: hidden;
      border: 1px solid #e5e5e5;
      margin-top: 10px;
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
      height: 248px;
      width: 100%;
      cursor: pointer;
      img {
        margin: 10px 19px;
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
        .li {
          background: url(../../assets/img/x.png) no-repeat top 17px
            right 8px;
        }
        .active {
          background: #fff url(../../assets/img/x.png) no-repeat top
            17px right 8px !important;
          color: #d02629;
          height: 38px;
          transform: translateY(1px);
          -webkit-transform: translateY(1px);
        }
        .actives {
          background: #fff;
          color: #d02629;
          height: 38px;
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
      height: 2045px;
      margin-top: 20px;
      overflow: hidden;
      ul {
        .bagli {
          width: 230px;
          height: 388px;
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
            li:last-child{
              margin-right: 0;
            }
          }
          .pice {
            width: 100%;
            margin-top: 10px;
            margin-left: 5px;
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
              color: red;
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
            .g-collection{
                margin-left: 10px;
            }
            img {
              width: 17px;
              height: 17px;
            }
          }
          .car {
            margin: 0px 14px 0 0;
            width: 30px;
            height: 30px;
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
    width: 50%;
    margin: 0 auto;
  }
}
</style>