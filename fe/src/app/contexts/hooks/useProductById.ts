import { useQuery } from "@tanstack/react-query";
import { productService } from "../../service/productsService";

export function useProductById(id: string) {
  const { data, isFetching, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productService.getById(id),
    enabled: !!id,
  });

  return { product: data, isFetching, error };
} 