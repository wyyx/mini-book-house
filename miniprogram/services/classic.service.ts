import { HttpService } from './http.service'
import { Classic } from '../models/classic.model'

export class ClassicService extends HttpService {
  getLatest(success: wx.RequestSuccessCallback) {
    this.request({
      url: '/classic/latest',
      success: res => {
        success(res)
      }
    })
  }

  getPreviousOrNext(
    currentIndex: number,
    previousOrNext: 'previous' | 'next',
    success: wx.RequestSuccessCallback
  ) {
    this.request({
      url: `/classic/${currentIndex}/${previousOrNext}`,
      success: res => {
        success(res)
      }
    })
  }

  isFirst(current: Classic, first: Classic) {
    return current.index === first.index
  }

  isLast(current: Classic) {
    return current.index === 1
  }
}

export const classicService = new ClassicService()
