import { HttpService } from './http.service'
import { Classic } from '../models/classic.model'

export const STORAGE_PREFIX = 'classic-'

export class ClassicService extends HttpService {
  getLatest() {
    return this.request({
      path: '/classic/latest'
    }).then(res => res.data as Classic)
  }

  getById(type: number, id: number) {
    return this.request({
      path: `/classic/${type}/${id}`
    }).then(res => res.data as Classic)
  }

  getMyFavorite() {
    return this.request({
      path: '/classic/favor'
    }).then(res => res.data as Classic[])
  }

  getPreviousOrNext(currentIndex: number, previousOrNext: 'previous' | 'next') {
    const targetIndex = previousOrNext === 'previous' ? currentIndex - 1 : currentIndex + 1
    const classicFromStorage = this.getStorageByIndex(targetIndex)

    if (!classicFromStorage) {
      return this.request({
        path: `/classic/${currentIndex}/${previousOrNext}`
      }).then(res => {
        // add or update storage
        this.setStorageSync(targetIndex, res.data)

        return res.data as Classic
      })
    } else {
      return new Promise<Classic>((resolve, reject) => {
        resolve(classicFromStorage)
      })
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
