import { userLogin } from "../../server/api/user";

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userLogin: {
      email: '',
      password: ''
    }
  },
  bindKeyInputEmail(e) {    
    this.setData({
      ['userLogin.email']: e.detail.value
    })
  },
  bindKeyInputPassword(e) {
    this.setData({
      ['userLogin.password']: e.detail.value
    })
  },
  formSubmit(e) {    
    if(!this.data.userLogin.email) {
      wx.showToast({
        title: '请输入邮箱',
        icon: 'error',
        duration: 2000
      })
    }else if(!this.data.userLogin.password) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'error',
        duration: 2000
      })
    }else {
      try {
        wx.showLoading({title:'登录中···'});
        userLogin(this.data.userLogin).then(res => {
          wx.hideLoading();
          const { userData,msg } = res.data;          
          if(userData) {
            app.globalData.userData = res.data.userData;
            app.globalData.isLogin = true;
            wx.setStorage({
              key: 'key',
              data: {
                isLogin: true,
                userData: res.data.userData,
              },
            })
            wx.switchTab({url: '/pages/mine/index'});
          }else {
            wx.showToast({
              title: msg,
              icon: 'error',
              duration: 2000
            })
          }
        });
      } catch(err) {
        wx.hideLoading();
        wx.showModal(err);
      }
    }
  },
  bindindTapToRegister() {
    wx.redirectTo({url:'/pages/register/index'});
  }
})