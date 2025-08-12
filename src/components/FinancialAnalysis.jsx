import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  PieChart as PieChartIcon,
  ArrowUp,
  ArrowDown,
  Calendar,
  CreditCard,
  Clock,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Target,
  Filter,
  Download,
  RefreshCw,
  Percent,
  Wallet,
  ShoppingCart,
  Users,
  FileText,
  Repeat,
} from 'lucide-react';
import {
  LineChart,
  Line,
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
  AreaChart,
  Area,
  ComposedChart,
} from 'recharts';

const FinancialAnalysis = ({ data }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('30d');

  const {
    financialOverview,
    revenueByProduct,
    expensesByCategory,
    monthlyFinancials,
    cashFlow,
    revenueByChannel,
    financialProjections,
    financialInsights,
    taxSummary,
    invoices,
    subscriptions,
    financialGoals,
  } = data;

  const COLORS = [
    '#DC2626',
    '#F59E0B',
    '#6B7280',
    '#92400E',
    '#7C3AED',
    '#10B981',
  ];

  const MetricCard = ({
    title,
    value,
    change,
    changeType,
    icon: Icon,
    subtitle,
    prefix = '',
    suffix = '',
  }) => {
    const isPositive = changeType === 'positive';
    const TrendIcon = isPositive ? TrendingUp : TrendingDown;

    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{title}</p>
              <p className="text-2xl font-bold">
                {prefix}
                {value}
                {suffix}
              </p>
              {change && (
                <div
                  className={`flex items-center space-x-1 text-sm ${
                    isPositive ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  <TrendIcon className="h-3 w-3" />
                  <span>{change}</span>
                </div>
              )}
              {subtitle && (
                <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
              )}
            </div>
            <Icon className="h-8 w-8 text-red-500" />
          </div>
        </CardContent>
      </Card>
    );
  };

  const InsightCard = ({ insight }) => {
    const getInsightIcon = (type) => {
      switch (type) {
        case 'oportunidade':
          return <Lightbulb className="h-4 w-4" />;
        case 'aviso':
          return <AlertTriangle className="h-4 w-4" />;
        case 'sucesso':
          return <CheckCircle className="h-4 w-4" />;
        case 'otimizacao':
          return <Target className="h-4 w-4" />;
        default:
          return <Lightbulb className="h-4 w-4" />;
      }
    };

    const getInsightColor = (type) => {
      switch (type) {
        case 'oportunidade':
          return 'text-blue-500';
        case 'aviso':
          return 'text-yellow-500';
        case 'sucesso':
          return 'text-green-500';
        case 'otimizacao':
          return 'text-purple-500';
        default:
          return 'text-blue-500';
      }
    };

    return (
      <Card className="hover:shadow-md transition-all duration-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className={`${getInsightColor(insight.type)} mt-1`}>
              {getInsightIcon(insight.type)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm">{insight.title}</h4>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {insight.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {insight.confidence}% confiança
                  </Badge>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                {insight.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Impacto:</p>
                    <p className="text-sm font-medium">{insight.impact}</p>
                  </div>
                  {insight.potentialRevenue !== 0 && (
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Impacto Anual:
                      </p>
                      <p
                        className={`text-sm font-medium ${
                          insight.potentialRevenue > 0
                            ? 'text-green-500'
                            : 'text-red-500'
                        }`}
                      >
                        {insight.potentialRevenue > 0 ? '+' : ''}R${' '}
                        {Math.abs(insight.potentialRevenue).toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
                <Button size="sm" className="goexplosion-gradient">
                  {insight.action}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const GoalCard = ({ goal }) => {
    const getStatusColor = (status) => {
      switch (status) {
        case 'on-track':
          return 'text-green-500';
        case 'at-risk':
          return 'text-yellow-500';
        case 'behind':
          return 'text-red-500';
        default:
          return 'text-gray-500';
      }
    };

    const getStatusBg = (status) => {
      switch (status) {
        case 'on-track':
          return 'bg-green-500';
        case 'at-risk':
          return 'bg-yellow-500';
        case 'behind':
          return 'bg-red-500';
        default:
          return 'bg-gray-500';
      }
    };

    return (
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-sm">{goal.title}</h4>
            <Badge variant="outline" className={getStatusColor(goal.status)}>
              {goal.status === 'on-track'
                ? 'No prazo'
                : goal.status === 'at-risk'
                  ? 'Em risco'
                  : 'Atrasado'}
            </Badge>
          </div>

          <p className="text-xs text-muted-foreground mb-3">
            {goal.description}
          </p>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>
                {typeof goal.current === 'number' && goal.current > 1000
                  ? `R$ ${goal.current.toLocaleString()}`
                  : goal.current}
              </span>
              <span>
                {typeof goal.target === 'number' && goal.target > 1000
                  ? `R$ ${goal.target.toLocaleString()}`
                  : goal.target}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getStatusBg(goal.status)}`}
                style={{ width: `${Math.min(goal.progress, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{goal.progress.toFixed(1)}% completo</span>
              <span>Prazo: {goal.deadline}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Receita Total"
          value={financialOverview.totalRevenue.toLocaleString()}
          change="+15.2%"
          changeType="positive"
          icon={DollarSign}
          subtitle="últimos 30 dias"
          prefix="R$ "
        />
        <MetricCard
          title="Lucro Líquido"
          value={financialOverview.netProfit.toLocaleString()}
          change="+18.3%"
          changeType="positive"
          icon={TrendingUp}
          subtitle="após impostos"
          prefix="R$ "
        />
        <MetricCard
          title="Margem de Lucro"
          value={financialOverview.profitMargin.toFixed(1)}
          change="+2.1%"
          changeType="positive"
          icon={Percent}
          subtitle="margem líquida"
          suffix="%"
        />
        <MetricCard
          title="MRR"
          value={financialOverview.monthlyRecurringRevenue.toLocaleString()}
          change="+18.5%"
          changeType="positive"
          icon={Repeat}
          subtitle="receita recorrente mensal"
          prefix="R$ "
        />
      </div>

      {/* Revenue & Profit Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Receita e Lucro Mensal</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={monthlyFinancials}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip
                formatter={(value) => [`R$ ${value.toLocaleString()}`, '']}
              />
              <Bar
                yAxisId="left"
                dataKey="revenue"
                fill="#DC2626"
                name="Receita"
              />
              <Bar
                yAxisId="left"
                dataKey="expenses"
                fill="#6B7280"
                name="Despesas"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="margin"
                stroke="#7C3AED"
                strokeWidth={2}
                name="Margem (%)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue by Product & Expenses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Receita por Produto</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={revenueByProduct}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ product, percentage }) =>
                    `${product.split(' ')[0]} (${percentage}%)`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="revenue"
                >
                  {revenueByProduct.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [
                    `R$ ${value.toLocaleString()}`,
                    'Receita',
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Despesas por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={expensesByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percentage }) =>
                    `${category} (${percentage}%)`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {expensesByCategory.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [
                    `R$ ${value.toLocaleString()}`,
                    'Despesa',
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderRevenue = () => (
    <div className="space-y-6">
      {/* Revenue KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Total</p>
                <p className="text-2xl font-bold">
                  R$ {financialOverview.totalRevenue.toLocaleString()}
                </p>
                <p className="text-xs text-green-500">+15.2% vs. anterior</p>
              </div>
              <DollarSign className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Líquida</p>
                <p className="text-2xl font-bold">
                  R$ {financialOverview.netRevenue.toLocaleString()}
                </p>
                <p className="text-xs text-green-500">+16.8% vs. anterior</p>
              </div>
              <Wallet className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Ticket Médio</p>
                <p className="text-2xl font-bold">
                  R$ {(financialOverview.totalRevenue / 3247).toFixed(0)}
                </p>
                <p className="text-xs text-red-500">-2.1% vs. anterior</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">LTV</p>
                <p className="text-2xl font-bold">
                  R$ {financialOverview.customerLifetimeValue}
                </p>
                <p className="text-xs text-green-500">+8.5% vs. anterior</p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue by Product */}
      <Card>
        <CardHeader>
          <CardTitle>Receita por Produto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Produto</th>
                  <th className="text-right p-3">Receita</th>
                  <th className="text-right p-3">% do Total</th>
                  <th className="text-right p-3">Crescimento</th>
                  <th className="text-right p-3">Margem</th>
                </tr>
              </thead>
              <tbody>
                {revenueByProduct.map((product, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        ></div>
                        <p className="font-semibold text-sm">
                          {product.product}
                        </p>
                      </div>
                    </td>
                    <td className="text-right p-3 font-semibold">
                      R$ {product.revenue.toLocaleString()}
                    </td>
                    <td className="text-right p-3">{product.percentage}%</td>
                    <td className="text-right p-3">
                      <span
                        className={
                          product.growth > 0 ? 'text-green-500' : 'text-red-500'
                        }
                      >
                        {product.growth > 0 ? '+' : ''}
                        {product.growth}%
                      </span>
                    </td>
                    <td className="text-right p-3">
                      <Badge variant="outline">{product.margin}%</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Revenue by Channel */}
      <Card>
        <CardHeader>
          <CardTitle>Receita por Canal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={revenueByChannel}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ channel, percentage }) =>
                    `${channel} (${percentage}%)`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="revenue"
                >
                  {revenueByChannel.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [
                    `R$ ${value.toLocaleString()}`,
                    'Receita',
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="space-y-3">
              {revenueByChannel.map((channel, index) => (
                <div
                  key={channel.channel}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <p className="font-semibold text-sm">{channel.channel}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">
                      R$ {channel.revenue.toLocaleString()}
                    </p>
                    <p
                      className={`text-xs ${
                        channel.growth > 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {channel.growth > 0 ? '+' : ''}
                      {channel.growth}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderExpenses = () => (
    <div className="space-y-6">
      {/* Expense KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Despesas Totais</p>
                <p className="text-2xl font-bold">
                  R$ {financialOverview.totalExpenses.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">últimos 30 dias</p>
              </div>
              <ArrowDown className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">% da Receita</p>
                <p className="text-2xl font-bold">
                  {(
                    (financialOverview.totalExpenses /
                      financialOverview.totalRevenue) *
                    100
                  ).toFixed(1)}
                  %
                </p>
                <p className="text-xs text-green-500">-1.2% vs. anterior</p>
              </div>
              <Percent className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">CAC</p>
                <p className="text-2xl font-bold">
                  R$ {financialOverview.customerAcquisitionCost}
                </p>
                <p className="text-xs text-green-500">-5.1% vs. anterior</p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Expenses by Category */}
      <Card>
        <CardHeader>
          <CardTitle>Despesas por Categoria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expensesByCategory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [
                    `R$ ${value.toLocaleString()}`,
                    'Despesa',
                  ]}
                />
                <Bar dataKey="amount" fill="#DC2626" />
              </BarChart>
            </ResponsiveContainer>

            <div className="space-y-3">
              {expensesByCategory.map((category, index) => (
                <div
                  key={category.category}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <div>
                      <p className="font-semibold text-sm">
                        {category.category}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {category.percentage}% do total
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">
                      R$ {category.amount.toLocaleString()}
                    </p>
                    <p
                      className={`text-xs ${
                        category.growth > 0 ? 'text-red-500' : 'text-green-500'
                      }`}
                    >
                      {category.growth > 0 ? '+' : ''}
                      {category.growth}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tax Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Resumo de Impostos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total de Impostos
                  </p>
                  <p className="text-2xl font-bold">
                    R$ {taxSummary.totalTaxesPaid.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Taxa Efetiva</p>
                  <p className="text-2xl font-bold">{taxSummary.taxRate}%</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Economia de Impostos</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Economia Atual</span>
                  <span className="font-semibold text-green-500">
                    R$ {taxSummary.taxSavings.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Economia Potencial</span>
                  <span className="font-semibold text-green-500">
                    R$ {taxSummary.potentialSavings.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium">Impostos por Categoria</p>
              {taxSummary.taxByCategory.map((tax, index) => (
                <div
                  key={tax.category}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <p className="font-semibold text-sm">{tax.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">
                      R$ {tax.amount.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {tax.percentage}% do total
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCashFlow = () => (
    <div className="space-y-6">
      {/* Cash Flow KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Caixa Disponível
                </p>
                <p className="text-2xl font-bold">
                  R$ {financialOverview.cashOnHand.toLocaleString()}
                </p>
                <p className="text-xs text-green-500">+12.3% vs. anterior</p>
              </div>
              <Wallet className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">A Receber</p>
                <p className="text-2xl font-bold">
                  R$ {financialOverview.accountsReceivable.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  próximos 30 dias
                </p>
              </div>
              <ArrowDown className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">A Pagar</p>
                <p className="text-2xl font-bold">
                  R$ {financialOverview.accountsPayable.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  próximos 30 dias
                </p>
              </div>
              <ArrowUp className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cash Flow Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Fluxo de Caixa</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={cashFlow}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip
                formatter={(value) => [`R$ ${value.toLocaleString()}`, '']}
              />
              <Bar
                yAxisId="left"
                dataKey="inflow"
                fill="#10B981"
                name="Entradas"
              />
              <Bar
                yAxisId="left"
                dataKey="outflow"
                fill="#DC2626"
                name="Saídas"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="balance"
                stroke="#7C3AED"
                strokeWidth={2}
                name="Saldo"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Invoices */}
      <Card>
        <CardHeader>
          <CardTitle>Faturas Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Cliente</th>
                  <th className="text-left p-3">Produto</th>
                  <th className="text-right p-3">Valor</th>
                  <th className="text-center p-3">Status</th>
                  <th className="text-center p-3">Data</th>
                  <th className="text-center p-3">Método</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b hover:bg-muted/50">
                    <td className="p-3">
                      <div>
                        <p className="font-semibold text-sm">
                          {invoice.customer}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {invoice.email}
                        </p>
                      </div>
                    </td>
                    <td className="p-3 text-sm">{invoice.product}</td>
                    <td className="text-right p-3 font-semibold">
                      R$ {invoice.amount.toLocaleString()}
                    </td>
                    <td className="text-center p-3">
                      <Badge
                        variant={
                          invoice.status === 'Pago'
                            ? 'default'
                            : invoice.status === 'Pendente'
                              ? 'secondary'
                              : 'destructive'
                        }
                      >
                        {invoice.status}
                      </Badge>
                    </td>
                    <td className="text-center p-3 text-sm">
                      {new Date(invoice.date).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="text-center p-3 text-sm">
                      {invoice.paymentMethod}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProjections = () => (
    <div className="space-y-6">
      {/* Projections Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Projeções Financeiras</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              data={[...monthlyFinancials, ...financialProjections]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip
                formatter={(value) => [`R$ ${value.toLocaleString()}`, '']}
              />
              <Bar
                yAxisId="left"
                dataKey="revenue"
                fill="#DC2626"
                name="Receita"
              />
              <Bar
                yAxisId="left"
                dataKey="expenses"
                fill="#6B7280"
                name="Despesas"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="margin"
                stroke="#7C3AED"
                strokeWidth={2}
                name="Margem (%)"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="profit"
                stroke="#10B981"
                strokeWidth={2}
                name="Lucro"
              />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span>Histórico</span>
            </div>
            <div className="mx-4 border-r h-4"></div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
              <span>Projeção</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {financialGoals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 gap-6">
        {financialInsights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  );

  const renderSubscriptions = () => (
    <div className="space-y-6">
      {/* Subscription KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total de Assinantes
                </p>
                <p className="text-2xl font-bold">
                  {subscriptions.reduce(
                    (sum, sub) => sum + sub.activeSubscribers,
                    0,
                  )}
                </p>
                <p className="text-xs text-green-500">+15.2% vs. anterior</p>
              </div>
              <Users className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">MRR</p>
                <p className="text-2xl font-bold">
                  R${' '}
                  {subscriptions
                    .reduce((sum, sub) => sum + sub.monthlyRevenue, 0)
                    .toLocaleString()}
                </p>
                <p className="text-xs text-green-500">+18.5% vs. anterior</p>
              </div>
              <Repeat className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Churn Médio</p>
                <p className="text-2xl font-bold">
                  {(
                    subscriptions.reduce(
                      (sum, sub) => sum + sub.churnRate * sub.activeSubscribers,
                      0,
                    ) /
                    subscriptions.reduce(
                      (sum, sub) => sum + sub.activeSubscribers,
                      0,
                    )
                  ).toFixed(1)}
                  %
                </p>
                <p className="text-xs text-green-500">-0.8% vs. anterior</p>
              </div>
              <ArrowDown className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subscription Plans */}
      <Card>
        <CardHeader>
          <CardTitle>Planos de Assinatura</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Plano</th>
                  <th className="text-right p-3">Assinantes</th>
                  <th className="text-right p-3">MRR</th>
                  <th className="text-right p-3">Churn</th>
                  <th className="text-right p-3">Tempo Médio</th>
                  <th className="text-right p-3">Crescimento</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub) => (
                  <tr key={sub.id} className="border-b hover:bg-muted/50">
                    <td className="p-3">
                      <p className="font-semibold text-sm">{sub.plan}</p>
                    </td>
                    <td className="text-right p-3 font-semibold">
                      {sub.activeSubscribers}
                    </td>
                    <td className="text-right p-3">
                      R$ {sub.monthlyRevenue.toLocaleString()}
                    </td>
                    <td className="text-right p-3">{sub.churnRate}%</td>
                    <td className="text-right p-3">{sub.avgLifetime} meses</td>
                    <td className="text-right p-3">
                      <span className="text-green-500">+{sub.growth}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Assinantes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={subscriptions}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ plan, activeSubscribers }) =>
                    `${plan.split(' ')[0]} (${activeSubscribers})`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="activeSubscribers"
                >
                  {subscriptions.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Receita Mensal Recorrente</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={subscriptions}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ plan, monthlyRevenue }) =>
                    `${plan.split(' ')[0]} (${Math.round(
                      monthlyRevenue / 1000,
                    )}k)`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="monthlyRevenue"
                >
                  {subscriptions.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`R$ ${value.toLocaleString()}`, 'MRR']}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financeiro</h1>
          <p className="text-muted-foreground">
            Análise financeira completa • Atualizado há 5 min
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Período
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Relatório
          </Button>
          <Button size="sm" className="goexplosion-gradient">
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        {[
          { id: 'overview', label: 'Visão Geral' },
          { id: 'revenue', label: 'Receitas' },
          { id: 'expenses', label: 'Despesas' },
          { id: 'cashflow', label: 'Fluxo de Caixa' },
          { id: 'projections', label: 'Projeções' },
          { id: 'subscriptions', label: 'Assinaturas' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'revenue' && renderRevenue()}
      {activeTab === 'expenses' && renderExpenses()}
      {activeTab === 'cashflow' && renderCashFlow()}
      {activeTab === 'projections' && renderProjections()}
      {activeTab === 'subscriptions' && renderSubscriptions()}
    </div>
  );
};

export default FinancialAnalysis;
