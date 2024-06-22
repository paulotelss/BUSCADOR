
import { FiSearch } from 'react-icons/fi'
import './styles.css';
import { useState } from 'react';
import api from './services/api';
function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  async function handleSearch() {
    //80020-010/json/
    if(input === '') {
      alert('Preencha o campo CEP')
      return;
    }
    try {

      const response = await api.get(`/ws/${input}/json/`);

      setCep(response.data);

      setInput("");

    } catch {

      alert('Erro ao buscar CEP')
      setInput("")
    }
  }
  return (
    <div className="container">
      <h1 className="title">Buscar CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="00000-000"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>

      </div>
      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Localidade: {cep.localidade}</span>
          <span>UF: {cep.uf}</span>
        </main>
      )}

      <footer className='footer'>
        <span>Created by Paulo</span>
      </footer>
      
    </div>
  );
}

export default App;
