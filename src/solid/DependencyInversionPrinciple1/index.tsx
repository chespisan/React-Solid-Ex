import { useContext, useEffect, useState } from 'react'
import { CartContext } from './context/provider'
import { ICart } from './interfaces/cart'
import { ICartReducer } from './interfaces/cartReducer'


export const CartPage = () => {
  const [listCart, setListCart] = useState<ICart[]>()
  const { getListCart } = useContext<ICartReducer>(CartContext)

  const handleGetCarts = async(): Promise<void> => {
    try {
      const listCarts: ICart[] = await getListCart()
      setListCart(listCarts)
    } catch (error) {
      console.log('err: ', error)
    }
  }

  useEffect(() => {
    handleGetCarts()
  }, [])

  return (
    <div>
      { listCart?.map(cart => (
        <li>{ cart.id }</li>
      ))}
    </div>
  )
}
