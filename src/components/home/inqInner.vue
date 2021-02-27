<template>
    <div id="inqInner" ref="inqInner">
        <common-header></common-header>
        <head-com></head-com>
        <div class="inqInn">
            <div class="current">
                <span>当前位置： 询价公示></span>
                <span>五矿二十三冶一公司泰安万境广场商业二期PPR管材采购</span>
            </div>
            <div class="location">
                <div class="location_head">
                    <p>中铁电气化局贵阳轨道交通2号线车站装修及机电安装5标零星材料采购100602-询价公示的中标结果公告</p>
                    <p>中铁电气化局西安电气化工程有限公司发布时间：2020-10-09 16:04</p>
                </div>
                <div class="location_body">
                    <p>中铁电气化局贵阳轨道交通2号线车站装修及机电安装5标零星材料采购100602-询价公示评标工作已经结束，中标人已经确定。现将中标结果公布如下</p>
                    <p>中标供应商：贵州正黔通管业有限责任公司（中标总金额：¥48400</p>
                    <p>中标理由：最低价</p>
                </div>
            </div>
        </div>
        <foot-com></foot-com>
        <back-top></back-top>
    </div>
</template>

<script>
export default {
    name: 'inqInner',
    data() {
        return {
            
        }
    },
    created() {
        this.getInquiryPublicityDetail();
    },
    methods: {
        getInquiryPublicityDetail() {
            this.HTTP(
                this.$httpConfig.inquiryPublicityDetail, 
                {
                    id: this.$route.query.id
                    },
                    "post"
                    )
                .then(res => {
                    this.PublicityDetail = res.data.data;
                })
                .catch(err => {
                    console.log(err.data.message)
                });
        },
    }
}
</script>

<style lang="less" scoped>
#inqInner {
    position: relative;
    background: #f1f1f1;
    .inqInn {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 50px;
        .current {
            padding: 20px 0;
            span {
                font-size: 13px;
            }
            span:nth-of-type(1) {
                color: #333333;
            }
            span:nth-of-type(2) {
                color:#1A6DF8;
                cursor: pointer;
            }
        }
        .location {
            height: auto;
            background: #ffffff;
            .location_head {
                margin: 20px;
                text-align: center;
                border-bottom: 1px solid #E6E7EB;
                padding-bottom: 20px;
                p:nth-of-type(1) {
                    font-size: 18px;
                    padding: 30px 0 10px 0;
                }
                p:nth-of-type(2) {
                    font-size: 14px;
                    color: #999999;
                }
            }
            .location_body {
                padding: 20px 0 50px 40px;
                p {
                    font-size: 14px;
                    color: #333333;
                    padding-bottom: 10px;
                }
            }
        }
    }
}
</style>