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
  RadialBarChart,
  RadialBar,
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
  Filter,
  Download,
  Eye,
  MousePointer,
  UserCheck,
  ShoppingBag,
  Calendar,
  Star,
  Award,
  Percent,
  CreditCard,
  RotateCcw,
  UserPlus,
  Gauge,
  TrendingDown as TrendDown,
  Mail,
  Globe,
  Smartphone,
  Search,
  Heart,
  RefreshCw,
} from 'lucide-react';

// Componente principal de análise de vendas
export const SalesAnalysis = ({ data, insightData }) => {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Header da seção */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Análise de Vendas
          </h2>
          <p className="text-muted-foreground">
            Insights completos para otimizar sua performance de vendas
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Relatório
          </Button>
          <Button size="sm" className="goexplosion-gradient">
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="channels">Canais</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="goals">Metas</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <SalesOverview data={data} insightData={insightData} />
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <ProductAnalysis data={data} />
        </TabsContent>

        <TabsContent value="channels" className="space-y-6">
          <ChannelAnalysis data={data} />
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <SalesInsights data={data} />
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <SalesGoals data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Visão geral das vendas
const SalesOverview = ({ data, insightData }) => {
  const { salesMetrics, salesEvolution, salesFunnel } = data;
  const isLoading = !insightData || insightData.receitaTotal === undefined;

  return (
    <>
      {/* KPIs principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-2xl font-bold">Carregando...</div>
            ) : (
              <div className="text-2xl font-bold">
                R${' '}
                {insightData.receitaTotal.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </div>
            )}
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span>+X% vs. período anterior</span>
            </div>
          </CardContent>
        </Card>

        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Pedidos
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-2xl font-bold">Carregando...</div>
            ) : (
              <div className="text-2xl font-bold">
                {insightData.totalPedidos}
              </div>
            )}
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span>+X% vs. período anterior</span>
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
            {isLoading ? (
              <div className="text-2xl font-bold">Carregando...</div>
            ) : (
              <div className="text-2xl font-bold">
                {(insightData.taxaConversao / 100).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                %
              </div>
            )}
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span>+X% vs. período anterior</span>
            </div>
          </CardContent>
        </Card>

        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-2xl font-bold">Carregando...</div>
            ) : (
              <div className="text-2xl font-bold">
                R${' '}
                {insightData.aov.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            )}

            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <TrendingDown className="h-3 w-3 text-red-500" />
              <span>-X% vs. período anterior</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos principais */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Evolução de vendas */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Evolução das Vendas</span>
              </CardTitle>
              <CardDescription>Performance dos últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={salesEvolution}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="var(--border)"
                    />
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
                      dataKey="conversion"
                      stroke="#7C3AED"
                      strokeWidth={3}
                      name="Conversão (%)"
                      dot={{ fill: '#7C3AED', strokeWidth: 2, r: 4 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Funil de vendas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Funil de Vendas</span>
            </CardTitle>
            <CardDescription>Jornada do cliente</CardDescription>
          </CardHeader>
          <CardContent>
            <SalesFunnelChart data={salesFunnel} />
          </CardContent>
        </Card>
      </div>

      {/* Métricas secundárias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              LTV do Cliente
            </CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {salesMetrics.customerLifetimeValue}
            </div>
            <div className="text-xs text-muted-foreground">
              Valor médio por cliente
            </div>
          </CardContent>
        </Card>

        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Reembolso
            </CardTitle>
            <RotateCcw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{salesMetrics.refundRate}%</div>
            <div className="text-xs text-muted-foreground">
              Abaixo da média do mercado
            </div>
          </CardContent>
        </Card>

        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Novos Clientes
            </CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-2xl font-bold">Carregando...</div>
            ) : (
              <div className="text-2xl font-bold">
                {insightData.clientesUnicos}
              </div>
            )}

            <div className="text-xs text-muted-foreground">{'X'}% do total</div>
          </CardContent>
        </Card>

        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Margem Líquida
            </CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{salesMetrics.netMargin}%</div>
            <div className="text-xs text-muted-foreground">
              Margem bruta: {salesMetrics.grossMargin}%
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

// Análise de produtos
const ProductAnalysis = ({ data }) => {
  const { productSalesAnalysis } = data;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tabela de produtos */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Performance por Produto</span>
            </CardTitle>
            <CardDescription>Análise detalhada de cada produto</CardDescription>
          </CardHeader>
          <CardContent>
            <ProductTable data={productSalesAnalysis} />
          </CardContent>
        </Card>
      </div>

      {/* Cards de produtos individuais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productSalesAnalysis.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

// Análise de canais
const ChannelAnalysis = ({ data }) => {
  const { salesChannels, hourlyAnalysis } = data;

  return (
    <>
      {/* Performance por canal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5" />
            <span>Performance por Canal</span>
          </CardTitle>
          <CardDescription>
            ROI e métricas de cada canal de aquisição
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChannelTable data={salesChannels} />
        </CardContent>
      </Card>

      {/* Análise temporal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Performance por Horário</span>
            </CardTitle>
            <CardDescription>Melhores horários para vendas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hourlyAnalysis}>
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
                    dataKey="revenue"
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
                      <stop
                        offset="95%"
                        stopColor="#DC2626"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChartIcon className="h-5 w-5" />
              <span>Distribuição de Receita</span>
            </CardTitle>
            <CardDescription>Receita por canal de vendas</CardDescription>
          </CardHeader>
          <CardContent>
            <ChannelDistribution data={salesChannels} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

// Insights de vendas
const SalesInsights = ({ data }) => {
  const { salesInsights } = data;

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
      {salesInsights.map((insight) => (
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

// Metas de vendas
const SalesGoals = ({ data }) => {
  const { salesGoals } = data;

  const getStatusColor = (status) => {
    switch (status) {
      case 'on_track':
        return 'text-green-500';
      case 'at_risk':
        return 'text-orange-500';
      case 'behind':
        return 'text-red-500';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'on_track':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'at_risk':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'behind':
        return <TrendDown className="h-4 w-4 text-red-500" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {salesGoals.map((goal) => (
        <Card key={goal.id} className="interactive-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{goal.title}</CardTitle>
              {getStatusIcon(goal.status)}
            </div>
            <CardDescription>
              {goal.daysRemaining} dias restantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">
                  {goal.category === 'revenue'
                    ? `R$ ${goal.current.toLocaleString()}`
                    : goal.category === 'conversion' || goal.category === 'roi'
                      ? `${goal.current}%`
                      : goal.current.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">
                  /{' '}
                  {goal.category === 'revenue'
                    ? `R$ ${goal.target.toLocaleString()}`
                    : goal.category === 'conversion' || goal.category === 'roi'
                      ? `${goal.target}%`
                      : goal.target.toLocaleString()}
                </span>
              </div>

              <Progress value={goal.progress} className="h-2" />

              <div className="flex items-center justify-between text-sm">
                <span className={getStatusColor(goal.status)}>
                  {goal.progress.toFixed(1)}% concluído
                </span>
                <span className="text-muted-foreground">
                  Meta: {goal.deadline}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Componente do funil de vendas
const SalesFunnelChart = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((stage, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{stage.stage}</span>
            <span className="text-sm text-muted-foreground">
              {stage.percentage}% • {stage.count.toLocaleString()}
            </span>
          </div>
          <div className="relative">
            <div className="w-full bg-secondary/30 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-red-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${stage.percentage * 5}%` }}
              />
            </div>
          </div>
          {index < data.length - 1 && (
            <div className="text-xs text-muted-foreground">
              Conversão: {stage.conversionToNext}%
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Tabela de produtos
const ProductTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
              Produto
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Receita
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Pedidos
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Conversão
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Crescimento
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr
              key={product.id}
              className="border-b border-border hover:bg-muted/50"
            >
              <td className="py-3 px-2">
                <div>
                  <div className="font-medium text-sm">{product.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {product.category}
                  </div>
                </div>
              </td>
              <td className="py-3 px-2 text-right text-sm font-medium">
                R$ {product.revenue.toLocaleString()}
              </td>
              <td className="py-3 px-2 text-right text-sm">{product.orders}</td>
              <td className="py-3 px-2 text-right text-sm">
                {product.conversionRate}%
              </td>
              <td className="py-3 px-2 text-right">
                <span
                  className={`text-sm font-medium ${
                    product.growth > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {product.growth > 0 ? '+' : ''}
                  {product.growth}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Card de produto individual
const ProductCard = ({ product }) => {
  return (
    <Card className="interactive-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <Badge variant="outline">{product.category}</Badge>
        </div>
        <CardDescription>
          R$ {product.price} • {product.orders} vendas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Receita:</span>
            <span className="font-medium">
              R$ {product.revenue.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Conversão:</span>
            <span className="font-medium">{product.conversionRate}%</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Avaliação:</span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{product.averageRating}</span>
              <span className="text-xs text-muted-foreground">
                ({product.totalReviews})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Crescimento:</span>
            <span
              className={`font-medium ${
                product.growth > 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {product.growth > 0 ? '+' : ''}
              {product.growth}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Tabela de canais
const ChannelTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
              Canal
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Receita
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Pedidos
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              ROI
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              CAC
            </th>
            <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
              Crescimento
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((channel, index) => (
            <tr
              key={index}
              className="border-b border-border hover:bg-muted/50"
            >
              <td className="py-3 px-2">
                <div className="font-medium text-sm">{channel.channel}</div>
              </td>
              <td className="py-3 px-2 text-right text-sm font-medium">
                R$ {channel.revenue.toLocaleString()}
              </td>
              <td className="py-3 px-2 text-right text-sm">{channel.orders}</td>
              <td className="py-3 px-2 text-right text-sm">
                {channel.roi === Infinity ? '∞' : `${channel.roi}%`}
              </td>
              <td className="py-3 px-2 text-right text-sm">
                R$ {channel.customerAcquisitionCost}
              </td>
              <td className="py-3 px-2 text-right">
                <span
                  className={`text-sm font-medium ${
                    channel.growth > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {channel.growth > 0 ? '+' : ''}
                  {channel.growth}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Distribuição de canais
const ChannelDistribution = ({ data }) => {
  const COLORS = ['#DC2626', '#7C3AED', '#F59E0B', '#3B82F6', '#10B981'];

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
            dataKey="revenue"
            label={({ channel, percent }) =>
              `${channel} ${(percent * 100).toFixed(0)}%`
            }
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

export default SalesAnalysis;
