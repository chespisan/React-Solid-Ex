import { useState, useEffect } from "react"

import { ITodo } from "../interfaces/todo"
import { getTodo } from "../services/getTodo"

export const useFetchTodo = () => {
  const [todo, setTodo] = useState<ITodo[]>([])
  const [isFetching, setIsFetching] = useState(true)

  const handleGetTodo = async() => {
    try {
      const data = await getTodo()
      setTodo(data!)
      setIsFetching(false)
    } catch (error) {
      setIsFetching(false)
      console.log('err: ', error)
    }
  }

  useEffect(() => {
    handleGetTodo()
  }, [])

  return { todo, isFetching }
}