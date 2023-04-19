import request from "../server";

// 查询
export const shopSearch = (data) => {
  return request({
    url: '/api/shop/search',
    method: 'POST',
    data
  })
}

