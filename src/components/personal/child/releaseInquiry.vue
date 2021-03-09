<template>
    <div class="releaseInquiry l">
        <div class="top"><span>发布询价</span></div>
        <div class="show">
            <div class="one">
                <p class="two">标题：
                    <el-input v-model="title"></el-input>
                </p>
                <p class="three">期望收货日期：
                    <el-date-picker v-model="e_time" type="date" value-format="yyyy-MM-dd" placeholder=""></el-date-picker>
                </p>
                <p class="four">交货期：
                    <el-date-picker v-model="d_time" type="date" value-format="yyyy-MM-dd" placeholder=""></el-date-picker>
                </p>
                <p class="five">报价截止日期：
                    <el-date-picker v-model="l_time" type="date" value-format="yyyy-MM-dd" placeholder=""></el-date-picker>
                </p>
                <p class="six">联系人：
                    <el-input v-model="name"></el-input>
                </p>
                <p class="seven">联系电话：
                    <el-input v-model="mobile"></el-input>
                </p>
                <p class="eight">报价要求：
                    <!-- <el-checkbox v-model="checked1">需要报含税价</el-checkbox>
                    <el-checkbox v-model="checked2">允许对询价单部分物料报价</el-checkbox>
                    <el-checkbox v-model="checked3">报价需要包含运费</el-checkbox> -->
                    <el-radio v-for="(item, index) in radio_type" :key="index" v-model="radio" :label="item.id">{{item.type_name}}</el-radio>
                </p>
                <p class="nine">收货地：
                    <!-- <el-select v-model="value" placeholder="">
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
                    </el-select> -->
                    <el-select @change="getCity" v-model="value" placeholder="">
                        <el-option
                        v-for="(item, index) in provList"
                        :key="index"
                        :label="item.name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                    <el-select @change="getDist" v-model="value1" placeholder="" v-show="selectData1">
                        <el-option
                        v-for="(item, index) in cityList"
                        :key="index"
                        :label="item.name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" placeholder="" v-show="selectData2">
                        <el-option
                        v-for="(item, index) in distList"
                        :key="index"
                        :label="item.name"
                        :value="item.id">
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
                    <span>物料数量</span>
                    <!-- <span>产品属性</span>
                    <span>需求属性</span>
                    <span>上传附件</span> -->
                </p>
                <p class="thirteen">
                    <img @click="showItem" src="../../../assets/img/yi-19.png" />
                    <el-input class="el-input1" v-model="goodsId"></el-input>
                    <el-input class="el-input1" type="number" v-model="goodsNum"></el-input>
                    <!-- <el-input class="el-input1"></el-input>
                    <el-input class="el-input1"></el-input>
                    <button>上传</button> -->
                </p>
                <div class="show_item" v-show="showItenData">
                    <img @click="showItem1" src="../../../assets/img/yi-19.png" />
                    <el-input class="el-input1" v-model="goodsId1"></el-input>
                    <el-input class="el-input1" type="number" v-model="goodsNum1"></el-input>
                </div>
                <div class="show_item" v-show="showItenData1">
                    <img @click="showItem2" src="../../../assets/img/yi-19.png" />
                    <el-input class="el-input1" v-model="goodsId2"></el-input>
                    <el-input class="el-input1" type="number" v-model="goodsNum2"></el-input>
                </div>
                <div class="show_item" v-show="showItenData2">
                    <img @click="showItem3" src="../../../assets/img/yi-19.png" />
                    <el-input class="el-input1" v-model="goodsId3"></el-input>
                    <el-input class="el-input1" type="number" v-model="goodsNum3"></el-input>
                </div>
                <div class="show_item" v-show="showItenData3">
                    <img @click="showItem4" src="../../../assets/img/yi-19.png" />
                    <el-input class="el-input1" v-model="goodsId4"></el-input>
                    <el-input class="el-input1" type="number" v-model="goodsNum4"></el-input>
                </div>
                <div class="show_item" v-show="showItenData4">
                    <img @click="showItem5" src="../../../assets/img/yi-19.png" />
                    <el-input class="el-input1" v-model="goodsId5"></el-input>
                    <el-input class="el-input1" type="number" v-model="goodsNum5"></el-input>
                </div>
                <div class="show_item" v-show="showItenData5">
                    <img @click="showItem6" src="../../../assets/img/yi-19.png" />
                    <el-input class="el-input1" v-model="goodsId6"></el-input>
                    <el-input class="el-input1" type="number" v-model="goodsNum6"></el-input>
                </div>
                <div class="show_item" v-show="showItenData6">
                    <img @click="showItem7" src="../../../assets/img/yi-19.png" />
                    <el-input class="el-input1" v-model="goodsId7"></el-input>
                    <el-input class="el-input1" type="number" v-model="goodsNum7"></el-input>
                </div>
                <div class="show_item" v-show="showItenData7">
                    <img @click="showItem8" src="../../../assets/img/yi-19.png" />
                    <el-input class="el-input1" v-model="goodsId8"></el-input>
                    <el-input class="el-input1" type="number" v-model="goodsNum8"></el-input>
                </div>
                <div class="show_item1" v-show="showItenData8">
                    <el-input class="el-input1" v-model="goodsId9"></el-input>
                    <el-input class="el-input1" type="number" v-model="goodsNum9"></el-input>
                </div>
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
                    <!-- <button @click="popVisible">发布询价</button> -->
                    <button @click="GetIssue">发布询价</button>
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
                    <button @click="close">支付并询价</button>
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
            title: '',
            e_time: '',
            d_time: '',
            l_time: '',
            name: '',
            mobile: '',
            // checked1: true,
            // checked2: true,
            // checked3: true,
            radio: '',
            radio_type: [{
                id: '0',
                type_name: '需要报含税价'
                }, {
                id: '1',
                type_name: '允许对询价单部分物料报价'
                }, {
                id: '2',
                type_name: '报价需要包含运费'
            }],
            // options: [{
            //     value: 'aaaaa',
            //     label: 'aaaaa'
            //     }, {
            //     value: 'bbbbb',
            //     label: 'bbbbb'
            //     }, {
            //     value: 'ccccc',
            //     label: 'ccccc'
            // }],
            provList: [],
            cityList: [],
            distList: [],
            selectData1: false,
            selectData2: false,
            value: '',
            value1: '',
            value2: '',
            textarea: '',
            textarea1: '',
            goodsId: '',
            goodsNum: '',
            showItenData: false,
            showItenData1: false,
            showItenData2: false,
            showItenData3: false,
            showItenData4: false,
            showItenData5: false,
            showItenData6: false,
            showItenData7: false,
            showItenData8: false,
            goodsId1: '',
            goodsNum1: '',
            goodsId2: '',
            goodsNum2: '',
            goodsId3: '',
            goodsNum3: '',
            goodsId4: '',
            goodsNum4: '',
            goodsId5: '',
            goodsNum5: '',
            goodsId6: '',
            goodsNum6: '',
            goodsId7: '',
            goodsNum7: '',
            goodsId8: '',
            goodsNum8: '',
            goodsId9: '',
            goodsNum9: '',
            textarea2: '',
            textarea3: '',
            visible: false,
            visible1: false,
            checked: true,
            checked4: false,
        }
    },
    created() {
        this.getProvince();
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
        },
        showItem() {
            this.showItenData = true;
        },
        showItem1() {
            this.showItenData1 = true;
        },
        showItem2() {
            this.showItenData2 = true;
        },
        showItem3() {
            this.showItenData3 = true;
        },
        showItem4() {
            this.showItenData4 = true;
        },
        showItem5() {
            this.showItenData5 = true;
        },
        showItem6() {
            this.showItenData6 = true;
        },
        showItem7() {
            this.showItenData7 = true;
        },
        showItem8() {
            this.showItenData8 = true;
        },
        getProvince() {
            this.HTTP(this.$httpConfig.regionLists, {}, 'get')
                .then((res) => {
                    this.provList = res.data.data;
                })
        },
        getCity(id) {
            this.HTTP(this.$httpConfig.regionLists, {
                id: id
            },'get')
                .then(res => {
                    this.cityList = res.data.data;
                    this.selectData1 = true;
                }
            )
            .catch((err) => {
            console.log(err);
            });
        },
        getDist(id) {
            this.HTTP(this.$httpConfig.regionLists, {
                id: id
            },'get')
                .then(res => {
                    this.distList = res.data.data;
                    this.selectData2 = true;
                }
            )
            .catch((err) => {
            console.log(err);
            });
        },
        GetIssue() {
            if(this.goodsId && this.goodsNum) {
                var goodsIdData = [this.goodsId];
                var goodsNumData = [this.goodsNum];
            }
            if(this.goodsId && this.goodsNum && this.goodsId1 && this.goodsNum1) {
                var goodsIdData = [this.goodsId, this.goodsId1];
                var goodsNumData = [this.goodsNum, this.goodsNum1];
            }
            if(this.goodsId && this.goodsNum && this.goodsId1 && this.goodsNum1 && this.goodsId2 && this.goodsNum2) {
                var goodsIdData = [this.goodsId, this.goodsId1, this.goodsId2];
                var goodsNumData = [this.goodsNum, this.goodsNum1, this.goodsNum2];
            }
            if(this.goodsId && this.goodsNum && this.goodsId1 && this.goodsNum1 && this.goodsId2 && this.goodsNum2 && this.goodsId3 && this.goodsNum3) {
                var goodsIdData = [this.goodsId, this.goodsId1, this.goodsId2, this.goodsId3];
                var goodsNumData = [this.goodsNum, this.goodsNum1, this.goodsNum2, this.goodsNum3];
            }
            if(this.goodsId && this.goodsNum && this.goodsId1 && this.goodsNum1 && this.goodsId2 && this.goodsNum2 && this.goodsId3 && this.goodsNum3 && this.goodsId4 && this.goodsNum4) {
                var goodsIdData = [this.goodsId, this.goodsId1, this.goodsId2, this.goodsId3, this.goodsId4];
                var goodsNumData = [this.goodsNum, this.goodsNum1, this.goodsNum2, this.goodsNum3, this.goodsNum4];
            }
            if(this.goodsId && this.goodsNum && this.goodsId1 && this.goodsNum1 && this.goodsId2 && this.goodsNum2 && this.goodsId3 && this.goodsNum3 && this.goodsId4 && this.goodsNum4 && this.goodsId5 && this.goodsNum5) {
                var goodsIdData = [this.goodsId, this.goodsId1, this.goodsId2, this.goodsId3, this.goodsId4, this.goodsId5];
                var goodsNumData = [this.goodsNum, this.goodsNum1, this.goodsNum2, this.goodsNum3, this.goodsNum4, this.goodsNum5];
            }
            if(this.goodsId && this.goodsNum && this.goodsId1 && this.goodsNum1 && this.goodsId2 && this.goodsNum2 && this.goodsId3 && this.goodsNum3 && this.goodsId4 && this.goodsNum4 && this.goodsId5 && this.goodsNum5 && this.goodsId6 && this.goodsNum6) {
                var goodsIdData = [this.goodsId, this.goodsId1, this.goodsId2, this.goodsId3, this.goodsId4, this.goodsId5, this.goodsId6];
                var goodsNumData = [this.goodsNum, this.goodsNum1, this.goodsNum2, this.goodsNum3, this.goodsNum4, this.goodsNum5, this.goodsNum6];
            }
            if(this.goodsId && this.goodsNum && this.goodsId1 && this.goodsNum1 && this.goodsId2 && this.goodsNum2 && this.goodsId3 && this.goodsNum3 && this.goodsId4 && this.goodsNum4 && this.goodsId5 && this.goodsNum5 && this.goodsId6 && this.goodsNum6 && this.goodsId7 && this.goodsNum7) {
                var goodsIdData = [this.goodsId, this.goodsId1, this.goodsId2, this.goodsId3, this.goodsId4, this.goodsId5, this.goodsId6, this.goodsId7];
                var goodsNumData = [this.goodsNum, this.goodsNum1, this.goodsNum2, this.goodsNum3, this.goodsNum4, this.goodsNum5, this.goodsNum6, this.goodsNum7];
            }
            if(this.goodsId && this.goodsNum && this.goodsId1 && this.goodsNum1 && this.goodsId2 && this.goodsNum2 && this.goodsId3 && this.goodsNum3 && this.goodsId4 && this.goodsNum4 && this.goodsId5 && this.goodsNum5 && this.goodsId6 && this.goodsNum6 && this.goodsId7 && this.goodsNum7 && this.goodsId8 && this.goodsNum8) {
                var goodsIdData = [this.goodsId, this.goodsId1, this.goodsId2, this.goodsId3, this.goodsId4, this.goodsId5, this.goodsId6, this.goodsId7, this.goodsId8];
                var goodsNumData = [this.goodsNum, this.goodsNum1, this.goodsNum2, this.goodsNum3, this.goodsNum4, this.goodsNum5, this.goodsNum6, this.goodsNum7, this.goodsNum8];
            }
            if(this.goodsId && this.goodsNum && this.goodsId1 && this.goodsNum1 && this.goodsId2 && this.goodsNum2 && this.goodsId3 && this.goodsNum3 && this.goodsId4 && this.goodsNum4 && this.goodsId5 && this.goodsNum5 && this.goodsId6 && this.goodsNum6 && this.goodsId7 && this.goodsNum7 && this.goodsId8 && this.goodsNum8 && this.goodsId9 && this.goodsNum9) {
                var goodsIdData = [this.goodsId, this.goodsId1, this.goodsId2, this.goodsId3, this.goodsId4, this.goodsId5, this.goodsId6, this.goodsId7, this.goodsId8, this.goodsId9];
                var goodsNumData = [this.goodsNum, this.goodsNum1, this.goodsNum2, this.goodsNum3, this.goodsNum4, this.goodsNum5, this.goodsNum6, this.goodsNum7, this.goodsNum8, this.goodsNum9];
            }
            var data = {
                id: goodsIdData,
                number: goodsNumData
            }
            this.HTTP(this.$httpConfig.addIssueInquiry, {
                title: this.title,
                expect_time: this.e_time,
                delivery_time: this.d_time,
                deadline_time: this.l_time,
                name: this.name,
                mobile: this.mobile,
                offer_type: this.radio,
                prov: this.value,
                city: this.value1,
                dist: this.value2,
                address: this.textarea,
                notes: this.textarea1,
                goods: data,
                requirements: this.textarea2,
                quality: this.textarea3,
            }, "post")
                .then(res => {
                })
                .catch(e => {
                    console.log(e);
                });
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
    .show {
        .one {
            padding: 30px 0 80px 0;
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
            .show_item {
                margin: 0 0 20px 166px;
            }
            .show_item1 {
                margin: 0 0 30px 185px;
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