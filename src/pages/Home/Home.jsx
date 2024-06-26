import { useEffect, useState } from "react";
import getCharacter from "../../services/characterServices";
import CharacterCard from "../../Components/CharacterCard";
import CharacterList from "../../Components/CharacterList";
import SearchBar from "../../Components/SearchBar";
import Pagination from "../../Components/Pagination";

// ^^^^^^IMPORT'S^^^^^^IMPORT'S^^^^^^IMPORT'S^^^^^^IMPORT'S^^^^^^

const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);

  const getInitialData = async () => {
    try {
      const { data } = await getCharacter(busqueda, page);
      const respuesta = data.data;
      setPersonajes(respuesta);
    } catch (error) {
      <h1>Error</h1>
    }
  };

  useEffect(() => {
    getInitialData(busqueda);
  }, []);

  return (
    <div className="navbar bg-body-tertiary justify-content-evenly">
      <SearchBar
        text={busqueda}
        setText={setBusqueda}
        search={getInitialData}
        personajes={personajes}
        setPersonajes={setPersonajes}
      />
      <Pagination page={page} setPage={setPage} />
      <CharacterList>
        {personajes.map((personaje, index) => (
          <CharacterCard key={personaje.id} personaje={personaje} />
        ))}
      </CharacterList>
    </div>
  );
};

export default Home;
