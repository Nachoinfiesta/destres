// Buscador.jsx
import React, { useState } from 'react';

const Buscador = ({ onBuscar }) => {
    const [busqueda, setBusqueda] = useState('');

    const handleBuscar = () => {
        // Llamar a la función del padre para realizar la búsqueda
        onBuscar(busqueda);
    };

    return (
        <div className="mb-3">
            <label htmlFor="busqueda" className="form-label">Busca un colaborador</label>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    id="busqueda"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <button className="btn btn-outline-secondary" type="button" onClick={handleBuscar}>Buscar</button>
            </div>
        </div>
    );
};

export default Buscador;
