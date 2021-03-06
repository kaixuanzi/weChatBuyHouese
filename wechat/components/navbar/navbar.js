const app = getApp()
Component({
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {}, 
      observer: function (newVal, oldVal) { },
      bkcolor:String,
    }
  },
  data: {
    height: '',
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: 1
    },
    color:"#fff",
  },
  attached: function () {
    // 获取是否是通过分享进入的小程序
    this.setData({
      share: app.globalData.share
    })
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: app.globalData.height
    })
    console.log(this.properties.navbarData.bkcolor)
    if (typeof this.properties.navbarData.bkcolor!="undefined"){ 
    this.setData({
      color: this.properties.navbarData.bkcolor
    })
   }
  },
  methods: {
    // 返回上一页面
    _navback() {
      console.log(this.data.navbarData)
      if(this.data.navbarData.innerPage){
        this.triggerEvent('myevent', { paramBtoA: false });
      }else{
        wx.navigateBack();
      }
      
    },
    //返回到首页
    _backhome() {
      wx.switchTab({
        url: this.data.navbarData.indexUrl,
      })
    }
  }

}) 