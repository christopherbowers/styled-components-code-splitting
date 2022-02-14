import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dogs() {

  const [image, setImage] = useState('')

  useEffect(() => {
    const res = axios.get('https://dog.ceo/api/breeds/image/random')
    setImage(res.data)
  },[])

  console.log(image)

  return (
    <>
      <img src="" alt=""/>
    </>
  )
}
