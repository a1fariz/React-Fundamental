import React, { useState } from 'react';
import MovieCard from './MovieCard';

export function MovieList({ movies }) {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          movie.genre.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterStatus === 'showing') return matchesSearch && movie.isShowing;
    if (filterStatus === 'offline') return matchesSearch && !movie.isShowing;
    return matchesSearch;
  });

  return (
    <section className="py-6">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-[12px] border border-stone-200/80 sb-card-shadow">
        
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-5 py-2 text-xs font-semibold sb-pill-btn cursor-pointer ${
              filterStatus === 'all'
                ? 'bg-[#00754A] text-white shadow-sm'
                : 'bg-[#f2f0eb] text-[#00754A] border border-[#00754A]/30 hover:bg-[#d4e9e2]'
            }`}
          >
            Semua Film ({movies.length})
          </button>
          <button
            onClick={() => setFilterStatus('showing')}
            className={`px-5 py-2 text-xs font-semibold sb-pill-btn cursor-pointer ${
              filterStatus === 'showing'
                ? 'bg-[#00754A] text-white shadow-sm'
                : 'bg-[#f2f0eb] text-[#00754A] border border-[#00754A]/30 hover:bg-[#d4e9e2]'
            }`}
          >
            🎬 Sedang Tayang ({movies.filter(m => m.isShowing).length})
          </button>
          <button
            onClick={() => setFilterStatus('offline')}
            className={`px-5 py-2 text-xs font-semibold sb-pill-btn cursor-pointer ${
              filterStatus === 'offline'
                ? 'bg-[#c82014] text-white shadow-sm'
                : 'bg-[#f2f0eb] text-[#c82014] border border-[#c82014]/30 hover:bg-rose-100'
            }`}
          >
            📦 Tidak Tayang ({movies.filter(m => !m.isShowing).length})
          </button>
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Cari film atau genre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f2f0eb] border border-stone-300 text-stone-900 placeholder-stone-400 text-xs rounded-full px-4 py-2.5 focus:outline-none focus:border-[#00754A] focus:ring-1 focus:ring-[#00754A] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-2.5 text-stone-400 hover:text-stone-700 text-xs font-bold"
            >
              x
            </button>
          )}
        </div>

      </div>

      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-[12px] border border-stone-200 sb-card-shadow">
          <h3 className="text-lg font-bold text-[#006241]">Tidak ada film yang cocok</h3>
          <p className="text-xs text-stone-500 mt-1">Coba gunakan kata kunci pencarian lain atau ganti filter kategori.</p>
        </div>
      )}

    </section>
  );
}

export default MovieList;
