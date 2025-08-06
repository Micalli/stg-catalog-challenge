import { useShoppingHistory } from '../../../app/contexts/hooks/useShoppingHistory';

export function useHistoryController() {

  const { history, isLoading, error, refetch } = useShoppingHistory();

  return { history, isLoading, error, refetch };
}