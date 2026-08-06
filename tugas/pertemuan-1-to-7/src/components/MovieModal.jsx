import React, { useEffect } from 'react';
import { X, Star, Calendar, Clock } from 'lucide-react';

export function MovieModal({ movie, onClose, onToggleFavorite }) {
  // Close on Escape key press (Hook called unconditionally)
  useEffect(() => {
    if (!movie) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [movie, onClose]);

  if (!movie) return null;

  const { id, title, genre, year, duration, rating, showing, favorite, poster, synopsis, director, cast } = movie;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={onClose}
        aria-label="Tutup modal"
      />

      {/* Modal Dialog Surface - Airbnb Modal Style */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-[#dddddd]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#222222] backdrop-blur-md flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Tutup (Esc)"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="overflow-y-auto flex-1">
          
          {/* Header Banner & Poster */}
          <div className="relative w-full h-64 sm:h-72 bg-[#f7f7f7] overflow-hidden">
            <img
              src={poster}
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

            {/* Badges overlay */}
            <div className="absolute bottom-4 left-6 flex flex-wrap items-center gap-2 z-10">
              {showing ? (
                <span className="bg-white text-[#222222] text-xs font-semibold px-3 py-1 rounded-full shadow-md border border-[#dddddd] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  🟢 Sedang Tayang
                </span>
              ) : (
                <span className="bg-white text-[#6a6a6a] text-xs font-semibold px-3 py-1 rounded-full shadow-md border border-[#dddddd] flex items-center gap-1.5">
                  🔴 Tidak Tayang
                </span>
              )}

              {favorite ? (
                <span className="bg-[#ff385c] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  ❤️ Favorite
                </span>
              ) : (
                <span className="bg-white text-[#6a6a6a] text-xs font-medium px-3 py-1 rounded-full shadow-xs border border-[#dddddd] flex items-center gap-1">
                  🤍 Belum Favorite
                </span>
              )}
            </div>
          </div>

          {/* Modal Content Details */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            
            {/* Title & Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#ebebeb]">
              <div>
                <span className="text-xs font-bold text-[#ff385c] uppercase tracking-wider bg-rose-50 px-2.5 py-1 rounded-md border border-rose-100">
                  {genre}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222222] mt-2 tracking-tight">
                  {title}
                </h2>
              </div>

              {/* Rating score */}
              <div className="flex items-center gap-2 bg-[#f7f7f7] border border-[#dddddd] px-4 py-2 rounded-2xl shrink-0 w-fit">
                <Star className="w-5 h-5 fill-[#222222] text-[#222222]" />
                <span className="text-lg font-extrabold text-[#222222]">{rating}</span>
                <span className="text-xs text-[#6a6a6a]">/ 10</span>
              </div>
            </div>

            {/* Meta Row: Year & Duration */}
            <div className="flex items-center gap-6 text-sm text-[#6a6a6a] font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#929292]" />
                <span>Tahun Rilis: <strong className="text-[#222222]">{year}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#929292]" />
                <span>Durasi: <strong className="text-[#222222]">{duration}</strong></span>
              </div>
            </div>

            {/* Synopsis Section */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#222222]">
                Ringkasan Cerita / Sinopsis
              </h3>
              <p className="text-sm text-[#3f3f3f] leading-relaxed bg-[#f7f7f7] p-4 rounded-2xl border border-[#ebebeb]">
                {synopsis}
              </p>
            </div>

            {/* Director & Cast Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-[#f7f7f7] rounded-xl border border-[#ebebeb]">
                <span className="text-[#6a6a6a] font-medium">Sutradara:</span>
                <p className="text-[#222222] font-semibold mt-0.5">{director || 'Christopher Nolan / Studio Direct'}</p>
              </div>
              <div className="p-3.5 bg-[#f7f7f7] rounded-xl border border-[#ebebeb]">
                <span className="text-[#6a6a6a] font-medium">Pemeran Utama:</span>
                <p className="text-[#222222] font-semibold mt-0.5">{cast || 'Aktor Pilihan Utama'}</p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#ebebeb]">
              <button
                onClick={() => onToggleFavorite(id)}
                className={`flex-1 py-3 px-5 rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                  favorite
                    ? 'bg-[#f7f7f7] text-[#ff385c] border border-[#ff385c]/40 hover:bg-rose-50'
                    : 'bg-[#ff385c] text-white hover:bg-[#e00b41]'
                }`}
              >
                {favorite ? (
                  <>
                    <span>❤️</span>
                    <span>Favorit Anda (Klik untuk Hapus)</span>
                  </>
                ) : (
                  <>
                    <span>🤍</span>
                    <span>Tambah ke Favorite</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="py-3 px-6 rounded-full font-semibold text-sm text-[#222222] bg-[#f7f7f7] border border-[#dddddd] hover:bg-[#ebebeb] transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MovieModal;
