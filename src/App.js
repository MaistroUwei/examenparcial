import React, { useState } from 'react';
import './App.css';

function App() {
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    apodo: ""
  });

  const manejarForm = (event) => {
    const {name, value}  = event.target;
    setCliente(prevCliente => ({
      ...prevCliente,
      [name]: value
    })) 
  }
  return (
    <div className="App">
      <form>
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
      </form>
    </div>
  );
}

export default App;
