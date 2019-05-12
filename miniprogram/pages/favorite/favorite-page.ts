import { classicService } from '../../services/classic.service'
import { bookService } from '../../services/book.service'
import { authService } from '../../services/auth.service'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    userInfo: null,
    bookCount: 0,
    classics: null
  },

  onShow() {
    this.getMyBookCount()
    this.getMyFavoriteClassics()
    this.checkAuth()
  },

  checkAuth() {
    authService.checkAuth().then(isAuthorized => {
      console.log('TCL: checkAuth -> isAuthorized', isAuthorized)

      if (isAuthorized) {
        this.setData({
          authorized: isAuthorized
        })

        authService.getUserInfo().then(userInfo => {
          this.setData({
            userInfo
          })
        })
      }
    })
  },

  getMyFavoriteClassics() {
    classicService.getMyFavorite().then(classics => {
      this.setData({
        classics
      })
    })
  },

  getMyBookCount() {
    bookService.getFavoriteBooksCount().then(res => {
      this.setData({
        bookCount: res
      })
    })
  },

  onGetUserInfo(event) {
    const userInfo = event.detail.userInfo
    console.log('TCL: onGetUserInfo -> userInfo', userInfo)
    if (userInfo) {
      this.setData({
        userInfo,
        authorized: true
      })
    }
  },

  onJumpToAbout(event) {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  },

  onJumpToDetail(event) {
    const cid = event.detail.cid
    const type = event.detail.type
    // wx.navigateTo
    wx.navigateTo({
      url: `/pages/classic-detail/classic-detail?cid=${cid}&type=${type}`
    })
  }
})

// wx.navigateTo({
//   url:`/pages/classic-detail/index?cid=${cid}
//     &type=${type}`
// })
