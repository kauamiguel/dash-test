import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Package,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Star,
  Eye,
  Edit,
  Archive,
  Plus,
  Filter,
  Search,
  MoreHorizontal,
  Target,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
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
} from 'recharts';

const ProductsAnalysis = ({ data }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const {
    productsOverview,
    productsList,
    productCategories,
    productPerformanceData,
    productInsights,
    productGoals,
    topSellingProducts,
    productTypeDistribution,
  } = data;

  const COLORS = [
    '#DC2626',
    '#3B82F6',
    '#F59E0B',
    '#EF4444',
    '#7C3AED',
    '#10B981',
  ];

  const ProductCard = ({ product }) => {
    const isActive = product.status === 'Ativo';
    const isDraft = product.status === 'Rascunho';

    return (
      <Card className="hover:shadow-lg transition-all duration-200">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {product.type} • {product.category}
                </p>
              </div>
            </div>
            <Badge
              variant={isActive ? 'default' : isDraft ? 'secondary' : 'outline'}
            >
              {product.status}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-xs text-muted-foreground">Preço</p>
              <p className="font-semibold">R$ {product.price}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Vendas</p>
              <p className="font-semibold">{product.sales}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Receita</p>
              <p className="font-semibold">
                R$ {product.revenue.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Conversão</p>
              <p className="font-semibold">{product.conversion}%</p>
            </div>
          </div>

          {isActive && (
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span className="text-xs font-medium">{product.rating}</span>
                <span className="text-xs text-muted-foreground">
                  ({product.reviews})
                </span>
              </div>
              <div
                className={`flex items-center space-x-1 text-xs ${
                  product.growth > 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {product.growth > 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span>
                  {product.growth > 0 ? '+' : ''}
                  {product.growth}%
                </span>
              </div>
            </div>
          )}

          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="flex-1">
              <Eye className="h-3 w-3 mr-1" />
              Ver
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              <Edit className="h-3 w-3 mr-1" />
              Editar
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

    const getBadgeVariant = (type) => {
      switch (type) {
        case 'oportunidade':
          return 'default';
        case 'aviso':
          return 'destructive';
        case 'sucesso':
          return 'default';
        case 'otimizacao':
          return 'secondary';
        default:
          return 'default';
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
                  <Badge
                    variant={getBadgeVariant(insight.type)}
                    className="text-xs"
                  >
                    {insight.type.charAt(0).toUpperCase() +
                      insight.type.slice(1)}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
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
                        Receita Potencial:
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
              <span>{goal.current}</span>
              <span>{goal.target}</span>
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
                <p className="text-sm text-muted-foreground">
                  Total de Produtos
                </p>
                <p className="text-2xl font-bold">
                  {productsOverview.totalProducts}
                </p>
                <p className="text-xs text-green-500">+2 este mês</p>
              </div>
              <Package className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Produtos Ativos</p>
                <p className="text-2xl font-bold">
                  {productsOverview.activeProducts}
                </p>
                <p className="text-xs text-muted-foreground">
                  {productsOverview.draftProducts} em rascunho
                </p>
              </div>
              <ShoppingCart className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Total</p>
                <p className="text-2xl font-bold">
                  R$ {productsOverview.totalRevenue.toLocaleString()}
                </p>
                <p className="text-xs text-green-500">+15.2% vs. anterior</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Preço Médio</p>
                <p className="text-2xl font-bold">
                  R$ {productsOverview.avgPrice}
                </p>
                <p className="text-xs text-green-500">+8.3% vs. anterior</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Performance dos Produtos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar
                yAxisId="left"
                dataKey="receita"
                fill="#DC2626"
                name="Receita (R$)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="vendas"
                stroke="#7C3AED"
                strokeWidth={2}
                name="Vendas"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Products */}
      <Card>
        <CardHeader>
          <CardTitle>Top 5 Produtos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topSellingProducts.map((product, index) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {product.type} • {product.sales} vendas
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    R$ {product.revenue.toLocaleString()}
                  </p>
                  <p
                    className={`text-xs ${product.growth > 0 ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {product.growth > 0 ? '+' : ''}
                    {product.growth}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Gerenciar Produtos</h3>
          <p className="text-sm text-muted-foreground">
            {productsList.length} produtos • {productsOverview.activeProducts}{' '}
            ativos
          </p>
        </div>
        <Button className="goexplosion-gradient">
          <Plus className="h-4 w-4 mr-2" />
          Novo Produto
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="pl-10 pr-4 py-2 w-full border rounded-md"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  const renderCategories = () => (
    <div className="space-y-6">
      {/* Categories Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productCategories.map((category) => (
          <Card key={category.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{category.name}</h3>
                <Badge variant="outline">{category.count} produtos</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Receita</span>
                  <span className="font-semibold">
                    R$ {category.revenue.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Crescimento
                  </span>
                  <span
                    className={`font-semibold ${category.growth > 0 ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {category.growth > 0 ? '+' : ''}
                    {category.growth}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Type Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Distribuição por Tipo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productTypeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ type, percentage }) => `${type} (${percentage}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="revenue"
                >
                  {productTypeDistribution.map((entry, index) => (
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
              {productTypeDistribution.map((type, index) => (
                <div
                  key={type.type}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-sm font-medium">{type.type}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">
                      R$ {type.revenue.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {type.count} produtos
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

  const renderInsights = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {productInsights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  );

  const renderGoals = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {productGoals.map((goal) => (
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
          <h1 className="text-3xl font-bold text-foreground">
            Gestão de Produtos
          </h1>
          <p className="text-muted-foreground">
            Gerencie seus produtos digitais e analise performance • Atualizado
            há 5 min
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            Relatório
          </Button>
          <Button size="sm" className="goexplosion-gradient">
            Atualizar
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        {[
          { id: 'overview', label: 'Visão Geral' },
          { id: 'products', label: 'Produtos' },
          { id: 'categories', label: 'Categorias' },
          { id: 'insights', label: 'Insights' },
          { id: 'goals', label: 'Metas' },
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
      {activeTab === 'products' && renderProducts()}
      {activeTab === 'categories' && renderCategories()}
      {activeTab === 'insights' && renderInsights()}
      {activeTab === 'goals' && renderGoals()}
    </div>
  );
};

export default ProductsAnalysis;
