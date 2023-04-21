// index.js

import { commodityHomeGet } from "../../server/api/commodities";

// 获取小程序实例
const app = getApp();

Page({
  data: {
    commodtityL: [],
    commodtityR: []
  },
  // 页面创建时执行
  onLoad: function(options) {
  },
  // 页面出现在前台时执行
  onShow: function() {
    // 慎重做逻辑处理
    wx.getStorage({
      key: 'key',
      success (res) {
        if(res.data.isLogin) {
          app.globalData.isLogin = res.data.isLogin;
          app.globalData.userData = res.data.userData;
        }
      }
    })
    this.setData({ commodtityL: app.globalData.homeCommodtities.commodtityL});
    this.setData({ commodtityR: app.globalData.homeCommodtities.commodtityR});
  },
  // 页面首次渲染完毕时执行
  onReady: function() {
    this.getHomeCommodities();
  },
  // 页面从前台变为后台时执行
  onHide: function() {
  },
  // 页面销毁时执行
  onUnload: function() {
  },
  getHomeCommodities() {
    commodityHomeGet().then(res => {      
      app.globalData.homeCommodtities.commodtityL = res.data.commoditiesL;
      app.globalData.homeCommodtities.commodtityR = res.data.commoditiesR;
      this.setData({ commodtityL: res.data.commoditiesL});
      this.setData({ commodtityR: res.data.commoditiesR});
    })
  }
})

