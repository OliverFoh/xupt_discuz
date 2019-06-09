// self_pages/collectedInfo/collectedInfo.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectedPost:[],
    idList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let query1 = new wx.BaaS.Query()
    let query2 = new wx.BaaS.Query()
    query1.compare('openid', '=',wx.getStorageSync('openid'))
    let Product = new wx.BaaS.TableObject('collected_list')
    let Collected = new wx.BaaS.TableObject('user_posts')
    Product.setQuery(query1).find().then(res => {
      console.log(res.data.objects)
      if (res.data.objects.length != 0) {         //当查询到帖子id时设置初始值
        this.setData({
          idList: res.data.objects[0].collect_list
        })
        query2.in('id', this.data.idList)
        Collected.setQuery(query2).find().then(res=>{        //在帖子数据表中根据记录id查询对应帖子，返回数组
        console.log(res.data)
          var post=res.data.objects
          for (var i = 0;i<post.length;i++) {        //转化时间戳
            post[i].created_at = this.timestampToTime(post[i].created_at)  
          }
          this.setData({
            collectedPost: post
          })

        },err=>{})
        

      }
      
      // success
    }, err => {
      // err
    })

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