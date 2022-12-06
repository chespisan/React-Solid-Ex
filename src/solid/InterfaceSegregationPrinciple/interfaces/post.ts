export interface IPost {
  title: string
  author: {
    name: string
    age: number
  },
  createdAt: Date
}