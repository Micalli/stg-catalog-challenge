import { httpClient } from "../httpClient";

export async function remove(cartItemId:string) {
  const { data } = await httpClient.delete(`/cart-items/remove/${cartItemId}`);

  return data;
}
