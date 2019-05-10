export interface BookDetail {
  author: string[]
  binding: string
  category: string
  id: number
  image: string
  images: Images
  isbn: string
  pages: string
  price: string
  pubdate: string
  publisher: string
  subtitle: string
  summary: string
  title: string
  translator: string[]
}

export interface Images {
  large: string
}
