import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  Clock,
  MousePointer,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  Target,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Activity,
  Zap,
  Filter,
  Download,
  RefreshCw
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
  ComposedChart
} from 'recharts';

const AnalyticsAnalysis = ({ data }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('30d');

  const {
    analyticsOverview,
    trafficSources,
    conversionFunnelData,
    timeAnalytics,
    deviceAnalytics,
    geographicData,
    cohortAnalysis,
    contentAnalytics,
    campaignAnalytics,
    analyticsInsights,
    competitorAnalysis,
    realtimeData
  } = data;

  const COLORS = ['#DC2626', '#3B82F6', '#F59E0B', '#EF4444', '#7C3AED', '#10B981'];

  const MetricCard = ({ title, value, change, changeType, icon: Icon, subtitle }) => {
    const isPositive = changeType === 'positive';
    const TrendIcon = isPositive ? TrendingUp : TrendingDown;
    
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{title}</p>
              <p className="text-2xl font-bold">{value}</p>
              {change && (
                <div className={`flex items-center space-x-1 text-sm ${
                  isPositive ? 'text-green-500' : 'text-red-500'
                }`}>
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

  const renderOverview = () => (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Visitantes Únicos"
          value={analyticsOverview.uniqueVisitors.toLocaleString()}
          change="+12.5%"
          changeType="positive"
          icon={Users}
          subtitle="últimos 30 dias"
        />
        <MetricCard
          title="Visualizações"
          value={analyticsOverview.pageViews.toLocaleString()}
          change="+8.3%"
          changeType="positive"
          icon={Eye}
          subtitle="páginas visualizadas"
        />
        <MetricCard
          title="Tempo Médio"
          value={`${analyticsOverview.avgSessionDuration}min`}
          change="+15.2%"
          changeType="positive"
          icon={Clock}
          subtitle="duração da sessão"
        />
        <MetricCard
          title="Taxa de Conversão"
          value={`${analyticsOverview.conversionRate}%`}
          change="+0.4%"
          changeType="positive"
          icon={Target}
          subtitle="visitantes → clientes"
        />
      </div>

      {/* Traffic Sources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Fontes de Tráfego</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trafficSources}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ source, percentage }) => `${source} (${percentage}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="visitors"
                >
                  {trafficSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value.toLocaleString(), 'Visitantes']} />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="space-y-3">
              {trafficSources.map((source, index) => (
                <div key={source.source} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <div>
                      <p className="font-semibold text-sm">{source.source}</p>
                      <p className="text-xs text-muted-foreground">CPL: R$ {source.cpl}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">R$ {source.revenue.toLocaleString()}</p>
                    <p className={`text-xs ${source.growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {source.growth > 0 ? '+' : ''}{source.growth}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hourly Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Performance por Horário</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={timeAnalytics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="visitors" fill="#DC2626" name="Visitantes" />
              <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#7C3AED" strokeWidth={2} name="Conversões" />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  const renderTraffic = () => (
    <div className="space-y-6">
      {/* Device Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Smartphone className="h-5 w-5" />
            <span>Análise por Dispositivo</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deviceAnalytics.map((device, index) => {
              const DeviceIcon = device.device === 'Desktop' ? Monitor : 
                               device.device === 'Mobile' ? Smartphone : Tablet;
              return (
                <Card key={device.device}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <DeviceIcon className="h-8 w-8 text-red-500" />
                      <Badge variant="outline">{device.percentage}%</Badge>
                    </div>
                    <h3 className="font-semibold mb-2">{device.device}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Visitantes</span>
                        <span className="font-semibold">{device.visitors.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Receita</span>
                        <span className="font-semibold">R$ {device.revenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Sessão Média</span>
                        <span className="font-semibold">{device.avgSession}min</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Geographic Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5" />
            <span>Distribuição Geográfica</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {geographicData.map((location, index) => (
              <div key={location.state} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{location.state}</p>
                    <p className="text-xs text-muted-foreground">{location.percentage}% do tráfego</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">R$ {location.revenue.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">{location.visitors.toLocaleString()} visitantes</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      {/* Content Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Performance de Conteúdo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Página</th>
                  <th className="text-right p-3">Visualizações</th>
                  <th className="text-right p-3">Tempo Médio</th>
                  <th className="text-right p-3">Taxa Rejeição</th>
                  <th className="text-right p-3">Conversões</th>
                  <th className="text-right p-3">Taxa Conv.</th>
                </tr>
              </thead>
              <tbody>
                {contentAnalytics.map((content, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3">
                      <div>
                        <p className="font-semibold text-sm">{content.page}</p>
                        <p className="text-xs text-muted-foreground">{content.uniqueViews.toLocaleString()} únicos</p>
                      </div>
                    </td>
                    <td className="text-right p-3 font-semibold">{content.views.toLocaleString()}</td>
                    <td className="text-right p-3">{content.avgTime}min</td>
                    <td className="text-right p-3">{content.bounceRate}%</td>
                    <td className="text-right p-3 font-semibold">{content.conversions}</td>
                    <td className="text-right p-3">
                      <Badge variant="outline">{content.conversionRate}%</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Funnel Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Funil de Conversão</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversionFunnelData.map((stage, index) => (
              <div key={stage.stage} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{stage.stage}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">{stage.percentage}%</span>
                    <span className="font-semibold">{stage.count.toLocaleString()}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full bg-gradient-to-r from-red-500 to-purple-600"
                    style={{ width: `${stage.percentage}%` }}
                  ></div>
                </div>
                {index < conversionFunnelData.length - 1 && (
                  <div className="text-center mt-2">
                    <Badge variant="outline" className="text-xs">
                      Conversão: {conversionFunnelData[index + 1].conversion}%
                    </Badge>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCampaigns = () => (
    <div className="space-y-6">
      {/* Campaign Performance */}
      <div className="grid grid-cols-1 gap-6">
        {campaignAnalytics.map(campaign => (
          <Card key={campaign.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{campaign.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline">{campaign.type}</Badge>
                    <Badge variant={campaign.status === 'Ativa' ? 'default' : 'secondary'}>
                      {campaign.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-500">R$ {campaign.revenue.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">ROI: {campaign.roi}%</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Orçamento</p>
                  <p className="font-semibold">R$ {campaign.budget.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Gasto</p>
                  <p className="font-semibold">R$ {campaign.spent.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Impressões</p>
                  <p className="font-semibold">{campaign.impressions.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Cliques</p>
                  <p className="font-semibold">{campaign.clicks.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">CTR</p>
                  <p className="font-semibold">{campaign.ctr}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">CPA</p>
                  <p className="font-semibold">R$ {campaign.cpa}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span>Período: {campaign.startDate} - {campaign.endDate}</span>
                  <span>{campaign.conversions} conversões</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderInsights = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {analyticsInsights.map(insight => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  );

  const renderRealtime = () => (
    <div className="space-y-6">
      {/* Real-time KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Usuários Ativos</p>
                <p className="text-2xl font-bold">{realtimeData.activeUsers}</p>
                <div className="flex items-center space-x-1 text-green-500">
                  <Activity className="h-3 w-3" />
                  <span className="text-xs">Tempo real</span>
                </div>
              </div>
              <Zap className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Sessões Ativas</p>
                <p className="text-2xl font-bold">{realtimeData.currentSessions}</p>
                <p className="text-xs text-muted-foreground">sessões em andamento</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Conversões Hoje</p>
                <p className="text-2xl font-bold">{realtimeData.conversionsToday}</p>
                <p className="text-xs text-green-500">+3 na última hora</p>
              </div>
              <Target className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Hoje</p>
                <p className="text-2xl font-bold">R$ {realtimeData.revenueToday.toLocaleString()}</p>
                <p className="text-xs text-green-500">+R$ 580 na última hora</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages & Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Páginas Mais Visitadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {realtimeData.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm truncate">{page.page}</span>
                  <Badge variant="outline">{page.activeUsers} ativos</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Principais Fontes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {realtimeData.topSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{source.source}</span>
                  <Badge variant="outline">{source.activeUsers} ativos</Badge>
                </div>
              ))}
            </div>
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
          <h1 className="text-3xl font-bold text-foreground">Análises Avançadas</h1>
          <p className="text-muted-foreground">
            Insights completos sobre performance e comportamento • Atualizado há 2 min
          </p>
        </div>
        <div className="flex items-center space-x-2">
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
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        {[
          { id: 'overview', label: 'Visão Geral' },
          { id: 'traffic', label: 'Tráfego' },
          { id: 'content', label: 'Conteúdo' },
          { id: 'campaigns', label: 'Campanhas' },
          { id: 'insights', label: 'Insights' },
          { id: 'realtime', label: 'Tempo Real' }
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
      {activeTab === 'traffic' && renderTraffic()}
      {activeTab === 'content' && renderContent()}
      {activeTab === 'campaigns' && renderCampaigns()}
      {activeTab === 'insights' && renderInsights()}
      {activeTab === 'realtime' && renderRealtime()}
    </div>
  );
};

export default AnalyticsAnalysis;

