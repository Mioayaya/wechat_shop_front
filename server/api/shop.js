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