import React from "react";

const BookCard = ({
  id,
  judul,
  penulis,
  kategori,
  tahunTerbit,
  status,
  index,
  onBorrowReturn,
  onOpenDetail,
  isFavorite,
  onToggleFavorite,
}) => {
  const isAvailable = status === "Tersedia";

  // Render vector SVG icon per category instead of emoji
  const renderCategorySvg = (cat) => {
    switch (cat) {
      case "Novel":
        return (
          <svg className="w-10 h-10 text-ink/75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case "Self-Help":
        return (
          <svg className="w-10 h-10 text-ink/75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "Sejarah":
        return (
          <svg className="w-10 h-10 text-ink/75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        );
      case "Keuangan":
        return (
          <svg className="w-10 h-10 text-ink/75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "Teknologi":
        return (
          <svg className="w-10 h-10 text-ink/75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "Filsafat":
        return (
          <svg className="w-10 h-10 text-ink/75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return (
          <svg className="w-10 h-10 text-ink/75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
    }
  };

  const coverGradients = [
    "from-orange-100 to-amber-50 border-orange-200",
    "from-rose-100 to-pink-50 border-rose-200",
    "from-sky-100 to-blue-50 border-sky-200",
    "from-emerald-100 to-green-50 border-emerald-200",
    "from-violet-100 to-purple-50 border-violet-200",
    "from-amber-100 to-yellow-50 border-amber-200",
    "from-teal-100 to-cyan-50 border-teal-200",
    "from-stone-200 to-stone-50 border-stone-300",
  ];

  const gradientClass = coverGradients[index % coverGradients.length];

  return (
    <div className="bg-canvas-soft rounded-brand shadow-card card-hover-lift hover:shadow-card-hover border border-mute/40 hover:border-primary/40 flex flex-col overflow-hidden animate-fade-in group h-full">
      {/* Cover Header */}
      <div className={`bg-gradient-to-br ${gradientClass} h-36 border-b flex items-center justify-center relative overflow-hidden`}>
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-px bg-ink-mid w-full mt-6"></div>
          <div className="h-px bg-ink-mid w-full mt-6"></div>
          <div className="h-px bg-ink-mid w-full mt-6"></div>
        </div>

        {/* Book Spine Simulation */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/10"></div>

        {/* Favorite / Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(id);
          }}
          className="absolute top-3 left-4 p-1.5 rounded-full bg-canvas/80 hover:bg-canvas backdrop-blur-xs text-ink transition-colors shadow-xs z-10"
          title={isFavorite ? "Hapus dari Favorit" : "Simpan ke Favorit"}
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
        </button>

        {/* Status Badge floating */}
        <div
          className={`absolute top-3 right-3 px-2.5 py-1 rounded-pill text-xs font-bold flex items-center gap-1.5 shadow-xs z-10 ${
            isAvailable
              ? "bg-status-available-bg text-status-available"
              : "bg-status-borrowed-bg text-status-borrowed"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full flex-shrink-0 ${
              isAvailable ? "bg-status-available" : "bg-status-borrowed"
            }`}
          />
          {status}
        </div>

        {/* Category Icon SVG */}
        <div className="z-0 transition-transform duration-300 group-hover:scale-110">
          {renderCategorySvg(kategori)}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category Badge & Year */}
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-semibold text-body-mid bg-canvas px-2.5 py-1 rounded-pill border border-mute/50">
            {kategori}
          </span>
          <span className="text-xs text-mute font-medium">{tahunTerbit}</span>
        </div>

        {/* Title (clickable to open detail modal) */}
        <h3
          onClick={() => onOpenDetail(id)}
          className="text-ink font-bold text-base leading-snug mb-1.5 group-hover:text-primary transition-colors duration-200 line-clamp-2 cursor-pointer"
        >
          {judul}
        </h3>

        {/* Author */}
        <p className="text-body text-sm mb-4 flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-body-mid flex-shrink-0"
          >
            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.25 1.25 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
          </svg>
          {penulis}
        </p>

        {/* Divider */}
        <div className="h-px bg-mute/40 mb-4 mt-auto"></div>

        {/* Action Row */}
        <div className="flex items-center justify-between gap-2">
          {/* Detail Link */}
          <button
            onClick={() => onOpenDetail(id)}
            className="text-xs text-body-mid hover:text-ink font-medium transition-colors"
          >
            Lihat Detail
          </button>

          {/* Pinjam / Kembalikan Action Button */}
          <button
            onClick={() => onBorrowReturn(id)}
            className={`text-xs font-semibold px-4 py-2 rounded-brand transition-all duration-200 shadow-xs ${
              isAvailable
                ? "bg-primary text-on-primary hover:bg-orange-600 hover:shadow-md"
                : "bg-status-available text-on-primary hover:bg-green-700 hover:shadow-md"
            }`}
          >
            {isAvailable ? "Pinjam Buku" : "Kembalikan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
