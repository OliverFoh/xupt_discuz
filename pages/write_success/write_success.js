Page({
  data: {
    buttons: [{
      type: 'balanced',
      block: true,
      text: '继续提问',
    },
    {
      type: 'light',
      block: true,
      text: '返回首页',
    },
    ],
  },
  onClick(e) {
    console.log(e)
    const { index } = e.detail
    if(index===0){
      wx.navigateBack({
        
      })
    }
    else{
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  },
})