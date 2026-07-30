import React from "react";

const BookDetailModal = ({ book, onClose, onBorrowReturn, isFavorite, onToggleFavorite }) => {
  if (!book) return null;

  const isAvailable = book.status === "Tersedia";

  // Category Icon SVGs
  const renderCategoryIcon = (kategori) => {
    switch (kategori) {
      case "Teknologi":
        return (
          <svg className="w-8 h-8 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "Sejarah":
        return (
          <svg className="w-8 h-8 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        );
      case "Keuangan":
        return (
          <svg className="w-8 h-8 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "Filsafat":
        return (
          <svg className="w-8 h-8 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "Sci-Fi":
        return (
          <svg className="w-8 h-8 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      {/* Modal Card */}
      <div className="bg-canvas border border-mute rounded-brand shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="bg-canvas-soft px-6 py-4 border-b border-mute flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-brand bg-canvas border border-mute/60 flex items-center justify-center">
              {renderCategoryIcon(book.kategori)}
            </div>
            <div>
              <span className="text-xs font-semibold text-body-mid tracking-wide uppercase">
                {book.kategori}
              </span>
              <h3 className="text-ink font-bold text-lg leading-tight">
                Detail Buku
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-body-mid hover:text-ink p-2 rounded-brand hover:bg-canvas transition-colors"
            aria-label="Tutup modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Info Header */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pb-6 border-b border-mute/50">
            <div>
              <h2 className="text-ink font-bold text-2xl leading-tight mb-2">
                {book.judul}
              </h2>
              <p className="text-body text-base font-medium flex items-center gap-2">
                <span className="text-body-mid">Penulis:</span> {book.penulis}
              </p>
            </div>

            {/* Status Pill */}
            <div
              className={`px-3.5 py-1.5 rounded-pill text-xs font-bold flex items-center gap-2 whitespace-nowrap ${
                isAvailable
                  ? "bg-status-available-bg text-status-available"
                  : "bg-status-borrowed-bg text-status-borrowed"
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isAvailable ? "bg-status-available" : "bg-status-borrowed"
                }`}
              />
              {book.status}
            </div>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-canvas-soft p-4 rounded-brand border border-mute/40">
            <div>
              <span className="block text-xs text-body-mid font-medium">Tahun Terbit</span>
              <span className="text-sm font-semibold text-ink">{book.tahunTerbit}</span>
            </div>
            <div>
              <span className="block text-xs text-body-mid font-medium">Lokasi Rak</span>
              <span className="text-sm font-semibold text-ink">{book.rak || "Rak A-04"}</span>
            </div>
            <div>
              <span className="block text-xs text-body-mid font-medium">Jumlah Halaman</span>
              <span className="text-sm font-semibold text-ink">{book.halaman || "320 hal"}</span>
            </div>
            <div>
              <span className="block text-xs text-body-mid font-medium">Rating Pembaca</span>
              <div className="flex items-center gap-1 text-sm font-semibold text-ink">
                <svg className="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{book.rating || "4.8"} / 5.0</span>
              </div>
            </div>
          </div>

          {/* Synopsis / Description */}
          <div>
            <h4 className="text-xs font-bold text-body-mid uppercase tracking-widest mb-2">
              Ringkasan & Sinopsis
            </h4>
            <p className="text-body text-sm leading-relaxed bg-canvas p-4 rounded-brand border border-mute/30">
              {book.sinopsis ||
                `Buku "${book.judul}" karya ${book.penulis} terbit pada tahun ${book.tahunTerbit}. Buku ini termasuk dalam kategori ${book.kategori} yang memberikan wawasan mendalam serta bacaan inspiratif bagi para pembaca di perpustakaan digital LibraryHub.`}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-canvas-soft px-6 py-4 border-t border-mute flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onToggleFavorite(book.id)}
            className={`w-full sm:w-auto px-4 py-2.5 rounded-brand border text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
              isFavorite
                ? "bg-rose-50 border-rose-300 text-rose-600 hover:bg-rose-100"
                : "bg-canvas border-mute text-ink hover:bg-canvas-soft"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 ${isFavorite ? "fill-rose-600 text-rose-600" : "text-body-mid"}`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill={isFavorite ? "currentColor" : "none"}
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            {isFavorite ? "Disimpan di Favorit" : "Tambah ke Favorit"}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-brand border border-mute bg-canvas text-ink hover:bg-canvas-soft font-semibold text-sm transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onBorrowReturn(book.id);
                onClose();
              }}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-brand text-sm font-semibold text-on-primary transition-all shadow-sm ${
                isAvailable
                  ? "bg-primary hover:bg-orange-600"
                  : "bg-status-available hover:bg-green-700"
              }`}
            >
              {isAvailable ? "Pinjam Buku Ini" : "Kembalikan Buku"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
