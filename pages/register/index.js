import { userRegister } from "../../server/api/user"

/**
 * index.js
*/
Page({
  data: {
    userData: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
    }
  },
  bindKeyInputName(e) {
    this.setData({
      ['userData.name']: e.detail.value
    })
  }, 
  bindKeyInputEmail(e) {
    this.setData({
      ['userData.email']: e.detail.value
    })
  },
  bindKeyInputPassword(e) {
    this.setData({
      ['userData.password']: e.detail.value
    })
  },
  bindKeyInputRePassword(e) {
    this.setData({
      ['userData.rePassword']: e.detail.value
    })
  },
  formSubmit(e) {
    console.log(this.data.userData);
    if(!this.data.userData.name) {
      wx.showToast({title: '昵称不能为空~',icon: 'error',duration: 2000});
    } else if(!this.data.userData.email) {
      wx.showToast({title: '邮箱不能为空~',icon: 'error',duration: 2000});
    } else if(!this.data.userData.password) {
      wx.showToast({title: '密码不能为空~',icon: 'error',duration: 2000});
    } else if(this.data.userData.password !== this.data.userData.rePassword) {
      wx.showToast({title: '两次密码不一样--',icon: 'error',duration: 2000});
    } else {
      try {
        wx.showLoading({title:'加载中···'});
        userRegister(this.data.userData).then(res => {
          wx.hideLoading();
          const { isSuccess,msg } = res.data;          
          if(isSuccess) {
            wx.showToast({title:msg,icon:'success',duration:2000});
            wx.redirectTo({url:'/pages/login/index'});
          }else {
            wx.showToast({title:msg,icon:'error',duration:2000});
          }
        })
      } catch(err) {
        console.log(err);
        wx.hideLoading();
        wx.showModal(err);
      }
    }
  },
  bindindTapToRegister() {    
    wx.redirectTo({url:'/pages/login/index'});
  }
})