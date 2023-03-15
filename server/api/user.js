import request from "../server";

export const userLogin = (data) => {
  return request({
    url: '/api/user/login',    
    method: 'POST',
    data,
  })
}
