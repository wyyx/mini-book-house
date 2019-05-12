import { HttpService } from './http.service'
import { Book, SearchBookResponse } from '../models/book.model'
import { BookDetail } from '../models/book-detail.model'
import { CommentResponse, Comment } from '../models/comment.model'
import { LikeInfo } from '../models/like.model'

export const STORAGE_PREFIX = 'classic-'

export class BookService extends HttpService {
  getHotBooks(): Promise<Book[]> {
    const booksFromStorage = wx.getStorageSync('hot-books') as Book[]

    if (!booksFromStorage) {
      return this.request({
        path: '/book/hot_list'
      }).then(res => {
        // save to local storage
        wx.setStorageSync('hot-books', res.data)
        return res.data as Book[]
      })
    } else {
      return new Promise((resolve, reject) => {
        resolve(booksFromStorage)
      })
    }
  }

  getDetail(id: string | number): Promise<BookDetail> {
    const bookFromStorage = wx.getStorageSync(`book-${id}`) as BookDetail

    if (!bookFromStorage) {
      return this.request({
        path: `/book/${id}/detail`
      }).then(res => {
        // save to local storage
        wx.setStorageSync(`book-${id}`, res.data)
        return res.data as BookDetail
      })
    } else {
      return new Promise((resolve, reject) => {
        resolve(bookFromStorage)
      })
    }
  }

  getComments(id: string | number): Promise<Comment[]> {
    return this.request({
      path: `/book/${id}/short_comment`
    }).then(res => {
      const resTypes = res.data as CommentResponse
      return resTypes.comments
    })
  }

  getLikeInfo(id: string | number): Promise<LikeInfo> {
    return this.request({
      path: `/book/${id}/favor`
    }).then(res => {
      return res.data as LikeInfo
    })
  }

  postComment(id: string | number, comment: string) {
    return this.request({
      path: '/book/add/short_comment',
      method: 'POST',
      data: {
        book_id: id,
        content: comment
      }
    })
  }

  getFavoriteBooksCount(): Promise<number> {
    return this.request({
      path: `/book/favor/count`
    }).then(res => {
      return (res.data as any).count
    })
  }

  search(start: number, q: string) {
    return this.request({
      path: '/book/search?summary=1',
      data: {
        q: q,
        start: start
      }
    }).then(res => {
      return res.data as SearchBookResponse
    })
  }
}

export const bookService = new BookService()
