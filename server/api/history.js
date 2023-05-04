import request from "../server";

// 添加历史记录
export const historyBrowse = (data) => {
  return request({
    url: '/api/history/browse',
    method: 'POST',
    data
  })
}

// 查询当前用户的历史记录
export const historyGetAll = (uid) => {
  return request({
    url: `/api/history/getall?uid=${uid}`,
    method: 'GET'
  })
}