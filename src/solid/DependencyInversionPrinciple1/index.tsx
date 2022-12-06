import { useContext, useEffect, useState } from 'react'
import { CartContext } from './context/provider'
import { ICart } from './interfaces/cart'


export const CartPage = () => {
  const { getListCart } = useContext(CartContext)
  const [data, setData] = useState<ICart[]>()

  const handleGetCart = async() => {
    try {
      const data = await getListCart()
      setData(data)
    } catch (error) {
      console.log('err: ', error)
    }
  }

  useEffect(() => {
    handleGetCart()
  }, [])

  return (
    <div>
      { data?.map(cart => (
        <li>{ cart.id }</li>
      ))}
    </div>
  )
}
