// pages/movie_details/movie_details.js
const util = require('../../utils/util.js')
Page({

        /**
         * 页面的初始数据
         */
        data: {
                movie:{},
                isIntro:true
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                const movieId = options.movieId
                this.toMovieDetails('https://api.douban.com/v2/movie/subject/' + movieId + '?apikey=0b2bdeda43b5688921839c8ecb20399b')
        },

        toMovieDetails: function (url, type) {
                util.httpRequest(url, this.toMovieDetailsSuccess, type)

        },
        toMovieDetailsSuccess: function (data) {
                const movie = data
                movie.star = util.getStars(movie.rating.stars)
                this.setData({
                        movie:movie
                })
                // 动态设置当前页面的标题
                wx.setNavigationBarTitle({
                        title: movie.title
                })
                
        },
        intro:function(e) {
                this.setData({
                        isIntro:!this.data.isIntro
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