import { keywordService } from '../../services/keyword.service'
import { bookService } from '../../services/book.service'

Component({
  properties: {
    more: {
      type: String,
      value: '',
      optionalTypes: [],
      observer: 'loadMore' as any
    }
  },
  data: {
    historyWords: [],
    hotWords: [],
    query: '',
    searching: false,
    loadingCenter: false,
    loadingMore: false,
    books: [],
    noResult: false,
    totalLength: null
  },
  attached() {
    keywordService.getHotKeywords().then(res => {
      this.setData({
        hotWords: res
      })
    })

    this.setData({
      historyWords: keywordService.getHistory()
    })
  },
  methods: {
    onCancel(event) {
      this.triggerEvent('cancel', {}, {})
    },
    onClear(event) {
      this.closeResult()
      this.closeNoResult()
    },
    onConfirm(event) {
      console.log('onConfirm')
      this.showResult()
      this.showLoadingCenter()

      // get search string from tag or search box
      const query = event.detail.value || event.detail.text

      // return when white space
      if (!query || !query.trim()) {
        return
      }

      // set search string
      this.setData({
        query
      })

      // first loading
      bookService.search(0, query).then(res => {
        this.setData({
          books: res.books,
          totalLength: res.total
        })

        // when no result
        if (res.books.length < 1) {
          this.showNoResult()
        }

        this.hideLoadingCenter()

        keywordService.addToHistory(query)
      })
    },
    loadMore() {
      console.log('loadMore')

      const query = this.data.query

      // return when white space
      if (!query || !query.trim()) {
        return
      }

      // return when no more data
      if (!this.hasMore()) {
        return
      }

      // return when is loading more
      if (this.data.loadingMore) {
        return
      }

      // loading more when reaching page bottom
      this.showLoadingMore()
      const currentLength = this.data.books.length

      bookService
        .search(currentLength, query)
        .then(res => {
          const sumBooks = this.data.books.concat(res.books)

          // update books
          this.setData({
            books: sumBooks
          })

          this.hideLoadingMore()
        })
        .catch(err => {
          this.hideLoadingMore()
        })
    },
    hasMore() {
      return this.data.books.length < this.data.totalLength
    },
    showResult() {
      this.setData({
        searching: true
      })
    },
    showNoResult() {
      this.setData({
        noResult: true
      })
    },
    closeNoResult() {
      this.setData({
        noResult: false
      })
    },
    closeResult() {
      this.setData({
        searching: false,
        q: ''
      })
    },
    showLoadingCenter() {
      this.setData({
        loadingCenter: true
      })
    },
    hideLoadingCenter() {
      this.setData({
        loadingCenter: false
      })
    },
    showLoadingMore() {
      this.setData({
        loadingMore: true
      })
    },
    hideLoadingMore() {
      this.setData({
        loadingMore: false
      })
    }
  } as any
})
