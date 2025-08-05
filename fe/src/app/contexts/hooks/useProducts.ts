import { useQuery } from "@tanstack/react-query";
import { productService } from "../../service/productsService";
import { Categories } from '../../types/Categories.type';

export function useProduct(category: Categories | null, page: number) {
  const { data, isFetching } = useQuery({
    queryKey: ["products", category, page],
    queryFn: () => productService.getAll(category, page), 
  });

  return {
    products: data?.products ?? [],
    maxProductPrice: data?.maxProductPrice ?? 1000,
    pagination: data?.pagination ?? { total: 36, page: 1, lastPage: 4 },
    isFetching,
  };
}

