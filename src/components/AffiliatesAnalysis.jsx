import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Award,
  UserPlus,
  Crown,
  Star,
  Eye,
  Edit,
  Ban,
  Mail,
  Phone,
  Calendar,
  Target,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Filter,
  Search,
  Download,
  RefreshCw,
  MoreHorizontal,
  Clock,
  CreditCard
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
  Area
} from 'recharts';

const AffiliatesAnalysis = ({ data }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTier, setSelectedTier] = useState('all');

  const {
    affiliatesOverview,
    topAffiliates,
    affiliatesByTier,
    affiliatePerformanceData,
    commissionStructure,
    affiliateInsights,
    paymentHistory,
    affiliateGoals,
    trafficSources,
    conversionFunnel,
    recentActivity
  } = data;

  const COLORS = ['#DC2626', '#F59E0B', '#6B7280', '#92400E', '#7C3AED'];

  const AffiliateCard = ({ affiliate }) => {
    const getTierColor = (tier) => {
      switch (tier) {
        case 'Diamante': return 'bg-red-500';
        case 'Ouro': return 'bg-yellow-500';
        case 'Prata': return 'bg-gray-400';
        case 'Bronze': return 'bg-yellow-800';
        default: return 'bg-purple-500';
      }
    };

    const getTierIcon = (tier) => {
      switch (tier) {
        case 'Diamante': return <Crown className="h-4 w-4" />;
        case 'Ouro': return <Award className="h-4 w-4" />;
        case 'Prata': return <Star className="h-4 w-4" />;
        default: return <Users className="h-4 w-4" />;
      }
    };

    return (
      <Card className="hover:shadow-lg transition-all duration-200">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                #{affiliate.rank}
              </div>
              <div>
                <h3 className="font-semibold text-sm">{affiliate.name}</h3>
                <p className="text-xs text-muted-foreground">{affiliate.email}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge className={`${getTierColor(affiliate.tier)} text-white text-xs`}>
                    <span className="mr-1">{getTierIcon(affiliate.tier)}</span>
                    {affiliate.tier}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {affiliate.status}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-xs text-muted-foreground">Vendas</p>
              <p className="font-semibold">{affiliate.sales}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Receita</p>
              <p className="font-semibold">R$ {affiliate.revenue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Comissão</p>
              <p className="font-semibold text-green-500">R$ {affiliate.commission.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Conversão</p>
              <p className="font-semibold">{affiliate.conversionRate}%</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-muted-foreground">
              Membro desde {new Date(affiliate.joinDate).toLocaleDateString('pt-BR')}
            </div>
            <div className={`flex items-center space-x-1 text-xs ${
              affiliate.growth > 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {affiliate.growth > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              <span>{affiliate.growth > 0 ? '+' : ''}{affiliate.growth}%</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="flex-1">
              <Eye className="h-3 w-3 mr-1" />
              Ver
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              <Mail className="h-3 w-3 mr-1" />
              Contato
            </Button>
            <Button size="sm" variant="outline">
              <MoreHorizontal className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  const InsightCard = ({ insight }) => {
    const getInsightIcon = (type) => {
      switch (type) {
        case 'oportunidade': return <Lightbulb className="h-4 w-4" />;
        case 'aviso': return <AlertTriangle className="h-4 w-4" />;
        case 'sucesso': return <CheckCircle className="h-4 w-4" />;
        case 'otimizacao': return <Target className="h-4 w-4" />;
        default: return <Lightbulb className="h-4 w-4" />;
      }
    };

    const getInsightColor = (type) => {
      switch (type) {
        case 'oportunidade': return 'text-blue-500';
        case 'aviso': return 'text-yellow-500';
        case 'sucesso': return 'text-green-500';
        case 'otimizacao': return 'text-purple-500';
        default: return 'text-blue-500';
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
                  {insight.affiliate && (
                    <Badge variant="outline" className="text-xs">
                      {insight.affiliate}
                    </Badge>
                  )}
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
                      <p className="text-xs text-muted-foreground">Receita Potencial:</p>
                      <p className={`text-sm font-medium ${
                        insight.potentialRevenue > 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {insight.potentialRevenue > 0 ? '+' : ''}R$ {Math.abs(insight.potentialRevenue).toLocaleString()}
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
        case 'on-track': return 'text-green-500';
        case 'at-risk': return 'text-yellow-500';
        case 'behind': return 'text-red-500';
        default: return 'text-gray-500';
      }
    };

    const getStatusBg = (status) => {
      switch (status) {
        case 'on-track': return 'bg-green-500';
        case 'at-risk': return 'bg-yellow-500';
        case 'behind': return 'bg-red-500';
        default: return 'bg-gray-500';
      }
    };

    return (
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-sm">{goal.title}</h4>
            <Badge variant="outline" className={getStatusColor(goal.status)}>
              {goal.status === 'on-track' ? 'No prazo' : 
               goal.status === 'at-risk' ? 'Em risco' : 'Atrasado'}
            </Badge>
          </div>
          
          <p className="text-xs text-muted-foreground mb-3">{goal.description}</p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{typeof goal.current === 'number' && goal.current > 1000 ? 
                `R$ ${goal.current.toLocaleString()}` : goal.current}</span>
              <span>{typeof goal.target === 'number' && goal.target > 1000 ? 
                `R$ ${goal.target.toLocaleString()}` : goal.target}</span>
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
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Afiliados</p>
                <p className="text-2xl font-bold">{affiliatesOverview.totalAffiliates}</p>
                <p className="text-xs text-green-500">+12 este mês</p>
              </div>
              <Users className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Afiliados Ativos</p>
                <p className="text-2xl font-bold">{affiliatesOverview.activeAffiliates}</p>
                <p className="text-xs text-muted-foreground">{affiliatesOverview.pendingAffiliates} pendentes</p>
              </div>
              <UserPlus className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Comissões Pagas</p>
                <p className="text-2xl font-bold">R$ {affiliatesOverview.paidCommissions.toLocaleString()}</p>
                <p className="text-xs text-green-500">+18.5% vs. anterior</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Taxa Média</p>
                <p className="text-2xl font-bold">{affiliatesOverview.avgCommissionRate}%</p>
                <p className="text-xs text-green-500">+2.1% vs. anterior</p>
              </div>
              <Award className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Performance dos Afiliados</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={affiliatePerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Area yAxisId="left" type="monotone" dataKey="receita" stackId="1" stroke="#DC2626" fill="#DC2626" fillOpacity={0.6} />
              <Line yAxisId="right" type="monotone" dataKey="afiliados" stroke="#7C3AED" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Tier Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Distribuição por Tier</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={affiliatesByTier}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ tier, count }) => `${tier} (${count})`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {affiliatesByTier.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="space-y-3">
              {affiliatesByTier.map((tier, index) => (
                <div key={tier.tier} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: tier.color }}
                    ></div>
                    <div>
                      <p className="font-semibold text-sm">{tier.tier}</p>
                      <p className="text-xs text-muted-foreground">{tier.commissionRate}% comissão</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">{tier.count} afiliados</p>
                    <p className="text-xs text-muted-foreground">Min: {tier.minSales} vendas</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAffiliates = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Gerenciar Afiliados</h3>
          <p className="text-sm text-muted-foreground">
            {affiliatesOverview.totalAffiliates} afiliados • {affiliatesOverview.activeAffiliates} ativos
          </p>
        </div>
        <Button className="goexplosion-gradient">
          <UserPlus className="h-4 w-4 mr-2" />
          Convidar Afiliado
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar afiliados..."
            className="pl-10 pr-4 py-2 w-full border rounded-md"
          />
        </div>
        <select className="px-3 py-2 border rounded-md">
          <option value="all">Todos os Tiers</option>
          <option value="diamante">Diamante</option>
          <option value="ouro">Ouro</option>
          <option value="prata">Prata</option>
          <option value="bronze">Bronze</option>
        </select>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      {/* Top Affiliates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topAffiliates.map(affiliate => (
          <AffiliateCard key={affiliate.id} affiliate={affiliate} />
        ))}
      </div>
    </div>
  );

  const renderCommissions = () => (
    <div className="space-y-6">
      {/* Commission Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total a Pagar</p>
                <p className="text-2xl font-bold">R$ {affiliatesOverview.pendingCommissions.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">23 afiliados</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pago Este Mês</p>
                <p className="text-2xl font-bold">R$ {affiliatesOverview.paidCommissions.toLocaleString()}</p>
                <p className="text-xs text-green-500">+18.5% vs. anterior</p>
              </div>
              <CreditCard className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Geral</p>
                <p className="text-2xl font-bold">R$ {affiliatesOverview.totalCommissions.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">acumulado</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Pagamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Afiliado</th>
                  <th className="text-right p-3">Valor</th>
                  <th className="text-center p-3">Período</th>
                  <th className="text-center p-3">Status</th>
                  <th className="text-center p-3">Método</th>
                  <th className="text-right p-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment) => (
                  <tr key={payment.id} className="border-b hover:bg-muted/50">
                    <td className="p-3">
                      <div>
                        <p className="font-semibold text-sm">{payment.affiliate}</p>
                        <p className="text-xs text-muted-foreground">{payment.sales} vendas • {payment.commission}%</p>
                      </div>
                    </td>
                    <td className="text-right p-3 font-semibold">R$ {payment.amount.toLocaleString()}</td>
                    <td className="text-center p-3">{payment.period}</td>
                    <td className="text-center p-3">
                      <Badge variant={
                        payment.status === 'Pago' ? 'default' : 
                        payment.status === 'Pendente' ? 'destructive' : 'secondary'
                      }>
                        {payment.status}
                      </Badge>
                    </td>
                    <td className="text-center p-3">{payment.method}</td>
                    <td className="text-right p-3">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Commission Structure */}
      <Card>
        <CardHeader>
          <CardTitle>Estrutura de Comissões</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {commissionStructure.map((product, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-3">{product.product}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Comissão Base: {product.baseCommission}%</p>
                    <div className="space-y-1">
                      {Object.entries(product.tierBonus).map(([tier, bonus]) => (
                        <div key={tier} className="flex justify-between text-sm">
                          <span>{tier}:</span>
                          <span>+{bonus}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Bônus por Volume:</p>
                    <div className="space-y-1">
                      {product.volumeBonus.map((bonus, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span>{bonus.minSales}+ vendas:</span>
                          <span>+{bonus.bonus}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderInsights = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {affiliateInsights.map(insight => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  );

  const renderGoals = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {affiliateGoals.map(goal => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestão de Afiliados</h1>
          <p className="text-muted-foreground">
            Gerencie sua rede de afiliados e maximize resultados • Atualizado há 3 min
          </p>
        </div>
        <div className="flex items-center space-x-2">
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

      {/* Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        {[
          { id: 'overview', label: 'Visão Geral' },
          { id: 'affiliates', label: 'Afiliados' },
          { id: 'commissions', label: 'Comissões' },
          { id: 'insights', label: 'Insights' },
          { id: 'goals', label: 'Metas' }
        ].map(tab => (
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
      {activeTab === 'affiliates' && renderAffiliates()}
      {activeTab === 'commissions' && renderCommissions()}
      {activeTab === 'insights' && renderInsights()}
      {activeTab === 'goals' && renderGoals()}
    </div>
  );
};

export default AffiliatesAnalysis;

