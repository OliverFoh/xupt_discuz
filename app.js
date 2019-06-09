App({
  globalData:{
    baikeId:'',
    phoneHeight:'',
    isRegister:false
  },
  onLaunch: function () {
    var that = this
    wx.getSystemInfo({           //获取机型高度
      success: function (res) {
        //console.log(res.windowHeight)
            that.globalData.phoneHeight=res.windowHeight
      }
    })
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
      wx.getUserInfo,
      wx.requestPayment)
    let clientID ='ae509f5119f4d6e79bf1'
    wx.BaaS.init(clientID)
    // wx.BaaS.auth.register({ username: 'ifanrx', password: 'ifanrx123' }).then(user => {
    //   console.log(user)
    // }).catch(err => {
    //   // HError 对象
    // })
    
    // wx.BaaS.auth.login({ username: 'ifanrx', password: 'ifanrx123' }).then(user => {
    //   //console.log(user)
    // }).catch(err => {
    //   // HError
    // })

    
    
    
  },
  
})
