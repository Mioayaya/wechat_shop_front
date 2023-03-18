// app.js
// App构造函数执行并传入1个对象

App({
  onLaunch(options) {    
    wx.getSystemInfo({
      success: res => {
        this.globalData.height = res.statusBarHeight
      }
    })
  },
  onShow(options) {
  },
  onHide() {
  },
  onerror(err) {
    console.log(err);
  },
  // 全局数据
  globalData: {
    baseUrl: 'http://127.0.0.1:5000',
    isLogin: false,
    userData: {    
    },
    CXKname: '蔡徐坤',
    height: 0
  }
})
