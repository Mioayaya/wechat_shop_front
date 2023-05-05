import request from "../server";

// 获取首页商品列表
export const commodityHomeGet = () => {
  return request({
    url: '/api/commodities/home',
    method: 'GET'
  })
}

export const commoditySearchById = (commodityid) => {
  return request({
    url: `/api/commodities/search?commodityid=${commodityid}`,
    method: 'GET'
  })
}

export const commoditySearchByName = (Name) => {
  return request({
    url: `/api/commodities/searchbyname?commodityName=${Name}`,
    method: 'GET'
  })
}