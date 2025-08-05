import { add } from "./add";
import { getByUserId } from "./getByUserId";
import { remove } from "./remove";
import { resetCart } from './resetCart';
import { updadeQuantity } from './updateQuantity';

export const cartService = {
  add,
  getByUserId,
  remove,
  updadeQuantity,
  resetCart
};
