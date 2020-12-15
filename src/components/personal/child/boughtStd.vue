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
        <div class="alike">
            <div class="both">
            <input class="l" type="checkbox" />
            <p class="l">2020-12-02</p>
            </div>
            <div class="order-item clearfix">
                <div class="order-info l">
                    <div class="zuo">
                        <div class="huowu">
                            <p>98978784</p>
                            <p>水泵彩箱</p>
                            <p>68x58.5cm</p>
                            <p>包装</p>
                            <p>￥50</p>
                            <button>再次购买</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
      name: 'boughtDtd',
      data() {
          return {

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
.boughtDtd {
    height: 800px;
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
            margin: 0 148px 0 30px;
        }
        p:nth-of-type(3) {
            margin: 0 100px;
        }
        p:nth-of-type(5) {
            margin: 0 80px;
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
                        width: 147px;
                        margin: 0 45px 0 0;
                    }
                    p:nth-of-type(3) {
                        margin: 0 127px 0 95px;
                        width: 40px;
                    }
                    p:nth-of-type(5) {
                        margin: 0 37px 0 90px;
                    }
                    button {
                        color: #ffffff;
                        padding: 8px 12px;
                        border-radius: 4px;
                        width: 80px;
                        background: #FF6000;
                        margin: 0 0 0 30px;
                    }
                }
            }
        }
    }
}
</style>