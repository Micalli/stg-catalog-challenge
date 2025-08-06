import { useState } from "react";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useCartController } from "./useCartController";
import { formatCurrency } from "../../../app/utils/formatCurrency";
import { Spinner } from "../../components/Spinner";
import { CartEntity } from "../../../app/entities/Cart";
import { Link } from "react-router-dom";
import { ConfirmOrderModal } from "../../modals/ConfirmOrderModal";

export function Cart() {
  const {
    isFetching,
    productsCart,
    handleContinueShopping,
    shopping,
    linkWaMe,
    handleRemoveItem,
    handleUpdateQuantity,
    isLoadingQuantity,
    isLoadingDelete,
    handleCheckout,
    handleConfirmationOrder,
    messageOrder,
  } = useCartController();

  const [couponCode, setCouponCode] = useState("");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      <ConfirmOrderModal
        onConfirm={() => handleCheckout(productsCart)}
        orderMessage={messageOrder}
        linkWaMe={linkWaMe}
        productsCart={productsCart}
      />

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={handleContinueShopping}
                className="mr-4 p-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                title="Voltar"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="md:text-2xl text-base font-bold">
                Carrinho de Compras
              </h1>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center text-gray-600">
                <ShoppingCart className="w-6 h-6 mr-2" />
                <span className="font-medium">{productsCart.length} itens</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Itens */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Seus Itens ({productsCart.length})
                </h2>
                <Link to="/history">
                  <p className="text-gray-500 hover:underline hover:text-gray-700 cursor-pointer transition-all   ">
                    Historico de compras
                  </p>
                </Link>
              </div>

              {productsCart.length === 0 && !isFetching && (
                <div className="text-center py-3">
                  <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Seu carrinho está vazio
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Adicione alguns produtos para começar suas compras
                  </p>
                  <div className="flex justify-between items-center mt-8">
                    <Link to="/">
                      <Button>Continuar Comprando</Button>
                    </Link>
                  </div>
                </div>
              )}
              {productsCart.length > 0 && !isFetching && (
                <div className="space-y-4">
                  {productsCart.map((item: CartEntity) => (
                    <div
                      key={item.id}
                      className="flex md:flex-row flex-col items-center md:space-x-4 space-y-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <img
                        src={item.product?.imageUrl}
                        alt={item.product?.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.product?.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          R${" "}
                          {Number(item.product?.price)
                            .toFixed(2)
                            .replace(".", ",")}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 p-0 flex items-center justify-center"
                          isLoading={isLoadingQuantity}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>

                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>

                        <Button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 p-0 flex items-center justify-center"
                          isLoading={isLoadingQuantity}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          R${" "}
                          {(Number(item.product?.price) * item.quantity)
                            .toFixed(2)
                            .replace(".", ",")}
                        </p>
                      </div>

                      <Button
                        onClick={() => handleRemoveItem(item.id)}
                        variant="danger"
                        className="w-8 h-8 p-0 flex items-center justify-center"
                        isLoading={isLoadingDelete}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              {isFetching && (
                <div className="flex justify-center">
                  <Spinner />
                </div>
              )}
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Resumo do Pedido
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    {formatCurrency(shopping.total)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span className="font-medium">
                    {shopping.shipping === 0 && (
                      <span className="text-green-600">Grátis</span>
                    )}
                    {shopping.shipping > 0 &&
                      productsCart.length > 0 &&
                      `${formatCurrency(shopping.shipping)}`}

                    {productsCart.length === 0 && `${formatCurrency(0)}`}
                  </span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {productsCart.length === 0 && formatCurrency(0)}
                      {productsCart.length > 0 &&
                        formatCurrency(shopping.total + shopping.shipping)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cupom */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cupom de Desconto
                </label>
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    name="couponCode"
                    placeholder="Digite seu cupom"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="px-4">Aplicar</Button>
                </div>
              </div>

              <Button
                onClick={() => handleConfirmationOrder()}
                disabled={productsCart.length === 0}
                className="w-full"
              >
                Finalizar Compra
              </Button>

              <div className="mt-4 text-center">
                <Link to="/">
                  <Button
                    // onClick={handleContinueShopping}
                    variant="ghost"
                    className="w-full"
                  >
                    Continuar Comprando
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
