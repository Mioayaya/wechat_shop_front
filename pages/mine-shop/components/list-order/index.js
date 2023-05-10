import { commoditySearchById } from "../../../../server/api/commodities";
import { shopFahuo } from "../../../../server/api/shop";

const app = getApp();

Component({  
  properties: {
    orderList: {
      type: Array
    }
  },
  data: {
  },
  methods: {
    bindCommodity(e) {
      const commodityid = e.currentTarget.dataset.commodityid;          
      commoditySearchById(commodityid).then(res => {      
        const commodity = res.data.commodity;
        wx.navigateTo({
          url: `/pages/commodtity/index`,
          success: function(res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage', { data: commodity })
          }
        })
      })
    },
    bindFaHuo(e) {
      const orderID = e.currentTarget.dataset.orderid;
      const data = {
        orderID,
        shopId: app.globalData.userData.shop_id
      }      
      shopFahuo(data).then(res => {
        wx.showToast({
          title: '发货成功!',
          icon: 'success',
          duration: 2000
        })    
        this.setData({
          orderList: res.data.orderList
        })
      })
      
    }
  }
})

