<template>
    <div class="d-account l">
        <div v-show="FenXiao">
            <div class="top">
                <p class="l">分销账户信息</p>
                <p class="r" @click="shenQing">申请提现</p>
            </div>
            <ul class="new-ul">
                <li>
                    总返利金额<span>{{ userInfo.total }}</span>
                </li>
                <li>
                    已提现金额 <span>{{ userInfo.withdrawals }}</span>
                </li>
                <li>
                    可提现总金额 <span>{{ userInfo.no_mention }}</span>
                </li>
            </ul>
            <el-table
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @select="handleSelectionChange"
            >
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column label="店铺名称" width="180" prop="shop_name">
                </el-table-column>
                <el-table-column prop="money" label="可提现金额" width="180">
                </el-table-column>
            </el-table>
        </div>
        <div class="inner" v-show="FenXiaos">
            <div class="top"><p>绑定提现账号</p></div>
            <div class="spa">
                <p>
                    <span>*</span>请输入您要提现的金额:
                    <input type="text" v-model="money_input" /><span
                        ><img src="../../../assets/img/weixian.png" />
                        请输入您要提现的金额不能为空</span
                    >
                </p>
                <p class="huise">提现金额必须大于0，不得大于您的可提现资金</p>
            </div>
            <div class="spa">
                <div class="input-wrapper">
                    <span>*</span>
                    <div class="desc">请输入您要提现的账户:</div>
                    <el-input v-model="account_input"></el-input>
                </div>
                <p class="huise">
                    提现，需要绑定您的银行卡或者支付宝等账户，网站方会将提现金额打入您绑定的提现账户中
                </p>
            </div>
            <div class="submit" @click="handleSubmit">提交申请</div>
        </div>
    </div>
</template>

<script>
import { async } from "q";
export default {
    data() {
        return {
            FenXiao: true,
            FenXiaos: false,
            account_input: "",
            money_input: "",
            navIndex: 0,
            currentPage: 1, //初始页
            pagesize: 10, // 每页的数据
            userList: [],
            userInfo: {},
            select_storeID: "",
            checkID: "",
            tableData: [],
            navList: [
                {
                    name: "用户名"
                },
                {
                    name: "头像"
                },
                {
                    name: "推荐人"
                },
                {
                    name: "可提现佣金"
                },
                {
                    name: "已提现佣金"
                },
                {
                    name: "未结算佣金"
                }
            ]
        };
    },
    created() {
        this.getUserInfo();
        // let title = "分销账户" + this.$constant.webComContent;
         let title = "分销账户" + '-' + this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
    },
    methods: {
        getUserInfo() {
            this.HTTP(this.$httpConfig.distributeUserInfo, {})
                .then(res => {
                    this.userInfo = res.data.data;
                    this.tableData = this.userInfo.commission;
                })
                .catch(err => {
                    console.error(err);
                });
        },
        handleSelectionChange(selection, row) {
            this.select_storeID = row.store_id; //选择相应的店铺 id
            this.checkID = selection.length; //没有勾选就不能进行兑换
        },
        async checkMoney() {
            //校验输入的金额是否正确
            var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
            if (!reg.test(this.money_input)) {
                this.$message({
                    message: "您输入的金额格式不正确,请重新输入!",
                    type: "error"
                });
                return;
            } else {
                await this.checkPhone();
            }
        },
        async checkPhone() {
            if (!/^1[3456789]\d{9}$/.test(this.account_input)) {
                this.$message({
                    message: "手机号码有误，请重新的输入",
                    type: "error"
                });
                return;
            } else {
                //检查是否可以兑换
                this.checkAvailable();
            }
        },
        checkAvailable() {
            if (Number(this.money_input) > Number(this.userInfo.no_mention)) {
                alert("提现金额不足");
                return;
            } else {
                this.$message({
                    message: "操作成功",
                    type: "success"
                });
                this.FenXiao = true;
                this.FenXiaos = false;
                this.getUserInfo();
            }
        },

        shenQing() {
            if (this.checkID == 0) {
                this.$message({
                    message: "请选择你要兑换的店铺佣金",
                    type: "error"
                });
                return;
            }
            this.FenXiao = false;
            this.FenXiaos = true;
        },
        handleSizeChange(size) {
            this.pagesize = size;
            console.log(this.pagesize); //每页下拉显示数据
        },
        handleCurrentChange(currentPage) {
            this.currentPage = currentPage;
            console.log(this.currentPage); //点击第几页
        },
        handleSubmit() {
            this.checkMoney();
            this.HTTP(
                this.$httpConfig.distributeSubmitApply,
                {
                    type: "支付宝",
                    store_id: this.select_storeID,
                    account: this.account_input,
                    money: this.money_input
                },
                "post"
            )
                .then(res => {
                    console.log(res.data.data);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
</script>

<style lang="less">
.el-table__header-wrapper {
    overflow: hidden;
    border-bottom: 1px solid #ebeef5;
}
.el-table th.is-leaf {
    border-bottom: none !important;
}
.new-ul {
    ul {
        background: #fffdee !important;
    }

    margin: 15px;
    padding: 15px;
    span {
        color: #e31939;
    }
}
.input-wrapper {
    display: flex;
    align-items: center;
    .el-input {
        width: 60%;
    }
    .el-input__inner {
        width: 400px;
        margin-left: 20px;
    }
}
.show-detail {
    img {
        width: 40px;
        height: 40px;
    }
}
#show-content {
    margin-top: 20px;
    padding: 10px;
    margin-left: 18px;
    background: #cccccc;
    font-size: 22px;
    position: absolute;
}
</style>
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
.d-account {
    width: 980px;
    background: #fff;
    margin: 16px 0;
    height: 550px;
    .top {
        overflow: hidden;
        margin: 14px 17px 0px;
        border-bottom: 1px solid #e7e7e7;
        line-height: 37px;
        p.l {
            width: 104px;
            text-align: center;
            border-bottom: 2px solid #d02629;
            font-size: 14px;
            color: #d02629;
        }
        p.r {
            width: 80px;
            height: 28px;
            background: #ffaa45;
            text-align: center;
            line-height: 28px;
            margin-top: 5px;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
        }
    }
    ul {
        margin: 11px 17px 0;
        display: flex;
        li {
            line-height: 55px;
            margin-bottom: 1px;
            font-size: 12px;
            color: #7a7973;
            background: #fffdee;
            padding: 0 40px;
            cursor: pointer;
        }
        .active {
            border-bottom: 1px solid red;
            span {
                color: #e31939;
            }
        }
    }
    .inner {
        .top {
            overflow: hidden;
            margin: 14px 17px 0px;
            border-bottom: 1px solid #e7e7e7;
            line-height: 37px;
            p {
                width: 104px;
                text-align: center;
                border-bottom: 2px solid #d02629;
                font-size: 12px;
                color: #d02629;
            }
        }
        .spa {
            margin: 30px 17px 0px;
            span {
                color: #ff2424;
                margin-right: 7px;
            }
            input {
                width: 150px;
                height: 30px;
                border: 1px solid #ccc;
                margin: 0 12px 0 10px;
            }
            img {
                display: inline-block;
                margin-top: -3px;
            }
            .huise {
                font-size: 12px;
                color: #999;
                margin: 7px 0 0 165px;
            }
            select {
                width: 268px;
                height: 30px;
                outline: none;
                color: #999;
                margin: 0 12px 0 10px;
            }
            .lanse {
                color: #427ab4;
                cursor: pointer;
            }
        }
        .submit {
            width: 94px;
            height: 32px;
            text-align: center;
            background: #d02629;
            color: #fff;
            line-height: 32px;
            font-size: 12px;
            margin: 33px 0 0 180px;
            cursor: pointer;
            border-radius: 3px;
        }
    }
}
</style>
