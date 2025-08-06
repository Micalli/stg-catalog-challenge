import { useShoppingHistory } from '../../../app/contexts/hooks/useShoppingHistory';

export function useHistoryController() {

  const { history, isLoading } = useShoppingHistory();

  return { history, isLoading };
}