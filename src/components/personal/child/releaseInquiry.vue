<template>
    <div class="releaseInquiry l">
        <div class="top"><span>发布询价</span></div>
        <div class="show">
            <div class="one">
                <p class="two">标题：
                    <el-input></el-input>
                </p>
                <p class="three">期望收货日期：
                    <el-input></el-input>
                </p>
                <p class="four">交货期：
                    <el-input></el-input>
                </p>
                <p class="five">报价截止日期：
                    <el-input></el-input>
                </p>
                <p class="six">联系人：
                    <el-input></el-input>
                </p>
                <p class="seven">联系电话：
                    <el-input></el-input>
                </p>
                <p class="eight">报价要求：
                    <el-checkbox v-model="checked1">需要报含税价</el-checkbox>
                    <el-checkbox v-model="checked2">允许对询价单部分物料报价</el-checkbox>
                    <el-checkbox v-model="checked3">报价需要包含运费</el-checkbox>
                </p>
                <p class="nine">收货地：
                    <el-select v-model="value" placeholder="">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value1" placeholder="">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" placeholder="">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </p>
                <p class="ten">
                    <el-input
                        class="el-textarea1"
                        type="textarea"
                        :rows="2"
                        placeholder="详细地址"
                        v-model="textarea">
                    </el-input>
                </p>
                <p class="eleven">补充说明描述：
                    <el-input
                        class="el-textarea2"
                        type="textarea"
                        :rows="2"
                        placeholder=""
                        v-model="textarea1">
                    </el-input>
                </p>
                 <p class="twelve">
                    <span>物料名称</span>
                    <span>产品编号</span>
                    <span>产品属性</span>
                    <span>需求属性</span>
                    <span>上传附件</span>
                </p>
                <p class="thirteen">
                    <img src="../../../assets/img/yi-19.png" />
                    <el-input class="el-input1"></el-input>
                    <el-input class="el-input1"></el-input>
                    <el-input class="el-input1"></el-input>
                    <el-input class="el-input1"></el-input>
                    <button>上传</button>
                </p>
                <p class="fourteen">供应商要求：
                    <el-input
                        class="el-textarea3"
                        type="textarea"
                        :rows="3"
                        placeholder=""
                        v-model="textarea2">
                    </el-input>
                </p>
                <p class="fifteen">品质要求：
                    <el-input
                        class="el-textarea4"
                        type="textarea"
                        :rows="2"
                        placeholder=""
                        v-model="textarea3">
                    </el-input>
                </p>
                <p class="sixteen">
                    <button @click="popVisible">发布询价</button>
                </p>
            </div>
        </div>
        <div class="pop_visible" v-show="visible">
            <div class="post_inquiry">
                <div class="inquiry_head">
                    <p>发布询价收费说明</p>
                    <i @click="close" class="el-icon-close"></i>
                </div>
                <div class="inquiry_body">
                    <img src="../../../assets/img/yi-20.png" />
                    <span>尊敬的客户：</span>
                </div>
                 <div class="body_letter">
                    <p>
                        这里是发布询价收费说明 ，具体规则还在制定当中<br>
                        规则郑重提醒：请供应商仔细阅读询价单详情后（上文和下文），严谨报价，乱报价者我们会向阿里里巴巴举报，<br>
                        且拉入供应商黑名单，谢谢合作！
                    </p>
                    <p>1、报价要求：﻿报价有效期内供应商可多次报价，以最后一次确认报价为准，交易确认后卖方不能以任何理由提出涨价要求。</p>
                    <p>2、买方收到货进行现场验收合格并且要收到卖家的有效发票后，才按约定的方式最终确认货款支付。</p>
                    <p>3、随货资料务必齐全，包括不限于营业执照、合格证、质保书、检测报告等，一式   份 </p>
                    <p>4、如有技术问题请及时与      联系</p>
                    <p>5、开票信息：</p>
                    <p>开票抬头：中国电子系统工程第二建设有限公司</p>
                    <p>纳税人识别号：91320200134757148J </p>
                    <p>地址、电话：无锡市具区路88号，0510-81180118</p>
                    <p> 开户行及账号：中国建设银行无锡胜利门支行32001614736050404268</p>
                </div>
                <div class="inquiry_foot">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span>我已阅读并同意<a>《定制服务系统运营商城服务协议（供应商版）》</a></span>
                </div>
                <div class="inquiry_foot">
                    <el-checkbox v-model="checked4"></el-checkbox>
                    <span>下次不再提示</span>
                    <button @click="next">继续发布</button>
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
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span>我已阅读并同意<a>《定制服务系统运营商城服务协议（供应商版）》</a></span>
                </div>
                <div class="inquiry_foot1">
                    <button>放弃询价</button>
                    <button>支付并询价</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'releaseInquiry',
    data() {
        return {
            checked1: true,
            checked2: true,
            checked3: true,
            options: [{
                value: 'aaaaa',
                label: 'aaaaa'
                }, {
                value: 'bbbbb',
                label: 'bbbbb'
                }, {
                value: 'ccccc',
                label: 'ccccc'
                }],
            value: '',
            value1: '',
            value2: '',
            textarea: '',
            textarea1: '',
            textarea2: '',
            textarea3: '',
            visible: false,
            visible1: false,
            checked: true,
            checked4: false
        }
    },
    methods: {
        popVisible() {
            this.visible = true;
        },
        close() {
            this.visible = false;
            this.visible1 = false;
        },
        next() {
            this.visible1 = true;
            this.visible = false;
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
.el-input {
    width: 400px;
    margin-left: 10px;
}
.el-input1 {
    width: 150px;
}
.el-checkbox {
    margin-left: 12px;
}
.el-select {
    margin-left: 11px !important;
}
.el-textarea1 {
    width: 75.1%;
}
.el-textarea2 {
    width: 67.2%;
    margin-left: 10px;
}
.el-textarea3 {
    width: 68%;
    margin-left: 10px;
}
.el-textarea4 {
    width: 68.9%;
    margin-left: 10px;
}
.releaseInquiry {
    height: 1250px;
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
    .show {
        .one {
            padding: 30px 0;
            p {
                font-size: 12px;
                color: #666;
                margin-bottom: 20px;
                line-height: 32px;
            }
            p.two {
                margin-left: 118px;
            }
            p.three {
                margin-left: 70px;
            }
            p.four {
                margin-left: 106px;
            }
            p.five {
                margin-left: 70px;
            }
            p.six {
                margin-left: 106px;
            }
            p.seven {
                margin-left: 94px;
            }
            p.eight {
                margin-left: 92px;
            }
            p.nine {
                margin-left: 104px;
            }
            p.ten {
                margin-left: 166px;
            }
            p.eleven {
                margin-left: 68px;
            }
            p.twelve {
                margin-left: 166px;
                span {
                    font-size: 12px;
                    color: #666666;
                }
                span:nth-of-type(1) {
                    padding: 0 110px 0 75px;
                }
                span:nth-of-type(3) {
                    padding: 0 113px;
                }
                span:nth-of-type(5) {
                    padding-left: 70px;
                }
            }
            p.thirteen {
                margin-left: 166px;
                margin-top: -15px;
                img {
                    cursor: pointer;
                }
                button {
                    cursor: pointer;
                    background: #00A0E9;
                    color: #ffffff;
                    padding: 8px 0;
                    border-radius: 3px;
                    width: 65px;
                    margin-left: 10px;
                }
            }
            p.fourteen {
                margin-left: 81px;
            }
            p.fifteen {
                margin-left: 93px;
            }
            p.sixteen {
                margin-left: 166px;
                button {
                    cursor: pointer;
                    width: 200px;
                    height: 45px;
                    color: #ffffff;
                    background: #D02629;
                    font-size: 14px;
                    margin-top: 40px;
                    border-radius: 5px;
                }
            }
        }
    }
    .pop_visible {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2000;
        .post_inquiry {
            position: absolute;
            left: 29%;
            top: 13%;
            width: 800px;
            height: 685px;
            background: #ffffff;
            padding: 20px;
            .inquiry_head {
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
            .inquiry_body {
                padding: 10px 0;
                span {
                    font-size: 16px;
                    color: #333;
                    padding-left: 10px;
                }
            }
            .body_letter {
                padding: 0 30px;
                p {
                    font-size: 14px;
                    color: #333;
                    line-height: 20px;
                    padding-bottom: 20px;
                }
            }
            .inquiry_foot {
                text-align: center;
                padding-bottom: 20px;
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
                    background: #D02629;
                    color: #fff;
                    font-size: 14px;
                    width: 100px;
                    height: 38px;
                    border-radius: 3px;
                    margin-left: 20px;
                }
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
            height: 350px;
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
}
</style>