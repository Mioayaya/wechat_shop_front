import { chatGetChatList } from "../../server/api/chats";
import { shopGetAllCommodities, shopGetAllOrders } from "../../server/api/shop";

const app = getApp();

Page({
  data: {
    tap: [{
        key: "tap_1",
        name: '订单一览'
      }, {
        key: 'tap_2',
        name: '商品一览'
      }, {
        key: 'tap_3',
        name: '添加商品'
      }, {
        key: 'tap_4',
        name: '聊天列表'
      }
    ],
    currentTap: "tap_1",
    orderList: [],
    commodityListL: [],
    commodityListR: [],
    chatList: [],
  },
  onLoad: function (options) {    
    const data = {
      shopId: app.globalData.userData.shop_id
    }
    shopGetAllOrders(data).then(res => {      
      this.setData({
        orderList: res.data.orderList
      })
    })
  },
  bindTap(e) {
    const key = e.currentTarget.dataset.key;
    if(key === 'tap_2') {
      shopGetAllCommodities(app.globalData.userData.shop_id).then(res => {
        this.setData({
          commodityListL: res.data.commoditiesL, 
          commodityListR: res.data.commoditiesR,
          currentTap: key
        })
      })
    }else if(key === 'tap_4') {      
      chatGetChatList({uid:app.globalData.userData.shop_id}).then(res => {          
        this.setData({
          chatList: res.data.chatList,
          currentTap: key
        })
      })
    }else {
      this.setData({
        currentTap: key
      })
    }
  },
  bindBack() {
    wx.navigateBack({
      delta: this.properties.delta
    })    
  }
})