function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function prettyTimeBefore(diff, day_diff) {

}

function sleep(time) {
  var startTime = Date.now();
  var nowTime = 0;
  while (1) {
    nowTime = Date.now();
    if ((nowTime - startTime) > time) {
      return;
    }
  }
}

function prettyTime(time) {
  var nowTime = new Date().getTime();
  var diff = (nowTime - time) / 1000;
  var dayDiff = Math.floor(diff / 86400);
  var isPrev = diff > 0;
  if (diff < 0) {
    diff = Math.abs(diff);
    dayDiff = Math.abs(dayDiff);
  }
  if (diff < 60) {
    return '现在';
  }
  if (diff < 120) {
    return isPrev ? '一分钟前' : '一分钟后'; 
  }
}

module.exports = {
  formatTime: formatTime,
  sleep:sleep
}
