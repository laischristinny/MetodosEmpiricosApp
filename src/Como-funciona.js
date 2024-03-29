import React from 'react';
import './Style-Como-Funciona.css';
import { Link } from 'react-router-dom';

const ComoFunciona = () => {
  return (
    <div className="container">
      <h1>Como Funciona?</h1>
      <p>Para cada pergunta, sua escolha soma pontos em cada tipo de método. Ao final do questionário, o método com maior pontuação é aquele que mais se adequa ao seu projeto.</p>
      <div className="steps">
        <div className="step1">
          <h2>Estudo de Caso</h2>
          <p>Se a sua maior pontuação foi o método empírico ‘Estudo de Caso':
            <p>Vantagens: compreensão profunda e contextualizada; gera insights; trata fenômenos complexos.</p>
            <p>Desvantagens: demanda tempo e recursos; viés do pesquisador.</p>
            </p>
        </div>
        <div className="step2">
          <h2>Experimento Controlado</h2>
          <p>Se a sua maior pontuação foi o método empírico ‘Experimento Controlado’:
            <p>Vantagens: resultados replicáveis; controle de variáveis; resultado imediato.</p>
            <p>Desvantagens: pode não refletir o mundo real; eticamente e logisticamente desafiador.</p></p>
        </div>
        <div className="step3">
          <h2>Etnografia</h2>
          <p>Se a sua maior pontuação foi o método empírico ‘Etnografia’:
            <p>Vantagens: explora conceitos culturais e sociais; gera insights de ambientes naturais.</p>
            <p>Desvantagens: demorado e intenso; generalização limitada.</p></p>
        </div>
      </div>
      

      <div className="container">
      <div className="steps">
        <div className="step4">
          <h2>Pesquisa-ação (Action Research)</h2>
          <p>Se a sua maior pontuação foi o método empírico: ‘Experimento Controlado’
            <p>Vantagens: integra pesquisa e ação prática; resultados aplicáveis ao contexto.</p>
            <p>Desvantagens: nem sempre adequado à teorização</p></p>
        </div>
        <div className="step5">
          <h2>Pesquisa (Survey Research)</h2>
          <p>Se a sua maior pontuação foi o método empírico: ‘Experimento Controlado’.
            <p>Vantagens: coleta dados em grandes amostras; resultados podem ser generalizáveis; pode ser realizado em curto período de tempo.</p>
            <p>Desvantagens: baixa complexidade; menos aprofundado do que outros métodos; sofre com baixa taxa de resposta.</p></p>
        </div>
    </div>
    <div className="redirect-button">
        <Link to="/"> 
          <button className="inicial-button">Ir para a Página Inicial</button>
        </Link>
    </div>
    </div>
    </div>
  );
}

export default ComoFunciona;
