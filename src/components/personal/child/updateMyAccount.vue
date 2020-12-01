<template>
    <div class="uodateMyCount-wrapper">
        <div class="top">
            <span class="l">我的提现账户修改账户</span>
        </div>
        <div class="shixiang">
            <p>我的提现账户注意事项</p>
            <span>. 您需要先绑定您的银行卡、支付宝等账户才能申请账户提现</span
            ><span>. 申请提现时，网站方会将款项打入您选定的已绑定账户中</span
            ><span
                >.
                为确保您的账户信息安全，在绑定账户时需要进行身份验证，感谢您的理解和支持</span
            >
        </div>
        <div class="wrapper-inner" v-for="item in updateInfo" :key="item.id">
            <div class="com">
                <p>姓名:</p>
                <el-input
                    v-model="realname"
                    :placeholder="item.realname"
                ></el-input>
            </div>
            <div class="com">
                <p>手机号码:</p>
                <el-input
                    v-model="mobile"
                    :placeholder="item.mobile"
                ></el-input>
            </div>
            <div class="com">
                <p>身份证号:</p>
                <el-input
                    v-model="id_card"
                    :placeholder="item.id_card"
                ></el-input>
            </div>
            <div class="com">
                <p>银行卡编号:</p>
                <el-input
                    v-model="card_num"
                    :placeholder="item.card_num"
                ></el-input>
            </div>
            <div class="com">
                <p>银行卡类型:</p>
                <el-input
                    v-model="belong"
                    :placeholder="item.belong"
                ></el-input>
            </div>

            <div class="save">
                <el-button @click="handleSave">保存</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            updateInfo: [],
            realname: "",
            computedName: "",
            id_card: "",
            belong: "",
            card_num: "",
            mobile: "",
            saveData: []
        };
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        this.getUpdateData();
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {},
    methods: {
        handleSave() {
            if (
                !/^[\u4E00-\u9FA5\uF900-\uFA2D|\w]{2,20}$/.test(this.realname)
            ) {
                this.$message.error("输入姓名格式错误");
                return;
                // this.computedName = this.realname.replace(/\s*/g, "");
            } else if (!/^1[345789]\d{9}$/.test(this.mobile)) {
                this.$message.error("请填写正确的手机号");
                return;
            } else if (
                /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(
                    this.id_card
                ) === false
            ) {
                this.$message.error("身份证输入不合法");
                return;
            } else if (this.belong) {
                this.showCheck.checkNull(this.belong);
            } else if (
                !/^(998801|998802|622525|622526|435744|435745|483536|528020|526855|622156|622155|356869|531659|622157|627066|627067|627068|627069)\d{10}$/.test(
                    this.card_num
                )
            ) {
                this.$message.error("银行卡编号错误");
                return;
            } else if (
                !/^[\u4E00-\u9FA5\uF900-\uFA2D|\w]{2,20}$/.test(this.belong)
            ) {
                this.$message.error("银行卡类型错误");
                return;
            }

            this.HTTP(
                this.$httpConfig.updateWithdrawAccount,
                {
                    id: this.$route.query.id,
                    realname: this.realname,
                    id_card: this.id_card,
                    belong: this.belong,
                    card_num: this.card_num,
                    mobile: this.mobile
                },
                "post"
            )
                .then(res => {
                    this.saveData = res.data.data;
                    console.log(res.data.data);
                })
                .catch(err => {
                    console.error(err);
                });
            this.$router.push({
                name: "withdraWalaccount"
            });
        },
        getUpdateData() {
            this.HTTP(
                this.$httpConfig.checkWithdrawAccount,
                {
                    id: this.$route.query.id
                },
                "post"
            )
                .then(res => {
                    this.updateInfo = res.data.data;
                    console.log(res.data.data, 8899);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    },

    components: {}
};
</script>
<style lang="less">
.uodateMyCount-wrapper {
    .wrapper-inner {
        position: relative;
        .com {
            display: flex;
            align-items: center;
            margin: 10px 0;
            .right-com {
                margin-left: 50px;
            }
        }
        .el-input {
            width: 30%;
            margin: 5px 10px;
        }
        .save {
            position: absolute;
            left: 50%;
            bottom: -100px;
        }
    }
}
</style>
<style lang="less" scoped>
.uodateMyCount-wrapper {
    height: 956px;
    width: 980px;
    background: #fff;
    margin: 16px 0;
    .top {
        overflow: hidden;
        margin: 14px 17px 20px;
        border-bottom: 1px solid #e7e7e7;
        line-height: 37px;
        span.l {
            width: 104px;
            text-align: center;
            border-bottom: 2px solid #d02629;
            font-size: 14px;
            color: #d02629;
            padding-bottom: 7px;
        }
        span.r {
            width: 80px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            background: #d02629;
            color: #fff;
            border-radius: 4px;
            margin-top: 4px;
        }
    }
    .shixiang {
        margin: 0 17px 12px;
        border: 1px solid #bce8f1;
        background: #eff8ff;
        height: 141px;
        p {
            font-size: 15px;
            color: #333;
            margin: 15px 0 9px 23px;
        }
        span {
            font-size: 12px;
            color: #a5a7a8;
            line-height: 24px;
            display: block;
            margin-left: 23px;
        }
    }
}
</style>
