//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [],
    navList:[
        {
          name:"家电维修",
          images:"../../static/image/kaisuo.png",
          url:"/pages/webview/webview"
        }, {
          name:"家电清洗",
          images:"../../static/image/qingxi.png",
          url:"/pages/webview/webview"
        }, {
          name:"家电维修",
          images:"../../static/image/kaisuo.png",
          url:"/pages/webview/webview?routerPath=wash/002"
        }, {
          name:"手机维修",
          images:"../../static/image/tel.png",
          url:"/pages/webview/webview?routerPath=wash/003"
        }, {
          name:"卫浴洁具",
          images:"../../static/image/电脑维修.png",
          url:"./pages/webview/webview"
        },{
          name:"管道维修",
          images:"../../static/image/qingxi.png",
          url:"/pages/webview/webview"
        },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

      if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
          console.log(res);
          this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
            console.log(res);
            app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
    // 获取homedata;
    
    wx.request({
      url: `${app.globalData.apiDomain}/homedata`,
      success:res=>{
          const data=res.data;
          if(data.code==="0000"){
            this.setData({
              imgUrls:data.result.slideShow
            })
          }
      }
    })
  },

  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  }
})
