import { httpClient } from "../httpClient";

export interface CreateHistoryParams {
  totalPrice: number;
  products: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
}

export async function create({ products, totalPrice }: CreateHistoryParams) {
  const { data } = await httpClient.post("/shopping-history", {
    products,
    totalPrice,
  });

  return data;
}
