import Vue from "vue";
import Router from "vue-router";
import VueMeta from 'vue-meta';
//  首页
import home from "../components/home/home.vue";
// 头部下拉交互
import dropDown from "../components/home/dropDown.vue";
//inquiryPublicity
import inquiryPublicity from "../components/home/inquiryPublicity.vue";
//inqInner
import inqInner from "../components/home/inqInner.vue";
//quotation
import quotation from "../components/home/quotation.vue";
// 品牌
import brand from "../components/brand/brand.vue";
// 品牌内页
import innerbrand from "../components/brand/innerbrand.vue";
// 品牌内页
import compared from "../components/brand/compared.vue";
// 所有商品页
import allGoods from "../components/add/allGoods.vue";
// 店铺
import store from "../components/store/store.vue";
// 店铺搜索
import storeSearch from "../components/store/storeSearch.vue";
// 店铺内商品搜索
import TheStoreSearch from "../components/TheStoreSearch/TheStoreSearch.vue";
// 店铺首页
import storehome from "../components/store/storehome.vue";
// 店铺产品列表
import storelist from "../components/store/storelist.vue";
//店铺动态
import storeNews from "../components/store/storeNews.vue";
// 皇家御饮
import royaldrink from "../components/royalDrink/royaldrink.vue";
// 商品分类
import goodsClass from "../components/royalDrink/goodsClass.vue";

import productList from "../components/royalDrink/productList.vue";
// 商品搜索
import goodsSearch from "../components/royalDrink/goodsSearch.vue";
// 皇家御饮内页
import shopsn_product from "../components/royalDrink/inroyaldrink.vue";
import popup from "../components/royalDrink/popup.vue";
// 套餐购物车
import setMealCar from "../components/royalDrink/setMealCar.vue";
// 御贡赠品
import gift from "../components/gift/gift.vue";
// 滋补养身
import yangshen from "../components/yangShen/yangShen.vue";
// 珠宝玉器
import gem from "../components/gem/gem.vue";
// 喜庆物品
import festive from "../components/festive/festive.vue";
// 购物车
import buyCar from "../components/buyCar/buyCar.vue";
// 购物车
import buyCarPackage from "../components/buyCar/buyCarPackage.vue";
// 普通商品结算页
import account from "../components/buyCar/account.vue";
// 套餐订单结算页
import orderInfo from "../components/buyCar/orderInfo.vue";
// 商品订单结算
import confirmOrder from "../components/confirmOrder/confirmOrder.vue";
// 支付
import pay from "../components/pay/pay.vue";
// 普通商品支付宝成功页
import successCommonAlipay from "../components/pay/successAlipay.vue";
// 余额充值支付宝成功页
import rechargeSuccess from "../components/pay/rechargeSuccess.vue";
// 开店支付 支付宝成功页
import lookProgress from "../components/pay/progressSuccess.vue";
// 积分商品支付宝成功页
import successAlipay from "../components/pay/integralSuccess.vue";
// 套餐商品支付宝成功页
import successPackageAlipay from "../components/pay/packageSuccess.vue";
// 套餐订单售后
import packageReturn from "../components/personal/child/packageOrderDetail/packageReturn.vue";
// 套餐订单售后申请
import packageReturnApplication from "../components/personal/child/packageOrderDetail/packageReturnApplication.vue";
// 套餐订单卖家处理退货申请
import handlingPackageReturns from "../components/personal/child/packageOrderDetail/handlingPackageReturns.vue";
// 套餐订单买家退货给卖家
import theBuyerReturns from "../components/personal/child/packageOrderDetail/theBuyerReturns.vue";
// 套餐订单卖家退款
import setARefund from "../components/personal/child/packageOrderDetail/setARefund.vue";
// 微信支付成功页
import wxSuccess from "../components/pay/successWeixin.vue";
// 微信支付
import wxpay from "../components/pay/wxpay.vue";
// 积分商城
import integral from "../components/integral/integral.vue";
// 积分商品详情页
import IntegralInside from "../components/integral/IntegralInside.vue";
// 积分商城列表
import integrallist from "../components/integral/integrallist.vue";
// 积分商城内页
import integraltext from "../components/integral/integraltext.vue";
// 积分商城结算页
import Settlement from "../components/integral/Settlement.vue";
// 个人中心首页
import homepage from "../components/personal/homepage.vue";
// 个人中心欢迎页
import greet from "../components/personal/child/greet.vue";
// 个人中心VIP
import vip from "../components/personal/child/vip.vue";
// 个人资料
import personalData from "../components/personal/child/personal.vue";
// 举报违规
import informOutline from "../components/personal/child/informOutline.vue";
import noticeList from "../components/personal/child/sonComponent/noticeList.vue";
// 账户安全
import security from "../components/personal/child/accountSecurity.vue";
// 账户绑定
import bound from "../components/personal/child/bound.vue";
// 收货地址
import receive from "../components/personal/child/receive.vue";
// 我的消息
import myNews from "../components/personal/child/myNews.vue";
// 我的订单
import myOrder from "../components/personal/child/myOrder.vue";

import supplyManage from "../components/personal/child/supplyManage.vue";

import productManage from "../components/personal/child/productManage.vue";

import releaseInquiry from "../components/personal/child/releaseInquiry.vue";

import releaseList from "../components/personal/child/releaseList.vue";
// 积分订单
import integralOrder from "../components/personal/child/integralOrder.vue";
// 我的拍卖
import auction from "../components/personal/child/auction.vue";
// 我的评价
import evaluation from "../components/personal/child/evaluation.vue";
// 退款退货
import goodSrefund from "../components/personal/child/goodsRefund.vue";
// 套餐商品退款退货
import packageSrefund from "../components/personal/child/packageSrefund.vue";
// 我的投诉
import complaint from "../components/personal/child/complaint.vue";
// 我的账户
import myAccount from "../components/personal/child/myAccount.vue";
// 我的积分
import myIntegral from "../components/personal/child/myIntegral.vue";
// add
import add from "../components/add/add.vue";
// 我的优惠券
import myCoupons from "../components/personal/child/myCoupons.vue";
// 我的充值
import myCharge from "../components/personal/child/myCharge.vue";
// 我的提现账户
import withdraWalaccount from "../components/personal/child/withdrawalAccount.vue";
// 我的提现账户修改
import updateMyAccount from "../components/personal/child/updateMyAccount.vue";
// 我的提现
import myWithdrawal from "../components/personal/child/myWithdrawal.vue";
// 发票信息
import invoiceInfo from "../components/personal/child/invoiceInfo.vue";
// 发票管理
import invoiceManage from "../components/personal/child/invoiceManage.vue";
// 分销订单
import distributionOrder from "../components/personal/child/distributionOrder.vue";
// 我的团队
import team from "../components/personal/child/team.vue";
// 我的名片
import myCard from "../components/personal/child/myCard.vue";
// 佣金明细
import commission from "../components/personal/child/commission.vue";
// 分销账户
import distributionAccount from "../components/personal/child/distributionAccount.vue";
// 底部购物指南-列表页
import guide from "../components/guide/guide.vue";
// 公告--列表--详情
import notice from "../components/guide/notice.vue";
// 申请售后
import apply from "../components/personal/apply.vue";
// 余额充值
import recharge from "../components/personal/recharge.vue";
// 换货处理---仅换货
import exchange from "../components/personal/exchange.vue"; // 删
// 仅退款
import refund from "../components/personal/refund.vue"; // 删
// 退款申请
import applyRefund from "../components/personal/applyRefund.vue";
// 提现申请
import drawMoney from "../components/drawMoney/drawMoney.vue";
// 换货申请
import applyChange from "../components/personal/applyChange.vue";
// 换货处理
import disposeChange from "../components/personal/disposeChange.vue";
// 退款退货
import withdraw from "../components/personal/withdraw.vue"; // 删
// 退款退货申请
import returnGoods from "../components/personal/returnGoods.vue";
// 退款退货处理
import returnHandle from "../components/personal/returnHandle.vue";
// 买家退货给卖家
import sellerReceives from "../components/personal/sellerReceives.vue";
// 卖家退款
import sellerRefund from "../components/personal/sellerRefund.vue";
// 退款退货详情
import xiangQing from "../components/personal/xiangQing.vue";
// 我的收藏
import collect from "../components/personal/collect.vue";
// 最近浏览
import ecentBrowse from "../components/personal/ecentbrowse.vue";
// 我的订单-----买家投诉
import complain from "../components/personal/complain.vue";
// 招商入驻  -------查看进度
import progressLook from "../components/personal/child/lookProgress.vue";
// 招商入驻  -------入驻协议
import agreement from "../components/business/agreement.vue";
// 招商入驻  -------个人入驻
import personAdmission from "../components/business/child/personAdmission.vue";
// 招商入驻  -------个人入驻银行卡信息
import personBankInfo from "../components/business/child/personBankInfo.vue";
// 招商入驻  -------个人入驻店铺信息
import personShopInfo from "../components/business/child/personShopInfo.vue";
// 招商入驻  -------企业入驻
import companyAdmission from "../components/business/child/companyAdmission.vue";
// 招商入驻  -------企业入驻银行卡信息
import companyBankInfo from "../components/business/child/companyBankInfo.vue";
// 招商入驻  -------企业入驻店铺信息
import companyShopInfo from "../components/business/child/companyShopInfo.vue";

import investment from "../components/business/child/investment.vue";

import investSettle from "../components/business/child/investSettle.vue";
// 招商入驻  -------提示页
import Submit from "../components/business/submit.vue";
// 招商入驻  -------编辑个人开店信息第一页
import halfwayOne from "../components/business/child/halfwayOne.vue";
// 招商入驻  -------编辑个人开店信息第二页
import halfwayTwo from "../components/business/child/halfwayTwo.vue";
// 招商入驻  -------编辑企业开店信息第一页
import companyOne from "../components/business/child/companyOne.vue";
// 招商入驻  -------编辑企业开店信息第二页
import companyTwo from "../components/business/child/companyTwo.vue";
// 招商入驻  -------编辑企业开店信息第三页
import companyTherr from "../components/business/child/companyTherr.vue";
// 引入抢购页面
import chase from "../components/gouwu/chase.vue"; // 购物页面1
import introduce from "../components/gouwu/introduce.vue"; // 抢购页面
import settleAccounts from "../components/gouwu/settleAccounts.vue"; // 抢购结算页
import payment from "../components/gouwu/payment.vue"; // 抢购支付页
import progress from "../components/business/progress.vue"; // 招商入驻12-0
import build from "../components/business/build.vue"; // 招商入驻12-1
import complete from "../components/business/complete.vue"; // 招商入驻12-2
import passwordLogin from "../components/Login/passwordLogin.vue"; // 密码登录
import find from "../components/Login/find.vue"; // 找回密码1
import findTwo from "../components/Login/findTwo.vue"; // 找回密码2
import findThree from "../components/Login/findThree.vue"; // 找回密码3
import findFour from "../components/Login/findFour.vue"; // 找回密码4
import register from "../components/Login/register.vue"; // 注册
import packagePay from "../components/packagePay/packagePay.vue";
//  引入公共组件
import headCom from "../common/headCom.vue"; //  头部
import storeheader from "../common/storeHeader.vue"; //  店铺头部
import footCom from "../common/footCom.vue"; //  底部
import buyHeader from "../common/buyHeader.vue"; // 购物车头部
import Header from "../common/Header.vue"; // 顶部的头部
import backTop from "../common/backTop.vue"; // 回到顶部
import receivingAddress from "../common/receivingAddress.vue"; // 选择地址
import myShoppingCart from "../common/myShoppingCart.vue"; // 我的购物车
import addressOperation from "../common/addressOperation.vue"; // 地址操作
import selectionArea from "../common/selectionArea.vue"; // 地址选择
import likeAndHistory from "../common/likeAndHistory.vue"; // 猜你喜欢
import paySuccess from "../common/paySuccess.vue"; // 支付成功页

Vue.component("head-com", headCom);
Vue.component("store-header", storeheader); //  店铺头部
Vue.component("foot-com", footCom);
Vue.component("buy-header", buyHeader);
Vue.component("common-header", Header);
Vue.component("back-top", backTop);
Vue.component("receiving-address", receivingAddress);
Vue.component("my-shopping-cart", myShoppingCart);
Vue.component("address-operation", addressOperation);
Vue.component("selection-area", selectionArea);
Vue.component("like-and-history", likeAndHistory);
Vue.component("pay-success", paySuccess);

Vue.use(Router);
Vue.use(VueMeta);

//  路由配置
const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/welcomeShopSn",
            name: "welcomeShopSn",
            component: () => import("../components/welcome/welcomeShopSn")
        },
        {
            path: "/ShopSn",
            name: "ShopSn",
            component: () => import("../components/welcome/ShopSn")
        },
        {
            path: "/Shop_sn",
            name: "Shop_sn",
            component: () => import("../components/welcome/Shop_sn")
        },
        // //  重定向
        {
            path: "/",
            name: "default",
            redirect: {
                name: "home",
                component: home
            }
        },
        // 首页
        {
            path: "/home",
            name: "home",
            component: home
        },
        // 首页下拉交互
        {
            path: "/dropDown",
            name: "dropDown",
            component: dropDown
        },
        {
            path: "/inquiryPublicity",
            name: "inquiryPublicity",
            component: inquiryPublicity
        },
        {
            path: "/inqInner",
            name: "inqInner",
            component: inqInner
        },
        {
            path: "/quotation",
            name: "quotation",
            component: quotation
        },
        // 所有商品页
        {
            path: "/allGoods",
            name: "allGoods",
            component: allGoods
        },

        // 品牌
        {
            path: "/brand",
            name: "brand",
            component: brand
        },  //noheader
        // 品牌内页
        {
            path: "/innerbrand/:id",
            name: "innerbrand",
            component: innerbrand
        },
        // 品牌内页
        {
            path: "/compared/:id",
            name: "compared",
            component: compared
        },
        // 店铺
        {
            path: "/store",
            name: "store",
            component: store
        }, //noheader
        // 店铺搜索
        {
            path: "/storeSearch",
            name: "storeSearch",
            component: storeSearch
        },
        // 店内商品搜索
        {
            path: "/TheStoreSearch",
            name: "TheStoreSearch",
            component: TheStoreSearch
        },
        {
            path: "/add",
            name: "add",
            component: add
        }, //noheader
        // 套餐购物车
        {
            path: "/setMealCar",
            name: "setMealCar",
            component: setMealCar
        },
        // 套餐支付
        {
            path: "/packagePay",
            name: "packagePay",
            component: packagePay
        }, //noheader
        // 店铺首页
        {
            path: "/storehome",
            name: "storehome",
            component: storehome
        },
        {
            // 店铺vip
            path: "/vip",
            name: "vip",
            component: vip
        },
        // 店铺产品列表
        {
            path: "/storelist",
            name: "storelist",
            component: storelist
        },
        //店铺动态
        {
            path:"/storeNews",
            name: "/storeNews",
            component: storeNews
        },
        // 皇家御饮
        {
            path: "/royaldrink",
            name: "royaldrink",
            component: royaldrink
        },
        // 商品分类
        {
            path: "/goodsClass",
            name: "goodsClass",
            component: goodsClass
        }, //noheader

        {
            path: "/productList",
            name: "productList",
            component: productList
        },

        // 商品搜索
        {
            path: "/goodsSearch",
            name: "goodsSearch",
            component: goodsSearch
        },
        // 皇家御饮内页
        {
            path: "/shopsn_product",
            name: "shopsn_product",
            component: shopsn_product
        },
        // 优惠券弹出层
        {
            path: "/popup",
            name: "popup",
            component: popup
        }, //noheader
        // 最佳组合 结算页
        {
            path: "/recommendAndGroupAccout",
            name: "recommendAndGroupAccout",
            component: () =>
                import("../components/royalDrink/recommendAndGroupAccout")
        }, //noheadercan'tcheck
        // 御贡赠品
        {
            path: "/gift",
            name: "gift",
            component: gift
        },
        // 滋补养身
        {
            path: "/yangshen",
            name: "yangshen",
            component: yangshen
        }, //noheader
        // 珠宝玉器
        {
            path: "/gem",
            name: "gem",
            component: gem
        },
        // 喜庆物品
        {
            path: "/festive",
            name: "festive",
            component: festive
        },
        // 购物车
        {
            path: "/buyCar",
            name: "buyCar",
            component: buyCar
        }, //noheaderbuy-header
        // 购物车
        {
            path: "/buyCarPackage",
            name: "buyCarPackage",
            component: buyCarPackage
        }, //noheaderbuy-header
        // 普通商品结算页
        {
            path: "/account",
            name: "account",
            component: account
        }, //noheadercan'tcheck
        // 套餐商品结算页
        {
            path: "/orderInfo",
            name: "orderInfo",
            component: orderInfo
        }, //noheadercan'tcheck
        // 商品订单结算
        {
            path: "/confirmOrder/:goods_id/:num",
            name: "confirmOrder",
            component: confirmOrder
        }, //noheadersecondheader
        // 支付
        {
            path: "/pay",
            name: "pay",
            component: pay
        }, //noheader
        // 积分支付
        {
            path: "/integralPay",
            name: "integralPay",
            component: () => import("../components/integral/integralPay.vue")
        }, //noheader
        // 微信积分支付
        {
            path: "/integralwxPay",
            name: "integralwxPay",
            component: () => import("../components/integral/integralwxPay.vue")
        }, //noheader
        // 微信支付
        {
            path: "/wxpay/:total_price/:id/:state",
            name: "wxpay",
            component: wxpay
        }, //noheader
        // 普通商品支付宝支付成功页
        {
            path: "/successCommonAlipay",
            name: "successCommonAlipay",
            component: successCommonAlipay
        }, //noheader
        // 余额充值支付宝成功页
        {
            path: "/rechargeSuccess",
            name: "rechargeSuccess",
            component: rechargeSuccess
        }, //noheader
        // 开店支付 支付宝成功页
        {
            path: "/lookProgress",
            name: "lookProgress",
            component: lookProgress
        }, //noheader
        // 积分商品支付支付宝成功页
        {
            path: "/successAlipay",
            name: "successAlipay",
            component: successAlipay
        }, //noheader
        // 套餐商品支付支付宝成功页
        {
            path: "/successPackageAlipay",
            name: "successPackageAlipay",
            component: successPackageAlipay
        }, //noheader
        // 微信支付成功页
        {
            path: "/wxSuccess",
            name: "wxSuccess",
            component: wxSuccess
        }, //noheader

        // 积分商城
        {
            path: "/integral",
            name: "integral",
            component: integral
        }, //noheader
        // 积分详情页
        {
            path: "/IntegralInside",
            name: "IntegralInside",
            component: IntegralInside
        },
        // 积分商城列表
        {
            path: "/integrallist",
            name: "integrallist",
            component: integrallist
        },
        // 积分商城内页
        {
            path: "/integraltext/:id/:integral_id",
            name: "integraltext",
            component: integraltext
        },
        // 积分商城结算页
        {
            path: "/Settlement/:id",
            name: "Settlement",
            component: Settlement
        }, //noheadersecondheader
        {
            // 提现申请
            path: "/drawMoney",
            name: "drawMoney",
            component: drawMoney
        },
        // 套餐订单售后
        {
            path: "/packageReturn",
            name: "packageReturn",
            component: packageReturn
        }, //noheadercan'tcheck
        // 套餐订单售后申请
        {
            path: "/packageReturnApplication",
            name: "packageReturnApplication",
            component: packageReturnApplication
        }, //noheadercan'tcheck
        // 套餐订单卖家处理退货申请
        {
            path: "/handlingPackageReturns",
            name: "handlingPackageReturns",
            component: handlingPackageReturns
        }, //noheadercan'tcheck
        // 套餐订单买家退货给卖家
        {
            path: "/theBuyerReturns",
            name: "theBuyerReturns",
            component: theBuyerReturns
        },  //noheadercan'tcheck
        // 套餐订单卖家退款
        {
            path: "/setARefund",
            name: "setARefund",
            component: setARefund
        }, //noheadercan'tcheck
        // 个人中心首页
        {
            path: "/homepage",
            name: "homepage",
            component: homepage,
            children: [
                // 重定向
                {
                    path: "/homepage",
                    redirect: "/greet"
                },
                {
                    // 个人中心欢迎页
                    path: "/greet",
                    name: "greet",
                    component: greet
                },
                // 我的收藏
                {
                    path: "/collect",
                    name: "collect",
                    component: collect
                },
                // 最近浏览
                {
                    path: "/ecentBrowse",
                    name: "ecentBrowse",
                    component: ecentBrowse
                },

                {
                    // 个人资料
                    path: "/personalData",
                    name: "personalData",
                    component: personalData
                },
                {
                    // 账户安全
                    path: "/security",
                    name: "security",
                    component: security
                },
                {
                    // 账户绑定
                    path: "/bound",
                    name: "bound",
                    component: bound
                },
                {
                    // 收货地址
                    path: "/receive",
                    name: "receive",
                    component: receive
                },
                {
                    // 我的消息
                    path: "/myNews",
                    name: "myNews",
                    component: myNews
                },
                {
                    // 我的订单
                    path: "/myOrder",
                    name: "myOrder",
                    component: myOrder
                },
                {
                    // 我的订单
                    path: "/supplyManage",
                    name: "supplyManage",
                    component: supplyManage
                },
                {
                    // 我的订单
                    path: "/productManage",
                    name: "productManage",
                    component: productManage
                },
                {
                    // 我的订单
                    path: "/releaseInquiry",
                    name: "releaseInquiry",
                    component: releaseInquiry
                },
                {
                    // 我的订单
                    path: "/releaseList",
                    name: "releaseList",
                    component: releaseList
                },
                //举报违规
                {
                    path: "/informOutline",
                    name: "informOutline",
                    component: informOutline
                },

                {
                    // 积分订单
                    path: "/integralOrder",
                    name: "integralOrder",
                    component: integralOrder
                },
                {
                    // 套餐订单
                    path: "/packageOrder",
                    name: "packageOrder",
                    component: () =>
                        import("../components/personal/child/packageOrder")
                },
                {
                    // 套餐订单详情
                    path: "/packageOrderDetail",
                    name: "packageOrderDetail",
                    component: () =>
                        import(
                            "../components/personal/child/packageOrderDetail/orderDetail"
                        )
                },

                // 订单详情
                {
                    path: "/orderDetail",
                    name: "orderDetail",
                    component: () =>
                        import("../components/personal/child/order/orderDetail")
                },
                // 积分订单详情
                {
                    path: "/integralDetail",
                    name: "integralDetail",
                    component: () =>
                        import(
                            "../components/personal/child/integralOrder/orderDetail"
                        )
                },
                // 评论详情
                {
                    path: "/commentDetail",
                    name: "commentDetail",
                    component: () =>
                        import("../components/personal/child/commentDetail")
                },
                // 物流详情
                {
                    path: "/logistics/",
                    name: "logistics",
                    component: () =>
                        import("../components/personal/child/order/logistics")
                },
                // 我的拍卖
                {
                    path: "/auction",
                    name: "auction",
                    component: auction
                },
                {
                    // 我的拍卖
                    path: "/evaluation",
                    name: "evaluation",
                    component: evaluation
                },
                {
                    // 我的评价详情
                    path: "/commentDetail",
                    name: "commentDetail",
                    component: () =>
                        import("../components/personal/child/commentDetail")
                },
                {
                    // 发布评价
                    path: "/publishComment",
                    name: "publishComment",
                    component: () =>
                        import("../components/personal/child/publishComment")
                },
                {
                    // 退款退货
                    path: "/goodSrefund",
                    name: "goodSrefund",
                    component: goodSrefund
                },
                {
                    // 套餐商品退款退货
                    path: "/packageSrefund",
                    name: "packageSrefund",
                    component: packageSrefund
                },
                {
                    // 我的投诉
                    path: "/complaint/:order_id/:goods_id",
                    name: "complaint",
                    component: complaint
                },
                {
                    // 我的账户
                    path: "/myAccount",
                    name: "myAccount",
                    component: myAccount
                },
                {
                    // 我的积分
                    path: "/myIntegral",
                    name: "myIntegral",
                    component: myIntegral
                },
                {
                    // 我的优惠券
                    path: "/myCoupons",
                    name: "myCoupons",
                    component: myCoupons
                },
                {
                    // 我的充值
                    path: "/myCharge",
                    name: "myCharge",
                    component: myCharge
                },
                {
                    // 我的提现账户
                    path: "/withdraWalaccount",
                    name: "withdraWalaccount",
                    component: withdraWalaccount
                },
                {
                    // 我的提现账户
                    path: "/updateMyAccount",
                    name: "updateMyAccount",
                    component: updateMyAccount
                },
                {
                    // 我的提现
                    path: "/myWithdrawal",
                    name: "myWithdrawal",
                    component: myWithdrawal
                },

                {
                    // 发票信息
                    path: "/invoiceInfo",
                    name: "invoiceInfo",
                    component: invoiceInfo
                },
                {
                    // 发票管理
                    path: "/invoiceManage",
                    name: "invoiceManage",
                    component: invoiceManage
                },
                {
                    // 分销订单
                    path: "/distributionOrder",
                    name: "distributionOrder",
                    component: distributionOrder
                },
                {
                    // 我的团队
                    path: "/team",
                    name: "team",
                    component: team
                },
                {
                    // 我的名片
                    path: "/myCard",
                    name: "myCard",
                    component: myCard
                },
                {
                    // 我的列表
                    path: "/noticeList",
                    name: "noticeList",
                    component: noticeList
                },
                {
                    // 佣金明细
                    path: "/commission",
                    name: "commission",
                    component: commission
                },
                {
                    // 分销账户
                    path: "/distributionAccount",
                    name: "distributionAccount",
                    component: distributionAccount
                },
                // 招商入驻  -------查看进度
                {
                    path: "/progressLook",
                    name: "progressLook",
                    component: progressLook
                }
            ]
        },
        // 底部购物指南-列表页
        {
            path: "/guide",
            name: "guide",
            component: guide
        },
        // 公告列表详情
        {
            path: "/notice/:id",
            name: "notice",
            component: notice
        },
        // 申请售后
        {
            path: "/apply/:id/:goods_id/:order_sn_id",
            name: "apply",
            component: apply
        },
        // 余额充值
        {
            path: "/recharge",
            name: "recharge",
            component: recharge
        },
        // 仅换货
        {
            path: "/exchange",
            name: "exchange",
            component: exchange
        },

        // 仅退款
        {
            path: "/refund",
            name: "refund",
            component: refund
        },
        // 退款申请
        {
            path: "/applyRefund/:id/:goods_id/:order_sn_id/:type",
            name: "applyRefund",
            component: applyRefund
        },
        // 换货申请
        {
            path: "/applyChange/:id/:goods_id/:order_sn_id/:type",
            name: "applyChange",
            component: applyChange
        },
        // 换货申请
        {
            path: "/disposeChange",
            name: "disposeChange",
            component: disposeChange
        },
        // 退款退货
        {
            path: "/withdraw",
            name: "withdraw",
            component: withdraw
        },
        // 退款退货申请
        {
            path: "/returnGoods/:id/:goods_id/:order_sn_id",
            name: "returnGoods",
            component: returnGoods
        },
        // 退款退货处理
        {
            path: "/returnHandle",
            name: "returnHandle",
            component: returnHandle
        },
        // 买家退货给卖家
        {
            path: "/sellerReceives",
            name: "sellerReceives",
            component: sellerReceives
        }, //noheadercan'tcheck
        // 卖家退款
        {
            path: "/sellerRefund",
            name: "sellerRefund",
            component: sellerRefund
        }, //noheadercan'tcheck
        // 退款退货详情
        {
            path: "/xiangQing",
            name: "xiangQing",
            component: xiangQing
        },

        // 我的订单-----买家投诉
        {
            path: "/complain",
            name: "complain",
            component: complain
        },
        // 招商入驻  -------入驻协议
        {
            path: "/agreement",
            name: "agreement",
            component: agreement
        },
        // 招商入驻  -------个人入驻个人信息
        {
            path: "/personAdmission",
            name: "personAdmission",
            component: personAdmission
        },
        // 招商入驻  -------个人入驻个人银行信息
        {
            path: "/personBankInfo",
            name: "personBankInfo",
            component: personBankInfo
        },
        // 招商入驻  -------个人入驻店铺信息
        {
            path: "/personShopInfo",
            name: "personShopInfo",
            component: personShopInfo
        },
        // 招商入驻  -------企业入驻
        {
            path: "/companyAdmission",
            name: "companyAdmission",
            component: companyAdmission
        },
        // 招商入驻  -------企业入驻银行卡信息
        {
            path: "/companyBankInfo",
            name: "companyBankInfo",
            component: companyBankInfo
        },
        // 招商入驻  -------企业入驻店铺信息
        {
            path: "/companyShopInfo",
            name: "companyShopInfo",
            component: companyShopInfo
        },
        // 招商入驻  -------提示页
        {
            path: "/Submit",
            name: "Submit",
            component: Submit
        },
        {
            path: "/investment",
            name: "investment",
            component: investment
        },
        {
            path: "/investSettle",
            name: "investSettle",
            component: investSettle
        },
        {
            path: "/chase",
            name: "chase",
            component: chase
        }, //noheader
        {
            path: "/introduce/:id",
            name: "introduce",
            component: introduce
        },
        {
            // 抢购内页
            path: "/settleAccounts",
            name: "settleAccounts",
            component: settleAccounts
        },
        {
            // 抢购支付页
            path: "/payment",
            name: "payment",
            component: payment
        }, //noheader
        // 招商入驻12-0
        {
            path: "/progress",
            name: "progress",
            component: progress
        }, //noheader
        // 招商入驻12.1
        {
            path: "/build",
            name: "build",
            component: build
        },
        // 招商入驻12.2
        {
            path: "/complete",
            name: "complete",
            component: complete
        },
        // 招商入住 编辑个人开店信息第一页
        {
            path: "/halfwayOne",
            name: "halfwayOne",
            component: halfwayOne
        },
        // 招商入住 编辑个人开店信息第二页
        {
            path: "/halfwayTwo",
            name: "halfwayTwo",
            component: halfwayTwo
        },
        // 招商入住 编辑企业开店信息第一页
        {
            path: "/companyOne",
            name: "companyOne",
            component: companyOne
        },
        // 招商入住 编辑企业开店信息第二页
        {
            path: "/companyTwo",
            name: "companyTwo",
            component: companyTwo
        },
        // 招商入住 编辑企业开店信息第三页
        {
            path: "/companyTherr",
            name: "companyTherr",
            component: companyTherr
        },
        // 密码登录
        {
            path: "/passwordLogin",
            name: "passwordLogin",
            component: passwordLogin
        }, //noheader
        // 找回密码1
        {
            path: "/find",
            name: "find",
            component: find
        }, //noheader
        // 找回密码2
        {
            path: "/findTwo",
            name: "findTwo",
            component: findTwo
        }, //noheader
        // 找回密码3
        {
            path: "/findThree",
            name: "findThree",
            component: findThree
        }, //noheader
        // 找回密码4
        {
            path: "/findFour",
            name: "findFour",
            component: findFour
        }, //noheader
        // 注册
        {
            path: "/register",
            name: "register",
            component: register
        } //noheader
    ]
});

router.beforeEach((to, from, next) => {
    console.log(to.meta);
    next();
});
export default router;
