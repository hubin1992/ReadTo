import {
  base_url,
  appkey
} from '../config.js'
const tips = {
  0: 'OK, 成功',
  1: '抱歉出现了一个错误',
  1000: "输入参数错误",
  1001: "输入的json格式不正确",
  1002: "找不到资源",
  1003: "未知错误",
  1004: "禁止访问",
  1005: "不正确的开发者key",
  1006: "服务器内部错误",
  2000: '你已经点过赞了',
  2001: '你还没点过赞',
  3000: '该期刊的内容不存在'
}
class Http {
  http(params) {
    let that  = this
    wx.request({
      url: base_url + params.url,
      method: params.method || 'get',
      //外面传递什么，里面一定要定义什么
      data:params.data,
      header: {
        appkey: appkey
      },
      success(res) {
        let code = res.statusCode.toString().startsWith('2')
        if (code) {
          //如果有success我们才去执行
          params.success && params.success(res.data)
        } else {//业务的错误
          let err_code = res.data.error_code
          that._showErrorInfor(err_code)
        }
      },
      fail(err) {//服务器出现了错误
        this._showErrorInfor("1")
      }
    })
  }
  _showErrorInfor(err_code) {
    if(!err_code){
      err_code = 1;
    }
    wx.showToast({//小程序的提示框
      title: tips[err_code],
      icon:'none',
      duration:2000
    })
  }
}
export {
  Http
}