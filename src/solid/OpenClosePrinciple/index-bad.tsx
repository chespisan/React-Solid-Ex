import { FC } from 'react'

export interface ITitle {
  title: string
  type: string
  buttonText: string
  onClick?: () => void
}

export const Title: FC<ITitle> = ({ title, type, buttonText, onClick }) => {
  return (
    <div>
      <h1>{title}</h1>

      {type === 'withLinkButton' && (
        <button onClick={onClick}>
          {buttonText}
        </button>
      )}

      {type === 'withNormalButton' && (
        <button onClick={onClick}>
          {buttonText}
        </button>
      )}

    </div>
  )
}
