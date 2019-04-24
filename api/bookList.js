import {
  Http
} from '../util/http1'

//用promise来获取booksList
class GetBookList extends Http {
  getBooks() {
    return this.http({
      url: '/v1/book/hot_list'
    })
  }
  getDetailData(id) {
    return this.http({
      url: `/v1/book/${id}/detail`
    })
  }
  getShortComment(id){
    return this.http({
      url: `/v1/book/${id}/short_comment`
    })
  }
  getBookFavor(id){
    return this.http({
      url:`/v1/book/${id}/favor`
    })
  }
}

export {
  GetBookList
}