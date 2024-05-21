import { useEffect, useState } from "react";
import getCharacter from "../../services/characterServices";
import CharacterCard from "../../Components/CharacterCard";

const Home = () => {
  const [personajes, setPersonajes] = useState([]);

  const getInitialData = async () => {
    try {
      const { data } = await getCharacter();
      const respuesta = data.data;
      setPersonajes(respuesta);
      console.log(respuesta);
    } catch (error) {
      alert("Error en la API");
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      {personajes.map((personaje, index) => (
        <CharacterCard key={personaje.id} personaje={personaje} />
      ))}
    </>
  );
};

export default Home;
