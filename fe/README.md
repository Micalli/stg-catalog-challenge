# Frontend - STG Catalog Challenge

Frontend da aplicação STG Catalog Challenge construído com React, TypeScript e Tailwind CSS.

## 🎨 Interface

Interface moderna e responsiva com foco na experiência do usuário:

- **Design System**: Componentes reutilizáveis
- **Responsividade**: Adaptável a todos os dispositivos
- **Animações**: Transições suaves com Framer Motion
- **Acessibilidade**: Componentes acessíveis
- **Performance**: Otimizado para velocidade

## 🛠️ Tecnologias

- **React 18**: Biblioteca para interfaces
- **TypeScript**: Tipagem estática
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework CSS utilitário
- **React Router**: Roteamento
- **React Query**: Gerenciamento de estado
- **Framer Motion**: Animações
- **Lucide React**: Ícones
- **React Hook Form**: Formulários
- **Zod**: Validação

## 📁 Estrutura

```
src/
├── app/                    # Lógica de negócio
│   ├── contexts/          # Contextos React
│   │   ├── AuthContext.tsx
│   │   └── hooks/
│   ├── service/           # Serviços de API
│   │   ├── authService/
│   │   ├── cartService/
│   │   ├── productsService/
│   │   └── httpClient.ts
│   ├── entities/          # Entidades/Tipos
│   ├── utils/             # Utilitários
│   └── config/            # Configurações
├── view/                  # Componentes de UI
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/            # Páginas da aplicação
│   │   ├── Shop/
│   │   ├── ProductDetails/
│   │   ├── Cart/
│   │   ├── History/
│   │   ├── Login/
│   │   └── Register/
│   └── modals/           # Modais
└── router/               # Configuração de rotas
```

## 🚀 Instalação

1. **Instalar dependências:**
```bash
npm install
```

2. **Configurar API:**
Edite `src/app/config/api.ts` com a URL da sua API.

3. **Executar:**
```bash
npm run dev
```

## 📱 Páginas

### 🛍️ Shop
- Listagem de produtos
- Filtros por categoria e preço
- Busca de produtos
- Paginação
- Adicionar ao carrinho

### 📋 Product Details
- Detalhes completos do produto
- Imagem em alta resolução
- Avaliações (em breve)
- Adicionar ao carrinho
- Características do produto

### 🛒 Cart
- Lista de itens no carrinho
- Atualizar quantidades
- Remover itens
- Calcular total
- Finalizar compra

### 📊 History
- Histórico de compras
- Detalhes de cada compra
- Data e valor
- Status da compra

### 🔐 Auth
- **Login**: Autenticação de usuários
- **Register**: Registro de novos usuários
- Validação de formulários
- Feedback visual

## 🎨 Componentes

### Reutilizáveis
- **Button**: Botões com variantes
- **Input**: Campos de entrada
- **Modal**: Modais de confirmação
- **Spinner**: Loading states
- **ProductCard**: Card de produto
- **Pagination**: Navegação de páginas

### Layout
- **Header**: Cabeçalho da aplicação
- **AuthGuard**: Proteção de rotas
- **Router**: Configuração de rotas

## 🔧 Hooks Customizados

- **useAuth**: Gerenciamento de autenticação
- **useCart**: Gerenciamento do carrinho
- **useProducts**: Busca de produtos
- **useProductById**: Produto específico
- **useShoppingHistory**: Histórico de compras

## 🎯 Funcionalidades

### 🔐 Autenticação
- Login/Registro
- Proteção de rotas
- Persistência de sessão
- Logout

### 🛍️ Produtos
- Listagem com filtros
- Busca por nome
- Filtros por categoria
- Filtros por preço
- Paginação

### 🛒 Carrinho
- Adicionar produtos
- Remover produtos
- Atualizar quantidades
- Calcular total
- Finalizar compra

### 📊 Histórico
- Visualizar compras
- Detalhes de cada compra
- Data e valor

## 🎨 Design System

### Cores
- **Primary**: Azul (#3B82F6)
- **Secondary**: Verde (#10B981)
- **Background**: Gradientes suaves
- **Text**: Cinza escuro (#1F2937)

### Tipografia
- **Headings**: Font-semibold
- **Body**: Font-normal
- **Responsive**: Tamanhos adaptáveis

### Componentes
- **Consistent**: Padrão visual uniforme
- **Accessible**: Acessibilidade integrada
- **Responsive**: Adaptável a todos os dispositivos

## 📦 Scripts

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Visualizar build
- `npm run lint` - Verificar código

## 🚀 Deploy

Configurado para deploy na Vercel com `vercel.json`.

## 🧪 Testes

```bash
npm run test          # Testes unitários
```

## 📱 Responsividade

- **Mobile First**: Design mobile-first
- **Breakpoints**: Tailwind CSS breakpoints
- **Touch Friendly**: Otimizado para touch
- **Performance**: Carregamento otimizado

---

**Frontend STG Catalog Challenge** - Interface moderna e intuitiva para e-commerce.
