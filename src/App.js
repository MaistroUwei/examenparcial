import React, { useState } from 'react';
import './App.css';

function App() {
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    apodo: ""
  });
  const botonActivo = (cliente.nombre !== undefined && cliente.nombre !=="") && (cliente.apellido !== undefined && cliente.apellido !=="") && (cliente.apodo !== undefined && cliente.apodo !=="");
  const [formularioEnv, setFormEnv] = useState(false);

  const manejarForm = (event) => {
    const {name, value}  = event.target;
    setCliente(prevCliente => ({
      ...prevCliente,
      [name]: value
    })) 
  }

  const enviar = (event) => {
    event.preventDefault();
    setFormEnv(true);
    // estado
  }

  const limpiar = (event) =>{
    setCliente({nombre:"",apellido:"",apodo:""})
    setFormEnv(false);
  }

  return (
    <div className="App">
      <main>
        <form onSubmit={enviar}>
          <div>
            <label htmlFor=''>Nombre:</label>
            <input type="text" value={cliente.nombre} name="nombre" onChange={manejarForm}/>
          </div>
          <div>
            <label htmlFor=''>Apellido:</label>
            <input type="text" value={cliente.apellido} name="apellido" onChange={manejarForm}/>
          </div>
          <div>
            <label htmlFor=''>Apodo:</label>
            <input type="text" value={cliente.apodo} name="apodo" onChange={manejarForm}/>
          </div>
          <button type = "submit" disabled={!botonActivo}>Enviar</button>
          <button onClick={limpiar}>Limpiar</button>
        </form>
        {formularioEnv && (
          <label><p>Datos: {`${cliente.nombre}`} {`${cliente.apellido}`} {`${cliente.apodo}`}</p></label>
        )}
      </main>
    </div>
  );
}

export default App;
