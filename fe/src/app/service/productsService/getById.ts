import { httpClient } from "../httpClient";
import { Product } from "../../entities/Product";

type ProductResponse = Product;

export async function getById(id: string) {
  const { data } = await httpClient.get<ProductResponse>(`/products/${id}`);
  return data;
} 