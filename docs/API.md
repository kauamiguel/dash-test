# Guia de Integração com API - Goexplosion Dashboard

Este guia fornece instruções detalhadas sobre como integrar o Goexplosion Dashboard com APIs reais para substituir os dados simulados.

## Índice

- [Visão Geral](#visão-geral)
- [Configuração Inicial](#configuração-inicial)
- [Estrutura de Serviços](#estrutura-de-serviços)
- [Integração por Seção](#integração-por-seção)
- [Autenticação e Segurança](#autenticação-e-segurança)
- [Tratamento de Erros](#tratamento-de-erros)
- [Cache e Performance](#cache-e-performance)
- [Exemplos Completos](#exemplos-completos)

## Visão Geral

O Goexplosion Dashboard foi projetado para funcionar tanto com dados simulados quanto com APIs reais. A integração com APIs reais permite que o dashboard exiba dados em tempo real do seu negócio.

### Arquitetura de Integração

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│  Componentes    │◄────►│  Serviços API   │◄────►│  API Externa    │
│  React          │      │  (src/services) │      │  (Goexplosion)  │
│                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

### Benefícios da Integração com API Real

- Dados em tempo real do seu negócio
- Personalização baseada no usuário logado
- Funcionalidades completas de CRUD
- Alertas e notificações em tempo real
- Sincronização entre dispositivos

## Configuração Inicial

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```
VITE_API_URL=https://api.goexplosion.com/v1
VITE_API_KEY=sua_chave_api
VITE_API_TIMEOUT=30000
```

Para diferentes ambientes, você pode criar:
- `.env.development` para desenvolvimento
- `.env.production` para produção
- `.env.staging` para ambiente de testes

### Configuração do Cliente HTTP

Crie um arquivo `src/services/client.js`:

```javascript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// Interceptor para adicionar token de autenticação
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Interceptor para tratamento de erros
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Tratamento de erros específicos
    if (error.response) {
      // Erro de autenticação
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      
      // Erro de permissão
      if (error.response.status === 403) {
        console.error('Permissão negada');
      }
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
```

## Estrutura de Serviços

Organize seus serviços de API em arquivos separados por domínio:

```
src/
└── services/
    ├── client.js
    ├── auth.service.js
    ├── dashboard.service.js
    ├── sales.service.js
    ├── products.service.js
    ├── orderBumps.service.js
    ├── analytics.service.js
    ├── affiliates.service.js
    └── financial.service.js
```

### Exemplo de Serviço

```javascript
// src/services/dashboard.service.js
import apiClient from './client';

export const getDashboardData = async (period = '30d') => {
  const response = await apiClient.get('/dashboard', {
    params: { period }
  });
  return response.data;
};

export const getRevenueData = async (period = '15d') => {
  const response = await apiClient.get('/dashboard/revenue', {
    params: { period }
  });
  return response.data;
};

export const getTopProducts = async (limit = 5) => {
  const response = await apiClient.get('/dashboard/top-products', {
    params: { limit }
  });
  return response.data;
};

export const getFunnelData = async () => {
  const response = await apiClient.get('/dashboard/funnel');
  return response.data;
};

export const getInsights = async () => {
  const response = await apiClient.get('/dashboard/insights');
  return response.data;
};

// Mais funções...
```

## Integração por Seção

### Dashboard Principal

```javascript
// src/components/Dashboard.jsx
import { useEffect, useState } from 'react';
import { 
  getDashboardData, 
  getRevenueData, 
  getTopProducts,
  getFunnelData,
  getInsights
} from '../services/dashboard.service';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [revenueData, setRevenueData] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [funnelData, setFunnelData] = useState(null);
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [period, setPeriod] = useState('30d');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Carregar dados em paralelo
        const [
          dashboardResponse,
          revenueResponse,
          topProductsResponse,
          funnelResponse,
          insightsResponse
        ] = await Promise.all([
          getDashboardData(period),
          getRevenueData('15d'),
          getTopProducts(5),
          getFunnelData(),
          getInsights()
        ]);
        
        setDashboardData(dashboardResponse);
        setRevenueData(revenueResponse);
        setTopProducts(topProductsResponse);
        setFunnelData(funnelResponse);
        setInsights(insightsResponse);
      } catch (err) {
        setError(err.message);
        console.error('Erro ao carregar dados do dashboard:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [period]);

  // Renderização do componente...
};
```

### Seção de Vendas

```javascript
// src/services/sales.service.js
import apiClient from './client';

export const getSalesOverview = async (period = '30d') => {
  const response = await apiClient.get('/sales/overview', {
    params: { period }
  });
  return response.data;
};

export const getSalesByProduct = async (period = '30d') => {
  const response = await apiClient.get('/sales/by-product', {
    params: { period }
  });
  return response.data;
};

export const getSalesByChannel = async (period = '30d') => {
  const response = await apiClient.get('/sales/by-channel', {
    params: { period }
  });
  return response.data;
};

export const getSalesInsights = async () => {
  const response = await apiClient.get('/sales/insights');
  return response.data;
};

export const getSalesGoals = async () => {
  const response = await apiClient.get('/sales/goals');
  return response.data;
};
```

```javascript
// src/components/SalesAnalysis.jsx
import { useEffect, useState } from 'react';
import { 
  getSalesOverview,
  getSalesByProduct,
  getSalesByChannel,
  getSalesInsights,
  getSalesGoals
} from '../services/sales.service';

// Implementação similar ao Dashboard...
```

### Seção de OrderBumps

```javascript
// src/services/orderBumps.service.js
import apiClient from './client';

export const getOrderBumpsOverview = async (period = '30d') => {
  const response = await apiClient.get('/order-bumps/overview', {
    params: { period }
  });
  return response.data;
};

export const getOrderBumpsPerformance = async (period = '30d') => {
  const response = await apiClient.get('/order-bumps/performance', {
    params: { period }
  });
  return response.data;
};

export const getOrderBumpsInsights = async () => {
  const response = await apiClient.get('/order-bumps/insights');
  return response.data;
};

export const createOrderBump = async (orderBumpData) => {
  const response = await apiClient.post('/order-bumps', orderBumpData);
  return response.data;
};

export const updateOrderBump = async (id, orderBumpData) => {
  const response = await apiClient.put(`/order-bumps/${id}`, orderBumpData);
  return response.data;
};

export const deleteOrderBump = async (id) => {
  const response = await apiClient.delete(`/order-bumps/${id}`);
  return response.data;
};
```

## Autenticação e Segurança

### Serviço de Autenticação

```javascript
// src/services/auth.service.js
import apiClient from './client';

export const login = async (email, password) => {
  const response = await apiClient.post('/auth/login', { email, password });
  const { token, user } = response.data;
  
  // Armazenar token e informações do usuário
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  
  return { token, user };
};

export const logout = async () => {
  try {
    // Notificar o servidor sobre o logout (opcional)
    await apiClient.post('/auth/logout');
  } catch (error) {
    console.error('Erro ao fazer logout no servidor:', error);
  } finally {
    // Limpar dados locais
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};

export const register = async (userData) => {
  const response = await apiClient.post('/auth/register', userData);
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await apiClient.post('/auth/forgot-password', { email });
  return response.data;
};

export const resetPassword = async (token, password) => {
  const response = await apiClient.post('/auth/reset-password', { token, password });
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await apiClient.get('/auth/me');
  return response.data;
};

export const updateProfile = async (userData) => {
  const response = await apiClient.put('/auth/profile', userData);
  return response.data;
};
```

### Contexto de Autenticação

```javascript
// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { login, logout, getCurrentUser } from '../services/auth.service';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          const userData = await getCurrentUser();
          setUser(userData);
        } catch (err) {
          console.error('Erro ao carregar usuário:', err);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      }
      
      setLoading(false);
    };

    loadUser();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      setError(null);
      const { user } = await login(email, password);
      setUser(user);
      return user;
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao fazer login');
      throw err;
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (err) {
      console.error('Erro ao fazer logout:', err);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        error,
        login: handleLogin, 
        logout: handleLogout,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

## Tratamento de Erros

### Hook de Tratamento de Erros

```javascript
// src/hooks/useErrorHandler.js
import { useState } from 'react';
import { useNotifications } from '../contexts/NotificationContext';

export const useErrorHandler = () => {
  const [error, setError] = useState(null);
  const { addNotification } = useNotifications();

  const handleError = (error, customMessage = null) => {
    console.error('Erro capturado:', error);
    
    // Extrair mensagem de erro
    let errorMessage = customMessage;
    
    if (!errorMessage) {
      if (error.response) {
        // Erro da API
        errorMessage = error.response.data.message || `Erro ${error.response.status}: ${error.response.statusText}`;
      } else if (error.request) {
        // Erro de rede
        errorMessage = 'Erro de conexão. Verifique sua internet.';
      } else {
        // Outros erros
        errorMessage = error.message || 'Ocorreu um erro inesperado';
      }
    }
    
    // Armazenar erro
    setError(errorMessage);
    
    // Mostrar notificação
    addNotification({
      type: 'error',
      title: 'Erro',
      message: errorMessage,
      duration: 5000
    });
    
    return errorMessage;
  };

  const clearError = () => {
    setError(null);
  };

  return { error, handleError, clearError };
};
```

### Uso do Hook de Erros

```javascript
import { useEffect, useState } from 'react';
import { getSalesOverview } from '../services/sales.service';
import { useErrorHandler } from '../hooks/useErrorHandler';

const SalesOverview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { error, handleError, clearError } = useErrorHandler();

  useEffect(() => {
    const fetchData = async () => {
      try {
        clearError();
        setLoading(true);
        const result = await getSalesOverview();
        setData(result);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Renderização do componente...
};
```

## Cache e Performance

### Serviço de Cache

```javascript
// src/services/cache.service.js
class CacheService {
  constructor(ttl = 5 * 60 * 1000) { // 5 minutos padrão
    this.cache = new Map();
    this.ttl = ttl;
  }

  set(key, value, customTtl = null) {
    const ttl = customTtl || this.ttl;
    const expiresAt = Date.now() + ttl;
    
    this.cache.set(key, {
      value,
      expiresAt
    });
    
    return value;
  }

  get(key) {
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }
    
    if (Date.now() > cached.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.value;
  }

  invalidate(key) {
    this.cache.delete(key);
  }

  invalidateAll() {
    this.cache.clear();
  }

  invalidateByPrefix(prefix) {
    for (const key of this.cache.keys()) {
      if (key.startsWith(prefix)) {
        this.cache.delete(key);
      }
    }
  }
}

export default new CacheService();
```

### Uso do Cache nos Serviços

```javascript
// src/services/dashboard.service.js
import apiClient from './client';
import cacheService from './cache.service';

export const getDashboardData = async (period = '30d', useCache = true) => {
  const cacheKey = `dashboard_${period}`;
  
  // Verificar cache
  if (useCache) {
    const cachedData = cacheService.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }
  }
  
  // Buscar dados da API
  const response = await apiClient.get('/dashboard', {
    params: { period }
  });
  
  // Armazenar no cache
  cacheService.set(cacheKey, response.data);
  
  return response.data;
};

// Outras funções com cache similar...
```

## Exemplos Completos

### Exemplo de Integração Completa para OrderBumps

```javascript
// src/components/OrderBumpsAnalysis.jsx
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  getOrderBumpsOverview,
  getOrderBumpsPerformance,
  getOrderBumpsInsights,
  createOrderBump,
  updateOrderBump,
  deleteOrderBump
} from '../services/orderBumps.service';
import { useErrorHandler } from '../hooks/useErrorHandler';
import { useNotifications } from '../contexts/NotificationContext';
import LoadingSpinner from './ui/LoadingSpinner';
import ErrorMessage from './ui/ErrorMessage';
import OrderBumpForm from './OrderBumpForm';
import OrderBumpsList from './OrderBumpsList';
import OrderBumpsChart from './OrderBumpsChart';
import OrderBumpsInsights from './OrderBumpsInsights';

const OrderBumpsAnalysis = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [period, setPeriod] = useState('30d');
  const [overview, setOverview] = useState(null);
  const [performance, setPerformance] = useState([]);
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editingOrderBump, setEditingOrderBump] = useState(null);
  
  const { error, handleError, clearError } = useErrorHandler();
  const { addNotification } = useNotifications();

  // Carregar dados
  useEffect(() => {
    const fetchData = async () => {
      try {
        clearError();
        setLoading(true);
        
        const [overviewData, performanceData, insightsData] = await Promise.all([
          getOrderBumpsOverview(period),
          getOrderBumpsPerformance(period),
          getOrderBumpsInsights()
        ]);
        
        setOverview(overviewData);
        setPerformance(performanceData);
        setInsights(insightsData);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [period]);

  // Manipuladores de OrderBumps
  const handleCreateOrderBump = async (data) => {
    try {
      clearError();
      const result = await createOrderBump(data);
      
      // Atualizar dados
      setPerformance(prev => [result, ...prev]);
      
      // Fechar formulário
      setFormOpen(false);
      
      // Notificar usuário
      addNotification({
        type: 'success',
        title: 'Sucesso',
        message: 'OrderBump criado com sucesso!',
        duration: 5000
      });
    } catch (err) {
      handleError(err);
    }
  };

  const handleUpdateOrderBump = async (id, data) => {
    try {
      clearError();
      const result = await updateOrderBump(id, data);
      
      // Atualizar dados
      setPerformance(prev => 
        prev.map(item => item.id === id ? result : item)
      );
      
      // Fechar formulário
      setFormOpen(false);
      setEditingOrderBump(null);
      
      // Notificar usuário
      addNotification({
        type: 'success',
        title: 'Sucesso',
        message: 'OrderBump atualizado com sucesso!',
        duration: 5000
      });
    } catch (err) {
      handleError(err);
    }
  };

  const handleDeleteOrderBump = async (id) => {
    try {
      clearError();
      await deleteOrderBump(id);
      
      // Atualizar dados
      setPerformance(prev => 
        prev.filter(item => item.id !== id)
      );
      
      // Notificar usuário
      addNotification({
        type: 'success',
        title: 'Sucesso',
        message: 'OrderBump excluído com sucesso!',
        duration: 5000
      });
    } catch (err) {
      handleError(err);
    }
  };

  const handleEditOrderBump = (orderBump) => {
    setEditingOrderBump(orderBump);
    setFormOpen(true);
  };

  if (loading && !overview) {
    return <LoadingSpinner />;
  }

  if (error && !overview) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="order-bumps-section">
      <div className="section-header">
        <h2>Gestão de OrderBumps</h2>
        <div className="section-actions">
          <select 
            value={period} 
            onChange={(e) => setPeriod(e.target.value)}
            className="period-selector"
          >
            <option value="7d">Últimos 7 dias</option>
            <option value="30d">Últimos 30 dias</option>
            <option value="90d">Últimos 90 dias</option>
            <option value="year">Este ano</option>
          </select>
          
          <Button onClick={() => setFormOpen(true)}>
            Novo OrderBump
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          {overview && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Receita OrderBumps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    R$ {overview.revenue.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {overview.revenuePercentage}% do total
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Taxa de Conversão</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {overview.conversionRate}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {overview.conversionRateChange > 0 ? '+' : ''}{overview.conversionRateChange}% vs. período anterior
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Uplift no Ticket</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    +{overview.ticketUplift}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    R$ {overview.averageTicketWithOrderBump} vs R$ {overview.averageTicketWithoutOrderBump}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>OrderBumps Ativos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {overview.activeOrderBumps}/{overview.totalOrderBumps}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {Math.round((overview.activeOrderBumps / overview.totalOrderBumps) * 100)}% ativos
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="mt-8">
            <OrderBumpsChart data={performance} />
          </div>
        </TabsContent>
        
        <TabsContent value="performance">
          <OrderBumpsList 
            orderBumps={performance} 
            onEdit={handleEditOrderBump}
            onDelete={handleDeleteOrderBump}
          />
        </TabsContent>
        
        <TabsContent value="insights">
          <OrderBumpsInsights insights={insights} />
        </TabsContent>
        
        <TabsContent value="settings">
          <h3>Configurações de OrderBumps</h3>
          {/* Configurações aqui */}
        </TabsContent>
      </Tabs>
      
      {formOpen && (
        <OrderBumpForm 
          orderBump={editingOrderBump}
          onSubmit={editingOrderBump ? 
            (data) => handleUpdateOrderBump(editingOrderBump.id, data) : 
            handleCreateOrderBump
          }
          onCancel={() => {
            setFormOpen(false);
            setEditingOrderBump(null);
          }}
        />
      )}
    </div>
  );
};

export default OrderBumpsAnalysis;
```

### Exemplo de Estrutura de API

Para integrar o dashboard com uma API real, a API deve fornecer endpoints que correspondam às necessidades de dados do dashboard. Aqui está uma estrutura de API recomendada:

```
/api/v1
├── /auth
│   ├── POST /login
│   ├── POST /logout
│   ├── POST /register
│   ├── POST /forgot-password
│   ├── POST /reset-password
│   ├── GET /me
│   └── PUT /profile
│
├── /dashboard
│   ├── GET / (KPIs principais)
│   ├── GET /revenue (dados de receita)
│   ├── GET /top-products (produtos mais vendidos)
│   ├── GET /funnel (dados do funil de conversão)
│   └── GET /insights (insights de IA)
│
├── /sales
│   ├── GET /overview (visão geral de vendas)
│   ├── GET /by-product (vendas por produto)
│   ├── GET /by-channel (vendas por canal)
│   ├── GET /insights (insights de vendas)
│   └── GET /goals (metas de vendas)
│
├── /products
│   ├── GET / (lista de produtos)
│   ├── GET /:id (detalhes do produto)
│   ├── POST / (criar produto)
│   ├── PUT /:id (atualizar produto)
│   ├── DELETE /:id (excluir produto)
│   ├── GET /categories (categorias de produtos)
│   └── GET /insights (insights de produtos)
│
├── /order-bumps
│   ├── GET /overview (visão geral de OrderBumps)
│   ├── GET /performance (performance de OrderBumps)
│   ├── GET /insights (insights de OrderBumps)
│   ├── GET /:id (detalhes do OrderBump)
│   ├── POST / (criar OrderBump)
│   ├── PUT /:id (atualizar OrderBump)
│   └── DELETE /:id (excluir OrderBump)
│
├── /analytics
│   ├── GET /overview (visão geral de analytics)
│   ├── GET /traffic (dados de tráfego)
│   ├── GET /content (performance de conteúdo)
│   ├── GET /campaigns (performance de campanhas)
│   ├── GET /insights (insights de analytics)
│   └── GET /real-time (dados em tempo real)
│
├── /affiliates
│   ├── GET / (lista de afiliados)
│   ├── GET /:id (detalhes do afiliado)
│   ├── POST / (criar afiliado)
│   ├── PUT /:id (atualizar afiliado)
│   ├── DELETE /:id (excluir afiliado)
│   ├── GET /commissions (comissões de afiliados)
│   └── GET /insights (insights de afiliados)
│
└── /financial
    ├── GET /overview (visão geral financeira)
    ├── GET /revenue (dados de receita)
    ├── GET /expenses (dados de despesas)
    ├── GET /cash-flow (fluxo de caixa)
    ├── GET /projections (projeções financeiras)
    └── GET /subscriptions (assinaturas)
```

Esta estrutura de API fornece todos os endpoints necessários para integrar completamente o Goexplosion Dashboard com dados reais.

---

Com este guia, você deve ser capaz de integrar o Goexplosion Dashboard com APIs reais, substituindo os dados simulados por dados reais do seu negócio. Se precisar de ajuda adicional, consulte a documentação oficial da API da Goexplosion ou entre em contato com o suporte técnico.

