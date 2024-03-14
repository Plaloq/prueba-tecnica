import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetallePersonaje({ match }) {
    const [personaje, setPersonaje] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const obtenerPersonaje = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setPersonaje(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        obtenerPersonaje();
    }, [id]);

    if (!personaje) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="row text-center">
            <img src={personaje.image} alt={personaje.name} />
            <h1>{personaje.name}</h1>
            <p>Género: {personaje.gender}</p>
            <p>Especie: {personaje.species}</p>
            <p>Estado: {personaje.status}</p>
            <p>Origen: {personaje.origin.name}</p>
            <p>Última ubicación: {personaje.location.name}</p>
        </div>
    )
}

export default DetallePersonaje;