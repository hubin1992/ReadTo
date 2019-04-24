import {
  GetBookList
} from "../../api/bookList.js";
import {
  Support
} from "../../api/support.js"
import {
  GetComment
} from "../../api/shortComment.js"
let getBookList = new GetBookList();
let getSupport = new Support();
let getComment = new GetComment();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailData: null,
    shortCom: [],
    favor: null,
    state: true,
    value: ""
  },
  changeLike(e) {
    //like
    let state = e.detail.behave
    let type = 400
    //发送给服务器的数据
    getSupport.getSupportState(state, this.data.detailData.id, type)
  },
  showInfor() {
    this.setData({
      state: false
    })
  },
  hideInfor() {
    this.setData({
      state: true,
      value: ""
    })

  },
  getInfor(e) {
    if(e.detail.value.length >=12){
      wx.showToast({
        title: '短评，仅限12个字符哦',
      })
    }
    wx.nextTick(() => {
      this.setData({
        value: e.detail.value
      })
    })
  },
  sendData(e) {
    //获取input的值 e.detail.value
    if(!this.data.value){
      wx.showToast({
        title: '请输入评论',
      })
      return
    }
    let send = getComment.sendShortCum(this.data.detailData.id, this.data.value)
    send.then((res) => {
      wx.showToast({
        title: "添加成功",
      })
      this.setData({
        value: ""
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) { //获取数据
  console.log(options)
    let detail = getBookList.getDetailData(options.id);
    let shorCom = getBookList.getShortComment(options.id);
    let favor = getBookList.getBookFavor(options.id)
    detail.then((res) => {
      this.setData({
        detailData: res
      })
    })

    shorCom.then((res) => {
      this.setData({
        shortCom: res.comments
      })
    })

    favor.then((res) => {
      this.setData({
        favor: res
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})