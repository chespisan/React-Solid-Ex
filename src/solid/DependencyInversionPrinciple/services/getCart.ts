import axios from "axios"

export const getCart = async() => {
  try {
    const res = await axios.get('my-url-endpoint')
    return res.data
  } catch (error) {
    console.log('error: ', error)
  }
}