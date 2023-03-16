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