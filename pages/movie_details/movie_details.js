// pages/movie_details/movie_details.js
const util = require('../../utils/util.js')
Page({

        /**
         * 页面的初始数据
         */
        data: {
                movieDetailsImg: '',
                movieTitle: '',
                artist: '',
                type: '',
                time: '',
                movieSynopsis: ''
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
                this.setData({
                        movieDetailsImg: data.images.small,
                        movieTitle: data.title,
                        artist: data.writers[0].name,
                        typeTime: data.genres,
                        time: data.durations,
                        movieSynopsis: data.summary
                })
                // 动态设置当前页面的标题
                wx.setNavigationBarTitle({
                        title: this.data.movieTitle
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