import { httpClient } from "../httpClient";

export interface AddParams {
  productId: string;
  userId?: string;
}

export async function add({ productId, userId }: AddParams) {
  const { data } = await httpClient.post("/cart-items/add", {
    productId,
    userId,
  });

  return data;
}
