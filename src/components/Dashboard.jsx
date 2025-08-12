import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  RefreshCw,
  BarChart3,
  PieChart,
  Activity,
  Bell,
  Settings,
  Search,
  Filter,
  Download,
  Zap,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import {
  ConversionFunnel,
  AIInsights,
  GoalsProgress,
  HourlyPerformance,
  TrafficChannels,
  BenchmarkComparison,
} from './AdvancedCharts';
import { OrderBumpsAnalysis } from './OrderBumpsAnalysis';
import { SalesAnalysis } from './SalesAnalysis';
import ProductsAnalysis from './ProductsAnalysis';
import AnalyticsAnalysis from './AnalyticsAnalysis';
import AffiliatesAnalysis from './AffiliatesAnalysis';
import FinancialAnalysis from './FinancialAnalysis';
import {
  revenueData,
  topProducts,
  funnelData,
  aiInsights,
  goalsData,
  hourlyData,
  trafficData,
  benchmarkData,
  calculateMetrics,
  generateSparklineData,
} from '../data/mockData';
import * as orderBumpsData from '../data/orderBumpsData';
import * as salesData from '../data/salesData';
import * as productsData from '../data/productsData';
import * as analyticsData from '../data/analyticsData';
import * as affiliatesData from '../data/affiliatesData';
import * as financialData from '../data/financialData';
import { useAnalysis } from '@/hooks/useAnalysis';
import { useInsightAnalysis } from '@/hooks/useInsightAnalysis';

const KPICard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  sparklineData,
  subtitle,
}) => {
  const isPositive = changeType === 'positive';
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <Card className="kpi-card bg-card border-border hover:border-primary/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {title}
              </p>
              {subtitle && (
                <p className="text-xs text-muted-foreground">{subtitle}</p>
              )}
            </div>
          </div>
          <div
            className={`flex items-center space-x-1 text-sm ${
              isPositive ? 'text-green-500' : 'text-red-500'
            }`}
          >
            <TrendIcon className="h-4 w-4" />
            <span>{change}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-2xl font-bold text-foreground">{value}</div>
          {sparklineData && (
            <div className="h-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sparklineData}>
                  <defs>
                    <linearGradient
                      id="sparklineGradient"
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
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#DC2626"
                    strokeWidth={2}
                    fill="url(#sparklineGradient)"
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [activeSection, setActiveSection] = useState('dashboard');
  const { insightData, loading } = useInsightAnalysis();

  useEffect(() => {
    console.log('Resultado json ', insightData);
  }, [insightData]);

  const renderDashboardContent = () => (
    <>
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Visão geral das suas vendas e métricas principais • Atualizado há 2
            min
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge
            variant="outline"
            className="text-green-400 border-green-400/50"
          >
            ● Tempo real
          </Badge>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insightData ? (
          <KPICard
            title="Receita Líquida"
            value={`R$ ${Number(insightData.receitaLiquida || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            change="+15.2%"
            changeType="positive"
            icon={DollarSign}
            sparklineData={generateSparklineData(revenueData)}
            subtitle="vs. período anterior"
          />
        ) : (
          <KPICard
            title="Receita Líquida"
            value="Carregando..."
            change="+15.2%"
            changeType="positive"
            icon={DollarSign}
            sparklineData={generateSparklineData(revenueData)}
            subtitle="vs. período anterior"
          />
        )}
        {insightData ? (
          <KPICard
            title="Vendas Realizadas"
            value={insightData.vendasRealizadas}
            change="+8.1%"
            changeType="positive"
            icon={ShoppingCart}
            subtitle="pedidos confirmados"
          />
        ) : (
          <KPICard
            title="Vendas Realizadas"
            value="Carregando..."
            change="+8.1%"
            changeType="positive"
            icon={ShoppingCart}
            subtitle="pedidos confirmados"
          />
        )}
        {insightData ? (
          <KPICard
            title="Taxa de Conversão"
            value={`${insightData.taxaConversao.toFixed(1)}%`}
            change="+0.4%"
            changeType="positive"
            icon={TrendingUp}
            subtitle="visitantes → clientes"
          />
        ) : (
          <KPICard
            title="Taxa de Conversão"
            value="Carregando..."
            change="+0.4%"
            changeType="positive"
            icon={TrendingUp}
            subtitle="visitantes → clientes"
          />
        )}
        {insightData ? (
          <KPICard
            title="Ticket Médio"
            value={`R$ ${Math.round(insightData.aov)}`}
            change="-2.1%"
            changeType="negative"
            icon={Activity}
            subtitle="valor por pedido"
          />
        ) : (
          <KPICard
            title="Ticket Médio"
            value="Carregando..."
            change="-2.1%"
            changeType="negative"
            icon={Activity}
            subtitle="valor por pedido"
          />
        )}
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Evolução da Receita</span>
              </CardTitle>
              <div className="text-sm text-muted-foreground">
                Últimos 15 dias
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient
                        id="colorRevenue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#DC2626"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#DC2626"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
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
                      stroke="var(--muted-foreground)"
                      fontSize={12}
                      tickFormatter={(value) =>
                        `R$ ${(value / 1000).toFixed(0)}k`
                      }
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'var(--card)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                      }}
                      formatter={(value) => [
                        `R$ ${value.toLocaleString()}`,
                        'Receita',
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#DC2626"
                      strokeWidth={3}
                      fill="url(#colorRevenue)"
                      dot={{ fill: '#DC2626', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#DC2626', strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Top Produtos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!insightData ? (
              <div className="text-center text-lg text-muted-foreground">
                Carregando...
              </div>
            ) : (
              insightData.topProdutos.slice(0, 5).map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">
                      {product.produto}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {product.vendas} vendas • {'10'}% conversão
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm">
                      R${' '}
                      {product.receita.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                      })}
                    </div>
                    <div
                      className={`text-xs ${
                        20 > 0 ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {20 > 0 ? '+' : ''}
                      {20}%
                    </div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      {/* Advanced Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ConversionFunnel data={funnelData} />
        <AIInsights insights={aiInsights} insightData={insightData} />
        <GoalsProgress goals={goalsData} />
      </div>

      {/* Performance Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HourlyPerformance data={hourlyData} />
        <TrafficChannels data={trafficData} />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Secondary Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Métricas Secundárias</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <div>
                <div className="text-sm font-medium">Carrinho Abandonado</div>
                <div className="text-xs text-muted-foreground">
                  -12% vs. período anterior
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">89</div>
                <Button variant="outline" size="sm" className="mt-1">
                  Recuperar
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <div>
                <div className="text-sm font-medium">Reembolsos</div>
                <div className="text-xs text-muted-foreground">
                  1.8% do total de vendas
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">R$ 2.340</div>
                <div className="text-xs text-red-400">+5% vs. anterior</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
              <div>
                <div className="text-sm font-medium">Novos Clientes</div>
                <div className="text-xs text-muted-foreground">
                  Meta: 200 clientes
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">156</div>
                <div className="text-xs text-green-400">+23% vs. anterior</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2">
          <BenchmarkComparison data={benchmarkData} />
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold">
              <span className="goexplosion-text-gradient bg-clip-text text-transparent">
                GOEXPLOSION
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Buscar..."
                className="bg-transparent border-none outline-none text-sm w-64"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-input border border-border rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="7d">Últimos 7 dias</option>
              <option value="30d">Últimos 30 dias</option>
              <option value="90d">Últimos 90 dias</option>
              <option value="1y">Este ano</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Button size="sm" className="goexplosion-gradient">
              <RefreshCw className="h-4 w-4 mr-2" />
              Atualizar
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-screen">
          <nav className="p-4 space-y-2">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Menu Principal
            </div>
            {[
              {
                icon: BarChart3,
                label: 'Dashboard',
                section: 'dashboard',
                badge: null,
              },
              {
                icon: DollarSign,
                label: 'Vendas',
                section: 'vendas',
                badge: '1.2k',
              },
              {
                icon: ShoppingCart,
                label: 'Produtos',
                section: 'produtos',
                badge: '5',
              },
              {
                icon: Zap,
                label: 'OrderBumps',
                section: 'orderbumps',
                badge: 'Hot',
              },
              {
                icon: PieChart,
                label: 'Análises',
                section: 'analises',
                badge: 'Novo',
              },
              {
                icon: Users,
                label: 'Afiliados',
                section: 'afiliados',
                badge: '23',
              },
              {
                icon: Activity,
                label: 'Financeiro',
                section: 'financeiro',
                badge: null,
              },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(item.section)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  activeSection === item.section
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-sm'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <Badge variant="secondary" className="text-xs h-5">
                    {item.badge}
                  </Badge>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {activeSection === 'dashboard' && renderDashboardContent()}
          {activeSection === 'orderbumps' && (
            <OrderBumpsAnalysis data={orderBumpsData} />
          )}
          {activeSection === 'vendas' && (
            <SalesAnalysis data={salesData} insightData={insightData || {}} />
          )}
          {activeSection === 'produtos' && (
            <ProductsAnalysis data={productsData} />
          )}
          {activeSection === 'analises' && (
            <AnalyticsAnalysis data={analyticsData} />
          )}
          {activeSection === 'afiliados' && (
            <AffiliatesAnalysis data={affiliatesData} />
          )}
          {activeSection === 'financeiro' && (
            <FinancialAnalysis data={financialData} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
