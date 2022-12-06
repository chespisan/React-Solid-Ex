import { FC } from "react"
import { PostDate } from "./components/PostDate"
import { PostTitle } from "./components/PostTitle"
import { IPost } from "./interfaces/post"

export const Post: FC<IPost> = (post) => {
  return (
    <div>
      <PostTitle title={post.title} />
      <p>Author: {post.author.name}</p>
      <PostDate createdAt={post.createdAt} />
    </div>
  )
}

