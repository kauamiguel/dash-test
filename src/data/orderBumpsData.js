// Dados simulados inteligentes para análise de OrderBumps

// Métricas principais de OrderBumps
export const orderBumpsMetrics = {
  totalOffers: 12,
  activeOffers: 8,
  totalRevenue: 89400,
  conversionRate: 23.5,
  averageOrderValue: 187,
  averageOrderValueWithoutBumps: 115,
  uplift: 62.6, // Aumento percentual no ticket médio
  totalOrders: 3247,
  ordersWithBumps: 763,
  bumpsRevenue: 42800,
  bumpsPercentageOfTotal: 47.9,
};

// Dados de performance por OrderBump
export const orderBumpsPerformance = [
  {
    id: 1,
    name: 'E-book Bônus: 50 Templates',
    product: 'Curso de Marketing Digital',
    price: 47,
    impressions: 1560,
    conversions: 421,
    conversionRate: 27.0,
    revenue: 19787,
    position: 'checkout',
    status: 'active',
    category: 'complementar',
  },
  {
    id: 2,
    name: 'Consultoria 1h Individual',
    product: 'Curso de Marketing Digital',
    price: 197,
    impressions: 1560,
    conversions: 156,
    conversionRate: 10.0,
    revenue: 30732,
    position: 'checkout',
    status: 'active',
    category: 'premium',
  },
  {
    id: 3,
    name: 'Planilha de ROI Avançada',
    product: 'E-book Vendas Online',
    price: 27,
    impressions: 890,
    conversions: 267,
    conversionRate: 30.0,
    revenue: 7209,
    position: 'upsell',
    status: 'active',
    category: 'complementar',
  },
  {
    id: 4,
    name: 'Acesso VIP Comunidade',
    product: 'Mentoria 1:1',
    price: 97,
    impressions: 230,
    conversions: 69,
    conversionRate: 30.0,
    revenue: 6693,
    position: 'checkout',
    status: 'active',
    category: 'premium',
  },
  {
    id: 5,
    name: 'Kit Ferramentas Pro',
    product: 'Workshop Instagram',
    price: 67,
    impressions: 670,
    conversions: 134,
    conversionRate: 20.0,
    revenue: 8978,
    position: 'downsell',
    status: 'active',
    category: 'complementar',
  },
  {
    id: 6,
    name: 'Certificado Premium',
    product: 'Curso de Copywriting',
    price: 37,
    impressions: 450,
    conversions: 90,
    conversionRate: 20.0,
    revenue: 3330,
    position: 'checkout',
    status: 'paused',
    category: 'complementar',
  },
];

// Evolução das métricas de OrderBumps nos últimos 30 dias
export const orderBumpsEvolution = [
  { date: '15/06', conversions: 45, revenue: 2340, conversionRate: 18.2 },
  { date: '16/06', conversions: 52, revenue: 2890, conversionRate: 19.8 },
  { date: '17/06', conversions: 48, revenue: 2567, conversionRate: 17.9 },
  { date: '18/06', conversions: 61, revenue: 3245, conversionRate: 21.3 },
  { date: '19/06', conversions: 58, revenue: 3120, conversionRate: 20.1 },
  { date: '20/06', conversions: 67, revenue: 3678, conversionRate: 22.4 },
  { date: '21/06', conversions: 72, revenue: 3890, conversionRate: 23.1 },
  { date: '22/06', conversions: 69, revenue: 3567, conversionRate: 22.8 },
  { date: '23/06', conversions: 75, revenue: 4123, conversionRate: 24.2 },
  { date: '24/06', conversions: 78, revenue: 4234, conversionRate: 24.8 },
  { date: '25/06', conversions: 82, revenue: 4456, conversionRate: 25.3 },
  { date: '26/06', conversions: 79, revenue: 4189, conversionRate: 24.9 },
  { date: '27/06', conversions: 85, revenue: 4567, conversionRate: 26.1 },
  { date: '28/06', conversions: 88, revenue: 4789, conversionRate: 26.8 },
  { date: '29/06', conversions: 91, revenue: 4923, conversionRate: 27.2 },
  { date: '30/06', conversions: 89, revenue: 4834, conversionRate: 26.9 },
  { date: '01/07', conversions: 93, revenue: 5012, conversionRate: 27.5 },
  { date: '02/07', conversions: 96, revenue: 5234, conversionRate: 28.1 },
  { date: '03/07', conversions: 91, revenue: 4967, conversionRate: 27.3 },
  { date: '04/07', conversions: 98, revenue: 5345, conversionRate: 28.7 },
  { date: '05/07', conversions: 102, revenue: 5567, conversionRate: 29.2 },
  { date: '06/07', conversions: 99, revenue: 5423, conversionRate: 28.9 },
  { date: '07/07', conversions: 105, revenue: 5789, conversionRate: 30.1 },
  { date: '08/07', conversions: 108, revenue: 5934, conversionRate: 30.8 },
  { date: '09/07', conversions: 103, revenue: 5678, conversionRate: 29.7 },
  { date: '10/07', conversions: 111, revenue: 6123, conversionRate: 31.2 },
  { date: '11/07', conversions: 114, revenue: 6234, conversionRate: 31.8 },
  { date: '12/07', conversions: 109, revenue: 6012, conversionRate: 30.9 },
  { date: '13/07', conversions: 117, revenue: 6456, conversionRate: 32.4 },
  { date: '14/07', conversions: 120, revenue: 6678, conversionRate: 33.1 },
];

// Comparação de performance com e sem OrderBumps
export const performanceComparison = {
  withOrderBumps: {
    averageOrderValue: 187,
    conversionRate: 4.1,
    totalRevenue: 374300,
    customerLifetimeValue: 420,
    refundRate: 1.2,
  },
  withoutOrderBumps: {
    averageOrderValue: 115,
    conversionRate: 4.1,
    totalRevenue: 231500,
    customerLifetimeValue: 280,
    refundRate: 1.8,
  },
  improvement: {
    averageOrderValue: 62.6,
    totalRevenue: 61.7,
    customerLifetimeValue: 50.0,
    refundRate: -33.3, // Redução na taxa de reembolso
  },
};

// Análise por categoria de OrderBump
export const categoryAnalysis = [
  {
    category: 'Complementar',
    offers: 4,
    averagePrice: 44.5,
    conversionRate: 24.3,
    totalRevenue: 39304,
    description: 'Produtos que complementam a compra principal',
  },
  {
    category: 'Premium',
    offers: 2,
    averagePrice: 147,
    conversionRate: 20.0,
    totalRevenue: 37425,
    description: 'Upgrades e versões premium dos produtos',
  },
  {
    category: 'Serviços',
    offers: 2,
    averagePrice: 97,
    conversionRate: 15.5,
    totalRevenue: 12671,
    description: 'Consultorias e serviços personalizados',
  },
];

// Insights e recomendações de IA para OrderBumps
export const orderBumpsInsights = [
  {
    id: 1,
    type: 'opportunity',
    title: 'Oportunidade de Novo OrderBump',
    description:
      'Clientes do "Curso de Marketing Digital" têm 78% mais chance de comprar produtos de copywriting.',
    confidence: 89,
    impact: 'Alto',
    action: 'Criar OrderBump de copywriting',
    potentialRevenue: 15400,
    priority: 'high',
  },
  {
    id: 2,
    type: 'optimization',
    title: 'Otimizar Posicionamento',
    description:
      'OrderBumps no checkout convertem 35% melhor que no upsell para produtos premium.',
    confidence: 92,
    impact: 'Médio',
    action: 'Mover ofertas premium para checkout',
    potentialRevenue: 8900,
    priority: 'medium',
  },
  {
    id: 3,
    type: 'warning',
    title: 'Queda na Performance',
    description:
      'OrderBump "Certificado Premium" apresentou queda de 15% na conversão nos últimos 7 dias.',
    confidence: 95,
    impact: 'Médio',
    action: 'Revisar copy e preço da oferta',
    potentialRevenue: -2100,
    priority: 'high',
  },
  {
    id: 4,
    type: 'success',
    title: 'Performance Excepcional',
    description:
      'OrderBump "E-book Bônus" superou meta em 45% com conversão de 27%.',
    confidence: 98,
    impact: 'Alto',
    action: 'Replicar estratégia em outros produtos',
    potentialRevenue: 12300,
    priority: 'medium',
  },
];

// Dados para teste A/B de OrderBumps
export const abTestData = [
  {
    id: 1,
    name: 'Teste: Preço E-book Bônus',
    variant: 'A',
    price: 47,
    conversions: 421,
    impressions: 1560,
    conversionRate: 27.0,
    revenue: 19787,
    status: 'running',
  },
  {
    id: 1,
    name: 'Teste: Preço E-book Bônus',
    variant: 'B',
    price: 37,
    conversions: 456,
    impressions: 1540,
    conversionRate: 29.6,
    revenue: 16872,
    status: 'running',
  },
];

// Métricas de OrderBumps por produto principal
export const orderBumpsByProduct = [
  {
    productName: 'Curso de Marketing Digital',
    productRevenue: 78000,
    orderBumpsRevenue: 50519,
    orderBumpsCount: 3,
    averageUplift: 64.8,
    topOrderBump: 'Consultoria 1h Individual',
  },
  {
    productName: 'E-book Vendas Online',
    productRevenue: 26700,
    orderBumpsRevenue: 7209,
    orderBumpsCount: 1,
    averageUplift: 27.0,
    topOrderBump: 'Planilha de ROI Avançada',
  },
  {
    productName: 'Mentoria 1:1',
    productRevenue: 46000,
    orderBumpsRevenue: 6693,
    orderBumpsCount: 1,
    averageUplift: 14.5,
    topOrderBump: 'Acesso VIP Comunidade',
  },
  {
    productName: 'Workshop Instagram',
    productRevenue: 20100,
    orderBumpsRevenue: 8978,
    orderBumpsCount: 1,
    averageUplift: 44.7,
    topOrderBump: 'Kit Ferramentas Pro',
  },
  {
    productName: 'Curso de Copywriting',
    productRevenue: 22500,
    orderBumpsRevenue: 3330,
    orderBumpsCount: 1,
    averageUplift: 14.8,
    topOrderBump: 'Certificado Premium',
  },
];

// Horários de melhor performance para OrderBumps
export const orderBumpsHourlyPerformance = [
  { hour: '00h', conversions: 2, conversionRate: 15.2 },
  { hour: '01h', conversions: 1, conversionRate: 12.8 },
  { hour: '02h', conversions: 1, conversionRate: 11.5 },
  { hour: '03h', conversions: 0, conversionRate: 0 },
  { hour: '04h', conversions: 1, conversionRate: 8.3 },
  { hour: '05h', conversions: 2, conversionRate: 14.7 },
  { hour: '06h', conversions: 3, conversionRate: 18.9 },
  { hour: '07h', conversions: 5, conversionRate: 22.1 },
  { hour: '08h', conversions: 8, conversionRate: 25.4 },
  { hour: '09h', conversions: 12, conversionRate: 28.7 },
  { hour: '10h', conversions: 15, conversionRate: 31.2 },
  { hour: '11h', conversions: 18, conversionRate: 33.8 },
  { hour: '12h', conversions: 16, conversionRate: 32.1 },
  { hour: '13h', conversions: 14, conversionRate: 29.9 },
  { hour: '14h', conversions: 19, conversionRate: 35.2 },
  { hour: '15h', conversions: 22, conversionRate: 37.8 },
  { hour: '16h', conversions: 20, conversionRate: 36.4 },
  { hour: '17h', conversions: 18, conversionRate: 34.1 },
  { hour: '18h', conversions: 16, conversionRate: 31.7 },
  { hour: '19h', conversions: 21, conversionRate: 36.9 },
  { hour: '20h', conversions: 24, conversionRate: 39.2 },
  { hour: '21h', conversions: 19, conversionRate: 35.6 },
  { hour: '22h', conversions: 12, conversionRate: 28.3 },
  { hour: '23h', conversions: 6, conversionRate: 21.4 },
];

// Benchmarks da indústria para OrderBumps
export const industryBenchmarks = {
  averageConversionRate: 18.5,
  averageUplift: 35.2,
  averageOrderBumpsPerProduct: 2.3,
  topPerformingCategories: ['Complementar', 'Premium', 'Serviços'],
  recommendedPriceRange: {
    min: 27,
    max: 197,
    optimal: 67,
  },
};
