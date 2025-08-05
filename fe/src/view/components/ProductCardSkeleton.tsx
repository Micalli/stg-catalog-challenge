export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Image skeleton */}
      <div className="w-full h-70 bg-gray-200 animate-pulse">
        <div className="w-full h-full  from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      </div>

      <div className="p-4">
        {/* Title skeleton */}
        <div className="mb-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
        </div>

        {/* Description skeleton */}
        <div className="flex items-center mb-6">
          <div className="h-3 bg-gray-200 rounded w-full animate-pulse" />
        </div>

        {/* Price and button skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
          <div className="h-8 bg-gray-200 rounded w-[125px] animate-pulse" />
        </div>
      </div>
    </div>
  );
} 