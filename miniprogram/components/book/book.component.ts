Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: {
      type: Object,
      value: {},
      optionalTypes: []
    },
    showLike: {
      type: Boolean,
      value: true,
      optionalTypes: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event) {
      const bookId = this.properties.book.id
      wx.navigateTo({
        url: `/pages/book-detail/book-detail-page?bookId=${bookId}`
      })
    }
  } as any
})
