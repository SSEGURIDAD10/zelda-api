import { useEffect, useState } from "react"
import getCharacter from "../../services/characterServices"

const Home = () => {

  const [personajes, setPersonajes] = useState([])

  const getInitialData = async() => {
    try {
      const {data} = await getCharacter()
      console.log(data)
    } catch (error) {
      alert('Error en la API')
    }
  }

  useEffect(() => {
    getInitialData()
  }, [])

  return (
    <>
    {personajes.map((personaje, index) => (<p key={index}>Personaje</p>))}
    </>
  )
}

export default Home