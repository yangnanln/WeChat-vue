// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "/images/swiper/iqiyi.png",
      "/images/swiper/vr.png",
      "/images/swiper/wx.png",
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    userLogo:"/images/4.png"
  },

  chooesImage(){
    wx.chooseImage({
      count: 9,	// 默认为9
      sizeType: ['original', 'compressed'],	// 指定原图或者压缩图
      sourceType: ['album', 'camera'],	// 指定图片来源
      success: (res)=>{
        var logo = res.tempFilePaths[0];

        this.setData({
          userLogo:logo
        })
        
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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