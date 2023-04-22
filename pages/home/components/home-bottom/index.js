import { shopSearch } from "../../../../server/api/shop"
import { userLogin } from "../../../../server/api/user"

Component({  
  properties: {
    commodtityL: {
      type: Array
    },
    commodtityR: {
      type: Array
    }
  },  
  data: {    
  },
  methods: {
    touchCommodtity(e) {
      wx.navigateTo({
        url: `/pages/commodtity/index`,
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: e.currentTarget.dataset.item })
        }
      })
    }
  }
})

