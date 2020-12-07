<template>
    <div id="quotation" ref="quotation">
        <div class="quote">
            <img class="quote_img" src="../../assets/img/success-icon.png" />
            <div class="qoute_text">
                <p>报价成功</p>
                <p>报价含税总额<span>￥100000.00</span>元，报价有效期：2020-10-18</p>
                <p>查看报价单详情></p>
            </div>
        </div>
        <div class="recommend">
            <div class="recommend_to">
                <div class="recom_head">
                    <p></p>
                    <p>为你推荐</p>
                    <p></p>
                    <p>根据报价行为推荐</p>
                </div>
                <div class="recom_body" v-for="i in 4" :key="i">
                    <div class="body_div" v-for="i in 4" :key="i">
                        <div class="recom_box">
                            <p class="box_paper">纸类包装</p>
                            <p class="box_title">中电二公司十五分公司珠海景旺项目净化设备询价单</p>
                            <p class="box_body">纸盒定制、智能定制、关键字</p>
                            <div class="purchase">
                                <p>采购数量：</p>
                                <p>1 批</p>
                            </div>
                            <div class="purchase">
                                <p>已有报价</p>
                                <p>* 条</p>
                            </div>
                            <div class="map">
                                <img class="map_img" src="../../assets/img/map.png" />
                                <p>江苏无锡</p>
                                <img class="clock_img" src="../../assets/img/yi-clock.png" />
                                <p>不足<span> 1 </span>小时</p>
                            </div>
                            <p class="com">中铁七局集团有限公司</p>
                            <div class="foot">
                                <p class="heart_div">
                                    <img class="heart" src="../../assets/img/yi-heart.png" />
                                </p>
                                <button class="quote_button">立即报价</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <foot-com></foot-com>
        <back-top></back-top>
    </div>
</template>

<script>
export default {
    name: 'quotation',
    data() {
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
#quotation {
    position: relative;
    .quote {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        padding: 15px;
        .quote_img {
            width: 45px;
            height: 45px;
            background-size: 100% 100%;
            margin-top: 65px;
        }
        .qoute_text {
            padding: 40px;
            p {
                cursor: pointer;
                padding-bottom: 10px;
            }
            p:nth-of-type(1) {
                font-size: 24px;
                color: #333333;
            }
            p:nth-of-type(2) {
                font-size: 16px;
                color: #333333;
                span {
                    font-size: 16px;
                    color: #F5222D;
                    cursor: pointer;
                }
            }
            p:nth-of-type(3) {
                font-size: 14px;
                color: #537AF8;
            }
        }
    }
    .recommend {
        position: relative;
        background: #f1f1f1;
        .recommend_to {
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            flex-direction: column;
            .recom_head {
                padding: 40px 20px;
                p:nth-of-type(1) {
                    width: 500px;
                    border-bottom: 1px solid #C9D1DC;
                    margin-top: 20px;
                }
                p:nth-of-type(2) {
                    font-size: 24px;
                    color: #333333;
                    text-align: center;
                    margin-top: -20px;
                }
                p:nth-of-type(3) {
                    width: 500px;
                    border-bottom: 1px solid #C9D1DC;
                    float: right;
                    margin-top: -15px;
                }
                p:nth-of-type(4) {
                    text-align: center;
                    color: #666666;
                    font-size: 14px;
                }
            }
            .recom_body {
                .body_div {
                    // padding-bottom: 20px;
                    .recom_box {
                        background: #ffffff;
                        width: 260px;
                        height: 415px;
                        float: left;
                        margin: 20px;
                        padding: 20px;
                        .box_paper {
                            width: 75px;
                            height: 32px;
                            background: #F0F0F0;
                            color: #D02629;
                            padding: 6px 8px;
                            cursor: pointer;
                        }
                        .box_title {
                            font-size: 14px;
                            color: #333333;
                            padding: 10px 0 30px 0;
                        }
                        .box_body {
                            width: 240px;
                            height: 30px;
                            background: #F0F0F0;
                            padding: 4px 18px;
                            color: #999999;
                            margin-left: -10px;
                        }
                        .purchase {
                            padding: 15px 0;
                            p {
                                color: #666666;
                            }
                            p:nth-of-type(1) {
                                float: left;
                            }
                            p:nth-of-type(2) {
                                float: right;
                            }
                        }
                        .map {
                            padding: 30px 0 20px 0;
                            display: flex;
                            width: 220px;
                            border-bottom: 3px dotted #E9EEF3;
                            .map_img {
                                width: 15px;
                                height: 15px;
                                background-size: 100% 100%;
                                margin-top: 4px;
                            }
                            .clock_img {
                                width: 15px;
                                height: 15px;
                                background-size: 100% 100%;
                                margin-top: 4px;
                            }
                            p {
                                color: #666666;
                            }
                            span {
                                color: #D33D3D;
                            }
                            p:nth-of-type(1) {
                                padding: 0 40px 0 10px;
                            }
                            p:nth-of-type(2) {
                                padding-left: 10px;
                            }
                        }
                        .com {
                            color: #666666;
                            text-align: center;
                            padding: 20px 0;
                        }
                        .foot {
                            display: flex;
                            .heart_div {
                                background: #F0F0F0;
                                width: 55px;
                                height: 35px;
                                border-radius: 5px;
                                .heart {
                                    width: 22px;
                                    height: 22px;
                                    background-size: 100% 100%;
                                    position: relative;
                                    margin: 8px 16px;
                                }
                            }
                            .quote_button {
                                color: #ffffff;
                                border: none;
                                background: #D02629;
                                border-radius: 3px;
                                padding: 0 50px;
                                margin-left: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>