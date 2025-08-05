import { Cart } from '../../entities/Cart';
import { httpClient } from "../httpClient";

export async function getByUserId() {
  const { data } = await httpClient.get<Cart[]>(`/cart-items`);

  return data;
}
