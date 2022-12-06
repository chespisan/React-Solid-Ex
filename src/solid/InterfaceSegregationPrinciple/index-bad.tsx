import { FC } from "react"

interface IPost {
  title: string
  author: {
    name: string
    age: number
  },
  createdAt: Date
}

interface IPostTitle {
 post: IPost
}

interface IPostDate {
  post: IPost
}

const PostTitle: FC<IPostTitle> = ({ post }) => {
  return <h1>{post.title}</h1>
}

const PostDate: FC<IPostDate> = ({ post }) => {
  return <p>{`${post.createdAt}`}</p>
}

export const Post: FC<IPost> = (post) => {
  return (
    <div>
      <PostTitle post={post} />
      <p>Author: {post.author.name}</p>
      <PostDate post={post} />
    </div>
  )
}

