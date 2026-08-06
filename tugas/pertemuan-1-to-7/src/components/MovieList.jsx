import React from 'react';
import MovieCard from './MovieCard';
import { SearchX } from 'lucide-react';

export function MovieList({ movies, onToggleFavorite, onSelectMovie, searchQuery }) {
  if (movies.length === 0) {
    return (
      <div className="w-full py-20 px-4 flex flex-col items-center justify-center text-center bg-[#f7f7f7] border border-[#dddddd] rounded-3xl">
        <div className="w-16 h-16 rounded-full bg-white border border-[#dddddd] flex items-center justify-center text-[#6a6a6a] mb-4 shadow-2xs">
          <SearchX className="w-8 h-8 text-[#929292]" />
        </div>
        <h3 className="text-lg font-bold text-[#222222]">
          Film tidak ditemukan
        </h3>
        <p className="text-sm text-[#6a6a6a] max-w-md mt-1">
          Tidak ada hasil film yang sesuai dengan kata kunci <span className="text-[#ff385c] font-semibold">"{searchQuery}"</span>. Coba ubah pencarian atau filter Anda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleFavorite={onToggleFavorite}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </div>
  );
}

export default MovieList;
