import React from 'react';
import { Film, Radio, Heart } from 'lucide-react';

export function StatsCard({ totalMovies, showingCount, favoriteCount }) {
  return (
    <section aria-label="Statistik Film" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Total Film */}
        <div className="bg-white border border-[#dddddd] rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6a6a6a]">
                Total Film
              </p>
              <h3 className="text-3xl font-extrabold text-[#222222] mt-1">
                {totalMovies}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#f7f7f7] border border-[#dddddd] flex items-center justify-center text-[#222222]">
              <Film className="w-5 h-5 text-[#222222]" />
            </div>
          </div>
          <p className="text-xs text-[#6a6a6a] mt-2">Koleksi terdaftar</p>
        </div>

        {/* Sedang Tayang */}
        <div className="bg-white border border-[#dddddd] rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                Sedang Tayang
              </p>
              <h3 className="text-3xl font-extrabold text-[#222222] mt-1">
                {showingCount}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <p className="text-xs text-[#6a6a6a] mt-2">Tersedia di bioskop</p>
        </div>

        {/* Favorite */}
        <div className="bg-white border border-[#dddddd] rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#ff385c]">
                Favorite
              </p>
              <h3 className="text-3xl font-extrabold text-[#222222] mt-1">
                {favoriteCount}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#ff385c]">
              <Heart className="w-5 h-5 fill-[#ff385c]" />
            </div>
          </div>
          <p className="text-xs text-[#6a6a6a] mt-2">Film yang Anda sukai</p>
        </div>

      </div>
    </section>
  );
}

export default StatsCard;
