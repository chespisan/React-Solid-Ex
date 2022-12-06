import { FC } from "react"

import { IButton } from "../interfaces/button"

export const Button: FC<IButton> = ({ children, color, size }) => {
  return <button style={{ color, fontSize: size }}>{children}</button>
}