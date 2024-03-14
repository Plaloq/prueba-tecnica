import React from "react";

function Personajes({ personajes }) {
    return (
        <div className="row">
            {personajes.map((personaje) => (
                <div key={personaje.id} className="col-md-4 col-sm-6 mb-4">
                    <div className="row justify-content-between p-3">
                        <img src={personaje.image} alt={personaje.name} />
                        <div className="text-start py-3">
                            <h5>{personaje.name}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Personajes;