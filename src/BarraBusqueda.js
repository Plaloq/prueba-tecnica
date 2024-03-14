import React, { useState } from "react";
import './App.css';


function BarraBusqueda({ onSearch }) {
    const [searchCharacter, setSearchCharacter] = useState('');

    const handleChange = (event) => {
        setSearchCharacter(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchCharacter);
    };

    return (
        <div >
            <form onSubmit={handleSubmit} className="my-5 pe-3">
                <div className="input-group d-flex justify-content-end">
                    <input
                        style={{ border: 'none' }}
                        type="text"
                        value={searchCharacter}
                        onChange={handleChange}
                        placeholder=" Search Characters"
                    />
                    <div className="input-group-prepend">
                        <button type="submit" className="btn btn-cartoon-green">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BarraBusqueda;