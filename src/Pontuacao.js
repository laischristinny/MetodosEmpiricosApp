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
      pergunta: '1- Natureza do Problema: A pesquisa busca explorar, descrever, explicar ou avaliar fenômenos?',
      opcoes: ['Natureza Descritiva', 'Natureza Explicativa','Natureza Exploratória','Natureza Avaliativa'],
      explicacoes: [
        'Abordagem ou característica de algo que se concentra na descrição detalhada e objetiva dos fenômenos ou objetos em questão',
        'Abordagem que busca entender e explicar as relações de causa e efeito entre variáveis ou fenômenos.',
        'Abordagem de pesquisa que é utilizada quando o objetivo principal é investigar um fenômeno ou problema de maneira mais ampla, sem a necessidade de estabelecer relações de causa e efeito.',
        'Abordagem de pesquisa ou análise que tem como objetivo principal avaliar e julgar a eficácia, o impacto ou a qualidade de determinado programa, política, intervenção ou projeto.'
      ],
    },
    {
      pergunta: '2- Ambiente de Estudo: O estudo ocorrerá em um ambiente controlado ou no ambiente real de produção?',
      opcoes: ['Ambiente Controlado', 'Ambiente Real'],
      explicacoes: [
        'Condições do mundo real, não manipuladas ou controladas para fins de experimentação ou teste.',
        'Um ambiente controlado é criado quando os pesquisadores têm a capacidade de manipular e regular as condições experimentais de maneira precisa.'
      ],
    },
    {
      pergunta: '3- Tipos de Dados: São necessários dados quantitativos, qualitativos ou ambos?',
      opcoes: ['Dados Quantitativos', 'Dados Qualitativos', 'Ambos'],
      explicacoes: [
        'Informações que são expressas numericamente e podem ser medidas em termos de quantidade.',
        'Informações que não são expressas numericamente, mas sim descritas em termos de qualidade ou características. ',
        'As duas opções se aplicam',
      ],
    },
    {
      pergunta: '4- Acesso à Participantes: Qual o nível de interação de participantes externos desejado?',
      opcoes: ['Desejo envolver uma quantidade significativa de pessoas', 'Não desejo envolver pessoas externas', 'Desejo envolver poucas pessoas externas'],
      explicacoes: [
        'Ao questionar o nível de interação desejado, orienta a escolha de métodos, permitindo adaptar a pesquisa de acordo com a necessidade de acesso e colaboração com indivíduos externos.',
        'Ao questionar o nível de interação desejado, orienta a escolha de métodos, permitindo adaptar a pesquisa de acordo com a necessidade de acesso e colaboração com indivíduos externos. ',
        'Ao questionar o nível de interação desejado, orienta a escolha de métodos, permitindo adaptar a pesquisa de acordo com a necessidade de acesso e colaboração com indivíduos externos.',
      ],
    },
    {
      pergunta: '5 - Temporalidade: O estudo será de curto ou longo prazo?',
      opcoes: ['Curto prazo', 'Longo prazo'],
      explicacoes: [
        'Pode ter como objetivo compreender eventos imediatos, observar mudanças rápidas ou analisar efeitos de curto prazo.',
        'O objetivo principal é observar tendências ao longo do tempo, identificar padrões de mudança, entender desenvolvimentos graduais e avaliar o impacto cumulativo de diferentes variáveis.',
      ],
    },
    {
      pergunta: '6 - Objetivo Base: Qual das opções seu objetivo final mais se assemelha?',
      opcoes: ['Testar hipóteses', 'Explorar padrões', 'Avaliar impacto'],
      explicacoes: [
        'Envolve a aplicação de métodos científicos ou lógicos para verificar a validade de suposições ou proposições.',
        'Refere-se à análise de dados para identificar regularidades, tendências ou relações sistemáticas entre variáveis',
        'Avaliar impacto envolve a análise dos efeitos ou consequências de uma ação, intervenção ou evento em determinado contexto',
      ],
    },
    {
      pergunta: '7- Controle de Variáveis: Deseja controlar variáveis independentes no ambiente de estudo?',
      opcoes: ['Sim, desejo o controle de variáveis', 'Não, o controle de variáveis é dispensável'],
      explicacoes: [
        'Variáveis independentes, em um contexto de pesquisa, são aquelas que são manipuladas ou controladas pelo pesquisador para observar seu efeito sobre outras variáveis.',
        'Variáveis independentes, em um contexto de pesquisa, são aquelas que são manipuladas ou controladas pelo pesquisador para observar seu efeito sobre outras variáveis.',
      ],
    },
    {
      pergunta: '8- Limitação Ética: Existem questões éticas que limitem à escolha do Método escolhido?',
      opcoes: ['Sim, existem questões éticas a serem consideradas', 'Não há questões éticas'],
      explicacoes: [
        'Limitações técnicas referem-se a restrições ou obstáculos relacionados a aspectos técnicos ou tecnológicos que podem impactar um processo, projeto, produto ou pesquisa.',
        'Limitações técnicas referem-se a restrições ou obstáculos relacionados a aspectos técnicos ou tecnológicos que podem impactar um processo, projeto, produto ou pesquisa.',
      ],
    },
    {
      pergunta: '9- Complexidade do Fenômeno: O fenômeno estudado é complexo e multifacetado?',
      opcoes: ['Sim, é complexo e multifacetado', 'Não, o fenômeno é mais simples'],
      explicacoes: [
        'A complexidade do fenômeno refere-se à presença de múltiplos componentes, interações e fatores que tornam difícil compreender, prever ou modelar completamente um determinado evento, sistema ou processo',
        'A complexidade do fenômeno refere-se à presença de múltiplos componentes, interações e fatores que tornam difícil compreender, prever ou modelar completamente um determinado evento, sistema ou processo',
      ],
    },
    {
      pergunta: '10- Relevância Prática: O estudo visa resultados práticos imediatos ou contribuições teóricas a longo prazo?',
      opcoes: ['Resultados práticos imediatos', 'Contribuições teóricas a longo prazo'],
      explicacoes: [
        'Referem-se aos efeitos ou impactos imediatos e tangíveis que resultam de uma ação, decisão, experimento ou iniciativa.',
        'Referem-se às influências duradouras e significativas que uma teoria específica ou um corpo de conhecimento tem sobre um campo de estudo ao longo do tempo.',
      ],
    },
  ];

  const handleResposta = (opcao) => {
    const pontuacoesPorMetodo = {
      'Natureza Descritiva': {
        'Estudo de Caso': 8,
        'Experimento Controlado': 2,
        'Etnografia': 9,
        'Pesquisa-ação': 6,
        'Pesquisa (Survey Research)': 7,
      },
      'Natureza Explicativa': {
        'Estudo de Caso': 4,
        'Experimento Controlado': 8,
        'Etnografia': 3,
        'Pesquisa-ação': 4,
        'Pesquisa (Survey Research)': 3,
      },
      'Natureza Exploratória':{
        'Estudo de Caso': 6,
        'Experimento Controlado': 3,
        'Etnografia': 8,
        'Pesquisa-ação': 7,
        'Pesquisa (Survey Research)': 5,
      },
      'Natureza Avaliativa':{
        'Estudo de Caso': 2,
        'Experimento Controlado': 7,
        'Etnografia': 1,
        'Pesquisa-ação': 5,
        'Pesquisa (Survey Research)': 4,
      },
      'Ambiente Controlado':{
        'Estudo de Caso': 2,
        'Experimento Controlado': 8,
        'Etnografia': 1,
        'Pesquisa-ação': 3,
        'Pesquisa (Survey Research)': 4,
      },
      'Ambiente Real':{
        'Estudo de Caso': 8,
        'Experimento Controlado': 2,
        'Etnografia': 9,
        'Pesquisa-ação': 7,
        'Pesquisa (Survey Research)': 6,
      },
      'Dados Quantitativos':{
        'Estudo de Caso': 2,
        'Experimento Controlado': 9,
        'Etnografia': 3,
        'Pesquisa-ação': 5,
        'Pesquisa (Survey Research)': 8,
      },
      'Dados Qualitativos':{
        'Estudo de Caso': 8,
        'Experimento Controlado': 1,
        'Etnografia': 9,
        'Pesquisa-ação': 7,
        'Pesquisa (Survey Research)': 2,
      },
      'Ambos':{
        'Estudo de Caso': 7,
        'Experimento Controlado': 6,
        'Etnografia': 8,
        'Pesquisa-ação': 8,
        'Pesquisa (Survey Research)': 9,
      },
      'Desejo envolver uma quantidade significativa de pessoas':{
        'Estudo de Caso': 2,
        'Experimento Controlado': 3,
        'Etnografia': 9,
        'Pesquisa-ação': 8,
        'Pesquisa (Survey Research)': 9,
      },
      'Não desejo envolver pessoas externas':{
        'Estudo de Caso': 9,
        'Experimento Controlado': 8,
        'Etnografia': 2,
        'Pesquisa-ação': 3,
        'Pesquisa (Survey Research)': 1,
      },
      'Desejo envolver poucas pessoas externas':{
        'Estudo de Caso': 7,
        'Experimento Controlado': 6,
        'Etnografia': 7,
        'Pesquisa-ação': 6,
        'Pesquisa (Survey Research)': 5,
      },
      'Curto prazo':{
        'Estudo de Caso': 5,
        'Experimento Controlado': 8,
        'Etnografia': 2,
        'Pesquisa-ação': 4,
        'Pesquisa (Survey Research)': 7,
      },
      'Longo prazo':{
        'Estudo de Caso': 5,
        'Experimento Controlado': 2,
        'Etnografia': 8,
        'Pesquisa-ação': 6,
        'Pesquisa (Survey Research)': 3,
      },
      'Testar hipóteses':{
        'Estudo de Caso': 3,
        'Experimento Controlado': 9,
        'Etnografia': 2,
        'Pesquisa-ação': 6,
        'Pesquisa (Survey Research)': 8,
      },
      'Explorar padrões':{
        'Estudo de Caso': 7,
        'Experimento Controlado': 2,
        'Etnografia': 9,
        'Pesquisa-ação': 8,
        'Pesquisa (Survey Research)': 5,
      },
      'Avaliar impacto':{
        'Estudo de Caso': 5,
        'Experimento Controlado': 8,
        'Etnografia': 6,
        'Pesquisa-ação': 9,
        'Pesquisa (Survey Research)': 7,
      },
      'Avaliar impacto':{
        'Estudo de Caso': 5,
        'Experimento Controlado': 8,
        'Etnografia': 6,
        'Pesquisa-ação': 9,
        'Pesquisa (Survey Research)': 7,
      },
      'Sim, desejo o controle de variáveis':{
        'Estudo de Caso': 2,
        'Experimento Controlado': 9,
        'Etnografia': 1,
        'Pesquisa-ação': 4,
        'Pesquisa (Survey Research)': 7,
      },
      'Não, o controle de variáveis é dispensável':{
        'Estudo de Caso': 8,
        'Experimento Controlado': 1,
        'Etnografia': 9,
        'Pesquisa-ação': 6,
        'Pesquisa (Survey Research)': 3,
      },
      'Sim, existem questões éticas a serem consideradas':{
        'Estudo de Caso': 7,
        'Experimento Controlado': 5,
        'Etnografia': 8,
        'Pesquisa-ação': 6,
        'Pesquisa (Survey Research)': 4,
      },
      'Não há questões éticas':{
        'Estudo de Caso': 3,
        'Experimento Controlado': 5,
        'Etnografia': 2,
        'Pesquisa-ação': 4,
        'Pesquisa (Survey Research)': 6,
      },
      'Sim, é complexo e multifacetado':{
        'Estudo de Caso': 9,
        'Experimento Controlado': 5,
        'Etnografia': 9,
        'Pesquisa-ação': 8,
        'Pesquisa (Survey Research)': 3,
      },
      'Não, o fenômeno é mais simples':{
        'Estudo de Caso': 1,
        'Experimento Controlado': 5,
        'Etnografia': 1,
        'Pesquisa-ação': 2,
        'Pesquisa (Survey Research)': 7,
      },
      'Resultados práticos imediatos':{
        'Estudo de Caso': 6,
        'Experimento Controlado': 8,
        'Etnografia': 4,
        'Pesquisa-ação': 9,
        'Pesquisa (Survey Research)': 7,
      },
      'Contribuições teóricas a longo prazo':{
        'Estudo de Caso': 4,
        'Experimento Controlado': 2,
        'Etnografia': 6,
        'Pesquisa-ação': 1,
        'Pesquisa (Survey Research)': 3,
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
      'Etnografia': 0,
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
