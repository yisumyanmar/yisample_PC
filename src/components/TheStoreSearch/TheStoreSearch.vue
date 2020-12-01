<template>
  <div class="list">
    <!-- <common-header></common-header> -->
    <common-header v-on:childToParent="onChildClick"></common-header>
    <store-header :thestoresearch='tempstoresearch' :flag="!flag"
          @update-search="updateSearch"></store-header>
    <div class="center header">
      <div class="left">
        <div class="fenlei l">
          <p>商品分类</p>
          <ul class="outer">
            <li class="outerli" v-if="outers.level == 0" v-for="(outers,index) in storeClassArr" :key="outers.id"
                @click="block(index,outers)" :class="{active:isactive==outers.id}">
              <span>{{outers.class_name}}</span>
              <ul class="core" v-if="fun==outers.id">
                <li class="coreli" v-if="cores.level==1 && cores.f_id == outers.id" v-for="(cores) in storeClassArr"
                    :class="{activeli1: cores.id == class_two}" @click.stop="selecThreeClass(cores.id,1)"
                    :key="cores.id">
                  <span>>{{cores.class_name}}</span>
                  <ul class="core" v-if="fun==outers.id">
                    <li class="coreli2" v-if="core.level==2 && core.f_id == cores.id" v-for="(core) in storeClassArr"
                        :key="core.id" @click.stop="selecThreeClass(core.id,2)">
                      <span :class="{active1i2: core.id == class_three }">{{core.class_name}}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="paihang l">
          <p class="top">热销排行</p>
          <ul class="l">
            <li v-for="(paixus,index) in storeTopSellingList" :key="index" @click="zxq(paixus.id)">
              <img class="l" :src="URL+paixus.pic_url">
              <p class="l">{{paixus.title}}</p>
              <p class="l">{{paixus.price_member}}</p>
              <p class="l">
                售出：
                <span>{{paixus.sales_sum}}件</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="nodata" class="right nodatacss">
              暂无更多
      </div>
      <div v-else class="right">
        <div class="l top">
          <ul class="theard l">
            <li class="l">排列方式：</li>
            <li class="l" @click="tab(3)" :class="{colors:iscolor == 3}">默认</li>
            <li class="l li" :key="index" v-for="(theards,index) in theard" @click="tab(index)"
                :class="{color:iscolor == index,shangcolor: isFlag && iscolor == index}">{{theards}}
            </li>
          </ul>
          <div class="r next">
            <span class="button">上一页</span>
            <span class="button">下一页</span>
          </div>
          <div class="r zongji">共
            <span>{{listcount}}</span>个商品
          </div>
        </div>
        
        <div class="bottom l">
            <ul class="bottomul l">
              <li v-for="(item,index) in Searchlist" :key="index" class="l pd">
                <img v-if="imgFlag" class="storefuzhu" :src="URL+item.img" @click="zxq(item.goods_id)">
                <img v-else class="storefuzhu" :src="URL+item.pic_url" @click="zxq(item.goods_id)">

                <p @click="zxq(item.id)">{{item.title}}</p>
                <div class="price">
                  <div>
                    <span class="pic1">{{item.price_member}}</span>
                    <span class="pic2">{{item.price_member}}</span>
                  </div>
                  <div>
                    <span>已售{{item.sales_sum}}件</span>
                  </div>
                </div>
                <div class="collection">
                  <div @click="toCollection(item.goods_id,index)">
                    <i :class="['l like', item.collection===1 ? 'cancel' : '']"></i>
                    <span>{{item.collection===1 ? '已收藏' : '收藏'}}</span>
                  </div>
                  <!--<img class="r bycar" @click="getaddCar(item)" src="../../assets/img/bycar.jpg">-->
                </div>
              </li>
            </ul>
          
          <div class="r fenye">
            <div class="Paging_r">
              <el-pagination
                background
                layout="prev, pager, next,jumper"
                :page-size="page_size"
                @current-change="handleCurrentChange"
                :total="1"
              ></el-pagination>
              <!-- remark total="page" -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot-com></foot-com>
  </div>
</template>

<script>
  import downjiantou from "@/assets/img/downjiantou.jpg";
  import chahu from "@/assets/img/chahu.jpg";
  import storefuzhu from "@/assets/img/mila.jpg";

  export default {
    data() {
      return {
        tempstoresearch: 'helloVue',
        storeID: 0,
        storeGoodsAllList: [], //店铺商品列表
        storeTopSellingList: [], //店铺热销排行
        outer: ["皇家御饮", "御贡赠品", "滋补养身"],
        flag:true,
        core: [
          "绿茶",
          "红茶",
          "乌龙茶",
          "花茶",
          "绿茶",
          "红茶",
          "乌龙茶",
          "花茶"
        ],
        fun: "",
        isactive: "",
        class_one: '',
        storeNav: [],
        Cflag: false,
        class_three:'',
        theard: ["销量", "人气", "价格"],
       iscolor: 3,
       sort: '',
       isFlag: false,
        yeshu: ["1", "2", "3", "4", "5"],
        isbg: "",
        storeClassArr: [],

        page_size: 0, //每页显示几个
        page: 0, //总页数
        currentPage: 1, //当前页
        goodsLength: 0,
        listcount:0,
        TheStoreSearch: {
          id: this.$route.query.id, //传来的商铺id
          keyword: this.$route.query.keyword, //搜索内容
          minMoney: this.$route.query.minMoney, //最小价格
          maxMoney: this.$route.query.maxMoney, //最大价格
          type: this.$route.query.type
        },
        Searchlist: [],
        getCollore: [],
        imgFlag: false,
        fromChild: '',
        childDate: '',
        nodata: ''
      };
    },
    mounted() {
      this.storeID = this.$route.query.id;
      //获取全部宝贝的分类
      this.getStoreClass();
      //店铺商品列表
      this.getStoreGoodsAllFun();
      //店铺热销排行
      this.getStoreTopSellingFun();

      this.getStoreNav();
      
    },
    methods: {
      updateSearch(e) {
          this.childDate = JSON.stringify(e)
          this.getTheStoreSearch();
      },
      onChildClick (value) {
				this.fromChild = value
				if(this.fromChild == 'false') {
					location.reload();
				}
      },
      
      //跳转详情页
      zxq(id) {
        this.$router.push({name: "shopsn_product", query: {id: id}});
      },
      // 获取菜单导航
      getStoreNav() {
        this.HTTP(this.$httpConfig.getStoreNav, {id: this.storeID}, 'post').then((res) => {
          var list = res.data.data;
          for (var i in list) {
            this.storeNav.push(list[i]);
          }
          this.storeNav.splice(9, this.storeNav.length - 9);
        }).catch(() => {

        })
      },
      selecThreeClass(id) {
        this.class_three = id;
        this.currentPage = 1;
        this.Searchlist = [];
        this.imgFlag = true;
        this.getStoreGoodsAllFun1();
      },
      /*
        type 类型 推荐为1 爆品为2
        id  商品id
        index 下标
        totalCollection 需要改变的数组
      */
      toCollection(id, index) {
        this.HTTP(this.$httpConfig.setCollectionGoods, {
          goods_id: id
        }, 'post', false).then(res => {
          if (res.data.status == 10001) {
            this.$router.push("/passwordLogin");
            return
          }
          if(this.Searchlist[index].collection == 0){
            this.$set(this.Searchlist[index],'collection',1)
            alert("收藏成功");
          }else {
            this.$set(this.Searchlist[index],'collection',0)
            alert("取消收藏");
          }
         // res.data.message === '收藏成功' ? this.$set(totalCollection, index, 1) : this.$set(totalCollection, index, 0)
        })
      },
      //收藏
      getcollection(totalCollection, id, index) {
        this.HTTP(this.$httpConfig.setCollectionGoods, {
          goods_id: id
        }, 'post', false).then(res => {
          console.log(res)
          res.data.message === '收藏成功' ? this.$set(totalCollection, index, 1) : this.$set(totalCollection, index, 0)
        })
      },
      // 加入购物车
      getaddCar(item) {
        var params = {
          goods_id: item.goods_id, //商品id
          goods_num: 1,
          price_new: item.price_member,
          store_id: item.store_id //店铺id
        };
        this.HTTP(this.$httpConfig.addGoodToCart, params, "post", false).then(
          res => {
            this.$confirm("", "已成功加入购物车", {
              confirmButtonText: "查看购物车",
              cancelButtonText: "继续购物",
              type: "success",
              center: true,
              lockScroll: false,
              closeOnClickModal: false,
              confirmButtonClass: "to-shopping-cart",
              cancelButtonClass: "continue-shopping"
            })
              .then(() => {
                window.open(window.location.origin + "/buyCar");
              })
              .catch(() => {
              });
          }
        );
      },
      /*页面跳转*/
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage;
        this.getStoreGoodsAllFun();
      },
      block(index,item) {
        if(this.isactive == item.id){
          this.isactive = '';
          this.fun = ''
          return
        }
        this.fun = item.id;
        this.isactive = item.id;
        console.log(this.fun)
        console.log(this.isactive)
      },
      // tab(index) {
      //   this.iscolor = index;
      //   this.arr = this.lis[index];
      // },
       tab(index) {
        this.iscolor = index;
        switch (index) {
          case 0 :
            if (index == this.iscolor) {
              if (this.sort == 1) {
                this.sort = 2;
                this.isFlag = true;
              } else {
                this.sort = 1;
                this.isFlag = false;
              }
            } else {
              this.sort = 1;
              this.isFlag = false;
            }
            break;
          case 1 :
            if (index == this.iscolor) {
              if (this.sort == 5) {
                this.sort = 6;
                this.isFlag = true;
              } else {
                this.sort = 5;
                this.isFlag = false;
              }
            } else {
              this.sort = 5;
              this.isFlag = false;
            }
            break;
          case 2 :
            if (index == this.iscolor) {
              if (this.sort == 3) {
                this.sort = 4;
                this.isFlag = true;
              } else {
                this.sort = 3;
                this.isFlag = false;
              }
            } else {
              this.sort = 3;
              this.isFlag = false;
            }
            break;
          case 3 :
            this.sort = '';
            this.isFlag = false;
            break;
        }
        this.currentPage = 1;
        this.getTheStoreSearch();
      },
      color(index) {
        this.isbg = index;
      },
      // 获取店铺“全部分类”内容
      getStoreClass() {
        this.HTTP(
          this.$httpConfig.storeClass,
          {store_id: this.storeID},
          "post"
        ).then(res => {
          var list = res.data.data;
          for (var i in list) {
            this.storeClassArr.push(list[i]);
          }
        }).catch(() => {
        });
      },
      //店铺商品列表接口
      getStoreGoodsAllFun() {
        this.HTTP(
          this.$httpConfig.getStoreGoodsAll,
          {id: this.storeID, page: this.currentPage},
          "post"
        ).then(res => {
          this.goodsLength = res.data.data.count;
          this.storeGoodsAllList = res.data.data.data;
          this.page_size = 16;
          this.page = Number(res.data.data.count);
          window.scrollTo(0, 255);
        }).catch(() => {
        });
      },
      //店铺热销排行接口
      getStoreTopSellingFun() {
        this.HTTP(
          this.$httpConfig.getStoreTopSelling,
          {id: this.storeID},
          "post"
        ).then(res => {
          var list = res.data.data;
          for (var i in list) {
            this.storeTopSellingList.push(list[i]);
          }
        }).catch(() => {
        });
      },
      getStoreGoodsAllFun1() {
        this.HTTP(this.$httpConfig.getStoreGoodsAll, {
          id: this.storeID,
          store_class_three:this.class_three,
          page: this.currentPage
        }, 'post').then((res) => {
          this.Searchlist = res.data.data.data;
          window.scrollTo(0, 255);
        })
      },
      //搜索结果显示
      getTheStoreSearch() {
        if (this.TheStoreSearch.type == 0) {
          if(this.childDate) {
              let tempid = JSON.parse(this.childDate)
          this.HTTP(
            this.$httpConfig.getTheStoreSearch,
            {
              store_id: tempid.id,
              left: 0,
              reight: 500,
              title: tempid.search_content,
              p: this.currentPage,
              class_one: '',
              sort: this.sort,
            },
            "post"
          ).then(res => {
            this.Searchlist = res.data.data.data;
            this.listcount = res.data.data.count;
          }).catch((e) => {
            console.log(e);
            this.$confirm('暂无商品', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              closeOnClickModal: false,
              lockScroll: false,
              center: true
            }).then(() => {
            }).catch(() => {
            });
          });
        }else{
           this.HTTP(
            this.$httpConfig.getTheStoreSearch,
            {
              store_id: this.TheStoreSearch.id,
              left: this.TheStoreSearch.minMoney,
              reight: this.TheStoreSearch.maxMoney,
              title: this.TheStoreSearch.keyword,
              p: this.currentPage,
              class_one: '',
              sort: this.sort,
            },
            "post"
          ).then(res => {
            this.Searchlist = res.data.data.data;
            this.listcount = res.data.data.count;
          }).catch((e) => {
            console.log(e);
            this.$confirm('暂无商品', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              closeOnClickModal: false,
              lockScroll: false,
              center: true
            }).then(() => {
            }).catch(() => {
            });
          });
        }
        } else {
            if(this.childDate) {
                let tempid = JSON.parse(this.childDate)
                this.HTTP(
                  this.$httpConfig.getGoodsInStore,
                  {
                    store_id: tempid.id,
                    title: tempid.search_content,
                    sort: this.sort
                  },
                  "post"
                ).then((res) => {
                  this.Searchlist = res.data.data.data
                  this.listcount = res.data.data.count;
                  this.nodata = ''
                }).catch((e) => {
                  this.nodata = JSON.stringify(e.data.message)
                  // alert(this.nodata)
                  console.log("error "+ JSON.stringify(e.data.message))
                  // this.$router.push({name: "goodsSearch", query: {id: id}});
                })
            } else {
                this.HTTP(
                  this.$httpConfig.getGoodsInStore,
                  {
                    store_id: this.$route.query.id,
                    title: this.$route.query.search_content,
                    sort: this.sort
                  },
                  "post"
                ).then((res) => {
                  this.Searchlist = res.data.data.data
                  this.listcount = res.data.data.count;
                  this.nodata = ''
                }).catch((e) => {
                  this.nodata = JSON.stringify(e.data.message)
                  // alert(this.nodata)
                  console.log("error "+ JSON.stringify(e.data.message))
                })
            }
            
        }
      }
    },
    created() {
      this.getTheStoreSearch();
    }
    
  };
</script>

<style lang="less" scoped>
  .collection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;

    > div {
      display: flex;
      align-items: center;
    }

    .like {
      width: 24px;
      height: 24px;
      background: url(../../assets/img/heat_null.png) no-repeat;
      background-size: 100% 100%;
      margin-right: 5px;
    }

    .cancel {
      width: 24px;
      height: 24px;
      background: url(../../assets/img/heat_fill.png) no-repeat;
      background-size: 100% 100%;
    }
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
    margin-top: 11px;
    overflow: hidden;
  }

  .left {
    float: left;
    width: 204px;

    .fenlei {
      overflow: hidden;
      width: 204px;
      /*height: 300px;*/
      border: 1px solid #e5e5e5;

      p {
        line-height: 40px;
        background: #f9f9f9;
        font-size: 14px;
        color: #555;
        padding-left: 11px;
      }

      .outer {
        margin-top: 16px;
        margin-bottom: 20px;
        .outerli {
          cursor: pointer;
          line-height: 30px;
          background: url(../../assets/img/jiahao.jpg) no-repeat top 8px left 29px;
          font-size: 12px;
          color: #6b6b6b;
          span {
            padding-left: 53px;
          }
          .coreli {
            font-size: 12px;
            color: #6b6b6b;
            &:hover {
              background: #f5f5f5;
            }
            .coreli2 {
              margin-left: 20px;
              font-size: 12px;
              color: #666;
              &:hover {
                background: #ddd;
              }
              .active1i2{
                color: #D02629;
              }
            }
          }
        }
        .active {
          background: url(../../assets/img/jianhao.jpg) no-repeat top 8px left
          29px;
        }
      }
    }

    .paihang {
      overflow: hidden;
      width: 204px;
      /*height: 300px;*/
      margin-top: 12px;
      border: 1px solid #e5e5e5;

      .top {
        line-height: 40px;
        background: #f9f9f9;
        font-size: 14px;
        color: #555;
        padding-left: 11px;
      }

      li {
        height: 69px;
        border-bottom: 1px solid #e8e8e8;
        float: left;
        margin: 0 5px;
        cursor: pointer;

        img {
          margin-top: 10px;
          width: 50px;
          height: 50px;
        }

        p {
          width: 130px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 12px;
          margin-left: 10px;
          color: #515151;
        }

        span {
          color: #d02629;
        }
      }

      p:nth-of-type(1) {
        margin-top: 10px;

        &:hover {
          color: red;
        }

        p:nth-of-type(2) {
          color: #c11918;
        }
      }

      li:last-child {
        margin-bottom: 40px;
      }
    }
  }

  .nodatacss {
    display: flex;
    height: 800px;
    align-items: center;
    justify-content: center;
  }
  .right {
    width: 982px;
    float: right;

    .top {
      width: 100%;
      line-height: 40px;
      background: #f9f9f9;
      border: 1px solid #e3e3e3;
      height: 40px;

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
          background: url(../../assets/img/x.png) no-repeat top 17px right 8px;
        }

        .color {
          background: #fff url(../../assets/img/x.png) no-repeat top 17px right 8px !important;
          -webkit-transform: translateY(1px);
          color: #d02629;
          height: 38px;
        }

        .colors {
          background: #fff;
          -webkit-transform: translateY(1px);
          color: #d02629;
          height: 38px;
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

      .zongji {
        font-size: 12px;
        color: #979797;
        margin-right: 15px;

        span {
          color: #d02629;
        }
      }
    }

    .bottom {
      .bottomul {
        height: 1456px;
        width: 100%;

        li {
          width: 230px;
          height: 350px;
          border: 1px solid #f5f5f5;
          margin-right: 20px;
          margin-top: 12px;
          cursor: pointer;
          box-sizing: border-box;

          .storefuzhu {
            margin: 5px;
            width: 220px;
            height: 220px;
          }

          p:nth-of-type(1) {
            font-size: 12px;
            color: #06060e;
            margin: 5px;
            height: 34px;
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

          p:nth-of-type(2) {
            margin: 5px;
          }

          .price{
            margin: 5px;
            display: flex;
            justify-content: space-between;
            >div:nth-child(2){
              span{
                font-size: 12px;
              }
            }
          }

          .pic1 {
            font-size: 14px;
            color: #c0354c;
          }

          .pic2 {
            font-size: 12px;
            color: #bbb;
            text-decoration: line-through;
            margin-left: 5px;
          }

          .storeheart {
            margin: 16px 5px 0 8px;
          }

          .shoucang {
            font-size: 12px;
            color: #949494;
            margin-top: 13px;
          }


          &:hover {
            border-color: #d02629 !important;
          }
        }

        li:nth-of-type(4) {
          margin-right: 0;
        }

        li:nth-of-type(8) {
          margin-right: 0;
        }

        li:nth-of-type(12) {
          margin-right: 0;
        }

        li:nth-of-type(16) {
          margin-right: 0;
        }
      }

      .fenye {
        margin: 34px 5px 38px 0;

        span {
          height: 30px;
          width: 74px;
          border: 1px solid #e6e6e6;
          line-height: 30px;
          text-align: center;
          font-size: 12px;
          color: #838383;
        }

        ul {
          border: 1px solid #e6e6e6;
          margin: 0 10px;
        }

        li {
          width: 30px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          border-right: 1px solid #e6e6e6;

          a {
            color: #838383;
          }
        }

        li:last-child {
          border: 0;
        }

        .bg {
          background: #6b523c;
        }

        .bg1 {
          color: #fff;
        }

        .gong {
          line-height: 30px;
          color: #838383;
          font-size: 12px;
          margin-left: 8px;
        }
      }
    }
  }
</style>
