import { keywordService } from '../../services/keyword.service'
import { bookService } from '../../services/book.service'

Component({
  properties: {},
  data: {
    historyWords: [],
    hotWords: [],
    q: '',
    searching: false,
    loadingCenter: false,
    loadingMore: false,
    books: [],
    noResult: false
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
      this.showResult()
      this.showLoadingCenter()

      const q = event.detail.value || event.detail.text
      // return when white space
      if (!q || !q.trim()) {
        return
      }

      this.setData({
        q
      })

      bookService.search(0, q).then(books => {
        console.log('TCL: onConfirm -> books', books)
        this.setData({
          books
        })

        keywordService.addToHistory(q)

        if (books.length < 1) {
          this.showNoResult()
        }
        this.hideLoadingCenter()
      })
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
    }
  } as any
})
