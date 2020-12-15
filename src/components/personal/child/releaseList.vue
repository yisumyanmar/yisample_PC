<template>
    <div class="releaseList l">
        <div class="top"><span>发布询价列表</span></div>
        <div class="thead">
            <p class="l">项目编号</p>
            <p class="l"> 项目名称</p>
            <p class="l">产品名称</p>
            <p class="l">总金额</p>
            <p class="l">总数量</p>
            <p class="l">发布日期</p>
            <p class="l">报价截至日期</p>
            <p class="l">状态</p>
        </div>

        <div class="alike">
            <div class="order-item clearfix">
                <div class="order-info l">
                    <div class="zuo">
                        <div class="huowu">
                            <p>98978784</p>
                            <p>
                                南宁轨道交通5号线02标机电<br>
                                安装项目
                            </p>
                            <p>水泵彩箱</p>
                            <p>￥55640</p>
                            <p>2000</p>
                            <p>2020年10月23日</p>
                            <p>2020年10月26日</p>
                            <button class="buy">通过</button>
                        </div>
                        <div class="bom_btn">
                            <button class="purchase">采购</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'releaseList',
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
.releaseList {
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
            margin: 0 80px 0 30px;
        }
        p:nth-of-type(3) {
            margin: 0 40px 0 125px;
        }
        p:nth-of-type(5) {
            margin: 0 49px 0 41px;
        }
        p:nth-of-type(7) {
            margin: 0 90px 0 73px;
        }
    }
    .alike {
        overflow: hidden;
        border: 1px solid #e7e6e6;
        margin: 0 17px 10px;
        .order-info {
            padding: 20px 30px;
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
                        margin: 0 50px 0 0;
                    }
                    p:nth-of-type(3) {
                        margin: 0 35px;
                    }
                    p:nth-of-type(5) {
                        margin: 0 40px;
                    }
                    p:nth-of-type(7) {
                        margin: 0 47px 0 40px;
                    }
                    .buy {
                        color: #ffffff;
                        padding: 6px 12px;
                        border-radius: 4px;
                        width: 80px;
                        background:#02A3FE;
                    }
                }
                .bom_btn {
                    float: right;
                    padding: 3px 1px 0 0;
                    .purchase {
                        color: #ffffff;
                        padding: 6px 12px;
                        border-radius: 4px;
                        width: 80px;
                        background:#FF6000;
                    }
                }
            }
        }
    }
}
</style>