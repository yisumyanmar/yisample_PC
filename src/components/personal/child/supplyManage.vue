<template>
    <div class="supplyManage l">
        <div class="top"><span>供应商管理</span></div>
        <div class="thead">
            <p class="l">产品名称</p>
            <p class="l"> 产品编码</p>
            <p class="l">类型</p>
            <p class="l">产品属性</p>
            <p class="l">单价</p>
            <p class="l">有效期</p>
            <p class="l">交易操作</p>
        </div>

        <div class="alike">
            <div class="both">
            <input class="l" type="checkbox" />
            <p class="l">湖南正虹科技发展股份有限公司</p>
            </div>
            <div class="order-item clearfix">
                <div class="order-info l">
                    <div class="zuo">
                        <div class="huowu">
                            <p>中铁十一局三公司广州<br>
                            地铁18号线混凝土料斗<br>
                            询价单
                            </p>
                            <p>98978784</p>
                            <p>定制品</p>
                            <p>68x58.5cm</p>
                            <p>￥50</p>
                            <p>2020年10月21日</p>
                            <button>再次购买</button>
                            <button>再次议价</button>
                            <button>删除</button>
                        </div>
                    </div>
                </div>
                <div class="order-info l">
                    <div class="zuo">
                        <div class="huowu">
                            <p>水泵彩箱</p>
                            <p>98978784</p>
                            <p>成品</p>
                            <p>68x58.5cm</p>
                            <p>￥50</p>
                            <p>2020年10月21日</p>
                            <button>再次购买</button>
                            <button style="display: none">再次议价</button>
                            <button>删除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn"><span>上一页</span><span>下一页</span></div>
    </div>
</template>

<script>
export default {
    name: 'supplyManage',
    data() {
        return {
        };
    },
};
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
.supplyManage {
    height: 954px;
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
            margin: 0 120px 0 30px;
        }
        p:nth-of-type(3) {
            margin: 0 50px;
        }
        p:nth-of-type(5) {
            margin: 0 50px;
        }
        p:nth-of-type(7) {
            margin-left: 100px;
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
                    p:nth-of-type(3) {
                        margin: 0 35px 0 40px;
                        width: 40px;
                    }
                    p:nth-of-type(5) {
                        margin: 0 35px 0 40px;
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
                    button:nth-of-type(3) {
                        background: #AFAEAF;
                        margin: 0 5px;
                    }
                }
            }
        }
    }
    .btn {
        cursor: pointer;
        text-align: right;
        margin: 14px 17px 15px;
        span {
            display: inline-block;
            width: 60px;
            height: 24px;
            text-align: center;
            line-height: 22px;
            border: 1px solid #dcdcdc;
            font-size: 12px;
            color: #9c9c9c;
            border-radius: 3px;
            margin-left: 6px;
        }
    }
}
</style>