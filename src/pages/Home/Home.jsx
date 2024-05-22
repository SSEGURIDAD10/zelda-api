import { useEffect, useState } from "react";
import getCharacter from "../../services/characterServices";
import CharacterCard from "../../Components/CharacterCard";
import CharacterList from "../../Components/CharacterList";
import SearchBar from "../../Components/SearchBar";

const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const getInitialData = async () => {
    try {
      const { data } = await getCharacter(busqueda);
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
    <div className="navbar bg-body-tertiary justify-content-evenly">
    <SearchBar text={busqueda} setText={setBusqueda} search={getInitialData} />
      <CharacterList>
        {personajes.map((personaje, index) => (
          <CharacterCard key={personaje.id} personaje={personaje} />
        ))}
      </CharacterList>
    </div>
  );
};

export default Home;
