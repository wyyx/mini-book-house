import { apiConfig } from '../configs/api.config'

interface Headers {
  [headerName: string]: string | number
}
const tips = {
  1: '抱歉，出现了一个错误',
  401: 'appkey无效',
  3000: '期刊不存在'
}

export class HttpService {
  headers: Headers = {
    'content-type': 'application/json',
    appkey: apiConfig.appkey
  }

  request(option: wx.RequestOption) {
    if (!option.method) {
      option.method = 'GET'
    }

    wx.request({
      method: option.method,
      url: apiConfig.baseUrl + option.url,
      header: { ...this.headers, ...option.header },
      data: option.data,
      success: res => {
        if (res.statusCode.toString().startsWith('2')) {
          option.success && option.success(res)
        } else {
          this.showError(1)
        }
      },
      fail: err => {
        option.fail && option.fail(err)
        this.showError(1)
      }
    })
  }

  private showError(errorCode: number) {
    if (!errorCode) {
      errorCode = 1
    }

    wx.showToast({
      title: tips[errorCode],
      duration: 3000,
      icon: 'none'
    })
  }
}

export const httpService = new HttpService()
