//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        movieMian: [{
            movieImg: '../images/movie.jpg',
            movieTitle: '寻梦环游记',
            score: 5.7,
            movieId:0
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '阿甘正传',
            score: 5.7,
            movieId:1
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '少年的你',
            score: 5.7,
            movieId:2
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '烟花',
            score: 5.7,
            movieId:3
        }],
        hotMian: [{
            movieImg: '../images/movie.jpg',
            movieTitle: '卡罗尔',
            score: 5.7,
            movieId:0
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '海绵宝宝',
            score: 5.7,
            movieId:1
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '易烊千玺',
            score: 5.7,
            movieId:2
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '烟花',
            score: 5.7,
            movieId:3
        }],
        nowMian: [{
            movieImg: '../images/movie.jpg',
            movieTitle: '爱丽丝',
            score: 5.7,
            movieId:0
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '阿拉丁神灯',
            score: 5.7,
            movieId:1
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '沉睡魔咒',
            score: 5.7,
            movieId:2
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '烟花',
            score: 5.7,
            movieId:3
        }]
    },

    seeMore: function(e) {
        wx.navigateTo({
            url: '../see_more/see_more?type='+e.target.dataset.type,
        })
    },

    toMoiveDetail:function(e) {
        wx.navigateTo({
            url: '../movie_details/movie_details?movieId='+e.currentTarget.dataset.movieId,
        })
    }


})