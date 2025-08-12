import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
  ComposedChart,
  Line,
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Info,
  Target,
  Zap,
  Users,
  Clock,
} from 'lucide-react';

// Componente de Funil de Conversão
export const ConversionFunnel = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-primary" />
          <span>Funil de Conversão</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((stage, index) => (
            <div key={stage.stage} className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{stage.stage}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {stage.percentage}%
                  </span>
                  <span className="text-sm font-semibold">
                    {stage.value.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="relative h-8 bg-secondary rounded-lg overflow-hidden">
                <div
                  className="h-full transition-all duration-500 ease-out"
                  style={{
                    width: `${stage.percentage * 5}%`,
                    backgroundColor: stage.color,
                    background: `linear-gradient(90deg, ${stage.color}, ${stage.color}dd)`,
                  }}
                />
              </div>
              {index < data.length - 1 && (
                <div className="flex justify-center mt-2">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-muted-foreground opacity-50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Componente de Insights de IA
export const AIInsights = ({ insights, insightData }) => {
  const isLoading = !insightData || Object.keys(insightData).length === 0;

  const getInsightIcon = (type) => {
    switch (type) {
      case 'opportunity':
        return <Zap className="h-4 w-4" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4" />;
      case 'success':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getInsightColor = (type) => {
    switch (type) {
      case 'opportunity':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'warning':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'success':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-primary" />
          <span>Insights Inteligentes</span>
        </CardTitle>
      </CardHeader>
      {isLoading ? (
        <CardContent>
          <p className="text-sm text-muted-foreground">Carregando...</p>
        </CardContent>
      ) : (
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight) => (
              <div
                key={insight.id}
                className={`p-4 rounded-lg border ${getInsightColor(insight.type)}`}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {getInsightIcon(insight.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold">
                        {'Titulo Insight'}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {100}% confiança
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {insightData.insightsIA.diagnosticoGeral}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">
                        Impacto: {'Alto'}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-6"
                      >
                        {'Plano de ação'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

// Componente de Metas e Progresso
export const GoalsProgress = ({ goals }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-primary" />
          <span>Metas do Mês</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{goal.goal}</span>
                <div className="flex items-center space-x-2">
                  {goal.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-primary" />
                  ) : goal.trend === 'down' ? (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  ) : (
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  )}
                  <span className="text-xs text-muted-foreground">
                    {goal.daysLeft} dias restantes
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  {typeof goal.current === 'number' && goal.current > 1000
                    ? goal.current.toLocaleString()
                    : goal.current}
                  {typeof goal.target === 'number' && goal.target > 1000
                    ? ` / ${goal.target.toLocaleString()}`
                    : ` / ${goal.target}`}
                </span>
                <span className="font-semibold text-primary">
                  {goal.progress.toFixed(1)}%
                </span>
              </div>
              <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${Math.min(goal.progress, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Componente de Performance por Hora
export const HourlyPerformance = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-primary" />
          <span>Performance por Hora</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
            <XAxis dataKey="hour" stroke="#CCCCCC" fontSize={12} />
            <YAxis yAxisId="left" stroke="#CCCCCC" fontSize={12} />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#CCCCCC"
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #333333',
                borderRadius: '8px',
              }}
            />
            <Bar
              yAxisId="left"
              dataKey="visitors"
              fill="#00AAFF"
              opacity={0.6}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="sales"
              stroke="#00FF88"
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

// Componente de Tráfego por Canal
export const TrafficChannels = ({ data }) => {
  const COLORS = [
    '#DC2626',
    '#3B82F6',
    '#F59E0B',
    '#EF4444',
    '#7C3AED',
    '#10B981',
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tráfego por Canal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="visitors"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid #333333',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {data.map((channel, index) => (
              <div
                key={channel.channel}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm font-medium">{channel.channel}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">
                    {channel.visitors.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    CPL: R$ {channel.cpl.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Componente de Benchmark
export const BenchmarkComparison = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparação com Mercado</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
            >
              <span className="text-sm font-medium">{item.metric}</span>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm font-semibold">{item.value}</div>
                  <div className="text-xs text-muted-foreground">Você</div>
                </div>
                <div className="text-right">
                  <div className="text-sm">{item.benchmark}</div>
                  <div className="text-xs text-muted-foreground">Mercado</div>
                </div>
                <div className="flex items-center">
                  {item.performance === 'above' ? (
                    <TrendingUp className="h-4 w-4 text-primary" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
