import React, { useEffect, useState } from "react";
import BarraBusqueda from "./BarraBusqueda";
import Personajes from './Personajes';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setPersonajes(data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    obtenerPersonajes();
  }, []);

  const filtroPersonajes = busqueda
    ? personajes.filter((personaje) =>
      personaje.name.toLowerCase().includes(busqueda.toLowerCase())
    )
    : personajes;

  return (
    <div className="App">
      <div className="container">
        <BarraBusqueda onSearch={setBusqueda} />
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <Personajes personajes={filtroPersonajes} />
        )}
      </div>
    </div>
  );
}

export default App;
