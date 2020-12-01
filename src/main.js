//  The Vue build version to load with the `import` command
//  (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./vuex/store";
// 引入配置对象
import HttpConfig from "./httpConfig.js";
import publicObj from "./assets/js/public";
import HTTP from "./config/HTTP";
import magnify from "./assets/js/magnify.js";
import { constant, Status } from "./config/constant"; //  常用的常量
// 引入axios
import Axios from "axios";
// VueBlu  --ui库
import VueBlu from "vue-blu";
import "vue-blu/dist/css/vue-blu.min.css";
// import Event from '../static/vue-bus/dist/vue-bus'
import Event from "vue-bus";
// Element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 懒加载调用

import VueCoreVideoPlayer from 'vue-core-video-player'
Vue.use(VueCoreVideoPlayer)

// import vuePlayer  from  '@algoz098/vue-player'
// Vue.component(vuePlayer)

// import vPlayBack from 'v-playback';
// Vue.use(vPlayBack);

import VueVideoPlayer from 'vue-video-player'

// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
Vue.use(VueVideoPlayer);

import VueLazyload from "vue-lazyload";
//引入二维码扫描
import QRCode from "qrcodejs2";
Vue.prototype.$qrCode = QRCode;
// 图片预览引入

//标题滚动
import scrollTitle from "./utils/scrollTitle";
Vue.prototype.showScroll = scrollTitle;

import VueHead from 'vue-head'
Vue.use(VueHead)

//vue-meta
import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
    keyName: 'head'
});
//检验字符串不为空
import checkWord from "./utils/nullCheck";
Vue.prototype.showCheck = checkWord;

import preview from "vue-photo-preview";
import "vue-photo-preview/dist/skin.css";
Vue.use(preview);

// 引入自己的css
import "./assets/css/base.css";
Vue.use(VueLazyload, {
    error: "http://center.shopsn.cn/Uploads/qrCode/404.jpg",
    loading: "http://center.shopsn.cn/Uploads/qrCode/404.jpg",
    attempt: 1
});

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import OtpInput from "@bachdgvn/vue-otp-input";
Vue.component("v-otp-input", OtpInput);

// 图片地址
const imgUpload = "http://center.shopsn.cn/";
const URl = "http://center.shopsn.cn";
Vue.prototype.$constant = constant;
Vue.prototype.$Status = Status;
Vue.prototype.URL = URl;
Vue.prototype.HTTP = HTTP;
Vue.prototype.magnify = magnify;
Vue.filter("phoneEncryption", function(phone) {
    //  手机号加星号
    return phone.substr(0, 3) + "****" + phone.substr(7);
});
Vue.filter("keep2Num", function(value) {
    value = Number(value);
    var b = value.toFixed(3);
    return b.substring(0, b.toString().length - 1);
});
Vue.filter("formatDate", function(value) {
    //  时间戳转换
    var time = new Date(Number(value) * 1000);
    var Y = time.getFullYear();
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
    return Y + "-" + m + "-" + d + " " + H + ":" + mi + ":" + s;
});
Vue.filter("formatDate2", function(value) {
    // 时间戳转换
    var time = new Date(Number(value) * 1000);
    var Y = time.getFullYear();
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
    return Y + "-" + m + "-" + d;
});

Axios.defaults.withCredentials = true; // 让ajax携带cookie

//  Axios.interceptors.request.use(
//    config => {
//      if (store.state.token) {  //  判断是否存在token，如果存在的话，则每个http header都加上token
//        config.headers.Authorization = `token ${store.getters.getToken}`
//      }
//      return config
//    },
//    err => {
//      return Promise.reject(err)
//    })

// import { Indicator } from 'mint-ui'

Axios.interceptors.request.use(
    config => {
        //  判断是否存在token，如果存在的话，则每个http header都加上token
        //  config.withCredentials = true
        //  config.headers['Access-Control-Allow-Origin'] = '*'
        //  config.headers['content-Type'] = 'application/json'
        //  config.headers['XX-Token'] = 'df59d09e6aa457b11a72cd0aec84141f3fba2fab97f6cd04bdbc3c7b89138e7e'
        //  config.headers['XX-Device-Type'] = 'mobile'
        //  config.headers['X-Requested-With'] = 'XMLHttpRequest'
        //  config.headers['content-type'] = 'application/x-www-form-urlencoded'
        //  'content-type': 'application/x-www-form-urlencoded'
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//  配置拦截器，加载loadding的图标
//  添加一个请求拦截器
Axios.interceptors.request.use(
    function(config) {
        //  在请求发送之前做一些事
        return config;
    },
    function(error) {
        //  当出现请求错误是做一些事
        return Promise.reject(error); //   相当于是new Promise(结果是失败)
    }
);

//  添加一个返回拦截器
Axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        //  对返回的错误进行一些处理
        return Promise.reject(error);
    }
);
//  ajax请求
Vue.prototype.$ajax = Axios; //  可以使用this.$ajax了
//  请求路径
//  路径
Vue.prototype.$httpConfig = HttpConfig;
//  引入公共的js
Vue.prototype.publicObj = publicObj;
//  title修改
//  在组件中使用 1 <div v-title>标题内容</div>
Vue.directive("title", {
    inserted: function(el, binding) {
        document.title = el.dataset.title;
    }
});
//  路由切换时 滚动条位置为顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});
//  其他vue实例
window.eventBus = new Vue();

//  关闭生产模式下给出的提示
Vue.config.productionTip = false;

Vue.use(VueBlu);
Vue.use(ElementUI);
Vue.use(Event);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router, //  router
    store, //  注入store
    render: c => c(App)
});
import VueXgplayer from 'vue-xgplayer'

Vue.use(VueXgplayer, {
  playsinline: true
})