Component({  
  properties: {
  },  
  data: {
    fileList: [],
    imageSrc: [],
    contentList: [],
    detailList: []
  },
  methods: {
    chooseImage() {
      var that = this;
      wx.chooseImage({
        count: 1, // 最多可以选择的图片张数
        sizeType: ['original', 'compressed'], // 图片的尺寸类型
        sourceType: ['album', 'camera'], // 图片的来源
        success: function (res) {
          // 选择图片成功后的操作
          var tempFilePaths = res.tempFilePaths;
          that.setData({
            imageSrc: tempFilePaths[0]
          });
        }
      })
    },

    chooseContentImage() {
      var that = this;
      wx.chooseImage({
        count: 5, // 最多可以选择的图片张数
        sizeType: ['original', 'compressed'], // 图片的尺寸类型
        sourceType: ['album', 'camera'], // 图片的来源
        success: function (res) {
          // 选择图片成功后的操作
          var tempFilePaths = res.tempFilePaths;          
          that.setData({
            contentList: tempFilePaths
          });
        }
      })
    },

    chooseDetailImage() {
      var that = this;
      wx.chooseImage({
        count: 5, // 最多可以选择的图片张数
        sizeType: ['original', 'compressed'], // 图片的尺寸类型
        sourceType: ['album', 'camera'], // 图片的来源
        success: function (res) {
          // 选择图片成功后的操作
          var tempFilePaths = res.tempFilePaths;          
          that.setData({
            detailList: tempFilePaths
          });
        }
      })
    },
    submitForm() {
      wx.showToast({
        title:'提交成功'
      })
    },
    uploadImage() {
      var that = this;
      var imageSrc = that.data.imageSrc;      
      if (imageSrc === '') {
        wx.showToast({
          title: '请先选择图片',
          icon: 'none'
        });
        return;
      }
      wx.showToast({
        title: '上传成功',
      })
      // wx.uploadFile({
      //   // url: 'http://127.0.0.1:5000/api/img/upload',
      //   url: '',
      //   filePath: imageSrc,
      //   name: 'image',
      //   success: function (res) {
      //     // 上传成功后的操作
      //     console.log(res.data);
      //   }
      // })
    }
  }
})

