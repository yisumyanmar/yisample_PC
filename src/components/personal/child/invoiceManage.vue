<template>
    <div>
        <div class="invoice_info l">
            <ul class="top">
                <li @click="Hit(0)" :class="{ line: isLine == 0 }">
                    <p>电子发票</p>
                </li>
                <li @click="Hit(1)" :class="{ line: isLine == 1 }">
                    <p>纸质发票</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLine: 0
        };
    },
    created() {
        // let title = "发票管理" + this.$constant.webComContent;
        let title = "发票管理" + '-' + this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
    },
    methods: {
        Hit(index) {
            this.isLine = index;
        }
    }
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
.invoice_info {
    height: 956px;
    width: 980px;
    background: #fff;
    margin: 16px 0;
    .top {
        overflow: hidden;
        margin: 14px 17px 20px;
        border-bottom: 1px solid #e7e7e7;
        height: 37px;
        li {
            float: left;
            cursor: pointer;
            height: 36px;
            color: #666;
            width: 122px;
            p {
                height: 16px;
                border-right: 1px solid #e7e7e7;
                text-align: center;
                margin-top: 10px;
                font-size: 12px;
                span {
                    color: #d02629;
                }
            }
        }
        li:nth-of-type(2) {
            width: 168px;
            p {
                border-right: 0;
            }
        }
        .line {
            color: #d02629;
            border-bottom: 1px solid #d02629;
        }
    }
}
</style>
