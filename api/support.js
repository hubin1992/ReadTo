import {
  Http
} from '../util/http.js'

class Support extends Http {
  //这个是提交到后台的数据
  getSupportState(state, arrId, form) {
    let url = state == "like" ? "/v1/like" : "/v1/like/cancel"
    this.http({
      url: url,
      method: "POST",
      data: {
        art_id: arrId,
        type: form
      }
    })
  }

  getHeartState(type, id, scb) {
    this.http({
      // classic/<int:type>/<int:id>/favor
      url: "/v1/classic/" + type + "/" + id + "/favor",
      success(res) {
        scb(res)
      }
    })
  }
}
export {
  Support
}