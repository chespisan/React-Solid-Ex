import { CartProvider } from './solid/DependencyInversionPrinciple1/context/provider'
import { TodoList } from './solid/SingleResponsibilityPrinciple'

export const App = () => {
  return (
    <CartProvider>
      <TodoList />
    </CartProvider>
  )
}
