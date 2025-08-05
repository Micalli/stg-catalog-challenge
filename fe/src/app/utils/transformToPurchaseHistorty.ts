import { CartEntity } from "../entities/Cart";

export async function transformToPurchaseHistory(data: CartEntity[]) {
  const products = data.map((item) => ({
    name: item.product.name,
    price: Number(item.product.price),
    quantity: item.quantity,
  }));

  const totalPrice = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return {
    totalPrice,
    products,
  };
}
