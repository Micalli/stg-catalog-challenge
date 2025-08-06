export function PurchaseHistorySkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200 animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="h-5 w-32 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
        <div className="text-right">
          <div className="h-5 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Produtos */}
      <div className="space-y-3">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex-1">
              <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 w-20 bg-gray-200 rounded"></div>
            </div>
            <div className="text-right">
              <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
