Component({  
  properties: {
    userData: {
      type: Object
    }
  },
  data: {

  },
  methods: {    
    show() {      
    },
    bindRecharge() {
      wx.redirectTo({
        url: `/pages/recharge/index`
      })
    },
    bindMineShop() {
      wx.navigateTo({
        url: '/pages/mine-shop/index'
      })
    }
  }
})

