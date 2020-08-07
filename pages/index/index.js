//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
    data: {
        // top250
        movieMian: [],
        // 豆瓣热门
        hotMian: [],
        // 最新上映
        nowMian: []
    },
    onLoad: function (options) {
        this.getMovie('https://api.douban.com/v2/movie/top250?start=1&count=4&apikey=0b2bdeda43b5688921839c8ecb20399b','movieMian')
        this.getMovie('https://api.douban.com/v2/movie/in_theaters?start=1&count=4&apikey=0b2bdeda43b5688921839c8ecb20399b','hotMian')
        this.getMovie('https://api.douban.com/v2/movie/coming_soon?start=1&count=4&apikey=0b2bdeda43b5688921839c8ecb20399b','nowMian')
    },

    // 请求数据
    getMovie:function(url,type) {
        util.httpRequest(url,this.movieSuccess,type)
    },

    // 处理数据
    movieSuccess:function(data,type) {
        // 标题省略号
        var movie = data.subjects
        var len = movie.length
        for(let i = 0;i < len;i++) {
            if(movie[i].title.length > 6) {
                movie[i].title = movie[i].title.substr(0,5)+'...'
            }
            // 渲染星星
            movie[i].star = util.getStars(movie[i].rating.stars)
        }    
        // 渲染数据
        this.setData({
            [type]:data.subjects,
        })  
    },

    // 查看更多跳转页
    seeMore: function (e) {
        wx.navigateTo({
            url: '../see_more/see_more?type=' + e.target.dataset.type,
        })
    },

    // 跳转电影详情页
    toMoiveDetail: function (e) {
        wx.navigateTo({
            url: '../movie_details/movie_details?movieId=' + e.currentTarget.dataset.movieId,
        })
    },
    


})