import { Product } from "../../entities/Product";
import { httpClient } from "../httpClient";
type ProductResponse = Array<Product>;

export async function getByCategory(category: string) {
  const { data } = await httpClient.get<ProductResponse>(
    `/products/category/${category}`
  );
  return data;
}
