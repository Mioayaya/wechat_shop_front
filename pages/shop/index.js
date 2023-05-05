import { shopGetAllCommodities } from "../../server/api/shop"

Page({
  data: {
    shopData: {},
    shopId: 0,
    commoditiesL: [],
    commoditiesR: [],
  },
  onLoad: function (options) {       
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', data => {      
      this.setData({
        shopId: data.data
      })
    })

    shopGetAllCommodities(this.data.shopId).then(res => {      
      this.setData({
        shopData: res.data.shopData,
        commoditiesL: res.data.commoditiesL,
        commoditiesR: res.data.commoditiesR
      })
    }) 
  },  
  bindBack() {
    wx.navigateBack({})
  },
  touchCommodtity(e) {
    wx.navigateTo({
      url: `/pages/commodtity/index`,
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: e.currentTarget.dataset.item })
      }
    })
  }
})