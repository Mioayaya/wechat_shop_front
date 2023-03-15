const app = getApp();

Page({
  data: {

  },
  onLoad: function(options) {
    if(!app.globalData.isLogin) {
      console.log('未登录');
      wx.redirectTo({
        url: '/pages/login/index'
      })
    }
  },

})
