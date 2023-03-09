// index.js

// 获取小程序实例
const app = getApp();

Page({
  data: {
    msg: '鸡你太美',
    count: 0,
    songs: [{
      ly: '鸡你'
    },{
      ly: '实在是太美'
    },{
      ly: 'oh baby'
    },{
      ly: '再看一眼就会融化'
    }]
  },
  // 页面创建时执行
  onLoad: function(options) {
    // 在此初始化
  },
  // 页面出现在前台时执行
  onShow: function() {
    // 慎重做逻辑处理
    console.log(app.globalData.CXKname);
    console.log(this.data.msg);
  },
  // 页面首次渲染完毕时执行
  onReady: function() {
    setTimeout( _=> {
      this.setData({
        msg: '鸡你，实在是太美'
      })
    },1000)
  },
  // 页面从前台变为后台时执行
  onHide: function() {
  },
  // 页面销毁时执行
  onUnload: function() {
  }
})

