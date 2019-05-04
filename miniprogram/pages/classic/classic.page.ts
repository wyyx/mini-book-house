import { classicService } from '../../services/classic.service'
import { Classic } from '../../models/classic.model'

// miniprogram/pages/classic/classic.js
Page({
  /**
   * Page initial data
   */
  data: {
    classic: {} as Classic
  },

  /**
   * Lifecycle function--Called when page load
   */

  onLoad: function(options) {
    classicService.getLatest(res => {
      console.log('data', res.data)

      this.setData({
        classic: res.data
      })
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
