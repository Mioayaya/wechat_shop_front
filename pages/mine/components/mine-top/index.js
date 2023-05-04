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
  }
})

