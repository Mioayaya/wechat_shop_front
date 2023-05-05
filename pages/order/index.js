import { orderFindById } from "../../server/api/order";
import { commoditySearchById } from "../../server/api/commodities";

const app = getApp();

Page({
  data: {
    orderList: [],
    hh: 'test'
  },
  onLoad: function (options) {
    orderFindById(app.globalData.userData.uid).then(res => {      
      this.setData({
        orderList: res.data.result
      })
    })
  },
  bindCommodity(e) {
    const commodityid = e.currentTarget.dataset.commodityid;    
    commoditySearchById(commodityid).then(res => {      
      const commodity = res.data.commodity;
      wx.navigateTo({
        url: `/pages/commodtity/index`,
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: commodity })
        }
      })
    })
  }
})