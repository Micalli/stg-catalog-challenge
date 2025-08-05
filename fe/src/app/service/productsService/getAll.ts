import { Product } from '../../entities/Product';
import { Categories } from '../../types/Categories.type';
import { httpClient } from "../httpClient";

type ProductResponse = {
  data: Product[];
  pagination: {
    total: number;
    page: string;
    lastPage: number;
  };
};

export async function getAll(category: Categories | null) {
  const params = new URLSearchParams();
  if (category) params.append("category", category);

  const { data } = await httpClient.get(`/products?${params.toString()}`);
  return data;
}
