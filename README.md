# 校园团购小程序

# icon色系
- 未选中： #84888b
- 选中：23a0fd

# 商品列表展示
- widthFix 宽度固定的瀑布流
- width: (100-2*3)/2 vw

# 遇到问题

## 1.在onLoad中 setData 无效
- this指向问题，this并没有指向page，回调函数使用箭头函数即可