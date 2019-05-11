export interface Book {
  author: string
  fav_nums: number
  id: number
  image: string
  like_status: number
  title: string
}

export interface SearchBookResponse {
  books: Book[]
  count: number
  start: number
  total: number
}
