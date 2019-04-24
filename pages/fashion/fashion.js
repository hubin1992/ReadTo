import {
  GetLike
} from "../../api/like.js"
import {
  Support
} from "../../api/support.js"
const getLike = new GetLike()
const getSupport = new Support()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    likeData: null,
    heart: null,
    First: true,
    Latest: false
  },

  changeLike(e) {
    //like
    let state = e.detail.behave
    //发送给服务器的数据
    getSupport.getSupportState(state, this.data.likeData.id, this.data.likeData.type)
  },

  next(e) {
    this.changeTabInfor("/previous")
  },
  prev(e) {
    this.changeTabInfor("/next")
  },

  changeTabInfor(nextProv) {
    let _this = this
    let index = this.data.likeData.index
    getLike.getTabData(index, nextProv, (res) => {
      //当我们切换的时候需要去获取heart状态
      _this._getHeartState(res.type,res.id)
      this.setData({
        likeData: res,
        Latest: getLike.isLatest(res.index),
        First: getLike.isFirst(res.index)
      })
    })
  },
  _getHeartState(id, type) {
    getSupport.getHeartState(id, type, (res) => {
      this.setData({
        heart: res
      })
    })
  },
  onShareAppMessage(res){
    return {
      title:"来自你大爷的分享"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let _this = this
    getLike.getLatest((res) => {
      _this._getHeartState(res.type,res.id)
      this.setData({
        likeData: res
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

})