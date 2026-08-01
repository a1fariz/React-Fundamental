import React from 'react';

export function Header({ totalMovies, nowShowingCount, offlineCount }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200 sb-nav-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#006241] flex items-center justify-center text-white font-bold text-lg shadow-sm">
              C
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#006241]">
                  CineList
                </h1>
                <span className="px-2.5 py-0.5 text-[11px] font-bold bg-[#d4e9e2] text-[#006241] rounded-full uppercase tracking-wider">
                  Kuis
                </span>
              </div>
              <p className="text-xs text-stone-500 font-normal">
                Daftar Film Bioskop
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#f2f0eb] p-1.5 px-3 rounded-full border border-stone-200 text-xs font-semibold">
            <div className="flex items-center gap-1.5 text-stone-800 px-2 py-1 bg-white rounded-full shadow-xs">
              <span className="text-stone-500 font-normal">Total:</span>
              <span className="font-bold text-[#006241]">{totalMovies}</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#00754A] px-2.5 py-1 bg-[#d4e9e2] rounded-full font-bold">
              <span>🎬 Tayang:</span>
              <span>{nowShowingCount}</span>
            </div>

            <div className="flex items-center gap-1.5 text-rose-800 px-2.5 py-1 bg-rose-100 rounded-full font-bold">
              <span>📦 Off:</span>
              <span>{offlineCount}</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
