import './App.css';
import LogicApp from './Pontuacao';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ComoFunciona from './Como-funciona';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="titulo">Algoritmo para a escolha de métodos empíricos</h1>
        <Link to="/como-funciona"> 
          <button className="botao">Como funciona?</button>
        </Link>
        <Routes>
          <Route path="/" element={<LogicApp />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
