import { Http } from '../util/http1'

class FashionDetail extends Http {
  getDetail(id, type) {
    return this.http({
      url: `/v1/classic/${type}/${id}`
    })
  }
}

export { FashionDetail }