import React from 'react';
import { Search, MapPin, CheckCircle, ArrowUpDown, X, RotateCcw } from 'lucide-react';
import { locationsList, statusList } from '../data/jobs';

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  selectedLocation,
  setSelectedLocation,
  selectedStatus,
  setSelectedStatus,
  sortOption,
  setSortOption,
  onResetFilters,
  totalFiltered
}) => {
  const isFiltered = searchTerm !== '' || selectedLocation !== 'Semua' || selectedStatus !== 'Semua' || sortOption !== 'default';

  return (
    <div className="bg-white rounded-3xl border border-[#e6e6e6] p-5 sm:p-6 shadow-sm mb-8 space-y-4">
      
      {/* Search Input Bar */}
      <div className="relative flex items-center">
        <Search className="absolute left-4 text-[#696969] pointer-events-none" size={20} />
        <input
          type="text"
          placeholder="Cari berdasarkan nama pekerjaan (contoh: Frontend, Designer, Engineer)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-10 py-3 sm:py-3.5 bg-slate-50 text-[#1d1d1d] rounded-2xl border border-[#e6e6e6] placeholder-[#696969]/70 font-medium text-sm sm:text-base focus:bg-white focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 focus:outline-none transition-all duration-200"
        />
        {searchTerm && (
          <button
            className="absolute right-3.5 text-[#696969] hover:text-[#4a154b] p-1 rounded-full hover:bg-slate-200 transition-colors"
            onClick={() => setSearchTerm('')}
            aria-label="Clear Search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Filter and Sorting Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
        
        {/* Filter Lokasi */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-[#696969] flex items-center gap-1">
            <MapPin size={14} className="text-[#4a154b]" />
            Filter Lokasi
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#e6e6e6] rounded-xl text-xs sm:text-sm font-medium text-[#1d1d1d] focus:bg-white focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 focus:outline-none transition-colors cursor-pointer"
          >
            {locationsList.map((loc) => (
              <option key={loc} value={loc}>
                {loc === 'Semua' ? 'Semua Lokasi' : loc}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Status */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-[#696969] flex items-center gap-1">
            <CheckCircle size={14} className="text-[#007a5a]" />
            Filter Status
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#e6e6e6] rounded-xl text-xs sm:text-sm font-medium text-[#1d1d1d] focus:bg-white focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 focus:outline-none transition-colors cursor-pointer"
          >
            {statusList.map((st) => (
              <option key={st} value={st}>
                {st === 'Semua' ? 'Semua Status' : st}
              </option>
            ))}
          </select>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-[#696969] flex items-center gap-1">
            <ArrowUpDown size={14} className="text-[#1264a3]" />
            Urutkan (Sorting)
          </label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#e6e6e6] rounded-xl text-xs sm:text-sm font-medium text-[#1d1d1d] focus:bg-white focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 focus:outline-none transition-colors cursor-pointer"
          >
            <option value="default">Default (Urutan Asli)</option>
            <option value="name-asc">Nama Pekerjaan (A - Z)</option>
            <option value="salary-lowest">Gaji Terendah</option>
            <option value="salary-highest">Gaji Tertinggi</option>
          </select>
        </div>

        {/* Reset Filter Button */}
        <div className="flex flex-col justify-end">
          <button
            onClick={onResetFilters}
            disabled={!isFiltered}
            className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ${
              isFiltered
                ? 'bg-[#f9f0ff] hover:bg-[#4a154b] text-[#4a154b] hover:text-white cursor-pointer'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-60'
            }`}
          >
            <RotateCcw size={15} />
            Reset Filter
          </button>
        </div>

      </div>

      {/* Active Filter Chips */}
      {isFiltered && (
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#e6e6e6] text-xs">
          <span className="font-semibold text-[#696969]">Ditemukan: {totalFiltered} lowongan</span>
          {searchTerm && (
            <span className="px-2.5 py-1 rounded-full bg-[#f9f0ff] text-[#4a154b] font-medium border border-[#4a154b]/20">
              Kata Kunci: "{searchTerm}"
            </span>
          )}
          {selectedLocation !== 'Semua' && (
            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[#1d1d1d] font-medium border border-[#e6e6e6]">
              Lokasi: {selectedLocation}
            </span>
          )}
          {selectedStatus !== 'Semua' && (
            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[#1d1d1d] font-medium border border-[#e6e6e6]">
              Status: {selectedStatus}
            </span>
          )}
          {sortOption !== 'default' && (
            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[#1d1d1d] font-medium border border-[#e6e6e6]">
              Sort: {
                sortOption === 'name-asc' ? 'Nama A-Z' :
                sortOption === 'salary-lowest' ? 'Gaji Terendah' : 'Gaji Tertinggi'
              }
            </span>
          )}
        </div>
      )}

    </div>
  );
};

export default SearchBar;
