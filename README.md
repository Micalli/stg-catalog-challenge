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

- **Backend**: API RESTful construída com NestJS, Prisma ORM
- **Frontend**: Interface moderna desenvolvida com React, TypeScript e Tailwind CSS
- **Banco de dados**: Supabase
- **Autenticação**: Sistema de autenticação JWT integrado com Supabase
- **Funcionalidades**: Catálogo de produtos, carrinho de compras, histórico de compras


## 🛠️ Tecnologias Utilizadas

### Backend
- **NestJS**: Framework Node.js para construção de aplicações escaláveis (Escolhi por ter mais praticidade e intimidade)
- **Prisma**: ORM moderno para TypeScript e Node.js (Escolhi por ter mais praticidade e intimidade)
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
- **React Query**: Gerenciamento de estado do servidor (Escolhi por ter uma intimidade com a lib e praticidade de gerenciamento de estado)
- **Framer Motion**: Animações
- **Lucide React**: Ícones
- **React Hook Form**: Formulários
- **Zod**: Validação de esquemas

## 🤖 Inteligência Artificial

Durante o desenvolvimento do projeto, foram utilizadas ferramentas de Inteligência Artificial para otimização do processo:

- Cursor: empregado na geração e refatoração de código, especialmente para construção do layout, criação de componentes reutilizáveis e implementação de animações com Framer Motion, acelerando a produtividade e garantindo padronização.

- OpenAI: utilizada como suporte para análise e tomada de decisão técnica, fornecendo alternativas de arquitetura, boas práticas e soluções para problemas complexos e correção de bugs identificados durante o desenvolvimento.

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
SUPABASE_URL="https://xxxxxxxxxxx.supabase.co"
JWT_SECRET="your-jwt-secret"
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

## 🚀 Deploy

### Backend (Vercel)
O backend está rodando em https://stg-catalog-challenge-sigma.vercel.app/

### Frontend (Vercel)
O frontend está rodando em https://stg-catalog-challenge-6ldm.vercel.app/

## ✨ Funcionalidades

### 🔐 Autenticação
- Tela de login e registro
- Autenticação via email/senha
- Logout funcional
- Proteção de rotas (usuários não logados não acessam o catálogo)
- Recuperação de senha (opcional, mas será um diferencial)

### 🛍️ Catálogo de Produtos
- Listagem de produtos com imagem, nome, preço e descrição
- Busca/filtro por nome do produto
- Visualização detalhada do produto (modal ou página)
- Adicionar produto ao carrinho
- Visualizar carrinho com produtos selecionados
- Interface responsiva (desktop e mobile)
  
### 📨 Finalização via WhatsApp
- Botão "Finalizar Pedido" no carrinho
- Gerar mensagem formatada com os produtos
- Redirecionar para wa.me do link com pedido
- Limpar carrinho após envio
  
### 🎨 Interface
- Design responsivo
- Animações suaves
- Loading states
- Feedback visual
- Modais de confirmação

## 🚀 Funcionalidades Bônus

### Implementações
- Histórico de pedidos do usuário
- Filtros avançados (categoria, faixa de preço)

### ⚒️ Técnico:
- Context API para gerenciamento de estado global
- Custom hooks bem estruturados
- Performance otimizada (lazy loading, memoization)

### 🎨 UX/UI
- Animações suaves (Framer Motion)
- Skeleton loading durante carregamentos
- Toast notifications para feedback
- Paginação

## Entre em contato
Feito por [Bruno Micalli](https://github.com/micalli).

[![Linkedin Badge](https://img.shields.io/badge/-Bruno_Micalli-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/brunomicalli/)](https://www.linkedin.com/in/brunomicalli/)
