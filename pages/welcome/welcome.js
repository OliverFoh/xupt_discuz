var app=getApp()
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avatarUrl:'',
    showLoading:false,
  },
  onLoad() {

  },
  getUser:function(e){
    let query = new wx.BaaS.Query()
    query.compare('openid', '=', wx.getStorageSync('openid'))
    let Product = new wx.BaaS.TableObject('user')
    Product.setQuery(query).find().then(res => {
      //console.log(res)
      if (res.data.objects.length != 0) {         //当查询到该openid对应的用户已经登记过信息时
        wx.setStorageSync('selfInfo', res.data.objects[0])
        app.globalData.isRegister = true
      }
      wx.switchTab({
        url: '/pages/index/index',
      })
      // success
    }, err => {
      // err
    })

  },
  bindGetUserInfo(e) {
    this.setData({
      avatarUrl: e.detail.userInfo.avatarUrl,
      showLoading: true,
    })
    wx.setStorageSync('avatarUrl', e.detail.userInfo.avatarUrl)
    wx.setStorageSync('nickName', e.detail.userInfo.nickName)
    wx.setStorageSync('province', e.detail.userInfo.province)
    wx.setStorageSync('city', e.detail.userInfo.city)
    if(!wx.getStorageSync('openid')){         //当本地缓存中没有用户openid数据时获取用户openid
      wx.BaaS.auth.loginWithWechat().then(user => {
        wx.setStorageSync('openid', user.openid)
        this.getUser()
        console.log(user)
        
        // 登录成功
      }, err => {
        // 登录失败
      })

    }
    else{
      this.getUser()
    }
    
  }
})