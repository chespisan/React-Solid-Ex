import { useFetchTodo } from "./hooks/useFetchTodo"


export const TodoList = () => {
  const { isFetching, todo } = useFetchTodo()

  if(isFetching) {
    return <p>.....loading</p>
  }

  return (
    <div>
      <ul>
        {todo.map(todo => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <span>{todo.userId}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}