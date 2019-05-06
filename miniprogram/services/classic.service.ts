import { HttpService } from './http.service'
import { Classic } from '../models/classic.model'

export const STORAGE_PREFIX = 'classic-'

export class ClassicService extends HttpService {
  getLatest(success: wx.RequestSuccessCallback) {
    this.request({
      url: '/classic/latest',
      success: res => {
        success(res)
      }
    })
  }

  getPreviousOrNext(currentIndex: number, previousOrNext: 'previous' | 'next', success) {
    const targetIndex = previousOrNext === 'previous' ? currentIndex - 1 : currentIndex + 1
    const classic = this.getStorageByIndex(targetIndex)

    if (!classic) {
      this.request({
        url: `/classic/${currentIndex}/${previousOrNext}`,
        success: res => {
          success(res.data)

          // save to storage
          this.setStorageSync(targetIndex, res.data)
        }
      })
    } else {
      success(classic)
    }
  }

  isFirst(current: Classic, first: Classic) {
    return current.index === first.index
  }

  isLast(current: Classic) {
    return current.index === 1
  }

  setStorageSync(index: number, classic) {
    wx.setStorageSync(STORAGE_PREFIX + index, classic)
  }

  getStorageByIndex(index: number) {
    return wx.getStorageSync(STORAGE_PREFIX + index)
  }
}

export const classicService = new ClassicService()
