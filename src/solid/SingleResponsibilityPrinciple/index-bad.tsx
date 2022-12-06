import { useEffect, useState } from "react"
import axios from 'axios'

export interface ITodo {
  id: number
  userId: number
  title: string
  completed: boolean
}

export const TodoList = () => {
  const [data, setData] = useState<ITodo[]>([])
  const [isFetching, setIsFetching] = useState(true)

  const getTodo = async() => {
    try {
      const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      setData(res.data)
      setIsFetching(false)
    } catch (error) {
      setIsFetching(false)
      console.log('error: ', error);
    }
  }

  useEffect(() => {
    getTodo()
  }, [])

  if(isFetching) {
    return <p>.....loading</p>
  }

  return (
    <div>
      <ul>
        {data.map(todo => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <span>{todo.userId}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}