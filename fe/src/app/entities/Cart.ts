import { Product } from './Product';

export interface CartEntity {
  id: string;
  quantity: number;
  product: Product;
}
