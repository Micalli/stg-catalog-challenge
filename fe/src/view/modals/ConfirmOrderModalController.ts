import { useShop } from "../shopContext/useShop";

export function ConfirmOrderModalController() {
  const {
    closeConfirmationOrderModal,
    isConfirmationOrderModalOpen,
    openConfirmationOrderModal,
  } = useShop();

  
  return {
    closeConfirmationOrderModal,
    isConfirmationOrderModalOpen,
    openConfirmationOrderModal,
  };
}
