import React from "react";
import BookCard from "./BookCard";

const BookList = ({
  books,
  searchQuery,
  statusFilter,
  setStatusFilter,
  categoryFilter,
  setCategoryFilter,
  favorites,
  onToggleFavorite,
  onBorrowReturn,
  onOpenDetail,
  sortOption,
  setSortOption,
  viewMode,
  setViewMode,
  showFavoritesOnly,
  setShowFavoritesOnly,
  onResetFilters,
}) => {
  // 1. Filter logic
  let filteredBooks = books.filter((book) => {
    const matchesSearch =
      searchQuery === "" ||
      book.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.penulis.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "Semua" || book.status === statusFilter;

    const matchesCategory =
      categoryFilter === "Semua" || book.kategori === categoryFilter;

    const matchesFavorite = !showFavoritesOnly || favorites.includes(book.id);

    return matchesSearch && matchesStatus && matchesCategory && matchesFavorite;
  });

  // 2. Sorting logic
  filteredBooks = [...filteredBooks].sort((a, b) => {
    if (sortOption === "terbaru") return b.tahunTerbit - a.tahunTerbit;
    if (sortOption === "terlama") return a.tahunTerbit - b.tahunTerbit;
    if (sortOption === "title-asc") return a.judul.localeCompare(b.judul);
    if (sortOption === "title-desc") return b.judul.localeCompare(a.judul);
    return 0;
  });

  // Calculate live stats
  const totalBuku = books.length;
  const tersediaCount = books.filter((b) => b.status === "Tersedia").length;
  const dipinjamCount = books.filter((b) => b.status === "Dipinjam").length;
  const favoriteCount = favorites.length;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Interactive Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Stat Card */}
        <button
          onClick={() => {
            setStatusFilter("Semua");
            setShowFavoritesOnly(false);
          }}
          className={`p-4 rounded-brand border text-left transition-all duration-200 flex items-center justify-between ${
            statusFilter === "Semua" && !showFavoritesOnly
              ? "bg-canvas border-primary shadow-md ring-2 ring-primary/10"
              : "bg-canvas-soft border-mute/40 hover:border-mute hover:shadow-xs"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ink rounded-brand flex items-center justify-center text-on-primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-body-mid font-medium">Total Koleksi</p>
              <p className="text-ink font-bold text-xl leading-tight">{totalBuku} Buku</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-body-mid">Semua</span>
        </button>

        {/* Tersedia Stat Card */}
        <button
          onClick={() => {
            setStatusFilter("Tersedia");
            setShowFavoritesOnly(false);
          }}
          className={`p-4 rounded-brand border text-left transition-all duration-200 flex items-center justify-between ${
            statusFilter === "Tersedia" && !showFavoritesOnly
              ? "bg-status-available-bg border-status-available shadow-md ring-2 ring-status-available/10"
              : "bg-status-available-bg/50 border-status-available/30 hover:border-status-available hover:shadow-xs"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-available opacity-40"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-status-available"></span>
            </span>
            <div>
              <p className="text-xs text-status-available font-medium">Tersedia</p>
              <p className="text-status-available font-bold text-xl leading-tight">{tersediaCount} Buku</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-status-available">Filter</span>
        </button>

        {/* Dipinjam Stat Card */}
        <button
          onClick={() => {
            setStatusFilter("Dipinjam");
            setShowFavoritesOnly(false);
          }}
          className={`p-4 rounded-brand border text-left transition-all duration-200 flex items-center justify-between ${
            statusFilter === "Dipinjam" && !showFavoritesOnly
              ? "bg-status-borrowed-bg border-status-borrowed shadow-md ring-2 ring-status-borrowed/10"
              : "bg-status-borrowed-bg/50 border-status-borrowed/30 hover:border-status-borrowed hover:shadow-xs"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-status-borrowed flex-shrink-0"></span>
            <div>
              <p className="text-xs text-status-borrowed font-medium">Dipinjam</p>
              <p className="text-status-borrowed font-bold text-xl leading-tight">{dipinjamCount} Buku</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-status-borrowed">Filter</span>
        </button>

        {/* Favorit Stat Card */}
        <button
          onClick={() => {
            setShowFavoritesOnly(!showFavoritesOnly);
          }}
          className={`p-4 rounded-brand border text-left transition-all duration-200 flex items-center justify-between ${
            showFavoritesOnly
              ? "bg-rose-50 border-rose-400 shadow-md ring-2 ring-rose-400/10"
              : "bg-canvas-soft border-mute/40 hover:border-rose-300 hover:shadow-xs"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-100 rounded-brand flex items-center justify-center text-rose-600">
              <svg className="w-5 h-5 fill-rose-600" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-rose-600 font-medium">Favorit Saya</p>
              <p className="text-ink font-bold text-xl leading-tight">{favoriteCount} Buku</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-rose-600">
            {showFavoritesOnly ? "Aktif" : "Lihat"}
          </span>
        </button>
      </div>

      {/* Toolbar & Controls Row */}
      <div className="bg-canvas-soft p-4 rounded-brand border border-mute/50 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Title & Count */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-0.5">
            KOLEKSI PERPUSTAKAAN
          </p>
          <h2 className="text-ink text-xl font-bold tracking-tight flex items-center gap-2">
            {showFavoritesOnly
              ? "Buku Favorit Saya"
              : statusFilter !== "Semua"
              ? `Buku Status ${statusFilter}`
              : categoryFilter !== "Semua"
              ? `Kategori ${categoryFilter}`
              : "Semua Koleksi Buku"}
            <span className="text-xs font-normal text-body-mid bg-canvas px-2.5 py-0.5 rounded-pill border border-mute">
              {filteredBooks.length} dari {totalBuku}
            </span>
          </h2>
        </div>

        {/* View Switcher & Sort Options */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Sort Selection */}
          <div className="flex items-center gap-2">
            <label className="text-xs text-body-mid font-medium hidden md:inline">Urutkan:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-3 py-1.5 bg-canvas border border-mute rounded-brand text-xs font-semibold text-ink focus:outline-none focus:border-primary"
            >
              <option value="terbaru">Terbaru (Tahun)</option>
              <option value="terlama">Terlama (Tahun)</option>
              <option value="title-asc">Judul (A - Z)</option>
              <option value="title-desc">Judul (Z - A)</option>
            </select>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center bg-canvas p-1 rounded-brand border border-mute">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-sm transition-colors ${
                viewMode === "grid"
                  ? "bg-primary text-on-primary shadow-xs"
                  : "text-body-mid hover:text-ink"
              }`}
              title="Tampilan Kartu (Grid)"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-sm transition-colors ${
                viewMode === "list"
                  ? "bg-primary text-on-primary shadow-xs"
                  : "text-body-mid hover:text-ink"
              }`}
              title="Tampilan Tabel (List)"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Book Items Container */}
      {filteredBooks.length > 0 ? (
        viewMode === "grid" ? (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredBooks.map((book, index) => (
              <BookCard
                key={book.id}
                id={book.id}
                judul={book.judul}
                penulis={book.penulis}
                kategori={book.kategori}
                tahunTerbit={book.tahunTerbit}
                status={book.status}
                index={index}
                onBorrowReturn={onBorrowReturn}
                onOpenDetail={onOpenDetail}
                isFavorite={favorites.includes(book.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          /* List View (Table Layout) */
          <div className="bg-canvas border border-mute rounded-brand overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-canvas-soft border-b border-mute text-xs uppercase tracking-wider font-semibold text-body-mid">
                    <th className="py-3.5 px-4">Judul Buku</th>
                    <th className="py-3.5 px-4">Penulis</th>
                    <th className="py-3.5 px-4">Kategori</th>
                    <th className="py-3.5 px-4">Tahun</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mute/40">
                  {filteredBooks.map((book) => {
                    const isAvailable = book.status === "Tersedia";
                    const isFav = favorites.includes(book.id);
                    return (
                      <tr key={book.id} className="hover:bg-canvas-soft/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-ink">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onToggleFavorite(book.id)}
                              className="text-body-mid hover:text-rose-600 transition-colors"
                            >
                              <svg
                                className={`w-4 h-4 ${isFav ? "fill-rose-600 text-rose-600" : ""}`}
                                fill={isFav ? "currentColor" : "none"}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                              </svg>
                            </button>
                            <span
                              onClick={() => onOpenDetail(book.id)}
                              className="hover:text-primary cursor-pointer"
                            >
                              {book.judul}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-body">{book.penulis}</td>
                        <td className="py-3.5 px-4">
                          <span className="text-xs font-medium text-body-mid bg-canvas-soft px-2.5 py-1 rounded-pill border border-mute/50">
                            {book.kategori}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-body-mid text-xs">{book.tahunTerbit}</td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`px-2.5 py-1 rounded-pill text-xs font-bold inline-flex items-center gap-1.5 ${
                              isAvailable
                                ? "bg-status-available-bg text-status-available"
                                : "bg-status-borrowed-bg text-status-borrowed"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                isAvailable ? "bg-status-available" : "bg-status-borrowed"
                              }`}
                            />
                            {book.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => onOpenDetail(book.id)}
                              className="text-xs text-body-mid hover:text-ink font-medium px-2 py-1"
                            >
                              Detail
                            </button>
                            <button
                              onClick={() => onBorrowReturn(book.id)}
                              className={`text-xs font-semibold px-3 py-1.5 rounded-brand transition-all ${
                                isAvailable
                                  ? "bg-primary text-on-primary hover:bg-orange-600"
                                  : "bg-status-available text-on-primary hover:bg-green-700"
                              }`}
                            >
                              {isAvailable ? "Pinjam" : "Kembalikan"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-16 text-center bg-canvas-soft border border-mute/50 rounded-brand p-8">
          <div className="w-16 h-16 bg-canvas rounded-full flex items-center justify-center text-body-mid border border-mute mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <h3 className="text-ink text-lg font-bold mb-1">
            Buku Tidak Ditemukan
          </h3>
          <p className="text-body-mid text-sm max-w-sm mb-5">
            Tidak ada buku yang sesuai dengan pencarian atau filter yang dipilih.
          </p>
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-brand bg-primary text-on-primary text-xs font-semibold hover:bg-orange-600 transition-colors"
          >
            Reset Semua Filter
          </button>
        </div>
      )}
    </section>
  );
};

export default BookList;
