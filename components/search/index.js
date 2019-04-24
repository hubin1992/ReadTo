// components/search/index.js
import {
  SearchData
} from "../api/search.js"
import {
  Nav
} from '../../util/nav.js'
let nav = new Nav()
let searchData = new SearchData()
Component({
  /**
   * 组件的属性列表
   */

  properties: {
    addData: {
      type: String,
      observer: 'loadingMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hotData: [],
    hisData: [],
    q: '',
    total: 0,
    loading: false,
    iconState: false,
    bookListState: false,
    noRuslut: false,
    addMoreIcon: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadingMore() {
      let books = this.data.searchBook;
      if (this.books == []) {
        return
      }
      let start = books.length
      if (this.data.total == start) {
        this._loadingHide()
        return
      }
      if (this.data.loading) {
        return
      }
      searchData.serachBooks(start, this.data.q)
        .then((res) => {
          this.setData({
            searchBook: books.concat(res.books),
          })
          this._loadingHide()
        })
      this._loadingSHow()
    },
    getId(e) {
      //e.detail.id
      let url = `/pages/bookDetail/bookDetail?id=${e.detail.id}`
      let navSuccess = nav.navTo(url)
    },
    clearAll() {
      this.setData({
        q: "",
        searchBook: []
      })
      this._reslut()
      this._bookListHide()
    },
    searchBooks(e) {
      let q = e.detail.value || e.detail.text
      this._addMore()
      this._bookListShow()
      searchData.serachBooks(0, q).then(res => {
        if (res.books.length == 0) {
          this._noReslut()
          this._noAdd()
        }
        this.setData({
          q,
          searchBook: res.books,
        })
        this._getTotal(res)
        this._noAdd()
        searchData._setStorage(q)
      })
    },
    showIcon() {
      this.setData({
        iconState: true
      })
    },
    hideSearch(e) {
      this.triggerEvent('showBookList', {})
      this._noReslut()
    },
    // --->changeState Fuction
    _addMore() {
      this.setData({
        addMoreIcon: true
      })
    },
    _noAdd() {
      this.setData({
        addMoreIcon: false
      })
    },
    _getTotal(res) {
      this.setData({
        total: res.total
      })
    },
    _noReslut() {
      this.setData({
        noRuslut: true,
      })
    },
    _reslut(res) {
      this.setData({
        noRuslut: false,
      })
    },
    _loadingSHow() {
      this.setData({
        loading: true
      })
    },
    _loadingHide() {
      this.setData({
        loading: false
      })
    },
    _bookListShow() {
      this.setData({
        bookListState: true
      })
    },
    _bookListHide() {
      this.setData({
        bookListState: false
      })
    }

  },
  attached(option) {
    let hisData = searchData._getStorage()
    searchData.getHostData().then((res) => {
      this.setData({
        hotData: res.hot,
        hisData
      })
    })
  },

})