<template>
    <div class="guide">
        <common-header v-on:childToParent="onChildClick"></common-header>
        <!-- <head-com></head-com> -->
        <head-com v-if="tempid" :navid = tempid></head-com>
        <div class="center">
            <div class="top">
                <img class="l" src="../../assets/img/fangzi.jpg" alt />
                <ul class="l topul">
                    <li class="l li">
                        <router-link to="home">首页</router-link>
                    </li>
                    <li class="l li">></li>
                    <li class="l li">
                        <router-link to>帮助中心</router-link>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <div class="l left">
                    <div class="up">
                        <p>文章分类</p>
                        <ul>
                            <li
                                v-for="(item, index) in articleType"
                                :key="index"
                                class="l c"
                                @click="geAarticleList(item.id, index)"
                            >
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                    <div class="down">
                        <p>最新文章</p>
                        <ul>
                            <li
                                v-for="(item, index) in articleDataList"
                                :key="index"
                                @click="fun(item.id)"
                            >
                                · {{ item.name }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="right r" v-show="skip">
                    <div class="title-show">
                        {{ showTitle || $route.params.name }}
                    </div>
                    <div
                        v-for="item in articleDataList"
                        :key="item.id"
                        class="title-wrapper"
                        @click="fun(item.id)"
                    >
                        <div>
                            <span class="dot"></span>
                            <div>{{ item.name }}</div>
                        </div>
                        <div>{{ item.create_time | formatDate }}</div>
                    </div>
                    <p class="shop">{{ articleList.name }}</p>
                    <ul>
                        <li
                            v-for="(item, index) in articleList.list"
                            :key="index"
                            @click="fun(item.id)"
                        >
                            · {{ item.name || item.title }}
                            <span class="r">{{ item.create_time }}</span>
                        </li>
                    </ul>
                </div>
                <div class="r dexter" v-show="skips">
                    <div class="shop">
                        <p>{{ articleDetail.name }}</p>
                        <p>{{ articleDetail.create_time | formatDate }}</p>
                    </div>
                    <!-- <div class="zhinan" v-html="articleDetail.content"></div> -->
                    <div class="zhinan" v-html="websiteHTMLYes"></div>
                    
                    <div class="bottom">
                        <p
                            v-if="articleDetail.up_article == null"
                            class="l"
                        ></p>
                        <p v-else class="l">
                            上一篇：
                            <a @click="fun(articleDetail.up_article.id)">
                                {{ articleDetail.up_article.name }}
                            </a>
                            &nbsp;&nbsp;
                            <span>
                                {{
                                    articleDetail.up_article.create_time
                                        | formatDate
                                }}
                            </span>
                        </p>
                        <p
                            v-if="articleDetail.down_article == null"
                            class="l"
                        ></p>
                        <p v-else class="r">
                            下一篇：
                            <a @click="fun(articleDetail.down_article.id)">
                                {{ articleDetail.down_article.name }}
                            </a>
                            &nbsp;&nbsp;
                            <span>
                                {{
                                    articleDetail.down_article.create_time
                                        | formatDate
                                }}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <foot-com
            @handleTitleClick="handleTitleClick"
            @handleDetailClick="handleDetailClick"
        ></foot-com>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skip: true,
            skips: false,
            articleType: [],
            articleLatest: [],
            articleList: [],
            articleDataList: [],
            articleDetail: {},
            showTitle: "",
            showItem: "",
            tempid: '',
            websiteHTMLYes: null,
            fromChild: '' 
        };
    },
    created() {
        console.log(this.$route.params, 111);
        this.getArticleType();
    },
    mounted() {
        this.tempid = this.$route.query.id
        this.getArticleLatest();
        if (this.$route.params.category_id != undefined) {
            this.geAarticleList(this.$route.params.category_id);
            this.showTitle = this.$route.params.name;
            // let title = this.$route.params.name + this.$constant.webComContent;
             let title =this.$constant.webComContent;
            this.showScroll.scrollTitle(title);
        } else if (this.$route.params.type == "articleItem") {
            this.HTTP(
                this.$httpConfig.getArticleDetails,
                {
                    id: this.$route.params.id
                },
                "post"
            )
                .then(res => {
                    this.articleDetail = res.data.data;
                    this.websiteHTMLYes = res.data.data.content;
                    if(this.websiteHTMLYes.includes('&lt;')) {
                        this.websiteHTMLYes = this.htmlDecode(this.websiteHTMLYes);
                    }
                    // alert("mounted " + this.websiteHTMLYes)
                    // let title =
                    //     this.$route.params.title +
                    //     "-" +
                    //     this.$route.params.name +
                    //     this.$constant.webComContent;
                        let title = this.$constant.webComContent;
                    this.showScroll.scrollTitle(title);
                })
                .catch(err => {
                    console.error(err);
                });
            this.skip = false;
            this.skips = true;
        } else {
            this.geAarticleList(1);
        }
    },
    methods: {
        onChildClick (value) {
            this.fromChild = value
            if(this.fromChild == 'false') {
                location.reload();
            }
        },
        handleTitleClick(id, name) {
            this.geAarticleList(id);
            this.showTitle = name;
        },
        handleDetailClick(id) {
            this.HTTP(
                this.$httpConfig.getArticleDetails,
                {
                    id: id
                },
                "post"
            ).then(res => {
                this.articleDetail = res.data.data;
                this.websiteHTMLYes = res.data.data.content;
                if(this.websiteHTMLYes.includes('&lt;')) {
                    this.websiteHTMLYes = this.htmlDecode(this.websiteHTMLYes);
                }
                // alert("handle detail " + this.websiteHTMLYes)
            });
            this.skip = false;
            this.skips = true;
        },
        htmlDecode(input){
            var e = document.createElement('div');
            e.innerHTML = input;
            return e.childNodes[0].nodeValue;
        },
        fun(id) {
            this.HTTP(
                this.$httpConfig.getArticleDetails,
                {
                    id: id
                },
                "post"
            ).then(res => {
                this.articleDetail = res.data.data;
                this.websiteHTMLYes = res.data.data.content;
                if(this.websiteHTMLYes.includes('&lt;')) {
                    this.websiteHTMLYes = this.htmlDecode(this.websiteHTMLYes);
                }
                // alert("fun " + this.websiteHTMLYes)
                this.showItem = this.articleDetail.name;
                this.skip = false;
                this.skips = true;
            });
        },
        getArticleType() {
            console.log(111);
            this.HTTP(this.$httpConfig.getArticleType, {}, "post").then(res => {
                this.articleType = res.data.data;
            });
        },
        getArticleLatest() {
            this.HTTP(this.$httpConfig.getArticleLatest, {}, "post").then(
                res => {
                    this.articleLatest = res.data.data;
                }
            );
        },
        geAarticleList(id, index) {
            if (!index) {
                this.showTitle = "帮助中心";
            } else {
                this.showTitle = this.articleType[index].name;
            }
            this.HTTP(
                this.$httpConfig.geAarticleList,
                {
                    category_id: id
                },
                "post"
            ).then(res => {
                this.articleList = res.data.data;
                this.articleDataList = res.data.data.data;
            });
            this.skip = true;
            this.skips = false;
        }
    }
};
</script>

<style lang="less">
.center {
    .title-show {
        margin: 10px;
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 10px;
    }

    .title-wrapper {
        margin: 10px;
        display: flex;
        justify-content: space-between;

        div {
            margin-left: 15px;
            cursor: pointer;
            display: flex;
            align-items: center;

            &:hover {
                color: red;
            }
        }

        .dot {
            background: #000;
            min-width: 8px;
            min-height: 8px;
            display: block;
            border-radius: 50%;
            margin-right: 5px;
        }
    }

    .container {
        .show {
            margin: 10px;
        }

        border: 1px solid #e8e8e8;
        float: left;
        margin-left: 14px;
        width: 977px;
        overflow: hidden;

        .title-item {
            margin: 10px;
            display: flex;
            align-items: center;

            .dots {
                background: #000;
                min-width: 8px;
                min-height: 8px;
                display: block;
                border-radius: 50%;
                margin-right: 5px;
            }
        }
    }
}
</style>
<style lang="less" scoped>
.c {
    cursor: pointer;
}

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

.top {
    height: 35px;
    line-height: 35px;
    margin-bottom: 5px;

    img {
        margin: 13px 8px 0 0;
    }

    .topul {
        .li {
            font-size: 12px;

            a {
                color: #919191;
            }

            &:hover {
                color: red;
            }
        }

        li:last-child {
            a {
                color: #545454;
            }
        }
    }
}

.bottom {
    overflow: hidden;

    .left {
        width: 208px;
        margin-bottom: 30px;

        .up {
            width: 206px;
            border: 1px solid #ddd;
            height: 156px;
            border-top: 2px solid #d02629;

            p {
                height: 32px;
                font-size: 15px;
                color: #454545;
                line-height: 32px;
                padding-left: 10px;
                background: #fbfbfb;
            }

            ul {
                margin-top: 17px;

                li {
                    width: 100px;
                    text-align: center;
                    color: #515151;
                    height: 20px;
                    margin-bottom: 10px;
                    line-height: 15px;
                    cursor: pointer;

                    &:hover {
                        color: red;
                    }
                }

                li:nth-child(2n) {
                    border-left: 1px dashed #d5d5d5;
                }

                .active {
                    color: #ceb35a;
                }
            }
        }

        .down {
            width: 206px;
            border: 1px solid #ddd;
            overflow: hidden;
            margin-top: 12px;

            p {
                height: 32px;
                font-size: 15px;
                color: #454545;
                line-height: 32px;
                padding-left: 10px;
                background: #fbfbfb;
            }

            ul {
                margin-top: 9px;
                margin-bottom: 9px;

                li {
                    line-height: 31px;
                    margin-left: 12px;
                    color: #515151;
                    cursor: pointer;

                    &:hover {
                        color: red;
                    }
                }
            }
        }
    }

    .right {
        width: 978px;
        border: 1px solid #ddd;
        position: relative;

        .shop {
            height: 57px;
            border-bottom: 1px dashed #e6e6e6;
            margin: 0 19px;
            line-height: 60px;
            font-size: 17px;
            color: #333;
        }

        ul {
            margin: 10px 19px 58px;

            li {
                line-height: 32px;
                font-size: 12px;
                color: #666;
                cursor: pointer;

                &:hover {
                    color: red;
                }
            }
        }
    }

    .dexter {
        width: 978px;
        border: 1px solid #ddd;

        .shop {
            height: 96px;
            border-bottom: 1px solid #e6e6e6;
            margin: 0 19px;

            p {
                text-align: center;
            }

            p:nth-of-type(1) {
                margin: 28px 0 18px;
                font-size: 16px;
            }

            p:nth-of-type(2) {
                font-size: 10px;
                color: #929292;
            }
        }

        .zhinan {
            min-height: 60px;
            height: auto;
            border-bottom: 1px solid #e6e6e6;
            margin: 5px 19px;
            line-height: 30px;
            font-size: 12px;
            color: #333;
        }

        .bottom {
            margin: 15px 30px 97px;

            p {
                font-size: 12px;
                color: #343434;

                span {
                    color: #959595;
                }
            }
        }
    }
}
</style>
