//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        movieMian: [{
            movieImg: '../images/movie.jpg',
            movieTitle: '寻梦环游记',
            score: 5.7
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '阿甘正传',
            score: 5.7
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '少年的你',
            score: 5.7
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '烟花',
            score: 5.7
        }],
        doubanList: [{
            hotShowTxt: '影院热映'
        }, {
            hotShowTxt: '豆瓣热门'
        }, {
            hotShowTxt: '近期热门剧集'
        }]
    },

    seeMore: function(e) {
        wx.navigateTo({
            url: '../see_more/see_more',
        })
    }
})