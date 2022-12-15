import { FC } from "react"
import { Date } from "./components/PostDate"
import { Title } from "./components/PostTitle"
import { IPost } from "./interfaces/post"

export const Post: FC<IPost> = (post) => {
  return (
    <div>
      <Title title={post.title} />
      <p>Author: {post.author.name}</p>
      <Date createdAt={post.createdAt} />
    </div>
  )
}

