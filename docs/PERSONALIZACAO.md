# Guia de Personalização - Goexplosion Dashboard

Este guia fornece instruções detalhadas sobre como personalizar o Goexplosion Dashboard para atender às suas necessidades específicas.

## Índice

- [Personalização Visual](#personalização-visual)
- [Personalização de Componentes](#personalização-de-componentes)
- [Personalização de Dados](#personalização-de-dados)
- [Personalização de Funcionalidades](#personalização-de-funcionalidades)
- [Personalização Avançada](#personalização-avançada)

## Personalização Visual

### Cores e Tema

O dashboard utiliza um sistema de cores baseado em variáveis CSS, o que facilita a personalização.

#### Alterando as Cores Principais

Edite o arquivo `src/App.css`:

```css
:root {
  /* Cores principais */
  --primary: #DC2626;       /* Vermelho principal */
  --primary-hover: #B91C1C; /* Vermelho hover */
  --secondary: #7C3AED;     /* Roxo secundário */
  --secondary-hover: #6D28D9; /* Roxo hover */
  
  /* Cores de fundo */
  --background: #0F1117;    /* Fundo escuro */
  --card-background: #1A1D29; /* Fundo de cards */
  
  /* Cores de texto */
  --text-primary: #F9FAFB;  /* Texto principal */
  --text-secondary: #9CA3AF; /* Texto secundário */
  
  /* Cores de status */
  --success: #10B981;       /* Verde sucesso */
  --warning: #F59E0B;       /* Amarelo alerta */
  --error: #EF4444;         /* Vermelho erro */
  --info: #3B82F6;          /* Azul informação */
}
```

#### Alterando o Tema Completo

Para uma personalização mais profunda, edite o arquivo `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DC2626',
          hover: '#B91C1C',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          hover: '#6D28D9',
        },
        // Adicione mais cores conforme necessário
      },
      // Personalize outras propriedades do tema
    },
  },
  // Resto da configuração
};
```

### Fontes

#### Alterando a Fonte Principal

1. Adicione a fonte desejada ao arquivo `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Sua+Fonte:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Atualize o arquivo `src/index.css`:

```css
body {
  font-family: 'Sua Fonte', sans-serif;
}
```

#### Alterando Tamanhos de Fonte

Edite o arquivo `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      fontSize: {
        'heading': '2rem',
        'subheading': '1.5rem',
        'body': '1rem',
        // Adicione mais tamanhos conforme necessário
      },
    },
  },
  // Resto da configuração
};
```

### Logos e Imagens

#### Substituindo o Logo

1. Adicione seu logo à pasta `public/`:
2. Edite o componente de logo em `src/components/ui/Logo.jsx`:

```jsx
import React from 'react';

const Logo = () => {
  return (
    <div className="logo">
      <img src="/seu-logo.png" alt="Sua Empresa" />
    </div>
  );
};

export default Logo;
```

## Personalização de Componentes

### Layout do Dashboard

#### Reorganizando Componentes

Edite o arquivo `src/components/Dashboard.jsx` para reorganizar os componentes:

```jsx
// Exemplo de reorganização de componentes
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Primeira linha */}
  <MetricCard title="Receita Líquida" value={metrics.revenue} change={metrics.revenueChange} />
  <MetricCard title="Vendas Realizadas" value={metrics.sales} change={metrics.salesChange} />
  
  {/* Segunda linha */}
  <MetricCard title="Taxa de Conversão" value={metrics.conversionRate} change={metrics.conversionRateChange} />
  <MetricCard title="Ticket Médio" value={metrics.averageTicket} change={metrics.averageTicketChange} />
  
  {/* Componente de largura total */}
  <div className="col-span-1 md:col-span-2">
    <RevenueChart data={revenueData} />
  </div>
  
  {/* Mais componentes... */}
</div>
```

#### Adicionando Novos Componentes

1. Crie um novo componente em `src/components/`:

```jsx
// src/components/NewComponent.jsx
import React from 'react';

const NewComponent = ({ data }) => {
  return (
    <div className="card">
      <h3 className="card-title">Seu Novo Componente</h3>
      <div className="card-content">
        {/* Conteúdo do componente */}
      </div>
    </div>
  );
};

export default NewComponent;
```

2. Importe e adicione ao Dashboard:

```jsx
import NewComponent from './NewComponent';

// Dentro do componente Dashboard
<NewComponent data={yourData} />
```

### Personalização de Cards

#### Estilo dos Cards

Edite o arquivo `src/components/ui/Card.jsx`:

```jsx
import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-card-background rounded-xl shadow-lg p-4 ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
```

#### Adicionando Novos Tipos de Cards

Crie variantes de cards em `src/components/ui/`:

```jsx
// src/components/ui/GradientCard.jsx
import React from 'react';

const GradientCard = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg p-4 ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>}
      <div className="text-white">{children}</div>
    </div>
  );
};

export default GradientCard;
```

## Personalização de Dados

### Modificando Dados Simulados

Edite os arquivos na pasta `src/data/` para personalizar os dados simulados:

```javascript
// src/data/mockData.js
export const revenueData = [
  { date: '2025-06-25', value: 12500 },
  { date: '2025-06-26', value: 14200 },
  // Adicione ou modifique dados conforme necessário
];

export const topProducts = [
  {
    id: 1,
    name: 'Seu Produto 1',
    category: 'Sua Categoria',
    sales: 156,
    conversionRate: 4.2,
    revenue: 78000,
    change: 15.2
  },
  // Adicione ou modifique produtos conforme necessário
];

// Mais dados...
```

### Integrando com API Real

1. Crie um serviço de API em `src/services/api.js`:

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

export const fetchDashboardData = async () => {
  const response = await api.get('/dashboard');
  return response.data;
};

export const fetchSalesData = async (period = '30d') => {
  const response = await api.get(`/sales?period=${period}`);
  return response.data;
};

// Mais funções de API...

export default api;
```

2. Use o serviço nos componentes:

```jsx
import { useEffect, useState } from 'react';
import { fetchDashboardData } from '../services/api';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchDashboardData();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  // Renderize o dashboard com os dados reais
  return (
    // Componentes do dashboard
  );
};
```

## Personalização de Funcionalidades

### Adicionando Novas Seções

1. Crie um novo componente para a seção:

```jsx
// src/components/NewSection.jsx
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const NewSection = ({ data }) => {
  return (
    <div className="section">
      <div className="section-header">
        <h2>Nova Seção</h2>
        <div className="section-actions">
          <button>Filtros</button>
          <button>Exportar</button>
          <button>Atualizar</button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="details">Detalhes</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          {/* Conteúdo da aba Visão Geral */}
        </TabsContent>
        
        <TabsContent value="details">
          {/* Conteúdo da aba Detalhes */}
        </TabsContent>
        
        <TabsContent value="insights">
          {/* Conteúdo da aba Insights */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewSection;
```

2. Adicione a nova seção ao menu e à renderização condicional no Dashboard:

```jsx
// No componente Dashboard.jsx
{activeSection === 'newSection' && <NewSection data={newSectionData} />}

// No menu lateral
<button
  className={`menu-item ${activeSection === 'newSection' ? 'active' : ''}`}
  onClick={() => setActiveSection('newSection')}
>
  <Icon /> Nova Seção
</button>
```

### Adicionando Novos Gráficos

1. Crie um novo componente de gráfico:

```jsx
// src/components/charts/NewChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const NewChart = ({ data, title }) => {
  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="var(--primary)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewChart;
```

2. Use o novo gráfico em qualquer seção:

```jsx
import NewChart from './charts/NewChart';

// Dentro de um componente
<NewChart 
  title="Seu Novo Gráfico" 
  data={[
    { name: 'Item 1', value: 400 },
    { name: 'Item 2', value: 300 },
    { name: 'Item 3', value: 200 },
    { name: 'Item 4', value: 100 }
  ]} 
/>
```

## Personalização Avançada

### Adicionando Novas Dependências

1. Instale novas dependências:

```bash
pnpm add nova-dependencia
```

2. Importe e use nos componentes:

```jsx
import NovaDependencia from 'nova-dependencia';

// Use a nova dependência
<NovaDependencia />
```

### Criando Hooks Personalizados

Crie hooks personalizados em `src/hooks/`:

```javascript
// src/hooks/useDataFetching.js
import { useState, useEffect } from 'react';

export const useDataFetching = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};
```

Use o hook nos componentes:

```jsx
import { useDataFetching } from '../hooks/useDataFetching';
import { fetchSalesData } from '../services/api';

const SalesSection = () => {
  const { data, loading, error } = useDataFetching(() => fetchSalesData('30d'), []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    // Renderize a seção com os dados
  );
};
```

### Personalizando o Sistema de Autenticação

1. Crie um contexto de autenticação em `src/contexts/AuthContext.jsx`:

```jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          const response = await api.get('/me');
          setUser(response.data);
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      
      setLoading(false);
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    const response = await api.post('/login', { email, password });
    const { token, user } = response.data;
    
    localStorage.setItem('token', token);
    setUser(user);
    
    return user;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

2. Adicione o provedor ao App:

```jsx
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      {/* Resto da aplicação */}
    </AuthProvider>
  );
}
```

3. Use o hook de autenticação nos componentes:

```jsx
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header>
      {user ? (
        <>
          <span>Olá, {user.name}</span>
          <button onClick={logout}>Sair</button>
        </>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
};
```

### Criando um Sistema de Notificações

1. Crie um contexto de notificações:

```jsx
// src/contexts/NotificationContext.jsx
import React, { createContext, useState, useContext } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    const id = Date.now();
    setNotifications([...notifications, { id, ...notification }]);
    
    if (notification.duration) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration);
    }
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);
```

2. Adicione o componente de notificações:

```jsx
// src/components/ui/Notifications.jsx
import React from 'react';
import { useNotifications } from '../../contexts/NotificationContext';

const Notifications = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="notifications-container">
      {notifications.map(notification => (
        <div 
          key={notification.id} 
          className={`notification notification-${notification.type}`}
        >
          <div className="notification-content">
            <h4>{notification.title}</h4>
            <p>{notification.message}</p>
          </div>
          <button 
            className="notification-close" 
            onClick={() => removeNotification(notification.id)}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
```

3. Use o sistema de notificações:

```jsx
import { useNotifications } from '../contexts/NotificationContext';

const SomeComponent = () => {
  const { addNotification } = useNotifications();

  const handleAction = () => {
    // Lógica da ação
    
    addNotification({
      type: 'success',
      title: 'Sucesso!',
      message: 'Ação realizada com sucesso.',
      duration: 5000 // 5 segundos
    });
  };

  return (
    <button onClick={handleAction}>Realizar Ação</button>
  );
};
```

Estas são apenas algumas das muitas possibilidades de personalização do Goexplosion Dashboard. Sinta-se à vontade para explorar e adaptar o código conforme suas necessidades específicas.

