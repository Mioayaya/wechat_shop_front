import { userRecharge } from "../../server/api/user";

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    recharge: {
      uid: '',
      money: 0
    }
  },
  onLoad: function(options) {
    this.setData({
      ['recharge.uid']: app.globalData.userData.uid
    })
  },
  bindKeyInputMoney(e) {
    let money = Number(e.detail.value);
    if(!money) {
      money = 0;
    }
    this.setData({
      ['recharge.money']: money
    })
  },
  formSubmit(e) {
    userRecharge(this.data.recharge).then(res => {
      wx.showToast({
        title: res.data.msg,
        icon: 'success',
        duration: 2000
      })      
    })
  },
  bindBack() {            
    wx.switchTab({
      url: '/pages/mine/index'
    })
  }
})