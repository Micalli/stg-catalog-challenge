# API - STG Catalog Challenge

Backend da aplicação STG Catalog Challenge construído com NestJS, Prisma e PostgreSQL.

## 🏗️ Arquitetura

A API segue a arquitetura modular do NestJS com os seguintes módulos:

- **Auth Module**: Autenticação e autorização
- **Products Module**: Gestão de produtos
- **Cart Items Module**: Carrinho de compras
- **Users Module**: Gestão de usuários
- **Shopping History Module**: Histórico de compras

## 🛠️ Tecnologias

- **NestJS**: Framework Node.js
- **Prisma**: ORM para TypeScript
- **PostgreSQL**: Banco de dados
- **JWT**: Autenticação
- **Supabase**: Autenticação e autorização
- **bcryptjs**: Criptografia
- **class-validator**: Validação

## 📁 Estrutura

```
src/
├── modules/
│   ├── auth/              # Autenticação
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.guard.ts
│   │   ├── auth.module.ts
│   │   ├── dto/
│   │   └── entities/
│   ├── products/          # Produtos
│   ├── cart_items/        # Carrinho
│   ├── users/             # Usuários
│   └── shopping_history/  # Histórico
├── shared/
│   ├── database/          # Configuração DB
│   └── decorators/        # Decorators customizados
└── main.ts
```

## 🚀 Instalação

1. **Instalar dependências:**
```bash
npm install
```

2. **Configurar variáveis de ambiente:**
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

4. **Executar:**
```bash
npm run start:dev
```

## 🔌 Endpoints

### Autenticação
- `POST /auth/signup` - Registro
- `POST /auth/signin` - Login

### Produtos
- `GET /products` - Listar produtos
- `GET /products/:id` - Produto específico
- `POST /products` - Criar produto
- `PUT /products/:id` - Atualizar produto
- `DELETE /products/:id` - Deletar produto

### Carrinho
- `GET /cart-items` - Itens do carrinho
- `POST /cart-items` - Adicionar item
- `PUT /cart-items/:id/quantity` - Atualizar quantidade
- `DELETE /cart-items/:id` - Remover item

### Histórico
- `GET /shopping-history` - Histórico de compras
- `POST /shopping-history` - Nova compra

### Usuários
- `GET /users/me` - Dados do usuário

## 🗄️ Modelo de Dados

### Product
```typescript
{
  id: string
  name: string
  description: string
  price: Decimal
  imageUrl: string
  category: string
  createdAt: DateTime
}
```

### CartItem
```typescript
{
  id: string
  userId: string
  productId: string
  quantity: number
  createdAt: DateTime
  product: Product
}
```

### ShoppingHistory
```typescript
{
  id: string
  userId: string
  products: Json
  totalPrice: Decimal
  createdAt: DateTime
}
```

## 🧪 Testes

```bash
npm run test          # Testes unitários
npm run test:e2e      # Testes end-to-end
npm run test:cov      # Cobertura
```

## 📦 Scripts

- `npm run start` - Produção
- `npm run start:dev` - Desenvolvimento
- `npm run build` - Compilar
- `npm run test` - Testes
- `npm run lint` - Lint

## 🔒 Segurança

- Autenticação JWT
- Validação de dados com class-validator
- Criptografia de senhas com bcryptjs
- CORS configurado
- Rate limiting (configurável)

## 🚀 Deploy

Configurado para deploy na Vercel com `vercel.json`.

---

**API STG Catalog Challenge** - Backend robusto e escalável para e-commerce.
