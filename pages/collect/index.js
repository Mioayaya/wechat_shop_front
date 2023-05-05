import { commodityUserGetCollect } from "../../server/api/commodityuser"

/**
 * index.js
*/
const app = getApp();

Page({
  data: {
    collectList: []
  },
  onLoad: function (options) {
    commodityUserGetCollect(app.globalData.userData.uid).then(res => {      
      this.setData({
        collectList: res.data.collectList
      })
    })
  },
})