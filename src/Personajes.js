import React from "react";

function Personajes({ personajes }) {
    return (
        <div>
            <h1>Listado de personajes</h1>
            <ul>
                {personajes.map((personaje) => (
                    <li key={ personaje.id }>
                         {personaje.name }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Personajes;