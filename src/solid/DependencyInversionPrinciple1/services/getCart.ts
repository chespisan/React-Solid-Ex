import axios from "axios"
import { ICart } from "../interfaces/cart"


export const getCart = async(): Promise<ICart[]> => {
    const res = await axios.get<ICart[]>('my-url-endpoint')
    return res.data
}