export interface ClassicResponse {
  data: Classic
  header: Headers
  statusCode: number
  cookies: any[]
  errMsg: string
}

export interface Classic {
  content: string
  fav_nums: number
  id: number
  image: string
  index: number
  like_status: number
  pubdate: string
  title: string
  type: number
}

export interface Headers {
  [key: string]: string | number
}
