import './characterCard.css'

const CharacterCard = (props) => {
  const { personaje } = props;
  return (
    <section className="card mb-3" style={{ maxWidth: 530, backgroundColor: '#e1e1e1'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={personaje.image}
            className="img-fluid rounded-start"
            alt={personaje.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{personaje.name}</h5>
            <p className="card-text">
              {personaje.description}
            </p>
            <p className="card-text mb-2 d-flex">
              <span className="dot-status" style={{
                background:
                personaje.category === "monsters"
                ? "red"
                : personaje.category === "treasure"
                ? "gold"
                : personaje.category === "materials"
                ? "lightgreen"
                : personaje.category === "equipment"
                ? "skyblue"
                : "white"
              }}/>
              <small className="text-body-secondary">
                {personaje.common_locations} || {personaje.category}
              </small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterCard;
