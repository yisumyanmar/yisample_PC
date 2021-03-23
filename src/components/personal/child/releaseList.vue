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

        <div class="alike" v-for="(item, index) in inquiryList.data" :key="index">
            <div class="order-item clearfix">
                <div class="order-info l">
                    <div class="zuo">
                        <div class="huowu">
                            <!-- <p>98978784</p>
                            <p>
                                南宁轨道交通5号线02标机电<br>
                                安装项目
                            </p>
                            <p>水泵彩箱</p>
                            <p>￥55640</p>
                            <p>2000</p>
                            <p>2020年10月23日</p>
                            <p>2020年10月26日</p> -->
                            <p>{{item.id}}</p>
                            <p>
                                南宁轨道交通5号线02标机电<br>
                                安装项目
                            </p>
                            <p>{{item.title}}</p>
                            <p>￥55640</p>
                            <p>{{item.number}}</p>
                            <p>{{item.create_time | formatDate }}</p>
                            <p>{{item.deadline_time | formatDate }}</p>
                            <!-- <button v-if="item.winning_status == 0" class="buy" @click="popUp">通过</button> -->
                            <button v-if="item.winning_status == 0" class="buy" @click="releaseInquiryList">通过</button>
                            <button v-if="item.winning_status == 1" class="purchase">采购</button>
                        </div>
                        <!-- <div class="bom_btn">
                            <button class="purchase">采购</button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="pop_visible1" v-show="visible1">
            <div class="post_inquiry1">
                <div class="inquiry_head1">
                    <p>报价提示</p>
                    <i @click="close" class="el-icon-close"></i>
                </div>
                <div class="inquiry_body1">
                    <img src="../../../assets/img/yi-20.png" />
                    <span>你的本次发布询价，将收取相应的费用，支付后请务必在报价截止前完成</span>
                    <p>报价，以免错失商机！<span style="color: #999999;">（已支付的询价费用将不予退还）</span></p>
                    <p>询价收费：<span style="color: #D80707;">￥10.00</span></p>
                </div>
                <div class="inquiry_foot1">
                    <el-checkbox v-model="checked1"></el-checkbox>
                    <span>我已阅读并同意<a>《定制服务系统运营商城服务协议（供应商版）》</a></span>
                    <el-alert
                        v-show="tip1"
                        class="address-tip"
                        title="请点击同意以上协议"
                        type="error"
                        show-icon
                        :closable="false"
                    ></el-alert>
                </div>
                <div class="inquiry_foot1">
                    <button @click="close">放弃询价</button>
                    <button @click="close1">支付并询价</button>
                </div>
            </div>
        </div>

        <div class="pagation" v-if="inquiryList.count">
            <el-pagination
                background
                layout="total, prev, pager, next"
                :total="parseInt(inquiryList.count)"
                @current-change="currentPage">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'releaseList',
    data() {
        return {
            inquiryList: [],
            checked1: false,
            tip1: false,
            visible1: false,
        };
    },
    created(){
        this.getIssueInquiryList();
    },
    methods: {
        getIssueInquiryList(p) {
            this.HTTP(this.$httpConfig.issueInquiryList, {
                page: p
            },"post")
                .then(res => {
                    this.inquiryList = res.data.data;
                }
            )
            .catch((err) => {
            console.log(err);
            });
        },
        currentPage (val) {
            this.getIssueInquiryList(val);
        },
        popUp() {
            this.visible1 = true;
        },
        close() {
            this.visible1 = false;
        },
        releaseInquiryList() {
            this.$router.push({
                name: "releaseInquiryList",
                // query: {
                //     x:0
                // }
            });
        },
        close1() {
            if(this.checked1 == true) {
                this.visible1 = false;
                this.tip1 = false;
            }
            else {
                this.tip1 = true;
            }
        },
    }
};
</script>

<style lang="less" scoped>
.el-alert--error.is-light {
    background-color: #fff;
    color: #F56C6C;
    margin-left: 150px;
    width: 300px;
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
.releaseList {
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
            margin: 0 60px 0 15px;
        }
        p:nth-of-type(3) {
            margin: 0 72px 0 100px;
        }
        p:nth-of-type(5) {
            margin: 0 32px;
        }
        p:nth-of-type(7) {
            margin: 0 110px 0 92px;
        }
    }
    .alike {
        overflow: hidden;
        // border: 1px solid #e7e6e6;
        // margin: 0 17px 10px;
        margin: 0 17px;
        .order-info {
            padding: 20px 30px;
            // border-top: 1px solid #e7e6e6;
            border: 1px solid #e7e6e6;
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
                        margin: 0 40px 0 0;
                        width: 20px;
                    }
                    p:nth-of-type(3) {
                        margin: 0 35px;
                        width: 80px;
                    }
                    p:nth-of-type(5) {
                        margin: 0 40px;
                    }
                    p:nth-of-type(7) {
                        margin: 0 47px 0 40px;
                    }
                    .buy {
                        cursor: pointer;
                        color: #ffffff;
                        padding: 6px 12px;
                        border-radius: 4px;
                        width: 80px;
                        background:#02A3FE;
                    }
                    .purchase {
                        cursor: pointer;
                        color: #ffffff;
                        padding: 6px 12px;
                        border-radius: 4px;
                        width: 80px;
                        background:#FF6000;
                    }
                }
                // .bom_btn {
                //     float: right;
                //     padding: 3px 1px 0 0;
                //     .purchase {
                //         cursor: pointer;
                //         color: #ffffff;
                //         padding: 6px 12px;
                //         border-radius: 4px;
                //         width: 80px;
                //         background:#FF6000;
                //     }
                // }
            }
        }
    }
    .pop_visible1 {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2000;
        .post_inquiry1 {
            position: absolute;
            left: 33%;
            top: 30%;
            width: 600px;
            height: auto;
            background: #ffffff;
            padding: 20px;
            .inquiry_head1 {
                border-bottom: 1px solid #DAE7FE;
                p {
                    font-size: 16px;
                    color: #000;
                    display: flex;
                    padding-bottom: 20px;
                }
                .el-icon-close {
                    font-size: 16px;
                    color: #777;
                    float: right;
                    margin-top: -40px;
                }
            }
            .inquiry_body1 {
                padding: 20px 0;
                border-bottom: 1px solid #DAE7FE;
                span {
                    font-size: 16px;
                    color: #333;
                    padding-left: 10px;
                }
                p {
                    font-size: 16px;
                    color: #333;
                    padding-left: 30px;
                    padding-top: 3px;
                }
            }
            .inquiry_foot1 {
                text-align: center;
                padding-top: 30px;
                span {
                    font-size: 14px;
                    margin-left: 20px;
                    color: #333;
                    a {
                        color: #1A6DF7;
                    }
                }
                button {
                    cursor: pointer;
                    font-size: 14px;
                    width: 100px;
                    height: 38px;
                    border-radius: 3px;
                    margin-right: 10px;
                    margin-bottom: 30px;
                }
                button:nth-of-type(1) {
                    color: #333333;
                    background: #DCDCDC;
                }
                button:nth-of-type(2) {
                    color: #fff;
                    background: #1A6DF7;
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