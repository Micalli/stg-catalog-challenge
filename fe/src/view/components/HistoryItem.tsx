import { Link } from 'react-router-dom';
import { formatCurrency } from '../../app/utils/formatCurrency';

interface HistoryItemProps {
  id: string;
  products: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  totalPrice: number;
  createdAt: string;
}

export function HistoryItem({ id, products, totalPrice, createdAt }: HistoryItemProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Compra #{id.slice(-8)}</h3>
          <p className="text-sm text-gray-500">{formatDate(createdAt)}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-green-600">{formatCurrency(totalPrice)}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        {products.map((product, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
            <div className="flex-1">
              <Link to={`/product/${product.id}`}>
              <p className="font-medium text-gray-900 hover:underline">{product.name}</p>
              </Link>
              <p className="text-sm text-gray-500">Qtd: {product.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">{formatCurrency(product.price)}</p>
              <p className="text-sm text-gray-500">Total: {formatCurrency(product.price * product.quantity)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 