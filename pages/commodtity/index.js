import { commodityUserHas, commodityUserShouCang } from "../../server/api/commodityuser";
import { historyBrowse } from "../../server/api/history";
import { orderCreate } from "../../server/api/order";
import { shopSearch } from "../../server/api/shop";

const app = getApp();

Page({
  data: {
    id: '',
    commodtityData: {},
    shopData: {},
    order: false,
    shoucang: false,
    text: '不满足包邮条件(校内免费配送)的订单，江浙沪地区10元运费，其他地区15元。可配送区域为中国大陆地区(除特殊偏远地区),收获地址在此之外的地区请勿下单',
  },

  onLoad: function (options) {
    let iData = {};  
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', data => {      
      this.setData({ commodtityData: data });
      iData = data.data;
    })
    const data = {
      uid: app.globalData.userData.uid,
      commodityId: iData.commodity_id
    }
    // console.log(data);
    historyBrowse(data).then(res => {      
    })

    shopSearch({id:iData.shop_id}).then(res => {      
      this.setData({shopData:res.data.shop})
    })

    commodityUserHas(data).then(res => {      
      this.setData({
        shoucang: res.data.shoucang?true:false
      })
    })

  },
  bindShop() {
    wx.navigateTo({
      url: '/pages/shop/index',
      success: res => {
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: this.data.shopData.shop_id })
      }
    })
  },
  bindChat() {
    wx.navigateTo({
      url: '/pages/chat/index',
      success: res => {
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: this.data.shopData.shop_id })
      }
    })
  },
  bindBuy() {
    this.setData({
      order: true
    })    
  },
  bindClose() {
    this.setData({
      order: false
    })    
  },
  bindShouCang() {
    const shoucang = !this.data.shoucang;
    const data = {
      uid: app.globalData.userData.uid,
      commodityId: this.data.commodtityData.data.commodity_id,
      shoucang
    }
    commodityUserShouCang(data).then(res => {
      this.setData({
        shoucang
      })
      wx.showToast({
        title: res.data.msg,
        icon: 'success',
        duration: 2000
      })
    })
  },
  bindOrder() {    
    const data = {
      commodityId: this.data.commodtityData.data.commodity_id,
      uid: app.globalData.userData.uid,
      price: this.data.commodtityData.data.commodity_price,
      shopId: this.data.commodtityData.data.shop_id
    }

    orderCreate(data).then(res => {
      const { flag,msg } = res.data;      
      if(flag==='true') {
        this.setData({
          order: false
        })
        wx.showToast({
          title: msg,
          icon: 'success',
          duration: 2000
        })        
      }else {
        wx.showToast({
          title: msg,
          icon: 'error',
          duration: 2000
        })
      }
    })
  }
})