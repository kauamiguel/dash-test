// Dados simulados inteligentes para o dashboard Goexplosion

// Dados de receita com mais detalhes e sazonalidade
export const revenueData = [
  { date: '01/07', value: 14000, orders: 125, avgTicket: 100, conversion: 2.8 },
  { date: '02/07', value: 15200, orders: 142, avgTicket: 107, conversion: 3.1 },
  { date: '03/07', value: 11800, orders: 118, avgTicket: 100, conversion: 2.5 },
  { date: '04/07', value: 18900, orders: 189, avgTicket: 100, conversion: 3.4 },
  { date: '05/07', value: 22100, orders: 195, avgTicket: 113, conversion: 3.8 },
  { date: '06/07', value: 19500, orders: 178, avgTicket: 110, conversion: 3.2 },
  { date: '07/07', value: 25300, orders: 220, avgTicket: 115, conversion: 4.1 },
  { date: '08/07', value: 28700, orders: 245, avgTicket: 117, conversion: 4.5 },
  { date: '09/07', value: 24100, orders: 201, avgTicket: 120, conversion: 3.9 },
  { date: '10/07', value: 31200, orders: 260, avgTicket: 120, conversion: 4.8 },
  { date: '11/07', value: 29800, orders: 248, avgTicket: 120, conversion: 4.6 },
  { date: '12/07', value: 33500, orders: 279, avgTicket: 120, conversion: 5.1 },
  { date: '13/07', value: 27900, orders: 232, avgTicket: 120, conversion: 4.3 },
  { date: '14/07', value: 35600, orders: 297, avgTicket: 120, conversion: 5.4 },
  { date: '15/07', value: 38200, orders: 318, avgTicket: 120, conversion: 5.8 },
];

// Dados de funil de conversão
export const funnelData = [
  { stage: 'Visitantes', value: 15420, percentage: 100, color: '#3B82F6' },
  { stage: 'Leads', value: 3084, percentage: 20, color: '#F59E0B' },
  { stage: 'Prospects', value: 924, percentage: 6, color: '#7C3AED' },
  { stage: 'Clientes', value: 247, percentage: 1.6, color: '#DC2626' },
];

// Top produtos com mais detalhes
export const topProducts = [
  {
    id: 1,
    name: 'Curso de Marketing Digital',
    sales: 156,
    revenue: 78000,
    growth: 15.2,
    category: 'Curso',
    price: 500,
    conversionRate: 4.2,
    refundRate: 2.1,
  },
  {
    id: 2,
    name: 'E-book Vendas Online',
    sales: 89,
    revenue: 26700,
    growth: 8.7,
    category: 'E-book',
    price: 300,
    conversionRate: 3.8,
    refundRate: 1.5,
  },
  {
    id: 3,
    name: 'Mentoria 1:1',
    sales: 23,
    revenue: 46000,
    growth: 22.1,
    category: 'Mentoria',
    price: 2000,
    conversionRate: 8.5,
    refundRate: 0.8,
  },
  {
    id: 4,
    name: 'Workshop Instagram',
    sales: 67,
    revenue: 20100,
    growth: -3.2,
    category: 'Workshop',
    price: 300,
    conversionRate: 2.9,
    refundRate: 3.1,
  },
  {
    id: 5,
    name: 'Curso de Copywriting',
    sales: 45,
    revenue: 22500,
    growth: 12.8,
    category: 'Curso',
    price: 500,
    conversionRate: 3.5,
    refundRate: 1.9,
  },
];

// Dados de tráfego por canal
export const trafficData = [
  {
    channel: 'Orgânico',
    visitors: 5420,
    leads: 1084,
    cost: 0,
    cpl: 0,
    color: '#00FF88',
  },
  {
    channel: 'Facebook Ads',
    visitors: 3200,
    leads: 960,
    cost: 4800,
    cpl: 5,
    color: '#00AAFF',
  },
  {
    channel: 'Google Ads',
    visitors: 2800,
    leads: 840,
    cost: 6300,
    cpl: 7.5,
    color: '#FFB800',
  },
  {
    channel: 'Instagram',
    visitors: 2100,
    leads: 420,
    cost: 2100,
    cpl: 5,
    color: '#FF3366',
  },
  {
    channel: 'YouTube',
    visitors: 1500,
    leads: 300,
    cost: 1500,
    cpl: 5,
    color: '#9966FF',
  },
  {
    channel: 'Email',
    visitors: 400,
    leads: 120,
    cost: 200,
    cpl: 1.67,
    color: '#00CC6A',
  },
];

// Dados de retenção por coorte
export const cohortData = [
  {
    month: 'Jan',
    week1: 100,
    week2: 85,
    week3: 72,
    week4: 65,
    month2: 58,
    month3: 52,
  },
  {
    month: 'Fev',
    week1: 100,
    week2: 88,
    week3: 75,
    week4: 68,
    month2: 61,
    month3: 55,
  },
  {
    month: 'Mar',
    week1: 100,
    week2: 90,
    week3: 78,
    week4: 71,
    month2: 64,
    month3: 58,
  },
  {
    month: 'Abr',
    week1: 100,
    week2: 87,
    week3: 74,
    week4: 67,
    month2: 60,
    month3: 54,
  },
  {
    month: 'Mai',
    week1: 100,
    week2: 92,
    week3: 80,
    week4: 73,
    month2: 66,
    month3: 60,
  },
  {
    month: 'Jun',
    week1: 100,
    week2: 89,
    week3: 77,
    week4: 70,
    month2: 63,
    month3: 57,
  },
  {
    month: 'Jul',
    week1: 100,
    week2: 94,
    week3: 82,
    week4: 75,
    month2: 68,
    month3: null,
  },
];

// Dados de performance por hora do dia
export const hourlyData = [
  { hour: '00h', sales: 12, visitors: 420 },
  { hour: '01h', sales: 8, visitors: 280 },
  { hour: '02h', sales: 5, visitors: 180 },
  { hour: '03h', sales: 3, visitors: 120 },
  { hour: '04h', sales: 2, visitors: 90 },
  { hour: '05h', sales: 4, visitors: 150 },
  { hour: '06h', sales: 8, visitors: 320 },
  { hour: '07h', sales: 15, visitors: 580 },
  { hour: '08h', sales: 22, visitors: 720 },
  { hour: '09h', sales: 28, visitors: 890 },
  { hour: '10h', sales: 35, visitors: 1120 },
  { hour: '11h', sales: 32, visitors: 980 },
  { hour: '12h', sales: 29, visitors: 920 },
  { hour: '13h', sales: 31, visitors: 1050 },
  { hour: '14h', sales: 38, visitors: 1180 },
  { hour: '15h', sales: 42, visitors: 1320 },
  { hour: '16h', sales: 45, visitors: 1420 },
  { hour: '17h', sales: 41, visitors: 1280 },
  { hour: '18h', sales: 38, visitors: 1150 },
  { hour: '19h', sales: 35, visitors: 1080 },
  { hour: '20h', sales: 32, visitors: 980 },
  { hour: '21h', sales: 28, visitors: 850 },
  { hour: '22h', sales: 22, visitors: 680 },
  { hour: '23h', sales: 18, visitors: 520 },
];

// Insights de IA simulados
export const aiInsights = [
  {
    id: 1,
    type: 'opportunity',
    title: 'Pico de Conversão Identificado',
    description:
      'Suas vendas aumentam 35% entre 14h-17h. Considere intensificar campanhas neste horário.',
    impact: 'Alto',
    action: 'Ajustar cronograma de anúncios',
    confidence: 92,
  },
  {
    id: 2,
    type: 'warning',
    title: 'Queda na Taxa de Conversão',
    description:
      'Workshop Instagram apresentou queda de 3.2% nas vendas. Revisar conteúdo ou preço.',
    impact: 'Médio',
    action: 'Analisar feedback dos clientes',
    confidence: 87,
  },
  {
    id: 3,
    type: 'success',
    title: 'Produto em Alta Performance',
    description:
      'Mentoria 1:1 com crescimento de 22.1% e baixa taxa de reembolso (0.8%).',
    impact: 'Alto',
    action: 'Aumentar investimento em marketing',
    confidence: 95,
  },
  {
    id: 4,
    type: 'info',
    title: 'Oportunidade de Cross-sell',
    description:
      'Clientes do E-book têm 67% mais chance de comprar o Curso de Marketing.',
    impact: 'Médio',
    action: 'Criar sequência de e-mails',
    confidence: 78,
  },
];

// Dados de comparação com concorrentes (simulado)
export const benchmarkData = [
  {
    metric: 'Taxa de Conversão',
    value: 3.2,
    benchmark: 2.8,
    performance: 'above',
  },
  { metric: 'Ticket Médio', value: 102, benchmark: 95, performance: 'above' },
  {
    metric: 'Taxa de Reembolso',
    value: 1.8,
    benchmark: 2.5,
    performance: 'above',
  },
  { metric: 'CAC', value: 45, benchmark: 52, performance: 'above' },
  { metric: 'LTV', value: 320, benchmark: 280, performance: 'above' },
  {
    metric: 'Tempo de Conversão',
    value: 3.2,
    benchmark: 4.1,
    performance: 'above',
  },
];

// Dados de metas e progresso
export const goalsData = [
  {
    goal: 'Receita Mensal',
    target: 500000,
    current: 387500,
    progress: 77.5,
    trend: 'up',
    daysLeft: 16,
  },
  {
    goal: 'Novos Clientes',
    target: 1000,
    current: 756,
    progress: 75.6,
    trend: 'up',
    daysLeft: 16,
  },
  {
    goal: 'Taxa de Conversão',
    target: 4.0,
    current: 3.2,
    progress: 80,
    trend: 'up',
    daysLeft: 16,
  },
  {
    goal: 'NPS Score',
    target: 70,
    current: 68,
    progress: 97.1,
    trend: 'stable',
    daysLeft: 16,
  },
];

// Dados de eventos e anotações
export const eventsData = [
  {
    date: '05/07',
    event: 'Lançamento Curso Marketing',
    type: 'launch',
    impact: 'high',
  },
  {
    date: '08/07',
    event: 'Campanha Black Friday',
    type: 'promotion',
    impact: 'high',
  },
  {
    date: '12/07',
    event: 'Webinar Gratuito',
    type: 'webinar',
    impact: 'medium',
  },
  {
    date: '15/07',
    event: 'Parceria Influencer',
    type: 'partnership',
    impact: 'medium',
  },
];

// Função para calcular métricas derivadas
export const calculateMetrics = (data) => {
  const totalRevenue = data.reduce((sum, item) => sum + item.value, 0);
  const totalOrders = data.reduce((sum, item) => sum + item.orders, 0);
  const avgTicket = totalRevenue / totalOrders;
  const avgConversion =
    data.reduce((sum, item) => sum + item.conversion, 0) / data.length;

  return {
    totalRevenue,
    totalOrders,
    avgTicket,
    avgConversion,
    growth:
      ((data[data.length - 1].value - data[0].value) / data[0].value) * 100,
  };
};

// Função para gerar dados de sparkline
export const generateSparklineData = (baseData, days = 7) => {
  return baseData.slice(-days).map((item) => ({
    value: item.value,
    date: item.date,
  }));
};
