import { useQuery } from "@tanstack/react-query";
import { cartService } from "../../service/cartService";

export function useCart() {
  const { data, isFetching } = useQuery({
    queryKey: ["cart"],
    queryFn: cartService.getByUserId,
  });

  return { productsCart: data ?? [], isFetching };
}
