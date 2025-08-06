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
  console.log("🚀 ~ ShopProvider ~ isConfirmationOrderModalOpen:", isConfirmationOrderModalOpen)

  const openConfirmationOrderModal = useCallback(() => {
    setIsConfirmationOrderModalOpen(true);
  }, []);
  console.log("🚀 ~ ShopProvider ~ openConfirmationOrderModal:")

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
