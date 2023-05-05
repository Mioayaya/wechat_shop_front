import request from "../server";

// 查看用户是否收藏过了
export const commodityUserHas = (data) => {
  return request({
    url: '/api/commodityusers/has',
    method: 'POST',
    data
  })
}

// 收藏操作
export const commodityUserShouCang = (data) => {
  return request({
    url: '/api/commodityusers/shoucang',
    method: 'POST',
    data
  })
}

// 获取该用户的收藏列表
export const commodityUserGetCollect = (uid) => {
  return request({
    url: `/api/commodityusers/getcollect?uid=${uid}`,
    method: 'GET'
  })
}