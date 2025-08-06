import { shoppingHistoryService } from "../../service/shopping_history";
import { useQuery } from "@tanstack/react-query";

export function useShoppingHistory() {
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ["history"],
    queryFn: () => shoppingHistoryService.getByUserId(),
  });

  return {
    history: data,
    isLoading: isFetching,
    error: isError,
    refetch,
  };
}
