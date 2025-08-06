import { useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { ProductCardSkeleton } from "../../components/ProductCardSkeleton";
import { PriceRangeFilter } from "../../components/PriceRangeFilter";
import { Input } from "../../components/Input";
import { useShopController } from "./useShopController";
import { Header } from "../../components/Header";

import { motion, Variants } from "framer-motion";
import { Select } from "../../components/Select";
import { Categories } from "../../../app/types/Categories.type";
import { normalizeText } from "../../../app/utils/normalizeText";
import { Pagination } from "../../components/Pagination";

export function Shop() {
  const {
    isLoading,
    products,
    handleAddToCart,
    loadingProductId,
    setFilterCategory,
    handlePriceRangeChange,
    maxProductPrice,
    minProductPrice,
    user,
    pagination,
    handlePageChange,
  } = useShopController();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredByName = products.filter((product) =>
    normalizeText(product?.name ?? "").includes(normalizeText(searchTerm))
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      <Header isHomePage />

      {/* Main Content */}
      <motion.main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mb-2 mt-12">
          <div className="font-bold ">
            <span className="font-light">Olá,</span>{" "}
            {user?.name && user?.name.toUpperCase()}
          </div>
          <p className="text-gray-600 font-light">{user?.email}</p>
        </div>

        <motion.div
          className="mb-8 md:flex flex-row justify-between"
          variants={itemVariants}
        >
          <div className="flex flex-col  items-center sm:items-start">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Catálogo de Produtos
            </h2>
            <p className="text-gray-600">
              Encontre os melhores produtos com preços incríveis
            </p>
          </div>
          <motion.div
            className="flex items-center my-4"
            variants={itemVariants}
          >
            <div className="w-full flex flex-col md:flex-row   gap-2 ">
              <motion.div
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 6px rgba(59,130,246,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex w-full"
              >
                <Input
                  type="text"
                  name="productName"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-[48px] bg-transparent flex-grow"
                  autoComplete="off"
                />

                <Select
                  className="w-[140px] md:w-[160px] ml-2"
                  placeholder="Categoria"
                  options={[
                    { label: "Sem filtro", value: "NDA" },
                    { label: "Roupas", value: "Roupas" },
                    { label: "Acessórios", value: "Acessórios" },
                    { label: "Eletrônicos", value: "Eletrônicos" },
                    { label: "Calçados", value: "Calçados" },
                  ]}
                  onChange={(value) =>
                    setFilterCategory(
                      value === "NDA" ? null : (value as Categories)
                    )
                  }
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Price Range Filter */}
        <motion.div className="mb-6" variants={itemVariants}>
          <PriceRangeFilter
            onPriceRangeChange={handlePriceRangeChange}
            maxPrice={maxProductPrice}
            minPrice={minProductPrice}
          />
        </motion.div>

        {/* Products Grid */}
        {!isLoading && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredByName.length > 0 ? (
              filteredByName.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onLoadingButton={loadingProductId === product.id}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="text-center py-12 col-span-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-500 text-lg">
                  Nenhum produto encontrado.
                </p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Pagination */}
        {filteredByName.length > 0 && !isLoading && (
          <Pagination
            page={pagination.page}
            lastPage={pagination.lastPage}
            onPageChange={(newPage) => handlePageChange(newPage)}
          />
        )}

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        )}
      </motion.main>
    </div>
  );
}
