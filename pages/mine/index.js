const app = getApp();

Page({
  data: {

  },
  onLoad: function(options) {
    if(!app.globalData.isLogin) {      
      wx.redirectTo({
        url: '/pages/login/index'
      })
    }
  },

})
