import React, { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dadosUsuario = { nome, email };
    try {
      const response = await fetch('http://localhost:5000/api/usuario', {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosUsuario)
      });
      const result = await response.json();
      setResposta(result.message);
      setNome('');
      setEmail('');
    } catch (error) {
      console.error('Erro:', error);
      setResposta('Erro ao enviar os dados. Verifique se o servidor está rodando.');
    }
  };

  return (
   <div className= "App" style={{ padding: '50px' }}>
      <h1> Cadastro Simples </h1>
      <form onSubmit={handleSubmit}>
      <div>
        <input
       type="text"
       placeholder="Nome"
       value={nome}
       onChange={(e) => setNome(e.target.value)}
        required
        />
      </div>
      <br /> 
      <div>
        <input
       type="email"
       placeholder="Email"
       value={email}
      onChange={(e) => setEmail(e.target.value)}
        required
        />
      </div>
      <br />
      <button type= "submit">Enviar para o Servidor</button>
      </form>
      {resposta && <p><strong>Status:</strong> {resposta}</p>}
    </div>
  );
}

export default App;