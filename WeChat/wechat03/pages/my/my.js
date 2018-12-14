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

 
})