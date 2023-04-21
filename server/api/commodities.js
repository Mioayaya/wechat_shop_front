import request from "../server";

// 获取首页商品列表
export const commodityHomeGet = () => {
  return request({
    url: '/api/commodities/home',
    method: 'GET'
  })
}