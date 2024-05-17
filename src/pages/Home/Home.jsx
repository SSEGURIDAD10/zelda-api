import { useEffect, useState } from "react";
import getCharacter from "../../services/characterServices";

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
        <div key={personaje.id}>
          <img src={personaje.image} alt={personaje.name} />
          <p key={personaje.id}>{personaje.name}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
