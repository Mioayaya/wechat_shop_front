import { userLogin } from "../../server/api/user";

/**
 * index.js
*/
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
    console.log(this.data.userLogin);
    if(!this.data.userLogin.email) {
      wx.showModal({content: '请输入邮箱'});
    }else if(!this.data.userLogin.password) {
      wx.showModal({content: '密码不能为空'});
    }else {
      userLogin(this.data.userLogin)
    }
  }
})