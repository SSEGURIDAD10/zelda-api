import React from "react";

const SearchBar = (props) => {
  const {text, setText, search, personajes, setPersonajes} = props

  const handleSubmit = (e) => {
    e.preventDefault() //esto evita que la pagina cargue nuevamente
    search()
  }

  const handleInputChange = (e) => {
    filtrar(e.target.value);
    setText(e.target.value);
    search();
  };

  const filtrar=(terminoBusqueda)=>{
    let resultadoBusqueda = personajes.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento;
      }
    });
    setPersonajes(resultadoBusqueda)
  }

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <form onSubmit={handleSubmit} className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="search-imput"
            name="search"
            value={text}
            // onChange={(e) => setText(e.target.value)}
            onChange={handleInputChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
