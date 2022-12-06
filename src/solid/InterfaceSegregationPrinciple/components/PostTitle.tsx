import { FC } from "react"
import { IPostTitle } from "../interfaces/postTitle"

export const PostTitle: FC<IPostTitle> = ({ title }) => {
  return <h1>{title}</h1>
}