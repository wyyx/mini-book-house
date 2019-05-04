import { HttpService } from './http.service'

export class ClassicService extends HttpService {
  getLatest(success: wx.RequestSuccessCallback) {
    this.request({
      url: '/classic/latest',
      success: res => {
        success(res)
      }
    })
  }
}

export const classicService = new ClassicService()
