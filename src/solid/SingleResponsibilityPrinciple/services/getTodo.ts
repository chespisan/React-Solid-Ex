import axios from "axios"

import { ITodo } from "../interfaces/todo"

export const getTodo = async() => {
  try {
    const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
    return res.data
  } catch (error) {
    console.log('error: ', error);
  }
}