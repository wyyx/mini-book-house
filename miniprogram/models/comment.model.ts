export interface CommentResponse {
  comments: Comment[]
  book_id: number
}

export interface Comment {
  content: string
  nums: number
}
