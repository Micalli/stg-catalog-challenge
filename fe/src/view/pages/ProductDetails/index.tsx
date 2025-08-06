import { useProductDetailsController } from "./useProductDetailsController";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { Button } from "../../components/Button";
import { formatCurrency } from "../../../app/utils/formatCurrency";
import { motion } from "framer-motion";
import { Spinner } from '../../components/Spinner';

export function ProductDetails() {
  const { product, isFetching, handleAddToCart, isLoadingAddToCart } =
    useProductDetailsController();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5  mr-2 " />
            </button>
            <h1 className="text-lg    font-semibold text-gray-900">
              Detalhes do Produto
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>
      {isFetching && (
        <div className=" h-screen flex items-center justify-center ">
          <Spinner />
        </div>
      )}

      {/* Product Details */}
      {product && !isFetching && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="p-8">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < 4
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">(4.5)</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {formatCurrency(product.price)}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">à vista</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Descrição
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Categoria
                  </h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="space-y-4">
                    <Button
                      onClick={handleAddToCart}
                      disabled={isLoadingAddToCart}
                      className="w-full"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      {isLoadingAddToCart
                        ? "Adicionando..."
                        : "Adicionar ao Carrinho"}
                    </Button>
                  </div>
                </motion.div>

                {/* Product Features */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Características
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">
                        Entrega rápida
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Garantia</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">
                        Devolução grátis
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">
                        Pagamento seguro
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
