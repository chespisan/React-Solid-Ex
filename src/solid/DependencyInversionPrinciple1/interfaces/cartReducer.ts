import { ICart } from "./cart"

export interface ICartReducer {
  getListCart(): Promise<ICart[] | undefined>
  createNewCart(): Promise<ICart[]>
  removeCurrentCart(): Promise<void>
}