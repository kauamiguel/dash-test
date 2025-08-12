export const analysisdDto = {
  kpis: {
    'Receita Total': 0,
    'Pedidos Aprovados': 0,
    'AOV Geral': 0,
    'AOV Pago': 0,
    'Taxa de Sucesso': 0,
  },

  status_distribution: {
    'Nao autorizado': 0,
    'Pagamento aprovado': 0,
    Cancelado: 0,
    'Pagamento nao finalizado': 0,
    'Cancelamento solicitado': 0,
  },

  payment_analysis: [
    {
      MetodoGrupo: '',
      Total_Tentativas: 0,
      Pedidos_Aprovados: 0,
      Pedidos_Nao_Autorizados: 0,
      Perc_Nao_Autorizado: '0%',
      FaturadoTotal: 0,
    },
  ],

  top_products_volume: {
    // nome_do_produto: quantidade
  },

  top_products_revenue: {
    // nome_do_produto: "R$ 0,00"
  },

  campaign_performance: [
    {
      OrdemMarketingUtmCampaign: '',
      Pedidos_Aprovados: 0,
      Receita_Total: 0,
    },
  ],

  source_performance: [
    {
      OrdemMarketingUtmSource: '',
      Pedidos_Aprovados: 0,
      Receita_Total: 0,
    },
  ],

  sales_by_day_of_week: {
    // "Segunda-feira": { Total_Pedidos_Aprovados: 0, Receita_Total: 0 }
  },

  sales_by_hour_of_day: {
    // "1": { Total_Pedidos_Aprovados: 0, Receita_Total: 0 }
  },
};

export default analysisdDto;
