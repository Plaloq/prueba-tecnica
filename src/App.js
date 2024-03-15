import React, { useEffect, useState } from "react";
import BarraBusqueda from "./BarraBusqueda";
import Personajes from './Personajes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetallePersonaje from "./DetallePersonaje";
import Navbar from "./Navbar";

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
    <Router>
      <div className="App">
        <Navbar />
        <div className="container pt-5">
          <Routes>
            <Route path="/" element={<>
              <h1 className="pt-5 titulo">Rick and Morty <br></br> Characters Wiki</h1>
              <BarraBusqueda onSearch={setBusqueda} />
              <Personajes personajes={filtroPersonajes} />
            </>} />
            <Route path="/personajes/:id" element={<DetallePersonaje />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
