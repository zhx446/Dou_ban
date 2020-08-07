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

// 请求数据接口
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
// 渲染星星
// stars 参数为 movie.rating.stars里的 35 45 50
function getStars(stars) {
  // 创建存放数组
  let starArr = []
  // 截取第一位数
  const left = stars.substr(0,1)
  // 截取第二位数
  const right = stars.substr(1,1)
  // 遍历截取的第一位  全星状态
  for(let i = 0;i < left;i++) {
    // push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度
    starArr.push(2)
  }
  // 半星状态
  // 数组的长度小于5也就是5颗星 或 截取第二位数为5
  if(starArr.length < 5 && right == '5') {
    // push 1 表示半星
    starArr.push(1)
  }
  // 灰星星状态 
  for(let i = starArr.length;i < 5;i++) {
    starArr.push(0)
  }
  return starArr
}

module.exports = {
  formatTime: formatTime,
  httpRequest:httpRequest,
  getStars:getStars
}