import { HttpService } from './http.service'

export class LikeService extends HttpService {
  like(data: { artId: number; type: number; like: boolean }) {
    this.request({
      method: 'POST',
      url: data.like ? '/like' : '/like/cancel',
      data: {
        art_id: 1,
        type: 100
      },
      success: res => {}
    })
  }
}

export const likeService = new LikeService()
