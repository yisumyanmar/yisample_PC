<template>
    <div class="customProduct l">
        <div class="top"><span>我的新增定制品</span></div>
        <div class="thead">
            <p class="l">产品编号</p>
            <p class="l"> 产品名称</p>
            <p class="l">产品规格</p>
            <p class="l">产品分类</p>
            <p class="l">单价</p>
            <p class="l">交易操作</p>
        </div>
        <div class="alike" v-for="(item, index) in cusList" :key="index">
            <div class="both">
            <input class="l" type="checkbox" />
            <!-- <p class="l">2020-12-02</p> -->
            <p class="l">{{ item.create_time | formatDate }}</p>
            </div>
            <div class="order-item clearfix">
                <div class="order-info l">
                    <div class="zuo">
                        <div class="huowu">
                            <!-- <p>87845</p>
                            <p>中铁建大桥局三公司杭州<br>
                            地铁8号线车辆段采购<br>
                            灰砂砖一批
                            </p>
                            <p>48x58.5cm</p>
                            <p>包装</p>
                            <p>￥50</p> -->
                            <p>{{item.id}}</p>
                            <p>{{item.title}}</p>
                            <p>48x58.5cm</p>
                            <p>{{item.class_name}}</p>
                            <p>{{item.goods_price}}</p>
                            <button>发布询价</button>
                            <button>修改</button>
                        </div>
                        <button @click="deleteOrder(item.id)" class="delete_btn">删除</button>
                    </div>
                </div>
            </div>
        </div>
        <button @click="addProduct" class="btn"><i class="el-icon-plus"></i>新增定制品</button>
    </div>
</template>

<script>
import { Message } from "element-ui";
  export default {
      name: 'customProduct',
      data() {
          return {
              cusList: []
          }
      },
      created() {
          this.GetMyCustomizedList();
      },
      methods: {
            GetMyCustomizedList() {
                this.HTTP(this.$httpConfig.myCustomizedList, {}, "post")
                    .then(res => {
                        this.cusList = res.data.data.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            deleteOrder(id) {
            // 删除订单
            this.$confirm("您确定要删除该订单吗?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            lockScroll: false,
            center: true,
            closeOnClickModal: false
            })
            .then(() => {
                this.HTTP(
                this.$httpConfig.myCustomizedDel,
                {
                    id: id
                },
                "post"
                ).then(res => {
                    this.GetMyCustomizedList();
                });
            })
            .catch(() => {
            });
        },
        addProduct() {
            this.$router.push({
                name: "productManage",
                query: {
                x: 0
            }
            });
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
.customProduct {
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
            margin: 0 145px 0 30px;
        }
        p:nth-of-type(3) {
            margin: 0 100px;
        }
        p:nth-of-type(5) {
            margin: 0 125px 0 65px;
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
                        margin: 0 15px 0 0;
                    }
                    p:nth-of-type(2) {
                        width: 100px;
                        overflow: hidden;
                        height: 60px;
                        line-height: 60px;
                    }
                    p:nth-of-type(3) {
                        margin: 0 125px 0 40px;
                        width: 40px;
                    }
                    p:nth-of-type(5) {
                        margin: 0 34px 0 75px;
                        width: 50px;
                    }
                    button {
                        color: #ffffff;
                        padding: 8px 12px;
                        border-radius: 4px;
                        width: 80px;
                    }
                    button:nth-of-type(1) {
                        background: #FF6000;
                        margin: 0 0 0 30px;
                    }
                    button:nth-of-type(2) {
                        background:#02A3FE;
                        margin: 0 0 0 5px;
                    }
                }
                .delete_btn {
                    color: #ffffff;
                    padding: 8px 12px;
                    border-radius: 4px;
                    width: 80px;
                    background: #AFAEAF;
                    float: right;
                    margin: -5px 101px 0 0;
                }
            }
        }
    }
    .btn {
        color: #ffffff;
        padding: 8px 12px;
        border-radius: 4px;
        width: 125px;
        height: 40px;
        background: #02A3FE;
        margin: 25px 0 35px 18px;
        cursor: pointer;
        .el-icon-plus {
            padding-right: 6px;
        }
    }
}
</style>