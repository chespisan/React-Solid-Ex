import { useContext, useEffect, useState } from 'react'

import { FetchContext } from './context/FetchContext'


export const CartPage = () => {
  const fetchDataFromContext = useContext(FetchContext)
  const [data, setData] = useState(null)

  const handleGetCart = async() => {
    try {
      const data = await fetchDataFromContext()
      setData(data)
    } catch (error) {
      console.log('err: ', error)
    }
    
  }

  useEffect(() => {
    handleGetCart()
  }, [])

  return (
    <div>{data}</div>
  )
}
