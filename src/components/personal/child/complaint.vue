<template>
    <div class="complaint l">
        <div class="top">
            <span>我的投诉</span>
        </div>
        <div class="shixiang">
            <p>我的投诉注意事项</p>
            <span>. 交易状态为“交易成功”后，15天内可以投诉商家</span>
            <span
                >.
                可申请由平台方介入处理投诉，如投诉成功后，被投诉店铺将会受到惩罚</span
            >
        </div>
        <div class="base">
            <div class="thead">
                <p>投诉编号</p>
                <p>订单编号</p>
                <p>被投诉方</p>
                <p>投诉原因</p>
                <p>投诉状态</p>
                <p>申请时间</p>
                <p>操作</p>
            </div>
            <div
                class="under"
                v-for="(item, index) in complainData"
                :key="index"
            >
                <p>{{ item.id }}</p>
                <p>{{ item.order_id }}</p>
                <p>{{ item.shop_name }}</p>
                <p>{{ item.shop_name }}</p>
                <p>{{ item.complain_state }}</p>
                <p>{{ item.complain_datetime | formatDate }}</p>
                <p @click="cancel(item.id,index)">取消</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            complainData: []
        };
    },
    mounted() {
        this.getList();
    },
    created() {
        if(localStorage.getItem("loginuserdata") == 'true') {
            // let title = "我的投诉" + this.$constant.webComContent;
            let title = "我的投诉" + '-' + this.$constant.webComContent;
            this.showScroll.scrollTitle(title);
        } 
        // else {
        //       this.$router.push('/passwordLogin')
        // } 
    },
    methods: {
        getList() {
            this.HTTP(this.$httpConfig.complainList, {}, "post")
                .then(res => {
                    this.complainData = res.data.data.list;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        cancel(id,index) {
            this.$confirm("确认要删除该宝贝吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.HTTP(
                        this.$httpConfig.ComplainDel,
                        { id: id },
                        "post"
                    ).then(res => {
                        this.$message.success("删除成功");
                        this.complainData.splice(index,1)
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
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
.complaint {
    height: 956px;
    width: 980px;
    background: #fff;
    margin: 16px 0;
    .top {
        overflow: hidden;
        margin: 14px 17px 20px;
        border-bottom: 1px solid #e7e7e7;
        line-height: 37px;
        span {
            display: inline-block;
            width: 104px;
            text-align: center;
            border-bottom: 2px solid #d02629;
            color: #d02629;
        }
    }
    .shixiang {
        margin: 0 17px 20px;
        height: 127px;
        border: 1px solid #bce8f1;
        background: #eff8ff;
        p {
            margin: 25px 0 9px 23px;
            font-size: 15px;
            color: #333;
        }
        span {
            display: block;
            line-height: 25px;
            color: #999;
            font-size: 12px;
            margin-left: 23px;
        }
    }
    .base {
        margin: 0 17px;
        border: 1px solid #e7e6e6;
        height: auto;
        .thead {
            height: 42px;
            line-height: 42px;
            background: #f1f1f1;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            p {
                width: 131px;
                padding: 0 35px;
                float: left;
                font-size: 12px;
                color: #333;
            }
        }
        .under {
            height: 44px;
            line-height: 44px;
            border-bottom: 1px solid #e7e6e6;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            p {
                width: 131px;
                padding: 0 35px;
                float: left;
                font-size: 12px;
                color: #333;
            }
            p:nth-of-type(5) {
                color: #ff6000;
            }
            p:nth-of-type(3),
            p:nth-of-type(4) {
                padding: 0;
            }
            p:nth-of-type(6) {
                padding: 0;
            }
            p:nth-of-type(7) {
                padding: 0;
                width: 60px;
                height: 23px;
                text-align: center;
                line-height: 23px;
                border: 1px solid #e7e6e6;
                color: #a9a9a9;
                cursor: pointer;
                margin: 10px 30px 0 40px;
            }
        }
    }
}
</style>
