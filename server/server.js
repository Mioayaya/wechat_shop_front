const app = getApp();

function request({
  url,
  method,
  data={},
  header={}
}) {
  return new Promise((resolve,reject) => {    
    wx.request({
      url: app.globalData.baseUrl+url,
      method,
      data: {...data},
      header: {...header},
      success(res) {        
        resolve(res);
      },
      fail(err) {
        reject(err)
      }
    })
  });
}

export default request