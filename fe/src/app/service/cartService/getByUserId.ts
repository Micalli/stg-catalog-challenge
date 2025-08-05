import { CartEntity } from "../../entities/Cart";
import { httpClient } from "../httpClient";

export async function getByUserId() {
  const { data } = await httpClient.get<CartEntity[]>(`/cart-items`);

  return data;
}
