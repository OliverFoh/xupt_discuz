// pages/comment/comment.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'',
    nickName:'',
    created_at:'',
    text:'',
    imagesList:'',
    testList:[1,2,3,4,5],
    reply_list:[],
    comment:'',
    single:'',
    phoneHeight:'',
    isSelected:false,
    collect_list:[],
    isExit:false,
    recordId:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let Product = new wx.BaaS.TableObject('collected_list')   //初始化贴吧数据表对象
    let query = new wx.BaaS.Query()
    query.compare('openid', '=',wx.getStorageSync('openid'))
    Product.setQuery(query).find().then(res => {        //获取当前用户收藏列表
    console.log(res)
      if(res.data.objects.length===0){      //当用户之前没有收藏时

      }
      else{           //当之前已经有收藏时
        this.setData({
          collect_list: res.data.objects[0].collect_list,
          isExit:true,
          recordId: res.data.objects[0].id
        })
      }
    }, err => { })

    var single=wx.getStorageSync('singlePostDetail')
    console.log(single)
    this.setData({
      reply_list:single.reply_list,
      avatarUrl:single.avatarUrl,
      nickName:single.nickName,
      created_at: single.created_at,
      text:single.text,
      imagesList:single.imagesIdList,
      single:single,
      phoneHeight:app.globalData.phoneHeight
    })

  },
  addToCollected:function(e){         //添加收藏
    this.setData({
      isSelected:!this.data.isSelected
    })
    if(this.data.isSelected==true){
      wx.showToast({
        title: '已收藏',
      })
      let Product = new wx.BaaS.TableObject('collected_list')   //初始化贴吧数据表对象   
      if (this.data.isExit ==true) {        //之前已经存在时只需要重新赋值
        //console.log(233)
        let recordID = this.data.recordId
        let product = Product.getWithoutData(recordID)
        product.set('collect_list', this.data.collect_list.concat(this.data.single.id))
        product.update().then(res => {
          // success
        }, err => {
          // err
        })
      }
      else {           //之前不存在时需要新建记录
        //console.log(666)
        console.log(this.data.collect_list.concat(this.data.single.id))
        let product = Product.create()          //刷新用户收藏列表
        let record = {
          openid:wx.getStorageSync('openid'),
          collect_list: this.data.collect_list.concat(this.data.single.id)
        }
        product.set(record).save().then(res => {
          console.log('收藏成功')

        }, err => { })


      }
        
    }
    else{
      wx.showToast({
        title: '已取消收藏',
      })
    }

  },
  submitComment:function(e){
    wx.showLoading({
      title: '评论中',
    })

    this.setData({
      comment:''
    })
    var newReply=[{        //评论相关信息
      avatarUrl:wx.getStorageSync('avatarUrl'),
      nickName: wx.getStorageSync('nickName'),
      comment:e.detail.value.comment
    }]
    if(this.data.reply_list.length===0){      //当原帖没有评论时
      let Product = new wx.BaaS.TableObject('user_posts')
      let product = Product.getWithoutData(this.data.single.id)
      product.set({
        'reply_list':newReply,
        'reply_num':++this.data.single.reply_num
        })
      product.update().then(res => {
        //console.log('评论成功')
        wx.hideLoading()
        wx.showToast({
          title: '评论成功',
        })
        // success
      }, err => {
        // err
      })

    }
    else{           //当评论数组中已经存在评论时
      let Product = new wx.BaaS.TableObject('user_posts')
      let product = Product.getWithoutData(this.data.single.id)
      var array=this.data.single.reply_list.concat(newReply)
      product.set({
        'reply_list':array,
        'reply_num':++this.data.single.reply_num
        })
      product.update().then(res => {
        console.log('评论成功')
        wx.hideLoading()
        wx.showToast({
          title: '评论成功',
        })
        // success
      }, err => {
        // err
      })

    }

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
    console.log(5555)
    // console.log(this.data.isSelected)
    // console.log(this.data.isExit)
    // if(this.data.isSelected === true) {      //收藏按钮最终是否被选择
    //     let Product = new wx.BaaS.TableObject('collected_list')   //初始化贴吧数据表对象   
    //     if(this.data.isExit===true){        //之前已经存在时只需要重新赋值
          
    //         let recordID = this.data.recordId
    //         let product = Product.getWithoutData(recordID)
    //         product.set('collect_list', this.data.collect_list.push(this.data.single.id))
    //         product.update().then(res => {
    //           // success
    //         }, err => {
    //           // err
    //         })
    //     }
    //     else{           //之前不存在时需要新建记录
    //       let product = Product.create()          //刷新用户收藏列表
    //       let record = {
    //         openid: app.globalData.openid,
    //         collect_list: this.data.collect_list.push(this.data.single.id)
    //       }
    //       product.set(record).save().then(res => {
    //         console.log('收藏成功')

    //       }, err => { })


    //     }
    // }
    
   
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