import { bookService } from '../../services/book.service'
import { randomString } from '../../utils/common.util'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching: false,
    more: ''
  },

  /**
   * 生命周期函数--监听页面加
   */
  onLoad: function(optins) {
    bookService.getHotBooks().then(books => {
      this.setData({
        books: books
      })
    })
    // id
  },

  onSearching(event) {
    this.setData({
      searching: true
    })
  },

  onCancel(event) {
    this.setData({
      searching: false
    })
  },

  onReachBottom() {
    this.setData({
      more: randomString(16)
    })
  }
})
