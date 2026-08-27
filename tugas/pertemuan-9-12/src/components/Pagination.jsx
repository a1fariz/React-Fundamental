import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  if (totalPages <= 1) return null;

  // Generate page numbers array using Array.from and .map()
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-[#e6e6e6] mt-10">
      
      {/* Page Info */}
      <p className="text-xs sm:text-sm font-medium text-[#696969]">
        Halaman <span className="font-bold text-[#4a154b]">{currentPage}</span> dari <span className="font-bold text-[#1d1d1d]">{totalPages}</span>
      </p>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
            currentPage === 1
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-50'
              : 'bg-white hover:bg-[#f9f0ff] text-[#4a154b] border border-[#e6e6e6] hover:border-[#4a154b] cursor-pointer shadow-xs'
          }`}
        >
          <ChevronLeft size={16} />
          <span>Previous</span>
        </button>

        {/* Page Number Buttons */}
        <div className="flex items-center gap-1">
          {pageNumbers.map((number) => {
            const isActive = number === currentPage;
            return (
              <button
                key={number}
                onClick={() => onPageChange(number)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#4a154b] text-white shadow-md'
                    : 'bg-white text-[#1d1d1d] hover:bg-[#f9f0ff] hover:text-[#4a154b] border border-[#e6e6e6]'
                }`}
              >
                {number}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
            currentPage === totalPages
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-50'
              : 'bg-white hover:bg-[#f9f0ff] text-[#4a154b] border border-[#e6e6e6] hover:border-[#4a154b] cursor-pointer shadow-xs'
          }`}
        >
          <span>Next</span>
          <ChevronRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default Pagination;
