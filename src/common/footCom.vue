<template>
    <footer>
        <div class="top">
            <div class="center">
                <div class="erweima l">
                    <!-- <img :src="URL + websiteInfo.init_qr_code" /> -->
                    <img src="../assets/img/card1.png" />
                    <p>贡品商城官方微信服务号扫一扫，享更多优惠</p>
                </div>
                <div class="phone l">
                    <!-- <span class="call">{{ websiteInfo.intnet_phone }}</span> -->
                    <span class="call">021-2889059测试</span>
                    <br />
                    <span class="workday">工作日(9:00-18:00)</span>
                </div>
                <div class="topul l">
                    <!-- <div class="l" v-for="(item, k) in article_category" :key="k">
                        <span @click="toLink(item.id, item.name)" class="c">
                            {{
                            item.name
                            }}
                        </span>
                        <ul>
                            <li
                                @click="hit(data.id,data.name,item.name)"
                                :key="index"
                                v-for="(data, index) in article"
                            >
                                <span v-if="data.article_category_id == item.id">
                                    {{ data.name }}
                                </span>
                            </li>
                        </ul>
                    </div> -->
                    <div class="l">
                        <span class="c">帮助中心</span>
                        <ul>
                            <li><span>ddd</span></li>
                            <li><span>测试测试</span></li>
                            <li><span>支付说明</span></li>
                            <li><span>测试测试</span></li>
                            <li><span>支付说明</span></li>
                            <li><span>test测试</span></li>
                        </ul>
                    </div>
                     <div class="l">
                        <span class="c">平台新闻</span>
                        <ul>
                            <li><span>行业新闻</span></li>
                            <li><span>文章列表在哪里</span></li>
                        </ul>
                    </div>
                    <div class="l">
                        <span class="c">关于我们</span>
                        <ul>
                            <li><span>加入我们</span></li>
                            <li><span>公司简介</span></li>
                        </ul>
                    </div>
                    <div class="l">
                        <span class="c">平台加盟</span>
                        <ul>
                            <li><span>我要加盟</span></li>
                            <li><span>加盟信息</span></li>
                        </ul>
                    </div>
                     <div class="l">
                        <span class="c">测试文章分类</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="middle">
            <div class="center">
                <img src="../assets/img/pinpai.jpg" />
            </div>
        </div>
        <div class="bottom">
            <div class="center">
                <!-- <p class="pOne l">
                    ICP备{{
                    <a href="http://www.miitbeian.gov.cn">{{websiteInfo.record_number}}</a>
                    }}号|有任何问题请联系我们在线客服 电话：{{
                    websiteInfo.intnet_phone
                    }}
                </p>
                <p class="pOne l">{{ websiteInfo.intnet_licence }}</p>
                <p class="pOne l">{{ websiteInfo.intnet_copyright }}</p>
                <ul class="partner">
                    <li v-for="item in partner" :key="item.id">
                        <img :src="URL + item.pic_url" />
                    </li>
                </ul> -->
                <p class="pOne l">
                    ICP备{{
                    <a href="http://www.miitbeian.gov.cn">1888888测试</a>
                    }}号|有任何问题请联系我们在线客服 电话：021-2889059测试
                </p>
                <p class="pOne l">互联网出版许可证编号新出版网证(沪)字151号测试 | 出版物经营许可证 | 网络文化经营许可证京网文[2014]2048-348号测试</p>
                <p class="pOne l">©2016-2019 ShopsN 版权所有 未授权不得商用测试测试</p>
                <!-- <ul class="partner">
                    <li v-for="item in partner" :key="item.id">
                        <img :src="URL + item.pic_url" />
                    </li>
                </ul> -->
                <ul class="partner">
                        <img src="../assets/img/footer-yi.png" />
                </ul>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            article_category: [],
            article: [],
            websiteInfo: {},
            partner: []
        };
    },
    created() {
        this.getData();
        this.getFootData();
        this.getpartner();
    },
    methods: {
        //标题跳转
        toLink(id, name) {
            this.$emit('handleTitleClick',id,name)
            this.$router.push({
                name: "guide",
                params: {
                    type: "article",
                    name: name,
                    category_id: id
                }
            });
        },
        //底部合作伙伴图
        getpartner() {
            this.HTTP(this.$httpConfig.getCooprativeList, {}, "post")
                .then(res => {
                    this.partner = res.data.data;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        getData() {
            this.HTTP(this.$httpConfig.commonFloor, {}, "post").then(res => {
                this.article = res.data.data.article;
                this.article_category = res.data.data.atricle_category;
                console.log(this.article_category, "this.article_category");
            });
        },
        getFootData() {
            this.HTTP(this.$httpConfig.aboutEtcetera, {}, "post").then(res => {
                this.websiteInfo = res.data.data;
                sessionStorage.setItem("webKey", JSON.stringify(res.data.data));
                sessionStorage.setItem(
                    "recordKey",
                    res.data.data.record_number
                );
                sessionStorage.setItem("phoneKey", res.data.data.intnet_phone);
                sessionStorage.setItem(
                    "licenceKey",
                    res.data.data.intnet_licence
                );
                sessionStorage.setItem(
                    "copyrightKey",
                    res.data.data.intnet_copyright
                );
            });
        },
        hit(id,name,title) {
           this.$emit('handleDetailClick',id)
            this.$router.push({
                name: "guide",
                params: {
                    type: "articleItem",
                    title:title,
                    name:name,
                    id: id
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.c {
    cursor: pointer;
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
footer {
    height: 564px;
    background: #f1f1f1;
    .top {
        height: 231px;
        border-bottom: 1px solid #e8e8e8;
        .erweima {
            width: 130px;
            img {
                margin: 46px 0 0 13px;
                width: 102px;
                height: 102px;
            }
            p {
                font-size: 12px;
                color: #b4b4b4;
                width: 100%;
                text-align: center;
                margin-top: 15px;
            }
        }
        .phone {
            margin-top: 83px;
            .call {
                color: #e44a56;
                font-size: 14px;
            }
            .workday {
                color: #b0b0b0;
                font-size: 10px;
            }
        }
        .topul {
            margin-top: 58px;
            margin-left: 102px;
            div {
                margin-right: 92px;
                span {
                    font-size: 15px;
                    color: #494949;
                }
                ul {
                    margin-top: 8px;
                    li span{
                        font-size: 12px;
                        color: #959595;
                        line-height: 24px;
                        cursor: pointer;
                        &:hover {
                            color: red;
                        }
                        width: 75px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
    .middle {
        height: 96px;
        border-bottom: 1px solid #e8e8e8;
        img {
            margin-top: 26px;
        }
    }
    .bottom {
        height: 236px;
        text-align: center;
        .pOne {
            width: 100%;
            text-align: center;
            color: #a6a6a6;
            font-size: 12px;
            margin-top: 10px;
        }
        .partner {
            padding-top: 33px;
            min-width: 1088px;
            min-height: 37px;
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            flex-direction: row;
            .li {
                border: 0;
            }
        }
    }
}
</style>
