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
      console.log(this.data.userData);
    },
    bindRecharge() {
      wx.redirectTo({
        url: `/pages/recharge/index`
      })
    }
  }
})

