<template>
    <div id="head">
        <div class="line">
            <nav>
                <div class="top l">
                    <router-link to="/home">
                        <!-- <img class="logo" :src="URL + logo_name" /> -->
                        <img class="logo" src="../assets/img/logo-yi.png" />
                    </router-link>
                    <div class="middle">
                        <div class="inp">
                            <span class="dianpu">
                                <el-dropdown
                                    size="small"
                                    @command="handleCommand"
                                >
                                    <span class="el-dropdown-link">
                                        {{ currentSearch }}
                                        <i
                                            class="el-icon-arrow-down el-icon--right"
                                        ></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item
                                            v-for="(value, i) in searchType"
                                            :key="i"
                                            :command="i"
                                            >{{ value }}</el-dropdown-item
                                        >
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </span>
                            <input
                                type="text"
                                v-model="search_value"
                                @keyup.enter="search"
                            />
                            <span class="search" @click="search">搜索</span>
                        </div>
                        <!-- <ul>
                            <li v-for="(value, index) in keyWords" :key="index">
                                <a @click="hotSearch(value)">{{
                                    value.hot_words
                                }}</a>
                            </li>
                        </ul> -->
                        <ul>
                            <li>标准品</li>
                            <li>设计品</li>
                            <li>原材商</li>
                            <li>生产商</li>
                        </ul>
                    </div>
                    <div class="dropdown-content r">
                        <my-shopping-cart></my-shopping-cart>
                        <my-shopping-cart></my-shopping-cart>
                    </div>
                </div>
                <div class="bottom l">
                    <div
                        class="all l"
                        @mouseover="showClass"
                        @mouseleave="hideClass"
                        @click="ctrlClass"
                    >
                        <div
                            class="all-class-ctrl"
                            @click="$router.push({ path: '/allGoods' })"
                        >
                            <i class="jiazai"></i>
                            <span class="shangpin">全部商品分类</span>
                        </div>
                        <div
                            class="nav-class"
                            v-if="flag"
                            v-show="showClassNav"
                            @mouseleave="hideClass"
                        >
                            <ul class="allul l">
                                <li
                                    @click="GoTo(item, 1)"
                                    class="li"
                                    v-for="(item, index) in iTem"
                                    @mouseover="mouseover1(item, index, 1)"   
                                    
                                    :key="item.id"
                                >
                                    <img :src="URL + item.logo">
                                    <a>{{ item.class_name }}</a>
                                    <i class="el-icon-arrow-right-com"></i>
                                    
                                </li>
                            </ul>
                            <div :class="hoverCss == true ? 'nav-right-home' : ''" >
                                <div
                                    class="second-class"
                                    v-for="(item, index) in condata"
                                    :key="index"
                                >
                                    <div class="second-class-title">
                                        <span>{{ item.class_name }}</span>
                                    </div>

                                    <div v-if="item.three" class="one-class">
                                        <span
                                            v-for="(items,
                                            index1) in item.three"
                                            @click="GoTo(items, 2)"
                                            :key="index1"
                                            >{{ items.class_name }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="nav-class"
                            v-show="showClassNav"
                            v-else
                            @mouseleave="hideClass"
                        >
                            <ul class="allul l">
                                <li
                                    @click="GoTo(item, 1)"
                                    class="li"
                                    v-for="(item, index) in iTem"
                                    @mouseover="mouseover(item, index, 1)"
                                    :key="item.id"
                                >
                                    <img :src="URL + item.logo">
                                    <a>{{ item.class_name }}</a>
                                    <i class="el-icon-arrow-right-com"></i>
                                </li>
                            </ul>
                            <div class="nav-right-home">
                                <div
                                    class="second-class"
                                    v-for="(item, index) in condata"
                                    :key="index"
                                >
                                    <div class="second-class-title">
                                        <span>{{ item.class_name }}</span>
                                    </div>

                                    <div v-if="item.three" class="one-class">
                                        <span
                                            v-for="(items,
                                            index1) in item.three"
                                            @click="GoTo(items, 2)"
                                            :key="index1"
                                            >{{ items.class_name }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <ul class="navul">
                        <li v-for="(item, index) in items" :key="index">
                            <router-link :to="{path: templink, query:{id: item.id}}">
                                <a v-if="navid"
                                    @click="toLink(item, index)"
                                    :class="{ active: item.id == navid || index == navid }"
                                    >{{ item.nav_titile }}</a
                                >
                                <a v-else
                                    @click="toLink(item, index)"
                                    :class="{ active: index == off }"
                                    >{{ item.nav_titile }}</a
                                >
                            </router-link>
                        </li>
                    </ul> -->
                    <ul class="navul">
                        <li>首页</li>
                        <li>询价采购</li>
                        <li>定制下单</li>
                        <li  @click="$router.push('yangShen')">标准品</li>
                        <li>设计商</li>
                        <li>原材商</li>
                        <li>生产商</li>
                        <li>向您推荐</li>
                        <li>企业服务</li>
                        <li>定制社区</li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import Qs from "qs";
export default {
    data() {
        return {
            tit: document.title,
            off: 0,
            all: false,
            no: true,
            ok: false,
            items: [],
            arr: [
                ["首页", "home"],
                ["抢购", "chase"],
                ["品牌", "brand"],
                ["店铺", "store"],
                ["皇家御饮", "royaldrink"],
                ["御贡赠品", "gift"],
                ["滋补养身", "yangshen"],
                ["珠宝玉器", "gem"],
                ["积分商城", "integral"],
                ["帮助中心", "guide"]
            ],
            cartData: [],
            class_id: 0, //分类ID
            iTem: [],
            condata: [],
            condata2: [],
            condata3: [],
            showClassNav: false,
            searchType: ["宝贝", "店铺"],
            search_value: "",
            currentIndex: 0,
            zGoTo: [],
            t: 0,
            keyWords: [],
            currentSearch: "",
            searchTypeRouter: ["/goodsSearch", "/storeSearch"],
            logo_name: "",
            temphost: window.location.origin,
            templink: '',
            hoverCss: false,
            params: {
                title: '亿速网络公司2',
                description: 'ShopsN多商户系统演示',
                keywords: 'shopsn多商户运营版3',
                image: false,
                app: 'app name',          
            }
        };
    },
    head: {
        title: function() {
            return {
                inner: this.params.title,
            }
        },
        meta: function(){
            return [
                { name: 'application-name', content: this.params.app },
                { name: 'title', content: this.params.title, id: 'desc' },
                { name: 'description', content: this.params.description, id: 'desc1' },
                { name: 'keywords', content: this.params.keywords, id: 'desc2' },
                { name: 'twitter:title', content: this.params.title },
                { n: 'twitter:description', c: this.params.description},
                { p: 'og:image', c: this.params.image },
            ]
        }
    },
    props:{
        flag:false,
        navid: null
    },
    created() {
        this.getFootData();
        //搜索类型
        this.currentSearch = this.$route.query.hasOwnProperty("p")
            ? this.searchType[this.$route.query.p]
            : this.searchType[0];

        this.search_value = this.$route.query.title;

        this.getClass();
        //导航
        this.HTTP(this.$httpConfig.nav, {}, "post", false)
            .then(res => {
                this.items = res.data.data;
            })
            .catch(e => {
                console.log(e);
            });
        
    },

    mounted() {
        this.getKeySearchList();
        this.getFootData();
        var self = this
        window.setTimeout(function () {
            self.params.title = sessionStorage.titleKey
            self.params.description = sessionStorage.updateDescription
            self.params.keywords = sessionStorage.contentKey
            self.$emit('updateHead')
        }, 3000)
    },

    methods: {
        //logo
        getFootData() {
            this.HTTP(this.$httpConfig.aboutEtcetera, {}, "post")
                .then(res => {
                    this.logo_name = res.data.data.logo_name;
                    sessionStorage.setItem(
                        "titleKey",
                        res.data.data.intnet_title
                    );
                    sessionStorage.setItem("updateDescription", res.data.data.intnet_description);
                    sessionStorage.setItem("contentKey", res.data.data.init_key_word);
                    console.log(sessionStorage.getItem("titleKey"), 222);
                    localStorage.setItem("logo_name", this.logo_name);
                    if(this.flag){ 
                        let title='首页'+'-'+ sessionStorage.titleKey
                        this.showScroll.scrollTitle(title);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },

        toLink(item, num) {
            this.$root.$emit('naviddata', item)
            this.off = num
            this.templink = item.link.replace(this.temphost,'');
        },

        //热词搜索(商品搜索)
        hotSearch(value) {
            this.$router.push({
                path: this.searchTypeRouter[0],
                query: {
                    title: value.hot_words,
                    class_id: value.goods_class_id,
                    types: "hotSearch",
                    type: 0
                }
            });
        },

        //搜索栏底部关键词
        getKeySearchList() {
            this.HTTP(this.$httpConfig.getKeyWordsList, {}, "post")
                .then(res => {
                    sessionStorage.setItem('keyWord',res.data.data);
                    console.log(sessionStorage.keyWord,441122);
                    this.keyWords = res.data.data;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        GoTo(item, type) {
            this.t++;
            window.open(
                window.location.origin +
                    "/goodsClass?class_id=" +
                    item.id +
                    "&id=" +
                    this.t +
                    "&class_name=" +
                    item.class_name +
                    "&type=" +
                    type
            );
        },
        to(index, url) {},
        handleCommand(command) {
            this.currentSearch = this.searchType[command];

            this.currentIndex = command;
        },
        /**
         * 搜索
         */
        search() {
            if (this.search_value === this.$route.query.title) {
                this.$message("页面已加载");
                this.$router.replace({
                    path: this.searchTypeRouter[this.currentIndex],
                    query: {
                        type: this.currentIndex,
                        title: this.search_value
                    }
                });
            } else {
                this.$router.replace({
                    path: this.searchTypeRouter[this.currentIndex],
                    query: {
                        type: this.currentIndex,
                        title: this.search_value
                    }
                });
            }
        },
        showClass() {
            this.showClassNav = true;
        },
        hideClass() {
            this.showClassNav = false;
        },
        hideClass1() {
            this.hoverCss = false
        },
        ctrlClass() {
            this.showClassNav = !this.showClassNav;
        },
        mouseover(item, index, once) {
            this.showClassNav = true;
            this.succ(item.id, once);
        },
        mouseover1(item, index, once) {
            this.showClassNav = true;
            this.succ(item.id, once);
            this.hoverCss = true
        },
        getClass() {
            this.HTTP(
                this.$httpConfig.getClass,
                {
                    id: this.class_id
                },
                "post"
            )
                .then(res => {
                    this.iTem = res.data.data;
                    let data = res.data.data;
                    this.$emit("childToParent", this.iTem.length)
                    localStorage.setItem("countF", this.iTem.length);
                    let classData = {};
                    for (let index = 0; index < data.length; index++) {
                        classData[data[index].id] = data[index].class_name;
                    }
                    localStorage.setItem("class", JSON.stringify(classData));
                })
                .catch(e => {
                    console.log(e);
                });
        },
        succ(id, once) {
            this.HTTP(this.$httpConfig.getAllClass, { id: id }, "post").then(
                res => {
                    switch (once) {
                        case 1:
                            this.condata = res.data.data;
                            break;
                        case 2:
                            this.condata2 = res.data.data;
                            break;
                        case 3:
                            this.condata3 = res.data.data;
                            break;
                        default:
                            break;
                    }
                }
            );
        },
        getGoods(goods, index) {
            this.display = null;
        },
        open() {
            this.on = true;
            this.isactive = true;
        },
        close() {
            this.on = null;
            this.isactive = null;
        }
    }
};
</script>
<style lang="less" scoped>
.gp-s:hover {
    color: #d02629;
}

nav .bottom .navul li .active {
    color: #d02629;
}

.gp-s {
    color: #666;
    cursor: pointer;
}

.l {
    float: left;
}

.r {
    float: right;
}

.line {
    border-bottom: 2px solid #d02629;
    background: #ffffff;
}

nav {
    width: 1200px;
    height: 156.5px;
    margin: 0 auto;

    .top {
        width: 100%;

        .logo {
            margin-top: 26px;
            float: left;
            width: 202px;
            height: 62px;
        }

        .middle {
            margin: 35px 0 0 132px;
            width: 520px;
            float: left;

            .inp {
                width: 520px;
                height: 34px;
                float: left;
                padding: 0;

                .dianpu {
                    height: 34px;
                    width: 68px;
                    float: left;
                    border-right: 1px solid #ccc;
                    line-height: 32px;
                    border-bottom: 2px solid #d02629;
                    border-top: 2px solid #d02629;
                    border-left: 2px solid #d02629;

                    span {
                        margin-left: 10px;
                        cursor: pointer;
                    }

                    i {
                        margin-left: 2px;
                    }
                }

                input {
                    width: 375px;
                    height: 100%;
                    border-bottom: 2px solid #d02629;
                    border-top: 2px solid #d02629;
                    border-right: 2px solid #d02629;
                    float: left;
                    padding-left: 5px;
                }

                .search {
                    width: 75px;
                    height: 100%;
                    float: left;
                    background-color: #d02629;
                    color: #fff;
                    text-align: center;
                    line-height: 34px;
                    cursor: pointer;
                }
            }

            ul {
                float: left;
                margin-top: 8px;

                li {
                    float: left;
                    margin-right: 14px;
                    cursor: pointer;

                    a {
                        color: #ababab;
                    }

                    &:hover a {
                        color: red;
                    }
                }
            }
        }

        .dropdown-content {
            margin-top: 39px;
        }
    }

    .bottom {
        width: 100%;
        margin-top: 14px;

        .all {
            height: 45px;
            width: 245px;
            background: #d02629;
            line-height: 44px;
            position: relative;
            text-align: center;

            .all-class-ctrl {
                height: 45px;
                width: 245px;
                background: #d02629;
                line-height: 44px;
                position: relative;
                text-align: center;
                cursor: pointer;

                .shangpin {
                    color: #ffffff;
                }
            }

            .jiazai {
                margin: 15px 11px 0 13px;
                float: left;
                font-size: 0;
                line-height: 0;
                background: url(../assets/img/top_bg.png) no-repeat -182px -186px;
                width: 18px;
                height: 14px;
            }

            span {
                color: #ffffb2;
                font-size: 15px;
                float: left;
            }

            .nav-class {
                width: 1200px;
                height: auto;
                margin: 0 auto;
                z-index: 999;
                display: flex;
                min-height: 407px;

                .allul {
                    position: relative;
                    width: 245px;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.55);
                    float: left;
                    z-index: 1222222;

                    .li {
                        z-index: 999999999;
                        height: 34px;
                        line-height: 34px;
                        position: relative;
                        display: flex;
                        align-items: center;

                        i {
                            float: right;
                            color: #fffcda;
                        }
                        img{
                            
                        }

                        a {
                            margin-left: 11px;
                            color: #ffffff;
                            float: left;
                            font-weight: bold;
                            margin-top: 2px;
                        }

                        .el-icon-arrow-left-com {
                            margin-left: 29px;
                            float: left;
                            font-size: 0;
                            line-height: 0;
                            margin-right: 10px;
                            background: url(../assets/img/header-ionic.png)
                                no-repeat;
                            width: 15px;
                            height: 16px;
                        }

                        .el-icon-arrow-right-com {
                            background: url(../assets/img/top_bg.png) no-repeat -150px -10px;
                            width: 6px;
                            height: 6px;
                            float: right;
                            z-index: 1;
                            margin-left: 66px;
                            margin-top: 5px;
                        }

                        img {
                            margin-left: 29px;
                            float: left;
                            margin-top: 4px;
                        }

                        &:hover {
                            background: #f7f7f7;
                            border-left: #e3c044 solid 1px;

                            a {
                                color: #e43a3d;
                            }

                            .el-icon-arrow-left-com {
                                background-position: 0 -16px;
                            }

                            .el-icon-arrow-right-com {
                                background: url(../assets/img/class_arrow.png)
                                    no-repeat;
                                background-size: cover;
                                width: 9px;
                                height: 12px;
                                float: right;
                                z-index: 1;
                            }
                        }
                    }
                }

                .nav-right-home {
                    width: 780px;
                    height: 407px;
                    float: left;
                    position: relative;
                    cursor: pointer;
                    font-size: 11px;
                    background: #f7f7f7;
                    z-index: 2222;

                    .second-class {
                        width: 100%;
                        display: flex;

                        .second-class-title {
                            width: 12%;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 0 1% 0 3%;

                            span {
                                color: #5c5c5c;
                                font-size: 12px;
                            }
                        }

                        .second-class-title:after {
                            content: "";
                            background: url("../assets/img/i.jpg");
                            background-size: cover;
                            width: 6px;
                            height: 8px;
                        }

                        .one-class {
                            width: 93%;
                            display: flex;
                            flex-wrap: wrap;
                            border-bottom: 1px solid #e0e0e0;
                            padding-bottom: 10px;

                            span {
                                color: #7f7f7f;
                                font-size: 12px;
                                display: inline-block;
                                padding: 0 5px;
                                border-left: 1px solid #d6d2d3;
                                height: 15px;
                                line-height: 15px;
                                margin-top: 10px;
                            }
                        }
                    }
                }

                .banner-image-box {
                    width: 780px;
                    height: 407px;
                    float: left;
                    position: relative;
                    cursor: pointer;
                    font-size: 11px;

                    .allul-child {
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        right: 130px;
                        background-color: #fff;
                        z-index: 9999;

                        .show {
                            z-index: 9999;
                            background: #fff;
                            border: 1px solid rgba(231, 193, 66, 0.9);
                            border-right: none;
                            overflow: hidden;
                            width: 150px;
                            float: left;
                            height: 407px;

                            p {
                                font-size: 14px;
                                color: #333;
                                width: 100%;
                                float: left;
                            }

                            .item {
                                font-size: 13px;
                                color: #333;
                                margin: 5px;
                                line-height: 15px;
                                width: 100px;
                                text-align: center;
                            }

                            .li-class2 {
                                width: 150px;
                                overflow: hidden;
                                padding-right: 12px;
                                padding-left: 10px;
                                float: left;

                                p {
                                    position: relative;
                                    height: 36px;
                                    line-height: 36px;
                                    font-size: 13px;
                                    color: #111;
                                }
                            }
                        }

                        .show3 {
                            height: 407px;
                            float: left;
                            background-color: #fff;
                            z-index: 9999;
                            width: 500px;
                            border: 1px solid rgba(231, 193, 66, 0.9);

                            .li-class3 {
                                width: 33.3%;
                                text-align: center;
                                overflow: hidden;
                                padding-right: 12px;
                                padding-left: 10px;
                                float: left;

                                p {
                                    position: relative;
                                    height: 36px;
                                    line-height: 36px;
                                    font-size: 12px;
                                    color: #626262;
                                }
                            }
                        }
                    }
                }
            }
        }

        .navul {
            margin-left: 265px;
            margin-top: 12px;

            li {
                float: left;
                margin-right: 32px;
                cursor: pointer;

                a {
                    color: #2b2b2b;
                    font-size: 16px;
                }

                .router-link-exact-active {
                    color: #d02629 !important;
                }
            }
        }
    }
}
</style>