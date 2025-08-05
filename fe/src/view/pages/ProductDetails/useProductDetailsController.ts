import { useParams } from "react-router-dom";
import { useProductById } from "../../../app/contexts/hooks/useProductById";
import { useMutation } from "@tanstack/react-query";
import { cartService } from "../../../app/service/cartService";
import toast from "react-hot-toast";
import { useAuth } from "../../../app/contexts/hooks/useAuth";
import { AddParams } from "../../../app/service/cartService/add";

export function useProductDetailsController() {
  const { productId } = useParams();
  const { product, isFetching, error } = useProductById(productId || "");
  const { user } = useAuth();


  

  const { mutateAsync, isPending: isLoadingAddToCart } = useMutation({
    mutationFn: async (data: AddParams) => {
      return cartService.add(data);
    },
  });

  async function handleAddToCart() {
    if (!productId || !user?.id) return;

    try {
      await mutateAsync({ productId, userId: user.id });
      toast.success("Produto adicionado ao carrinho!");
    } catch (error) {
      toast.error("Erro ao adicionar produto ao carrinho!");
    }
  }

  return { 
    productId, 
    product, 
    isFetching, 
    error, 
    handleAddToCart, 
    isLoadingAddToCart 
  };
}
