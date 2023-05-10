import request from "../server";

// 登录
export const userLogin = (data) => {
  return request({
    url: '/api/user/login',    
    method: 'POST',
    data
  })
}

// 注册
export const userRegister = (data) => {
  return request({
    url: '/api/user/register',
    method: 'POST',
    data
  })
}

// 获取用户信息
export const userInfor = (uid) => {
  return request({
    url: `/api/user/infor?uid=${uid}`,
    method: 'get'
  })
}

// 充值
export const userRecharge = (data) => {
  return request({
    url: '/api/user/recharge',
    method: 'POST',
    data
  })
}

// 根据id返回用户信息
export const userSearchById = (uid) => {
  return request({
    url: `/api/user/search?uid=${uid}`,
    method: 'GET'
  })
}