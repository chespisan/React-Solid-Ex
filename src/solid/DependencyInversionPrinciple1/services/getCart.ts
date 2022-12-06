import axios from "axios"
import { ICart } from "../interfaces/cart"


export const getCart = async(): Promise<ICart[] | undefined> => {
  try {
    const res = await axios.get<ICart[]>('my-url-endpoint')
    return res.data
  } catch (error) {
    console.log('error: ', error)
  }
}