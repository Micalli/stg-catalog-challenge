import { createContext, useCallback, useState } from "react";

interface ShopContextValue {
  isConfirmationOrderModalOpen: boolean;
  closeConfirmationOrderModal(): void;
  openConfirmationOrderModal(): void;
}

export const ShopContext = createContext({} as ShopContextValue);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [isConfirmationOrderModalOpen, setIsConfirmationOrderModalOpen] =
    useState(false);

  const openConfirmationOrderModal = useCallback(() => {
    setIsConfirmationOrderModalOpen(true);
  }, []);

  const closeConfirmationOrderModal = useCallback(() => {
    setIsConfirmationOrderModalOpen(false);
  }, []);

  return (
    <ShopContext.Provider
      value={{
        isConfirmationOrderModalOpen,
        openConfirmationOrderModal,
        closeConfirmationOrderModal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
