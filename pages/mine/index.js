import { userInfor } from "../../server/api/user";

const app = getApp();

Page({
  data: {
    userData: {}
  },
  onLoad: function(options) {
    if(!app.globalData.isLogin) {      
      wx.redirectTo({
        url: '/pages/login/index'
      })
    }else {
      const uid = app.globalData.userData.uid;      
      this.getUserData(uid);
    }
  },
  onShow: function() {    
  },
  getUserData(uid) {
    userInfor(uid).then(res => {
      this.setData({
        userData: res.data.userData
      })      
    }).catch(err => console.log(err))
  }
})
