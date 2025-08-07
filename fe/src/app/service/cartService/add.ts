import { httpClient } from "../httpClient";

export interface AddParams {
  productId: string;
}

export async function add({ productId }: AddParams) {
  const { data } = await httpClient.post("/cart-items/add", {
    productId,
  });

  return data;
}
