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
      wx.redirectTo({
        url: '/pages/search/index'
      })
    }
  }
})

