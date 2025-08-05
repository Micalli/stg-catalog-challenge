import { Button } from "./Button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "../../app/entities/Product";
import { formatCurrency } from "../../app/utils/formatCurrency";

interface ProductCardProps {
  product: Product;
  onLoadingButton: boolean;
  onAddToCart: (productId: string) => void;
}

export function ProductCard({
  product,
  onAddToCart,
  onLoadingButton,
}: ProductCardProps) {


  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div onClick={() => window.location.href = `/product/${product.id}`} className='cursor-pointer'>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-70 object-cover group-hover:scale-90 transition-all duration-300"
        />
        <h3 className="font-semibold text-gray-900 mb-2 px-4 py-4 pb-0 hover:underline ">
          {product.name}
        </h3>
      </div>

      <div className="px-4 py-4 pt-0">
        <p className="text-gray-600 text-sm mb-6">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="font-semibold lg:text-xl text-gray-900">
            {formatCurrency(product.price)}
          </span>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              onClick={() => onAddToCart(product.id)}
              className="text-white px-2 py-1 xl:px-4 xl:py-2 flex items-center gap-2 w-[125px]"
              isLoading={onLoadingButton}
            >
              <ShoppingCart className="w-4 h-4" />
              Adicionar
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
