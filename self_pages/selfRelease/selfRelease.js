// self_pages/selfRelease/selfRelease.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    releasePost:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var openid = wx.getStorageSync('openid')
    let query = new wx.BaaS.Query()
    query.compare('openid', '=', openid)
    let Product = new wx.BaaS.TableObject('user_posts')
    Product.setQuery(query).find().then(res => {
      console.log(res.data.objects)
      if (res.data.objects.length != 0) {         //当查询到数据时设置初始值
        this.setData({
          releasePost:res.data.objects
        })
        
      }
      for(var i=0;i<this.data.releasePost.length;i++){        //转化时间戳
        let temp="releasePost["+i+"].created_at"
        this.setData({
          [temp]:this.timestampToTime(this.data.releasePost[i].created_at)
        })

      }
      // success
    }, err => {
      // err
    })

  },
deletePost:function(e){
  console.log(e)



},
  timestampToTime: function (timestamp) {   //时间戳格式转化
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
    var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
    var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return M + D + h + m + s;
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