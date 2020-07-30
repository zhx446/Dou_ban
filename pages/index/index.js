//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        movieMian: [],
        hotMian: [{
            movieImg: '../images/movie.jpg',
            movieTitle: '卡罗尔',
            score: 5.7,
            movieId: 0
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '海绵宝宝',
            score: 5.7,
            movieId: 1
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '易烊千玺',
            score: 5.7,
            movieId: 2
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '烟花',
            score: 5.7,
            movieId: 3
        }],
        nowMian: [{
            movieImg: '../images/movie.jpg',
            movieTitle: '爱丽丝',
            score: 5.7,
            movieId: 0
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '阿拉丁神灯',
            score: 5.7,
            movieId: 1
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '沉睡魔咒',
            score: 5.7,
            movieId: 2
        }, {
            movieImg: '../images/movie.jpg',
            movieTitle: '烟花',
            score: 5.7,
            movieId: 3
        }]
    },
    onLoad: function (options) {
        this.movieRequest();
    },

    movieRequest: function (e) {
        var that = this;
        wx.request({
            url: 'https://api.douban.com/v2/movie/top250', //仅为示例，并非真实的接口地址
            data: {
                start: 1,
                count: 4,
                apikey:'0b2bdeda43b5688921839c8ecb20399b'
            },
            header: {
                'content-type': 'json' // 默认值
            },
            success(res) {
                console.log(res.data)
                that.movieSuccess(res)
            }
        })
    },
    movieSuccess:function(res) {
        this.setData({
            movieMian:res.data.subjects
        })
    },
    seeMore: function (e) {
        wx.navigateTo({
            url: '../see_more/see_more?type=' + e.target.dataset.type,
        })
    },

    toMoiveDetail: function (e) {
        console.log(e.currentTarget.dataset.movieId)
        wx.navigateTo({
            url: '../movie_details/movie_details?movieId=' + e.currentTarget.dataset.movieId,
        })
    }


})