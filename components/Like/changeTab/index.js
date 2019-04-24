// components/Like/changeTab/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: String
    },
    First: {
      type: Boolean,
      default: true
    },
    Latest: {
      type: Boolean,
      default: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    next: "../images/next@2x.png",
    disNext: "../images/nextdis@2x.jpg",
    prev: "../images/prev@2x.png",
    disPrev: "../images/prevdis@2x.jpg",
    //这么来判断的原因，是我们本身获取的就是最新的一款
    Latest: false,
    First: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft() {
      if (this.data.Latest) {
        this.triggerEvent('prev', {}, {})
      }
    },
    onRight() {
      if (this.data.First) {
        this.triggerEvent('next', {}, {})
      }
    }
  }
})