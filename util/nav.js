class Nav {
  navTo(url){
    return new Promise((resolve,reject)=>{
      wx.navigateTo({
        url,
        success(res){
          resolve(res)
        },
        fail(){
          reject()
        },
      })
    })
  }
}

export { Nav }