import { chatsGetAll } from "../../server/api/chats"
import { shopSearch } from "../../server/api/shop"

const app = getApp();

Page({
  data: {
    chatId: 0,
    chatData: {},
    messages: ''
  },
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', data => {      
      this.setData({
        chatId: data.data
      })
    })

    shopSearch({id:this.data.chatId}).then(res => {      
      this.setData({
        chatData: res.data.shop
      })
    })
    const data = {
      youId: this.data.chatId,
      uid: app.globalData.userData.uid
    }
    chatsGetAll(data).then(res => {
      console.log(res);
    })
  },
})