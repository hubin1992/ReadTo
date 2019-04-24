import { Http } from "../util/http.js"
class GetLike extends Http {
  //获取最新的一期
  getLatest(scallBack) {
    let _this = this
    this.http({
      url: "/v1/classic/latest",
      success(res) {
        scallBack(res)
        _this._setStorage(res.index)
      }
    })

  }
  //获取切换数据
  getTabData(index, nextProv, cback, ) {
    let _this = this
    //key不是获取当前的key，应该是上一个key或者下一个key
    //最新一期的key是最大值
    //这个地方注意别改变index本身的直比如index++
    let key = nextProv == "/previous" ? this._getKey(index - 1) : this._getKey(index + 1);
    let fashion = wx.getStorageSync(key);
    if (!fashion) {
      this.http({
        url: '/v1/classic/' + index + nextProv,
        success(res) {
          //如果没有缓存，我们首先要去服务器请求，然后在存入缓存中
          wx.setStorageSync(_this._getKey(res.index), res)
          cback(res)
        }
      })
    } else { //如果我们缓存里面有数据，那么回调获取数据直接走缓存就可以了
      cback(fashion)
    }
  }
  //辅助函数
  isFirst(index) { //如果是最后一期
    return index == 1 ? false : true;
  }
  //辅助函数
  //我们用的思路是：获取当前一期的index，和上一期index进行比较，这里考虑到要用到两个index，所以我们考虑用本地存储的方式来解决
  isLatest(index) {
    let newIndex = this._getStorage("newIndex")
    return index == newIndex ? false : true
  }
  //本地存储第一期的
  _setStorage(index) {
    wx.setStorageSync("newIndex", index)
  }
  _getStorage() {
    return wx.getStorageSync("newIndex")
  }
  _getKey(index) {
    return "fashion-" + index
  }

}
export {
  GetLike
}