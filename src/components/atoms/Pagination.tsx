type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => (
  <div className="flex justify-center items-center gap-2 mt-4 text-white">
    <button
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
      className={`border rounded p-1 px-3 transition ${
        currentPage === 1
          ? 'border-gray-600 text-gray-600 cursor-not-allowed'
          : 'border-gray-400 text-white hover:bg-gray-700'
      }`}
    >
      Anterior
    </button>
    <span className="text-white">{currentPage} / {totalPages}</span>
    <button
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
      className={`border rounded p-1 px-3 transition ${
        currentPage === totalPages
          ? 'border-gray-600 text-gray-600 cursor-not-allowed'
          : 'border-gray-400 text-white hover:bg-gray-700'
      }`}
    >
      Siguiente
    </button>
  </div>
);
