import {
  Http
} from '../util/http1.js'

class GetComment extends Http {
  sendShortCum(id, value){
    let url = "/v1/book/add/short_comment"
    return this.http({
      url: url,
      method:"post",
      data:{
        book_id:id,
        content:value
      }
    })
  }
}

export { GetComment}