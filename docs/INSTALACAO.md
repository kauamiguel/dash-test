# Guia de Instalação - Goexplosion Dashboard

Este guia fornece instruções detalhadas para instalar, configurar e executar o Goexplosion Dashboard em seu ambiente local ou de produção.

## Requisitos do Sistema

### Requisitos Mínimos
- **Node.js**: v18.0.0 ou superior
- **Memória RAM**: 2GB ou mais
- **Espaço em Disco**: 500MB para instalação
- **Navegador**: Chrome, Firefox, Safari ou Edge (versões recentes)

### Gerenciadores de Pacotes Suportados
- **pnpm** (recomendado)
- **npm**
- **yarn**

## Instalação Local

### 1. Clone o Repositório

```bash
# Via HTTPS
git clone https://github.com/seu-usuario/goexplosion-dashboard.git

# Via SSH
git clone git@github.com:seu-usuario/goexplosion-dashboard.git

# Navegue para o diretório do projeto
cd goexplosion-dashboard
```

### 2. Instale as Dependências

```bash
# Usando pnpm (recomendado)
pnpm install

# Usando npm
npm install

# Usando yarn
yarn install
```

### 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```
VITE_API_URL=https://api.goexplosion.com
VITE_API_KEY=sua_chave_api
```

### 4. Inicie o Servidor de Desenvolvimento

```bash
# Usando pnpm
pnpm run dev

# Usando npm
npm run dev

# Usando yarn
yarn dev
```

O servidor de desenvolvimento será iniciado em `http://localhost:5173` por padrão.

## Build para Produção

### 1. Gere o Build de Produção

```bash
# Usando pnpm
pnpm run build

# Usando npm
npm run build

# Usando yarn
yarn build
```

Os arquivos de build serão gerados na pasta `dist/`.

### 2. Visualize o Build Localmente (Opcional)

```bash
# Usando pnpm
pnpm run preview

# Usando npm
npm run preview

# Usando yarn
yarn preview
```

### 3. Deploy em Produção

#### Opção 1: Servidor Web Estático

Copie o conteúdo da pasta `dist/` para o diretório raiz do seu servidor web (Apache, Nginx, etc.).

**Exemplo para Nginx:**

```nginx
server {
    listen 80;
    server_name dashboard.goexplosion.com;
    root /var/www/goexplosion-dashboard/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Opção 2: Serviços de Hospedagem

O dashboard pode ser facilmente hospedado em serviços como:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

**Exemplo para Vercel:**

1. Instale a CLI do Vercel: `npm i -g vercel`
2. No diretório do projeto, execute: `vercel`
3. Siga as instruções na tela

## Configuração Avançada

### Personalização do Tema

Para personalizar as cores e o tema do dashboard, edite os seguintes arquivos:

1. **Cores principais**: `src/App.css`
2. **Configuração do Tailwind**: `tailwind.config.js`

### Integração com API

Para integrar com uma API real:

1. Edite o arquivo `.env` com a URL da API
2. Modifique os serviços em `src/services/` para usar a API real
3. Atualize os componentes para usar os dados da API

## Solução de Problemas

### Erros Comuns

#### Erro: "Module not found"
- Verifique se todas as dependências foram instaladas
- Execute `pnpm install` novamente

#### Erro: "Cannot find module 'react'"
- Verifique se o Node.js está atualizado
- Limpe o cache: `pnpm cache clean`

#### Erro: "Failed to compile"
- Verifique os erros no console
- Verifique a sintaxe dos arquivos mencionados no erro

### Suporte

Para obter suporte adicional:

1. Abra uma issue no GitHub
2. Entre em contato pelo email: suporte@goexplosion.com

## Próximos Passos

Após a instalação bem-sucedida, consulte:

- [Guia de Uso](./USO.md) para aprender a usar o dashboard
- [Guia de Personalização](./PERSONALIZACAO.md) para personalizar o dashboard
- [Guia de API](./API.md) para integrar com APIs reais

