<template>
    <div class="vip-wrapper">
        <!-- <common-header></common-header> -->
        <common-header v-on:childToParent="onChildClick"></common-header>
        <store-header :allShop="true"></store-header>
        <div class="wrapper-hold">
            <div class="header">
                <h1>vip 会员说明</h1>
            </div>
            <div class="contailer">
                <img src="../../../assets/img/deng.png" alt />
                <div class="right">
                    <p class="first">温馨提示</p>
                    <p class="second">
                        <span>会员等级按照在该店铺消费的总金额自动升级</span>
                    </p>
                </div>
            </div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column
                    prop="level_name"
                    label="会员等级"
                    width="180"
                ></el-table-column>
                <el-table-column prop="discount" label="折扣力度" width="180">
                    <template slot-scope="scope">
                        <span>{{ parseInt(scope.row.discount) + "%" }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="money_big"
                    label="最高消费金额"
                ></el-table-column>
                <el-table-column
                    prop="money_small"
                    label="最低消费金额"
                ></el-table-column>
            </el-table>
            <div class="spec">*如有问题，请咨询店内客服</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            fromChild: ''
        };
    },
    created() {
        // let title = "VIP" + this.$constant.webComContent;
         let title = "VIP" + '-' + this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
    },
    mounted() {
        console.log(this.$route.query.id, 332211);
        this.getVipInfo();
    },
    methods: {
        onChildClick (value) {
            this.fromChild = value
            if(this.fromChild == 'false') {
                location.reload();
            }
        },
        getVipInfo() {
            this.HTTP(
                this.$httpConfig.memberImportant,
                {
                    store_id: this.$route.query.id
                },
                "post"
            )
                .then(res => {
                    this.tableData = res.data.data;
                    // console.log(res, 222);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
</script>

<style lang="less" scoped>
.vip-wrapper {
    background-color: #fff;
    margin: 0 auto;

    .wrapper-hold {
        position: relative;
        margin: 0 15%;
        .header {
            margin: 20px;
            border-bottom: 1px solid #e7e7e7;
            padding-bottom: 10px;
            width: 800px;

            h1 {
                color: #d19e29;
                font-size: 16px;
                // border-bottom: 2px solid #d19e29
            }
        }

        .contailer {
            background: #eff8ff;
            display: flex;
            margin: 0 15px;

            img {
                margin: 30px;
                height: 28px;
            }

            .right {
                margin-top: 30px;
                margin-bottom: 30px;

                .first {
                    font-weight: bold;
                    font-size: 14px;
                    margin-bottom: 10px;
                }

                .second {
                    font-weight: bold;

                    span {
                        color: #9a9a9a;
                    }
                }

                .last {
                    font-weight: bold;

                    span {
                        color: #9a9a9a;
                    }
                }
            }
        }

        .spec {
            color: #dec2af;
            margin: 10px;
        }
    }
}
</style>
