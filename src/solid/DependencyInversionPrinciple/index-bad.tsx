import axios from "axios"
import { useState, useEffect } from "react"

export const CartPage = () => {
  const [data, setData] = useState(null)

  const getCart = async() => await axios.get('my-url-endpoint')

  const handleGetCart = async() => {
    try {
      const res = await getCart()
      setData(res.data)
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