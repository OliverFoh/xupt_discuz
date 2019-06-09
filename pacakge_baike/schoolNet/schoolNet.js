// pacakge_baike/schoolNet/schoolNet.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    richText:'',
    richTextGroup: ['1558420498240759', '1558426348175345', '1559275671567787',
      '1559275268127871','1558427231633717','1559275361743642',
      '1559274923348664', '1559275111994220','1558426372445290']

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let contentGroupID = 1558420344570102
    let richTextID =this.data.richTextGroup[app.globalData.baikeId]
    let MyContentGroup = new wx.BaaS.ContentGroup(contentGroupID)
    MyContentGroup.getContent(richTextID).then(res => {
      console.log(res)
      this.setData({
        richText: res.data.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto"')
      })
      // success
    }, err => {
      // err
    })

  },
toWritePage:function(e){
  wx.navigateTo({
    url: '/pages/write/write',
  })

},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    app.globalData.baikeId=''

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})