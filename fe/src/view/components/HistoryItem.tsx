import { Link } from "react-router-dom";
import { formatCurrency } from "../../app/utils/formatCurrency";
import { formatDate } from "../../app/utils/formatDate";
import { motion } from "framer-motion";
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

export function HistoryItem({
  id,
  products,
  totalPrice,
  createdAt,
}: HistoryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Compra #{id.slice(-8)}
          </h3>
          <p className="text-sm text-gray-500">{formatDate(createdAt)}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-green-600">
            {formatCurrency(totalPrice)}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
          >
            <div>
              <Link to={`/product/${product.id}`}>
                <p className="font-medium text-gray-900 hover:underline">
                  {product.name}
                </p>
              </Link>
              <p className="text-sm text-gray-500">Qtd: {product.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">
                {formatCurrency(product.price)}
              </p>
              <p className="text-sm text-gray-500">
                Total: {formatCurrency(product.price * product.quantity)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
