import { HttpService } from './http.service'
import { HotKeywordResponse } from '../models/keyword.model'

export class KeywordService extends HttpService {
  key = 'q'
  maxLength = 10

  getHistory() {
    const words = wx.getStorageSync(this.key) as string[]
    if (!words) {
      return []
    }
    return words
  }

  addToHistory(keyword) {
    let words = this.getHistory()
    const has = words.includes(keyword)

    if (!has) {
      const length = words.length
      if (length > this.maxLength) {
        words.pop()
      }

      words.unshift(keyword)
      wx.setStorageSync(this.key, words)
    }
  }

  getHotKeywords() {
    return this.request({
      path: '/book/hot_keyword'
    }).then(res => {
      return (res.data as HotKeywordResponse).hot
    })
  }
}

export const keywordService = new KeywordService()
