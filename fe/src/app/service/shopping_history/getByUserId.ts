import { httpClient } from "../httpClient";

export interface ShoppingHistoryItem {
  id: string;
  userId: string;
  products: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  totalPrice: number;
  createdAt: string;
}

export async function getByUserId(): Promise<ShoppingHistoryItem[]> {
  const { data } = await httpClient.get("/shopping-history");
  return data;
} 