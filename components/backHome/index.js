
/**
 * index
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    delta: '',
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindBack() {
      wx.navigateBack({
        delta: this.properties.delta
      })
      // wx.switchTab({
      //   url: this.properties.backUrl
      // })
    }
  }
})

