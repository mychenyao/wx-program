// pages/webview/webview.js
let app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      webViewUrl:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const isParams=JSON.stringify(options)!=="{}",
            hash=()=>{
              let str=`/#/${options.routerPath}`;
              if(isParams){
                let urlStr='?';
                  for(let k in options){
                    if(k!=='routerPath')urlStr+=`${k}=${options[k]}&`
                  }
                  str+=urlStr.length>1?urlStr.substring(0,urlStr.length-1):'';
              }else{
                  str=""
              }
              return str
            };
      this.setData(
          {webViewUrl:`${app.globalData.webViewUrl}${hash()}`}
      );
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