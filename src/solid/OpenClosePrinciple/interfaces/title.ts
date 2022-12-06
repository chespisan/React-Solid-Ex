// case bad
export interface ITitle {
  title: string
  type: string
  buttonText: string
  onClick?: () => void
  children: JSX.Element
}

// case better
export interface ITitleProps {
  title: string
  children: JSX.Element
}
