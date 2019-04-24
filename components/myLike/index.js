// components/myLike/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likeObj: null,
    type: {
      type: String,
      observer: function(newVal){
        if(newVal){
          var Category = {
            "100": "电影",
            "200": "音乐",
            "300": "句子"
          }[newVal]
        }
        this.setData({
          typeText: Category
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    typeText: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toPage(e){
      this.triggerEvent('redirectPage',this.properties.likeObj)
    }
  }
})