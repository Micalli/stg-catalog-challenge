import { useQuery } from "@tanstack/react-query";
import { productService } from "../../service/productsService";
import { Categories } from '../../types/Categories.type';

export function useProduct(category: Categories | null) {
  const { data, isFetching } = useQuery({
    queryKey: ["products", category],
    queryFn: () => productService.getAll(category),
  });

  return {
    products: data?.products ?? [],
    maxProductPrice: data?.maxProductPrice,
    isFetching,
  };
}
