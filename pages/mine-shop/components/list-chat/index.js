const app =getApp();

Component({
  properties: {
    chatList: {
      type: Array
    }
  },
  data: {
    uid: app.globalData.userData.shop_id
  },
  methods: {
    bindChat(e) {
      const shop_id = e.currentTarget.dataset.uid === app.globalData.userData.shop_id ? 
        e.currentTarget.dataset.youid : 
        e.currentTarget.dataset.uid;
      wx.navigateTo({
        url: '/pages/chat-shop/index',
        success: res => {
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: shop_id })
        }
      })
    }
  }
})

