// pages/cart/cart.js
import Storage from "../../utils/storage"
Page({
  // 展开
  HandSelse(){
    this.setData({
      fulseIcon:false
    })
    const res=wx.getStorageSync('carts')
        this.animate('.list',[
            {height:'200rpx',transformOrigin:"height"},
            {height:200*res.length+'rpx',transformOrigin:"height"}
        ],500)
  },
// 收起
  HandHide(){
    this.setData({
        fulseIcon:true
    })
    const res =wx.getStorageSync('carts')
    this.animate('.list',[
        {height:200*res.length+'rpx',transformOrigin:"height"},
        {height:'200rpx',transformOrigin:"height"}
    ],500)
},
// 开关
bindchange(e){
  this.setData({
    switch:e.detail.value
  })
  this.changactualmount()
},
changNumamount() {
  let num = 0;
  this.data.List.forEach((res) => {
    num += res.num * res.price;
  });
  this.setData({
    goodsPrice: num,
  });
},
// 
changactualmount(){
  let num = 0
  this.data.List.forEach(res=>{
      num+=res.num*res.price
  })
  if(this.data.switch)
  {
      num = num - this.data.balance
      this.setData({
        actualPayment:num
      })
  }else{
      this.setData({
        actualPayment:num
      })
  }
},
// 确认支付
confirmPayment(){
  // console.log("确认支付");
  wx.showLoading({
    title:'微信支付',
  })
  wx.navigateTo({
    url: '/pages/success/success',
  })
  setTimeout(function () {
    wx.hideLoading()
  }, 2000)

},

/**
   * 页面的初始数据
   */
  data: {
    List : [],
    fulseIcon:true,
    balance:4,//余额
    switch:true,
    goodsPrice: 0,//金额
    actualPayment: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getList()
    this.changNumamount();
    this.changactualmount()
  },

  /**
   * 获取本地存储的购物车数据
   */
  getList(){
    const List = Storage.get("carts")
    this.setData({
    List
    })
    // console.log(List);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})