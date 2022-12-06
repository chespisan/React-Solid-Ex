import { FC } from "react"
import { IButton } from "./interfaces/button"


export const Button: FC<IButton> = ({ children, color, size }: any) => {
  return <button style={{ color, fontSize: size }}>{children}</button>
}

export const ButtonRed  = ({ children, color, isBig }: any) => {
  return <Button color={color} size={isBig ? 'XL' : 'SM'} >{children}</Button>
}


export const HomePage = () => {
  return (
    <Button color="blue" isBig={true} >
      <p>Ingresar</p>
    </Button>
  )
}
