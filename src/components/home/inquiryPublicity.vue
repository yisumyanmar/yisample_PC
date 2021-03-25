<template>
    <div id="inquiryPublicity" ref="inquiryPublicity">
        <common-header></common-header>
        <head-com></head-com>
        <div class="inquiry">
            <div class="inq_search">
                <div class="search_header">
                    <p class="header_text">询价公示</p>
                </div>
                <div class="search_body">
                    <p class="body_keyword">项目关键字：</p>
                    <input class="body_input" v-model="search_title" @keyup.enter="getInquiryPublicityList(search_title)" placeholder="请输入想要搜索的项目关键字"/>
                    <button class="body_button" @click="getInquiryPublicityList(search_title)">查询</button>
                </div>
            </div>
            <div class="inq_project">
                <div class="thead">
                    <p class="l">项目名称</p>
                    <p class="l">发布企业名称</p>
                    <p class="l">发布时间</p>
                    <p class="l">操作</p>
                </div>
                <!-- <div v-for="i in 12" :key="i">
                    <div class="thead_body">
                        <p class="l">中铁电气化局贵阳轨道交通2号线车站装修及机电安装5标零星材料采购100602-询价公示</p>
                        <p class="l">中铁电气化局西安电气化工程有限公司</p>
                        <p class="l">2020.10.09 16:04</p>
                        <p class="l" @click="ToinqInner">查看详情</p>
                    </div>
                    <div class="thead_body">
                        <p class="l">五矿二十三冶一公司泰安万境广场商业二期PPR管材采购-询价公示</p>
                        <p class="l"> 五矿二十三冶建设集团有限公司</p>
                        <p class="l">2020.10.09 16:02</p>
                        <p class="l" @click="ToinqInner">查看详情</p>
                    </div>
                    <div class="thead_body">
                        <p class="l">中铁四局集团钢结构建筑有限公司霍邱县淮河行蓄洪区安置房工程项目部采购钢筋 ...</p>
                        <p class="l">中铁四局集团钢结构有限公司</p>
                        <p class="l">2020.10.09 15:59</p>
                        <p class="l" @click="ToinqInner">查看详情</p>
                    </div>
                </div> -->
                <div v-for="(item, index) in PublicityList.data" :key="index">
                    <div class="thead_body">
                        <p v-if="item.title == null" class="l">-</p>
                        <p v-else class="l">{{item.title}}-询价公示</p>
                        <p class="l">{{item.user_name}}</p>
                        <p class="l">{{item.create_time | formatDate}}</p>
                        <p class="l" @click="ToinqInner(item.id)">查看详情</p>
                    </div>
                </div>
                <div class="pagation" v-if="PublicityList.count">
                    <el-pagination
                        background
                        layout="total, prev, pager, next"
                        :total="parseInt(PublicityList.count)"
                        @current-change="currentPage">
                    </el-pagination>
                </div>
            </div>
        </div>
        <foot-com></foot-com>
        <back-top></back-top>
    </div>
</template>

<script>
export default {
    name: 'inquiryPublicity',
    data() {
        return {
            PublicityList: [],
            search_title: ''
        }
    },
    created() {
        this.getInquiryPublicityList();
    },
    methods: {
        ToinqInner(id) {
            this.$router.push({
                name: "inqInner",
                query: {
                    id: id
                }
            });
        },
        getInquiryPublicityList(title, p) {
            if(this.search_title) {
            this.HTTP(
                this.$httpConfig.inquiryPublicityList, {
                    title: title,
                    page: p
                }, "post")
                .then(res => {
                    this.PublicityList = res.data.data;
                })
                .catch(err => {
                    console.log(err.data.message)
                });
            } else {
                this.HTTP(
                this.$httpConfig.inquiryPublicityList, {
                    page: p
                }, "post")
                .then(res => {
                    this.PublicityList = res.data.data;
                })
                .catch(err => {
                    console.log(err.data.message)
                });
            }
        },
        currentPage (val) {
            this.getInquiryPublicityList(val);
        },
    }
}
</script>

<style lang="less" scoped>
.l {
    float: left;
}
#inquiryPublicity {
    position: relative;
    background: #f1f1f1;
    .inquiry {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 50px;
        .inq_search {
            background: #ffffff;
            height: 150px;
            margin: 20px 0;
            .search_header {
                padding: 18px 0;
                border-bottom: 1px solid #E9EEF3;
                .header_text {
                    font-size: 14px;
                    padding-left: 15px;
                    cursor: pointer;
                }
            }
            .search_body {
                display: flex;
                padding: 27px 15px;
                .body_keyword {
                    width: 100px;
                    font-size: 14px;
                    padding-top: 9px;
                    cursor: pointer;
                }
                .body_input {
                    border: 1px solid #C4C6CF;
                    border-radius: 3px;
                    padding: 10px;
                    width: 250px;
                    font-size: 14px;
                    cursor: pointer;
                }
                .body_button {
                    background: #D02629;
                    color: #ffffff;
                    margin-left: 20px;
                    padding: 8px;
                    font-size: 14px;
                    width: 80px;
                    border-radius: 3px;
                    cursor: pointer;
                }
            }
        }
        .inq_project {
            background: #ffffff;
            height: auto;
            padding: 15px;
            .thead {
                overflow: hidden;
                height: 50px;
                background: #F1F1F1;
                line-height: 50px;
                p {
                    font-size: 14px;
                    color: #333333;
                    cursor: pointer;
                }
                p:nth-of-type(1) {
                    margin: 0 270px;
                }
                p:nth-of-type(2) {
                    margin: 0 90px;
                }
                p:nth-of-type(3) {
                    margin: 0 70px;
                }
                p:nth-of-type(4) {
                    margin: 0 40px;
                }
            }
            .thead_body {
                overflow: hidden;
                height: 50px;
                border-bottom: 1px solid #F1F1F1;
                line-height: 50px;
                p {
                    font-size: 14px;
                    color: #89919D;
                    cursor: pointer;
                }
                p:nth-of-type(1) {
                    margin: 0 20px;
                    width: 550px;
                }
                p:nth-of-type(2) {
                    margin: 0 20px;
                    width: 240px;
                    text-align: center;
                }
                p:nth-of-type(3) {
                    margin: 0 20px;
                    width: 140px;
                }
                p:nth-of-type(4) {
                    margin: 0 20px;
                    color: #1A6DF8;
                    width: 80px;
                    padding-left: 10px;
                }
            }
            .pagation{
                text-align: right;
                margin-top: 30px;
            }
        }
    }
}
</style>