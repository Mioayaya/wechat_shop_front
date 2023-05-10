import request from "../server";

// 查询
export const shopSearch = (data) => {
  return request({
    url: '/api/shop/search',
    method: 'POST',
    data
  })
}

// 获取该店铺的所有商品
export const shopGetAllCommodities = (shopId) => {
  return request({
    url: `/api/shop/getcommodities?shopId=${shopId}`,
    method: 'get'
  })
}

// 获取该店铺所有订单
export const shopGetAllOrders = (data) => {
  return request({
    url: '/api/shop/orders',
    method: 'POST',
    data
  })
}

// 设置商品发货
export const shopFahuo = (data) => {
  return request({
    url: '/api/shop/fahuo',
    method: 'POST',
    data
  })
}