import React, { useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import { moviesData } from './data/moviesData';

export function App() {
  const totalMovies = moviesData.length;
  const nowShowingCount = moviesData.filter(m => m.isShowing).length;
  const offlineCount = moviesData.filter(m => !m.isShowing).length;

  return (
    <div className="min-h-screen bg-[#f2f0eb] text-stone-900 font-sans antialiased selection:bg-[#00754A] selection:text-white flex flex-col relative">
      
      <Header
        totalMovies={totalMovies}
        nowShowingCount={nowShowingCount}
        offlineCount={offlineCount}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        <div className="relative overflow-hidden bg-[#1E3932] rounded-[12px] p-6 sm:p-10 mb-8 shadow-md border border-[#1E3932]">
          <div className="relative z-10 max-w-2xl text-white">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#cba258]/20 text-[#cba258] border border-[#cba258]/40 mb-3">
              <span>Kuis React Fundamental</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Selamat Datang di CineList
            </h2>
            
            <p className="text-white/70 text-xs sm:text-sm mt-3 leading-relaxed">
              Aplikasi ini menampilkan daftar film bioskop menggunakan Props, List Rendering dengan method <code className="text-[#cba258] bg-[#006241] px-1.5 py-0.5 rounded font-mono text-xs">.map()</code>, dan Conditional Rendering untuk status tayang.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="px-5 py-2.5 bg-white text-[#00754A] hover:bg-stone-100 text-xs font-bold rounded-full sb-pill-btn shadow-xs cursor-pointer">
                Eksplor Daftar Film
              </button>
            </div>

          </div>
        </div>

        <MovieList movies={moviesData} />

      </main>

      <footer className="bg-[#1E3932] text-white py-6 text-center text-xs relative z-10 border-t border-stone-800">
        <p className="text-white/80 font-medium">
          © 2026 CineList - Kuis React Fundamental
        </p>
      </footer>

    </div>
  );
}

export default App;
