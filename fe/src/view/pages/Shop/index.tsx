import { useState } from "react";
import { ShoppingCart, Filter } from "lucide-react";
import { ProductCard } from "../../components/ProductCard";
import { Input } from "../../components/Input";

// Dados mockados dos produtos
const products = [
  {
    id: 1,
    name: "Smartphone Galaxy S23",
    price: 2999.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Notebook Dell Inspiron",
    price: 4599.99,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 3,
    name: "Fones de Ouvido Sony",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 256,
  },
  {
    id: 4,
    name: 'Smart TV Samsung 55"',
    price: 3499.99,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 5,
    name: "Câmera Canon EOS",
    price: 1899.99,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 143,
  },
  {
    id: 6,
    name: "Tablet iPad Pro",
    price: 5999.99,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 7,
    name: "Console PlayStation 5",
    price: 3999.99,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 8,
    name: "Smartwatch Apple Watch",
    price: 2499.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 9,
    name: "Drone DJI Mini",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 10,
    name: "Monitor LG Ultrawide",
    price: 1799.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 92,
  },
  {
    id: 11,
    name: "Teclado Mecânico RGB",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 203,
  },
  {
    id: 12,
    name: "Mouse Gamer Logitech",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 167,
  },
];

export function Shop() {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (productId: number) => {
    setCartCount((prev) => prev + 1);
    // Aqui você pode adicionar a lógica para adicionar ao carrinho
    console.log(`Produto ${productId} adicionado ao carrinho`);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className=" text-2xl font-bold  ">Stg Shop</h1>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 md:flex flex-row justify-between ">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Catálogo de Produtos
            </h2>
            <p className="text-gray-600">
              Encontre os melhores produtos com preços incríveis
            </p>
          </div>
          <div className='flex items-center my-4 '>
            <div className=" flex-1">
              <Input
                type="text"
                name="productName"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=" h-[48px]   bg-transparent flex-1"
                autoComplete="off"
              />
            </div>

            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum produto encontrado.</p>
          </div>
        )}
      </main>
    </div>
  );
}
