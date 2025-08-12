# 🚀 Goexplosion Dashboard - Backoffice Completo

Um backoffice completo para a plataforma Goexplosion com inteligência de dados nas análises de vendas, UX intuitivo e design imponente seguindo o branding da marca.

![Dashboard Preview](./docs/dashboard-preview.png)

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Personalização](#personalização)
- [API e Integração](#api-e-integração)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🔍 Visão Geral

O Goexplosion Dashboard é um backoffice completo para plataformas de infoprodutos, oferecendo análises avançadas de vendas, gestão de produtos, afiliados, financeiro e muito mais. O dashboard foi projetado com foco em inteligência de dados e experiência do usuário, seguindo o branding oficial da Goexplosion.

### 🌐 Demo Online

Acesse a versão de demonstração: [https://oigdlhzg.manus.space](https://oigdlhzg.manus.space)

## ✨ Funcionalidades

### 📊 Dashboard Principal
- **KPIs Principais**: Receita, Vendas, Conversão, Ticket Médio
- **Gráfico de Evolução**: Receita dos últimos 15 dias
- **Top Produtos**: Performance dos 5 principais produtos
- **Funil de Conversão**: Visualização do processo de vendas
- **Insights de IA**: Recomendações automáticas
- **Metas do Mês**: Progresso visual das metas
- **Performance por Hora**: Análise de picos de vendas
- **Tráfego por Canal**: Distribuição com CPL
- **Métricas Secundárias**: Carrinho abandonado, reembolsos
- **Comparação com Mercado**: Benchmarking em 6 métricas

### 💰 Vendas
- **Visão Geral**: Métricas principais de vendas
- **Produtos**: Análise detalhada por produto
- **Canais**: Performance por canal de aquisição
- **Insights**: Recomendações baseadas em IA
- **Metas**: Acompanhamento de objetivos

### 🛍️ Produtos
- **Visão Geral**: Total de produtos, ativos, receita
- **Produtos**: Lista detalhada com métricas
- **Categorias**: Performance por categoria
- **Insights**: Oportunidades de otimização
- **Metas**: Objetivos de lançamento e vendas

### 🔍 Análises
- **Visão Geral**: Visitantes, visualizações, tempo médio
- **Tráfego**: Fontes de tráfego e comportamento
- **Conteúdo**: Performance de páginas e conteúdos
- **Campanhas**: Análise de campanhas de marketing
- **Insights**: Recomendações de otimização
- **Tempo Real**: Monitoramento em tempo real

### 👥 Afiliados
- **Visão Geral**: Total de afiliados, ativos, comissões
- **Afiliados**: Lista detalhada com performance
- **Comissões**: Histórico e projeções de pagamentos
- **Insights**: Oportunidades de crescimento
- **Metas**: Objetivos de recrutamento e vendas

### 💵 Financeiro
- **Visão Geral**: Receita, lucro, margem, MRR
- **Receitas**: Análise detalhada de receitas
- **Despesas**: Controle de gastos por categoria
- **Fluxo de Caixa**: Entradas, saídas e saldo
- **Projeções**: Previsões financeiras
- **Assinaturas**: Gestão de receita recorrente

### 🚀 OrderBumps
- **Visão Geral**: Performance geral de OrderBumps
- **Performance**: Análise detalhada por OrderBump
- **Insights**: Recomendações de otimização
- **Configurações**: Gestão de OrderBumps

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18+
- **Estilização**: Tailwind CSS
- **Componentes**: Shadcn/UI
- **Gráficos**: Recharts
- **Ícones**: Lucide Icons
- **Build Tool**: Vite
- **Gerenciador de Pacotes**: pnpm

## 📁 Estrutura do Projeto

```
goexplosion-dashboard/
├── public/                  # Arquivos públicos
├── src/                     # Código fonte
│   ├── components/          # Componentes React
│   │   ├── ui/              # Componentes de UI base
│   │   ├── Dashboard.jsx    # Componente principal do dashboard
│   │   ├── AdvancedCharts.jsx # Componentes de gráficos avançados
│   │   ├── OrderBumpsAnalysis.jsx # Análise de OrderBumps
│   │   ├── SalesAnalysis.jsx # Análise de vendas
│   │   ├── ProductsAnalysis.jsx # Análise de produtos
│   │   ├── AnalyticsAnalysis.jsx # Análise de analytics
│   │   ├── AffiliatesAnalysis.jsx # Análise de afiliados
│   │   └── FinancialAnalysis.jsx # Análise financeira
│   ├── data/                # Dados simulados
│   │   ├── mockData.js      # Dados gerais simulados
│   │   ├── orderBumpsData.js # Dados de OrderBumps
│   │   ├── salesData.js     # Dados de vendas
│   │   ├── productsData.js  # Dados de produtos
│   │   ├── analyticsData.js # Dados de analytics
│   │   ├── affiliatesData.js # Dados de afiliados
│   │   └── financialData.js # Dados financeiros
│   ├── lib/                 # Utilitários e funções
│   ├── styles/              # Estilos globais
│   ├── App.jsx              # Componente App
│   ├── App.css              # Estilos do App
│   ├── main.jsx             # Ponto de entrada
│   └── index.css            # Estilos globais
├── docs/                    # Documentação
├── .gitignore               # Arquivos ignorados pelo Git
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
├── pnpm-lock.yaml           # Lock file do pnpm
├── tailwind.config.js       # Configuração do Tailwind
└── vite.config.js           # Configuração do Vite
```

## 🚀 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado (recomendado) ou npm/yarn

### Passos para Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/goexplosion-dashboard.git
   cd goexplosion-dashboard
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```

4. Acesse o dashboard em `http://localhost:5173`

## 🖥️ Uso

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm run dev

# Executar testes
pnpm run test

# Verificar linting
pnpm run lint
```

### Produção

```bash
# Construir para produção
pnpm run build

# Visualizar build de produção localmente
pnpm run preview
```

## 🎨 Personalização

### Cores e Tema

As cores principais do tema estão definidas em `src/App.css` e seguem o branding oficial da Goexplosion:

- **Vermelho Principal**: #DC2626
- **Roxo Secundário**: #7C3AED
- **Fundo Escuro**: #0F1117
- **Texto Claro**: #F9FAFB

Para personalizar as cores, edite as variáveis CSS em `src/App.css`.

### Componentes

Os componentes UI são baseados em Shadcn/UI e podem ser personalizados em `src/components/ui/`. Para adicionar novos componentes, siga a documentação oficial do Shadcn/UI.

## 🔌 API e Integração

### Estrutura de Dados

O dashboard atualmente utiliza dados simulados localizados em `src/data/`. Para integrar com uma API real, você precisará:

1. Criar serviços de API em `src/services/api.js`
2. Substituir as importações de dados simulados por chamadas de API
3. Implementar autenticação e gerenciamento de estado

### Exemplo de Integração

```javascript
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.goexplosion.com',
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

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Desenvolvido com ❤️ para a Goexplosion

