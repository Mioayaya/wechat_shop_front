import request from "../server";

// 创建订单
export const orderCreate = (data) => {
  return request({
    url: '/api/order/create',
    method: 'POST',
    data
  })
}