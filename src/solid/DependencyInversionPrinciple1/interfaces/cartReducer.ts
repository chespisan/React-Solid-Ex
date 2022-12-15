import { ICart } from "./cart"

export interface ICartReducer {
  getListCart(): Promise<ICart[]>
  createNewCart(): Promise<ICart[]>
  removeCurrentCart(): Promise<void>
}