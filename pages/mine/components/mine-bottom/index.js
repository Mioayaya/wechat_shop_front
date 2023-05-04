Component({
  properties: {

  },
  data: {
    collectList: [
      {
        name: '收藏',
        iconSrc: '/imges/icons/collect.png',
        path: '',
        key: 'collect_1'
      },
      {
        name: '订阅店铺',
        iconSrc: '/imges/icons/dingyue.png',
        path: '',
        key: 'collect_2'
      },
      {
        name: '足迹',
        iconSrc: '/imges/icons/history.png',
        path: '',
        key: 'collect_3'
      },
    ],
    myOrder: [
      {
        name: '待付款',
        iconSrc: '/imges/icons/daifukuan.png',
        path: '',
        key: 'myOrder_1'
      },
      {
        name: '待发货',
        iconSrc: '/imges/icons/daifahuo.png',
        path: '',
        key: 'myOrder_2'
      },
      {
        name: '待收货',
        iconSrc: '/imges/icons/daishouhuo.png',
        path: '',
        key: 'myOrder_3'
      },
      {
        name: '待评价',
        iconSrc: '/imges/icons/daipingjia.png',
        path: '',
        key: 'myOrder_4'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindIcon(e) {
      const key = e.currentTarget.dataset.key;      
      if(key === 'collect_3') {
        wx.navigateTo({
          url: '/pages/history/index'
        })
      }
    }
  }
})

