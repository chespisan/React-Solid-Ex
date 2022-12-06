import { FC } from "react"
import { ITitleProps } from "../interfaces/title"

export const Title: FC<ITitleProps> = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}