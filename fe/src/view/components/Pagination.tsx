interface PaginationProps {
  page: number;
  lastPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, lastPage, onPageChange }: PaginationProps) {
  const pages = [];

  for (let i = 1; i <= lastPage; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition-all ${
          i == page
            ? "bg-blue-600 text-white"
            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex space-x-1 mt-4 justify-center">
      {page > 1 && (
        <button
          onClick={() => onPageChange(page - 1)}
          className="px-3 py-2 text-sm font-medium rounded-md text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 cursor-pointer"
        >
          Anterior
        </button>
      )}

      {pages}

      {page < lastPage && (
        <button
          onClick={() => onPageChange(page + 1)}
          className="px-3 py-2 text-sm font-medium rounded-md text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 cursor-pointer"
        >
          Próximo
        </button>
      )}
    </div>
  );
}
