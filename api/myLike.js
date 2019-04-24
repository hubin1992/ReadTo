import {
  Http
} from "../util/http1"

class GetMyLike extends Http {
  getFavor() {
    return this.http({
      url: '/v1/classic/favor'
    })
  }
}

export {
  GetMyLike
}