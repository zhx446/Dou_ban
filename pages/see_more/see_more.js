// pages/see_more/see_more.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotShowList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const typeId = options.type
    this.seeMore('https://api.douban.com/v2/movie/'+typeId+'?start=1&count=15&apikey=0b2bdeda43b5688921839c8ecb20399b')
  },

  seeMore: function (url, type) {
    util.httpRequest(url,this.seeMoreSuccess,type)
  },

  seeMoreSuccess: function (data) {
    this.setData({
      hotShowList: data.subjects
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