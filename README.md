# STG Catalog Challenge

<div align="center">
  <img alt="fincheck" title="portfolio" src="https://raw.githubusercontent.com/Micalli/stg-catalog-challenge/refs/heads/main/fe/public/demo.png" >
</div>
</h1>
<h1 align="center">
  <a href="https://stg-catalog-challenge-6ldm.vercel.app/">
    stg-challenge.vercel.app
  </a>
</h1>

Um sistema completo de e-commerce desenvolvido com NestJS (backend) e React (frontend), projetado para oferecer uma experiência moderna e eficiente de compra.

A aplicação inclui autenticação segura, catálogo de produtos com busca e filtros, carrinho de compras dinâmico e um histórico de compras. Além disso, conta com uma integração prática com o WhatsApp, permitindo finalizar pedidos rapidamente com envio automático de mensagens formatadas.

## 🎯 Visão Geral

O STG Catalog Challenge é uma aplicação de e-commerce completa que demonstra as melhores práticas de desenvolvimento full-stack. O projeto inclui:

- **Backend**: API RESTful construída com NestJS, Prisma ORM e PostgreSQL
- **Frontend**: Interface moderna desenvolvida com React, TypeScript e Tailwind CSS
- **Banco de dados**: Supabase
- **Autenticação**: Sistema de autenticação JWT integrado com Supabase
- **Funcionalidades**: Catálogo de produtos, carrinho de compras, histórico de compras


## 🛠️ Tecnologias Utilizadas

### Backend
- **NestJS**: Framework Node.js para construção de aplicações escaláveis
- **Prisma**: ORM moderno para TypeScript e Node.js
- **JWT**: Autenticação baseada em tokens
- **Supabase**: Banco de dados, autenticação e autorização
- **bcryptjs**: Criptografia de senhas
- **class-validator**: Validação de dados

### Frontend
- **React 18**: Biblioteca para interfaces de usuário
- **TypeScript**: Tipagem estática
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework CSS utilitário
- **React Router**: Roteamento da aplicação
- **React Query**: Gerenciamento de estado do servidor
- **Framer Motion**: Animações
- **Lucide React**: Ícones
- **React Hook Form**: Formulários
- **Zod**: Validação de esquemas

## 🏗️ Arquitetura

### Backend (API)
```
api/
├── src/
│   ├── modules/           # Módulos da aplicação
│   │   ├── auth/         # Autenticação e autorização
│   │   ├── products/     # Gestão de produtos
│   │   ├── cart_items/   # Carrinho de compras
│   │   ├── users/        # Gestão de usuários
│   │   └── shopping_history/ # Histórico de compras
│   ├── shared/           # Recursos compartilhados
│   │   ├── database/     # Configuração do banco de dados
│   │   └── decorators/   # Decorators customizados
│   └── main.ts          # Ponto de entrada da aplicação
├── prisma/              # Schema e migrações do banco
└── package.json
```

### Frontend (React)
```
fe/
├── src/
│   ├── app/             # Lógica de negócio
│   │   ├── contexts/    # Contextos React
│   │   ├── service/     # Serviços de API
│   │   ├── entities/    # Entidades/Tipos
│   │   └── utils/       # Utilitários
│   ├── view/           # Componentes de UI
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Páginas da aplicação
│   │   └── modals/      # Modais
│   └── router/         # Configuração de rotas
└── package.json
```


## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js 18+
- PostgreSQL
- npm ou yarn

### Backend

1. **Instalar dependências:**
```bash
cd api
npm install
```

2. **Configurar variáveis de ambiente:**
Crie um arquivo `.env` na pasta `api/`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/stg_catalog"
JWT_SECRET="your-jwt-secret"
SUPABASE_URL="your-supabase-url"
SUPABASE_ANON_KEY="your-supabase-anon-key"
```

3. **Configurar banco de dados:**
```bash
npx prisma migrate dev
npx prisma generate
```

4. **Executar a aplicação:**
```bash
npm run start:dev
```

### Frontend

1. **Instalar dependências:**
```bash
cd fe
npm install
```

2. **Configurar API:**
Edite `src/app/config/api.ts` com a URL da sua API.

3. **Executar a aplicação:**
```bash
npm run dev
```

## ✨ Funcionalidades

### 🔐 Autenticação
- Registro de usuários
- Login com email e senha
- Autenticação JWT
- Proteção de rotas

### 🛍️ Catálogo de Produtos
- Listagem de produtos
- Filtros por categoria
- Filtros por preço
- Busca de produtos
- Paginação

### 🛒 Carrinho de Compras
- Adicionar produtos ao carrinho
- Remover produtos do carrinho
- Atualizar quantidades
- Visualizar carrinho
- Finalizar compra

### 📊 Histórico de Compras
- Visualizar histórico de compras
- Detalhes de cada compra
- Data e valor das compras

### 🎨 Interface
- Design responsivo
- Animações suaves
- Loading states
- Feedback visual
- Modais de confirmação

## 🔌 API Endpoints

### Autenticação
- `POST /auth/signup` - Registro de usuário
- `POST /auth/signin` - Login de usuário

### Produtos
- `GET /products` - Listar produtos
- `GET /products/:id` - Obter produto específico
- `POST /products` - Criar produto (admin)
- `PUT /products/:id` - Atualizar produto (admin)
- `DELETE /products/:id` - Deletar produto (admin)

### Carrinho
- `GET /cart-items` - Obter itens do carrinho
- `POST /cart-items` - Adicionar item ao carrinho
- `PUT /cart-items/:id/quantity` - Atualizar quantidade
- `DELETE /cart-items/:id` - Remover item do carrinho

### Histórico de Compras
- `GET /shopping-history` - Obter histórico de compras
- `POST /shopping-history` - Criar nova compra

### Usuários
- `GET /users/me` - Obter dados do usuário atual

## 🤖 Inteligência Artificial

Durante o desenvolvimento do projeto, foram utilizadas ferramentas de Inteligência Artificial para otimização do processo:

- Cursor: empregado na geração e refatoração de código, especialmente para construção do layout, criação de componentes reutilizáveis e implementação de animações com Framer Motion, acelerando a produtividade e garantindo padronização.

- OpenAI: utilizada como suporte para análise e tomada de decisão técnica, fornecendo alternativas de arquitetura, boas práticas e soluções para problemas complexos e correção de bugs identificados durante o desenvolvimento.

## 🚀 Deploy

### Backend (Vercel)
O backend está rodando em https://stg-catalog-challenge-sigma.vercel.app/

### Frontend (Vercel)
O frontend está rodando em https://stg-catalog-challenge-6ldm.vercel.app/

## Entre em contato
Feito por [Bruno Micalli](https://github.com/micalli).

[![Linkedin Badge](https://img.shields.io/badge/-Bruno_Micalli-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/brunomicalli/)](https://www.linkedin.com/in/brunomicalli/)
