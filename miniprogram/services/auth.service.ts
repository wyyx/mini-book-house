import { HttpService } from './http.service'

export class AuthService extends HttpService {
  checkAuth(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            resolve(true)
          } else {
            reject(false)
          }
        }
      })
    })
  }

  getUserInfo(): Promise<wx.UserInfo> {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        success: res => {
          resolve(res.userInfo)
        }
      })
    })
  }
}

export const authService = new AuthService()
