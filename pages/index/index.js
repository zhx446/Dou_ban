//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        movieList:[{
            
        },{},{}]
    },

    seeMore: function(e) {
        wx.navigateTo({
            url: '../see_more/see_more',
        })
    }
})