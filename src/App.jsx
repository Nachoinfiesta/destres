// App.jsx
import React, { useState } from 'react';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './data/BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

  const agregarColaborador = (nuevoColaborador) => {
    // Lógica para agregar el nuevoColaborador a la lista
    setColaboradores([...colaboradores, { id: String(colaboradores.length + 1), ...nuevoColaborador }]);

    // Mostrar mensaje de éxito
    setAlerta({ mensaje: 'Colaborador agregado exitosamente', tipo: 'success' });
  };

  const buscarColaboradores = (busqueda) => {
    // Lógica para filtrar colaboradores según la búsqueda
    const colaboradoresFiltrados = BaseColaboradores.filter((colaborador) => {
      const valores = Object.values(colaborador).map(value => value.toLowerCase());
      return valores.some(val => val.includes(busqueda.toLowerCase()));
    });
    setColaboradores(colaboradoresFiltrados);
  };

  return (
    <div className="container">
      <h1>Lista de colaboradores</h1>
      <Buscador onBuscar={buscarColaboradores} />
      <Listado colaboradores={colaboradores} />
      <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />
      <Formulario onAgregarColaborador={agregarColaborador} />
    </div>
  );
};

export default App;
