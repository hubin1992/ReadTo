// components/date/date.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    day: { //默认的是""
      type: String,
      //newV 8
      observer(newV, oldV) { //检测响应数据的变化
        //这样会一直报错，原因就是我们的setData是更新day这个数据，所以我们一直在不断的更新，已更新就会出发observer
        //结论：不要在observer里面去修改本身的属性
        if (newV < 10) {
          this.setData({
            _day: "0" + newV
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    monthList: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    year: 0,
    month: "",
    _day: ""
  },
  attached() { //在组件实例进入页面节点树时执行
    let year = new Date().getFullYear()
    let month = new Date().getMonth()
    this.setData({
      year: year,
      month: this.data.monthList[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})