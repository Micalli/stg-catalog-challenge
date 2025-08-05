import { useMemo } from "react";
import { useAuth } from "../../../app/contexts/hooks/useAuth";
import { useCart } from "../../../app/contexts/hooks/useCart";
import { cartService } from "../../../app/service/cartService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { UpdadeQuantityParams } from "../../../app/service/cartService/updateQuantity";
import { formatOrderMessage } from "../../../app/utils/formatOrderMessage";
import { shoppingHistoryService } from "../../../app/service/shopping_history";
import { CreateHistoryParams } from "../../../app/service/shopping_history/create";
import { CartEntity } from '../../../app/entities/Cart';
import { transformToPurchaseHistory } from '../../../app/utils/transformToPurchaseHistorty';

export function useCartController() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { isFetching, productsCart } = useCart();

  const shopping = useMemo(() => {
    const total = productsCart.reduce((acc, item) => {
      const price = Number(item.product.price) || 0;
      return acc + price * item.quantity;
    }, 0);

    const shipping = total >= 100 ? 0 : 15.99;
    return { total, shipping };
  }, [productsCart]);

  const linkWaMe = formatOrderMessage(productsCart, shopping.total, user);

  const handleContinueShopping = () => {
    window.history.back();
  };

  const { mutateAsync: resetCart } = useMutation({
    mutationFn: async () => {
      return cartService.resetCart();
    },
  });
  const { mutateAsync: removeItem, isPending: isLoadingDelete } = useMutation({
    mutationFn: async (cartItemId: string) => {
      return cartService.remove(cartItemId);
    },
  });

  const { mutateAsync: updateQuantity, isPending: isLoadingQuantity } =
    useMutation({
      mutationFn: async (data: UpdadeQuantityParams) => {
        return cartService.updadeQuantity(data);
      },
    });

  const { mutateAsync: updateHistory } = useMutation({
    mutationFn: async (data: CreateHistoryParams) => {
      return shoppingHistoryService.create(data);
    },
  });
  const handleCheckout = async (products: CartEntity[]) => {
    console.log(
      "🚀 ~ handleCheckout ~ products:",
    );
    const rawProducts: CreateHistoryParams = await transformToPurchaseHistory(products)
    await resetCart();
    queryClient.invalidateQueries({ queryKey: ["cart"] });
    await updateHistory(rawProducts)
  };

  const handleRemoveItem = async (cartItemId: string) => {
    try {
      await removeItem(cartItemId);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Item removido do carrinho");
    } catch (error) {
      toast.error("Não foi possivel remover o item.");
    }
  };

  const handleUpdateQuantity = async (
    cartItemId: string,
    newQuantity: number
  ) => {
    try {
      if (newQuantity <= 0) {
        handleRemoveItem(cartItemId);
        return;
      }

      await updateQuantity({ cartItemId, newQuantity });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Quantidade atualizada.");
    } catch (error) {
      toast.error("Não foi possivel atualizar a quantidade.");
    }
  };

  return {
    productsCart,
    isFetching,
    shopping,
    linkWaMe,
    isLoadingQuantity,
    isLoadingDelete,
    handleContinueShopping,
    removeItem,
    handleRemoveItem,
    handleUpdateQuantity,
    handleCheckout,
  };
}
