import { createContext, FC } from "react"
import { useCartReducer } from "../hooks/useCartReducer"
import { ICartProvider } from "../interfaces/cartProvider"
import { ICartReducer } from "../interfaces/cartReducer"


export const CartContext = createContext<ICartReducer>({
  getListCart: async() => [],
  createNewCart: async() => [],
  removeCurrentCart: async() => {},
})


export const CartProvider: FC<ICartProvider> = ({ children }) => {
  const initialCartState = useCartReducer()

  return (
    <CartContext.Provider value={initialCartState} >
      { children }
    </CartContext.Provider>
  )
}