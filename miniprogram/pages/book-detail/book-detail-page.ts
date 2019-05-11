import { bookService } from '../../services/book.service'
import { likeService } from '../../services/like.service'
import { ContentType } from '../../models/episode-type.model'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    wx.showLoading({ title: '正在加载...' })
    const bookId = options.bookId

    const detail$ = bookService.getDetail(bookId)
    const comments$ = bookService.getComments(bookId)
    const likeStatus$ = bookService.getLikeInfo(bookId)

    detail$.then(res => {
      this.setData({
        book: res
      })
    })

    comments$.then(res => {
      this.setData({
        comments: res
      })
    })

    likeStatus$.then(res => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums
      })
    })

    wx.hideLoading()
  },

  onLike(event) {
    const that: any = this
    const like_or_cancel = event.detail.like
    likeService.like({ artId: that.data.book.id, type: ContentType.Book, like: like_or_cancel })
  },

  onFakePost(event) {
    this.setData({
      posting: true
    })
  },

  onCancel(event) {
    this.setData({
      posting: false
    })
  },

  onPost(event) {
    const comment = event.detail.text || event.detail.value

    if (!comment) {
      return
    }

    if (comment.length > 12) {
      wx.showToast({
        title: '短评最多12个字',
        icon: 'none'
      })
      return
    }

    bookService.postComment(this.data.book.id, comment).then(res => {
      wx.showToast({
        title: '+ 1',
        icon: 'none'
      })

      this.data.comments.unshift({
        content: comment,
        nums: 1
      })

      this.setData({
        comments: this.data.comments,
        posting: false
      })
    })
  }

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function() {}
})
