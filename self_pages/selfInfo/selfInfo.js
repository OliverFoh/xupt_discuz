
// self_pages/selfInfo/selfInfo.js
//import data from '../data.json'
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    academy: '',
    account: '',
    major: '',
    gender: '',
    temp: '',
    GenderList: ['男','女'],
    list: [{
      "label": "通信与信息工程学院",
      "value": "0",
      "children": [{
        "label": "通信工程",
        "value": "00"
      },
      {
        "label": "信息工程",
        "value": "01"
      },
      {
        "label": "广播电视工程",
        "value": "02"
      },
      {
        "label": "信息安全",
        "value": "03"
      },
      {
        "label": "信息对抗技术",
        "value": "04"
      },
      {
        "label": "电子信息科学与技术",
        "value": "05"
      },
      {
        "label": "物联网工程",
        "value": "06"
      },
      {
        "label": "电子工程及管理",
        "value": "07"
      }
      ]
    },
    {
      "label": "电子工程学院",
      "value": "1",
      "children": [{
        "label": "电子信息工程",
        "value": "00"
      },
      {
        "label": "电磁场与无线技术",
        "value": "01"
      },
      {
        "label": "电子科学与技术",
        "value": "02"
      },
      {
        "label": "光电信息科学与工程",
        "value": "03"
      },
      {
        "label": "微电子科学与工程",
        "value": "04"
      },
      {
        "label": "集成电路与集成系统设计",
        "value": "05"
      }
      ]
    },
    {
      "label": "计算机学院",
      "value": "2",
      "children": [{
        "label": "计算机科学与技术",
        "value": "20"
      },
      {
        "label": "软件工程",
        "value": "21"
      },
      {
        "label": "网络工程",
        "value": "22"
      },
      {
        "label": "数据科学与大数据技术",
        "value": "24"
      }
      ]
    },
    {
      "label": "自动化学院",
      "value": "3",
      "children": [{
        "label": "自动化",
        "value": "30"
      },
      {
        "label": "测控技术与仪器",
        "value": "31"
      },
      {
        "label": "智能科学与技术",
        "value": "32"
      },
      {
        "label": "电气工程及其自动化",
        "value": "33"
      }
      ]
    },
    {
      "label": "经济与管理学院",
      "value": "4",
      "children": [{
        "label": "经济学",
        "value": "40"
      },
      {
        "label": "国际经济与贸易",
        "value": "41"
      },
      {
        "label": "金融工程",
        "value": "42"
      },
      {
        "label": "工商管理",
        "value": "43"
      },
      {
        "label": "人力资源管理",
        "value": "44"
      },
      {
        "label": "市场营销",
        "value": "45"
      },
      {
        "label": "会计学",
        "value": "46"
      },
      {
        "label": "审计学",
        "value": "47"
      },
      {
        "label": "财务管理",
        "value": "48"
      },
      {
        "label": "信息管理与信息系统",
        "value": "49"
      },
      {
        "label": "电子商务",
        "value": "50"
      },
      {
        "label": "工程管理",
        "value": "51"
      }
      ]
    },
    {
      "label": "现代邮政学院",
      "value": "5",
      "children": [{
        "label": "物流管理",
        "value": "50"
      },
      {
        "label": "工业工程",
        "value": "51"
      },
      {
        "label": "邮政管理",
        "value": "52"
      },
      {
        "label": "邮政工程",
        "value": "53"
      }
      ]
    },
    {
      "label": "理学院",
      "value": "6",
      "children": [{
        "label": "应用物理学",
        "value": "60"
      },
      {
        "label": "信息与计算科学",
        "value": "61"
      },
      {
        "label": "材料物理",
        "value": "62"
      }
      ]
    },
    {
      "label": "人文社科学院",
      "value": "7",
      "children": [{
        "label": "行政管理",
        "value": "70"
      },
      {
        "label": "公共事业管理",
        "value": "71"
      },
      {
        "label": "社会工作",
        "value": "72"
      }
      ]
    },
    {
      "label": "外国语学院",
      "value": "8",
      "children": [{
        "label": "英语",
        "value": "80"
      },
      {
        "label": "商务英语",
        "value": "81"
      }
      ]
    },
    {
      "label": "数字艺术学院",
      "value": "9",
      "children": [{
        "label": "数字媒体艺术",
        "value": "90"
      },
      {
        "label": "网络与新媒体",
        "value": "91"
      }
      ]
    }
    ],
    academyIsShow: false,
    index:'',
    canUse:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.isRegister==true){      //当该用户已经注册时显示初始数据
      var userInfo=wx.getStorageSync('selfInfo')
      this.setData({
        name: userInfo.name,
        gender:userInfo.gender,
        major: userInfo.major,
        account:userInfo.account,
        academy:userInfo.academy,
        canUse: false
      })

    }

  },
  onChangeAcademy: function (e) {      //获取学院与专业
    console.log(e.detail)
    if (e.detail.options.length==1){
      this.setData({
        academy:e.detail.options[0].label
      })
    }
    else{
      this.setData({
        academy:e.detail.options[0].label,
        major:e.detail.options[1].label
      })
    }
  },
  getName: function (e) {    //获取姓名
    this.setData({
      name: e.detail.value
    })
  },
  getAccount: function (e) {   //获取学号
    this.setData({
      account: e.detail.value
    })
  },
  getGender: function (e) {    //获取性别
    this.setData({
      gender: e.detail.value
    })
  },
  getAcademy: function (e) {   //获取学院
    this.setData({
      academy: e.detail.value
    })
  },
  getMajor: function (e) {     //获取专业
    this.setData({
      major: e.detail.value
    })
  },
  selectGender: function (e) {
    var that=this
    wx.showActionSheet({
      itemList: ['男','女'],
      success(res) {
        if (res.tapIndex===0){
          that.setData({
            gender:'男'
          })
        }
        else{
          that.setData({
            gender: '女'
          })
        }
        
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
    // this.setData({
    //   gender:this.data.GenderList[e.detail.value]
    // })

  },
  isChinese: function (temp) {      //判断是否为中文
    var re = /[0-9a-zA-Z]/
    if (re.test(temp)) return false
    return true
  },
  isAccount:function(string){       //判断学号是否正确
    var re=/^0\d{7}$/
    if(re.test(string))
      return true
    else
      return false
  },
  submit: function (e) {
    if(this.data.name!=''&&this.data.account!=''&&this.data.gender!=''&&this.data.academy!=''&&this.data.major!='') //当信息完整时
    {
      if(!this.isChinese(this.data.name)){      //判断姓名是否为中文
        wx.showModal({
          title: '提示',
          content: '姓名必须为中文',
        })
        return false
      }
      if(this.data.account.length!=8||!this.isAccount(this.data.account)){
        wx.showModal({
          title: '提示',
          content: '学号输入有误',
        })
        return false
      }
      var that=this
      let openid = wx.getStorageSync('openid')
      let avatarUrl = wx.getStorageSync('avatarUrl')
      let nickName = wx.getStorageSync('nickName')
      let province = wx.getStorageSync('province')
      let city= wx.getStorageSync('city')      
      wx.showModal({
        title: '信息一经提交后不可修改',
        content: '是否确认提交?',
        success:function(res){
          if(res.confirm){
            let Product = new wx.BaaS.TableObject('user')       //首次登录，上传用户信息
            let product = Product.create() 
            let record= {
              openid:openid,
              avatarUrl: avatarUrl,
              nickName: nickName,
              gender:that.data.gender,
              province:province,
              city:city,
              name:that.data.name,
              account:that.data.account,
              academy:that.data.academy,
              major:that.data.major,
            }
            product.set(record).save().then(res => {
              console.log(res)
              app.globalData.isRegister = true
              wx.navigateBack({
              })
              wx.showToast({
                title: '保存成功!',
              }),err=>{
                wx.showToast({
                  title: '保存失败!',
                })
              }
            })

          }

        },
        fail:function(res){
          console.log(res.errMsg)
        }
      })
      
      
    }
    else{
      wx.showModal({
        title: '提示',
        content: '请将信息补充完整',
      })
    }
  },
  showAcademyCascader:function(e){       //显示选择器
    this.setData({
      academyIsShow:true
    })

  },
  closeCascader: function (e) {     //关闭选择器
    this.setData({
      academyIsShow: false,
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






