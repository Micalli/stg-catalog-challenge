import { useContext } from "react";
import { ShopContext } from '.';

export function useShop() {
  return useContext(ShopContext);
}
