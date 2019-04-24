import {
  GetMyLike
} from '../../api/myLike.js'
let getMyLike = new GetMyLike()
Page({
  data: {
    buttonType: "getUserInfo",
    userInfor: null,
    showInfor: false,
    likeData: []
  },
  //button的bindGetUserInfo，是在没有授权的情况下第一次获取用户信息
  getDetail(e) { //e.detail.userInfo
    //当我们完成授权的时候，第二次点击button组件他不会在弹窗，也就是只能弹一次
    if (e.detail) {
      this.setData({
        showInfor: true,
        userInfor: e.detail
      })
    }
  },
  _getLikeDetail() {
    getMyLike.getFavor().then(res => {
      this.setData({
        likeData: res
      })
    })
  },
  toPage(e) {
    wx.navigateTo({
      url: `/pages/fashionDetail/fashionDetail?id=${e.detail.id}&type=${e.detail.type}`,
    })
  },
  onLoad: function(option) {
    //查看是否授权
    wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                this.setData({
                  showInfor: true,
                  userInfor: res.userInfo
                })
              }
            })
          }
        }
      }),
      this._getLikeDetail()
  },
  onShow() {
    this._getLikeDetail()
  }


})