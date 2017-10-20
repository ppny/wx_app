var app = getApp();
Page({
  data: {
    menu1:[
      { name: "美食" }, { name: "美团超市" }, { name: "生鲜果蔬" }, { name: "下午茶" }, { name: "美团专送" }, { name: "正餐优选" }, { name: "快餐小吃" }, { name: "全部商家" }
    ],
    menu2: [
      { name: "汉堡披萨" }, { name: "地方菜" }, { name: "配送免费" }, { name: "新商家" }, { name: "炸鸡零食" }, { name: "日韩料理" }, { name: "鲜花蛋糕" }, { name: "送药上门" }
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function(){
    console.log(111111111)
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
    })
  }
})