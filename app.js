//app.js
App({
  data: {
    deviceInfo:{}
  },
  onLaunch: function () {
    this.data.deviceInfo = wx.getSystemInfoSync();
    console.log(this.data.deviceInfo);
  }
})