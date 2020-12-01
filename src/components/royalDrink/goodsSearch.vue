<template>
  <div class="yuyin">
    <common-header v-on:childToParent="onChildClick"></common-header>
    <head-com></head-com>
    <div class="center">
      <div class="header">
        <img class="l" src="../../assets/img/fangzi.jpg" />
        <span class="shouye"><router-link class="to-link" to="home">首页</router-link>></span>
        <span class="xiala">{{$route.query.title}} >{{this.class_name}}</span>
      </div>

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

        <div class="g-main-n l">
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

        <div class="g-main-n l">
          <span class="l leftbg">分 &nbsp;类：</span>
          <div class="q_class_list l" :class="{active:onoff2}">
            <ul class="l" ref="priceHeight">
              <li class="l" v-for="(item,index) in class_type" :key="index " @click="getClassName(item.id,item.class_name)"
              :class="classType.type === item.id ? 'active' : '' ">
                {{item.class_name}}
              </li>
            </ul>
          </div>
          <i @click="open(2)" v-if="show1" :class="{'el-icon-arrow-up':onoff1}" class="el-icon-arrow-down g-btn"></i>
        </div>


      <div class="attr" v-for="(item,index) in attr" :key="index" :class="{active:onoff1}">
          <div class="attributes">
            <div class="name" @click="chooseAttr1(item,index)"><p class="leftbg">{{item.attr_name}} &nbsp;:&nbsp;</p></div>
            <div class="values"  v-for="(val,index1) in item.attr_values " :key="index1" @click="chooseAttr(val,index1)"
            :class="attributes.attrIndex === val ? 'active' : '' " > {{val}}
            </div>
          </div>
      </div>
    </div>

      <div class="new">
        <div class="right">
          <div class="top">
            <ul class="theard l">
              <li>排列方式：</li>
              <li class="li active">销量</li>
            </ul>
          </div>
          <div class="bottom">
            <ul v-if="list.length != 0" class="l">
              <li class="bagli l" v-for='(li,i) in list' :key="i">
<!--                <img class="bag" :src="URL + li.pic_url" @click="toDetail(li.id)" />-->
<!--                <p @click="toDetail(li.id)" class="l">{{li.title}}</p>-->
                <!-- <img class="bag" :src="URL + li.pic_url" @click="toDetail(li.p_id)" /> -->
                <img class="bag" :src="li.oneIMg" @click="toDetail(li.id)"/>
                <img v-if="li.goods_type_pic_url" :src="URL + li.goods_type_pic_url" class="cati">
                <img v-else class="cati">
                <p @click="toDetail(li.p_id)" class="l">{{li.title}}</p>
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
                   <span v-if="li.collection == 0" @click.stop="toCollect(li.id,i)" class="g-collection">
                            <i class="l like"></i>
                            <!--<img class="l" src="../../assets/img/collect_gooods.png" />-->
                            <span>收藏</span>
                  </span>
                  <span v-else class="g-collection" @click.stop="toCollect(li.id,i)">
                            <i class="l like cancel"></i>
                            <!--<img class="l" src="../../assets/img/collected_goods.png" />-->
                            <span>已收藏</span>
                  </span>
                </div>
                <i class="r car" @click.stop="addCar(li.id, li.price_member, li.store_id)"></i>

                <p @click="goToStore(li.store_id)" class="shop-show" v-if="li.shop_name">
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
            <div v-if="list.length === 0" class="no-data">暂无更多</div>
          </div>
        </div>
      </div>
      <div class="fenye" v-if="list.length != 0">
        <div class="box2">
          <el-pagination @current-change="handleCurrentChange" background layout="total,prev, pager, next,jumper" :page-size="page_size" :total="parseInt(page)">
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
  import guanyin from '@/assets/img/guanyin.jpg'
  import errorIMG from '@/assets/img/picdingwei.png'
  import fozhu1 from '@/assets/img/fozhu1.jpg'
  import fozhu from '@/assets/img/fozhu.jpg'
  import shoucang from '@/assets/img/shoucang.jpg'
  import gouwuche from '@/assets/img/gouwuche.jpg'
  import panzi from '@/assets/img/panzi.jpg'
  import shoulian from '@/assets/img/shoulian.jpg'
  import baijian from '@/assets/img/baijian.jpg'
  import yuzhuo from '@/assets/img/yuzhuo.jpg'

  export default {
    data() {
      return {
        selfSupportChecked: true,
        lis: [],
        isactive: '',
        yeshu: ['1', '2', '3', '4', '5', '...'],
        isbg: '',
        iscolorur: '',
        basebox: [],
        base: [],
        params: {
          class_id: this.$route.query.class_id,
          class_name: this.$route.query.class_name,
          brand_id: undefined,
          price: undefined,
          values:undefined,
          sort: undefined,
          // page: 1,
          // price: '0,1000',
          // sort: 1
        },
        selectGoods: {
        brand: [],
        price: ["0-500", "500-1000", "1000-2500"],
        color: ["黑色", "蓝色"],
        theard: ["销量", "人气", "价格"]
      },
        selected: {
        brandIndex: null,
        priceIndex: null,
        colorIndex: null,
        theard: [false, false, false]
      },
        city: [],
        list: "",
        hotCommodities: '',
        show: false,
        show1: false,
        onoff: false,
        onoff1: false,
        onoff2: false,
        page: 0, //共多少条
        currentPage: 1, //当前页
        page_size: 10, //每页显示多少条数据
        fromChild: '',
        attr:'',
        attrIndex:'',
        class_type:'',
        class_name:'',
        classType:{
          type:null,
        },
        attributes:{
          attrIndex:null,
        }
      }
    },
    created() {
      this.getList();
      this.getBrandList();
      console.log(this.$route)
      if (this.$route.query.types === 'hotSearch') {
        this.getHotSearchList({
          p: this.currentPage,
          ...this.$route.query
        })
      } else {
        this.getGoodsList({
          page: this.currentPage,
          ...this.$route.query
        });
      }
    },
    watch: {
      '$route' (to, from) { //监听路由是否变化
        if (this.$route.query.title) {
          this.getGoodsList({
            page: this.currentPage,
            ...this.$route.query
          }); //重新请求
          if (this.$route.query.types === 'hotSearch') {
            this.getHotSearchList({
              p: this.currentPage,
              ...this.$route.query
            }); //重新请求
          }

        }
      }
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
      
      /*页面跳转*/
      handleCurrentChange(currentPage) {
        console.log(currentPage);
        this.currentPage = currentPage;
        this.getGoodsList({
          page: this.currentPage,
          ...this.$route.query
        });
      },
      // 热门搜索
      getHotSearchList(query) {
        this.HTTP(this.$httpConfig.getHotSearchList, query, 'post').then((res) => {
          this.list = res.data.data.data;
          this.page = res.data.data.page;
          this.page_size = res.data.data.page_size;
        }).catch((e)=>{
          console.log(e)
        })
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
    getClassName(id,class_name) {
      this.class_id = id;
      this.classType.type = id;
      this.class_name =class_name;
      this.params.class_id = id;
      this.list = [];
      this.getList();
      this.getBrandList();
    },
      selectBrand(brandId, index,class_id) {
      this.selected.brandIndex = index;
      this.params.brand_id = ~~brandId;
      this.params.id = class_id;
      this.params.page = 1;
      this.currentPage = 1;
      this.list = [];
      this.getList();
      },
      getList() {
      this.HTTP(this.$httpConfig.getGoodsList, this.params, "post")
        .then(res => {
          // console.log(object);
          this.list = res.data.data.list;
          console.log(this.list, "list");
          for (var i in this.list) {
            // 如果默认一张图片也没有就使用商品默认图片
            if (this.list[i].pic_url.length == 0) {
              this.list[i].oneIMg = errorIMG;
              this.list[i].pic_url.push({
                pic_url: errorIMG
              });
            } else {
              this.list[i].oneIMg = this.URL + this.list[i].pic_url[0].pic_url;
              for (var j in this.list[i].pic_url) {
                this.list[i].pic_url[j].pic_url =
                  this.URL + this.list[i].pic_url[j].pic_url;
              }
            }
            this.list[i].selectedIndex = 0;
          }
          this.page = Number(res.data.data.count);
        })
        .catch(e => {
          console.log(e);
        });
    },
      getBrandList() {
      this.HTTP(this.$httpConfig.getBrandList, {class_id:this.$route.query.class_id,title:this.$route.query.title,class_id:this.class_id,}, "post").then(res => {
        if (res.data.status) this.selectGoods.brand = res.data.data.brand;
        this.attr = res.data.data.goodsType;
        this.class_type = res.data.data.classification;
        });
      },

      // 获取列表
      getGoodsList(query) {
        let title = query.title,type = query.type,page = query.page;
        this.HTTP(this.$httpConfig.SearchIndex+'/p/'+page,{
          title:title,
          type:type
        }, 'post').then((res) => {
          this.list = res.data.data.data;
          this.page = res.data.data.page;
          this.page_size = res.data.data.page_size;
          this.$message(`${res.data.message}`);
        }).catch((e)=>{
          console.log(e);
          this.$message(`${e.data.message}`);
          this.list = '';
          this.page = 0;
          this.page_size = 10;
        })
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
            this.list[index].collection = 1;
          } else {
            this.list[index].collection = 0;
          }
        }).catch((e)=>{
          console.log(e)
        })
      },
      // 去详情页
      toDetail(id) {
        window.open(window.location.origin + '/shopsn_product?id=' + id)
      },
      // 加入购物车
      addCar(id, price, storeId) {
        var params = {
          goods_id: id,
          goods_num: 1,
          price_new: price,
          store_id: storeId
        }
        this.HTTP(this.$httpConfig.addGoodToCart, params, 'post').then((res) => {
          this.$confirm('', '已成功加入购物车', {
            confirmButtonText: '查看购物车',
            cancelButtonText: '继续购物',
            type: 'success',
            center: true,
            lockScroll: false,
            closeOnClickModal: false,
            confirmButtonClass: 'to-shopping-cart',
            cancelButtonClass: 'continue-shopping'
          }).then(() => {
            window.open(window.location.origin + '/buyCar');
          }).catch(() => {

          });
        })
      },
      // 比较
      compare(id) {
        console.log('暂不做')
      },

    }
  }
</script>
<style lang="less" scoped>
 .el-dropdown{
 width: 223px !important; 
}
.el-dropdown-menu {
    width: 223px !important;
    position: absolute !important;
    margin: 5px 11px 0 -160px !important;
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
<style>
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
    padding: 13px 30px!important;
  }

  .continue-shopping:hover {
    color: #606266;
    border: 1px solid #dcdfe6;
    background-color: #fff;
  }

  .to-shopping-cart {
    background-color: #d02629!important;
    border: 1px solid #d02629!important;
    padding: 13px 26px!important;
  }

  .to-shopping-cart:hover {
    background-color: #d02629!important;
    color: #fff!important;
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
    .shouye{
      a{
       color: #a7a7a7;
      }
    }
    .to-link {
				transition: color .2s cubic-bezier(.645, .045, .355, 1);
			}
			.to-link:hover {
				color: #303133;
				transition: color .2s cubic-bezier(.645, .045, .355, 1);
			}
    img {
      margin: 17px 7px 0 0;
    }
    .xiala {
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
    .left {
      width: 204px;
      .up {
        overflow: hidden;
        border: 1px solid #e5e5e5;
      }
      .down {
        width: 100%;
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
          .li {
            background: url(../../assets/img/xiajiantou.png) no-repeat top 17px right 8px;
          }
          .active {
            background: #fff url(../../assets/img/x.png) no-repeat top 17px right 8px !important;
            // transform: translateY(1px);
            // -webkit-transform: translateY(1px);
            color: #d02629;
            height: 38px;
          }
          .actives {
            background: #fff;
            transform: translateY(1px);
            -webkit-transform: translateY(1px);
            color: #d02629;
            height: 38px;
          }
        }
      }
      .bottom {
        margin-top: 20px;
        overflow: hidden;
        min-height: 375px;
        ul {
          .bagli {
            width: 223px;
            height: 420px;
            border: 1px solid #f1f1f1;
            margin-bottom: 15px;
            margin-right: 20px;
            .cati{
              padding-right: 13px;
              margin: -406px 0px 0px 175px;
            }
            .bag {
              margin: 5px;
              width: 211px;
              height: 211px;
              cursor: pointer;
            }
            .pice {
              width: 100%;
              margin-top: 10px;
              padding-left: 5px;
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
              width: 201px;
              height: 40px;
              line-height: 20px;
              font-size: 12px;
              color: #5f5f5f;
              margin: 0 10px;
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
              .g-collection {
                margin-left: 10px;
                display: flex;
                align-items: center;

                .like {
                  width: 25px;
                  height: 25px;
                  background: url(../../assets/img/heat_null.png) no-repeat;
                  background-size: 100% 100%;
                  margin-right: 4px;
                }

                .cancel {
                  background: url(../../assets/img/heat_fill.png) no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
            .car {
              margin: 7px 14px 0 0;
              width: 30px;
              cursor: pointer;
              height: 30px;
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
          .bagli:nth-child(5n) {
            margin-right: 0;
          }
        }
        .no-data {
          text-align: center;
          line-height: 375px;
        }
      }
    }
  }

  .fenye {
    width: 100%;
    overflow: hidden;
    text-align: right;
  }
</style>
