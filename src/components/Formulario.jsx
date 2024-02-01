// Formulario.jsx
import React, { useState } from 'react';

const Formulario = ({ onAgregarColaborador }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleAgregar = () => {
        // Validar campos antes de agregar
        if (!nombre || !correo || !edad || !cargo || !telefono) {
            // Mostrar mensaje de error
            return;
        }

        // Llamar a la función del padre para agregar el colaborador
        onAgregarColaborador({ nombre, correo, edad, cargo, telefono });

        // Limpiar los campos después de agregar
        setNombre('');
        setCorreo('');
        setEdad('');
        setCargo('');
        setTelefono('');
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Agregar colaborador</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="edad" className="form-label">Edad</label>
                        <input type="number" className="form-control" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cargo" className="form-label">Cargo</label>
                        <input type="text" className="form-control" id="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="tel" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleAgregar}>Agregar</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
