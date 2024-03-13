import React, {useEffect, useState} from "react";
import Personajes from './Personajes';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [personajes, setPersonajes] = useState([]);

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
  return (
    <div className="App">
      { loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Personajes personajes={ personajes } />
      )}
    </div>
  );
}

export default App;
