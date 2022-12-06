import { Title } from "./components/Title"

export const Home = () => {

  const handleClick = () => {

  }

  return (
    <div>
      <div>
        <Title title='Hey title!'>
          <button onClick={handleClick}>
            hi title
          </button>
        </Title>
      </div>
    </div>
  )
}