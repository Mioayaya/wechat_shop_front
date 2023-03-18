const app = getApp();

Component({
  properties: {

  },
  data: {
    height: app.globalData.height,
    userData: {
    }
  }, 
  methods: {
    tapSearch() {
      console.log('hh');
      wx.redirectTo({
        url: '/pages/search/index'
      })
    }
  }
})

