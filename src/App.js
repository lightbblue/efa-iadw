import { useState } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Formulario de contacto</h1>
      </header>

      <main>
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            rows="4"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />

          <button type="submit">Enviar</button>
        </form>

        {enviado && (
          <p className="confirmacion">
            ¡Gracias, {nombre}! Recibimos tu mensaje.
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
