import { httpClient } from "../httpClient";

export interface UpdadeQuantityParams {
  cartItemId: string;
  newQuantity: number;
}

export async function updadeQuantity({
  cartItemId,
  newQuantity,
}: UpdadeQuantityParams) {
  const { data } = await httpClient.post(
    `/cart-items/update/quantity/${cartItemId}`,
    {
      newQuantity,
    }
  );

  return data;
}
