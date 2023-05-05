import { commoditySearchByName } from "../../server/api/commodities"
import { commoditySearchById } from "../../server/api/commodities";

Page({
  data: {
    search: '',
    searchList: [],
    searchRes: false,
  },
  bindSearch() {
    commoditySearchByName(this.data.search).then(res => {
      this.setData({
        searchList: res.data.commodities,
        searchRes: true
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