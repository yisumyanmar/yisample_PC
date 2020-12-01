<template>
  <div class="news">
    <!-- <common-header></common-header> -->
    <common-header v-on:childToParent="onChildClick"></common-header>
    <store-header :allShop="true"></store-header>
    <div class="wrapper">
        <div class="trend">
            <el-row :gutter="20">
              <el-col :span="18">
                <div class="grid-content bg-purple title">
                    <div class="tabset">
                      <input type="radio" name="tabset" id="tab1" aria-controls="all" checked>
                        <label for="tab1">全都动态</label>
                        <input type="radio" name="tabset" id="tab2" aria-controls="promo">
                        <label for="tab2">促销</label>
                        <input type="radio" name="tabset" id="tab3" aria-controls="newsProduct">
                        <label for="tab3">新品</label>
                        <input type="radio" name="tabset" id="tab4" aria-controls="shopNews">
                        <label for="tab4">店铺文章</label>
                        <div class="tab-panels ">
                            <section id="all" class="tab-panel left">
                              <div v-for="(items,index) in promo" :key="index">
                              <div v-for="item in items.goods_info" :key="item.id" class="details" >
                                <img  :src="URL+item.pic_url"  alt="">
                                  <div class="goodsinfo"  >
                                    <span>店铺推荐</span>
                                    <div class="title">{{items.title}}</div>
                                    <p style="margin-top:15px">价  格：¥{{item.price_market}}</p>
                                    <p>运  费：¥10.00</p>
                                    <el-button class="fav">收藏该宝贝</el-button>
                                  </div>
                              </div>
                              <span>2020-11-13 16:24</span> 
                              </div>
                              <div class="fange" style="border-bottom: 1px solid #b0b0b033;"></div>
                              <div v-for="(items,index) in NewsGoods" :key="index">
                              <div class="details">
                                <img src="../../assets/img/test.jpg" alt />
                                  <div class="goodsinfo">
                                    <span>店铺推荐</span>
                                    <div class="title">{{items.title}}</div>
                                    <p style="margin-top:15px">价  格：¥{{items.price_member}}</p>
                                    <p>运  费：¥10.00</p>
                                    <el-button class="fav">收藏该宝贝</el-button>
                                  </div>
                              </div>
                              <span>2020-11-13 16:24</span> 
                              </div>
                            </section> 

                            <section id="promo" class="tab-panel left" >
                              <div v-for="(items,index) in promo" :key="index" class="new" style ="padding: 10px 0px 25px 0px;">
                                <i class="el-icon-time" > 9月9日</i>
                                <div class="eve">
                                  <span class="upd" v-show="items.promation_name" style="border: 2px solid #d02629; color: #d02629;">{{items.promation_name}}</span>
                                  <count-down  class="countime" v-on:end_callback="countDown()" :currentTime="1526354100" :startTime="1526354100" :endTime="1557890100" :dayTxt="'天 '" :hourTxt="'小时 '" :minutesTxt="'分钟 '" :secondsTxt="'秒'"></count-down>
                                  <span  v-show='finish'>活动已结束！！</span>
                                </div>
                              <div v-for="item in items.goods_info" :key="item.id" class="ntitle">
                                <img  :src="URL+item.pic_url"  alt="">
                                <div class="ptitle">
                                  <p style="padding-bottom: 30px;">{{item.title}}</p>
                                  <span>￥{{item.price_market}}</span>
                                </div>
                              </div>
                              </div>
                            </section>   

                            <section id="newsProduct" class="tab-panel left" >
                              <div v-for="(items,index) in NewsGoods" :key="index" class="new"  >
                                <i class="el-icon-time"> {{items.create_time}}</i>
                                <div class="eve">
                                  <span class="upd" style="border: 2px solid #46e26e; color: #46e26e;">上新 </span>
                                  <span>上新1件商品</span>
                                </div>
                              <div class="ntitle">
                                <img src="../../assets/img/test.jpg" alt />
                                <div class="ptitle">
                                  <p style="padding-bottom: 30px;">{{items.title}}</p>
                                  <span>￥{{items.price_member}}</span>
                                </div>
                              </div>
                              </div>
                            </section>   

                            <section id="shopNews" class="tab-panel left">
                              <h4>分类</h4>
                              <div class="shop_aeticle" style="display:flex;">  
                                <p>文章分类 : </p>
                                 <!-- <span style="padding:0px 6px">ttt</span> <span style="padding:0px 6px">ttt</span> <span style="padding:0px 6px">ttt</span>  -->
                              </div>
                            </section> 
                        </div>
                         <div class="fange"></div>
                        <div class="pagination">
                          <button>首页</button>
                            <el-pagination 
                              style="display:flex; margin: 20px 5px 0px 5px;"
                              prev-text="上一页"
                              next-text="下一页"
                              background layout=" total,prev, pager, next,jumper"
                              :total="page">
                            </el-pagination>
                          <button>末页</button> 
                        </div>
                    </div>
                </div>  
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple right-up">
                  <div class="shop">
                    <img src="../../assets/img/shop.jpg" alt />
                    <div>
                      <p style="font-weight: 600;">我的自营2</p>
                      <p>已收藏 : &nbsp;<span style="color: #ED5564">24</span></p>
                    </div>
                  </div>
                 <el-button class="favshop" icon="el-icon-plus">收藏店铺</el-button>
                </div>
                
                <div class="grid-content bg-purple right-dn">
                    <div class="user">
                      最新收藏用户
                    </div>
                    <div class="userImg" style="padding: 0px 5px">
                      <img  class="Uimg" src="../../assets/img/avatar.jpg" alt />
                      <img  class="Uimg" src="../../assets/img/avatar.jpg" alt />
                      <img  class="Uimg" src="../../assets/img/avatar.jpg" alt />
                      <img  class="Uimg" src="../../assets/img/avatar.jpg" alt />
                      <img  class="Uimg" src="../../assets/img/avatar.jpg" alt />
                      <img  class="Uimg" src="../../assets/img/avatar.jpg" alt />
                      <img  class="Uimg" src="../../assets/img/avatar.jpg" alt />
                      <img  class="Uimg" src="../../assets/img/avatar.jpg" alt />
                      <img  class="Uimg" src="../../assets/img/avatar.jpg" alt />
                      <img  class="Uimg" src="../../assets/img/avatar.jpg" alt />
                  </div>
                </div>
              </el-col> 
            </el-row>
        </div>
    </div>
    <foot-com></foot-com>
    <!--标题完全显示框-->   
  </div>
</template>

<script>
  import CountDown from "vue2-countdown";
  import downjiantou from '@/assets/img/downjiantou.jpg'
  import chahu from '@/assets/img/chahu.jpg'
  import storefuzhu from '@/assets/img/mila.jpg'

  export default {
    data() {
      return {
          page: 0, //共多少条
          currentPage: 1, //当前页
          page_size: 20, //每页显示多少条数据
          NewsGoods:'',
          finish: "",
          acticityGoods:'',
          promo:true,
      }
    },
    created(){  
      this.newProduct();
      this.promotion();
    },
    components: {
      CountDown
    },
    mounted() { 
    },
    methods:{
      countDown() {
      this.finish = true;
      },
      newProduct(){
            this.HTTP(this.$httpConfig.storeDynamic,{id:2},"post").then(res => {
              this.NewsGoods = res.data.data.allNewsGoods;
              this.acticityGoods = res.data.data.acticityGoods;
            })
            .catch(e => {
                console.log(e);
            });
        }, 
      promotion(){
        this.HTTP(this.$httpConfig.getPromoProductByStore,{store_id : 2},"post").then(res => {
              this.promo = res.data.data;
            })
            .catch(e => {
                console.log(e);
            });
      } 
    }
  }
</script>

<style lang="less" scoped>
.wrapper{
    background-color: #fff;
    margin: 0 auto;
    .trend{
        width: 1160px;
        padding: 20px 20px 0px 20px;
        margin: 10px auto;
        overflow: hidden;
        background-color: #EEE;
        .title{
           
          .left{
            border-top: solid 1px #DDD ;
            font-size: 12px;
            padding:10px 20px;
            h4{
              padding-top: 10px;
            }
            .details{
              background-color: #FBFBFB;
              padding: 9px;
              border: solid 1px #F5F5F5;
              margin-top: 15px;
              margin-bottom: 5px;
              img{
                max-width: 120px;
                max-height: 120px;
              }
              .goodsinfo{
                display: inline;
                position: absolute;
                span{
                  background: #B22D00;
                  color: #FFF;
                  margin-left: 10px;
                  border: 1px solid #660000;
                  padding: 0px 3px;
                  border-radius: 2px;
                }
                .title{
                  display: inline;
                  padding: 10px;
                  font-size: 12px;
                  color: #020202;
                }
                p{
                  padding:5px 10px;
                }
                .fav{
                  border-radius:0px!important;
                  padding: 10px;
                  margin: 5px 10px;
                  box-shadow: 2px 2px 0 rgba(204,204,204,0.5);
                  border: solid 1px #CCC;
                  font-size: 11px;
                  color: black;
                }
              }
            }
            span{
              color:#121212;
            } 
            .new{
              display: grid;
              border-bottom: 1px solid #3333;
              new:last-child{
                border:0px;
              }
              .eve{
                margin: 10px 0px 15px -4px;
                display:inline-flex;
                span{
                  padding: 11px 5px 5px 5px;
                }
                .upd{
                  padding: 3px 7px 5px 12px;
                  width: 50px;
                  height: 23px;
                  border-radius: 15px;
                  margin: 5px;
                }
                .countime{
                  width:150px;
                  padding-top: 11px;
                }
              }
            .ntitle{
              img{
                max-width: 120px;
                max-height: 120px;
              }
              .ptitle{
                padding-left: 11px;
                position: absolute;
                display: inline;
              }
            }
          }
        }
          .fange{
              margin-top:30px;
              margin-bottom: 10px;;

            }
            .pagination {
              padding: 7px 0px 25px 0px;
              border-top: solid 1px #DDD ;
              button{
                border-radius: 2px;
                padding: 5px 5px;
                background-color: #f4f4f5;
                color: #606266;
                margin-top: 20px;
                width: 50px;
                height: 28px;
                cursor: pointer;
              }
            }
        }
          .el-link{
            padding:15px 20px;         
          }
    }
  .right-up{
    padding: 10px;
    .shop{
      display: inline-flex;
      img{
        max-width: 80px;
        max-height: 80px;
      }
      p{
        padding: 0px 10px;
        display: flex;
        flex-flow: wrap;
        margin-bottom: 15px;
      }
     
    }
    .favshop{
    border-radius: 0px;
    background: #5BB75B;
    color:#fff;
    margin-left: 55px;
    width: 50%;
    padding: 10px 13px 10px 10px;
    margin-top: 6px;
    }
  } 
  .right-dn{
    margin-top:10px;
    .user{
      padding: 10px 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #DDD;
    }
    .Uimg{
      max-width: 49px;
      max-height: 49px;
      margin: 0px 1px 10px 1px;
    }
  }
}
</style>
<style>
    .tabset > input[type="radio"] {
      position: absolute;
      left: -200vw;
    }
    .tabset .tab-panel {
      display: none;
    }
    .tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
    .tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
    .tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
    .tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
    .tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
    .tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
      display: block;
    }
    .tabset > label {
    display: inline-block;
    padding: 15px 15px 25px;
    border-bottom: 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 13px;
    }
  .tabset > label::after {
    content: "";
    /* position: absolute;
    left: 15px;
    bottom: 10px;
    width: 22px;
    height: 4px;
    background: #8d8d8d; */
  }
  .tabset > label:hover,
  .tabset > input:focus + label {
    color:  #ED5564;

  }
  .tabset > label:hover::after,
  .tabset > input:focus + label::after,
  .tabset > input:checked + label::after {
    background: #06c;
  }
  .tabset > input:checked + label {
    border-color: #ccc;
    margin-bottom: -1px;
  }
  .tab-panel {
    padding: 30px 0;
  }
  .tabset {
    max-width: 65em;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #ffffff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>