import { useEffect, useState } from "react";
import getCharacter from "../../services/characterServices";
import CharacterCard from "../../Components/CharacterCard";
import CharacterList from "../../Components/CharacterList";
import SearchBar from "../../Components/SearchBar";

const Home = () => {
  const [personajes, setPersonajes] = useState([]);

  const getInitialData = async () => {
    try {
      const { data } = await getCharacter();
      const respuesta = data.data;
      setPersonajes(respuesta);
    } catch (error) {
      alert("Error en la API");
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
    <SearchBar />
      <CharacterList>
        {personajes.map((personaje, index) => (
          <CharacterCard key={personaje.id} personaje={personaje} />
        ))}
      </CharacterList>
    </>
  );
};

export default Home;
