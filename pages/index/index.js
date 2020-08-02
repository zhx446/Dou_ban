//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
    data: {
        movieMian: [],
        hotMian: [],
        nowMian: []
    },
    onLoad: function (options) {
        this.getMovie('https://api.douban.com/v2/movie/top250?start=1&count=4&apikey=0b2bdeda43b5688921839c8ecb20399b','movieMian')
        this.getMovie('https://api.douban.com/v2/movie/in_theaters?start=1&count=4&apikey=0b2bdeda43b5688921839c8ecb20399b','hotMian')
        this.getMovie('https://api.douban.com/v2/movie/coming_soon?start=1&count=4&apikey=0b2bdeda43b5688921839c8ecb20399b','nowMian')
    },

    getMovie:function(url,type) {
        util.httpRequest(url,this.movieSuccess,type)
    },

    movieSuccess:function(data,type) {
        this.setData({
            [type]:data.subjects
        })
    },

    seeMore: function (e) {
        wx.navigateTo({
            url: '../see_more/see_more?type=' + e.target.dataset.type,
        })
    },

    toMoiveDetail: function (e) {
        wx.navigateTo({
            url: '../movie_details/movie_details?movieId=' + e.currentTarget.dataset.movieId,
        })
    }


})