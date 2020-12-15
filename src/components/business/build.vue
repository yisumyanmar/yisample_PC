<template>
    <div id="interview">
        <!-- <common-header></common-header> -->
        <common-header v-on:childToParent="onChildClick"></common-header>
        <div id="logo">
            <div class="center">
                <div class="nake l">
                    <p class="Gongpin l">
                        <img src="../../assets/img/logo-yi.png" />
                    </p>
                    <!-- <p class="iphone l">
                        <span class="hot l">招商热线</span>
                        <span class="shuzi l">{{ $constant.tel }}</span>
                    </p> -->
                </div>
                <div class="gold r">
                    <img src="../../assets/img/1.png" />
                    <ul>
                        <li>开店申请</li>
                        <li>网门审核</li>
                        <li>支付开店款项</li>
                        <li>创建店铺</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="middle">
            <div class="center">
                <div class="Box">
                    <img src="../../assets/img/deng.png" /><span class="spa"
                        >注意事项</span
                    >
                    <span
                        >以下所需要上传的电子版资质文件仅支持JPG\GIF\PNG格式图片，大小请控制在1M之内。</span
                    >
                </div>
                <div class="show">
                    <div class="top">
                        <h1>开户银行信息</h1>
                        <p class="four">
                            <span class="span">*</span>公司名称 :<input
                                type="text"
                            />
                        </p>
                        <p class="five">
                            <span class="span">*</span>公司所在地 :<input
                                type="text"
                            />
                        </p>
                        <p class="six">
                            <span class="span">*</span>公司详细地址 :<input
                                type="text"
                            />
                        </p>
                        <p class="four">
                            <span class="span">*</span>公司电话 :<input
                                type="text"
                            />
                        </p>
                        <p class="four">
                            <span class="span">*</span>注册资金 :<input
                                type="text"
                            />
                        </p>
                        <p class="five">
                            <span class="span">*</span>联系人电话 :<input
                                type="text"
                            />
                        </p>
                        <p class="five">
                            <span class="span">*</span>联系人手机 :<input
                                type="text"
                            />
                        </p>
                    </div>
                    <div class="bottom">
                        <h1>营业执照信息（副本）</h1>
                        <p class="five">
                            <span class="span">*</span>营业执照号 :<input
                                type="text"
                            />
                        </p>
                        <p class="seven">
                            <span class="span">*</span>营业执照有效期 :<input
                                type="text"
                            />
                            — <input type="text" />
                        </p>
                        <div class="six">
                            <p class="l">
                                <span class="span">*</span>法定经营范围 :
                            </p>
                            <textarea class="l"></textarea>
                        </div>
                        <p class="seven">
                            <span class="span">*</span>营业执照电子版 :<button>
                                选择文件</button
                            ><span class="huise"
                                >请确保图片清晰，文字可辩并有清晰的红色公章</span
                            >
                        </p>
                    </div>
                    <div class="down">
                        <h1>
                            组织机构代码<span
                                >（企业三证合一的没有组织机构代码的上传营业执照）</span
                            >
                        </h1>
                        <p class="six">
                            <span class="span">*</span>组织机构代码 :<input
                                type="text"
                            />
                        </p>
                        <p class="seven">
                            <span class="span">*</span>组织机构代码证电子版
                            :<button>选择文件</button
                            ><span class="huise"
                                >请确保图片清晰，文字可辩并有清晰的红色公章</span
                            >
                        </p>
                    </div>
                    <div class="base">
                        <h1>
                            一般纳税人证明
                            <span
                                >注：所属企业具有一般纳税人证明时，此项为必填。</span
                            >
                        </h1>
                        <p>
                            <span class="span">*</span>一般纳税人证明 :<button>
                                选择文件</button
                            ><span class="huise"
                                >请确保图片清晰，文字可辩并有清晰的红色公章</span
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <com-foot></com-foot>
    </div>
</template>

<script>
import ComFoot from "@/common/footerDetail.vue";
export default {
    data() {
        return {
            fromChild: ''
        }
    },
    components: {
        ComFoot
    },
    methods: {
        onChildClick (value) {
            this.fromChild = value
            if(this.fromChild == 'false') {
                location.reload();
            }
        }
    }
};
</script>

<style lang="less" scoped>
.center {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
}
.l {
    float: left;
}
.r {
    float: right;
}
#logo {
    width: 100%;
    height: 104px;
    .center {
        height: 104px;
        .Gongpin {
            height: 104px;
            img {
                margin-top: 20px;
                padding-right: 20px;
                height: 60px;
            }
        }
        .iphone {
            width: 240px;
            height: 104px;
            .hot {
                display: inline-block;
                width: 70px;
                height: 104px;
                line-height: 104px;
                font-size: 13px;
                margin-left: 20px;
            }
            .shuzi {
                display: inline-block;
                height: 104px;
                line-height: 104px;
                font-size: 16px;
                color: #d53738;
                font-weight: 500;
            }
        }
        .gold {
            margin-top: 34px;
            margin-left: 162px;
            ul {
                overflow: hidden;
                margin-top: 7px;
                li {
                    float: left;
                    font-size: 12px;
                    color: #666;
                }
                li:nth-of-type(1) {
                    margin: 0 72px 0 35px;
                    color: #d02629;
                }
                li:nth-of-type(3) {
                    margin: 0 56px 0 56px;
                }
            }
        }
    }
}
.middle {
    background: #fafafa;
    padding: 20px 0;
    .center {
        background: #fff;
        overflow: hidden;
        .Box {
            height: 97px;
            border: 1px solid #bce8f1;
            background: #eff8ff;
            margin: 51px 110px 33px;
            img {
                margin: 27px 16px 0 40px;
                float: left;
            }
            span {
                font-size: 12px;
                color: #b1b4b6;
                float: left;
                width: 70%;
            }
            .spa {
                color: #333;
                font-size: 14px;
                margin: 25px 0 3px;
            }
        }
        input {
            width: 286px;
            height: 30px;
            border: 1px solid #ccc;
            margin-left: 31px;
        }
        select {
            margin-left: 31px;
            width: 286px;
            height: 30px;
            border: 1px solid #ccc;
            outline: none;
            color: #888;
        }
        .span {
            color: #ff3f3f;
            margin-right: 5px;
        }
        .show {
            margin: 0 110px;
            h1 {
                font-size: 14px;
                color: #333;
                margin-bottom: 22px;
            }
            p {
                font-size: 12px;
                color: #555;
                margin-bottom: 20px;
                line-height: 32px;
            }
            p.four {
                margin-left: 118px;
            }
            p.three {
                margin-left: 131px;
            }
            p.five {
                margin-left: 107px;
            }
            p.two {
                margin-left: 142px;
            }
            p.eight {
                margin-left: 83px;
            }
            p.six {
                margin-left: 94px;
            }
            .top {
                height: 425px;
                border-bottom: 1px dashed #d7d7d7;
                margin-bottom: 40px;
            }
            .bottom {
                height: 296px;
                border-bottom: 1px dashed #d7d7d7;
                p.seven {
                    margin-left: 84px;
                    input {
                        width: 147px;
                    }
                    input:nth-of-type(2) {
                        margin-left: 0;
                    }
                }
                .six {
                    overflow: hidden;
                    margin-left: 97px;
                    margin-bottom: 20px;
                    textarea {
                        width: 286px;
                        height: 75px;
                        margin-left: 31px;
                    }
                }
                .huise {
                    color: #999;
                }
                button {
                    cursor: pointer;
                    width: 74px;
                    height: 21px;
                    text-align: center;
                    line-height: 21px;
                    border: 1px solid #959595;
                    margin: 0 22px;
                    font-size: 12px;
                    color: #060606;
                }
            }
            .down {
                height: 160px;
                border-bottom: 1px dashed #d7d7d7;
                h1 {
                    margin-top: 31px;
                    span {
                        color: #999;
                        font-size: 13px;
                    }
                }
                p.seven {
                    margin-left: 46px;
                    .huise {
                        color: #999;
                    }
                }
                button {
                    cursor: pointer;
                    width: 74px;
                    height: 21px;
                    text-align: center;
                    line-height: 21px;
                    border: 1px solid #959595;
                    margin: 0 22px;
                    font-size: 12px;
                    color: #060606;
                }
            }
            .base {
                /*height: 150px;*/
                height: 206px;
                h1 {
                    margin-top: 31px;
                    span {
                        color: #999;
                        font-size: 13px;
                    }
                }
                p {
                    margin: 23px 0 69px 84px;
                    .huise {
                        color: #999;
                    }
                    button {
                        cursor: pointer;
                        width: 74px;
                        height: 21px;
                        text-align: center;
                        line-height: 21px;
                        border: 1px solid #959595;
                        margin: 0 22px;
                        font-size: 12px;
                        color: #060606;
                    }
                }
                .btn {
                    cursor: pointer;
                    width: 94px;
                    height: 32px;
                    border-radius: 4px;
                    text-align: center;
                    line-height: 32px;
                    color: #fff;
                    font-size: 12px;
                    background: #d02629;
                    margin-left: 205px;
                }
            }
        }
    }
}
#commonFooter {
    width: 100%;
    height: 90px;
    .center {
        height: 90px;
        ul {
            width: 100%;
            height: 12px;
            line-height: 12px;
            margin-top: 20px;
            margin-left: 470px;
            li {
                width: 60px;
                height: 12px;
                border-right: 1px solid #8b8b8b;
                font-size: 12px;
                text-align: center;
            }
            li:last-child {
                border-right: 0;
            }
        }
        .online {
            width: 100%;
            height: 26px;
            line-height: 26px;
            text-align: center;
            font-size: 12px;
            margin-top: 5px;
        }
        .onlines {
            width: 100%;
            height: 26px;
            line-height: 26px;
            text-align: center;
            font-size: 12px;
        }
    }
}
</style>
