import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ComoFunciona from './Como-funciona';
import LogicApp from './Pontuacao';

const ComoFuncionaButton = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <Link to="/como-funciona">
        <button className="botao">Como funciona?</button>
      </Link>
    );
  }

  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="titulo">Algoritmo para a escolha de métodos empíricos</h1>
        <ComoFuncionaButton />
        <Routes>
          <Route path="/" element={<LogicApp />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
