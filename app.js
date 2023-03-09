// app.js
// App构造函数执行并传入1个对象

App({
  onLaunch(options) {
    console.log('小程序初始化-Launch',options);
  },
  onShow(options) {
    console.log('小程序初展示-show',options);
  },
  onHide() {
  },
  onerror(err) {
    console.log(err);
  },
  // 全局数据
  globalData: {
    CXKname: '蔡徐坤'
  }
})
