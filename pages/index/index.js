const write_icon = 'data:image/png;base64,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'
const back_top_icon = 'data:image/png;base64,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'
const buttons = [{
  label: 'back_top',
  icon: back_top_icon,
},
{
  label: 'write',
  icon: write_icon,
},
]

  let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: 0,
    _num: '0',
    buttons,
    Post:[],
    clientHeight:0,
    images:[],
    liked:[],
    tagsArray:[],
    isTap:false,
    finallHeight:'',
    offset:0,
    num_post:[]
  },
  /** 
 * 点击tab切换 
 */
  onClick(e) {
   // console.log('onClick', e.detail)
    if (e.detail.index === 0) {
      // wx.switchTab({
      //   url: '/pages/baike/baike'
      // })
      wx.pageScrollTo({
        scrollTop: 0,
      })

    }
    if (e.detail.index === 1) {
      wx.navigateTo({
        url: '/pages/write/write',
      })
    }
  },
  toggle(e) {         //点击切换
    //console.log(e.currentTarget.dataset.index);
    console.log(e.currentTarget.dataset.index)
    if (this.data._num === e.currentTarget.dataset.index) {
      return false;
    } else {
      this.setData({
        _num: e.currentTarget.dataset.index
      })
    }
  },
  swapClass:function(e){        //滑动切换
    console.log(e)

  },
  toCommentPage:function(e){        //跳转到评论页
    //console.log(e)
    wx.setStorageSync('singlePostDetail', this.data.Post[e.currentTarget.dataset.id])
    wx.navigateTo({
      url: '/pages/comment/comment',
    })
    //let viewNum = this.data.Post[e.currentTarget.dataset.id].view_num
    let Product = new wx.BaaS.TableObject('user_posts')           //更新浏览量
    let product = Product.getWithoutData(this.data.Post[e.currentTarget.dataset.id].id)
    product.set('view_num', ++this.data.Post[e.currentTarget.dataset.id].view_num)
    product.update()


  },
  showFavor:function(e){        //点赞图标切换并更新数据
    let temp = "liked["+e.currentTarget.dataset.id+"]"
    this.setData({
      [temp]:!this.data.liked[e.currentTarget.dataset.id]
    })
    let Product = new wx.BaaS.TableObject('user_posts')
    let product = Product.getWithoutData(this.data.Post[e.currentTarget.dataset.id].id)
    //console.log(this.data.Post[e.currentTarget.dataset.id].like_num++)
    
    /**判断是否已经点赞过，若不是则点赞数加1，若是则点赞数减1 */
    if (this.data.liked[e.currentTarget.dataset.id]===true){
      product.set('like_num', ++this.data.Post[e.currentTarget.dataset.id].like_num)
    }
    else{
      product.set('like_num', --this.data.Post[e.currentTarget.dataset.id].like_num)
    }
    product.update().then(res => {
      //console.log(res.data)
      let tempNum = "Post["+e.currentTarget.dataset.id+"].like_num"
      this.setData({
        [tempNum]:res.data.like_num
      })
      // success
      //console.log('更新成功')
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
    return M + D + h + m+s;
  },
  getImages: function (i) {       //获取图片文件地址
    let Image = new wx.BaaS.File()
    let query = new wx.BaaS.Query()
    query.in('id', this.data.Post[i].imagesIdList)
    let temp ="Post["+i+"].created_at"      //帖子时间戳格式化
    this.setData({
      [temp]: this.timestampToTime(this.data.Post[i].created_at)
    })
    Image.setQuery(query).find().then(res => {
      let imagesList="Post["+i+"].imagesIdList"
      this.setData({
        [imagesList]:res.data.objects,
        //images: that.data.images.concat(res.data.objects)
      })
      var images=this.data.images       //创建全体图片地址数组方便使用时的图片预览
      for(let j=0;j<res.data.objects.length;j++){
        images.push(res.data.objects[j].path)
      }
      this.setData({
        images:images
      })
      if(i<this.data.Post.length-1){
        this.getImages(++i)
      }
      return true
    }, err => { })
  },
  getBassPost: function () {            //从知晓云后端请求数据
    var Product = new wx.BaaS.TableObject('user_posts')
    Product.orderBy('-created_at').find().then(res => {
      if (res.data.objects.length !=this.data.Post.length){        //当前有新数据时刷新
        this.setData({
          Post: res.data.objects,
          offset:this.data.offset+1
        })
        //设置一个是否点赞的布尔类型数组，数组元素值为对应的列表中是否点赞（点赞状态）
        for(var i=0;i<res.data.objects.length;i++){
          let temp="liked["+i+"]"
          this.setData({
            [temp]:false
          })
        }
        //console.log(this.data.Post)
      
      /**递归取请求图片文件地址 */
        this.getImages(0)
      }
      else{
        
      }
      },err=>{})
     
  },
  sortPost:function(post){          //对帖子数组按照浏览量排序
    var tempPost=post
    var temp
    for(var i=0;i<tempPost.length-1;i++){
      for (var j = 0; j <tempPost.length-i-1;j++)
      {
        if (tempPost[j].view_num < tempPost[j+1].view_num){
          temp = tempPost[j].view_num 
          tempPost[j].view_num = tempPost[j+1].view_num
          tempPost[j+1].view_num=temp
        }
      }
    }
    this.setData({
      num_post:tempPost
    })

  },
  previewImage: function (e) {        //预览图片
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.images
    })
  },
swapClass: function (e) {
    var that = this;
    console.log(e)
    that.setData({
      _num: e.detail.current
    });
    switch (e.detail.current) {
      case 0:
        that.data.state = 0
        
        break;
      case 1:
        that.data.state = 1
        //that.getBassPost('-view_num')
        that.sortPost(this.data.Post)
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    this.getBassPost()
    setTimeout(function () {
      wx.hideLoading()
    }, 1500)

    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this;
    //var lastHeight=this.data.clientHeight
    //创建节点选择器
    var query = wx.createSelectorQuery();
    //选择id
    query.select('#test').boundingClientRect()
    query.exec(function (res) {
      //res就是 该元素的信息 数组
      console.log(res);
      _this.setData({
        clientHeight: res[0].height
      })
    })
    

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getBassPost()
    var _this = this;
    
    //创建节点选择器
    var query = wx.createSelectorQuery();
    //选择id
    query.select('#test').boundingClientRect()
    query.exec(function (res) {
      //res就是 该元素的信息 数组
      //console.log(res);
        _this.setData({
          clientHeight: res[0].height
        })
    })
    wx.stopPullDownRefresh()

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '加载中',
    })
    //this.getBassPost()
    wx.hideLoading()

  },
  reportIssue:function(e){            //举报帖子
    wx.showActionSheet({
      itemList: ['不雅内容','图片缺失、错误','版权问题'],
      success(res) {
        wx.showToast({
          title: '感谢您的反馈',
        })
      },
      fail(res) {

      }
    })
  }
})
