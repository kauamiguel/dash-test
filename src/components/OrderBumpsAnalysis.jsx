import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ComposedChart,
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  Target,
  Zap,
  DollarSign,
  ShoppingCart,
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Lightbulb,
  ArrowUpRight,
  ArrowDownRight,
  Play,
  Pause,
  Settings,
} from 'lucide-react';

// Componente principal de análise de OrderBumps
export const OrderBumpsAnalysis = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Header da seção */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Análise de OrderBumps
          </h2>
          <p className="text-muted-foreground">
            Maximize sua receita com ofertas complementares inteligentes
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configurar
          </Button>
          <Button size="sm" className="goexplosion-gradient">
            <Zap className="h-4 w-4 mr-2" />
            Novo OrderBump
          </Button>
        </div>
      </div>

      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="optimization">Otimização</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <OrderBumpsOverview data={data} />
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <OrderBumpsPerformance data={data} />
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <OrderBumpsInsights data={data} />
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <OrderBumpsOptimization data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Visão geral dos OrderBumps
const OrderBumpsOverview = ({ data }) => {
  const { orderBumpsMetrics, performanceComparison } = data;

  return (
    <>
      {/* KPIs principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Receita OrderBumps
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {orderBumpsMetrics.bumpsRevenue.toLocaleString()}
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Badge variant="secondary" className="badge-success">
                {orderBumpsMetrics.bumpsPercentageOfTotal}% do total
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Conversão
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {orderBumpsMetrics.conversionRate}%
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span>+2.3% vs. período anterior</span>
            </div>
          </CardContent>
        </Card>

        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Uplift no Ticket
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              +{orderBumpsMetrics.uplift}%
            </div>
            <div className="text-xs text-muted-foreground">
              R$ {orderBumpsMetrics.averageOrderValue} vs R${' '}
              {orderBumpsMetrics.averageOrderValueWithoutBumps}
            </div>
          </CardContent>
        </Card>

        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              OrderBumps Ativos
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {orderBumpsMetrics.activeOffers}/{orderBumpsMetrics.totalOffers}
            </div>
            <div className="text-xs text-muted-foreground">
              {Math.round(
                (orderBumpsMetrics.activeOffers /
                  orderBumpsMetrics.totalOffers) *
                  100,
              )}
              % ativos
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparação com e sem OrderBumps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Impacto dos OrderBumps</span>
            </CardTitle>
            <CardDescription>
              Comparação de métricas com e sem OrderBumps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Ticket Médio</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    R${' '}
                    {performanceComparison.withoutOrderBumps.averageOrderValue}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-bold">
                    R$ {performanceComparison.withOrderBumps.averageOrderValue}
                  </span>
                </div>
              </div>
              <Progress
                value={performanceComparison.improvement.averageOrderValue}
                className="h-2"
              />

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Receita Total</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    R${' '}
                    {performanceComparison.withoutOrderBumps.totalRevenue.toLocaleString()}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-bold">
                    R${' '}
                    {performanceComparison.withOrderBumps.totalRevenue.toLocaleString()}
                  </span>
                </div>
              </div>
              <Progress
                value={performanceComparison.improvement.totalRevenue}
                className="h-2"
              />

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">LTV do Cliente</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    R${' '}
                    {
                      performanceComparison.withoutOrderBumps
                        .customerLifetimeValue
                    }
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-bold">
                    R${' '}
                    {performanceComparison.withOrderBumps.customerLifetimeValue}
                  </span>
                </div>
              </div>
              <Progress
                value={performanceComparison.improvement.customerLifetimeValue}
                className="h-2"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChartIcon className="h-5 w-5" />
              <span>Distribuição por Categoria</span>
            </CardTitle>
            <CardDescription>Performance por tipo de OrderBump</CardDescription>
          </CardHeader>
          <CardContent>
            <CategoryDistribution data={data.categoryAnalysis} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

// Performance detalhada dos OrderBumps
const OrderBumpsPerformance = ({ data }) => {
  const { orderBumpsPerformance, orderBumpsEvolution } = data;

  return (
    <>
      {/* Evolução temporal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Evolução dos OrderBumps</span>
          </CardTitle>
          <CardDescription>Performance dos últimos 30 dias</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={orderBumpsEvolution}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis
                  dataKey="date"
                  stroke="var(--muted-foreground)"
                  fontSize={12}
                />
                <YAxis
                  yAxisId="left"
                  stroke="var(--muted-foreground)"
                  fontSize={12}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="var(--muted-foreground)"
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                />
                <Bar
                  yAxisId="left"
                  dataKey="revenue"
                  fill="#DC2626"
                  name="Receita (R$)"
                  radius={[2, 2, 0, 0]}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="conversionRate"
                  stroke="#7C3AED"
                  strokeWidth={3}
                  name="Taxa de Conversão (%)"
                  dot={{ fill: '#7C3AED', strokeWidth: 2, r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de performance por OrderBump */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Performance por OrderBump</span>
          </CardTitle>
          <CardDescription>Métricas detalhadas de cada oferta</CardDescription>
        </CardHeader>
        <CardContent>
          <OrderBumpsTable data={orderBumpsPerformance} />
        </CardContent>
      </Card>
    </>
  );
};

// Insights e recomendações
const OrderBumpsInsights = ({ data }) => {
  const { orderBumpsInsights } = data;

  const getInsightIcon = (type) => {
    switch (type) {
      case 'opportunity':
        return <Lightbulb className="h-5 w-5 text-yellow-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'optimization':
        return <Target className="h-5 w-5 text-blue-500" />;
      default:
        return <Activity className="h-5 w-5" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'badge-error';
      case 'medium':
        return 'badge-warning';
      case 'low':
        return 'badge-secondary';
      default:
        return 'badge-secondary';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {orderBumpsInsights.map((insight) => (
        <Card key={insight.id} className="interactive-card">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                {getInsightIcon(insight.type)}
                <div>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge className={getPriorityColor(insight.priority)}>
                      {insight.priority === 'high'
                        ? 'Alta'
                        : insight.priority === 'medium'
                          ? 'Média'
                          : 'Baixa'}{' '}
                      Prioridade
                    </Badge>
                    <Badge variant="outline">
                      {insight.confidence}% confiança
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{insight.description}</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Impacto:</span>
                <Badge variant="secondary">{insight.impact}</Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Receita Potencial:</span>
                <span
                  className={`text-sm font-bold ${
                    insight.potentialRevenue > 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {insight.potentialRevenue > 0 ? '+' : ''}R${' '}
                  {Math.abs(insight.potentialRevenue).toLocaleString()}
                </span>
              </div>

              <div className="pt-3 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Ação Recomendada:</span>
                  <Button size="sm" variant="outline">
                    {insight.action}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Otimização e benchmarks
const OrderBumpsOptimization = ({ data }) => {
  const {
    industryBenchmarks,
    orderBumpsByProduct,
    orderBumpsHourlyPerformance,
  } = data;

  return (
    <>
      {/* Benchmarks da indústria */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Benchmarks da Indústria</span>
          </CardTitle>
          <CardDescription>
            Compare sua performance com o mercado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">23.5%</div>
              <div className="text-sm text-muted-foreground">Sua Conversão</div>
              <div className="text-xs text-green-500 mt-1">
                +5.0% vs. mercado ({industryBenchmarks.averageConversionRate}%)
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-primary">62.6%</div>
              <div className="text-sm text-muted-foreground">Seu Uplift</div>
              <div className="text-xs text-green-500 mt-1">
                +27.4% vs. mercado ({industryBenchmarks.averageUplift}%)
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2.4</div>
              <div className="text-sm text-muted-foreground">
                OrderBumps/Produto
              </div>
              <div className="text-xs text-green-500 mt-1">
                +0.1 vs. mercado (
                {industryBenchmarks.averageOrderBumpsPerProduct})
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance por produto */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Performance por Produto</span>
          </CardTitle>
          <CardDescription>
            Análise de OrderBumps por produto principal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProductPerformanceTable data={orderBumpsByProduct} />
        </CardContent>
      </Card>

      {/* Performance por horário */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Performance por Horário</span>
          </CardTitle>
          <CardDescription>Melhores horários para OrderBumps</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={orderBumpsHourlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis
                  dataKey="hour"
                  stroke="var(--muted-foreground)"
                  fontSize={12}
                />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="conversionRate"
                  stroke="#DC2626"
                  fill="url(#colorGradient)"
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#DC2626" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#DC2626" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

// Componente de distribuição por categoria
const CategoryDistribution = ({ data }) => {
  const COLORS = ['#DC2626', '#7C3AED', '#F59E0B'];

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="totalRevenue"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`R$ ${value.toLocaleString()}`, 'Receita']}
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// Tabela de performance dos OrderBumps
const OrderBumpsTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
              OrderBump
            </th>
            <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
              Produto
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Preço
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Conversão
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Receita
            </th>
            <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-border hover:bg-muted/50"
            >
              <td className="py-3 px-2">
                <div>
                  <div className="font-medium text-sm">{item.name}</div>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {item.category}
                  </Badge>
                </div>
              </td>
              <td className="py-3 px-2 text-sm text-muted-foreground">
                {item.product}
              </td>
              <td className="py-3 px-2 text-right text-sm font-medium">
                R$ {item.price}
              </td>
              <td className="py-3 px-2 text-right">
                <div className="text-sm font-medium">
                  {item.conversionRate}%
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.conversions}/{item.impressions}
                </div>
              </td>
              <td className="py-3 px-2 text-right text-sm font-medium">
                R$ {item.revenue.toLocaleString()}
              </td>
              <td className="py-3 px-2 text-center">
                <Badge
                  className={
                    item.status === 'active' ? 'badge-success' : 'badge-warning'
                  }
                >
                  {item.status === 'active' ? (
                    <>
                      <Play className="h-3 w-3 mr-1" /> Ativo
                    </>
                  ) : (
                    <>
                      <Pause className="h-3 w-3 mr-1" /> Pausado
                    </>
                  )}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Tabela de performance por produto
const ProductPerformanceTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
              Produto
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Receita Base
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Receita OrderBumps
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Uplift
            </th>
            <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
              Top OrderBump
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-border hover:bg-muted/50"
            >
              <td className="py-3 px-2">
                <div className="font-medium text-sm">{item.productName}</div>
                <div className="text-xs text-muted-foreground">
                  {item.orderBumpsCount} OrderBump
                  {item.orderBumpsCount !== 1 ? 's' : ''}
                </div>
              </td>
              <td className="py-3 px-2 text-right text-sm">
                R$ {item.productRevenue.toLocaleString()}
              </td>
              <td className="py-3 px-2 text-right text-sm font-medium">
                R$ {item.orderBumpsRevenue.toLocaleString()}
              </td>
              <td className="py-3 px-2 text-right">
                <Badge className="badge-success">+{item.averageUplift}%</Badge>
              </td>
              <td className="py-3 px-2 text-sm text-muted-foreground">
                {item.topOrderBump}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBumpsAnalysis;
