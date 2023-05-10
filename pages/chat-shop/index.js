import { chatsGetAll, chatsSend } from "../../server/api/chats"
import { shopSearch } from "../../server/api/shop"
import { userSearchById } from "../../server/api/user";

const app = getApp();

Page({
  data: {
    chatId: 0,
    chatData: {},
    chatList: [],
    messages: '',
    shopData: {}
  },
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', data => {      
      this.setData({
        chatId: data.data
      })
    })

    userSearchById(this.data.chatId).then(res => {
      this.setData({
        chatData: res.data.userData
      })
    })

    shopSearch({id:app.globalData.userData.shop_id}).then(res => {      
      this.setData({
        shopData: res.data.shop
      })
    })

    const data = {  
      youId: this.data.chatId,
      uid: app.globalData.userData.shop_id
    }
    chatsGetAll(data).then(res => {
      console.log(res);
      this.setData({
        chatList: res.data.chatList
      })
    })
  },
  bindSendMessage() {    
    const data = {
      youId: this.data.chatId,
      uid: app.globalData.userData.shop_id,
      chats: this.data.messages,
      youAvatar: this.data.chatData.avatar,
      uidAvatar: this.data.shopData.shop_avatar,
    } 
    if(this.data.messages) {
      chatsSend(data).then(res => {
        const data = {  
          youId: this.data.chatId,
          uid: app.globalData.userData.shop_id
        }
        chatsGetAll(data).then(res => {
          console.log(res);
          this.setData({
            messages: '',
            chatList: res.data.chatList
          })
        })
      })
    }
  }
})