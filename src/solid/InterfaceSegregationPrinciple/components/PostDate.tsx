import { FC } from "react"
import { IPostDate } from "../interfaces/postDate"

export const PostDate: FC<IPostDate> = ({ createdAt }) => {
  return <p>{`${createdAt}`}</p>
}