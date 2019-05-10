import { apiConfig } from '../configs/api.config'
import { Method, RequestOption } from '../models/http.model'

interface Headers {
  [headerName: string]: string | number
}

const tips = {
  1: '抱歉，出现了一个错误',
  401: 'appkey无效',
  3000: '期刊不存在'
}

export class HttpService {
  private headers: Headers = {
    'content-type': 'application/json',
    appkey: apiConfig.appkey
  }

  request({ path, method = 'GET', data = {}, headers = {} }: RequestOption) {
    return new Promise<wx.RequestSuccessCallbackResult>((resolve, reject) => {
      wx.request({
        method,
        url: apiConfig.baseUrl + path,
        header: { ...this.headers, ...headers },
        data,
        success: res => {
          if (res.statusCode.toString().startsWith('2')) {
            resolve(res)
          } else {
            this.showError(1)
            reject(res)
          }
        },
        fail: err => {
          this.showError(1)
          reject(err)
        }
      })
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
