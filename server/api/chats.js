import request from "../server"

// 发送消息
export const chatsSend = (data) => {
  return request({
    url: '/api/chat/send',
    method: 'POST',
    data
  })
}

// 返回所有聊天信息
export const chatsGetAll = (data) => {
  return request({
    url: '/api/chat/get',
    method: 'POST',
    data
  })
}

export const chatGetChatList = (data) => {
  return request({
    url: '/api/chat/chatList',
    method: 'POST',
    data
  })
}