import { FC } from "react"
import { ITitle } from "../interfaces/postTitle"

export const Title: FC<ITitle> = ({ title }) => {
  return <h1>{title}</h1>
}