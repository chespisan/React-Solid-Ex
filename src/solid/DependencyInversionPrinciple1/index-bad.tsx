import { useState, useEffect } from "react"
import { getCart } from "./services/getCart"

// export const CartPage = () => {
//   const [data, setData] = useState<any>()

//   const handleGetCart = async() => {
//     try {
//       const res = await getCart()
//       setData(res)
//     } catch (error) {
//       console.log('error: ', error)
//     }
//   }

//   useEffect(() => {
//     handleGetCart()
//   }, [])

//   if (!data) {
//     return 'loading...'
//   }

//   return <div>{data}</div>
// }

export const CartPage = () => {
  const [data, setData] = useState<any>()

  const handleGetCart = async() => {
    try {
      const res = await getCart()
      setData(res)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  useEffect(() => {
    handleGetCart()
  }, [])

  if (!data) {
    return 'loading...'
  }

  return <div>{data}</div>
}