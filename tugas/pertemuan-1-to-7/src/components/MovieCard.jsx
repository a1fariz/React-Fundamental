import React, { useState } from 'react';
import { Star, Heart, Clock, Calendar, Film, Eye } from 'lucide-react';

export function MovieCard({ movie, onToggleFavorite, onSelectMovie }) {
  const { id, title, genre, year, duration, rating, showing, favorite, poster, synopsis } = movie;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex flex-col bg-white border border-transparent hover:border-[#dddddd] rounded-2xl p-3 transition-all duration-300 hover:shadow-lg">
      
      {/* Photo Plate - Cinema Aspect Ratio 2:3 with Airbnb Rounded XL */}
      <div 
        className="relative aspect-2/3 w-full overflow-hidden rounded-xl bg-[#f2f2f2] cursor-pointer"
        onClick={() => onSelectMovie && onSelectMovie(movie)}
      >
        {!imgError ? (
          <img
            src={poster}
            alt={title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          /* Clean Light Fallback Poster */
          <div className="w-full h-full bg-gradient-to-b from-[#f7f7f7] to-[#e5e5e5] p-4 flex flex-col justify-between text-[#222222] border border-[#dddddd] relative">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#ff385c] shadow-xs">
              <Film className="w-5 h-5" />
            </div>
            <div className="z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#222222] bg-white px-2 py-0.5 rounded-md border border-[#dddddd] inline-block shadow-2xs">
                {genre}
              </span>
              <h3 className="text-sm font-bold mt-2 leading-tight text-[#222222]">
                {title}
              </h3>
              <p className="text-[11px] text-[#6a6a6a] mt-1">{year} • {duration}</p>
            </div>
          </div>
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="bg-white/90 backdrop-blur-xs text-[#222222] text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-[#ff385c]" />
            <span>Lihat Detail</span>
          </span>
        </div>

        {/* Floating Heart Icon Save Button - Airbnb Signature Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(id);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer z-20"
          title={favorite ? 'Hapus dari Favorite' : 'Tambah ke Favorite'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              favorite
                ? 'fill-[#ff385c] text-[#ff385c]'
                : 'text-[#222222] stroke-[2]'
            }`}
          />
        </button>

        {/* Floating Showing Status Badge - Airbnb Floating Pill Badge */}
        <div className="absolute top-3 left-3 z-20">
          {showing ? (
            <span className="bg-white/95 backdrop-blur-xs text-[#222222] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md border border-[#dddddd] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              🟢 Sedang Tayang
            </span>
          ) : (
            <span className="bg-white/95 backdrop-blur-xs text-[#6a6a6a] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md border border-[#dddddd] flex items-center gap-1.5">
              🔴 Tidak Tayang
            </span>
          )}
        </div>

        {/* Floating Favorite Badge - Airbnb Guest Favorite Badge Style */}
        <div className="absolute bottom-3 left-3 z-20">
          {favorite ? (
            <span className="bg-[#ff385c] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
              ❤️ Favorite
            </span>
          ) : (
            <span className="bg-white/90 text-[#6a6a6a] text-[11px] font-medium px-2.5 py-0.5 rounded-full shadow-xs border border-[#dddddd] flex items-center gap-1">
              🤍 Belum Favorite
            </span>
          )}
        </div>
      </div>

      {/* Movie Details - Airbnb Typography System */}
      <div className="flex flex-col flex-1 mt-3 gap-1">
        
        {/* Title & Star Rating Row */}
        <div 
          className="flex items-start justify-between gap-2 cursor-pointer"
          onClick={() => onSelectMovie && onSelectMovie(movie)}
        >
          <h2 className="text-base font-semibold text-[#222222] line-clamp-1 group-hover:text-[#ff385c] transition-colors">
            {title}
          </h2>

          {/* Airbnb Star Rating - Ink Color #222222 */}
          <div className="flex items-center gap-1 text-xs font-semibold text-[#222222] shrink-0 pt-0.5">
            <Star className="w-3.5 h-3.5 fill-[#222222] text-[#222222]" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Meta Info: Genre, Year & Duration */}
        <div className="flex items-center gap-3 text-xs text-[#6a6a6a] font-normal">
          <span className="bg-[#f7f7f7] text-[#222222] font-medium px-2 py-0.5 rounded-md border border-[#ebebeb]">
            {genre}
          </span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#929292]" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#929292]" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Synopsis Excerpt */}
        {synopsis && (
          <p className="text-xs text-[#6a6a6a] line-clamp-2 mt-1 leading-relaxed">
            {synopsis}
          </p>
        )}

        {/* Action Buttons Row */}
        <div className="mt-3 pt-2 flex items-center gap-2">
          <button
            onClick={() => onToggleFavorite(id)}
            className={`flex-1 py-2.5 px-3 rounded-xl font-medium text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              favorite
                ? 'bg-[#f7f7f7] text-[#ff385c] border border-[#ff385c]/30 hover:bg-rose-50 active:scale-95'
                : 'bg-[#222222] text-white hover:bg-black active:scale-95 shadow-xs'
            }`}
          >
            {favorite ? (
              <>
                <span>❤️</span>
                <span>Favorite</span>
              </>
            ) : (
              <>
                <span>🤍</span>
                <span>Favorite</span>
              </>
            )}
          </button>

          <button
            onClick={() => onSelectMovie && onSelectMovie(movie)}
            className="py-2.5 px-3 rounded-xl font-medium text-xs text-[#222222] bg-[#f7f7f7] border border-[#dddddd] hover:bg-[#ebebeb] transition-colors cursor-pointer flex items-center justify-center gap-1"
            title="Lihat Detail Film"
          >
            <Eye className="w-3.5 h-3.5 text-[#6a6a6a]" />
            <span>Detail</span>
          </button>
        </div>

      </div>

    </div>
  );
}

export default MovieCard;
