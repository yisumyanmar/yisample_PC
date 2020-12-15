<template>
    <div class="head">
        <div class="middle center">
            <!-- <img
                class="logo l c"
                :src="
                    storeInfo.store_logo === undefined
                        ? requireImg
                        : URL + storeInfo.store_logo
                "
                @click="bg()"
            /> -->
            <div class="qq l c">
                <span @click="bg()" class="nameshop">{{ storeInfo.shop_name }}</span>
<!--                <img @click="qqLink" src="../assets/img/qq.jpg" />-->
                <p @click="qqLink"><img src="../assets/img/people_ser.png" />在线客服</p>
                <div class="new-show">
                    <div class="downfirst" v-if="storeInfo.grade_name">    
                        <el-dropdown v-if="storeInfo.grade_name">
                            <span class="first-name">{{storeInfo.grade_name}}</span>
                            <el-dropdown-menu slot="dropdown" v-if="storeInfo.classification">
                            <el-dropdown-item>{{storeInfo.classification}}</el-dropdown-item>
                            </el-dropdown-menu>
                    </el-dropdown>
                    </div>
                    <div class="count-time" v-show="storeInfo.open_time">
                        <span class="show-year">{{
                            storeInfo.open_time | storeTime
                        }}</span>年
                    </div>
                </div>
            </div>
            
            <div class="l miaoshu" @click="fun" :class="{ jiantou: up }">
                <p class="l">
                    描述<br />
                    <span>{{
                        storeInfo.desccredit === undefined
                            ? "0"
                            : storeInfo.desccredit | keep2unit
                    }}</span>
                </p>
                <p class="l">
                    服务<br />
                    <span>{{
                        storeInfo.servicecredit === undefined
                            ? "0"
                            : storeInfo.servicecredit | keep2unit
                    }}</span>
                </p>
                <p class="l">
                    发货<br />
                    <span>{{
                        storeInfo.servicecredit === undefined
                            ? "0"
                            : storeInfo.servicecredit | keep2unit
                    }}</span>
                </p>
            </div>
            <div class="search l">
                <div class="l top">
                    <input type="text" v-model="search_content" />
                    <span @click="SearchOurStore">搜本店</span>
                    <span @click="SeekTotalStation">搜全站</span>
                </div>
                <!-- <ul class="l">
                    <li class="l" v-for="(li, index) in keyWords" :key="index">
                        <a href="/">{{ li.hot_words }}</a>
                    </li>
                </ul> -->
            </div>
            <!--美的-->
            <div class="shoucang" v-show="shoucang">
                <div class="left l">
                    <img
                        class="meidi"
                        :src="
                            storeInfo.store_logo === undefined
                                ? 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542620438617&di=934a6c42aa8fc70f89d333365c9bf7e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21c8701a18b87d69f0ccc220c0828381f30fd45.jpg'
                                : URL + storeInfo.store_logo
                        "
                    />
                    <div class="bendian">
                        <span v-if="storeInfo.if_atten" @click="collectStore(0)"
                            >取消收藏</span
                        >
                        <span v-else @click="collectStore(0)">收藏</span>
                    </div>
                    <div class="shoucangliang">
                        <span>{{ storeInfo.storeFans }}</span
                        >收藏
                    </div>
                    <!-- <img class="erweima" :src="URL+storeInfo.store_logo" /> -->
                </div>
                <div class="right l">
                    <div class="l top">
                        <p>店铺动态评分</p>
                        <p>
                            描述相符：
                            <span>{{
                                storeInfo.desccredit === undefined
                                    ? "0"
                                    : storeInfo.desccredit | keep2unit
                            }}</span>
                        </p>
                        <p>
                            服务态度：
                            <span>{{
                                storeInfo.servicecredit === undefined
                                    ? "0"
                                    : storeInfo.servicecredit | keep2unit
                            }}</span>
                        </p>
                        <p>
                            发货速度：
                            <span>{{
                                storeInfo.servicecredit === undefined
                                    ? "0"
                                    : storeInfo.servicecredit | keep2unit
                            }}</span>
                        </p>
                    </div>
                    <div class="l bottom">
                        <p>店铺服务</p>
                        <p>
                            开店时间：
                            <span v-show="storeInfo.open_time">{{
                                storeInfo.open_time | storeTime
                            }}</span>年
                        </p>
                        <p>{{ storeInfo.address }}</p>
                    </div>
                </div>
            </div>
            <!--收藏   取消收藏-->
            <div class="collect" v-show="sc">
                <span>收藏成功</span>
                <span>取消收藏</span>
            </div>
        </div>
        <div
            class="header-img"
            v-for="(item, index) in bannerInfo"
            :key="index"
            @click="toLink(item.ad_url)"
            
        >
            <img :src="URL + item.adv_content" alt="" />
        </div>
        <div v-if="showbanner===0" 
            class="header-img"
        >
            <img src="../assets/img/defaultlogo.jpg" alt="" />
        </div>

        <!-- <img v-if="!$route.query.keyword" src="../assets/img/hetangyuese.jpg" /> -->
        <nav v-if="!flag">
            <div class="center">
                <ul class="nav-hot">
                    <li
                        class="l"
                        :class="{ active: isactives == '0' }"
                        @click="toAll"
                    >
                        全部宝贝
                    </li>
                    <li
                        class="l"
                        :class="{ active: isactives == '-2' }"
                        @click="toStoreHome"
                    >
                        首页
                    </li>
                    <!-- <li
                        v-if="!$route.query.keyword"
                        @click="bg(navs)"
                        class="l"
                        v-for="(navs, index) in nav"
                        :key="index"
                        :class="{ active: isactives == navs.id }"
                    >
                        {{ navs.class_name }}
                    </li> -->
                     <li
                       
                        @click="bg(navs)"
                        class="l"
                        v-for="(navs, index) in nav"
                        :key="index"
                        :class="{ active: isactives == navs.id }"
                    >
                        {{ navs.class_name }}
                    </li>
                    <li
                        class="l"
                        @click="goVip"
                        :class="{ active: isactives == '-3' }"
                    >
                        店铺会员
                    </li>
                    <li
                        class="l"
                        @click="goStoreNews"
                        :class="{ active: isactives == '-4' }"
                    >
                        店铺动态
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import downjiantou from "@/assets/img/downjiantou.jpg";

export default {
    data() {
        return {
            // requireImg: require("../assets/img/initLogo.png"),
            storeID: 0,
            on: "",
            isactive: "",
            arrNew: sessionStorage.keyWord,
            arr0: ["珠宝1", "紫砂壶", "苏绣", "贡酒", "翡翠", "字画", "珠宝"],
            nav: [],
            shoucang: "",
            up: "",
            isactives: -2,
            success: true,
            err: false,
            sc: false,
            ctrlClass: false, //控制全部分类是否显示
            storeInfo: {}, //店铺信息
            search_content: "",
            bannerInfo: [],
            keyWords: [],
            showbanner:''
        };
    },
    props: {
        allShop: false,
        flag: false,
        thestoresearch: ''
    },
    created() {
        console.log(this.$constant, 222);
        console.log(this.$route.query, 111);
        if (this.$route.query.class_one) {
            this.isactives = this.$route.query.class_one;
        } else {
            console.log(12);
        }
        this.storeID = this.$route.query.id;
        this.getStoreNav();
        this.getBanner();
        this.getStoreInfo();
        this.getKeySearchList();
    },
    methods: {
        //搜索栏底部关键词
        getKeySearchList() {
            this.HTTP(this.$httpConfig.getKeyWordsList, {}, "post")
                .then(res => {
                    this.keyWords = res.data.data;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        //搜本店
        SearchOurStore() {
            //判断是否传参
            
            if(this.thestoresearch) {
                this.$emit('update-search', {
                    id: this.$route.query.id,
                    search_content: this.search_content,
                    type: 1})
                this.$router.push({
                    name: "TheStoreSearch",
                    query: {
                        id: this.$route.query.id,
                        search_content: this.search_content,
                        type: 1 //不带价格搜索
                    }
                });
            } else if (this.storeID !== "") {
                this.$router.push({
                    name: "TheStoreSearch",
                    query: {
                        // id: sessionStorage.getItem("store_id"),
                        id: this.$route.query.id,
                        search_content: this.search_content,
                        type: 1 //不带价格搜索
                    }
                });
            } else {

            }
        },
        toLink(url) {
            location.href = url;
        },
        toStoreHome() {
            this.$router.push({
                path: "/storehome",
                query: {
                    id: this.$route.query.id
                }
            });
        },
        goVip() {
            this.$router.push({
                path: "/vip",
                query: {
                    id: this.$route.query.id,
                    class_one: -3
                }
            });
        },
        goStoreNews(){
            this.$router.push({
                path: "/storeNews",
                query: {
                    id: 2,
                    class_one: -4
                }
            });
        },
        //搜全站
        SeekTotalStation() {
            if (this.search_content !== "") {
                this.$router.push({
                    path: "/goodsSearch",
                    query: {
                        p: 0, //0为商品
                        t: this.search_content
                    }
                });
            } else {
                this.$confirm("搜索不能为空", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                    closeOnClickModal: false,
                    lockScroll: false,
                    center: true
                })
                    .then(() => {})
                    .catch(() => {});
            }
        },
        // 点击菜单导航
        bg(navs) {
            location.href =
                this.$constant.s_url +
                "storelist?id=" +
                this.$route.query.id +
                "&class_one=" +
                navs.id;
            //window.open(navs.url);
            //window.open(window.location.origin + '/storehome?id='+this.storeID);首页无法点击为路径id为undefined
        },
        toAll() {
            location.href =
                this.$constant.s_url +
                "storelist?id=" +
                this.$route.query.id +
                "&class_one=0";
            // this.$router.push({
            //   path: '/storelist',
            //   query: {
            //     id: this.storeID
            //   }
            // });
        },
        // 展开或关闭店铺详情
        fun() {
            this.shoucang = !this.shoucang;
            this.up = !this.up;
        },
        // 获取店铺信息
        getStoreInfo() {
            this.HTTP(
                this.$httpConfig.getStoreDetails,
                { id: this.storeID },
                "post"
            )
                .then(res => {
                    this.storeInfo = res.data.data;
                })
                .catch(() => {});
        },
        // 获取菜单导航
        getStoreNav() {
            this.HTTP(
                this.$httpConfig.getStoreNav,
                { id: this.storeID },
                "post"
            )
                .then(res => {
                    var list = res.data.data;
                    for (var i in list) {
                        this.nav.push(list[i]);
                    }
                    this.nav.splice(9, this.nav.length - 9);
                })
                .catch(() => {});
        },
        // 获取banner图
        getBanner() {
            this.HTTP(
                this.$httpConfig.getStoreBanner,
                { store_id: this.storeID },
                "post"
            )
                .then(res => {
                    this.bannerInfo = res.data.data;                   
                })
                .catch((e) => {
                    this.showbanner =e.data.status  
                });
        },
        //收藏或取消收藏店铺接口
        collectStore(type) {
            if (type) {
                //关注
                this.HTTP(
                    this.$httpConfig.setAttenStore,
                    { id: this.storeID },
                    "post"
                )
                    .then(res => {
                        this.$message(`${res.data.message}`);
                    })
                    .catch(() => {
                        this.$message(`${e.data.message}`);
                    });
            } else {
                this.HTTP(
                    this.$httpConfig.setCancelAttenStore,
                    { id: this.storeID },
                    "post"
                )
                    .then(res => {
                        this.$message(`${res.data.message}`);
                    })
                    .catch(e => {
                        this.$message(`${e.data.message}`);
                    });
            }
        },
        qqLink() {
            this.HTTP(this.$httpConfig.serviceList, {
                store_id: this.storeInfo.store_id
            })
                .then(res => {
                    if (res.data.status == 10001) {
                        this.$router.push("/passwordLogin");
                        return;
                    }
                    window.open(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },
    filters: {
        keep2unit(value) {
            return value + ".00";
        },
        storeTime(value) {
            var time = new Date(Number(value) * 1000);
            var Y = new Date().getFullYear() - time.getFullYear();
            var m = time.getMonth() + 1;
            var d = time.getDate();
            var H = time.getHours();
            var mi = time.getMinutes();
            var s = time.getSeconds();
            if (m < 10) {
                m = "0" + m;
            }
            if (d < 10) {
                d = "0" + d;
            }
            if (H < 10) {
                H = "0" + H;
            }
            if (mi < 10) {
                mi = "0" + mi;
            }
            if (s < 10) {
                s = "0" + s;
            }
            // return Y + "-" + m + "-" + d + " " + H + ":" + mi + ":" + s;
            return Y;
        }
    }
};
</script>
<style lang="less" scoped>
 .el-dropdown{
//  width: 180px !important; 
}
.el-dropdown-menu {
    // width: 180px !important;
    position: absolute !important;
    // margin: 6px 7px 0 -130px !important;
    background-color: #FFF;
    border: 1px solid #de2d35;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.el-dropdown-menu__item {
  line-height: 8px !important;
  font-size: 12px !important;
  color:rgb(101, 101, 101) !important;
}
  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover{
    color:rgb(101, 101, 101) !important;
    background-color: #ffffff !important;
  }

.el-popper .popper__arrow {
  border-width: 6px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));   
}

.el-popper[x-placement^=bottom] .popper__arrow {
  border-bottom-color: red !important;
}
.el-popper .popper__arrow {
  border-width: 6px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
  
}
.el-popper .popper__arrow, .el-popper .popper__arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;  
} 
</style>
<style lang="less">
    .header-img{
        img{
            &:hover{
                cursor: pointer;
            }
        }
    }
</style>
<style lang="less" scoped>
.l {
    float: left;
}

.r {
    float: right;
}

.c {
    cursor: pointer;
}

.center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    position: relative;

    .ul.nav-hot {
        width: 1200px;
        height: 35px !important;
        display: flex;
        flex-direction: row;
        background: #d02629;
    }

    .ul.li:hover {
        background-color: #333;
    }
}

.class-two {
    width: 150px;
    position: absolute;
    left: 0px;
    top: 35px;
    height: auto;
    margin: 0 auto;
    z-index: 999;

    ul {
        position: relative;
        width: 150px;
        height: 100%;
        background: rgba(231, 193, 66, 0.9);
        padding-top: 5px;
        float: left;
        z-index: 999999999;

        li {
            z-index: 999999999;
            height: 33px;
            line-height: 33px;
            position: relative;
        }
    }
}

.middle {
    height: 130px;
    position: relative;
 
    .logo {
        width: 100px;
        height: 100px;
        margin: 10px;
    }
  

    .qq {
        width: 189px;
        // height: 36px;
        margin: 44px 0 0 32px;
        border-left: 1px dashed #dddddd;
        border-right: 1px dashed #dddddd;
        font-size: 12px;
        color: #7a7a7a;
        line-height: 23px;
        // text-align: center;

        /*span {*/
        /*    width: 100px;*/
        /*    height: 30px;*/
        /*    display: inline-block;*/
        /*    overflow: hidden;*/
        /*    text-overflow: ellipsis;*/
        /*    white-space: nowrap;*/
        /*}*/

        /*img {*/
        /*    float: right;*/
        /*    margin: 6px 12px 0 0;*/
        /*}*/
        .nameshop{
            margin: 0 0 0 12px;
        }
        p {
            width: 88px;
            height: 30px;
            line-height: 26px;
            border: 1px solid #eeeeee;
            background: #fbfbf1;
            display: inline-block;
            color: #5f6772;
            margin-left: 14px;
        }

        img {
            margin: 0 6px 0 5px;
        }
        .new-show{
            display: flex;
            .downfirst{
                height: 21px;
                margin: 0 12px 0 12px;
                .first-name{
                color: #ffffff;
                background-color: #de2d35;
                font-size: 12px;
                border-radius: 3px;
                padding: .8px 7px 1.3px 7px;
                }
            }
            .count-time{
                font-size: 12px;
                .show-year{
                    font-size: 12px;
                    color: #d02629;
                }
            }
        }
    }

    .miaoshu {
        margin: 48px 0 0 6px;
        width: 172px;
        cursor: pointer;
        background: url(../assets/img/downjiantou.jpg) no-repeat top 13px right
            0;

        p {
            font-size: 12px;
            margin-left: 9px;
            color: #a0a0a0;

            span {
                color: #d02629;
            }
        }

        /*img{margin: 13px 0 0 14px;}*/
    }

    .jiantou {
        background: url(../assets/img/upjiantou.jpg) no-repeat top 13px right 0 !important;
    }

    .shoucang {
        z-index: 9999;
        width: 370px;
        height: 260px;
        background: #fff;
        position: absolute;
        top: 86px;
        left: 200px;
        border: 1px solid #e1e1e1;

        .left {
            width: 148px;

            .meidi {
                width: 115px;
                height: 110px;
                margin: 30px auto;
                display: block;
            }

            .bendian {
                cursor: pointer;
                margin: 27px auto 13px;
                width: 74px;
                height: 22px;
                border-radius: 20px;
                text-align: center;
                line-height: 22px;
                background: #d02629;
                color: #fff;
                font-size: 12px;
            }

            .shoucangliang {
                text-align: center;
            }

            .erweima {
                margin: 18px auto;
                width: 100px;
                height: 100px;
                display: block;
            }
        }

        .right {
            width: 202px;

            span {
                color: #d02629;
            }

            .top {
                width: 100%;
                margin-top: 20px;
                border-bottom: 1px dashed #e4e4e4;

                p {
                    margin-top: 8px;
                    font-size: 12px;
                }

                p:first-child {
                    font-size: 16px;
                    color: #7a7a7a;
                }

                p:last-child {
                    margin-bottom: 18px;
                }
            }

            .bottom {
                width: 100%;
                cursor: pointer;
                border-bottom: 1px dashed #e4e4e4;

                p {
                    margin-top: 8px;
                    font-size: 12px;
                }

                p:first-child {
                    font-size: 16px;
                    color: #7a7a7a;
                }

                p:last-child {
                    margin-bottom: 18px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }

    .collect {
        position: absolute;
        top: 408px;
        right: 347px;

        span {
            width: 110px;
            height: 46px;
            text-align: center;
            line-height: 46px;
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
            display: inline-block;
            border-radius: 3px;
            margin-right: 20px;
        }
    }
}

.search {
    width: 537px;
    margin: 35px 0 0 142px;

    .top {
        input {
            width: 377px;
            height: 36px;
            border: 2px solid #d02629;
            float: left;
        }

        span {
            width: 74px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            color: #fff;
            float: left;
            cursor: pointer;
        }

        span:nth-of-type(1) {
            background: #d02629;
        }

        span:nth-of-type(2) {
            background: #666666;
            margin-left: 6px;
        }
    }

    ul {
        margin-top: 10px;

        li {
            margin-right: 14px;

            a {
                color: #666;
                font-size: 12px;
            }

            &:hover a {
                color: red;
            }
        }
    }
}

nav {
    height: 35px;
    background: #d02629;

    ul {
        li {
            cursor: pointer;
            min-width: 88px;
            width: auto;
            line-height: 35px;
            text-align: center;
            color: #fff;
            margin-right: 10px;
            font-size: 14px;
        }

        /*li.l:nth-of-type(1) {*/
        /*background: url(../assets/img/baijiantou.png) no-repeat top 17px right 5px;*/
        /*}*/
    }

    .active {
        background-color: #333 !important;
    }
}
</style>
