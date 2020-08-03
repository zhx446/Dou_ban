// pages/see_more/see_more.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotShowList: [],
    start: 1, //初始页默认值
    count: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const typeId = options.type
    var start = this.data.start
    var count = this.data.count
    this.moreTitle(typeId)
    this.seeMore('https://api.douban.com/v2/movie/' + typeId + '?start=1&count=15&apikey=0b2bdeda43b5688921839c8ecb20399b')
    this.refreshData('https://api.douban.com/v2/movie/top250?start=' + start + '&count=' + count + '&apikey=0b2bdeda43b5688921839c8ecb20399b')
  },

  seeMore: function (url, type) {
    util.httpRequest(url, this.seeMoreSuccess, type)
  },

  seeMoreSuccess: function (data) {
    this.setData({
      hotShowList: data.subjects
    })
  },

  moreTitle: function (typeId) {
    if (typeId == 'top250') {
      wx.setNavigationBarTitle({
        title: 'Top250',
      })
    } else if (typeId == 'in_theaters') {
      wx.setNavigationBarTitle({
        title: '豆瓣热门',
      })
    } else {
      wx.setNavigationBarTitle({
        title: '最新上映',
      })
    }
  },

  toMovieDetails: function (e) {
    wx.navigateTo({
      url: '../movie_details/movie_details?movieId=' + e.currentTarget.dataset.movieId,
    })
  },

  refreshData: function (url, type) {
    util.httpRequest(url, this.dataSuccess, type)
  },
  dataSuccess: function (data) {
    var oldHotShowList = this.data.hotShowList
    var newHotShowList = data.subjects
    var concatHotShowList = oldHotShowList.concat(newHotShowList)
    this.setData({
      hotShowList: concatHotShowList
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var start = this.data.start + 11
    var count = this.data.count + 11
    this.setData({
      start: start,
      count: count
    })
    this.refreshData('https://api.douban.com/v2/movie/top250?start=' + start + '&count=' + count + '&apikey=0b2bdeda43b5688921839c8ecb20399b')
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})