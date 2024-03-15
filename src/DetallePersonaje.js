import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function DetallePersonaje({ match }) {
    const [personaje, setPersonaje] = useState(null);
    const [episodios, setEpisodios] = useState([]);
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

    useEffect(() => {
        if (personaje) {
            const obtenerEpisodios = async () => {
                try {
                    const episodiosData = [];
                    for (const url of personaje.episode) {
                        const response = await fetch(url);
                        const episodioData = await response.json();
                        episodiosData.push(episodioData);
                    }
                    setEpisodios(episodiosData);
                } catch (error) {
                    setError(error.message);
                }
            }
            obtenerEpisodios();
        }
    });

    if (!personaje) {
        return <p className="pt-5 text-center">Cargando...</p>;
    }

    return (
        <div className="pt-5">
            <Link to="/" className="btn btn-secundary">
                &#8592; Back
            </Link>
            <div className="row mt-5">
                <div className="col-sm-5">
                    <img src={personaje.image} alt={personaje.name} className="w-100" />
                </div>
                <div className="col-sm-7">
                    <h1>{personaje.name}</h1>
                    <p>Género: {personaje.gender}</p>
                    <p>Especie: {personaje.species}</p>
                    <p>Estado: {personaje.status}</p>
                    <p>Origen: {personaje.origin.name}</p>
                    <p>Última ubicación: {personaje.location.name}</p>
                </div>
            </div>
            <div className="row pt-5">
                <h3 className="text-center">EPISODES</h3>
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Season and Episode</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodios.map(episodio => (
                            <tr key={episodio.id}>
                                <td>{episodio.name}</td>
                                <td>{episodio.episode}</td>
                                <td>{episodio.air_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DetallePersonaje;