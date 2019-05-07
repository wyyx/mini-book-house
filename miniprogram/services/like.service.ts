import { HttpService } from './http.service'

export class LikeService extends HttpService {
  like(data: { artId: number; type: number; like: boolean }) {
    this.request({
      method: 'POST',
      url: data.like ? '/like' : '/like/cancel',
      data: {
        art_id: data.artId,
        type: data.type
      },
      success: res => {}
    })
  }

  getLikeInfo(type: number, id: number, success) {
    this.request({
      url: `/classic/${type}/${id}/favor`,
      success: res => {
        success(res.data)
      }
    })
  }
}

export const likeService = new LikeService()
