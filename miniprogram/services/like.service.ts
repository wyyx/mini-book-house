import { HttpService } from './http.service'
import { LikeInfo } from '../models/like.model'

export class LikeService extends HttpService {
  like(data: { artId: number; type: number; like: boolean }) {
    return this.request({
      method: 'POST',
      path: data.like ? '/like' : '/like/cancel',
      data: {
        art_id: data.artId,
        type: data.type
      }
    })
  }

  getLikeInfo(type: number, id: number) {
    return this.request({
      path: `/classic/${type}/${id}/favor`
    }).then(res => res.data as LikeInfo)
  }
}

export const likeService = new LikeService()
