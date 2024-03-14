import React, { useState } from "react";
import { Link } from "react-router-dom";


function Personajes({ personajes }) {
    const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

    const handleClickPersonaje = (personaje) => {
        setPersonajeSeleccionado(personaje);
    };

    return (
        <div className="row">
            {personajes.map((personaje) => (
                <div key={personaje.id} className="col-md-4 col-sm-6 mb-4">
                    <div className="row justify-content-between p-3">
                        <img src={personaje.image} alt={personaje.name} />
                        <div className="text-start py-3">
                            <h5 className="clickable-name" onClick={() => handleClickPersonaje(personaje)}>{personaje.name}</h5>
                        </div>
                    </div>
                </div>
            ))}
            {personajeSeleccionado && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={() => setPersonajeSeleccionado(null)}></button>
                        </div>
                        <div className="modal-body text-center">
                            <img src={personajeSeleccionado.image} alt={personajeSeleccionado.name} />
                            <h2 className="mt-3">{personajeSeleccionado.name}</h2>
                            <p>Gender: {personajeSeleccionado.gender}</p>
                            <p>Species: {personajeSeleccionado.species}</p>
                            <Link to={`/personajes/${personajeSeleccionado.id}`} className="btn btn-cartoon-green">Ver Detalles</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Personajes;