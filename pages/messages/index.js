import { chatGetChatList } from "../../server/api/chats";

const app = getApp();

Page({
  data: {
    chatList: [],    
  },
  onLoad: function(option) {
    chatGetChatList({uid:app.globalData.userData.uid}).then(res => {          
      this.setData({
        chatList: res.data.chatList
      })
    })
  },
  bindChat(e) {
    const shop_id = e.currentTarget.dataset.uid === app.globalData.userData.uid ? 
      e.currentTarget.dataset.youid : 
      e.currentTarget.dataset.uid;
    wx.navigateTo({
      url: '/pages/chat/index',
      success: res => {
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: shop_id })
      }
    })
  }
})
