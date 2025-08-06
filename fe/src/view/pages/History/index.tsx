import { Header } from "../../components/Header";
import { HistoryItem } from "../../components/HistoryItem";
import { RefreshCw } from "lucide-react";
import { useHistoryController } from "./useHistoryController";
import { PurchaseHistorySkeleton } from '../../components/PurchaseHistorySkeleton';

export function History() {
  const { history, isLoading, error, refetch } = useHistoryController();

 

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Histórico de Compras
            </h1>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => refetch()}
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Tentar novamente
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Histórico de Compras
          </h1>
          <p className="text-gray-600">
            Acompanhe todas as suas compras realizadas
          </p>
        </div>
        {isLoading && (
          <div className="flex-grow justify-center items-center h-64 ">
            <PurchaseHistorySkeleton />
          </div>
        )}

        {history?.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Nenhuma compra encontrada
              </h3>
              <p className="text-gray-500 mb-6">
                Você ainda não realizou nenhuma compra. Comece a fazer compras
                para ver seu histórico aqui.
              </p>
              <button
                onClick={() => (window.location.href = "/shop")}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ir para a loja
              </button>
            </div>
          </div>
        )}
        {history && !isLoading && (
          <div className="space-y-6">
            {history?.map((item) => (
              <HistoryItem
                key={item.id}
                id={item.id}
                products={item.products}
                totalPrice={item.totalPrice}
                createdAt={item.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
