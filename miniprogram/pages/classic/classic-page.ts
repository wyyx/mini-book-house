import { classicService } from '../../services/classic.service'
import { Classic } from '../../models/classic.model'
import { likeService } from '../../services/like.service'

// miniprogram/pages/classic/classic.js
Page({
  /**
   * Page initial data
   */
  data: {
    currentClassic: {} as Classic,
    firstClassic: {} as Classic,
    isFirst: true,
    isLast: false,
    likeStatus: false,
    favNums: 0
  },

  /**
   * Lifecycle function--Called when page load
   */

  onLoad: function(options) {
    classicService.getLatest().then(classic => {
      this.setData({
        currentClassic: classic,
        firstClassic: classic
      })

      this.loadLikeInfo(classic.type, classic.id)
      classicService.setStorageSync(classic.index, classic)
    })
  },

  onLike: function(event) {
    const artId = this.data.currentClassic.id
    const type = this.data.currentClassic.type
    const like = event.detail.like

    likeService.like({ artId, type, like })
  },

  onPrevious: function(event) {
    this.onPreviousOrNext('next')
  },

  onNext: function(event) {
    this.onPreviousOrNext('previous')
  },

  onPreviousOrNext(previousOrNext: 'previous' | 'next') {
    classicService
      .getPreviousOrNext(this.data.currentClassic.index, previousOrNext)
      .then(classic => {
        this.loadLikeInfo(classic.type, classic.id)

        this.setData({
          currentClassic: classic,
          isFirst: classicService.isFirst(classic, this.data.firstClassic),
          isLast: classicService.isLast(classic)
        })
      })
  },

  loadLikeInfo(type: number, id: number) {
    likeService.getLikeInfo(type, id).then(like => {
      this.setData({
        likeStatus: like.like_status,
        favNums: like.fav_nums
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