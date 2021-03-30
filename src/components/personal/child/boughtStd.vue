<template>
    <div class="boughtDtd l">
        <div class="top"><span>新增定制品</span></div>
        <div class="thead">
            <p class="l">产品编号</p>
            <p class="l"> 产品名称</p>
            <p class="l">产品规格</p>
            <p class="l">产品分类</p>
            <p class="l">单价</p>
            <p class="l">交易操作</p>
        </div>
        <div class="alike" v-for="(item, index) in standardList.data" :key="index">
            <div class="both">
            <input class="l" type="checkbox" />
            <p class="l">2020-12-02</p>
            <!-- <p class="l">{{ item.create_time | formatDate }}</p> -->
            </div>
            <div class="order-item clearfix">
                <div class="order-info l">
                    <div class="zuo">
                        <div class="huowu">
                            <!-- <p>98978784</p>
                            <p>水泵彩箱</p>
                            <p>68x58.5cm</p>
                            <p>包装</p>
                            <p>￥50</p>
                            <button>再次购买</button> -->
                            <p>{{item.goods_id}}</p>
                            <p>{{item.title}}</p>
                            <p>{{item.spec}}</p>
                            <p>{{item.class_name}}</p>
                            <p>￥{{item.goods_price}}</p>
                            <button>再次购买</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pagation" v-if="standardList.count">
            <el-pagination
                background
                layout="total, prev, pager, next"
                :total="parseInt(standardList.count)"
                @current-change="currentPage">
            </el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
      name: 'boughtDtd',
      data() {
          return {
              standardList: []
          }
      },
      created() {
          this.getStandardList();
      },
      methods: {
          getStandardList(p) {
            this.HTTP(this.$httpConfig.standardGoodsList, {
                page: p
            },"post")
                .then(res => {
                    this.standardList = res.data.data;
                }
            )
            .catch((err) => {
            console.log(err);
            });
        },
        currentPage (val) {
            this.getStandardList(val);
        },
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
.boughtDtd {
    height: auto;
    width: 980px;
    background: #fff;
    margin-top: 16px;
    .top {
        height: 37px;
        border-bottom: 1px solid #e7e7e7;
        margin: 14px 17px 0;
        span {
            display: inline-block;
            width: 104px;
            text-align: center;
            line-height: 35px;
            border-bottom: 2px solid #d02629;
            color: #d02629;
            font-size: 14px;
        }
    }
    .thead {
        overflow: hidden;
        height: 38px;
        background: #f5f5f5;
        border: 1px solid #e7e6e6;
        margin: 20px 17px;
        width: 946px;
        line-height: 38px;
        p {
            font-size: 12px;
            color: #474747;
        }
        p:nth-of-type(1) {
            margin: 0 120px 0 20px;
        }
        p:nth-of-type(3) {
            margin: 0 130px 0 110px;
        }
        p:nth-of-type(5) {
            margin: 0 100px;
        }
    }
    .alike {
        overflow: hidden;
        border: 1px solid #e7e6e6;
        margin: 0 17px 10px;
            .both {
            height: 42px;
            line-height: 42px;
            background: #f1f1f1;
            input {
                cursor: pointer;
                margin: 16px 14px 0 13px;
            }
            p {
                font-size: 12px;
                color: #333;
            }
        }
        .order-info {
            padding: 30px;
            border-top: 1px solid #e7e6e6;
            width: 945px;
            .zuo {
            overflow: hidden;
                .huowu {
                    display: flex;
                    align-items: center;
                    p {
                    float: left;
                    font-size: 12px;
                    color: #333;
                    }
                    p:nth-of-type(1) {
                        width: 110px;
                        margin: 0 45px 0 0;
                    }
                    p:nth-of-type(2) {
                        width: 140px;
                        margin: 0 45px 0 0;
                    }
                    p:nth-of-type(3) {
                        width: 110px;
                        margin: 0 45px 0 0;
                    }
                    p:nth-of-type(4) {
                        width: 90px;
                        margin: 0 45px 0 0;
                    }
                    p:nth-of-type(5) {
                        width: 90px;
                        margin: 0 45px 0 0;
                    }
                    button {
                        cursor: pointer;
                        color: #ffffff;
                        padding: 8px 12px;
                        border-radius: 4px;
                        width: 80px;
                        background: #FF6000;
                    }
                }
            }
        }
    }
    .pagation{
        text-align: right;
        margin: 30px 0;
    }
}
</style>