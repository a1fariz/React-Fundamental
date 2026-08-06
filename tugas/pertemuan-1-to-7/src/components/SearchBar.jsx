import React from 'react';
import { Search, X } from 'lucide-react';

export function SearchBar({ searchQuery, setSearchQuery, selectedGenre, setSelectedGenre, genres }) {
  return (
    <div className="w-full flex justify-center">
      
      {/* Airbnb Signature Search Bar Pill */}
      <div className="w-full max-w-4xl bg-white border border-[#dddddd] rounded-full p-2 pl-6 shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center gap-2 min-h-[64px]">
        
        {/* Segment 1: Search Judul Film */}
        <div className="flex-1 w-full flex flex-col justify-center px-3 py-1 cursor-pointer">
          <label className="text-[11px] font-bold tracking-wider text-[#222222] uppercase">
            Cari Judul Film
          </label>
          <div className="relative flex items-center mt-0.5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Contoh: Interstellar..."
              className="w-full bg-transparent text-sm text-[#222222] placeholder-[#929292] font-medium focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#6a6a6a] hover:text-[#222222] p-1 rounded-full transition-colors"
                title="Hapus pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="hidden md:block w-px h-8 bg-[#dddddd]"></div>

        {/* Segment 2: Genre Dropdown */}
        <div className="w-full md:w-56 flex flex-col justify-center px-3 py-1 cursor-pointer">
          <label className="text-[11px] font-bold tracking-wider text-[#222222] uppercase">
            Kategori Genre
          </label>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="w-full bg-transparent text-sm text-[#222222] font-medium focus:outline-none appearance-none cursor-pointer pr-4"
          >
            <option value="All">Semua Genre</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Terminating Rausch Search Orb - Signature Airbnb Orb */}
        <div className="w-full md:w-auto flex justify-end">
          <button
            type="button"
            className="w-full md:w-auto px-6 py-3 md:py-0 md:h-12 bg-[#ff385c] hover:bg-[#e00b41] text-white rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <Search className="w-4 h-4 text-white stroke-[2.5]" />
            <span className="md:inline font-bold">Cari</span>
          </button>
        </div>

      </div>

    </div>
  );
}

export default SearchBar;
