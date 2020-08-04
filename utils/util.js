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

function httpRequest(url,callBack,type) {
  var that = this;
  wx.request({
      url: url, 
      header: {
          'content-type': 'json' 
      },
      success(res) {
          callBack(res.data,type)
      }
  })
}

function getStars(stars) {
  let starArr = []
  const left = stars.substr(0,1)
  const right = stars.substr(1,1)
  for(let i = 0;i < left;i++) {
    starArr.push(2)
  }
  if(starArr.length < 5 && right == '5') {
    starArr.push(1)
  }
  // for(let i = 5;i < starArr.length;i++) {
  //   starArr.push(0)
  // }
  return starArr
}

module.exports = {
  formatTime: formatTime,
  httpRequest:httpRequest,
  getStars:getStars
}