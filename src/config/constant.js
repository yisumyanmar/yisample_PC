export const constant = {
    mainTitle: "ShopsN",
    copyright: "©20016-2018 ShopsN 版权所有 未授权不得商用",
    tel: "400-800-8888", // 官网联系电话
    // URL: "http://b2b2c.shopsn.cn/#/", // PC端最终地址
    // agentURL: "http://agent.shopsn.cn/", // 商户中心地址
    // s_url: "http://b2b2c.shopsn.cn/", // 店铺首页导航地址
    URL: "http://demo.shopsn.cn/#/", // PC端最终地址
    agentURL: "http://agent.shopsn.cn/", // 商户中心地址
    s_url: "http://demo.shopsn.cn/", // 店铺首页导航地址
    webSiteName: "亿速网络",
    webKeyWord: "亿速测试",
    // webComContent:
    //     "-" + sessionStorage.titleKey + "-" + sessionStorage.contentKey + " ",
    webComContent:sessionStorage.titleKey,
    storeName: "我的自营",
    web_record: sessionStorage.recordKey,
    web_phone: sessionStorage.phoneKey,
    web_licence: sessionStorage.licenceKey,
    web_copyright: sessionStorage.copyrightKey,
    key_word:sessionStorage.keyWord
};

export const Status = {
    "-1": "取消订单",
    "0": "立即付款",
    "1": "已支付",
    "2": "发货中",
    "3": "已发货",
    "4": "已收货",
    "5": "退货审核中",
    "6": "审核失败",
    "7": "审核成功",
    "8": "退款中",
    "9": "退款成功"
};
