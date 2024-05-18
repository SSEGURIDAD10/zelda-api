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
        <div key={personaje.id} className="card mb-3" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={personaje.image} className="img-fluid rounded-start" alt={personaje.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
                <p className="card-text">{personaje.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{personaje.common_locations} || {personaje.category}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
