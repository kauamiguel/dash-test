import { getInsightAnalysis } from '../Insight/getInsightAnalysis';
import insightAnalysisDto from '../../../data/insightAnalysisDto';

export const mapInsights = async () => {
  const response = await getInsightAnalysis('2025-05-01', '2025-06-01');

  if (!response.ok) {
    console.error('Erro ao buscar dados do insight:', response.status);
    return insightAnalysisDto;
  }

  const data = await response.json();

  return {
    ...insightAnalysisDto,

    receitaTotal: data.kpis?.receita_total ?? 0,
    aov: data.kpis?.aov ?? 0,
    totalPedidos: data.kpis?.total_pedidos ?? 0,
    clientesUnicos: data.kpis?.clientes_unicos ?? 0,
    taxaConversao: data.kpis?.taxa_conversao ?? 0,
    receitaLiquida: data.kpis?.receita_liquida ?? 0,
    vendasRealizadas: data.kpis?.vendas_realizadas ?? 0,

    orderBumps: {
      ...insightAnalysisDto.orderBumps,
      ...data.orderbumps_analysis,
    },

    novosOrderBumps: Array.isArray(data.new_orderbump_opportunities)
      ? data.new_orderbump_opportunities
      : [],

    topProdutos: Array.isArray(data.top_products)
      ? data.top_products.map((item) => ({
          produto: item.produto || '',
          receita: item.receita || 0,
          vendas: item.vendas || 0,
        }))
      : insightAnalysisDto.topProdutos,

    analiseTemporal: {
      ...insightAnalysisDto.analiseTemporal,
      melhorDia: data.temporal_analysis?.melhor_dia ?? '',
      piorDia: data.temporal_analysis?.pior_dia ?? '',
      variacaoSemanal: data.temporal_analysis?.variacao_semanal ?? 0,
    },

    insightsIA: {
      diagnosticoGeral: data.ai_insights?.diagnostico_geral ?? '',
      analiseOrderBumps: data.ai_insights?.analise_orderbumps ?? '',
      oportunidadesCrescimento:
        data.ai_insights?.oportunidades_crescimento ?? '',
      analiseComportamentalClientes:
        data.ai_insights?.analise_comportamental_clientes ?? '',
      estrategiaProdutos: data.ai_insights?.estrategia_produtos ?? '',
      otimizacaoConversao: data.ai_insights?.otimizacao_conversao ?? '',
      planoAcao90Dias: data.ai_insights?.plano_acao_90dias ?? '',
      riscosMitigacao: data.ai_insights?.riscos_mitigacao ?? '',
    },
  };
};
