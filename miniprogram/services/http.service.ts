import { apiConfig } from '../configs/api.config'

export class HttpService {
  headers: {
    [headerName: string]: string | number
  } = {
    'Content-Type': 'application/json',
    appkey: apiConfig.appkey
  }

  setHeader(headerName: string, headerValue: string | number) {
    this.headers[headerName] = headerValue
  }

  request(option: wx.RequestOption) {
    if (!option.method) {
      option.method = 'GET'
    }

    wx.request({
      method: option.method,
      url: apiConfig.baseUrl + option.url,
      header: this.headers,
      success(res) {
        option.success && option.success(res)
      },
      fail(err) {
        option.fail && option.fail(err)
      }
    })
  }
}

export const httpService = new HttpService()
