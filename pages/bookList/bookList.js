import {
  GetBookList
} from '../../api/bookList'
import {
  Nav
} from '../../util/nav.js'
import {
  random
} from "../../util/common.js"
let getBookList = new GetBookList()
let nav = new Nav()
Page({

  /**`
   * 页面的初始数据
   */
  data: {
    books: [],
    onOff: true,
    addData: ''
  },
  getId(e) {
    //e.detail.id
    let url = `/pages/bookDetail/bookDetail?id=${e.detail.id}`
    let navSuccess = nav.navTo(url)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let books = getBookList.getBooks()
    books.then((res) => {
      this.setData({
        books: res
      })
    })
  },
  showSearch(e) {
    this.setData({
      onOff: false
    })
  },
  showBookList(e) {
    this.setData({
      onOff: true
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    let addData = random(6)
    this.setData({
       addData
    })
  },
})