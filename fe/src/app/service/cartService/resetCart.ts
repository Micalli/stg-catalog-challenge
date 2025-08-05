import { httpClient } from "../httpClient";

export async function resetCart() {
  const { data } = await httpClient.delete(`/cart-items/reset/`);

  return data;
}
