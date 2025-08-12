# Instruções de Instalação e Execução

Este documento fornece instruções passo a passo para instalar e executar o Goexplosion Dashboard.

## Requisitos

- Node.js 18.0.0 ou superior
- npm 8.0.0 ou superior (ou pnpm 8.0.0 ou superior)
- Navegador moderno (Chrome, Firefox, Edge, Safari)

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/goexplosion/dashboard.git
cd dashboard
```

### 2. Instale as dependências

Usando npm:

```bash
npm install
```

Usando pnpm (recomendado):

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo de exemplo de variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```
# API Configuration
VITE_API_URL=https://api.goexplosion.com/v1
VITE_API_KEY=your_api_key_here
VITE_API_TIMEOUT=30000

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NOTIFICATIONS=true

# Theme Configuration
VITE_PRIMARY_COLOR=#DC2626
VITE_SECONDARY_COLOR=#7C3AED

# Application Settings
VITE_APP_NAME=Goexplosion Dashboard
VITE_APP_VERSION=1.0.0
```

## Execução

### Ambiente de desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
# Usando npm
npm run dev

# Usando pnpm
pnpm run dev
```

O aplicativo estará disponível em `http://localhost:5173`.

### Build de produção

Para criar uma build de produção:

```bash
# Usando npm
npm run build

# Usando pnpm
pnpm run build
```

Os arquivos de build serão gerados na pasta `dist`.

### Executando a build de produção localmente

Para visualizar a build de produção localmente:

```bash
# Usando npm
npm run preview

# Usando pnpm
pnpm run preview
```

O aplicativo estará disponível em `http://localhost:4173`.

## Testes

### Executando testes

```bash
# Usando npm
npm run test

# Usando pnpm
pnpm run test
```

### Executando testes com cobertura

```bash
# Usando npm
npm run test:coverage

# Usando pnpm
pnpm run test:coverage
```

## Lint e Formatação

### Executando o linter

```bash
# Usando npm
npm run lint

# Usando pnpm
pnpm run lint
```

### Formatando o código

```bash
# Usando npm
npm run format

# Usando pnpm
pnpm run format
```

## Solução de Problemas

### Erro de porta em uso

Se a porta 5173 já estiver em uso, você pode especificar uma porta diferente:

```bash
# Usando npm
npm run dev -- --port 3000

# Usando pnpm
pnpm run dev --port 3000
```

### Problemas com dependências

Se encontrar problemas com dependências, tente limpar o cache e reinstalar:

```bash
# Usando npm
npm cache clean --force
rm -rf node_modules
npm install

# Usando pnpm
pnpm store prune
rm -rf node_modules
pnpm install
```

### Problemas com variáveis de ambiente

Certifique-se de que o arquivo `.env` está na raiz do projeto e contém todas as variáveis necessárias.

Para verificar se as variáveis de ambiente estão sendo carregadas corretamente:

```bash
# Usando npm
npm run dev -- --debug

# Usando pnpm
pnpm run dev --debug
```

## Deployment

### Deployment com Vercel

1. Instale a CLI da Vercel:

```bash
npm install -g vercel
```

2. Faça login na sua conta Vercel:

```bash
vercel login
```

3. Deploy do projeto:

```bash
vercel
```

### Deployment com Netlify

1. Instale a CLI da Netlify:

```bash
npm install -g netlify-cli
```

2. Faça login na sua conta Netlify:

```bash
netlify login
```

3. Deploy do projeto:

```bash
netlify deploy
```

## Mais Informações

Para informações mais detalhadas, consulte:

- [Documentação completa](./docs/README.md)
- [Guia de uso](./docs/USO.md)
- [Guia de personalização](./docs/PERSONALIZACAO.md)
- [Guia de integração com API](./docs/API.md)

