// components/heart/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
    },
    onOff: {
      type: Boolean,
    },
    use:{
      type: Boolean,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bg: "../images/like@2x.png",
    noBg: "../images/like-copy@2x.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeState: function(e) {
      if(this.data.use){
        return 
      }
      let count = this.properties.count;
      let onOff = this.properties.onOff;
      !onOff ? count++ : count--;
      wx.nextTick(() => {
        this.setData({
          count: count,
          onOff: !onOff
        })
      })
      let behave = !onOff ? 'like' : '';
      //事件的激活
      //this.triggerEvent('事件名称', event,{常用的三个属性})
      this.triggerEvent('like',{
        //注意这是个对象
        behave
      })
    }
  }
})