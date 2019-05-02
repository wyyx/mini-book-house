import { httpService } from '../../services/http.service'

// miniprogram/pages/classic/classic.js
Page({
  /**
   * Page initial data
   */
  data: {},

  /**
   * Lifecycle function--Called when page load
   */

  onLoad: function(options) {
    httpService.setHeader('aaa', 'bbb')
    httpService.request({
      url: 'classic/latest',
      success(res) {
        console.log('TCL: res', res)
      },
      fail(err) {
        console.log('TCL: err', err)
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {},

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {}

  // /**
  //  * Called when user click on the top right corner to share
  //  */
  // onShareAppMessage: function() {}
})
