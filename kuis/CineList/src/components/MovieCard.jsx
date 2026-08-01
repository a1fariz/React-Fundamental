import React from 'react';

export function MovieCard({ movie }) {
  const { title, genre, releaseYear, rating, isShowing, poster, description } = movie;

  return (
    <div className="bg-white rounded-[12px] border border-stone-200/80 sb-card-shadow sb-card-shadow-hover transition-all duration-300 flex flex-col h-full overflow-hidden group">
      
      {/* Poster Image Container */}
      <div className="relative h-56 w-full bg-[#f2f0eb] overflow-hidden">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        
        {/* Conditional Rendering Status Badge */}
        <div className="absolute top-3 left-3 z-10">
          {isShowing ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00754A] text-white shadow-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              🎬 Sedang Tayang
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#c82014] text-white shadow-md">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              📦 Tidak Tayang
            </span>
          )}
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 bg-[#1E3932] border border-[#cba258] text-[#cba258] px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
          <span>Rating {rating.toFixed(1)}</span>
        </div>

        {/* Release Year Tag */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-[11px] font-semibold text-stone-800 bg-white/95 px-2.5 py-0.5 rounded-full shadow-xs backdrop-blur-sm border border-stone-200">
            Tahun {releaseYear}
          </span>
        </div>
      </div>

      {/* Card Content Surface */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#00754A] mb-1">
            {genre}
          </div>

          <h3 className="text-lg font-bold text-[#006241] tracking-tight group-hover:text-[#00754A] transition-colors line-clamp-1">
            {title}
          </h3>

          <p className="text-stone-600 text-xs mt-2 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-stone-400 font-medium block">Status Bioskop</span>
            <span className={`text-xs font-bold ${isShowing ? "text-[#00754A]" : "text-[#c82014]"}`}>
              {isShowing ? "Tersedia" : "Tidak Tersedia"}
            </span>
          </div>

          <button className="px-4 py-1.5 bg-[#00754A] hover:bg-[#006241] text-white text-xs font-semibold rounded-full sb-pill-btn shadow-xs cursor-pointer">
            {isShowing ? "Pesan Tiket" : "Lihat Detail"}
          </button>
        </div>

      </div>

    </div>
  );
}

export default MovieCard;
