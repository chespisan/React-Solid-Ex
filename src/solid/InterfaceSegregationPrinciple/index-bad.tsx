import { FC } from "react"

interface IPost {
  title: string
  author: {
    name: string
    age: number
  },
  createdAt: Date
}

interface ITitle {
 post: IPost
}

interface IDate {
  post: IPost
}

const Title: FC<ITitle> = ({ post }) => {
  return <h1>{post.title}</h1>
}

const Date: FC<IDate> = ({ post }) => {
  return <p>{`${post.createdAt}`}</p>
}

// Container
export const Post: FC<IPost> = (post) => {
  return (
    <div className="card">
      <Title post={post} />
      <p>Author: {post.author.name}</p>
      <Date post={post} />
    </div>
  )
}

