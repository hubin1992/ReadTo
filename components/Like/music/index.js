// components/Like/movie/index.js
import { likeBehavior } from "../likeBehavior.js"
const innerAudioContext = wx.createInnerAudioContext()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [likeBehavior],
  properties: {
    musicSrc:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgName:"../images/music@2x.png",
    playing:"../images/playing.png",
    pause:"../images/pause.png",
    playState:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changePlayState(){
      this.setData({
        playState: !this.data.playState
      })
      innerAudioContext.src=this.properties.musicSrc
      if(!this.data.playState){
        innerAudioContext.play()
      }else{
        innerAudioContext.pause()
      }
    }
  },
  detached(){
    this.setData({
      playState: true
    })
    innerAudioContext.stop()
  }
})
