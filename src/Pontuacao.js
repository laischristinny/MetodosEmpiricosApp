import React, { useState } from 'react';

const Pergunta = ({ pergunta, opcoes, onResposta, explicacoes }) => {
    return (
      <div>
        <p>{pergunta}</p>
        {opcoes.map((opcao, index) => (
          <button style={{ marginRight: '8px' }}
            key={opcao}
            onClick={() => onResposta(opcao)}
            title={explicacoes[index]}
          >
            {opcao}
          </button>
        ))}
      </div>
    );
};

const Pontuacao = ({ pontuacao }) => {
  const listaPontuacao = Object.entries(pontuacao);

  return (
    <div>
      <h2>Pontuação</h2>
      <ul>
        {listaPontuacao.map(([metodo, pontos]) => (
          <li key={metodo}>
            {metodo}: {pontos}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState({
    'Estudo de Caso': 0,
    'Experimento Controlado': 0,
    'Etnografia': 0,
    'Pesquisa-ação': 0,
    'Pesquisa (Survey Research)': 0,
  });

  const [pesquisaConcluida, setPesquisaConcluida] = useState(false);

  const perguntas = [
    {
      pergunta: 'Natureza do Problema: A pesquisa busca explorar, descrever, explicar ou avaliar fenômenos?',
      opcoes: ['Natureza Descritiva', 'Natureza Explicativa','Natureza Exploratória','Natureza Avaliativa'],
      explicacoes: [
        'Abordagem ou característica de algo que se concentra na descrição detalhada e objetiva dos fenômenos ou objetos em questão',
        'Abordagem que busca entender e explicar as relações de causa e efeito entre variáveis ou fenômenos.',
        'Abordagem de pesquisa que é utilizada quando o objetivo principal é investigar um fenômeno ou problema de maneira mais ampla, sem a necessidade de estabelecer relações de causa e efeito.',
        'Abordagem de pesquisa ou análise que tem como objetivo principal avaliar e julgar a eficácia, o impacto ou a qualidade de determinado programa, política, intervenção ou projeto.'
      ],
    },
    {
      pergunta: 'Ambiente de Estudo: O estudo ocorrerá em um ambiente controlado ou no ambiente real de produção?',
      opcoes: ['Ambiente Controlado', 'Ambiente Real'],
      explicacoes: [
        'Condições do mundo real, não manipuladas ou controladas para fins de experimentação ou teste.',
        'Um ambiente controlado é criado quando os pesquisadores têm a capacidade de manipular e regular as condições experimentais de maneira precisa.'
      ],
    }
  ];

  const handleResposta = (opcao) => {
    const pontuacoesPorMetodo = {
      'Natureza Descritiva': {
        'Estudo de Caso': 4,
        'Experimento Controlado': 1,
        'Etnografia': 5,
        'Pesquisa-ação': 3,
        'Pesquisa (Survey Research)': 5,
      },
      'Natureza Explicativa': {
        'Estudo de Caso': 3,
        'Experimento Controlado': 2,
        'Etnografia': 3,
        'Pesquisa-ação': 4,
        'Pesquisa (Survey Research)': 4,
      },
      'Natureza Exploratória':{
        'Estudo de Caso': 2,
        'Experimento Controlado': 1,
        'Etnografia': 6,
        'Pesquisa-ação': 3,
        'Pesquisa (Survey Research)': 2,
      },
      'Ambiente Controlado':{
        'Estudo de Caso': 2,
        'Experimento Controlado': 5,
        'Etnografia': 1,
        'Pesquisa-ação': 3,
        'Pesquisa (Survey Research)': 5,
      },
    };

    setPontuacao((pontuacaoAtual) => {
      const novaPontuacao = { ...pontuacaoAtual };

      for (const metodo in pontuacoesPorMetodo[opcao]) {
        novaPontuacao[metodo] += pontuacoesPorMetodo[opcao][metodo];
      }

      return novaPontuacao;
    });

    if (perguntaAtual + 1 < perguntas.length) {
        setPerguntaAtual((perguntaAtual) => perguntaAtual + 1);
      } else {
        setPesquisaConcluida(true);
      }
  };

  const reiniciarPesquisa = () => {
    setPerguntaAtual(0);
    setPontuacao({
      'Estudo de Caso': 0,
      'Experimento Controlado': 0,
      Etnografia: 0,
      'Pesquisa-ação': 0,
      'Pesquisa (Survey Research)': 0,
    });
    setPesquisaConcluida(false);
  };

  const calcularMetodoVencedor = () => {
    let maiorPontuacao = -1;
    let metodosVencedores = [];

    for (const metodo in pontuacao) {
      if (pontuacao[metodo] > maiorPontuacao) {
        maiorPontuacao = pontuacao[metodo];
        metodosVencedores = [metodo];
      } else if (pontuacao[metodo] === maiorPontuacao) {
        metodosVencedores.push(metodo);
      }
    }

    return metodosVencedores;
  };
  
  if (!pesquisaConcluida) {
    return (
      <div>
        <Pergunta
          pergunta={perguntas[perguntaAtual].pergunta}
          opcoes={perguntas[perguntaAtual].opcoes}
          onResposta={handleResposta}
          explicacoes={perguntas[perguntaAtual].explicacoes}
        />
        <Pontuacao pontuacao={pontuacao} />
      </div>
    );
  } else {
    const metodosVencedores = calcularMetodoVencedor();

    return (
      <div>
        <h2>Fim da pesquisa!</h2>
        <Pontuacao pontuacao={pontuacao} />
        {metodosVencedores.length === 1 ? (
          <p>O método com a maior pontuação é: {metodosVencedores[0]}</p>
        ) : (
          <p>Houve um empate entre os métodos: {metodosVencedores.join(', ')}</p>
        )}
        <button onClick={reiniciarPesquisa}>Reiniciar Pesquisa</button>
      </div>
    );
  }
};

export default App;
