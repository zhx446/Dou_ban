const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function movieRequest (dataUrl,movieSuccess) {
  var that = this;
  wx.request({
    //仅为示例，并非真实的接口地址
    url: dataUrl,
    header: {
      'content-type': 'json' // 默认值
    },
    success(res) {
      that.movieSuccess(res)
    }
  })
}

function movieSuccess(res,movieList) {
  this.setData({
    movieList:res.data.subjects
  })
}

module.exports = {
  formatTime: formatTime
}