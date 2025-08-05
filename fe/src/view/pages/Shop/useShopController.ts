import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProduct } from "../../../app/contexts/hooks/useProducts";
import { cartService } from "../../../app/service/cartService";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useAuth } from "../../../app/contexts/hooks/useAuth";
import { AddParams } from "../../../app/service/cartService/add";
import { productService } from "../../../app/service/productsService";
import { Product } from "../../../app/entities/Product";
import { Categories } from "../../../app/types/Categories.type";

export function useShopController() {
  const queryClient = useQueryClient();

  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<Categories | null>(null);
  const [page, setPage] = useState<number>(1);
  const { products, isFetching, maxProductPrice } = useProduct(filterCategory);

  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: maxProductPrice || 1000,
  });

  const { user } = useAuth();

  const { mutateAsync, isPending: isLoadingAddToCar } = useMutation({
    mutationFn: async (data: AddParams) => {
      return cartService.add(data);
    },
  });

  useEffect(() => {
    if (filterCategory) {
      queryClient.invalidateQueries({ queryKey: ["products", filterCategory] });
    }
  }, [filterCategory]);

  async function handleAddToCart(productId: string) {
    try {
      setLoadingProductId(productId);

      await mutateAsync({ productId, userId: user?.id });

      toast.success("Produto adicionado com sucesso!");
    } catch (error) {
      toast.error("Ocorreu um erro ao criar a sua conta!");
    } finally {
      setLoadingProductId(null);
    }
  }

  function handlePriceRangeChange(min: number, max: number) {
    setPriceRange({ min, max });
  }

  // Aplicar filtros
  const filteredProducts =
    products &&
    products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

  return {
    isLoading: isFetching,
    isLoadingAddToCar,
    products: filteredProducts,
    handleAddToCart,
    loadingProductId,
    setFilterCategory,
    handlePriceRangeChange,
    priceRange,
    maxProductPrice,
    minProductPrice: 0,
    user,
  };
}
