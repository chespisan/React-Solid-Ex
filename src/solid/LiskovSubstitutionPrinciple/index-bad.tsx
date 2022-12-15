import { FC } from "react"
import { IButton } from "./interfaces/button"
import { IButtonBad } from "./interfaces/button-bad"


export const Button: FC<IButton> = ({ children, color, size }) => {
  return <button style={{ color, fontSize: size }}>{children}</button>
}

// export const ButtonRed: FC<IButtonBad>  = ({ children, isBig }) => {
//   return <Button color={'red'} size={isBig ? 'XL' : 'SM'} >{children}</Button>
// }

// Other file
export const HomePage = () => {
  return (
    <Button color="blue" size='large' >
      <p>Ingresar</p>
    </Button>
  )
}
