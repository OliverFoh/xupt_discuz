// pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let contentGroupID = 1557059869520148
    let richTextID = 1557059903858523
    let MyContentGroup = new wx.BaaS.ContentGroup(contentGroupID)
    MyContentGroup.getContent(richTextID).then(res => {
      this.setData({
        imageUrl:res.data.cover
      })
      console.log(res)
      // success
    }, err => {
      // err
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