import { commoditySearchById } from "../../server/api/commodities";
import { historyGetAll } from "../../server/api/history";

const app = getApp();

Page({
  data: {
    historyList: {
    }
  },
  onLoad: function (options) {    
    historyGetAll(app.globalData.userData.uid).then(res => {      
      this.setData({
        historyList: res.data.historyList
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