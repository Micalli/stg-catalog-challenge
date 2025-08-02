import { useState } from 'react';
import { Button } from './Button';
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
  };
  onAddToCart: (productId: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-300"
        />
        <Button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 px-2 h-9 bg-white rounded-full shadow-md  hover:bg-red-50 transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "text-red-500 fill-current" : "text-gray-400"
            }`}
          />
        </Button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <span className="ml-1 text-sm text-gray-600">Descriptoion...</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className=" font-semibold lg:text-xl  text-gray-900">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>

          <Button
            onClick={() => onAddToCart(product.id)}
            className=" text-white px-2 py-1 xl:px-4 xl:py-2 transition-all duration-200 hover:scale-105 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}
