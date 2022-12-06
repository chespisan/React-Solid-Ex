import { ICart } from "../interfaces/cart"
import { createCart } from "../services/createCart"
import { getCart } from "../services/getCart"
import { removeCart } from "../services/removeCart"

export const useCartReducer = () => {

  const getListCart = async(): Promise<ICart[] | undefined> => {
    const list = await getCart()
    return list
  }

  const createNewCart = async () => {
    const newCart = await createCart()
    return newCart
  }

  const removeCurrentCart = async() => {
    await removeCart()
  }

  return {
    getListCart,
    createNewCart,
    removeCurrentCart,
  }

} 