import { FC } from "react"
import { IDate } from "../interfaces/postDate"

export const Date: FC<IDate> = ({ createdAt }) => {
  return <p>{`${createdAt}`}</p>
}