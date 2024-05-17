import { useEffect } from "react"
import getCharacter from "../../services/characterServices"

const Home = () => {

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
    <div>Home</div>
  )
}

export default Home