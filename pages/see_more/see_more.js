// pages/see_more/see_more.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotShowList: [],
    start: 0, //初始电影默认值
    typeId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取seeMore()传过来的参数
    const typeId = options.type  
    //获取start变量
    var start = this.data.start  
    //控制导航标题
    this.moreTitle(typeId)  
    this.seeMore('https://api.douban.com/v2/movie/' + typeId + '?start=' + start + '&count=10&apikey=0b2bdeda43b5688921839c8ecb20399b')
    this.setData({
      typeId: typeId
    })
  },

  // 接口请求数据
  seeMore: function (url, type) {
    util.httpRequest(url, this.seeMoreSuccess, type)
  },

  // 处理回调函数
  seeMoreSuccess: function (data) {
    //获取当前的数据数组
    var oldHotShowList = this.data.hotShowList 
    //从这次请求返回的数组中获取新的数组
    var newHotShowList = data.subjects 
    //合并数组
    var concatHotShowList = oldHotShowList.concat(newHotShowList) 
    //渲染到页面
    this.setData({  
      hotShowList: concatHotShowList
    })

    // 电影标题太长处理的方法添加...省略号
    //获取电影数据
    var movie = concatHotShowList 
    //电影长度
    var len = movie.length 
    //遍历每一步电影
    for (let i = 0; i < len; i++) {  
      //判断标题长度是否大于6
      if (movie[i].title.length > 6) {  
        //大于6的话显示5位 拼接省略号显示
        movie[i].title = movie[i].title.substr(0, 5) + '...' 
      }
      // 渲染评分星星
      movie[i].star = util.getStars(movie[i].rating.stars)
    }
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

  toMoiveDetail: function (e) {
    wx.navigateTo({
      url: '../movie_details/movie_details?movieId=' + e.currentTarget.dataset.movieId,
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var start = this.data.start + 11
    const typeId = this.data.typeId
    this.setData({
      start: start
    })
    this.seeMore('https://api.douban.com/v2/movie/' + typeId + '?start=' + start + '&count=10&apikey=0b2bdeda43b5688921839c8ecb20399b')
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