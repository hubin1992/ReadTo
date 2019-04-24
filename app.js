App({
  onLaunch(){
    // console.log("初始化完成--全局仅仅执行一次而已")
  },
  onShow(){
    // console.log("小程序启动，或从后台进入前台显示时--不限次数")
  },
  onHide(){
    // console.log("小程序启动，或从前台进入后台隐藏时--不限次数")
  },
  onError(){
    // console.log("小程序发生脚本错误，或者 api 调用失败时触发，会带上错误信息")
  },
  onPageNotFound(){
    // console.log("小程序要打开的页面不存在时触发，会带上页面信息回调该函数")
  }
  //还可以自定函数，用this可以访问
  //appkey AbhC31IG7ruCDp57
})