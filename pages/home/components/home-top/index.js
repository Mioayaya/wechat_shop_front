const app = getApp();

Component({
  properties: {

  },
  data: {    
    userData: {
    }
  }, 
  methods: {
    tapSearch() {      
      wx.navigateTo({
        url: '/pages/search/index'
      })
    },
    tapMine() {      
      wx.switchTab({
        url: '/pages/mine/index'
      })
    }
  }
})

