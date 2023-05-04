import { historyBrowse } from "../../server/api/history";
import { shopSearch } from "../../server/api/shop";

const app = getApp();

Page({
  data: {
    id: '',
    commodtityData: {},
    shopData: {},
    text: '不满足包邮条件(校内免费配送)的订单，江浙沪地区10元运费，其他地区15元。可配送区域为中国大陆地区(除特殊偏远地区),收获地址在此之外的地区请勿下单',
  },

  onLoad: function (options) {
    let iData = {};  
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', data => {      
      this.setData({ commodtityData: data });
      iData = data.data;
    })
    const data = {
      uid: app.globalData.userData.uid,
      commodityId: iData.commodity_id
    }
    // console.log(data);
    historyBrowse(data).then(res => {      
    })

    shopSearch({id:iData.shop_id}).then(res => {      
      this.setData({shopData:res.data.shop})
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindShop() {
    wx.navigateTo({
      url: '/pages/shop/index'
    })
  }
})