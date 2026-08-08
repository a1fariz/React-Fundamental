import React from 'react';
import { Search, SlidersHorizontal, Heart, ArrowUpDown, X } from 'lucide-react';

export default function ProductFilter({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
  onlyWishlist,
  setOnlyWishlist,
  sortBy,
  setSortBy,
  categories,
  statusOptions,
  totalResults,
  products,
}) {
  // Count products per category (from full unfiltered list)
  const categoryCounts = Object.fromEntries(
    categories.map((cat) => [
      cat,
      cat === 'Semua'
        ? products.length
        : products.filter((p) => p.category === cat).length,
    ])
  );

  const hasActiveFilter =
    selectedCategory !== 'Semua' ||
    selectedStatus !== 'Semua Status' ||
    searchQuery.trim() ||
    onlyWishlist;

  const resetAll = () => {
    setSelectedCategory('Semua');
    setSelectedStatus('Semua Status');
    setSearchQuery('');
    setOnlyWishlist(false);
  };

  return (
    <div className="bg-white rounded-2xl p-5 sb-card space-y-4">
      {/* Row 1: Search + Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Cari nama produk (contoh: Caramel Macchiato, Cold Brew)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 bg-stone-50 border border-stone-200 rounded-full text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#00754a]/30 focus:border-[#00754a] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 transition-colors"
              aria-label="Hapus pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Status Filter */}
          <label className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 rounded-full px-3 py-2 text-sm font-medium text-stone-700 cursor-pointer hover:border-stone-300 transition-colors">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#00754a]" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-transparent focus:outline-none cursor-pointer text-sm"
              aria-label="Filter status"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>

          {/* Sort By */}
          <label className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 rounded-full px-3 py-2 text-sm font-medium text-stone-700 cursor-pointer hover:border-stone-300 transition-colors">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#00754a]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent focus:outline-none cursor-pointer text-sm"
              aria-label="Urutkan produk"
            >
              <option value="featured">Rekomendasi</option>
              <option value="price-low">Harga: Terendah</option>
              <option value="price-high">Harga: Tertinggi</option>
              <option value="rating">Rating Tertinggi</option>
              <option value="name">Nama A–Z</option>
            </select>
          </label>

          {/* Wishlist Toggle */}
          <button
            onClick={() => setOnlyWishlist(!onlyWishlist)}
            className={`sb-btn px-4 py-2 text-sm flex items-center gap-1.5 transition-all ${
              onlyWishlist
                ? 'bg-[#12342d] text-white shadow-sm'
                : 'bg-stone-50 border border-stone-200 text-stone-700 hover:border-stone-300'
            }`}
            aria-pressed={onlyWishlist}
          >
            <Heart className={`w-3.5 h-3.5 ${onlyWishlist ? 'fill-white' : ''}`} />
            <span>Wishlist</span>
          </button>
        </div>
      </div>

      {/* Row 2: Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-none">
        <span className="text-xs font-bold text-stone-400 uppercase tracking-[0.12em] mr-1 shrink-0">
          Kategori:
        </span>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`sb-btn px-4 py-1.5 text-sm font-semibold shrink-0 transition-all ${
                isActive
                  ? 'bg-[#00754a] text-white shadow-sm'
                  : 'bg-stone-50 border border-stone-200 text-stone-600 hover:border-stone-300 hover:text-stone-900'
              }`}
            >
              {cat}
              <span className={`ml-1.5 text-[11px] font-bold ${isActive ? 'text-white/70' : 'text-stone-400'}`}>
                ({categoryCounts[cat] ?? 0})
              </span>
            </button>
          );
        })}
      </div>

      {/* Row 3: Result count + Reset */}
      <div className="flex items-center justify-between pt-1 border-t border-stone-100 text-sm text-stone-500">
        <span>
          Menampilkan{' '}
          <strong className="text-stone-800 font-bold">{totalResults}</strong> produk
        </span>
        {hasActiveFilter && (
          <button
            onClick={resetAll}
            className="text-sm text-[#00754a] hover:text-[#006241] font-semibold hover:underline transition-colors"
          >
            Reset filter
          </button>
        )}
      </div>
    </div>
  );
}
