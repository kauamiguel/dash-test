import { getDataAnalysis } from '../analysis/getAnalysis';
import analysisdDto from '../../../data/analysisDto';

export const mapAnalysis = async () => {
  const response = await getDataAnalysis('2025-05-01', '2025-06-01');
  const data = await response.json();

  return {
    ...analysisdDto,

    kpis: {
      ...analysisdDto.kpis,
      ...data.kpis,
    },

    status_distribution: {
      ...analysisdDto.status_distribution,
      ...data.status_distribution,
    },

    payment_analysis: Array.isArray(data.payment_analysis)
      ? data.payment_analysis.map((item) => ({
          MetodoGrupo: item.MetodoGrupo || '',
          Total_Tentativas: item.Total_Tentativas || 0,
          Pedidos_Aprovados: item.Pedidos_Aprovados || 0,
          Pedidos_Nao_Autorizados: item.Pedidos_Nao_Autorizados || 0,
          Perc_Nao_Autorizado: item.Perc_Nao_Autorizado || '0%',
          FaturadoTotal: item.FaturadoTotal || 0,
        }))
      : analysisdDto.payment_analysis,

    top_products_volume: {
      ...analysisdDto.top_products_volume,
      ...data.top_products_volume,
    },

    top_products_revenue: {
      ...analysisdDto.top_products_revenue,
      ...data.top_products_revenue,
    },

    campaign_performance: Array.isArray(data.campaign_performance)
      ? data.campaign_performance.map((item) => ({
          OrdemMarketingUtmCampaign: item.OrdemMarketingUtmCampaign || '',
          Pedidos_Aprovados: item.Pedidos_Aprovados || 0,
          Receita_Total: item.Receita_Total || 0,
        }))
      : analysisdDto.campaign_performance,

    source_performance: Array.isArray(data.source_performance)
      ? data.source_performance.map((item) => ({
          OrdemMarketingUtmSource: item.OrdemMarketingUtmSource || '',
          Pedidos_Aprovados: item.Pedidos_Aprovados || 0,
          Receita_Total: item.Receita_Total || 0,
        }))
      : analysisdDto.source_performance,

    sales_by_day_of_week: {
      ...analysisdDto.sales_by_day_of_week,
      ...data.sales_by_day_of_week,
    },

    sales_by_hour_of_day: {
      ...analysisdDto.sales_by_hour_of_day,
      ...data.sales_by_hour_of_day,
    },
  };
};
