import { FC } from "react"

import { IButton } from "../interfaces/button"
import { Button } from "./Button"

export const ButtonRed: FC<IButton> = ({ children, color, size }) => {
  return <Button color={color} size={size} >{children}</Button>
}