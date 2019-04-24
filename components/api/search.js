import {
  Http
} from "../../util/http1.js"

class SearchData extends Http {
  key = "__books__"
  summary = 1
  getHostData() {
    let url = '/book/hot_keyword'
    return this.http({
      url
    })
  }
  serachBooks(start, query) {
    let url = '/book/search?summary=1'
    return this.http({
      url,
      data: {
        start,
        q: query
      }
    })

  }
  _setStorage(news) {
    let arr = this._getStorage() || [];
    if(arr.length >=8){
      arr.splice(7)
    }
    let index = arr.indexOf(news)
    if (index >= 0) {
      arr.unshift(arr[index])
      arr.splice(index + 1, 1)
      wx.setStorageSync(this.key, arr)
      return
    }
    arr.unshift(news)
    wx.setStorageSync(this.key, arr)
  }
  _getStorage() {
    let arr = wx.getStorageSync(this.key);
    return arr
  }
}

export {
  SearchData
}