var that;
var app=getApp()
Page({
  data: {
    text:'',
    selected1:false,
    selected2:false,
    selected3:false,
    selected4:false,
    tags:[0,0,0,0],
    selectTable:'',
    images: [],
    imagesIdList:[],
    uploadedImages: [],
    posts_array:['user_posts_study','user_posts_life','user_posts_other']
  },
  onLoad: function (options) {
    that = this;
    var objectId = options.objectId;
    console.log(objectId);
  },
  booleanToNumber:function(str){
    if(str===true){
      return 1
    }
    else{
      return 0
    }

  },
  onTaggle:function(e){         //选择标签
      //console.log(e)
      if(e.target.id==="1"){
        // let click='selected1.click'
        // let color= 'selected1.color'
        // this.setData({
        //   selectTable:0,
        //   selected1:'#ff5500',
        //   [click]:!this.data.selected1.click
        // })
        let tag='tags[0]'
        this.setData({
          selected1: !this.data.selected1,
          [tag]: this.booleanToNumber(!this.data.tags[0])
        })
        console.log(this.data.tags)
        //console.log(this.booleanToNumber(!0))
      }
      else if(e.target.id === "2") {
        let tag = 'tags[1]'
        this.setData({
          selected2: !this.data.selected2,
          [tag]: this.booleanToNumber(!this.data.tags[1])
        })
      }
      else if(e.target.id ==="3") {
        let tag = 'tags[2]'
      this.setData({
        selected3: !this.data.selected3,
        [tag]: this.booleanToNumber(!this.data.tags[2])
      })
      }
      else{
        let tag = 'tags[3]'
        this.setData({
          selected4: !this.data.selected4,
          [tag]: this.booleanToNumber(!this.data.tags[3])
        })
      }

  },
  chooseImage: function () {
    // 选择图片
    wx.chooseImage({
      count: 3, // 默认9
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        //console.log(tempFilePaths);
        that.setData({
          images: that.data.images.concat(tempFilePaths)
        });
      }
    })
  },
  // 图片预览
  previewImage: function (e) {
    //console.log(this.data.images);
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.images
    })
  },
  delete: function (e) {
    var index = e.currentTarget.dataset.index; var images = that.data.images;
    images.splice(index, 1);
    that.setData({
      images: images
    });
  },
  getText:function(e){    //获取文字内容
    this.setData({
      text:e.detail.value
    })

  },
  submit:function(e){       //发帖
    // console.log(this.data.text)
    // console.log(this.data.images)
    // console.log(this.data.uploadedImages)
    if(app.globalData.isRegister===false){        //判断当前用户是否注册
      wx.showModal({
        title: '提示',
        content: '未完善个人信息，是否立即完善?',
      success:function(res){
        if(res.confirm){    //点击确认按钮时跳转到补全信息页面补全信息
          wx.setStorageSync('isFilled',1)
          wx.navigateTo({
            url: '/self_pages/selfInfo/selfInfo',
          })
        }
        
      },
      fail:function(){
      }  
      })

    }
    else{
      if (this.data.images.length === 0) {
        wx.showModal({
          title: '提示',
          content: '请选择图片后再上传',
        })
        return false
      }
      if (this.data.images.length > 6) {
        wx.showModal({
          title: '提示',
          content: '图片个数不能超过六个',
        })
        return false
      }
      if (this.data.tags === [0, 0, 0, 0]) {
        wx.showModal({
          title: '提示',
          content: '未选择分类',
        })
        return false
      }
      wx.showLoading({
        title: '正在上传',
      })
      let MyFile = new wx.BaaS.File()
      for (var i = 0; i < this.data.images.length; i++) {       //上传图片
        let fileParams = { filePath: this.data.images[i] }
        MyFile.upload(fileParams).then(res => {
          //console.log(res.data.file.id)
          this.data.imagesIdList.push(res.data.file.id)     //获取图片id
          console.log(this.data.imagesIdList)
          /**判断获取到的图片id与原始图片个数是否相等，相等时代表获取正确，可以进行下一步存储*/
          if (this.data.imagesIdList.length === this.data.images.length) {
            let Product = new wx.BaaS.TableObject('user_posts')   //初始化贴吧数据表对象
            let product = Product.create()
            let record = {
              openid: wx.getStorageSync('openid'),
              avatarUrl: wx.getStorageSync('avatarUrl'),
              nickName: wx.getStorageSync('nickName'),
              text: this.data.text,
              imagesIdList: this.data.imagesIdList,
              reply_list: [],
              tags: this.data.tags

            }
            product.set(record).save().then(res => {
              console.log(res.data.id)
              wx.hideLoading()
              wx.showToast({
                title: '上传成功',
              })
              wx.navigateTo({
                url: '/pages/write_success/write_success',
              })

            }, err => {

            })

          }
        }, err => {
          wx.showModal({
            title: '提示',
            content: '上传失败,请重试',
          })
        })
      }

      
    }
     
  }
})