import { Product } from "../../entities/Product";
import { Categories } from "../../types/Categories.type";
import { httpClient } from "../httpClient";

type ProductResponse = {
  products: Product[];
  maxProductPrice: number;
  pagination: {
    total: number;
    page: number;
    lastPage: number;
  };
};

export async function getAll(category: Categories | null, page: number) {
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  params.append("page", page.toString());

  const { data } = await httpClient.get<ProductResponse>(
    `/products?${params.toString()}`
  );
  return data;
}
