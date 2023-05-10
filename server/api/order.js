import request from "../server";

// 创建订单
export const orderCreate = (data) => {
  return request({
    url: '/api/order/create',
    method: 'POST',
    data
  })
}

// 根据id查询总订单
export const orderFindById = (uid) => {
  return request({
    url: `/api/order/find?uid=${uid}`,
    method: 'GET',
  })
}

// 确认收货
export const orderShouHuo = (data) => {
  return request({
    url: '/api/order/shouhuo',
    method: 'POST',
    data
  })
}