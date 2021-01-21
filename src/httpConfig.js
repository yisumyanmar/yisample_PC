//  const request =  'http:// 192.168.123.6/shopsn_b2b2c_mobile_api/index.php/'
// const request =  'http:// b2b2c.zybv.cn/'
// const request = 'http://api.shopsn.net/index.php/'
const request = 'http://api.gtpacking.cn/custom-pc/index.php/'
// const request = 'http://192.168.1.146/pc/index.php/'
const imgRequest = 'http://center.shopsn.cn/'
// const request = 'http://pc.local.com/'
// const userModuleIndex = 'http://api.shopsn.net/admin.php/'
const userModuleIndex = 'http://api.gtpacking.cn/custom-pc/admin.php/'
// const userModuleIndex = 'http://192.168.1.146/pc/admin.php/'
const uploadImage = 'upload.php/'
//  const request = 'http:// test_b2b2c.shopsn.cn/'
const config = {
    // 公共部分
    // getCommonHeader: userModuleIndex + 'HomeIndex/commonHeader', // 首页头部
    getBalance: request + 'Balance/getBalance', // 账号余额
    getCooprativeList: request + 'CooperativePartner/getCooprativeList', // 底部合作伙伴
    getKeyWordsList: request + 'HotWords/getKeyWordsList', // 商品关键词
    // 网站信息
    aboutEtcetera: request + 'IntnetInfomartion/aboutEtcetera',
   
    // 公共底部
    commonFloor: request + 'ArticleCategory/categoryLists',
    // 登录注册
    register: request + 'Register/accountRegister', //  用户注册
    login: request + 'Register/loginAccount', //  账户登录
    sms: request + 'Register/registerSendMsg', //  注册--发送短信
    smsLoginSend: request + 'Register/smsLogin', // 手机登录
    smsLogin: request + 'Register/loginSendMsg', //  短信登录发送短信
    QQThirdPartyLogin: request + 'QQThirdPartyLogin/qqLogin', //  第三方授权登录
    sendPhoneNumber: request + 'admin.php/AccountSecurity/sendPhoneNumber', // 账户安全-发送短信 :多用
    backPwdSendSms: request + 'Register/backPwdSendSms', // 找回密码--短信发送
    backPwd: request + 'Register/backPwd', // 找回密码
    outLogin: userModuleIndex + 'LogOut/logOut', // 退出登录

    //  首页
    home: request + 'HomeIndex/home', //  首页信息获取
    getClass: request + 'GoodsClass/getClassByPid', // 首页商品分类
    getAllClass: request + 'GoodsClass/getAllClass', // 首页商品分类
    // goodsType: request + 'Goods/goodsType',
    homefLoor: request + 'Floor/homefLoor', // 首页楼层
    randStore: request + 'Store/storeShoppingList', // 首页店铺街换一批
    SearchIndex: request + 'SearchIndex/search', // 首页搜索
    getGoodsInStore: request + 'StoreSearchGoods/getGoodsInStore', // 店铺首页搜索

    //  品牌
    recommendBrand: request + 'Brand/RecommendBrand', // 推荐品牌
    brandDetail: request + 'Brand/brandDetail', // 品牌店详情
    brandList: request + 'Brand/brand_list', // 品牌店列表

    // 店铺
    ShopGoodClass: request + 'StoreClass/storeClasses', // 店铺分类
    getStoreList: request + 'Store/storeList', //  首页店铺列表
    getStar: request + 'StoreEvaluate/getTheStoreDynamicRating', // 店铺动态评分
    getStoreNav: request + 'Store/storeNav', // 店铺导航
    getStoreClass: request + 'Store/storeClass', // 获取店铺导航商品分类
    getStoreBanner: request + 'StoreAdv/getBanner', // 获取店铺轮播
    getStoreDetails: request + 'Store/shopDetails', // 获取店铺详情
    setAttenStore: request + 'Store/attenStore', // 关注店铺
    setCancelAttenStore: request + 'Store/cancelAttenStore', // 取消关注店铺
    getStoreDetonating: request + 'Store/detonating', // 店铺爆品专区
    getStoreRecommendGoods: request + 'Store/recommendGoods', // 店铺推荐商品
    getStoreGoodsAll: request + 'Store/storeGoodsAll', // 店铺商品列表
    getStoreTopSelling: request + 'Store/topSelling', // 店铺热销排行
    getTheStoreSearch: request + 'StoreSearchGoods/searchGoodsList', // 店铺内搜索
    getGoodsStoreRankingsList: request + 'StoreRankings/getGoodsStoreRankingsList', // 店内排行榜
    getBannerAd: request + 'StoreAdv/getBannerAd', // 店铺banner图
    storeClass: request + 'StoreInsideClass/storeClass', // 店内分类
    storeDynamic: request + 'store/storeDynamic', //店铺动态 - 新品
    getPromoProductByStore: request + 'store/getPromoProductByStore',//店铺动态 - 促销
    //  积分
    getHotExchange: request + 'IntegralGoods/heateXchange', // 热兑商品
    getIntegralGoodsNewList: request + 'IntegralGoods/integralGoodsNewList', // 最新兑换商品
    getBrandList: request + 'Brand/brandList', // 获取商品品牌
    getIntegralUseInfo: request + 'IntegralUse/integralHome', // 积分商城首页轮播用户信息
    getIntegralGoodsList: request + 'IntegralGoods/integralGoodsList', // 所有积分商品列表详情
    integralGoodsInfo: request + 'IntegralGoods/integralGoodsInfo', // 积分商品信息
    goodsSalesSum: request + 'Goods/goodsSalesSum', // 积分商品评价数与赠送积分
    // getIntegralGoodsDetail: request + 'IntegralGoods/integralGoodsList', // 积分商品详情
    IntegraltoSettleAccounts: request + 'IntegralGoods/toSettleAccounts', // 积分商品去结算(确认订单信息)
    // 我的收藏
    myCollectionGoods: userModuleIndex + 'Pcenter/myCollectionGoods', // 获取商品收藏
    // myCollectionLike: userModuleIndex + 'Pcenter/myCollectionLike', // 猜你喜欢
    myCollectionLike: request + 'HomeIndex/myCollectionLike', // 猜你喜欢
    myCollectionStore: userModuleIndex + 'Pcenter/myCollectionStore', // 店铺收藏
    countNum: userModuleIndex + 'Pcenter/countNum', // 收藏数量
    collectionDel: userModuleIndex + 'Pcenter/myCollectionDel', // 商品收藏单个删除
    collectionDelAll: userModuleIndex + 'Pcenter/myCollectionDelAll', // 商品收藏批量删除
    commoditySearch: userModuleIndex + 'Pcenter/mycollectiondity', // 商品搜索
    myStoreFollowSearch: userModuleIndex + 'Pcenter/myStoreFollowSearch', // 店铺搜索
    myStoreFollowDel: request + 'Store/cancelAttenStore', // 店铺收藏删除
    serviceList: request + 'Service/serviceList', // 客服

    // 个人中心
    shopCollection: userModuleIndex + 'Pcenter/myCollectiondit', // 个人中心首页店铺收藏
    goodsCollection: userModuleIndex + 'Pcenter/mycollectiondity', // 个人中心首页商品收藏
    myCollectionlikes: userModuleIndex + 'Pcenter/myCollectionlikes', // 个人中心首页猜你喜欢
    myCollectionShopping: userModuleIndex + 'Pcenter/myCollectionShopping', // 个人中心首页我的购物车
    myCollectionRecords: userModuleIndex + 'Pcenter/myCollectionRecords', // 个人中心首页浏览记录
    orderStatusNum: userModuleIndex + 'OrderMake/OrderStatusNum', // 个人中心首页订单数
    userInfo: userModuleIndex + 'User/userInfo', // 个人资料基本资料
    userInfoEdit: userModuleIndex + 'User/userInfoEdit', // 个人资料基本资料修改
    setBalancePassword: userModuleIndex + 'User/setBalancePassword',
    verifySms: userModuleIndex + 'User/verifySms',
    checkVerify: userModuleIndex + 'User/checkVerify',
    getuploadIdCard: userModuleIndex + 'Image/uploadIdCard', // 个人资料身份证正面
    getuploadIdCardSide: userModuleIndex + 'Image/uploadIdCardSide', // 个人资料身份证反面
    getidentityAuthentication: userModuleIndex + 'User/identityAuthentication', // 个人资料身份保存
    uploadPicture: userModuleIndex + 'Image/uploadPicture', // 个人资料基本头像修改
    parseuserHeader: userModuleIndex + 'UserHeader/parseuserHeader', // 保存个人资料头像
    userSecurityDetails: userModuleIndex + 'User/userSecurityDetails', // 账户安全用户资料
    accountSecurityVerify: userModuleIndex + 'AccountSecurity/accountSecurityVerify', // 图形验证码
    accountSecurityCheckVerify: userModuleIndex + 'AccountSecurity/accountSecurityCheckVerify', // 验证验证码
    shortMessageVerification: userModuleIndex + 'AccountSecurity/shortMessageVerification', // 验证短信验证码
    emailsendMailbox: userModuleIndex + 'AccountSecurity/sendMailbox', // 发送邮箱验证
    emailverifMailbox: userModuleIndex + 'AccountSecurity/verifMailbox', // 验证邮箱
    sendPhoneNumberByEditPhone: userModuleIndex + 'AccountSecurity/sendPhoneNumberByEditPhone', // 【修改手机号】发送验证码
    modifyIphone: userModuleIndex + 'AccountSecurity/modifyIphone', // 账户安全-修改绑定手机:第二步
    verificationPassword: userModuleIndex + 'AccountSecurity/verificationPassword', // 修改密码
    modifyPassword: userModuleIndex + 'AccountSecurity/modifyPassword', // 新密码
    integralRule: userModuleIndex + 'UserLevel/getList', // 资金中心我的积分规则
    myIntegral: userModuleIndex + 'UserData/getLevel', // 资金中心我的积分
    myCouponLists: userModuleIndex + 'CouponList/myCouponLists', // 资金中心我的优惠券
    delCoupon: userModuleIndex + 'CouponList/useCoupon',
    rechargeList: userModuleIndex + 'BalanceRecord/getBalanceList', // 资金中心我的充值记录
    rechargeType: userModuleIndex + 'Recharge/rechargeType', // 资金中心我的充值类型
    getDetailsType: userModuleIndex + 'Balance/getDetailsType', // 资金中心-我的账户-交易明细
    getDetailsIncome: userModuleIndex + 'Balance/getDetailsIncome', // 资金中心-我的账户-收入
    getDetailsPay: userModuleIndex + 'Balance/getDetailsPay', // 资金中心-我的账户-支出
    balanceRecharge: userModuleIndex + 'Recharge/balanceRecharge', // 资金中心-我的账户-余额充值
    cashBehavior: userModuleIndex + 'CashWithdrawal/cashBehavior', // 提现
    loGcashBehavior: userModuleIndex + 'CashWithdrawalLog/cashBehavior', // 提现日志
    foRcashAppliation: userModuleIndex + 'CashWithdrawalApplication/cashAppliation', // 提现申请
    getPayRechargeResult: request + 'GetPayType/getPayRechargeResult', // 资金中心-我的账户-余额充值 充值类型
    integralLog: userModuleIndex + 'Integral/getOwnIntegralList',
    getInvoiceAreRaised: userModuleIndex + 'Invoice/getInvoiceAreRaised', // 发票信息普通发票
    capitaList: userModuleIndex + 'Invoice/capitaList', // 发票信息增值发票
    capitaAdd: userModuleIndex + 'Invoice/capitaAdd', // 发票信息新增增值发票
    capitaDetails: userModuleIndex + 'Invoice/capitaDetails', // 发票信息增值发票详情
    capitaDelete: userModuleIndex + 'Invoice/capitaDelete', // 发票信息删除增值发票
    capitaSave: userModuleIndex + 'Invoice/capitaSave', // 发票信息修改增值发票
    invoicesAreRaisedAdd: userModuleIndex + 'Invoice/invoicesAreRaisedAdd', // 发票信息添加发票抬头
    invoicesAreRaisedDelete: userModuleIndex + 'InvoicesAreRaised/delete', // 发票信息删除发票抬头
    invoicesAreRaisedSave: userModuleIndex + 'Invoice/invoicesAreRaisedSave', // 发票信息修改发票抬头
    getMyFootFrint: userModuleIndex + 'FootPrint/myFootFrint', // 最近浏览
    myFootFrintSearch: userModuleIndex + 'FootPrint/myFootFrintSearch', // 最近浏览--宝贝搜索
    myFootFrintDel: userModuleIndex + 'FootPrint/myFootFrintDel', // 最近浏览--删除
    getOrderReturnList: userModuleIndex + 'OrderReturnGoods/orderReturnList', // 退货-退货列表,搜索接口
    getOrderExchangeList: userModuleIndex + 'OrderExchangeGoods/orderExchangeList', // 换货--换货列表
    orderReturnDetails: userModuleIndex + 'OrderReturnGoods/orderReturnDetails', // 退货--退货详情
    myComplain: userModuleIndex + 'Complain/myComplain', // 投诉申请
    complainList: userModuleIndex + 'Complain/complainList', // 投诉申请列表
    ComplainDel: userModuleIndex + 'Complain/ComplainDel', // 取消投诉
    memberImportant: request + 'Store/storeMemberLevel', // vip
    storeDiscount: request + 'Store/storeDiscount', // 折扣
    noticeReport: userModuleIndex + 'GoodsReport/report',//举报
    noticeType: userModuleIndex + 'GoodsReport/reportTopic',//举报类型
    noticeSubmit: userModuleIndex + 'GoodsReport/commitReport',//举报类型提交
    noticeList: userModuleIndex + 'GoodsReport/reportList',//举报类型列表
    noticeCheckSingle: userModuleIndex + 'GoodsReport/reportDetail',//查看单条数据
    cancelNotice: userModuleIndex + 'GoodsReport/cancelReport',//取消举报
    messageList: userModuleIndex + 'News/lists',//我的消息
    messageCheck: userModuleIndex + 'News/checkNow',//我的消息查看
    recordDelete: userModuleIndex + 'BalanceRecord/getBalanceList/BalanceDel',//我的消息删除记录
    payOrderData: userModuleIndex + 'Recharge/balanceRecharge',//我的消息去支付
    myWithdrawAccount: userModuleIndex + 'CashWithdrawal/cashWithdrawalUse',//我的提现账户
    updateWithdrawAccount: userModuleIndex + 'CashWithdrawal/saveCashWithUser',//我的提现账户保存
    checkWithdrawAccount: userModuleIndex + 'CashWithdrawal/getOneUserWithdral',//我的提现账户查看
    deleteWithdrawAccount: userModuleIndex + 'CashWithdrawal/delCashWithUser',//我的提现账户删除


    //  文章--帮助中心
    getArticleType: request + 'ArticleCategory/getArticleType', // 文章分类
    getArticleDetails: request + 'Article/getArticleDetails', // 文章详情
    getAnnDetails: request + 'Article/getAnnDetails', // 文章详情
    getArticleLatest: request + 'Article/getArticleLatest', // 最新文章
    geAarticleList: request + 'Article/getArticleByCategoryId', // 获取文章列表

    // 收货地址
    addressLists: userModuleIndex + 'UserAddress/addressLists', // 我的收获地址列表
    addAddress: userModuleIndex + 'UserAddress/addAddress', // 添加收货地址
    editAddress: userModuleIndex + 'UserAddress/editAddress', // 编辑收货地址
    addressInfo: userModuleIndex + 'UserAddress/addressInfo', // 查看收货地址
    addressDelete: userModuleIndex + 'UserAddress/addressDelete', // 删除收货地址
    setDefault: userModuleIndex + 'UserAddress/setDefault', // 设置默认收货地址
    getFreightMoney: request + 'FreightMonery/freightMoney', // 获取运费
    deliveryCalcus: request + 'Goods/deliveryCalculation',
    freightCalcus: request + 'Goods/freightCalculation',
    getExpressInfo: request + 'Goods/getExpressInfo',
    goodsTypeList: request + 'Goods/goodsTypeList',
    // 购物车数据
    cartGoodsList: request + 'GoodsCart/cartGoodsList', // 购物车商品列表
    cartNumPlus: request + 'GoodsCart/cartNumPlus', // 购物车商品数量加
    cartNumReduce: request + 'GoodsCart/cartNumReduce', // 购物车商品数量减
    cartNumModify: request + 'GoodsCart/cartNumModify', // 购物车商品数量修改
    delGoodsCart: request + 'GoodsCart/delGoodsCart', // 购物车--删除(单个)
    cartGoodsCollection: request + 'Collection/addCollection', // 购物车--移入收藏夹(单个)
    cartPackageList: request + 'GoodsPackageCart/cartPackageList', // 购物车套餐列表
    packageNumModify: request + 'GoodsPackageCart/cartNumModify', // 套餐购物车商品数量修改
    //  结算
    getAllInvoice: request + 'InvoiceType/getAllInvoice', //  获取发票信息
    //  其他
    regionLists: request + 'Region/regionLists', // 地区列表
    cityList: request + 'Region/regionLists', //  城市四级联动
    //  招商入驻
    upLoadImage: request + 'UploadImage/uploadImage', // 上传图片
    delPic: request + 'UploadImage/delPic', // 删除图片
    perfectInfo: request + 'StoreInformation/perfectInfo', // 入驻提交
    companyProgress: userModuleIndex + 'CompanyStoreAduitProgress/getStoreByUser', // 企业入驻进度
    personProgress: userModuleIndex + 'PersonStoreAduitProgress/getStoreByUser', // 个人入驻进度
    editPersonEnter: request + 'StorePerson/editPersonEnter', // 编辑基本开店信息
    getInformationAndBindClass: request + 'StoreInformation/getInformationAndBindClass', // 获取提交后店铺信息
    dispatchOption: request + 'StoreInformation/dispatchOption', // 编辑个人店铺信息（未审核或审核失败）
    saveCompanyInfo: request + 'StoreJoinCompany/saveCompanyInfo', // 编辑基本企业信息（未审核或未通过）
    getBankInfo: request + 'StoreCompanyBankInformation/getBankInfo', // 获取企业银行卡信息
    dispatchOptionType: request + 'StoreCompanyBankInformation/dispatchOptionType', // 保存企业银行卡信息
    openShopPay: userModuleIndex + 'OpenShopPay/openShop', // 入驻支付
    getPayInfo: userModuleIndex + 'StoreInformation/getPayInfo', // 入驻金额
    //  个人入驻
    setPersonEnter: request + 'StorePerson/personEnter', // 基本开店信息
    enterCardInfo: userModuleIndex + 'StorePerson/enterCardInfo', // 填写银行卡账户信息
    enterBankInfo: userModuleIndex + 'StorePerson/enterBankInfo', // 店铺经营信息
    // 企业入驻
    StoreJoinCompany: request + 'StoreJoinCompany/StoreJoinCompany', // 基本信息提交
    storeBank: request + 'StoreCompanyBankInformation/storeBank', // 填写银行卡结算
    // storeManagementInfo: request + userModuleIndex + 'StoreJoinCompany/storeManagementInfo', // 店铺经营信息
    //  storeInformation: request + userModuleIndex + 'StoreInformation/storeInformation', // 完善店铺信息
    // platformMargin: request + userModuleIndex + 'StoreInformation/platformMargin', // 平台保证金
    getShopLevel: request + 'StoreGrade/getShopLevel', // 获取店铺等级
    getStoreClasses: request + 'StoreClass/storeClasses', // 获取店铺分类
    getTopClass: request + 'GoodsClass/topClass', // 获取商品一级分类
    getNextClass: request + 'GoodsClass/getClassByPid', // 获取下级分类
    //  抢购
    getPanicGoods: request + 'Panic/getPanicGoods', // 抢购列表接口
    getInnerPanic: request + 'Panic/getInnerPanic', // 抢购内页接口
    addProblem: request + 'Panic/addProblem', // 商品咨询添加接口
    problemGoodsComment: request + 'Panic/goodsComment', // 抢购商品评论接口
    getBuyImmediately: request + 'BuyImmediately/buy', // 抢购结算页详情
    getinitiatePayment: request + 'PayPanic/initiatePayment', // 抢购发起支付

    //  商品相关
    getGoodsList: request + 'Goods/goodsList', // 商品列表
    getHotCommodities: request + 'Goods/hotCommodities', // 获取店铺商品排行榜
    getGoodsDetails: request + 'Goods/goodsDetails', // 商品详情
    promotionDetail: request + 'Promotion/promotionDetail', // 商品满减满赠
    goodsSpecs: request + 'Goods/goodSpecsByGoodsChildren', // 商品规格
    buyNow: request + 'Goods/buyNowByBuildSession', // 商品立即购买
    setCollectionGoods: request + 'Collection/collectionGoods', // 商品收藏
    addGoodToCart: request + 'GoodsCart/addGoodToCart', // 添加购物车
    getAllCommentContent: request + 'OrderComment/getAllCommentContent', // 评价商品
    getGoodsStoreClass: request + 'StoreBindClass/storeClass', // 获取店铺导航商品分类.
    GoodsPackage: request + 'GoodsPackage/package', // 优惠套餐
    GoodsCombo: request + 'GoodsCombo/matchGood', // 最佳组合
    getGoodsAttr: request + 'GoodsAttr/getGoodsAttr', // 商品属性
    GoodsAccessories: request + 'GoodsAccessories/matchGood', // 推荐配件
    goodsStoreProprietary: request + 'SelfMadeGoods/getGoodsSelfMadeGoods', // 商品自营平台搜索（品牌
    getInvoiceTypeData: request + 'InvoiceType/getInvoiceTypeData', // 发票类型
    addOrderInvoice: request + 'OrderInvoice/addOrderInvoice', // 发票id
    getFreight: request + 'FreightMonery/getFreightMoneyByEnoughToBuyImmediately', // 获取运费
    deliveryMoney: request + 'Delivery/deliveryMoney', // 获取配送费
    orderBeginFromGood: request + 'GeneratingOrder/orderBeginFromGood', // 普通商品生成订单
    orderBeginFromPanicGood: request + 'BuyImmediately/orderBeginFromPanicGood', // 抢购生成订单
    panicIndex: request + 'Panic/panicIndex', // 限时购类表
    // 我的订单
    fullOrder: userModuleIndex + 'OrderMake/fullOrder', // 所有订单
    pendingPayment: userModuleIndex + 'OrderMake/pendingPayment', // 待付款
    pendingDelivery: userModuleIndex + 'OrderMake/pendingDelivery', // 待发货
    goodsToBeReceived: userModuleIndex + 'OrderMake/goodsToBeReceived', // 待收货
    toBeEvaluated: userModuleIndex + 'OrderMake/toBeEvaluated', // 待评价
    orderRecoveryStation: userModuleIndex + 'OrderMake/orderRecoveryStation', // 订单回收站,
    orderDetails: userModuleIndex + 'OrderMake/orderDetails', // 订单详情
    OrdinaryGoods: userModuleIndex + 'OrderMake/confirmGet', // 确认收货
    generalOrderReturnDetails: userModuleIndex + 'OrderGoods/orderGoodsDetail', // 普通订单退货详情
    orderSearch: userModuleIndex + 'OrderMake/orderSearch', // 搜索订单列表
    cancelOrder: userModuleIndex + 'OrderMake/orderCancelByList', // 取消订单
    delOrder: userModuleIndex + 'OrderMake/delOrder', // 删除订单
    lookGoodsExpress: userModuleIndex + 'LogisticsQuery/lookGoodsExpress', // 查看物流-普通订单
    packageLogistics: userModuleIndex + 'LogisticsQuery/lookOrderPackageExpress', // 查看物流-套餐订单
    integralLogistics: userModuleIndex + 'LogisticsQuery/lookOrderIntegralExpress', // 查看物流-积分订单
    // 积分订单
    orderDetailByIntegral: userModuleIndex + 'IntegralOrders/orderDetailByIntegral', // 积分订单详情
    integralList: userModuleIndex + 'IntegralOrders/integralList', // 积分订单列表
    // 支付相关
    getPayResult: request + 'GetPayType/getPayResult', // 支付类型
    initiatePayment: request + 'PayOrder/initiatePayment', // 普通商品支付接口
    balancePassword: request + 'Balance/chPassword',
    verifyPassword: request + 'Balance/smsPassword',

    // 立即付款
    regularOrders: userModuleIndex + 'OrderMake/immediatePayment', // 普通订单
    setTheTrder: userModuleIndex + 'OrderPackageMake/immediatePayment', // 套餐订单
    integralToPay: userModuleIndex + 'IntegralOrders/immediatePayment', // 积分订单

    // 购物车结算
    buildOrderByCart: request + 'GeneratingOrder/buildOrderByCart', // 购物车生成订单
    BuyCartGoods: request + 'GoodsCart/userBuyCartGoods', // 购物车购买获取商品详情（结算页面
    addPackageCart: request + 'GoodsPackage/addPackageCart', // 套餐的加入购物侧
    cartPackageBuyNow: request + 'GoodsPackage/cartPackageBuyNow', // 套餐立即购买
    toSettleAccounts: request + 'GoodsPackageCart/toSettleAccounts', // 套餐购物车去结算
    cartPackageDel: request + 'GoodsPackageCart/cartPackageDel', // 套餐购物车删除
    ShopImageDetail: request + 'GoodsDetail/getGoodsDetail', // 商品图文详情
    integralOrder: request + 'GeneratingOrderIntegral/confirmExchange', // 积分生成订单
    getIntegral: userModuleIndex + 'UserData/getIntegral', // 获取当前积分
    integralPay: request + 'PayOrderByIntegral/initiatePayment', // 积分支付

    contrastResult: request + 'Contrast/contrastResult', // 对比
    nav: request + 'Nav/getNavList', // 导航
    orderBegin: request + 'OrderPackage/orderBegin', // 套餐生成订单
    orderBeginByCart: request + 'OrderPackage/orderBeginByCart', // 购物车套餐生成订单
    packagePay: request + 'PayOrderByPackage/initiatePayment', // 套餐支付
 


    // 评价
    orderComment: userModuleIndex + 'OrderMake/toBeEvaluated', // 普通订单待评价
    haveBeenEvaluated: userModuleIndex + 'OrderMake/haveBeenEvaluated', // 普通订单已评价
    commentDetail: userModuleIndex + 'OrderCommentMake/evaluateDetails', // 普通订单评价详情
    PublishComment: userModuleIndex + 'OrderCommentMake/PublishConmment', // 普通订单提交评论
    PublishConmment: userModuleIndex + 'OrderPackageCommentMake/PublishConmment', // 套餐订单提交评论
    publishIntegralConmment: userModuleIndex + 'OrderCommentMake/publishIntegralConmment', // 积分订单提交评论
    // 退换货
    uploadImageByImageComment: imgRequest + uploadImage + 'FileUpload/uploadImageByImageComment', // 退换货上传图片
    getCommentImageConfig: imgRequest + uploadImage + 'FileUpload/getCommentImageConfig', // 图片配置
    customerService: userModuleIndex + 'OrderExchangeGoods/customerService', // 普通订单换货申请
    packageOrderReturnDetails: userModuleIndex + 'OrderPackageGoods/orderGoodsDetail', // 套餐订单需退货详情
    packageOrderReturnRequest: userModuleIndex + 'OrderPackageReturnGoods/customerService', // 套餐订单退货申请
    CommonOrderApplyForAfterSale: userModuleIndex + 'CommonOrderApplyForAfterSale/customerService', // 普通订单退货退款申请
    getSAtoreAddress: userModuleIndex + 'StoreAddress/getSAtoreAddress', // 获取店铺地址
    courierNumber: userModuleIndex + 'CommonOrderApplyForAfterSale/courierNumber', // 普通订单退货退款填写快递号
    getExpressList: userModuleIndex + 'Express/getExpressList', // 获取快递
    // 分销
    distributeAllOrder: userModuleIndex + 'Distribution/order_list',//全部分销订单
    GoodscustomerService: request + 'Order/pendingPayment', // 分销待付款订单
    distributeMyTeam: userModuleIndex + 'Distribution/my_team',//我的团队
    distributeAccount: userModuleIndex + 'Distribution/presentation_details',//分销账户
    distributeUserInfo: userModuleIndex + 'Distribution/userInfo',//分销人员信息
    distributeSubmitApply: userModuleIndex + 'Distribution/apply_withdrawal',//分销账户提交申请
    withdrawDetail: userModuleIndex + 'Distribution/presentation_details',//提现明细

    // 个人中心 套餐订单
    package: {
        FullOrder: userModuleIndex + 'OrderPackageMake/orderListAll', // 全部订单
        pendingPayment: userModuleIndex + 'OrderPackageMake/pendingPayment', // 待付款
        pendingDelivery: userModuleIndex + 'OrderPackageMake/pendingDelivery', // 待发货
        goodsToBeReceived: userModuleIndex + 'OrderPackageMake/goodsToBeReceived', // 待收货
        confirmGet: userModuleIndex + 'OrderPackageMake/confirmGet', // 确认收货
        packageToBeEvaluated: userModuleIndex + 'OrderPackageMake/toBeEvaluated', // 待评价
        alreadyEvaluated: userModuleIndex + 'OrderPackageMake/alreadyEvaluated', // 已评价
        haveBeenCancelled: userModuleIndex + 'OrderPackageMake/haveBeenCancelled', // 已取消
        completed: userModuleIndex + 'OrderPackageMake/completed', // 已完成
        orderDetail: userModuleIndex + 'OrderPackageMake/orderDetail', // 套餐订单详情
        cancalPackageOrder: userModuleIndex + 'OrderPackageMake/cancelOrder', // 取消订单
        del: userModuleIndex + 'OrderPackageMake/orderDel', // 删除订单
        GoodscustomerService: userModuleIndex + 'OrderPackageReturn/GoodscustomerService' // 退货
    },
    // 个人中心 积分订单
    intergral: {
        cancelOrder: userModuleIndex + 'IntegralOrders/cancelOrder', // 积分取消订单
        delOrder: userModuleIndex + 'IntegralOrders/delOrder', // 删除积分订单
        intergralConfirmGet: request + 'OrderIntegral/confirmGet' // 积分确认收货
    },
    newRecommend: request + 'Goods/newRecommend', // 新品推
    hotSale: request + 'Goods/hotSale', // 热卖推荐
    RecommendedSale: request + 'RecommendedSale/getGoodsList', // 商品列表热卖推荐
    topSelling: request + 'Store/topSelling', // 热销排行
    hotSort: request + 'Goods/hotSort', // 热销排行
    recommendAndGroup: request + 'AddGoodsCart/addAll', // 最佳组合添加购物车
    goodsComboBuyNow: request + 'ImmediatePurchaseOfParts/goodsComboBuyNow', // 最佳组合立即购买
    partsBuyNow: request + 'GeneratingOrder/partsBuyNow', // 最佳组合生成订单
    getHotSearchList: request + 'HotSearh/getHotSearchList', // 热门搜索
    // 优惠券
    coupon: {
        couponSendList: request + 'CouponSend/couponSendList', // 优惠券列表
        CheckIsUseCoupon: request + 'CheckIsUseCoupon/check', // 检查优惠券是否可用
        couponList: request + 'OrderCouponOptions/usersCanUseCoupons', // 优惠券列表
        couponReceiveBehavior: request + 'CouponReceive/couponReceiveBehavior' // 领取优惠券
    },
    // 咨询
    consult: {
        goodsConsultation: request + 'GoodsConsultation/consultationData', // 咨询列表
        userCommitProblem: request + 'GoodsConsultation/userCommitProblem' // 添加咨询
    }
}

export default config
