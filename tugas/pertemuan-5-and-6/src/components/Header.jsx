import React, { useState } from "react";

const Header = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  categoryFilter,
  setCategoryFilter,
  onOpenAddModal,
  favoritesCount,
  showFavoritesOnly,
  setShowFavoritesOnly,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    "Semua",
    "Novel",
    "Self-Help",
    "Sejarah",
    "Keuangan",
    "Teknologi",
    "Filsafat",
    "Sci-Fi",
    "Memoar",
  ];

  const statuses = ["Semua", "Tersedia", "Dipinjam"];

  return (
    <>
      {/* Sticky Top Nav Bar */}
      <header className="bg-canvas border-b border-mute sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-brand flex items-center justify-center flex-shrink-0 shadow-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-on-primary"
                >
                  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
              </div>
              <div>
                <h1 className="text-ink font-bold text-xl leading-none tracking-tight">
                  LibraryHub
                </h1>
                <p className="text-body-mid text-xs leading-none mt-1">
                  Perpustakaan Digital
                </p>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#koleksi"
                onClick={() => setShowFavoritesOnly(false)}
                className={`text-sm font-medium transition-colors ${
                  !showFavoritesOnly ? "text-ink font-semibold" : "text-body hover:text-ink"
                }`}
              >
                Koleksi Buku
              </a>
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  showFavoritesOnly ? "text-primary font-semibold" : "text-body hover:text-ink"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 ${showFavoritesOnly ? "fill-primary text-primary" : ""}`}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill={showFavoritesOnly ? "currentColor" : "none"}
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                Favorit Saya
                {favoritesCount > 0 && (
                  <span className="px-1.5 py-0.2 text-xs bg-rose-100 text-rose-600 rounded-full font-bold">
                    {favoritesCount}
                  </span>
                )}
              </button>
              <a href="#tentang" className="text-body text-sm hover:text-ink transition-colors font-medium">
                Tentang
              </a>
            </nav>

            {/* CTA Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenAddModal}
                className="bg-primary text-on-primary text-xs font-semibold px-4 py-2.5 rounded-brand hover:bg-orange-600 transition-all shadow-xs flex items-center gap-1.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Tambah Buku
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-brand text-ink hover:bg-canvas-soft transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-canvas-soft border-t border-mute px-4 py-4 space-y-3 animate-fade-in">
            <a
              href="#koleksi"
              onClick={() => {
                setShowFavoritesOnly(false);
                setMobileMenuOpen(false);
              }}
              className="block text-body text-sm font-medium py-1 hover:text-ink"
            >
              Koleksi Buku
            </a>
            <button
              onClick={() => {
                setShowFavoritesOnly(!showFavoritesOnly);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-body text-sm font-medium py-1 hover:text-ink"
            >
              Favorit Saya ({favoritesCount})
            </button>
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-body text-sm font-medium py-1 hover:text-ink"
            >
              Tentang
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAddModal();
              }}
              className="w-full bg-primary text-on-primary text-xs font-semibold px-4 py-2.5 rounded-brand hover:bg-orange-600 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Tambah Buku Baru
            </button>
          </div>
        )}
      </header>

      {/* Hero Search Section (Scrolls naturally with page) */}
      <div id="koleksi" className="bg-ink py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
            PERPUSTAKAAN DIGITAL MODERN
          </p>
          <h2 className="text-on-primary text-2xl sm:text-3xl font-bold leading-tight mb-2 tracking-tight">
            Temukan dan Kelola Koleksi Buku Anda
          </h2>
          <p className="text-body-mid text-sm mb-6 max-w-xl">
            Cari berdasarkan judul atau penulis, filter berdasarkan kategori dan status peminjaman.
          </p>

          {/* Search Bar Input */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-body-mid"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                id="search-input"
                type="text"
                placeholder="Cari judul buku atau nama penulis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-canvas text-ink placeholder-body-mid rounded-brand border border-mute text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-body-mid hover:text-ink"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Filter Options Row */}
          <div className="flex flex-wrap items-center gap-4 mt-5 pt-4 border-t border-ink-mid/40">
            {/* Status Filter Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-body-mid text-xs font-semibold uppercase tracking-wide">Status:</span>
              <div className="flex gap-1.5">
                {statuses.map((s) => (
                  <button
                    key={s}
                    id={`filter-status-${s}`}
                    onClick={() => {
                      setStatusFilter(s);
                      setShowFavoritesOnly(false);
                    }}
                    className={`px-3 py-1 rounded-pill text-xs font-semibold transition-all border ${
                      statusFilter === s && !showFavoritesOnly
                        ? "bg-primary text-on-primary border-primary"
                        : "bg-canvas/10 text-mute border-mute/30 hover:bg-canvas/20 hover:text-on-primary"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Dropdown Filter */}
            <div className="flex items-center gap-2">
              <span className="text-body-mid text-xs font-semibold uppercase tracking-wide">Kategori:</span>
              <select
                id="filter-category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-1 rounded-brand text-xs font-semibold bg-canvas/10 text-mute border border-mute/30 focus:outline-none focus:border-primary hover:bg-canvas/20 cursor-pointer transition-all"
              >
                {categories.map((c) => (
                  <option key={c} value={c} className="text-ink bg-canvas">
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
