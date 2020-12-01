<template>
    <div class="mineNews l">
        <div class="top"><span>我的消息</span></div>
        <div class="same" v-for="(item, index) in messageData" :key="item.id">
            <p>
                <span class="l"></span>{{ item.theme
                }}<span class="r" v-if="item.create_time">{{
                    item.create_time | formatDate
                }}</span>
            </p>
            <div class="check_status">
                <span>{{ item.news_info }}</span>
                <el-button size="mini" v-if="item.status == 0" @click="handleCheck(item.id)">查看</el-button>
                <el-button size="mini" v-if="item.status == 1" :disabled='true'
                    >已查看</el-button
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messageData: {}
        };
    },

    created() {
        // let title = "我的消息" + this.$constant.webComContent;
          let title = "我的消息" + '-' + this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
        this.getMessageInfo();
    },
    methods: {
        getMessageInfo() {
            this.HTTP(this.$httpConfig.messageList).then(res => {
                this.messageData = res.data.data;
            });
        },
        handleCheck(id){
             this.HTTP(this.$httpConfig.messageCheck,{
                 id:id
             }).then(res => {
                console.log(res.data.data,222);
            });
            this.getMessageInfo()
        },
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
.mineNews {
    height: 954px;
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
    .same {
        overflow: hidden;
        margin: 0 17px;
        border-bottom: 1px dashed #e7e7e7;
        .check_status {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        p {
            font-size: 14px;
            color: #333;
            line-height: 48px;
            span.r {
                color: #666;
                font-size: 10px;
            }
            span.l {
                width: 4px;
                height: 4px;
                background: #d29d2b;
                margin: 23px 10px 0 0;
            }
        }
        span {
            font-size: 12px;
            color: #555;
            line-height: 24px;
            margin: 12px 0;
            display: block;
        }
    }
}
</style>
