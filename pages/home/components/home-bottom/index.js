import { shopSearch } from "../../../../server/api/shop"
import { userLogin } from "../../../../server/api/user"

/**
 * index
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    testMethods() {
      shopSearch({
        id: 1000000
      }).then(res => {
        console.log(res);
      })
    }
  }
})

