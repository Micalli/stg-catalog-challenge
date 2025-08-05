import { Cart } from "../entities/Cart";
import { User } from '../entities/User';
import { formatCurrency } from './formatCurrency';

export function formatOrderMessage(productsCart: Cart[], total: number, user?: User) {
  const mensagem = `
NOVO PEDIDO - STG CATALOG 
Cliente: ${user?.name} 
Email: ${user?.email} 
PRODUTOS: 
${productsCart
  .map(
    (p) =>
      `- ${p.product.name} - Qtd: ${p.quantity} - R$ ${Number(
        p.product.price
      ).toFixed(2)}`
  )
  .join("\n")}
TOTAL: R$ ${formatCurrency(total)}
`;

  const linkWaMe = `https://wa.me/+5511992283695?text=${encodeURIComponent(
    mensagem
  )}`;

  return linkWaMe
}
