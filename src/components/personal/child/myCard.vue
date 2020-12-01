<template>
    <div class="myCard l">
        <div class="top">
            <img :src="URL + receivedData.user_header" alt="" />
            <p>{{ receivedData.user_name }}</p>
            <!-- <span>加入微信关注：</span> -->
        </div>
        <!-- <p class="under"><img src="../../../assets/img/card1.png"/>扫一扫，进入商城</p> -->
        <div id="qrCode_register" ref="qrCodeDiv" class="under">
            扫一扫，进入商城
        </div>
    </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
    data() {
        return {
            receivedData: ""
        };
    },
    created() {
        this.receivedData = JSON.parse(sessionStorage.userInfoKey);
        // let title = "我的名片" + this.$constant.webComContent;
         let title = "我的名片" + '-' + this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
    },
    mounted() {
        this.$nextTick(el => {
            new QRCode(this.$refs.qrCodeDiv, {
                text:
                    "http://m.shopsn.cn/Register?user_id=" +
                    this.receivedData.user_id,
                width: 150,
                height: 150,
                colorDark: "#333333", //二维码颜色
                colorLight: "#fff", //二维码背景色
                correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
            });
        });
    },
    methods: {}
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
.myCard {
    width: 980px;
    background: #fff;
    margin: 16px 0;
    padding-bottom: 40px;
    height: 384px;
    .top {
        height: 112px;
        border-bottom: 1px solid #e8e8e8;
        img {
            float: left;
            margin: 10px 14px 0 12px;
        }
        p {
            font-size: 14px;
            color: #333;
            margin-top: 33px;
            float: left;
            width: 70%;
        }
        span {
            display: inline-block;
            font-size: 14px;
            color: #cd2a2c;
            width: 70%;
        }
    }
    .under {
        width: 136px;
        height: 170px;
        text-align: center;
        font-size: 14px;
        margin: 43px auto 0;
        img {
            float: left;
            margin-bottom: 10px;
        }
    }
}
</style>
