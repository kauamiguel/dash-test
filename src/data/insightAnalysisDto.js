const insightAnalysisDto = {
  receitaTotal: 0,
  aov: 0,
  totalPedidos: 0,
  clientesUnicos: 0,
  taxaConversao: 0,
  receitaLiquida: 0,
  vendasRealizadas: 0,

  orderBumps: {
    attachRate: 0,
    aovComBump: 0,
    aovSemBump: 0,
    upliftPercentual: 0,
    totalPedidos: 0,
    pedidosComBump: 0,
  },

  novosOrderBumps: [],

  topProdutos: [
    {
      produto: '',
      receita: 0,
      vendas: 0,
    },
  ],

  analiseTemporal: {
    melhorDia: '',
    piorDia: '',
    variacaoSemanal: 0,
  },

  insightsIA: {
    diagnosticoGeral: '',
    analiseOrderBumps: '',
    oportunidadesCrescimento: '',
    analiseComportamentalClientes: '',
    estrategiaProdutos: '',
    otimizacaoConversao: '',
    planoAcao90Dias: '',
    riscosMitigacao: '',
  },
};

export default insightAnalysisDto;
